import Pineapple from "assets/pineapple.png"
import { Text } from "components/text"
import ImageLink from "components/image-link"
import './styles.css'


const Trailers = ({ className }) => {
  return (
    <ImageLink to="/announcements">
      <Text className="title-trailers" text="vidéos" />
      <img className="img-trailers" src={Pineapple} alt="img-trailers" />
    </ImageLink>
  )
}
export default Trailers