import React, { useState, useEffect } from 'react';
import { getReviewsBy } from '../utils/utils';
import { useParams, Link } from 'react-router-dom';

function SortBy() {
  const [reviews, setReviews] = useState([]);
  const [newOrder, setNewOrder] = useState('asc');
  const { order } = useParams();

  useEffect(() => {
    getReviewsBy(order).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
    });
  }, [order]);

  const handleClick = () => {
    //console.log('click');
  };

  return (
    <div>
      <Link
        to={`/reviews?sort_by=created_at&&order=asc`}
        className="newestFirst"
      >
        <button className="newestFirst" onClick={handleClick}>
          Newest First
        </button>
      </Link>
      <button className="oldestFirst">Oldest First</button>
      <button className="mostVotes">Most Votes</button>
      <button className="leastVotes">Least Votes</button>
      <button className="mostComments">Most Comments</button>
      <button className="leastComments">Least Comments</button>
    </div>
  );
}

export default SortBy;
