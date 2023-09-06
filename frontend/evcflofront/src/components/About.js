import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="Chameleon" />

      <div className="section-center about-center">
        <article className="about-info">
          <p>
            EVCFLO is an innovative service that provides valuable insights to businesses looking to assess the demand
            for electric vehicle charging stations in the city of Melbourne. By using EVCFLO, businesses can gain access
            to information on the location and types of charging stations. This information can be used to identify
            areas where there is high demand for charging stations, as well as to optimize the placement and design of
            charging infrastructure.
          </p>
          <p>
            Using EVCFLO is easy and convenient for businesses looking to assess the demand for electric vehicle
            charging in Melbourne. The service provides a comprehensive database of charging stations in the city, as
            well as up-to-date information on charging rates and availability. With EVCFLO, businesses can get a better
            understanding of the current and future demand for electric vehicle charging, and make informed decisions
            about the placement and design of charging infrastructure to meet the needs of EV drivers in the city.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
