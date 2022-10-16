import Portrait from 'assets/portrait-aboutpage.png'
import { Text } from 'components/text'
import Leaf from 'assets/leafes.png'
import Points from 'assets/points-portrait.png'
import './styles.css'

const RosePortrait = ({ className }) => {
  return (
    <div className='about-portrait-container'>
      <Text className="about-title" text="à propos" />
      <img src={Leaf} className="about-leaf" alt="leaf" />
      <img src={Points} className="about-points" alt="points" />
      <img src={Portrait} className="about-portrait" alt="portrait" />
    </div>
  )
}

export default RosePortrait