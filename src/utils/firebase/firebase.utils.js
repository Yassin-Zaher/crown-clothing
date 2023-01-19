import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4mupDxiDIrBiAkzhAKtBtC8HbWEGnlLo",
  authDomain: "crwn-clothing-v2-13460.firebaseapp.com",
  projectId: "crwn-clothing-v2-13460",
  storageBucket: "crwn-clothing-v2-13460.appspot.com",
  messagingSenderId: "869338769744",
  appId: "1:869338769744:web:985ac04e261211a60f2455",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfromation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // user data deos not exist
  // create / set documnet with data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfromation, // overright the displayName
      });
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }
  // if user data exist
  // return the user data
  return userDocRef;
};

// create account with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

// sign in user with google and password
export const signInAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

// sign out the user
export const signOutUser = () => signOut(auth);
// observer pattern
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
