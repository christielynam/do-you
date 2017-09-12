import React from "react";

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
      <h3>{caption}</h3>
      <img src={image_desktop_retina} alt="slide-image" />
      <div>
        <button onClick={ () => manageSlideUpdate(slideData, true) }>Me</button>
        <button onClick={ () => manageSlideUpdate(slideData, false) }>
          Not Me
        </button>
      </div>
    </div>
  );
};

export default Slide;
