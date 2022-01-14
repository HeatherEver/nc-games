import React, { useState, useContext } from 'react';
import { postComment } from '../utils/utils';
import { UserContext } from '../contexts/userContext';
import { useParams } from 'react-router-dom';

function PostComment({ setComments }) {
  const [comment, setComment] = useState('');
  const { user } = useContext(UserContext);
  const { review_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { username: user.username, body: comment };
    postComment(review_id, newComment)
      .then((commentFromAPI) => {
        setComments((prevComms) => [commentFromAPI, ...prevComms]);
        setComment('');
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <p>Post comment</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          className="post-input"
          type="text"
          id="comment"
          value={comment}
          name="comment"
          onChange={handleCommentChange}
        ></input>
        <section>
          <input className="submit-post" type="submit" value="Submit"></input>
        </section>
      </form>
    </div>
  );
}

export default PostComment;
