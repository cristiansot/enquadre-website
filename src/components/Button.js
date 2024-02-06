import React from "react";
import btnVer from '../assets/img/boton_ver_reel.png'

class Button extends React.Component {
  render() {
    return (
      <button>   
          <img className='verReel' src={btnVer} /> 
      </button>
    );
  }
  
}

export { Button };

