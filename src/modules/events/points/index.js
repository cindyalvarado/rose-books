import PointsImg from 'assets/points-portrait.png'
import './styles.css'

const Points = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-2 points-events d-none d-lg-block">
      <img style={{ minWidth: 500 }} src={PointsImg} alt="points" />
    </div>
  )
}

export default Points;