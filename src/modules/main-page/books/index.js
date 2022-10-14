import BooksPicture from 'assets/book-gif.gif'
import ImageLink from 'components/image-link'
import { Text } from 'components/text'
import './styles.css'

const Books = ({ className }) => {
  return (
    <ImageLink to="/books">
      <Text className="title-books" text="livres" />
      <img src={BooksPicture} alt="books-pic" />
    </ImageLink>
  )
}

export default Books