import React from 'react'
import { TextBold, TextNormal } from "components/text"
import PageContainer from 'containers/page-container'
import NewsTitle from './newsletter-title'
import RegisterForm from './newsletter-register'
import Birds from 'assets/birds.png'
import PointsNews from 'assets/points-portrait.png'
import TreesCircle from 'assets/treesCircle.png'
import Smile from 'assets/smiley.png'

import './styles.css'

const NewsletterPage = () => {
  return (
    <PageContainer className="newsletter-page">
      <NewsTitle />
      <div className='news-text'>
        <TextBold text='Tente de gagner un livre dédicacé et/ou des goodies chaque année !' />
        <TextNormal className="mt-3" text="Et oui, c'est possible ! Il suffit de s'abonner à la newsletter des quatre saisons. 
        Un tirage au sort sera organisé au printemps, en été, en automne et en hiver. Tu recevras donc 4 mails par an.
        Ils contiendront des news sur Rose K. Beira, ses nouvelles parutions, une célébration de la saison du moment et bien-sûr ; 
        le nom du livre et/ou des goodies à remporter durant cette période de l'année."/>
        <TextNormal className="mt-3" text="L'heureux vinqueur sera ensuite contacté par mail pour mettre en place l'envoi du colis !" />
        <TextBold text="N'attend, plus. Tente ta chance !" />
        <img className="news-smile" src={Smile} alt="news-smile" />
        <img className="d-none d-md-block news-points" src={PointsNews} alt="news-points" />
        <img className="d-none d-md-block news-birds" src={Birds} alt="news-birds" />
      </div>
      <RegisterForm />
      <img className="flex-1 circle" src={TreesCircle} alt="treesCircle" />
    </PageContainer>
  )
}


export default NewsletterPage