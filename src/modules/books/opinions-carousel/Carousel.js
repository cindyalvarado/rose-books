import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { map } from "lodash";

import PrevArrow from 'assets/prev-arrow.png'
import NextArrow from 'assets/next-arrow.png'
import FiveStars from 'assets/five-stars.png'
import { TextBold, TextNormal, TextNormalGrey } from "components/text";
import "./styles.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item-custom">
      <div className="carousel-item-content">
        <div className="carousel-content-header">
          <TextBold text="witch_lecture" />
          <TextNormalGrey text="05 juliet 2022" />
          <div>
            <img style={{ flex: 0, width: 80, height: 20, alignSelf: "center" }} src={FiveStars} alt='five-stars' />
          </div>
        </div>
        <TextNormal
          className="text-justify carousel-text"
          text="Content here, content here, making it 
        look like readable English. Many desktop 
        publishing packages and web page editors now
         use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      </div>
    </div>
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
    }, 3000);

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
    <div className="carousel-wrapper-custom">
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
