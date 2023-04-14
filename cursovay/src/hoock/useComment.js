// import { getDocs } from "firebase/firestore";
// import { useDispatch } from "react-redux";
// import { setCommentSlise } from "../store/reducer/commentSlice";
// import { commentsCol } from "../firebase";

// const useComment = async () => {
//   const dispatch = useDispatch();
//   const comments = [];
//   const querySnapshot = await getDocs(commentsCol);
//   const getComments = () => {
//     querySnapshot.forEach((doc) => {
//       comments.push(doc.data());
//     });
//     dispatch(setCommentSlise(comments));
//   };
//   return { getComments };
// };

// export default useComment;
import { getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCommentSlise } from "../store/reducer/commentSlice";
import { commentsCol } from "../firebase";

const useComment = () => {
  const dispatch = useDispatch();

  const getComments = async () => {
    const comments = [];
    const querySnapshot = await getDocs(commentsCol);
    querySnapshot.forEach((doc) => {
      comments.push(doc.data());
    });
    dispatch(setCommentSlise(comments));
  };

  return { getComments };
};

export default useComment;
