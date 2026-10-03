import { useState } from "react";
import { Link } from "react-router-dom";
import { type Configurator, categories } from "../data/configurators";
import { isFavorite, toggleFavorite } from "../data/favorites";
import { Icon } from "./Icon";
import { ConfiguratorVisual } from "./ConfiguratorVisual";
import styles from "./ConfiguratorCard.module.scss";

interface Props {
  item: Configurator;
  onFavoriteChange?: (slug: string, favorite: boolean) => void;
}

export function ConfiguratorCard({ item, onFavoriteChange }: Props) {
  const category = categories.find((entry) => entry.slug === item.category);
  const [favorite, setFavorite] = useState(() => isFavorite(item.slug));

  const handleFavorite = () => {
    const next = toggleFavorite(item.slug);
    setFavorite(next);
    onFavoriteChange?.(item.slug, next);
  };

  return (
    <article className={styles.card}>
      <Link to={`/configurator/${item.slug}`} className={styles.visualLink}>
        <ConfiguratorVisual item={item} />
        <span
          className={`${styles.status} ${item.status === "soon" ? styles.soon : ""}`}
        >
          {item.status === "available" ? "Доступен" : "Скоро"}
        </span>
      </Link>

      <div className={styles.body}>
        <div className={styles.heading}>
          <div>
            <span className={styles.category}>{category?.title}</span>
            <h3>{item.title}</h3>
          </div>
          <button
            className={`${styles.favorite} ${favorite ? styles.favoriteActive : ""}`}
            onClick={handleFavorite}
            aria-label={
              favorite ? "Убрать из избранного" : "Добавить в избранное"
            }
            aria-pressed={favorite}
          >
            <Icon name="heart" width={18} height={18} />
          </button>
        </div>
        <p>{item.description}</p>
        <div className={styles.tags}>
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className={styles.open} to={`/configurator/${item.slug}`}>
          {item.status === "available" ? "Открыть конфигуратор" : "Подробнее"}
          <Icon name="arrow" width={17} height={17} />
        </Link>
      </div>
    </article>
  );
}
