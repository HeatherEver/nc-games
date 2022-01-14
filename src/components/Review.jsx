import React, { useEffect, useState } from 'react';
import { getReview } from '../utils/utils';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Comments from './Comments';

function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getReview(review_id)
      .then((reviewFromAPI) => {
        setReview(reviewFromAPI[0]);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
          alt="user's profile"
        />
        <p>{review.title}</p>
        <p>{review.review_body}</p>
        <p>{review.designer}</p>
        <p>{review.category}</p>
        <p>{review.owner}</p>
        <p>{moment(review.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{review.comment_count}</p>
        <p> {review.votes}</p>
      </div>
      <Comments />
    </div>
  );
}

export default Review;
