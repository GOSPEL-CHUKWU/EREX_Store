import { Link, useLocation } from 'react-router-dom';
import { BiSolidCartAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

type headerLink = {
  path: string;
  title: string;
  backgroundColorIsWhite: boolean;
  activeLink: Object;
};

const HeaderLinkComponent = ({
  path,
  title,
  backgroundColorIsWhite,
  activeLink,
}: headerLink) => {
  return (
    <div>
      <Link
        to={path}
        style={activeLink}
        className={`header-link ${
          backgroundColorIsWhite
            ? 'header-link-in-white-background'
            : 'header-link-in-transparent-background'
        } active-link`}
      >
        {title}
      </Link>
    </div>
  );
};

type headerProps = {
  backgroundColorIsWhite: boolean;
};

function Header({ backgroundColorIsWhite }: headerProps) {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div
      className={`header ${
        backgroundColorIsWhite
          ? 'white-background-header'
          : 'transparent-background-header'
      }`}
    >
      <Link to={'/'} className="logo" style={{ textDecoration: 'none' }}>
        EREX
      </Link>
      <div className="nav-links">
        <div className="header-links">
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/fullcloset/store"
            title="Everything"
            activeLink={
              pathname.includes('store') ? { color: '#fe9000' } : { color: '' }
            }
          />
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/fullcloset/product-category/women"
            title="Women"
            activeLink={
              pathname.includes('fullcloset/product-category/women')
                ? { color: '#fe9000' }
                : { color: '' }
            }
          />
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/fullcloset/product-category/men"
            title="Men"
            activeLink={
              pathname.includes('fullcloset/product-category/men')
                ? { color: '#fe9000' }
                : { color: '' }
            }
          />
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/fullcloset/product-category/accessories"
            title="Accessories"
            activeLink={
              pathname.includes('fullcloset/product-category/accessories')
                ? { color: '#fe9000' }
                : { color: '' }
            }
          />
        </div>
        <div className="header-links">
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/about"
            title="About"
            activeLink={
              pathname.includes('about') ? { color: '#fe9000' } : { color: '' }
            }
          />
          <HeaderLinkComponent
            backgroundColorIsWhite={backgroundColorIsWhite}
            path="/about"
            title="Contact us"
            activeLink={
              pathname.includes('store/men')
                ? { color: '#fe9000' }
                : { color: '' }
            }
          />
          <Link
            to={'/about'}
            className={`header-link ${
              backgroundColorIsWhite
                ? 'header-link-in-white-background'
                : 'header-link-in-transparent-background'
            }`}
          >
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
            <Link
              to={'/about'}
              className={`header-link ${
                backgroundColorIsWhite
                  ? 'header-link-in-white-background'
                  : 'header-link-in-transparent-background'
              }`}
            >
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
