import axios from 'axios';

const gamesAPI = axios.create({
  baseURL: 'https://heathers-awesome-games.herokuapp.com/api',
});

export const getCategories = () => {
  return gamesAPI.get('/categories').then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category) => {
  let path = '/reviews';
  if (category) {
    path += `?category=${category}`;
  }
  return gamesAPI.get(path).then((res) => {
    return res.data.reviews;
  });
};

export const getReview = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comment;
  });
};

export const patchVotes = (review_id) => {
  return gamesAPI
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.review;
    });
};

export const postComment = (review_id, newComment) => {
  return gamesAPI
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((res) => {
      return res.data.newComment;
    });
};

export const getReviewsBy = (order) => {
  return gamesAPI
    .get('/reviews', {
      params: {
        order: order,
      },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const deleteComment = (comment_id) => {
  return gamesAPI.delete(`/comments/${comment_id}`).then(() => {
    alert('Comment deleted');
    return null;
  });
};
