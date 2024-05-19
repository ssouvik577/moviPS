import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import UseFetch from '../../../hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'

function Trending() {
  const [endPoint, setEndPoint] = useState("day")
  const {data, loading} = UseFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    console.log(tab,'tab--12')
    setEndPoint(tab === "Day" ? "day" : "week");
  }

  return (
    <div className='CarouselSection'>
        <ContentWrapper>
            <span className="CarouselTitle">Trending</span>
            <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  );
}

export default Trending