import React from "react";
import "./PersonalityTypeContainer.css";
import PersonalityCard from "../PersonalityCard/PersonalityCard";

const PersonalityTypeContainer = ({ id, name, badges }) => {

  const displayCareerTypes = badges.map( object => <PersonalityCard key={object.personality_type} {...object} /> )

  return (
    <div className='types-container'>
      <h4 className='type-title'>{name}</h4>
      <div className='grid-container'>
        {displayCareerTypes}
      </div>
    </div>
  )
}

export default PersonalityTypeContainer;
