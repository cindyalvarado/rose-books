import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from "./modules/main-page";
import Books from "./modules/books"
import About from "modules/about";
import Announcements from "modules/announcements";
import Team from "modules/team";
import Events from "modules/events";
import NewsletterPage from "modules/newsletter";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
