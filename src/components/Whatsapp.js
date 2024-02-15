import React from 'react';
import '../assets/css/whatsapp.css';

const Whatsapp = () => {
  return (
    <div className="phone-call cbh-phone cbh-green cbh-show cbh-static" id="clbh_phone_div" style={{ position: 'fixed', bottom: '75px', right: '5px', zIndex: '80' }}>
      <a id="WhatsApp-button" href="whatsapp://send?text= Hola Enquadre, necesito de tus servicios&amp;phone=+56993595606" className="phoneJs" title="Enviar mensaje!">
        <div className="cbh-ph-circle"></div>
        <div className="cbh-ph-circle-fill"></div>
        <div className="cbh-ph-img-circle1"></div>
      </a>
    </div>
  );
};

export default Whatsapp;
