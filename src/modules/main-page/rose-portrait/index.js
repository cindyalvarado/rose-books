import Portrait from 'assets/picture-rose.png'
import ImageLink from 'components/image-link'
import { Text } from 'components/text'
import Leaf from 'assets/leafes.png'
import Points from 'assets/points-portrait.png'
import './styles.css'

const RosePortrait = ({ className }) => {
  return (
    <ImageLink to="/about">
      <Text className="title" text="à propos" />
      <img src={Leaf} className="leaf" alt="leaf" />
      <img src={Points} className="points" alt="points" />
      <img src={Portrait} alt="portrait" />
    </ImageLink>

  )
}

export default RosePortrait