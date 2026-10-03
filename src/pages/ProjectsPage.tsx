import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, removeProject } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Icon } from '../components/Icon';
import styles from './ProjectsPage.module.scss';

export function ProjectsPage() {
  const [projects, setProjects] = useState(getProjects);

  const handleRemove = (id: string) => {
    removeProject(id);
    setProjects((current) => current.filter((project) => project.id !== id));
  };

  return (
    <section className="page">
      <div className={styles.intro}>
        <span className="eyebrow">Личное пространство</span>
        <h1>Мои <em>проекты.</em></h1>
        <p>Сохранённые варианты всегда под рукой. Авторизация пока не требуется — проекты хранятся в этом браузере.</p>
      </div>

      {projects.length ? (
        <div className={styles.grid}>
          {projects.map((project) => <ProjectCard key={project.id} project={project} onRemove={handleRemove} />)}
        </div>
      ) : (
        <div className={styles.empty}>
          <Icon name="folder" width={32} height={32} />
          <h2>Здесь пока пусто</h2>
          <p>Откройте конфигуратор и создайте первый вариант.</p>
          <Link className="button buttonDark" to="/catalog">Выбрать конфигуратор <Icon name="arrow" width={17} height={17} /></Link>
        </div>
      )}
    </section>
  );
}
