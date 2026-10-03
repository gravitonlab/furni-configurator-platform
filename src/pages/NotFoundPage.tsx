import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
  return (
    <section className={styles.page}>
      <span className="eyebrow">404</span>
      <h1>Такой страницы<br /><em>ещё не придумали.</em></h1>
      <p>Но мебель уже можно спроектировать.</p>
      <Link className="button buttonDark" to="/catalog">Открыть каталог <Icon name="arrow" width={17} height={17} /></Link>
    </section>
  );
}
