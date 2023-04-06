const AImodels = () => {
  return (
    <div className="aiModels">
      <h1>AI models PAGE</h1>
      <p className="centerText">
        {" "}
        This page contains all Artificial Intelligence Models that generated
        from our researchs to help promote EV adoption
      </p>
      <div class="centered">
        <a
          target="_blank"
          rel="noreferrer"
          href={process.env.PUBLIC_URL + "densityclusteringmap.html"}
        >
          Density Clustering Map
        </a>
      </div>
    </div>
  );
};

export default AImodels;
