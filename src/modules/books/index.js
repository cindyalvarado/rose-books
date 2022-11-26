import React from 'react'
import PageContainer from 'containers/page-container'
import { Text, TextNormal, TextBold } from 'components/text'
import SorceSorcerie from './source-sorcerie'
import ShopNow from './shop-now'
import Birds from './birds'
import Points from './points'
import './styles.css'
import OpinionsCarousel from './opinions-carousel'

const BooksPage = () => {
  return (
    <PageContainer className="books-page">
      <div className="d-flex ml-5 pl-5">
        <Text className="books-title" text="livres" />
      </div>
      <div className="d-flex flex-column flex-md-row mt-2">
        <SorceSorcerie className="flex-1" />
        <div className="flex-1 book-description p-4">
          <TextBold className="flex-1 text-justify" text="Embarquez dans une aventure fantasy teintée de romance, d’humour et d’amitiés qui défient les âges" />
          <TextNormal
            text="Adélaïde, dix-huit ans, rêve de devenir sorcière dans un monde où la magie n’existe pas. 
            Quand ses parents la forcent à travailler à l’usine, elle s’enfuit en Écosse, ce pays de contes et de 
            légendes où elle espère se sentir pleinement vivante. Là-bas, elle rencontre une vieille archéologue 
            au secret ancestral bien gardé. Alors que les deux amies tentent de percer ce mystère sur l’île aux Selkies,
             elles font une découverte extraordinaire."
            className="mt-4 text-justify"
          />
          <TextNormal
            text="Dans le monde de Ghörm, Adélaïde touche enfin à son rêve. 
              Mais devenir sorcière n’est pas de tout repos. 
              Lorsqu’elle apprend que le destin de la nature et de l’humanité 
              est entre ses mains, elle doit se montrer à la hauteur du défi."
            className="mt-4 text-justify"
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <ShopNow />
        <Birds />
      </div>
      <div className="d-flex flex-column m-auto mt-4">
        <Text className="opinions-title" text='quelques avis' />
        <OpinionsCarousel />
      </div>
    </PageContainer>
  )
}


export default BooksPage