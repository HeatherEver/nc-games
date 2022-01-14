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

  const handleMostVotesClick = () => {
    console.log(reviews);
    const sortedReviews = [...reviews].sort();
    console.log(sortedReviews);
  };
  return (
    <div>
      <Link
        to={`/reviews?sort_by=created_at&&order=asc`}
        className="newestFirst"
      >
        <button className="newestFirst">Newest First</button>
      </Link>
      <button className="oldestFirst">Oldest First</button>

      <Link to={`/reviews?sort_by=votes&&order=asc`} className="mostVotes">
        <button className="mostVotes" onClick={handleMostVotesClick}>
          Most Votes
        </button>
      </Link>
      <button className="leastVotes">Least Votes</button>
      <button className="mostComments">Most Comments</button>
      <button className="leastComments">Least Comments</button>
    </div>
  );
}

export default SortBy;
