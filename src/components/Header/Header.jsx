import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.link} to="/">
          &#x1F3D5; Happy Campers
        </NavLink>
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
