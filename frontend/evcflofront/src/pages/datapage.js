import SuggestedStation from "../components/SuggestStation";
import NewStation from "../components/NewStation";
import NewBoundary from "../components/NewBoundary";
import Title from "../components/Title";

const Data = () => {
  return (
    <div className="datapage">
      <Title title="Add or Suggest Map Data" />
      <SuggestedStation />
      <NewStation />
      <NewBoundary />
    </div>
  );
};

export default Data;
