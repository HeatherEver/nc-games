import React, { useEffect, useState } from 'react';
import { getComments, getReview } from '../utils/utils';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReview(review_id).then((reviewFromAPI) => {
      setReview(reviewFromAPI[0]);
    });
  }, []);

  useEffect(() => {
    getComments(review_id).then((commentsFromAPI) => {
      setComments(commentsFromAPI);
    });
  }, []);

  return (
    <div className="review">
      <h2 className="review-title">{review.owner}'s Review</h2>
      <div className="review-list">
        <img
          src={review.review_img_url}
          width="300"
          height="300"
          alt="board game icon"
        />
        <p>{review.title}</p>
        <p>{review.review_body}</p>
        <p>{review.designer}</p>
        <p>{review.category}</p>
        <p>{review.owner}</p>
        <p>{moment(review.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{review.comment_count}</p>
        <p>{review.votes}</p>
      </div>
      <div className="comments-list">
        <h2 id="comment-header">Comments</h2>
        <ul className="comments-list">
          {comments.map((comment) => {
            return (
              <li key={comment.created_at}>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>
                  {moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
                <p>{comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Review;
