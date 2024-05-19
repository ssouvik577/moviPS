import React from 'react'
import "./style.scss"
import UseFetch from '../../hooks/UseFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videoFetch/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

function Details() {

  const { mediaType, id } = useParams();
  console.log(mediaType, id, '-----++=--10')
  const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`); // api call
  const { data: credits, loading: creditsLoading } = UseFetch(`/${mediaType}/${id}/credits`); // api call

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details