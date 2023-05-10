import SubTitle from "./SubTitle";
const SuggestedStation = () => {
  return (
    <section className="section" id="suggest">
      <SubTitle title="Suggest" subTitle="Station" />
      <form
        action="https://server-e657pcuziq-ts.a.run.app/api/add_suggested"
        method="POST"
      >
        <label for="longitude">Longitude:</label>
        <input type="number" step="0.0001" id="longitude" name="longitude" />
        <br />
        <label for="latitude">Latitude:</label>
        <input type="number" step="0.0001" id="latitude" name="latitude" />
        <br />
        <label for="total_plugs">Total Plugs:</label>
        <input type="number" id="total_plugs" name="total_plugs" />
        <br />
        <label for="suitability_score">Suitability_Score:</label>
        <input
          type="number"
          step="0.001"
          id="suitability_score"
          name="suitability_score"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default SuggestedStation;
