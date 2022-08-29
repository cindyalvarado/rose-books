import Portrait from 'assets/picture-rose.png'
import ImageLink from 'components/image-link'
import Text from 'components/text'
import './styles.css'

const RosePortrait = ({ className }) => {
  return (
    <ImageLink>
      <Text className="title" text="à propos" />
      <img src={Portrait} />
    </ImageLink>
  )
}

export default RosePortrait