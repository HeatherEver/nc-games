import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReviews } from '../utils/utils';

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
            <Link to={`reviews/${review.review_id}`}>
              <li key={review.review_id} className="reviews-list">
                <img
                  src={review.review_img_url}
                  width="100"
                  height="100"
                  alt="board game icon"
                />
                <p>{review.title}</p>
                <p>{review.designer}</p>
                <p>{review.owner}</p>
                <p>{review.votes}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
