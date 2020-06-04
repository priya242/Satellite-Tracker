import React from "react";
import { Slide } from "react-slideshow-image";
export default function SliderImage(props) {
  const slideImages = [];
  const properties = {
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  console.log(props.images);
  for (let s of props.images) {
    slideImages.push(
      <div className="each-slide">
        <img src={s} alt="EPIC Images" />
      </div>
    );
  }
  return <Slide {...properties}>{slideImages}</Slide>;
}
