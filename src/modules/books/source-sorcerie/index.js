import SourceSorcerieImg from 'assets/source-sorciere.png'
import './styles.css'

const SorceSorcerie = ({ className }) => {
  return (
    <div className={`d-flex justify-content-center align-items-center source-sorcerie ${className}`}>
      <img src={SourceSorcerieImg} alt='source-sorcerie' style={{ maxHeight: 500 }} />
    </div>
  )
}

export default SorceSorcerie;