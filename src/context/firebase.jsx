import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser({
          user,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  const googleSignIn = () => signInWithPopup(firebaseAuth, googleProvider);

  return (
    <FirebaseContext.Provider value={{ googleSignIn, user }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
