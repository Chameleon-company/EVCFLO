import SubTitle from "./SubTitle";
const NewBoundary = () => {
  return (
    <section className="section" id="boundary">
      <SubTitle title="Add" subTitle="Boundary" />
      <form
        action="https://server-e657pcuziq-ts.a.run.app/api/add_bounding"
        method="POST"
      >
        <label for="north">North:</label>
        <input type="number" step="0.0001" id="north" name="north" />
        <br />
        <label for="south">South:</label>
        <input type="south" step="0.0001" id="south" name="south" />
        <br />
        <label for="east">East:</label>
        <input type="number" step="0.0001" id="east" name="east" />
        <br />
        <label for="west">West:</label>
        <input type="number" step="0.0001" id="west" name="west" />
        <br />
        <label for="source">
          Source - How points inside obtained (Google_API):
        </label>
        <input type="text" id="source" name="source" />
        <br />
        <label for="source_date">Source Date:</label>
        <input type="date" id="source_date" name="source_date" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default NewBoundary;
