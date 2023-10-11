import { Link } from 'react-router-dom';
import { BiSolidCartAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <div className="header transparent-background-header">
      <div className="logo">EREX</div>
      <div className="nav-link">
        <div className="header-links link-left">
          <Link to={'/about'} className="header-link">
            Everything
          </Link>
          <Link to={'/about'} className="header-link">
            Women
          </Link>
          <Link to={'/about'} className="header-link">
            Men
          </Link>
          <Link to={'/about'} className="header-link">
            Accessories
          </Link>
        </div>
        <div className="header-links link-right">
          <Link to={'/about'} className="header-link">
            About
          </Link>
          <Link to={'/about'} className="header-link">
            Contact us
          </Link>
          <Link to={'/about'} className="header-link">
            $0.00
            <BiSolidCartAlt />
          </Link>
          <Link to={'/about'} className="header-link">
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
