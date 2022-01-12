import axios from 'axios';

const gamesAPI = axios.create({
  baseURL: 'https://heathers-awesome-games.herokuapp.com/api',
});

export const getCategories = () => {
  return gamesAPI
    .get('/categories')
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const getReviews = (category) => {
  let path = '/reviews';
  if (category) {
    path += `?category=${category}`;
  }
  return gamesAPI
    .get(path)
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.log(err);
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
