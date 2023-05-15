import { useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Log out the user
    auth.signOut().then(() => {
      // Redirect to the home page
      navigate('/');
    });
  }, [navigate]);

  return null; // The component doesn't need to render anything
};

export default Logout;