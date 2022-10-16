import PineappleImg from 'assets/pineapple-ann.png'
import './styles.css'

const Pineapple = () => {
  return (
    <div className='announcements-pineapple'>
      <img className='announcements-pineapple-img' src={PineappleImg} alt="pineapple-announcements" />
    </div>
  )
}

export default Pineapple;