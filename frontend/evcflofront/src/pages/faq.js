import Questions from '../components/Questions';
import Title from '../components/Title';
import { Box } from '@mui/material';

const FAQ = () => {
  return (
    <>
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="FAQ" />
      </Box>
      <Questions />
    </>
  );
};

export default FAQ;
