import PointsImg from 'assets/points-portrait.png'
import './styles.css'

const Points = () => {
  return (
    <div className="announcements-points">
      <img className="announcements-points-img" src={PointsImg} alt="points" />
    </div>
  )
}

export default Points;