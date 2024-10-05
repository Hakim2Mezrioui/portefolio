import { ProjectModel } from 'src/app/models/projectModel';

export const projects: ProjectModel[] = [
  new ProjectModel(
    'Velvet Table',
    `
    Velvet Table est un site web dédié aux restaurants, conçu pour améliorer la gestion et l'interaction avec les clients. 
    Ce site présente les différents plats proposés, permet de passer des commandes en ligne, et facilite la gestion des réservations et des utilisateurs.
    `,
    '../assets/demos/restaurant.mp4',
    'https://github.com/Hakim2Mezrioui/VelvetTable',
    'http://velvettable.42web.io',
    ['PHP', 'Mysql', 'AOS', 'PDO', 'HTML', 'JavaScript', 'Bootstrap']
  ),
  new ProjectModel(
    'StorElec',
    `
    Store Elect est un site web e-commerce spécialisé dans la vente de pièces électroniques. 
    Ce site permet aux utilisateurs d'acheter divers produits électroniques tels que les téléphones, 
    les ordinateurs, les smartwatches et les tablettes.
    `,
    '../assets/demos/stroeelec.mp4',
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
    "IPTV est un site web qui offre des services de télévision sur IP avec plusieurs options d'abonnement. Ce projet vise à fournir une expérience de visionnage de haute qualité avec une gestion simplifiée des abonnements pour les utilisateurs.",
    '../assets/demos/iptv.mp4',
    'https://github.com/Hakim2Mezrioui/iptv',
    'https://hakim2mezrioui.github.io/iptv-host/',
    ['React', 'JavaScript', 'HTML', 'CSS', 'FontAwsome', 'PHP', 'Laravel']
  ),
  new ProjectModel(
    "Forum d'emploi",
    "Il semble que l'ISTA Hay Hassani I organise un événement majeur, le Forum de l'Emploi et du Meeting Professionnel, prévu pour le 30 novembre 2023 à Casablanca.",
    '../assets/demos/forumEmploi.mp4',
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
    "Le reseau professionnel peut être compris comme une carte d'identité numérique qui résume qui nous sommes sur le plan professionnel. Il englobe nos compétences, nos expériences et nos qualités d'une manière concise, permettant aux autres de mieux comprendre notre parcours et nos atouts dans le monde du travail. Ainsi, le profil professionnel devient une composante essentielle pour se démarquer et prospérer dans le monde professionnel actuel.",
    '../assets/demos/devResPro.mp4',
    'https://github.com/Hakim2Mezrioui/devResPro',
    'https://hakim2mezrioui.github.io/devResPro/',
    ['Angular', 'TypeScript', 'Bootstrap', 'FontAwsome', 'HTML', 'CSS']
  ),
  new ProjectModel(
    'INFOBIBLIOPHILE',
    'Infobibliophile est une plateforme unique dédiée à la gestion complète de livres, divisée en une version web et une application mobile. La plateforme web permet aux utilisateurs de gérer efficacement les utilisateurs, les livres, les catégories et autres contenus.',
    '../assets/demos/infobibliophile_plateform.mp4',
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
