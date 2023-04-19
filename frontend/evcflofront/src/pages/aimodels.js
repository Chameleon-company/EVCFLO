const AImodels = () => {
  return (
    <div className="aiModels">
      
      <p className="centerText">
      <h1>AI/ML EVCS applications</h1>
        {" "}
        This page contains all Artificial Intelligence/Machine Learning Model application that generated
        from our researchs to help promote EV adoption
      </p>
      
      <div class="centered">
        <table width="80%" className="centerText">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Application</th>
          </tr>
          {/* 1st model */}
          <tr>
            <td>EVCS density clustering model map</td>
            <td>EVCS locations display on the map with colours showing their density in selected area</td>
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
              Showing colour icons of different EVCS in Melbourne and Geelong areas
              <ur>
                <li>Red Icon: EVCS near another EVCS within 5km radius</li>
                <li>Green Icon: EVCS has no other EVCS within 5km radius</li>
                <li>Blue Icon: Recommended future EVCS locations for carpark having over 100 parking spaces </li>
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
          
        </table>

      </div>
    </div>
  );
};

export default AImodels;
