import ShopNowImg from 'assets/shop-now.png'
import { Text } from 'components/text'
import './styles.css'

const amazonUrl = "https://www.amazon.es/Source-Sorci%C3%A8re-Rose-K-Beira/dp/2492956008/ref=sr_1_1?qid=1665676816&refinements=p_27%3ARose+Issa&s=books&sr=1-1"

const ShopNow = () => {
  return (
    <div className="d-flex justify-content-center align-items-start flex-1">
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className='shop-now'>
        <img style={{ maxWidth: 550 }} src={ShopNowImg} alt="shop-now" />
        <Text className="shop-price" text="14,99 €" />
      </a>
    </div>
  )
}

export default ShopNow