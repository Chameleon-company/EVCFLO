import React from 'react';
import Title from '../components/Title';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

const newsArticles = [
  {
    title: '1. The beginning of the spread of electric chargers in Asia',
    content:
      'Due to the high demand on electric cars in the past years, many countries all around Asia are spreading electric chargers in their countries To keep pace with this need and development in the world of cars and it’s expected that some countries in Asia in the coming couple of years will fully cover the need of electric chargers in their countries which will encourage more people to be heading to buy electric cars, Which will be a large step towards saving the environment.',
  },
  {
    title: '2. High demand on home electric chargers',
    content:
      'Nowadays, home electric chargers are trending and that is because people are directing to implement electric chargers at their homes, instead of charging their cars in public places for long hours to full their cars, This thing has many advantages as it reduced the amount of people waiting in public places to charge their cars and its also more convenient for electric chargers users.',
  },
  {
    title: '3. Axen company sets a target of electric charging points',
    content:
      'Axen company announced that by 2025 they are targeting to distribute new 50,000 charging points , and they also stated that they will focus on covering cities that are having high demand on electric chargers. Reactions on social media towards this announcement was positive and the people seeing that this will give more credit to Axen company as they will increase their presence in the market of the electric charging stations and this will return to them with a good reputation.',
  },
  {
    title: '4. Machines to search for electric charging points available in public places',
    content:
      'Because of the widespread of electric charging points , we can notice the presence of machines, these machines are used to help people to find the nearest electric chargers points to their location, which will save time and effort for people searching for electric charging points. These machines are mainly located near famous landmarks, shopping malls, places with few electric charging points, public beaches, commercial streets, parks, marketplaces, airports, hotels,etc. This led to flexibility in searching for electric charging points, and this is a very useful machine for people with electric cars visiting public places. It’s expected that these machines will be spread more especially in places where the density of people is high to cover their requirements.',
  },
];

const News = () => {
  return (
    <Container>
      <Box mt={4}>
        <Title title="EVCLO" subTitle={'News'} />
      </Box>
      <Box mt={4}>
        {newsArticles.map((article, index) => (
          <Card key={index} elevation={3} style={{ marginBottom: '24px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body1">{article.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default News;
