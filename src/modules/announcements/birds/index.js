import BirdsImg from 'assets/birds.png'
import './styles.css'

const Birds = () => {
  return (
    <div className='announcements-birds'>
      <img className='announcements-birds-img' src={BirdsImg} alt="birds-announcements" />
    </div>
  )
}

export default Birds;