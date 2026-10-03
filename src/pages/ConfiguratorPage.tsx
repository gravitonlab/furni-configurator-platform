import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getConfigurator } from '../data/configurators';
import { Icon } from '../components/Icon';
import styles from './ConfiguratorPage.module.scss';

export function ConfiguratorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = slug ? getConfigurator(slug) : undefined;
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (!item) navigate('/404', { replace: true });
  }, [item, navigate]);

  if (!item) return null;

  if (item.status === 'soon') {
    return (
      <section className="page">
        <Link to="/catalog" className={styles.back}><Icon name="arrow" width={16} height={16} /> Каталог</Link>
        <div className={styles.soon}>
          <span className="eyebrow">Скоро</span>
          <h1>{item.title}<br /><em>уже в разработке.</em></h1>
          <p>{item.details}</p>
          <Link className="button buttonDark" to="/catalog">Другие конфигураторы <Icon name="arrow" width={17} height={17} /></Link>
        </div>
      </section>
    );
  }

  return (
    <div className={`${styles.shell} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={styles.topbar}>
        <Link to="/" className={styles.logo}>furni<span>.</span></Link>
        <div className={styles.title}>
          <span>{item.category === 'kitchen' ? 'Кухни' : 'Шкафы'}</span>
          <b>{item.title}</b>
        </div>
        <div className={styles.topActions}>
          <button onClick={() => setFullScreen((value) => !value)} aria-label="Полноэкранный режим">
            <Icon name="external" width={18} height={18} />
            <span>{fullScreen ? 'Выйти' : 'На весь экран'}</span>
          </button>
          <Link to="/catalog"><Icon name="close" width={19} height={19} /></Link>
        </div>
      </div>

      <div className={styles.viewer}>
        <iframe
          title={`3D-конфигуратор: ${item.title}`}
          src={item.path}
          className={styles.frame}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
