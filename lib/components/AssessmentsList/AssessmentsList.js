import React from "react";
import fetchContainer from "../../containers/fetch-container";
import Assessments from "../Assessments/Assessments";
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
    </div>
  );
};

export default AssessmentsList;
