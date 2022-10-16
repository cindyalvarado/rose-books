import Moon from 'assets/moon-team.png'
import Face from 'assets/face.png'
import "./styles.css"
import BirdsTeam from '../birds'
import { Text } from 'components/text'

const TeamTitle = ({ className }) => {
  return (
    <div className="moon-team d-flex flex-column flex-md-row">
      <img className="face-img" src={Face} alt="face" />
      <img className="moon-team-img flex-1" src={Moon} alt="moon-team" />
      <Text text="équipe éditoriale" className="moon-title" />
      <BirdsTeam />
    </div>
  )
}

export default TeamTitle