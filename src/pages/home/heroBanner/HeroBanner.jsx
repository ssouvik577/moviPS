import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useFetcher, useNavigate } from 'react-router-dom'
import UseFetch from '../../../hooks/UseFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

function HeroBanner() {

  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")

  const navigate = useNavigate()
  const { url } = useSelector((state) => state.home)
  const { data, loading } = UseFetch("/movie/upcoming")

  // Change background (pick a random image from first 20 response of api calling)
  useEffect(() => {
    const bg_url = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg_url)
  }, [data])

  // Handel search query
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" || e.type === "click" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">

      {/* background image */}
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome...</span>
          <span className="subTitle">
            Millions of movies, TV shows to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV Show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner