import './text.css'

const TextNormalGrey = ({ className, text }) => {
  return (
    <div className={`${className} text-normal-grey`} >
      {text}
    </div>
  );
}

export default TextNormalGrey;