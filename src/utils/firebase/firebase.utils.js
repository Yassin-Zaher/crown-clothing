import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore service section
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
