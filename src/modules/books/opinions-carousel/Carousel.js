import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { map, range } from "lodash";
import moment from "moment";
import "moment/locale/fr";

import PrevArrow from 'assets/prev-arrow.png'
import NextArrow from 'assets/next-arrow.png'
import Star from 'assets/star.png'
import { TextBold, TextNormal, TextNormalGrey } from "components/text";
import "./styles.css";

moment.locale('fr')

export const CarouselItem = ({ user, date, stars, title, description }) => {
  return (
    <div className="carousel-item-custom">
      <div className="carousel-item-content">
        <div className="carousel-content-header">
          <TextBold text={user} />
          <TextNormalGrey text={moment(date).format("Do MMMM YYYY")} />
          <div style={{ flex: 0 }}>
            {map(range(stars), star =>
              <img id={star.id} style={{ width: 20, height: 20 }} src={Star} alt='five-stars' />
            )}
          </div>
        </div>
        <TextNormal
          className="text-justify carousel-text"
          text={description}
        />
      </div>
    </div >
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 8000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div className="carousel-wrapper-custom mt-1">
      <div
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
        style={{ cursor: 'pointer' }}
      >
        <img className="carousel-arrow" src={PrevArrow} alt="prev-arrow" />
      </div>
      <div
        {...handlers}
        className="carousel-custom"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inner-custom"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>
      </div>
      <div
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
        style={{ cursor: 'pointer' }}
      >
        <img className="carousel-arrow" src={NextArrow} alt="prev-arrow" />
      </div>
    </div>
  );
};

export default Carousel;
