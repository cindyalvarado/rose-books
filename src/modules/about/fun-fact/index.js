import WizzardStick from 'assets/about-stick.png'
import { Text } from 'components/text';
import './styles.css'

const FunFact = () => {
  return (
    <div className="fun-fact d-flex justify-content-center align-items-center flex-1 mt-md-0 mt-4">
      <Text className="flex-1 text-center fun-fact-text p-3" text="Fun Fact ! Fut un temps, Rose vendait des baguettes Harry Potter à Diagon Alley (Victoria Street, Édimbourg)" />
      <img className='about-stick' src={WizzardStick} alt='wizzard-stick' />
    </div>
  )
}

export default FunFact;