import PointsImg from 'assets/points-portrait.png'
import './styles.css'

const Points = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-1 points-img">
      <img style={{ maxWidth: 500 }} src={PointsImg} alt="points" />
    </div>
  )
}

export default Points;