import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import btn from '../assets/img/botones/btn_scania.png';
import '../assets/css/buttons.css'

const VideoPlugin = () => {
  const [open, setOpen] = useState(false); // State for controlling lightbox open/close
  const [lightboxContent, setLightboxContent] = useState({ type: "", content: "" });

  // Function to open the lightbox when the button is clicked
  const handleClick = () => {
    setOpen(true);
    setLightboxContent({ type: "video", content: "https://www.enquadre.cl/videos/scania.mp4" });
  };

  // Function to close the lightbox
  const handleClose = () => {
    setOpen(false);
    setLightboxContent({ type: "", content: "" });
  };

  // Function to handle key press events
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  // Add event listener for key press events when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <>
      {/* Button to open the lightbox */}
      <button type="button" className='componentButton' onClick={handleClick}>
        <img className="scania" src={btn} alt="Ver Reel" style={{ cursor: 'pointer' }} /> 
      </button>

      {/* Lightbox component (rendered conditionally based on open state) */}
      {open && (
        <div className="lightbox">
          <div className="lightbox-container">
            {lightboxContent.type === "video" ? (
              <div className="lightbox-video">
                <video controls autoPlay> 
                  <source src={lightboxContent.content} type="video/mp4" />
                </video>
                <div />
                <a href="#lightbox" className="lightbox-toggle" onClick={handleClose}>
                  {/* <FontAwesomeIcon icon={faTimes} />} */}
                  <FontAwesomeIcon icon={faCircleXmark} />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPlugin;




