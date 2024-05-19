import React from 'react'
import HeroBanner from '../home/heroBanner/HeroBanner'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

function Privacy() {
  return (
    <div>
        <HeroBanner />
        <ContentWrapper>
        <div className="infoText">
            <span>Your privacy is important to us. It is MoviPS's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</span>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default Privacy