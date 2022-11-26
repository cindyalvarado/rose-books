import { useEffect, useState } from 'react'
import Instagram from 'assets/instagram.png'
import Email from 'assets/email.png'
import { TextNormal } from 'components/text'
import './styles.css'

const email = "rose.k.beira@gmail.com"

const Footer = ({ children, className }) => {
  const windowWidth = useWindowWidth();

  function useWindowWidth() {
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <div className='footer pb-3'>
      <div className='icon-wrap mb-1'>
        <a href='https://www.instagram.com/rose.k.beira' target="_blank" rel="noopener noreferrer">
          <img className='footer-insta' src={Instagram} alt="insta" />
        </a>
        <a onClick={() => { navigator.clipboard.writeText(email) }}
          href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" >
          <img className='footer-email' src={Email} alt="email" />
        </a>
      </div>
      {windowWidth > 550 ?
        <TextNormal text="Mentions Légales - CGV - ©2021 Rose K. Beira- Tous droits réservés" /> :
        <>
          <TextNormal text="Mentions Légales - CGV" />
          <TextNormal text="©2021 Rose K. Beira- Tous droits réservés" />
        </>
      }
    </div>
  )
}

export default Footer;