import AImodelTable from '../components/AImodelTable';
import Title from '../components/Title';
import { Box } from '@mui/material';

const AImodels = () => {
  return (
    <div>
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="AI/ML EVCS Applications" />
      </Box>
      <AImodelTable />
    </div>
  );
};

export default AImodels;
