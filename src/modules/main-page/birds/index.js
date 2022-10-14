import Birds from 'assets/birds.png'
import Points from 'assets/points-portrait.png'
import './styles.css'

const BirdsSubtitle = ({ className }) => {
  return (
    <div className="subtitle-birds">
      <img className="subtitle-birds-img" src={Birds} alt="books-pic" />
      <img className="subtitle-points-img" src={Points} alt="points" />
    </div>
  )
}

export default BirdsSubtitle