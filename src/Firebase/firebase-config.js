import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "astronom-e.firebaseapp.com",
  projectId: "astronom-e",
  storageBucket: "astronom-e.appspot.com",
  messagingSenderId: "412139743210",
  appId: "1:412139743210:web:68813b98df2eec747af493"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

