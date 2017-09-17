import React from "react";
import fetchContainer from "../../containers/fetch-container";
import { Link } from "react-router-dom";
import AssessmentList from './AssessmentsList.css';

const AssessmentsList = () => {
  return (
    <div className='list-container'>
      <h1 className='assessment-list-heading'>take an assessment.</h1>
      <div className="test-link-container">
        <Link to="/assessments/core" className='core-link'>
        core.
        </Link>
        <Link to="/assessments/career" className='career-link'>
        career.
        </Link>
        <Link to="/assessments/intro-extro" className='intro-extro-link'>
        intro/extro.
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
  </div>
  );
};

export default AssessmentsList;
