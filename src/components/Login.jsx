import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
  };

  return (
    <div className="login-page">
      <p className="login-text">
        This page's lovely content is for users only, so please enter a username
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Username:
          <input
            className="login-input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
      </form>
    </div>
  );
};

export default Login;
