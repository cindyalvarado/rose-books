import Person1 from 'assets/person-1.png'
import Person2 from 'assets/boyfriend.png'
import Person3 from 'assets/person-3.png'
import Person4 from 'assets/person-4.png'
import Pencil from 'assets/pencil.gif'
import Launch from 'assets/launch.png'
import { Text, TextNormal } from 'components/text';
import './styles.css'


const Person = ({ src, alt, text, title }) => {
  return (
    <div class="img-wrap col-sm-6 col-md-4 col-6">
      <img className='person col-12' src={src} alt={alt} />
      <div className="img-description p-4">
        <Text className="text-center mt-1" text={title} />
        <TextNormal className="text-center mt-1 mt-lg-5" text={text} />
      </div>
    </div>
  )
}

const Other = ({ src, alt }) => {
  return (
    <div class="img-wrap col-sm-6 col-md-4 col-6">
      <img className='person col-12' src={src} alt={alt} />
    </div>
  )
}


const TeamPictures = () => {
  return (
    <div className='team-pictures container mt-4'>
      <div className='row'>
        <Person src={Person1} title="Rose K. Beira" text="Chargée d'édition" alt='person-1' />
        <Person src={Person2} title="Issa Dioume" text="Éditeur en chef diplômé à l'université de Creative Writing d'Édimbourg" alt='person-2' />
        <Person src={Person3} title="Aimé Lesot" text="Responsable mise en page diplômé à l'université d'édition de Caen" alt='person-3' />
        <Person src={Person4} title="Barbara de Armorim" text="Correctrice 1000/1000 au certificat Voltaire" alt='person-4' />
        <Person src={Launch} title="Dane chez @ebooklaunch" text="Illustrateur de la couverture de Source Sorcière" alt='launch' />
        <Other src={Pencil} alt='pencil' />
      </div>
    </div>
  )
}

export default TeamPictures;