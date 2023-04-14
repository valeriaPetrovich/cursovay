import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useComment from "../../hoock/useComment";
import user from "../../assets/user.png";

const Comments = ({ name }) => {
  const { getComments } = useComment();
  useEffect(() => {
    getComments();
  }, []);
  const comments = useSelector((state) => state.comment.comment);
  console.log(comments);

  return (
    <div>
      <h2>Комментарии</h2>
      {comments.map((comment) => {
        if (comment.RecipeName === name) {
          return (
            <div key={Math.random()}>
              <img src={user} alt="user" />
              <div>
                <p>{comment.Comment}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Comments;
