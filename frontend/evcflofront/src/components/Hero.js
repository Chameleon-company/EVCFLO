import logo from '../images/logo2.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>We are Chameleon</h1>
        <p>Welcome to the EVCFLO project</p>
        <img src={logo} className="nav-logo2" alt="evcflologo" />
      </div>
    </section>
  );
};

export default Hero;
