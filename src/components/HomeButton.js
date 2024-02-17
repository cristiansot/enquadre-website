import React, { useState, useEffect, startTransition } from "react";
import '../assets/css/lightbox.css';
import btnVer from '../assets/img/boton_ver_reel.png';

const VideoPlugin = () => {
  const [open, setOpen] = useState(false); // State for controlling lightbox open/close
  const [lightboxContent, setLightboxContent] = useState({ type: "", content: "" });

  // Function to open the lightbox when the button is clicked
  const handleClick = () => {
    setOpen(true);
    setLightboxContent({ type: "video", content: "https://www.enquadre.cl/videos/general.mp4" });
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
      <button type="button" className='verReel' onClick={handleClick}>
        <img src={btnVer} alt="Ver" style={{ cursor: 'pointer' }} /> 
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




