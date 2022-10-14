import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactSlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import MenuNavigationImg from 'assets/navigation.png'
import './styles.css'

const NavigationLink = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'nav-link-active' : "nav-link"
      }
      to={to}
    >
      {title}
    </NavLink>
  )
}

const Navigation = ({ className }) => {
  return (
    <div className={className}>
      <NavigationLink
        to="/"
        title="début"
      />
      <NavigationLink
        to="/books"
        title="livres"
      />
      <NavigationLink
        to="/about"
        title="à propos"
      />
      <NavigationLink
        to="/team"
        title="equipe"
      />
      <NavigationLink
        to="/announcements"
        title="annonces"
      />
      <NavigationLink
        to="/newsletter"
        title="newsletter"
      />
    </div>
  )
}

function TopBar() {
  const [isMenuShown, setMenuShown] = useState(false)
  return (
    <nav className="d-flex w-100">
      <div className={`d-md-none d-flex w-100 justify-content-end`}>
        <div className="d-flex" onClick={() => setMenuShown(true)}>
          <img className="img-nav" src={MenuNavigationImg} alt='img-nav' />
        </div>
        <ReactSlidingPane
          isOpen={isMenuShown}
          onRequestClose={() => setMenuShown(false)}
          width="250px"
          hideHeader={true}
          className="nav-phone"
          overlayClassName="z-100"
        >
          <Navigation className="d-flex-column" />
        </ReactSlidingPane>
      </div>
      <Navigation className="d-md-flex d-none justify-content-end w-100" />
    </nav>
  )
}

export default TopBar