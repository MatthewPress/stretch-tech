import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

import logo from '../../assets/1200px-ghost-logo.svg.png';

import './Header.css';

function Header({ handleStartAgain }) {
  return (
    <NavLink to="/">
      <header>
        <img src={logo} alt="Cheers For Fears Ghost Logo" />
        <h1 onClick={() => handleStartAgain()}>Cheers For Fears</h1>
      </header>
    </NavLink>
  )
}

export default Header;

Header.prototypes = {
  handleStartAgain: PropTypes.func.isRequired
}