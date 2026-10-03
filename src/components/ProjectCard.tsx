import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { getConfigurator } from '../data/configurators';
import { ConfiguratorVisual } from './ConfiguratorVisual';
import { Icon } from './Icon';
import styles from './ProjectCard.module.scss';

interface Props {
  project: Project;
  onRemove?: (id: string) => void;
}

export function ProjectCard({ project, onRemove }: Props) {
  const configurator = getConfigurator(project.configuratorSlug);
  if (!configurator) return null;

  return (
    <article className={styles.card}>
      <Link to={`/configurator/${project.configuratorSlug}`} className={styles.visual}>
        <ConfiguratorVisual item={configurator} compact />
      </Link>
      <div className={styles.info}>
        <div>
          <span>{configurator.title} · {project.updatedAt}</span>
          <h3>{project.name}</h3>
          <strong>{project.price}</strong>
        </div>
        <div className={styles.actions}>
          <Link to={`/configurator/${project.configuratorSlug}`} aria-label="Открыть проект">
            <Icon name="external" width={18} height={18} />
          </Link>
          {onRemove && (
            <button onClick={() => onRemove(project.id)} aria-label="Удалить проект">
              <Icon name="close" width={18} height={18} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
