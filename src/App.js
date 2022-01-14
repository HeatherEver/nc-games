import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Review from './components/Review';
import RequireLogin from './components/RequireLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RequireLogin>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Home />} />
            <Route path="/reviews/category/:category" element={<Home />} />
            <Route
              path="/reviews/category/:category/reviews/:review_id"
              element={<Review />}
            />
            <Route path="/reviews/:review_id" element={<Review />} />
          </Routes>
        </RequireLogin>
      </div>
    </BrowserRouter>
  );
}

export default App;
