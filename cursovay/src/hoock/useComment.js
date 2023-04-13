import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import {setCommentSlise} from '../store/reducer/commentSlice';//'../store/reducer/commentSlise'
//import user from "..//assets/user.png";


const firebaseConfig = {
    apiKey: "AIzaSyANOJoYDh4JbPMmLQdOI8AlBQjsB_kZLRc",
    authDomain: "aymlmenu.firebaseapp.com",
    projectId: "aymlmenu",
    storageBucket: "aymlmenu.appspot.com",
    messagingSenderId: "643635001166",
    appId: "1:643635001166:web:d5c9718c76689db5e8901f",
    measurementId: "G-W77RKN4SK6",
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const commentsCol = collection(db, "comment");
  const useComment = async () => {
    const dispatch = useDispatch();
    const comments = [];
    const querySnapshot = await getDocs(commentsCol);
    querySnapshot.forEach((doc) => {
      comments.push(doc.data());
    });
    dispatch(setCommentSlise(comments)) ;
  };

  export default useComment;

//const useComment = () => {
  

//   const useComment = async () => {
//    // const comm = [];
//     const querySnapshot = await getDocs(commentsCol);
//     console.log(querySnapshot);
//     return querySnapshot.map((doc)=> doc.data())

//     // const commentElement=querySnapshot.map((doc) => {
//     //   // comm.push(doc.data());
//     //   // console.log(comm)
//     //   // comm.map((el) => {
//     //   //   if (el === el.strMeal) {
//     //   //     return (
//     //   //       <div>
//     //   //         <h2>Комментарии</h2>
//     //   //         <div>
//     //   //           <img src={user} alt="user" />
//     //   //           <div>
//     //   //             <p>{el}</p>
//     //   //           </div>
//     //   //         </div>
//     //   //       </div>
//     //   //     );
//     //   //   }
//     //   // });
      
//     // });

//    // return{commentElement}
//   };
// //   console.log(getComment())
// //   return { getComment };
// // };


