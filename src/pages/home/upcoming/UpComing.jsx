import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import UseFetch from '../../../hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'

function UpComing() {
  const [endPoint, setEndPoint] = useState("movie")
  const {data, loading} = UseFetch('/movie/upcoming');

  const onTabChange = (tab) => {
    console.log(tab,'tab--12')
    setEndPoint(tab === "Movies" ? "movie" : "movie");
  }

  return (
    <div className='CarouselSection'>
        <ContentWrapper>
            <span className="CarouselTitle">Upcoming</span>
            <SwitchTab data={["Movies"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  );
}

export default UpComing