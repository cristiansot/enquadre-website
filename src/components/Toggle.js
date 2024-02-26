import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import "../assets/css/toggle.css";

const Toggle = ({ handleSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  function linkedIn() {
    window.open("https://www.linkedin.com/in/marcelo-gonz%C3%A1lez-l%C3%B3pez-009630105/", "_blank");
  }
  
  function instagram() {
    window.open("https://www.instagram.com/enquadre.cl/", "_blank");
  }
  
  function youtube() {
    window.open("https://www.youtube.com/@marcelo-Enquadre", "_blank");
  }

  const handleItemClick = () => {
    setIsOpen(false); // Cerrar el toggle al hacer clic en un elemento
  };
  
  return (
    <body>
        <input type="checkbox" id="overlay-input" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
        <div className="contentNavToggle" id="overlay">
          <nav >
              <a href="#first" onClick={handleItemClick}>Inicio</a>
              <a href="#second" onClick={handleItemClick}>Servicios</a>
              <a href="#third" onClick={handleItemClick}>Nosotros</a>
              <a href="#fourth" onClick={handleItemClick}>Clientes</a>
              <a href="#fifth" onClick={handleItemClick}>Contacto</a>
              <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={() => { linkedIn(); handleItemClick(); }} url="https://www.linkedin.com" />
              <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={() => { instagram(); handleItemClick(); }} url="https://www.instagram.com/" />
              <SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={() => { youtube(); handleItemClick(); }} url="https://www.youtube.com/" />
          </nav>
        </div>
        
    </body>
  );
};

export default Toggle;
