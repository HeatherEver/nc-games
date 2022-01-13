import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReviews } from '../utils/utils';
import Votes from './Votes';

function Home() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, [category]);

  return (
    <div className="home">
      <h1 className="reviews-title">Reviews</h1>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviews-list">
              <img
                src={review.review_img_url}
                width="100"
                height="100"
                alt="board game icon"
              />
              <Link to={`reviews/${review.review_id}`}>
                <p>{review.title}</p>
              </Link>
              <p>{review.designer}</p>
              <p>{review.owner}</p>
              <Votes votes={review.votes} review_id={review.review_id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
