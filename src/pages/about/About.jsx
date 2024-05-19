import React from 'react'
import HeroBanner from '../home/heroBanner/HeroBanner'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import "./style.scss"
import pixels from '../../assets/pexels.jpg'
import Img from '../../components/lazyLoadImage/Img'

function About() {
  return (
    <div>
      <HeroBanner />
      <ContentWrapper>
      <div className='infoText'>
        <h2>About Me.</h2>
        <span>Hello there! I'm Souvik, a passionate Python Django developer venturing into the world of full-stack development. Movips is my first solo project, born out of my desire to expand my skill set and explore the exciting realms of JavaScript and ReactJS.</span>
        <br />
        <span>As an experienced Python Django developer with a solid foundation in MySQL, MongoDB, and AWS, I embarked on the challenging yet rewarding journey of becoming a full-stack developer. Inspired by my company work and fueled by a thirst for knowledge, I immersed myself in learning JavaScript and ReactJS, paving the way for the creation of Movips.</span>
        <br />
        <span>Thank you for being a part of my first project!s</span>
      </div>
      </ContentWrapper>
    </div>
  )
}

export default About