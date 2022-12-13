import BtnImg from 'assets/button.png'
import { Text, TextNormal } from 'components/text'
import { useEffect, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './styles.css'

const RegisterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email
      })
  }

  useEffect(() => {
    if (status === "success") setEmail('');
  }, [status])


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: 250 }}>
      {status === "success" ?
        <Text className="text-center reg-thanks-text" text="Vous vous êtes inscrit avec succès, merci!" />
        :
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center mt-5">
          <input
            disabled={status === "sending"}
            placeholder="écrivez votre e-mail ici"
            className="news-reg-input"
            type="email"
            onChange={handleChange}
            value={email}
          />
          <button type="submit" className="d-flex justify-content-center align-items-start reg-form-btn">
            <img className="reg-form-btn-img" src={BtnImg} />
            <Text className="reg-form-btn-text" text="s'abonner" />
          </button>
        </form>
      }
    </div>
  )
}


const MailchimpForm = props => {
  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <RegisterForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}

export default MailchimpForm;