import React from 'react'
import './intro.css'
import introImg from '../../../../images/introimg.png'
import check from '../../../../images/check.png'
const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-container'>
        <img src={introImg} className="intro-img" alt='introImage' />
        <div className="intro-text">
          <h2 className='intro-title'>VOTRE AGENCE WEB ET MOBILE À LYON</h2>
          <p className='intro-p'>Penseurs créatifs, marketeurs technophiles, amoureux des marques <br />
            et toujours au service de vous objectifs d'affaires. Notre agence à <br />
            Lyon vous accompagne dans le développement de sites web et les</p>
          <div className="intro-lines">
            <div className='line'>
              <img src={check} className='check' alt='check' />
              <p>Notre expertise nous <br />permet une vision globale de la <br />réalité de nos clients et <br />justifie l'importance <br />
                inestimable de la qualité <br />dans les réalisations de nos <br />mandats.</p>
            </div>
            <div className="line">
              <img src={check} className='check' alt='check' />
              <p>C'est pourquoi autant de<br />clients de toute la France, de<br />la suisse nous font <br /> confiance dans la réalistion <br />de leurs projets interactifs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro