import Birds from 'assets/birds.png'
import Points from 'assets/points-portrait.png'
import './styles.css'

const BirdsTeam = ({ className }) => {
  return (
    <div className="team-birds flex-1">
      <img className="team-birds-img" src={Birds} alt="books-pic" />
      <img className="team-points-img" src={Points} alt="points" />
    </div>
  )
}

export default BirdsTeam