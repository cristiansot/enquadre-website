import React, { useState, useEffect } from "react";
import { TimelineMax, Power2, Power4 } from "gsap";
import { SocialIcon } from 'react-social-icons';
import "../assets/css/toggle.css";

const Toggle = () => {

  function linkedIn() {
    window.open("https://www.linkedin.com/in/marcelo-gonz%C3%A1lez-l%C3%B3pez-009630105/", "_blank");
  }
  
  function instagram() {
    window.open("https://www.instagram.com/enquadre.cl/", "_blank");
  }
  
  function youtube() {
    window.open("https://www.youtube.com/@marcelo-Enquadre", "_blank");
  }


  return (
    <body>
        <input type="checkbox" id="overlay-input" />
        <label for="overlay-input" id="overlay-button"><span></span></label>
        <div id="overlay">
            <ul>
            <li><a href="#first">Inicio </a></li>
            <li><a href="#second">Servicios </a></li>
            <li><a href="#third">Nosotros </a></li>
            <li><a href="#fourth">Clientes </a></li>
            <li><a href="#fifth">Contacto</a></li>
            <li><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={linkedIn} url="https://www.linkedin.com" /></li>
            <li><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={instagram} url="https://www.instagram.com/" /></li>
            <li><SocialIcon className='socialIcon' bgColor="#CCC" fgColor="transparent" onClick={youtube} url="https://www.youtube.com/" /></li>
            </ul>
        </div>
    </body>
  );
};

export default Toggle;

