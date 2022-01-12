import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
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
            <Route path="reviews" element={<Home />} />
          </Routes>
        </RequireLogin>
      </div>
    </BrowserRouter>
  );
}

export default App;
