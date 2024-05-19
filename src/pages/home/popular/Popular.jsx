import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import UseFetch from '../../../hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'

function Popular() {
  const [endPoint, setEndPoint] = useState("movie")
  const {data, loading} = UseFetch(`/${endPoint}/popular`);

  console.log(data?.results,'----11')

  const onTabChange = (tab) => {
    console.log(tab,'tab--12')
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    <div className='CarouselSection'>
        <ContentWrapper>
            <span className="CarouselTitle">What's Popular</span>
            <SwitchTab data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  );
}

export default Popular