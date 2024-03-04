// VerReelButton.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import btnVer from '../assets/img/play.png';
import '../assets/css/verReelButton.css';
import '../assets/css/mainLightBox.css';

const VerReelButton = ({ videoUrl, toggleControls }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    toggleControls(false); // Oculta los controles al abrir el lightbox
  };

  const handleClose = () => {
    setOpen(false);
    toggleControls(true); // Muestra los controles al cerrar el lightbox
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <>
      <button type="button" className='verReelButton' onClick={handleClick}>
        <img src={btnVer} alt="Ver" style={{ cursor: 'pointer' }} />
      </button>

      {open && (
        <div className="mainLightbox">
          <div className="mainLightbox-container">
            <div className="mainLightbox-video">
              <video controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
              </video>
              <div />
              <a href="#lightbox" className="mainLightbox-toggle" onClick={handleClose}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VerReelButton;
