import React from "react";
import {Link} from "react-router-dom"

const AImodels = () => {
  return (
    <div>
      <h1>AI models PAGE</h1>
      <p className="centerText"> This page contains all Artificial Intelligence 
        Models that generated from our researchs to help promote EV adoption</p>
        <div class="centered">
            <Link to="/densityclustering">EVCS Density Clustering Model</Link>
        </div>
    </div>
  );
};

export default AImodels;