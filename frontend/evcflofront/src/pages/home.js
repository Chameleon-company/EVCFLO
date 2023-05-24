import Map from "../components/Map";
import InfoMaps from "../components/InformationMaps";
import About from "../components/About";
import Hero from "../components/Hero";
import ContactUs from "../components/contactus";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoMaps />
      <Map />
      <About />
      <ContactUs />
    </>
  );
};

export default Home;
