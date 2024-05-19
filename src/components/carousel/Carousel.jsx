import React, { useRef } from "react";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./style.scss";

function Carousel({ data, loading, endpoint, title }) {
    const CarouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container = CarouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="Carousel">
            <ContentWrapper>
            {title && <div className="carouselTitle">{title}</div>}
                <IoIosArrowDropleftCircle 
                    className="CarouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <IoIosArrowDroprightCircle 
                    className="CarouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (<div className="CarouselItems" ref={CarouselContainer}>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                        return (
                            <div key={item.id} className="CarouselItem" onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${
                                                item.id
                                            }`
                                        )
                                    }>
                                <div className="posterBlock">
                                    <Img src={posterUrl} />
                                    <CircleRating rating={item.vote_average.toFixed(1)} />
                                    <Genres
                                        data={item.genre_ids.slice(0, 2)}
                                    />
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_date).format("MMM D, YYYY")}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Carousel