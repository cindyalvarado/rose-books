import Person1 from 'assets/person-1.png'
import Person2 from 'assets/boyfriend.png'
import Person3 from 'assets/person-3.png'
import Person4 from 'assets/person-4.png'
import Pencil from 'assets/pencil.gif'
import Launch from 'assets/launch.png'
import { Text } from 'components/text';
import './styles.css'


const Person = ({ src, alt }) => {
  return (
    <img className='person col-sm-6 col-md-4 col-6' src={src} alt={alt} />
  )
}

const TeamPictures = () => {
  return (
    <div className='team-pictures container mt-4'>
      <div className='row'>
        <Person src={Person1} alt='person-1' />
        <Person src={Person2} alt='person-2' />
        <Person src={Person3} alt='person-3' />
        <Person src={Person4} alt='person-4' />
        <Person src={Launch} alt='launch' />
        <Person src={Pencil} alt='pencil' />
      </div>
    </div>
  )
}

export default TeamPictures;