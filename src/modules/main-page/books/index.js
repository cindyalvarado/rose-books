import BooksPicture from 'assets/book.png'
import ImageLink from 'components/image-link'

const Books = ({ className }) => {
  return (
    <ImageLink>
      <img style={{ height: '60%' }} src={BooksPicture} />
    </ImageLink>
  )
}

export default Books