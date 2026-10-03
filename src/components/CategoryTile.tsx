import { Link } from 'react-router-dom';
import type { ConfiguratorCategory } from '../data/configurators';
import { Icon } from './Icon';
import styles from './CategoryTile.module.scss';

interface Props {
  slug: ConfiguratorCategory;
  title: string;
  description: string;
  count: number;
  accent: string;
}

export function CategoryTile({ slug, title, description, count, accent }: Props) {
  return (
    <Link to={`/catalog/${slug}`} className={`${styles.tile} ${styles[accent]}`}>
      <div className={styles.art}>
        <span className={styles.shapeOne} />
        <span className={styles.shapeTwo} />
        <span className={styles.shapeThree} />
      </div>
      <div className={styles.content}>
        <div>
          <span>{count ? `${count} конфигуратор` : 'Скоро'}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className={styles.arrow}><Icon name="arrow" width={18} height={18} /></span>
      </div>
    </Link>
  );
}
