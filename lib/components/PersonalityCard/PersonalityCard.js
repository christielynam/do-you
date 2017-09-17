import React from "react";
import "./PersonalityCard.css";

const PersonalityCard = ({
  image_small,
  image_medium,
  image_large,
  font_color,
  color_1,
  color_2,
  color_3,
  personality_type,
  description
}) => {

  return (
    <article className='type' onClick={}>
      <div className='content-container'>
        <div className='front-content'>
          <h3>{personality_type}.</h3>
        </div>
        <div className='back-content'>
          <p className='type-description'>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default PersonalityCard;
