import React, { useEffect, useState } from 'react'
import { useSinglePrismicDocument } from '@prismicio/react'
import { isEmpty } from 'lodash'
import moment from 'moment'

import PageContainer from 'containers/page-container'
import EventsTitle from './events-title'
import EventsInfo from './events-info'
import EventsMap from 'assets/events-map.png'
import Birds from './birds'
import Points from './points'
import './styles.css'


moment.locale('fr')

const Events = () => {
  const [data] = useSinglePrismicDocument('events');
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPlaceUrl, setEventPlaceUrl] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [eventPlaceName, setEventPlaceName] = useState("");
  const [eventAddress, setEventAddress] = useState("");

  useEffect(() => {
    //If the opinions value changes, do something
    if (!isEmpty(data)) {
      setEventTitle(data?.data?.event_title?.[0]?.text)
      setEventDescription(data?.data?.event_description?.[0]?.text)
      setEventDate(moment(data?.data?.event_date_time).format("Do MMMM YYYY"))
      setEventTime(moment(data?.data?.event_date_time).format("hh:mm"))
      setEventPlaceName(data?.data?.event_place_name?.[0]?.text)
      setEventPlaceUrl(data?.data?.event_place?.url)
      setEventAddress(data?.data?.address?.[0]?.text)
      setEventUrl(data?.data?.link?.url)
    }
  }, [data]);

  return (
    <PageContainer className="events-page">
      <EventsTitle eventTitle={eventTitle} />
      <div className="d-flex flex-column flex-lg-row mt-2">
        <img style={{ maxWidth: 300, maxHeight: 400, marginLeft: 60 }} className='flex-1 d-lg-block d-none' src={EventsMap} alt='events-map' />
        <EventsInfo
          eventTitle={eventTitle}
          eventDescription={eventDescription}
          eventDate={eventDate}
          eventTime={eventTime}
          eventPlaceName={eventPlaceName}
          eventPlaceUrl={eventPlaceUrl}
          eventAddress={eventAddress}
          eventUrl={eventUrl}
        />
      </div>
      <div className="d-flex flex-row">
        <Birds />
        <Points />
      </div>
    </PageContainer>
  )
}


export default Events