import CalendarIcon from 'assets/calendar-icon.png'
import TimeIcon from 'assets/time-icon.png'
import LocationIcon from 'assets/location-icon.png'
import UrlIcon from 'assets/web-icon.png'
import EventsMap from 'assets/events-map.png'
import { TextBold, TextNormal } from 'components/text'
import './styles.css'

const EventsInfo = ({ eventDescription, eventDate, eventTime, eventPlaceName, eventPlaceUrl, eventAddress, eventUrl }) => {
  return (
    <div className="d-flex justify-content-center align-items-start flex-2 events-info">
      <div className='d-flex events-info-container'>
        <div className='d-flex'>
          <img style={{ flex: 1, maxWidth: 150, maxHeight: 200, marginRight: 20 }} className='d-none d-sm-block d-lg-none mt-2' src={EventsMap} alt='events-map' />
          <div className='d-flex flex-column flex-2'>
            <div className='d-flex align-items-center mb-4'>
              <img style={{ width: 20, height: 20, marginRight: 12 }} src={CalendarIcon} alt="calendar-icon" />
              <TextBold text={eventDate} />
            </div>
            <div className='d-flex align-items-center mb-4'>
              <img style={{ width: 20, height: 20, marginRight: 12 }} src={TimeIcon} alt="time-icon" />
              <TextBold text={eventTime} />
            </div>
            <div className='d-flex align-items-center mb-4'>
              <img style={{ width: 20, height: 25, marginRight: 12 }} src={LocationIcon} alt="location-icon" />
              <div className='d-flex flex-column'>
                <a className='link' href={eventPlaceUrl} target="_blank" rel="noopener noreferrer" >
                  <TextNormal text={eventPlaceName} />
                </a>
                <TextNormal text={eventAddress} />
              </div>
            </div>
            {eventUrl &&
              <div className='d-flex align-items-center mb-4'>
                <img style={{ width: 20, height: 20, marginRight: 12 }} src={UrlIcon} alt="url-icon" />
                <a className='link' href={eventUrl} target="_blank" rel="noopener noreferrer">
                  <TextNormal text={eventUrl} />
                </a>
              </div>
            }
          </div>
        </div>
        <TextNormal text={eventDescription} />
      </div>
    </div>
  )
}

export default EventsInfo