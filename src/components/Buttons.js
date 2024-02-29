import React from "react";
import BtnNl from '../components/BtnNl'
import BtnScania from '../components/BtnScania'
import BtnWalmart from '../components/BtnWalmart'
import BtnCardif from '../components/BtnCardif'
import BtnGildemeister from '../components/BtnGildemeister'
import BtnAguas from '../components/BtnAguas'
import '../assets/css/lightbox.css';


const Buttons = (() =>{
  return (
    <div className="wrapper">
      <BtnNl />
      <BtnScania />
      <BtnWalmart />   
      <BtnCardif />
      <BtnGildemeister />
      <BtnAguas />
    </div>
  );
})

export default Buttons;
