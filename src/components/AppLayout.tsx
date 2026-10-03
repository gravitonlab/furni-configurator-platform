import { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './AppLayout.module.scss';

const navItems = [
  { to: '/catalog', label: 'Конфигураторы' },
  { to: '/projects', label: 'Мои проекты' },
  { to: '/favorites', label: 'Избранное' },
];

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link className={styles.logo} to="/" onClick={() => setMobileOpen(false)}>
          furni<span>.</span>
        </Link>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <Link className={styles.headerIcon} to="/favorites" aria-label="Избранное">
            <Icon name="heart" />
          </Link>
          <button
            className={styles.menuButton}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.logo}>furni<span>.</span></span>
          <p>Создавайте мебель,<br />которую хочется оставить.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link to="/catalog">Конфигураторы</Link>
          <Link to="/projects">Мои проекты</Link>
          <Link to="/favorites">Избранное</Link>
        </div>
        <span className={styles.copyright}>3D furniture configurator · 2026</span>
      </footer>
    </div>
  );
}
