import React, { useState, useEffect } from 'react';
import { patchVotes } from '../utils/utils';

function Votes({ votes, review_id }) {
  const [vote, setVote] = useState(votes);
  const [isError, setIsError] = useState(false);

  const handleDownClick = () => {
    setIsError(false);
    setVote((currVotes) => currVotes - 1);
    patchVotes(review_id, votes).catch(() => {
      setIsError(true);
      setVote((currVotes) => currVotes + 1);
    });
  };

  const handleUpClick = () => {
    setIsError(false);
    setVote((currVotes) => currVotes + 1);
    patchVotes(review_id, votes).catch(() => {
      setIsError(true);
      setVote((currVotes) => currVotes - 1);
    });
  };

  return (
    <>
      <button onClick={handleUpClick}>
        <p>👍</p>
      </button>
      <p> {vote}</p>
      <button onClick={handleDownClick}>
        <p>👎 </p>
      </button>
      {isError && <p>Sorry there was a problem, please try again later</p>}
    </>
  );
}

export default Votes;
