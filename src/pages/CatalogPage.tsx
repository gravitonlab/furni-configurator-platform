import { useState } from 'react';
import { categories, configurators, type ConfiguratorCategory } from '../data/configurators';
import { ConfiguratorCard } from '../components/ConfiguratorCard';
import styles from './CatalogPage.module.scss';

export function CatalogPage() {
  const [active, setActive] = useState<ConfiguratorCategory | 'all'>('all');
  const filtered = active === 'all'
    ? configurators
    : configurators.filter((item) => item.category === active);

  return (
    <section className="page">
      <div className={styles.intro}>
        <span className="eyebrow">Каталог</span>
        <h1>Выберите пространство,<br /><em>которое хотите создать.</em></h1>
        <p>Все конфигураторы в одном месте. Начните с категории — остальное настроите по ходу.</p>
      </div>

      <div className={styles.filters} role="tablist" aria-label="Категории">
        <button className={active === 'all' ? styles.active : ''} onClick={() => setActive('all')}>Все</button>
        {categories.map((category) => (
          <button
            key={category.slug}
            className={active === category.slug ? styles.active : ''}
            onClick={() => setActive(category.slug)}
          >
            {category.title}
            {category.count > 0 && <small>{category.count}</small>}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => <ConfiguratorCard key={item.slug} item={item} />)}
      </div>
    </section>
  );
}
