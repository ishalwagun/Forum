import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTv4ZQ9EOQw1UXrh6U9eMe0B8IE0QQ144",
  authDomain: "fatan-forum.firebaseapp.com",
  databaseURL: "https://fatan-forum-default-rtdb.firebaseio.com",
  projectId: "fatan-forum",
  storageBucket: "fatan-forum.appspot.com",
  messagingSenderId: "864055758095",
  appId: "1:864055758095:web:db50574d4fc0a7c16f027a",
  measurementId: "G-SCT5K8HT84",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

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
      } else {
        setUser(null);
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
        const accessToken = credential.accessToken;

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
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
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

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{ googleSignIn, facebookSignIn, isLoggedIn }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
