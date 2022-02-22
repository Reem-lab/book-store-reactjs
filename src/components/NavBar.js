import { NavLink } from 'react-router-dom';

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
    <nav className="panel-pg">
      <h1>Bookstore CMS</h1>
      <ul className="ul-links">
        {Links.map((link) => (
          <li key={link.id} className="li-links">
            <NavLink to={link.path} className="links" activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
