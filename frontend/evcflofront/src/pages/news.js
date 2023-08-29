import Title from '../components/Title';
import React, { useState, useEffect } from 'react';
import Menu from '../components/News/Menu';
import NewsGrid from '../components/News/NewsGrid';

function News() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('EV');

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=021baff830cb4c8fa2c688eefdd78b46`)
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="faq">
      <Title title="Latest" subTitle="News" />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default News;
