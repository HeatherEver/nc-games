import { React, useState, useEffect } from 'react';
import { getCategories } from '../utils/utils';
import { Link } from 'react-router-dom';
import { UserProvider } from '../contexts/userContext';

function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromAPI) => {
      setCategories(categoriesFromAPI);
    });
  }, []);

  const { logout } = UserProvider;

  return (
    <nav className="nav">
      <Link to="/">
        <p className="category_list">Home</p>
      </Link>
      {categories.map((category) => {
        return (
          <p key={category.slug} className="category_list">
            {category.slug}
          </p>
        );
      })}
      <button className="logout" onClick={logout}>
        Log out
      </button>
    </nav>
  );
}

export default Nav;
