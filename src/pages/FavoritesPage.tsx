import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { configurators } from '../data/configurators';
import { getFavorites } from '../data/favorites';
import { ConfiguratorCard } from '../components/ConfiguratorCard';
import { Icon } from '../components/Icon';
import styles from './FavoritesPage.module.scss';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState(getFavorites);

  const items = useMemo(
    () => configurators.filter((item) => favorites.includes(item.slug)),
    [favorites],
  );

  return (
    <section className="page">
      <div className={styles.intro}>
        <span className="eyebrow">Личное пространство</span>
        <h1>Избранное <em>для вдохновения.</em></h1>
        <p>Сохраняйте понравившиеся конфигураторы и возвращайтесь к ним в любой момент.</p>
      </div>

      {items.length ? (
        <div className={styles.preview}>
          {items.map((item) => (
            <ConfiguratorCard
              key={item.slug}
              item={item}
              onFavoriteChange={(slug, favorite) => {
                if (!favorite) setFavorites((current) => current.filter((itemSlug) => itemSlug !== slug));
              }}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <div className={styles.heart}><Icon name="heart" width={30} height={30} /></div>
          <h2>Здесь пока ничего нет</h2>
          <p>Нажмите на сердечко у понравившегося конфигуратора, чтобы сохранить его.</p>
          <Link className="button buttonDark" to="/catalog">Перейти в каталог <Icon name="arrow" width={17} height={17} /></Link>
        </div>
      )}
    </section>
  );
}
