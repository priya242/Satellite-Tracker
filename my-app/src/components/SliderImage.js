import React from "react";
import { Fade } from "react-slideshow-image";
export default function SliderImage(props) {
  const slideImages = [];
  const fadeProperties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: false,
    pauseOnHover: true,
    indicators: true,
    arrows: false,
  }
  // console.log(props.images);
  for (let s of props.images) {
    slideImages.push(
      <div className="each-slide">
        <img src={s} alt="EPIC Images" />
      </div>
    );
  }
  return <Fade {...fadeProperties}>{slideImages}</Fade>;
}
