//import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [totalplugs, setTotalPlugs] = useState("");
  const [suitabilityscore, setSuitabilityScore] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The Longitude you entered was: ${longitude}`);
    alert(`The Latitude you entered was: ${latitude}`);
    alert(`The Total Plugs you entered was: ${totalplugs}`);
    alert(`The Suitability_Score you entered was: ${suitabilityscore}`);
  }

  return (
    <div className="App">
      <h1 className="Apph3">Chameleon Electric Vehicle Charger Forecasting and Location Optimization project</h1>
        <h2 className="Apph4">Add a suggested station to the database</h2>

        <a href="https://storage.googleapis.com/evcflo_static_frontend/index.html"> | Home.</a>
        <a href="https://storage.cloud.google.com/evcflo_static_frontend/add_station.html"> | Add a Charge Station here.</a>
        <a href="https://storage.cloud.google.com/evcflo_static_frontend/add_suggested_station.html"> | Add a Suggested Station here.</a>
        <a href="https://storage.cloud.google.com/evcflo_static_frontend/add_bounding.html"> | Add a Bounding Box here.</a>
        <a href="https://storage.cloud.google.com/evcflo_static_frontend/notebooks.html"> | View Research.</a>
        <a href="https://github.com/Chameleon-company/EVCFLO"> | GitHub. |</a>
        <a href ="https://storage.cloud.google.com/evcflo_static_frontend/visualizations.html"> | Visualizations. |</a><br></br><br></br>


        <form action="https://server-e657pcuziq-ts.a.run.app/api/add_suggested" method="POST" className="react-form" onSubmit={handleSubmit}>
        <label for="longitude">Longitude:</label>
        <input type="number" step="0.0001" id="longitude" name="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input><br></br><br></br>
        <label for="latitude">Latitude:</label>
        <input type="number" step="0.0001" id="latitude" name="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input><br></br><br></br>
        <label for="total_plugs">Total Plugs:</label>
        <input type="number" id="total_plugs" name="total_plugs" value={totalplugs} onChange={(e) => setTotalPlugs(e.target.value)}></input><br></br><br></br>
        <label for="suitability_score">Suitability_Score:</label>
        <input type="number" step="0.001" id="suitability_score" name="suitability_score" value={suitabilityscore} onChange={(e) => setSuitabilityScore(e.target.value)}></input><br></br><br></br>
        <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default App;
