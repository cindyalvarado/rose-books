import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from "./modules/main-page";
import Books from "./modules/books"

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/announcements" element={<h1>Announcements</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/team" element={<h1>Team</h1>} />
          <Route path="/newsletter" element={<h1>Newsletter</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
