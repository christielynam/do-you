import React from 'react';
import './Slide.css';

const Slide = ({ slideData, manageSlideUpdate }) => {
  const {
    id,
    position,
    caption,
    response,
    image_desktop,
    image_desktop_retina,
    time_taken,
    completed_at,
    created_at,
    focus_x,
    focus_y
  } = slideData;


  return (
    <div>
      <h3 className='slide-caption'>{caption}</h3>
      <img src={image_desktop_retina} alt="slide-image" />
      <div className='btn-container'>
        <button
          className='me-btn'
          onClick={ () => manageSlideUpdate(slideData, true) }>
          Me
        </button>
        <button
          className='not-me-btn'
          onClick={ () => manageSlideUpdate(slideData, false) }>
          Not Me
        </button>
      </div>
    </div>
  );
};

export default Slide;
