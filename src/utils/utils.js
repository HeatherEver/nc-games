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

export const getReviews = () => {
  return gamesAPI
    .get('/reviews')
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.log(err);
    });
};
