import './text.css'

const TextNormal = ({ className, text }) => {
  return (
    <div className={`${className} text-normal`} >
      {text}
    </div>
  );
}

export default TextNormal;