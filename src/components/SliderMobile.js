import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import classNames from 'classnames';
import ('../assets/css/sliderMobile.css')

const SliderMobile = ({ slidesMobile }) => { 
  const [activeSlide, setActiveSlide] = useState(-1); 
  const [prevSlide, setPrevSlide] = useState(-1); 
  const [sliderReady, setSliderReady] = useState(false); 
  
  useEffect(() => { 
    // mounted
    if (slidesMobile) {
        // runAutochangeTO();
        setTimeout(() => {
          setActiveSlide(0)
          setSliderReady(true)
        }, 0); 
    }
    return () => {
      window.clearTimeout(changeTO);
    }
  }, [slidesMobile])
  
  let changeTO = null; // Define changeTO variable
  
  const changeslidesMobile = (change) => {
    window.clearTimeout(changeTO);
    const length = slidesMobile.length; // Use slidesMobile.length directly
    
    const prevSlide = activeSlide;
    let activeSlideNew = prevSlide + change;
    if (activeSlideNew < 0) activeSlideNew = length - 1;
    if (activeSlideNew >= length) activeSlideNew = 0;
    setActiveSlide(activeSlideNew)
    setPrevSlide(prevSlide)
  }
  
 return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <div className="slider__slidesMobile">
          {slidesMobile.map((slide, index) => (
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
          <div className='contentSliderControl'>
            <div className="slider__control" onClick={() => changeslidesMobile(-1)} />
            <div className="slider__control slider__control--right" onClick={() => changeslidesMobile(1)} />
          </div>
      </div>
    );
    
}

const IMAGE_PARTS = 4;
const AUTOCHANGE_TIME = 4000;

export default SliderMobile;
