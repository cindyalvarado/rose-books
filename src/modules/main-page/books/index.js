import BooksPicture from 'assets/book-gif.gif'
import ImageLink from 'components/image-link'
import Text from 'components/text'
import './styles.css'

const Books = ({ className }) => {
  return (
    <ImageLink>
      <Text className="title-books" text="livres"/>
      <img src={BooksPicture} />
    </ImageLink>
  )
}

export default Books