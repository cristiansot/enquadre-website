import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import "../assets/css/toggle.css";

const Toggle = ({ navigateSectionById }) => {
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

  const handleItemClick = (id) => {
    setIsOpen(false); // Close the toggle when clicking on an item
    navigateSectionById(id); // Navigate to the corresponding section
  };

  return (
    <body>
        <input type="checkbox" id="overlay-input" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
        <div id="overlay">
            <ul>
            <li onClick={() => handleItemClick("first")}><a href="#first">Inicio </a></li>
            <li onClick={() => handleItemClick("second")}><a href="#second">Servicios </a></li>
            <li onClick={() => handleItemClick("third")}><a href="#third">Nosotros </a></li>
            <li onClick={() => handleItemClick("fourth")}><a href="#fourth">Clientes </a></li>
            <li onClick={() => handleItemClick("fifth")}><a href="#fifth">Contacto</a></li>
            <li onClick={linkedIn}><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" url="https://www.linkedin.com" /></li>
            <li onClick={instagram}><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" url="https://www.instagram.com/" /></li>
            <li onClick={youtube}><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" url="https://www.youtube.com/" /></li>
            </ul>
        </div>
    </body>
  );
};

export default Toggle;
