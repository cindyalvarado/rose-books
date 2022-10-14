import './text.css'

const TextBold = ({ className, text }) => {
  return (
    <div className={`${className} text-bold`} >
      {text}
    </div>
  );
}

export default TextBold;