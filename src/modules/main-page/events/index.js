import EventsMapImg from "assets/events-map-main.png"
import ImageLink from "components/image-link"
import { Text } from "components/text"
import './styles.css'


const Events = ({ className }) => {
  return (
    <ImageLink className="flex-1 mb-5" to="/events">
      <Text className="title-events" text="évènements" />
      <img style={{ maxWidth: 400 }} src={EventsMapImg} alt="moon" />
    </ImageLink>
  )
}

export default Events

