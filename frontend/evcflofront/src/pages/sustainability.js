import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const SustainabilityPage = () => {

  const navigate = useNavigate();  // Get the useNavigate hook

  const goToHomePage = () => {
    navigate('/');  // Navigate to the Home page
  }

  const appStyle = {
    margin: '0 auto',
    maxWidth: 'auto',
    padding: '0 2rem',
  };

  const textStyle = {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    margin: '1em 0',
    textAlign: 'left', // Change to "left" alignment
  };

  return (
    <div className="app" style={appStyle} id='Sustainability'>
      <Title title="Sustainability " />
      <div className="screenLeft" style={textStyle}>
        <p>
        Electric charging is one of the previliges that we enjoy in our modern world, as this is a good opportunity for us to reduce co2 emissions issued by cars, buses and other means of transportation in order to preserve our environment and health and to achieve a better and cleaner atmosphere in the future. There are many advantages for businesses if they turn to using electric charging, including that electric charging is a good opportunity to attract customers, and also that the reputation of businesses will be good if they turn to clean energy such as electric charging, and they will obtain many quality certificates. More than all of this, electric charging is cheaper by stages compared to petroleum and diesel, and this is a good advantage for individuals, and there are charging places that provide free charging. This is an excellent thing and helps us improve our environment and reduce co2 emissions. If the world wants to live in a cleaner environment and atmosphere and for future generations to live in an environment clean of emissions, we must take bold and effective steps to make this a success.
        </p>
        <input type="submit" value="Back" className="form-submit" onClick={goToHomePage} />
      </div>
    </div>
  );
};

export default SustainabilityPage;