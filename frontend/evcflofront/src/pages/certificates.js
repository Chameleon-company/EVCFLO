import React from 'react';

const CertificatePage = () => {
  const appStyle = {
    margin: '0 auto',
    maxWidth: 'auto',
    padding: '0 2rem',
    height : '450Px',
  };

  const textStyle = {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    margin: '1em 0',
    textAlign: 'left', // Change to "left" alignment
  };

  const buttonStyle = {
    backgroundColor: '#2196F3',
    borderRadius: '2px',
    color: '#fff',
    fontWeight: '500',
    padding: '8px',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="app" style={appStyle}>
      <div className="screenLeft" style={textStyle}>
        <p>
          This page is to include the certificates obtained by the company in the field of providing reliable and safe electric charging systems.
          The page shows the high quality maintained by the company in providing reliable systems to its customers. The page shows how safe the systems are for the environment.
          The page contains credentials related to the health and safety measures taken by the company for its employees and clients. This page shows international standards obtained by the company.
          The standards include measures taken by the company to meet its clients' needs in a more reliable and safe way. This page also shows the company's product conformance to standardize the requirements of the client.
          The product includes services, hardware, and software in the field of EV charging stations. The company holds the standard that the automotive manufacturers and distributors are to uphold for quality and efficiency. All the standards of the company help to instill confidence in clients.
        </p>
        <a href='https://dr' target='_blank' rel='noreferrer' style={buttonStyle}>Back</a>
      </div>
    </div>
  );
};

export default CertificatePage;
