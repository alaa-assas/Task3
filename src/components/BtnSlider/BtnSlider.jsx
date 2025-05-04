import React from 'react';
import './BtnSlider.css'; 

const BtnSlider = ({img,eventClick ,classExtra}) => {
  return (
    <button onClick={eventClick} className={`nav-button ${classExtra}`} >
      <img src={img} alt="icon" />
    </button>
  );
};

export default BtnSlider;
