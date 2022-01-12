import { React, useState, useEffect } from 'react';
import { getCategories } from '../utils/utils';
import { Link } from 'react-router-dom';

function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromAPI) => {
      setCategories(categoriesFromAPI);
    });
  }, []);

  return (
    <nav className="nav">
      <Link to="/">
        <p className="category_list">Home</p>
      </Link>
      {categories.map((category) => {
        return (
          <Link
            to={`/reviews/category/${category.slug}`}
            key={category.slug}
            className="category_list"
          >
            {category.slug}
          </Link>
        );
      })}
      <button className="logout">Log out</button>
    </nav>
  );
}

export default Nav;
