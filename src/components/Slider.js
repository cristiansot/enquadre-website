import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import classNames from 'classnames';

const Slider = ({ slides }) => { 
  const [activeSlide, setActiveSlide] = useState(-1); 
  const [prevSlide, setPrevSlide] = useState(-1); 
  const [sliderReady, setSliderReady] = useState(false); 
  
  useEffect(() => { 
    // mounted
    if (slides) {
        // runAutochangeTO();
        setTimeout(() => {
          setActiveSlide(0)
          setSliderReady(true)
        }, 0); 
    }
    return () => {
      window.clearTimeout(changeTO);
    }
  }, [slides])
  
  let changeTO = null; // Define changeTO variable
  
  // const runAutochangeTO = () => {
  //   changeTO = setTimeout(() => {
  //     changeSlides(1);
  //     runAutochangeTO();
  //   }, AUTOCHANGE_TIME);
  // }
  
  const changeSlides = (change) => {
    window.clearTimeout(changeTO);
    const length = slides.length; // Use slides.length directly
    
    const prevSlide = activeSlide;
    let activeSlideNew = prevSlide + change;
    if (activeSlideNew < 0) activeSlideNew = length - 1;
    if (activeSlideNew >= length) activeSlideNew = 0;
    setActiveSlide(activeSlideNew)
    setPrevSlide(prevSlide)
  }
  
 return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.servicios}
              >
              <div className="slider__slide-content">
                {/* <h3 className="slider__slide-subheading">{slide.country || slide.servicios}</h3> */}
                <h2 className="slider__slide-heading">
                  {slide.servicios.split('').map(l => <span>{l}</span>)}
                </h2>
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
        <div className="slider__control" onClick={() => changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
      </div>
    );
}

const IMAGE_PARTS = 4;
const AUTOCHANGE_TIME = 4000;

export default Slider;
