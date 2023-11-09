import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFZ1Tgecu8gs6MG_zTfn75yLHXmZEhYLg",
  authDomain: "vividia-e507f.firebaseapp.com",
  projectId: "vividia-e507f",
  storageBucket: "vividia-e507f.appspot.com",
  messagingSenderId: "842891183459",
  appId: "1:842891183459:web:edd6bc4549e515c62dbf56",
  measurementId: "G-7NEJF5Y2YE",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [googleAccessToken, setgoogleAccessToken] = useState(null);
  const [facebookAccessToken, setFacebookAccessToken] = useState(null);

  // useEffect(() => {
  //   const unsuscribe = onAuthStateChanged(firebaseAuth, (user) => {
  //     if (user) {
  //       setUser({
  //         user,
  //       });
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => unsuscribe();
  // }, []);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setgoogleAccessToken(user.googleToken);
        setFacebookAccessToken(user.facebookToken);
      } else {
        setUser(null);
        setgoogleAccessToken(null);
        setFacebookAccessToken(null);
      }
    });
  }, []);

  //facebook
  const facebookSignIn = () =>
    signInWithPopup(firebaseAuth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const facebookToken = credential.accessToken;
        setFacebookAccessToken(facebookToken);

        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });

  //google
  const googleSignIn = () =>
    signInWithPopup(firebaseAuth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const googleToken = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setgoogleAccessToken(googleToken);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  //signout

  const logOut = () => {
    signOut(firebaseAuth);
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        googleSignIn,
        facebookSignIn,
        isLoggedIn,
        logOut,
        googleAccessToken,
        facebookAccessToken,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
