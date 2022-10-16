import BirdsImg from 'assets/birds.png'

const Birds = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <img style={{ maxHeight: 150 }} src={BirdsImg} alt="birds-img" />
    </div>
  )
}

export default Birds;