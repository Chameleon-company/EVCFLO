import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubTitle from './SubTitle';

const Support = () => {

  const navigate = useNavigate();  // Get the useNavigate hook

  const goToHomePage = () => {
    navigate('/');  // Navigate to the Home page
  }

  const goToFAQPage = () => {
    navigate('/faq');  // Navigate to the View page
  }

  return (
    <>
      <section className="section" id="Support">
        <SubTitle title="Support" />

        <div className="diamond-buttons">
          <input type="submit" value="FAQ" className="btn-diamond form-submit" onClick={goToFAQPage} />
          <div className="side-buttons">
            <input type="submit" value="Brochure" className="btn-diamond form-submit" />
            <input type="submit" value="GetQuotes" className="btn-diamond form-submit" />
          </div>
          <input type="submit" value="Home" className="btn-diamond form-submit" onClick={goToHomePage} />
        </div>

      </section>
      <div id='sp'></div>
    </>
  );
};



export default Support;
