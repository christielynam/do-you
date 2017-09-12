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
    <article className='type'>
      <h3>{personality_type}.</h3>
      <p>{description}</p>
    </article>
  );
};

export default PersonalityCard;
