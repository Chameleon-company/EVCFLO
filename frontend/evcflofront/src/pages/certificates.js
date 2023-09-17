import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const CertificatePage = () => {

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
    <div className="app" style={appStyle} id='Certificates'>
      <Title title="Certificates " />
      <div className="screenLeft" style={textStyle}>
        <p>
          This page is to include the certificates obtained by the company in the field of providing reliable and safe electric charging systems.
          The page shows the high quality maintained by the company in providing reliable systems to its customers. The page shows how safe the systems are for the environment.
          The page contains credentials related to the health and safety measures taken by the company for its employees and clients. This page shows international standards obtained by the company.
          The standards include measures taken by the company to meet its clients' needs in a more reliable and safe way. This page also shows the company's product conformance to standardize the requirements of the client.
          The product includes services, hardware, and software in the field of EV charging stations. The company holds the standard that the automotive manufacturers and distributors are to uphold for quality and efficiency. All the standards of the company help to instill confidence in clients.
        </p>
        <input type="submit" value="Back" className="form-submit" onClick={goToHomePage} />
      </div>
    </div>
  );
};

export default CertificatePage;