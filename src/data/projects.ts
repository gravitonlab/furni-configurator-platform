export interface Project {
  id: string;
  configuratorSlug: string;
  name: string;
  updatedAt: string;
  price: string;
  preview: string;
}

const STORAGE_KEY = 'furni-projects';

const seedProjects: Project[] = [
  {
    id: 'demo-kitchen',
    configuratorSlug: 'kitchen',
    name: 'Кухня в тёплом графите',
    updatedAt: 'Сегодня',
    price: '≈ 238 000 ₽',
    preview: 'kitchen',
  },
  {
    id: 'demo-wardrobe',
    configuratorSlug: 'wardrobe',
    name: 'Шкаф для спальни',
    updatedAt: 'Вчера',
    price: '≈ 96 500 ₽',
    preview: 'wardrobe',
  },
];

export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as Project[] : seedProjects;
  } catch {
    return seedProjects;
  }
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function removeProject(id: string) {
  const projects = getProjects().filter((project) => project.id !== id);
  saveProjects(projects);
}
