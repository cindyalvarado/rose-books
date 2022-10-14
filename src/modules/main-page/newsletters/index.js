import NewslettersImage from "assets/trees.png"
import ImageLink from "components/image-link"
import { Text } from "components/text"
import './styles.css'


const Newsletters = ({ className }) => {
  return (
    <ImageLink style={{ flex: 'none' }}>
      <Text className="title-newsletters" text="la newsletter des 4 saisons" />
      <img style={{ maxWidth: '100vw' }} src={NewslettersImage} alt="newsletter-img" />
    </ImageLink>
  )
}

export default Newsletters