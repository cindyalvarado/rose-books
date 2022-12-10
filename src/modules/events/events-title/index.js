import EventsTitleImg from 'assets/events-title.png'
import PointsImg from 'assets/points-portrait.png'
import { Text } from 'components/text'
import './styles.css'

const EventsTitle = ({ eventTitle }) => {
  return (
    <div className="d-flex justify-content-center align-items-start flex-1 events-title">
      <img className='events-title-points d-lg-block d-none' src={PointsImg} alt="points-events-img" />
      <img className="events-title-img" src={EventsTitleImg} alt="events-title-img" />
      <Text className="events-title-text" text={eventTitle} />
    </div>
  )
}

export default EventsTitle