import Title from './Title';
const InfoMaps = () => {
  return (
    <section className="section" id="about">
      <Title title="Maps" subTitle="Information" />

      <div className="section-center about-center">
        <article className="about-info">
          <p>
            The map below contains the locations of every EV charging station in Melbourne. It's currently a work in
            progress, but you can use it to see which areas have a high volume of chargers, giving you valuable insights
            into the growing demand for electric vehicle infrastructure. If you're a business owner, this information
            could help you make informed decisions about whether installing an EV charging station on your premises
            could be a beneficial investment to attract eco-conscious customers and contribute to the sustainable
            transportation movement.
          </p>
        </article>
      </div>
    </section>
  );
};

export default InfoMaps;
