import React from 'react';
import { NavLink } from 'react-router-dom';

interface OwnProps {}

type Props = OwnProps;

const Navbar: React.FC<Props> = () => (
  <nav>
    <div className="nav-wrapper purple darken-3 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
