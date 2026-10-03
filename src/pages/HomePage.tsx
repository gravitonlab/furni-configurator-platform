import { Link } from 'react-router-dom';
import { categories, configurators } from '../data/configurators';
import { CategoryTile } from '../components/CategoryTile';
import { ConfiguratorCard } from '../components/ConfiguratorCard';
import { Icon } from '../components/Icon';
import styles from './HomePage.module.scss';

export function HomePage() {
  const available = configurators.filter((item) => item.status === 'available');

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span /> 3D-конфигураторы мебели</div>
          <h1>Мебель,<br /><em>созданная вами.</em></h1>
          <p>
            Настройте размеры, материалы и детали прямо в браузере.
            Посмотрите результат в 3D и сохраните свой проект.
          </p>
          <div className={styles.heroActions}>
            <Link className="button buttonDark" to="/catalog">
              Выбрать конфигуратор <Icon name="arrow" width={18} height={18} />
            </Link>
            <Link className="textLink" to="/projects">Посмотреть проекты</Link>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.glow} />
          <div className={styles.heroKitchen}>
            <div className={styles.heroUpper}><i /><i /><i /></div>
            <div className={styles.heroCounter} />
            <div className={styles.heroLower}><i /><i /><i /><i /><i /></div>
            <div className={styles.heroLeg} />
          </div>
          <div className={styles.dimension}>2400 × 600</div>
          <div className={styles.floatingNote}><span>01</span> Подберите<br />свой вариант</div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <span className="eyebrow">Каталог</span>
            <h2>С чего начнём?</h2>
          </div>
          <Link className="textLink" to="/catalog">Все категории <Icon name="arrow" width={16} height={16} /></Link>
        </div>
        <div className={styles.categories}>
          {categories.map((category) => <CategoryTile key={category.slug} {...category} />)}
        </div>
      </section>

      <section className={`${styles.feature} section`}>
        <div className={styles.featureVisual}>
          <div className={styles.featureFrame}>
            <div className={styles.featureCabinet}><i /><i /><i /><i /></div>
            <span className={styles.featureLabel}>360°</span>
          </div>
        </div>
        <div className={styles.featureCopy}>
          <span className="eyebrow">Как это работает</span>
          <h2>Не представляйте.<br /><em>Смотрите.</em></h2>
          <p>Меняйте параметры и сразу видьте результат. Вращайте модель, масштабируйте её и находите комбинацию, которая подходит именно вам.</p>
          <ol>
            <li><span>01</span><b>Выберите тип мебели</b></li>
            <li><span>02</span><b>Настройте размеры и материалы</b></li>
            <li><span>03</span><b>Сохраните результат</b></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <span className="eyebrow">Сейчас доступно</span>
            <h2>Попробуйте сами</h2>
          </div>
        </div>
        <div className={styles.cards}>
          {available.map((item) => <ConfiguratorCard key={item.slug} item={item} />)}
        </div>
      </section>
    </>
  );
}
