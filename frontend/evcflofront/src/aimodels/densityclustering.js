import React from "react";
import Title from "../components/SubTitle";

//The form elements below should integrate with xgboost_density_clustering pickel file 
//in the public folder to properly deploy ML model

const DensityClustering = () => {
  return (
    <section className="section" id="model">
    <Title title="EVCS density clustering model"/>
    <p className="centerText">User input Number of the following facilities surrounding target EVCS</p>
    <div class="centered">
      <form
        action=""
        method=""
        >
          <label for="postcode">Postcode: </label>
          <input type="number" id="postcode" name="postcode" />
          <br />
          <label for="park">Park: </label>
          <input type="number" id="park" name="park" />
          <br />
          <label for="restaurant">Restaurant: </label>
          <input type="number" id="restaurant" name="restaurant" />
          <br />
          <label for="nearbyEVCS">Nearby EVCS: </label>
          <input type="number" id="nearbyEVCS" name="nearbyEVCS" />
          <br />
          <label for="supermarket">Supermarket: </label>
          <input type="number" id="supermarket" name="supermarket" />
          <br />
          <label for="power">Charging Power: </label>
          <input type="number" id="power" name="power" />
          <br />
          <label for="mall">Malls: </label>
          <input type="number" id="mall" name="mall" />
          <br />
          <label for="EVCS">EVCS within same postcode: </label>
          <input type="number" id="EVCS" name="EVCS" />
          <br />
          <label for="hospital">Hospital: </label>
          <input type="number" id="hospital" name="hospital" />
          <br />
      <input type="submit" value="Predict" />
    </form>
    </div>
    <br />
    <p className="centerText">Submission will return the predicted density clustering number of target EVCS</p>
    </section>
  );
};

export default DensityClustering;