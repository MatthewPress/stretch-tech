import logo from '../../assets/1200px-ghost-logo.svg.png';

import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Cheers For Fears Ghost Logo" />
      <h1>Cheers For Fears</h1>
    </header>
  )
}

export default Header;