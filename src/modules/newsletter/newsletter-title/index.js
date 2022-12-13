import NewsTitleImg from 'assets/treesnews.png'
import { Text } from 'components/text'
import './styles.css'

const NewsTitle = ({ }) => {
  return (
    <div className="d-flex justify-content-center align-items-start flex-1 news-title">
      <img className="news-title-img" src={NewsTitleImg} alt="news-title-img" />
      <Text className="news-title-text" text='la newsletter des 4 saisons' />
    </div>
  )
}

export default NewsTitle