import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {getUserProfile}  from '../firebase';


const User = () => {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getUserProfile()
      .then((profile) => {
        console.log(profile);
        setUserProfile(profile);
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }, []);

  

  return userProfile ? (
<div className="user-profile">
      <img className="user-avatar" src={userProfile.photoURL} alt="User Avatar" />
      <div className="user-info">
        <h2>
          {userProfile.displayName} {userProfile.emailVerified && <span className="verified-badge">✓</span>}
        </h2>
        <p>{userProfile.email}</p>
      </div>
    </div>
  ) : (
    <div className="loader">
      <p>Loading...</p>
    </div>
  );
};

export default User;