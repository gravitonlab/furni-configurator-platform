import type { Configurator } from '../data/configurators';
import styles from './ConfiguratorVisual.module.scss';

interface Props {
  item: Configurator;
  compact?: boolean;
}

export function ConfiguratorVisual({ item, compact = false }: Props) {
  return (
    <div className={`${styles.visual} ${styles[item.accent]} ${compact ? styles.compact : ''}`}>
      <div className={styles.room}>
        <div className={styles.floor} />
        <div className={styles.wall} />
        {item.slug === 'kitchen' ? (
          <div className={styles.kitchen}>
            <div className={styles.upper} />
            <div className={styles.lower}>
              <i /><i /><i /><i />
            </div>
            <div className={styles.counter} />
          </div>
        ) : item.slug === 'wardrobe' ? (
          <div className={styles.wardrobe}>
            <i /><i /><i /><i />
            <div className={styles.wardrobeTop} />
          </div>
        ) : (
          <div className={styles.futureObject}>
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
      {!compact && <div className={styles.badge}><span>3D</span> интерактивный просмотр</div>}
    </div>
  );
}
