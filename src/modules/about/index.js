import { Text, TextBold, TextNormal } from "components/text";
import PageContainer from "containers/page-container"
import Birds from "./birds";
import FunFact from "./fun-fact";
import RosePortrait from "./rose-portrait";
import "./styles.css"

const About = () => {
  return (
    <PageContainer className="about-page">
      <RosePortrait />
      <div className="d-flex flex-column p-4 p-md-5">
        <TextBold className="text-center mb-4" text="Rose K. Beira est écrivaine, conteuse et narratrice de livres audio." />
        <TextNormal className="text-justify" text="Originaire de France, elle vit à l’étranger et voyage 
      au gré du vent et des saisons, en fonction de ses projets et de ses envies. 
      Elle obtient sa licence en littérature et civilisations américaine et britannique, 
      option écriture créative, tout en habitant en Écosse. 
      C’est en s’installant à Édimbourg qu’elle apprend l’art du conte traditionnel 
      en compagnie de David Campbell et Ruth Kirkpatrick, 
      deux maîtres conteurs reconnus comme des pionniers de la 
      tradition orale. Son premier roman, Source Sorcière, 
      est inspiré de cette expérience magique, qu’elle tient à honorer dans ses histoires." />
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <Birds />
        <FunFact />
      </div>
    </PageContainer>
  );
}

export default About;