import { ProjectModel } from 'src/app/models/projectModel';

export const projects: ProjectModel[] = [
  new ProjectModel(
    'Velvet Table',
    `
    Velvet Table is a website dedicated to restaurants, designed to enhance management and interaction with customers. This site showcases the various dishes offered, allows online orders, and facilitates the management of reservations and users.
    `,
    './assets/demos/restaurant.mp4',
    'https://github.com/Hakim2Mezrioui/VelvetTable',
    'http://velvettable.42web.io',
    ['PHP', 'Mysql', 'AOS', 'PDO', 'HTML', 'JavaScript', 'Bootstrap']
  ),
  new ProjectModel(
    'StorElec',
    `
    Store Elect is an e-commerce website specialized in selling electronic components. This site allows users to purchase a variety of electronic products, including phones, computers, smartwatches, and tablets.
    `,
    './assets/demos/stroeelec.mp4',
    'https://github.com/Hakim2Mezrioui/storElec',
    'https://hakim2mezrioui.github.io/storElec/',
    [
      'Angular',
      'TypeScript',
      'Bootstrap',
      'FontAwsome',
      'HTML',
      'CSS',
      'PrimeNg',
      'JavaScript',
    ]
  ),
  new ProjectModel(
    'IPTV',
    'IPTV is a website that offers IP television services with various subscription options. This project aims to provide a high-quality viewing experience along with simplified subscription management for users.',
    './assets/demos/iptv.mp4',
    'https://github.com/Hakim2Mezrioui/iptv',
    'https://hakim2mezrioui.github.io/iptv-host/',
    ['React', 'JavaScript', 'HTML', 'CSS', 'FontAwsome', 'PHP', 'Laravel']
  ),
  new ProjectModel(
    "Forum d'emploi",
    'It appears that ISTA Hay Hassani I is organizing a major event, the Employment Forum and Professional Meeting, scheduled for November 30, 2023, in Casablanca.',
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
      'FontAwsome',
      'React-Slick',
      'React-qr-code',
      'React-pdf',
    ]
  ),
  new ProjectModel(
    'Reseaux Professionnel',
    'This platform provides valuable insights into the importance of professional networks, offering essential information on their benefits, tips for effective networking, and objectives for building and maintaining professional relationships. Users can explore various resources that highlight how a robust network can enhance career opportunities, facilitate collaboration, and foster personal growth. With a focus on actionable advice and strategic networking practices, this website aims to empower individuals to leverage their connections and thrive in their professional journeys.',
    './assets/demos/devResPro.mp4',
    'https://github.com/Hakim2Mezrioui/devResPro',
    'https://hakim2mezrioui.github.io/devResPro/',
    ['Angular', 'TypeScript', 'Bootstrap', 'FontAwsome', 'HTML', 'CSS']
  ),
  new ProjectModel(
    'INFOBIBLIOPHILE',
    'Infobibliophile is a unique platform dedicated to the complete management of books, divided into a web version and a mobile application. The web platform enables users to efficiently manage users, books, categories, and other content.',
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
      'FontAwsome',
      'HTML',
      'CSS',
    ]
  ),
];
