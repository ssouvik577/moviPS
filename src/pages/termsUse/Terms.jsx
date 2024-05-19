import React from 'react'
import HeroBanner from '../home/heroBanner/HeroBanner'
import './style.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

function Terms() {
  return (
    <div>
      <HeroBanner />
      <ContentWrapper>
      <div className='infoText'>
        <h2>Welcome to MoviPS!</h2>
        <span>By accessing and using MoviPS (the "Website"), you agree to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern your relationship with MoviPS in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</span>
        <br />
        <span>The term "MoviPS" or "us" or "we" refers to the owner of the website. The term "you" refers to the user or viewer of our website.</span>
        <br />
        <h2>Use of API</h2>
        <span>
          Our website utilizes the API services provided by <a href="https://www.themoviedb.org/" target='_blank'>The Movie Database (TMDB)</a>. By using our website, you agree to abide by TMDB's Terms of Use and API Terms of Service.
          You understand and acknowledge that the movie data displayed on our website, including but not limited to movie titles, descriptions, images, and trailers, are sourced from TMDB's API.
          You agree not to misuse or abuse the TMDB API, including but not limited to excessive or unauthorized API requests, reverse engineering, or circumventing TMDB's rate limits.
        </span>
        <br />
        <h2>
          Intellectual Property
        </h2>
        <span>
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
        </span>
        <br />
        <h2>Limitation of Liability</h2>
        <span>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</span>
        <br />
        <h2>
          Changes to Terms of Use
        </h2>
        <span>
          We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Use.

          It is your responsibility to review these Terms of Use periodically for changes.
        </span>
        <br />
        <h2>
          Thank you for using MoviPS!
        </h2>
      </div>
      </ContentWrapper>
    </div>
  )
}

export default Terms