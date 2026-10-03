import { Link, useParams } from 'react-router-dom';
import { categories, configurators } from '../data/configurators';
import { ConfiguratorCard } from '../components/ConfiguratorCard';
import { Icon } from '../components/Icon';
import styles from './CategoryPage.module.scss';

export function CategoryPage() {
  const { category: slug } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const items = configurators.filter((item) => item.category === slug);

  if (!category) return null;

  return (
    <section className="page">
      <Link to="/catalog" className={styles.back}><Icon name="arrow" width={16} height={16} /> Все конфигураторы</Link>
      <div className={styles.intro}>
        <span className="eyebrow">{category.count ? `${category.count} конфигуратор` : 'Раздел'}</span>
        <h1>{category.title}<br /><em>под ваше пространство.</em></h1>
        <p>{category.description}. Выберите готовый инструмент и настройте его под себя.</p>
      </div>

      {items.length ? (
        <div className={styles.grid}>{items.map((item) => <ConfiguratorCard key={item.slug} item={item} />)}</div>
      ) : (
        <div className={styles.empty}>
          <span>Скоро</span>
          <h2>Мы уже проектируем этот конфигуратор.</h2>
          <p>Раздел появится здесь, когда инструмент будет готов.</p>
          <Link className="button buttonDark" to="/catalog">Вернуться в каталог <Icon name="arrow" width={17} height={17} /></Link>
        </div>
      )}
    </section>
  );
}
