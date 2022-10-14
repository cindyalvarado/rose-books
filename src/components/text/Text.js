import './text.css'

const Text = ({ className, text }) => {
  return (
    <div className={`${className} text`} >
      {text}
    </div>
  );
}

export default Text;