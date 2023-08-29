import Searchbar from '../components/NotebookSearchBar';
import NotebookTable from '../components/NotebookTable';
import Title from '../components/Title';
import { Box } from '@mui/material';

const Research = () => {
  return (
    <div>
      {/* this search bar doesn't do a ton? */}
      <Searchbar />
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="Researches" />
      </Box>
      <NotebookTable />
    </div>
  );
};

export default Research;
