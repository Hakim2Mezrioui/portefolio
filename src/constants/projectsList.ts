import { ProjectModel } from 'src/app/models/projectModel';

export const projects: ProjectModel[] = [
  new ProjectModel(
    'projects.velvetTableTitle',
    'projects.velvetTableDesc',
    './assets/demos/restaurant.mp4',
    'https://github.com/Hakim2Mezrioui/VelvetTable',
    'http://velvettable.42web.io',
    ['PHP', 'Mysql', 'AOS', 'PDO', 'HTML', 'JavaScript', 'Bootstrap'],
    '../assets/demos/restaurant.png'
  ),
  new ProjectModel(
    'projects.storElecTitle',
    'projects.storElecDesc',
    './assets/demos/stroeelec.mp4',
    'https://github.com/Hakim2Mezrioui/storElec',
    'https://hakim2mezrioui.github.io/storElec/',
    [
      'Angular',
      'TypeScript',
      'Bootstrap',
      'Font Awesome',
      'HTML',
      'CSS',
      'PrimeNg',
      'JavaScript',
    ],
    '../assets/demos/stroeelec.png'
  ),
  new ProjectModel(
    'projects.iptvTitle',
    'projects.iptvDesc',
    './assets/demos/iptv.mp4',
    'https://github.com/Hakim2Mezrioui/iptv',
    'https://hakim2mezrioui.github.io/iptv-host/',
    ['React', 'JavaScript', 'HTML', 'CSS', 'Font Awesome', 'PHP', 'Laravel'],
    '../assets/demos/iptv.png'
  ),
  new ProjectModel(
    'projects.forumEmploiTitle',
    'projects.forumEmploiDesc',
    './assets/demos/forumEmploi.mp4',
    'https://github.com/Hakim2Mezrioui/gestion-inscription',
    'https://istahh1.com/',
    [
      'React',
      'JavaScript',
      'PHP',
      'Laravel',
      'React-Toastify',
      'Swiper',
      'Bootstrap',
      'Font Awesome',
      'React-Slick',
      'React-qr-code',
      'React-pdf',
    ],
    '../assets/demos/forumEmploi.png'
  ),
  new ProjectModel(
    'projects.reseauxProTitle',
    'projects.reseauxProDesc',
    './assets/demos/devResPro.mp4',
    'https://github.com/Hakim2Mezrioui/devResPro',
    'https://hakim2mezrioui.github.io/devResPro/',
    ['Angular', 'TypeScript', 'Bootstrap', 'Font Awesome', 'HTML', 'CSS'],
    '../assets/demos/devResPro.png'
  ),
  new ProjectModel(
    'projects.infobibliophileTitle',
    'projects.infobibliophileDesc',
    './assets/demos/infobibliophile_plateform.mp4',
    'https://github.com/Hakim2Mezrioui/infobibliophile-app',
    '#',
    [
      'Angular',
      'TypeScript',
      'FLUTTER',
      'DART',
      'LARAVEL',
      'PHP',
      'MYSQL',
      'SQFLIT',
      'Bootstrap',
      'Font Awesome',
      'HTML',
      'CSS',
    ],
    '../assets/demos/infobibliophile_plateform.png'
  ),
];
