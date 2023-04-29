import SuggestedStation from "../components/SuggestStation";
import NewStation from "../components/NewStation";
import NewBoundary from "../components/NewBoundary";

const Data = () => {
  return (
    <div className="datapage">
      <h1>Add or Suggest Map Data</h1>
      <SuggestedStation />
      <NewStation />
      <NewBoundary />
    </div>
  );
};

export default Data;
