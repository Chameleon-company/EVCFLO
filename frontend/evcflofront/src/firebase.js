import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDKfzJfKg08xUAHb7WBhs-I2L8lQV5nUIg',
  authDomain: 'evoleonapp.firebaseapp.com',
  databaseURL: 'https://evoleonapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'evoleonapp',
  storageBucket: 'evoleonapp.appspot.com',
  messagingSenderId: '425564389277',
  appId: '1:425564389277:web:c86772f8abb19ffca47974',
  measurementId: 'G-GL6LC3D645',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // If someone is reviewing this for cyber, it is pretty bad to tell the user that the email is wrong.
        // I'm handling it in the view so that it displays the same message for both but if someone inspects console they'll see the request response msg
        // Blame firebase's api not me :c
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          reject('Wrong password!');
        } else {
          console.log(errorCode, errorMessage);
          reject(errorMessage);
        }
      });
  });
};

export const getUserProfile = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user !== null) {
          const displayName = user.displayName ? user.displayName : 'None set';
          const email = user.email;
          const photoURL = user.photoURL ? user.photoURL : 'https://source.boringavatars.com/beam';
          const emailVerified = user.emailVerified;
          const uid = user.uid;
          resolve({ displayName, email, photoURL, emailVerified, uid });
        } else {
          resolve(null); // User is not logged in
        }
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      reject(error);
    }
  });
};

export const signUpUser = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          reject('Email already in use!');
        } else if (errorCode === 'auth/invalid-email') {
          reject('Invalid email!');
        } else if (errorCode === 'auth/operation-not-allowed') {
          reject('Operation not allowed!');
        } else if (errorCode === 'auth/weak-password') {
          reject('Weak password!');
        } else {
          console.log(errorCode, errorMessage);
          reject(errorMessage);
        }
      });
  });
};

export default app;
