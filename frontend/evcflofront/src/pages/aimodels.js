import { Link } from "react-router-dom";

const AImodels = () => {
  return (
    <div className="aiModels">
      <p className="centerText">
        <h1>AI/ML EVCS applications</h1> This page contains all Artificial
        Intelligence/Machine Learning Model application that generated from our
        researchs to help promote EV adoption
      </p>

      <div class="centered">
        <table width="80%" className="centerText">
          <tr>
            <th>Name</th>
            <th>Source</th>
            <th>Description</th>
            <th>Application</th>
          </tr>
          {/* 1st model */}
          <tr>
            <td>EVCS density clustering model map</td>
            <td>Reserve</td>
            <td>
              VIC and QLD EVCS locations display on the map with colours showing
              their density in selected area
              <ur>
                <li>Red Icon: EVCS concentrated location</li>
                <li>Yellow Icon: EVCS less concentrated location</li>
                <li>Green Icon: EVCS locations where is not concentrated</li>
              </ur>
            </td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href={process.env.PUBLIC_URL + "densityclusteringmap.html"}
              >
                Click me
              </a>
            </td>
          </tr>
          {/* 2nd model */}
          <tr>
            <td>Future EVCS Recommendation Map</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href={process.env.PUBLIC_URL + "https://storage.googleapis.com/evcflo_static_frontend/notebooks/EVCS%20Interactive%20Map-melbourne%20and%20geelong.html"}
              >
                Notebook: EVCS - Interactive Map Development
                Melbourne and Geelong Region
              </a>
            </td>
            <td>
              Showing colour icons of different EVCS in Melbourne and Geelong
              areas
              <ur>
                <li>Red Icon: EVCS near another EVCS within 5km radius</li>
                <li>Green Icon: EVCS has no other EVCS within 5km radius</li>
                <li>
                  Blue Icon: Recommended future EVCS locations for carpark
                  having over 100 parking spaces{" "}
                </li>
              </ur>
            </td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href={process.env.PUBLIC_URL + "EVCSrecommendationsmap.html"}
              >
                Click me
              </a>
            </td>
          </tr>
          {/* 3rd model */}
          <tr>
            <td>EVCS clustering prediction model</td>
            <td>Reserve</td>
            <td>
              Applied Machine learning models to predict EVCS clustering based
              on input data
            </td>
            <td>
              <Link to="/densityclustering">Click me</Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AImodels;
