import BirdsImg from 'assets/birds.png'

const Birds = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <img style={{ maxWidth: "80%" }} src={BirdsImg} />
    </div>
  )
}

export default Birds;