import { socialLinks } from '../data';
import { SocialIcon } from 'react-social-icons';
import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  const footerStyle = {
    backgroundColor: '#fafafa',
    paddingTop: '48px',
    paddingBottom: '48px',
    bottom: '0',
    width: '100%',
    left: '0',
    backgroundColor: 'var(--heading-clr)',
  };

  return (
    <footer style={footerStyle}>
      <Typography variant="h6" align="center" gutterBottom>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map((link) => {
            const { id, href, bgc } = link;
            return (
              <li key={id}>
                <SocialIcon url={href} bgColor={bgc} />
              </li>
            );
          })}
        </ul>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
        style={{
          letterspacing: 'var(--spacing)',
          color: 'var(--white-clr)',
          letterSpacing: 'var(--spacing)',
        }}
      >
        copyright &copy; Chameleon 2023 all rights reserved
      </Typography>
    </footer>
  );
}

export default Footer;
