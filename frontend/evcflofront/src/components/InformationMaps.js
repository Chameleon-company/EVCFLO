import Title from "./Title";
const InfoMaps = () => {
  return (
    <section className="section" id="about">
      <Title title="Maps" subTitle="Information" />

      <div className="section-center about-center">
        <article className="about-info">
          <p>
            The map above contains the locations of every EV charging station in
            Melbourne. It's currently a work in progress, but you can use it to
            see which areas have a high volume of chargers.
          </p>
        </article>
      </div>
    </section>
  );
};

export default InfoMaps;
