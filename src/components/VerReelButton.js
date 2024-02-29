import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import btnVer from '../assets/img/play.png';
import '../assets/css/verReelButton.css';
import '../assets/css/mainLightBox.css';


const VerReelButton = ({ videoUrl }) => {
  const [open, setOpen] = useState(false); // Estado local para controlar si el botón está abierto o cerrado

  // Función para abrir el botón cuando se hace clic en él
  const handleClick = () => {
    setOpen(true);
  };

  // Función para cerrar el botón
  const handleClose = () => {
    setOpen(false);
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
      {/* Botón para abrir el video */}
      <button type="button" className='verReelButton' onClick={handleClick}>
        <img src={btnVer} alt="Ver" style={{ cursor: 'pointer' }} /> 
      </button>
  
      {/* Componente del video (renderizado condicionalmente según el estado "open") */}
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
