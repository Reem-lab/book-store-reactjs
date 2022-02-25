import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import '../styles/NavBar.css';

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];
  return (
    <div className="nav-header ">
      <span className="Bookstore-CMS">Bookstore CMS</span>
      {Links.map((link) => (
        <li key={link.id} className="li-links">
          <NavLink to={link.path} className={link.text === 'Categories' ? 'CATEGORIES' : 'BOOKS'} activeClassName="active-link" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
      <div>
        <CgProfile className="profile-pic" />
      </div>
    </div>
  );
};

export default NavBar;
