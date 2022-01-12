import React, { useEffect, useState } from 'react';
import { getReviews } from '../utils/utils';

function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, []);

  return (
    <div className="home">
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <img src={review.review_img_url} width="100" height="100" />
              <p>{review.title}</p>
              <p>{review.designer}</p>
              <p>{review.owner}</p>
              <p>{review.category}</p>
              <p>{review.created_at}</p>
              <p>{review.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
