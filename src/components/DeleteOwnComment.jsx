import React, { useContext } from 'react';
import { deleteComment } from '../utils/utils';
import { UserContext } from '../contexts/userContext';

function DeleteOwnComment({ setComments, comment }) {
  const { user } = useContext(UserContext);

  const handleClick = () => {
    if (user.username === comment.author) {
      deleteComment(comment.comment_id).then(() => {
        setComments(null);
      });
    } else {
      alert("You cannot delete another user's comment");
    }
  };

  return (
    <div>
      <button className="delete-btn" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default DeleteOwnComment;
