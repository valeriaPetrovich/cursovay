import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKKzJQfXFEw7SCDA76RzCgvDoSN0Lq21o",
    authDomain: "to-do-d6173.firebaseapp.com",
    projectId: "to-do-d6173",
    storageBucket: "to-do-d6173.appspot.com",
    messagingSenderId: "736961004959",
    appId: "1:736961004959:web:3218707fa56224c00429aa",
    measurementId: "G-02M7FNWPZE"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  export const commentsCol = collection(db, "comment");

  export const getComments = async () => {
    const comments = [];
    const querySnapshot = await getDocs(commentsCol);
    querySnapshot.forEach((doc) => {
      comments.push(doc.data());
    });
    return comments
  }