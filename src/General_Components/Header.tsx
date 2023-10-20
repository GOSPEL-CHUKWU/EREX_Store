import { Link } from 'react-router-dom';
import { BiSolidCartAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Header() {
  return (
    <div className="header transparent-background-header">
      <div className="logo">EREX</div>
      <div className="nav-links">
        <div className="header-links ">
          <div>
            <Link to={'/about'} className="header-link">
              Everything
            </Link>
          </div>
          <div>
            <Link to={'/about'} className="header-link">
              Women
            </Link>
          </div>
          <div>
            <Link to={'/about'} className="header-link">
              Men
            </Link>
          </div>
          <div>
            <Link to={'/about'} className="header-link">
              Accessories
            </Link>
          </div>
        </div>
        <div className="header-links ">
          <div>
            <Link to={'/about'} className="header-link">
              About
            </Link>
          </div>
          <div>
            <Link to={'/about'} className="header-link">
              Contact us
            </Link>
          </div>
          <Link to={'/about'} className="header-link ">
            <div className="header-cart">
              <span>$0.00</span>
              <IconContext.Provider value={{ size: '28px' }}>
                <div className="header-cart-icon-and-amount">
                  <BiSolidCartAlt />
                  <div className="header-cart-item-amount">2</div>
                </div>
              </IconContext.Provider>
            </div>
          </Link>
          <div>
            <Link to={'/about'} className="header-link">
              <IconContext.Provider value={{ size: '22px' }}>
                <FaUser />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
