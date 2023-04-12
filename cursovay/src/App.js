import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import MainPage from "./pages/MainPage";
import Scan from "./pages/Scan";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import "firebase/database";
// import { getAuth } from "firebase/auth";
// import {collection, where, getDocs,addDoc, query } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyB2dmM9QiV9UjakaBaA_cXsJnMWO6ye4Sk",
// 	authDomain: "iamlemenu-cursovay.firebaseapp.com",
// 	projectId: "iamlemenu-cursovay",
// 	storageBucket: "iamlemenu-cursovay.appspot.com",
// 	messagingSenderId: "30364025958",
// 	appId: "1:30364025958:web:469cc91e754ec6c60319a7",
// 	measurementId: "G-T90HJQNMJC"
// };
// const firebase = initializeApp(firebaseConfig);


// const addTodoBD = async () => {
//   const docRef = await addDoc(collection(firestore, "to-do"), {
//     todo:inputName,
//     UserID: auth.lastNotifiedUid,
//     id: Math.floor(Math.random()* 10000000)

//    });
//   return docRef
// }
// const auth = getAuth(firebase);
// const firestore = getFirestore(firebase);
// console.log('firestore ',firestore )
// const citiesRef = collection(firestore, "db");
// console.log(citiesRef)

// const firebaseConfig = {
// 	apiKey: "AIzaSyB2dmM9QiV9UjakaBaA_cXsJnMWO6ye4Sk",
// 	authDomain: "iamlemenu-cursovay.firebaseapp.com",
// 	projectId: "iamlemenu-cursovay",
// 	storageBucket: "iamlemenu-cursovay.appspot.com",
// 	messagingSenderId: "30364025958",
// 	appId: "1:30364025958:web:469cc91e754ec6c60319a7",
// 	measurementId: "G-T90HJQNMJC"
//   };

//   const app = initializeApp(firebaseConfig);
//   const database = getFirestore(app);

// async function getCities(db) {
//   const citiesCol = collection(db, 'db');
//   //console.log('citiesCol',citiesCol)
//   const citySnapshot = await getDocs(citiesCol);
//   console.log('citySnapshot',citySnapshot)
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log('cityList',cityList)
//   return cityList;
// }

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/main/:id" element={<CardDetails />} />
        <Route path="/scan/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
