import React, { useContext } from 'react';
import { deleteComment } from '../utils/utils';
import { UserContext } from '../contexts/userContext';

function DeleteOwnComment({ setComments, comment }) {
  const { user } = useContext(UserContext);

  const handleClick = (id) => {
    if (user.username === comment.author) {
      deleteComment(id).then(() => {
        setComments((prevComments) => {
          return prevComments.filter((comm) => {
            return comm.comment_id !== id;
          });
        });
      });
    } else {
      alert("You cannot delete another user's comment");
    }
  };

  return (
    <div>
      <button
        className="delete-btn"
        onClick={() => {
          handleClick(comment.comment_id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteOwnComment;
