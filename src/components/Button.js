import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import btnVer from '../assets/img/boton_ver_reel.png';
import Video from "yet-another-react-lightbox/plugins/video";

const Button = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <img className='verReel' src={btnVer} alt="Ver" /> 
      </button>

      {isOpen && (
        <Lightbox
          plugins={[Video]}
          slides={[
            {
              type: "video",
              width: 1280,
              height: 720,
              poster: "",
              sources: [
                {
                  src: "https://www.enquadre.cl/videos/general.mp4",
                  type: "video/mp4",
                },
              ],
            }
          ]}
        />
      )}
    </>
  );
}

export default Button;
