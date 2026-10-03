import type { ReactNode, SVGProps } from 'react';

type IconName =
  | 'arrow'
  | 'heart'
  | 'menu'
  | 'close'
  | 'cube'
  | 'folder'
  | 'grid'
  | 'chevron'
  | 'plus'
  | 'spark'
  | 'external';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', ...props };

  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
    heart: <path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
    close: <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="m4.4 7.7 7.6 4.4 7.6-4.4M12 12.1V21" stroke="currentColor" strokeWidth="1.5" /></>,
    folder: <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
    grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" stroke="currentColor" strokeWidth="1.5" />,
    chevron: <path d="m8 10 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
    plus: <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
    spark: <path d="m12 3 1.4 6.2L19 12l-5.6 2.8L12 21l-1.4-6.2L5 12l5.6-2.8L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />,
    external: <><path d="M14 5h5v5M19 5l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
  };

  return <svg {...common} aria-hidden="true">{paths[name]}</svg>;
}
