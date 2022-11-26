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

export const CarouselItem = ({ key, user, date, stars, title, description }) => {
  return (
    <div key={key} className="carousel-item-custom">
      <div className="carousel-item-content">
        <div className="carousel-content-header">
          <div className="carousel-content-subheader">
            <TextBold text={user} />
            <TextNormalGrey text={moment(date).format("Do MMMM YYYY")} />
          </div>
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

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-wrapper-custom mt-1">
      <div
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <img className="carousel-arrow" src={PrevArrow} alt="prev-arrow" />
      </div>
      <div
        className="carousel-custom"
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
      >
        <img className="carousel-arrow" src={NextArrow} alt="prev-arrow" />
      </div>
    </div>
  );
};

export default Carousel;
