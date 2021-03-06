import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <section className='loading-section'>
        <div className="loader loader-dots">
          <div className="dot dot1" />
          <div className="dot dot2" />
          <div className="dot dot3" />
        </div>
      </section>
    </div>
  );
};

export default Loading;
