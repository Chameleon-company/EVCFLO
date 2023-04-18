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
        <table width="70%" className="centerText">
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
                Density Clustering Map
              </a>
            </td>
          </tr>
          {/* 2nd model */}
          <tr>
            <td>Reserve</td>
            <td>Reserve</td>
            <td>
              Reserve
            </td>
          </tr>
          
        </table>
        <ul>
          {/* <li>
              <a
              target="_blank"
              rel="noreferrer"
              href={process.env.PUBLIC_URL + "densityclusteringmap.html"}
            >
              Density Clustering Map
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AImodels;
