import React from "react";
import fetchContainer from "../../containers/fetch-container";
import { Link } from "react-router-dom";

const AssessmentsList = () => {
  return (
    <div className="test-list-container">
      <h1>take an assessment.</h1>
      <Link to="/assessments/core" className='core-link'>
        core.
      </Link>
      <Link to="/assessments/career" className='career-link'>
        career.
      </Link>
      <Link to="/assessments/intro-extro" className='intro-extro-link'>
        introvert/extrovert.
      </Link>
      <Link to="/assessments/heroes" className='heroes-link'>
        heroes.
      </Link>
      <Link to="/assessments/movies" className='movies-link'>
        movies.
      </Link>
      <Link to="/assessments/persuasion" className='persuasion-link'>
        persuasion.
      </Link>
    </div>
  );
};

export default AssessmentsList;
