import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/utils';
import DeleteOwnComment from './DeleteOwnComment';
import moment from 'moment';
import PostComment from './PostComment';

function Comments() {
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsError(false);
    getComments(review_id)
      .then((commentsFromAPI) => {
        setComments(commentsFromAPI);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  return (
    <div className="comments">
      <h2 id="comment-header">Comments</h2>
      <PostComment setComments={setComments} />
      <ul>
        {comments &&
          comments.map((comment) => {
            return (
              <li className="comments-list" key={comment.created_at}>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>
                  {moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
                <p>{comment.votes}</p>
                <DeleteOwnComment setComments={setComments} comment={comment} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Comments;
