// Slider.js
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import VerReelButton from './VerReelButton';
import '../assets/css/slider.css';

const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (slides) {
      setTimeout(() => {
        setActiveSlide(0);
        setSliderReady(true);
      }, 0);
    }
  }, [slides]);

  const changeSlides = (change) => {
    window.clearTimeout(changeTO);
    const length = slides.length;
    const prevSlide = activeSlide;
    let activeSlideNew = prevSlide + change;
    if (activeSlideNew < 0) activeSlideNew = length - 1;
    if (activeSlideNew >= length) activeSlideNew = 0;
    setActiveSlide(activeSlideNew);
    setPrevSlide(prevSlide);
  };

  const toggleControls = (visibility) => {
    setShowControls(visibility);
  };

  let changeTO = null;

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
            key={slide.servicios}
          >
            <div className="slider__slide-content">
              <div className="reelButton">
                {/* Agregar la condición para no renderizar el botón en la sección de streaming */}
                {activeSlide === index && slide.servicios !== 'STREAMING' && (
                  <VerReelButton videoUrl={slide.videoUrl} toggleControls={toggleControls} />
                )}
              </div>
              <h3 className="slider__slide-subheading">{slide.country || slide.servicios}</h3>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showControls && (
        <div className="contentSliderControl">
          <div className="slider__control" onClick={() => changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
        </div>
      )}
    </div>
  );
};

const IMAGE_PARTS = 4;

export default Slider;
