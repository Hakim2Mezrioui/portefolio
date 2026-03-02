export type Lang = 'en' | 'fr';

export const translations: Record<Lang, Record<string, string | Record<string, string>>> = {
  en: {
    nav: {
      home: 'Home',
      mySkills: 'My skills',
      myExpertises: 'My expertises',
      myProjects: 'My projects',
      career: 'Career',
      certificats: 'Certifications',
      temoignages: 'Testimonials',
      about: 'About',
      contactMe: 'Contact me',
    },
    hero: {
      welcome: 'WELCOME.',
      myName: 'I AM HAKIM MEZRIOUI',
      jobTitle: 'Full Stack Software Engineer & IoT Specialist',
      profile: `I am a Full Stack Software Engineer and IoT Specialist with a unique dual background in Digital IT and Electromechanics. Currently driving digital transformation initiatives, I specialize in building comprehensive systems—from secure, scalable web platforms to smart hardware integrations.

My diverse expertise allows me to seamlessly connect the physical and digital worlds. Whether I am developing a facial recognition attendance system or architecting an AI-driven mobile application, I am deeply passionate about solving complex technical challenges and delivering impactful, user-centric technologies.`,
      viewMyWork: 'View my work',
    },
    skills: {
      sectionTitle: 'MY SKILLS',
      languages: 'Languages',
      frameworks: 'Frameworks',
      databases: 'Databases',
      design: 'Design',
      montage: 'Montage',
      electronics: 'Electronics',
      others: 'Others',
    },
    projects: {
      sectionTitle: 'MY PROJECTS',
      velvetTableTitle: 'Velvet Table',
      velvetTableDesc: 'Velvet Table is a website dedicated to restaurants, designed to enhance management and interaction with customers. This site showcases the various dishes offered, allows online orders, and facilitates the management of reservations and users.',
      storElecTitle: 'StorElec',
      storElecDesc: 'StorElec is an e-commerce website specialized in selling electronic components. This site allows users to purchase a variety of electronic products, including phones, computers, smartwatches, and tablets.',
      iptvTitle: 'IPTV',
      iptvDesc: 'IPTV is a website that offers IP television services with various subscription options. This project aims to provide a high-quality viewing experience along with simplified subscription management for users.',
      forumEmploiTitle: "Forum d'emploi",
      forumEmploiDesc: "ISTA Hay Hassani I organized a major event, the Employment and Professional Meeting Forum, on November 30, 2023 in Casablanca. I developed a solution to manage flows (attendance and participants) via QR Code. Forum Emploi App (React, Laravel, QR Code): registration and fast participant identification system by QR Code for flow management.",
      reseauxProTitle: 'Reseaux Professionnel',
      reseauxProDesc: 'This platform provides valuable insights into the importance of professional networks, offering essential information on their benefits, tips for effective networking, and objectives for building and maintaining professional relationships. Users can explore various resources that highlight how a robust network can enhance career opportunities, facilitate collaboration, and foster personal growth. With a focus on actionable advice and strategic networking practices, this website aims to empower individuals to leverage their connections and thrive in their professional journeys.',
      infobibliophileTitle: 'INFOBIBLIOPHILE',
      infobibliophileDesc: 'Infobibliophile is a platform dedicated to complete book management, with a web back-office and a mobile app. The web back-office allows administrators to manage users, books, categories and other content. The mobile app is for end clients: browse the catalog, read and purchase books.',
      smartCaravanTitle: 'SMART CARAVAN',
      smartCaravanDesc:
        'Smart Caravan is an all-in-one connected caravan ecosystem designed to solve both transportation and accommodation challenges for supporters during AFCON 2026 and the 2030 World Cup in Morocco. A fleet of IoT-enabled caravans is managed through a web-based admin dashboard and a mobile reservation app, while on-device AI agents assist users autonomously throughout their journey and stay.',
      htechTitle: 'H-Tech',
      htechDesc:
        'Full-featured e-commerce application for selling tech products. The platform delivers an optimal user experience with an intuitive interface, fully responsive design, and smooth navigation from product catalog to cart management. Continuous deployment is handled via Vercel.',
      um6ssHelpdeskTitle: 'Ticketing App',
      um6ssHelpdeskDesc:
        'Web platform developed for UM6SS University to digitize and streamline IT support request management. Users can create support tickets while the IT team benefits from a structured handling tool. The system provides full traceability of interventions and advanced analytical dashboards to monitor team performance (resolution time, workload per technician) and generate exportable reports.',
      absenceAppTitle: 'Absence-App',
      absenceAppDesc:
        'Modern web application for streamlined, automated management of student absences, with direct integration to the Biostar access control system. Built with a strong focus on UX/UI, the platform secures attendance tracking for regular classes and exam sessions, including QR code scanning. It includes an advanced reporting module allowing administrators to generate and export detailed reports (PDF and Excel) per student over selected periods.',
    },
    expertises: {
      sectionTitle: 'MY EXPERTISES',
      cardDesignTitle: 'DESIGN',
      cardDesignDesc: 'Specialized in graphic design and creating intuitive user interfaces. Adept with tools like Figma and Adobe XD. Transforming creative ideas into visually appealing and functional designs.',
      cardDevelopmentTitle: 'DEVELOPMENT',
      cardDevelopmentDesc: 'Skilled in building web and mobile applications using Angular, Node.js, and Flutter. Delivering robust solutions for complex projects with focus on performance and user experience.',
      cardElectronicsTitle: 'ELECTRONICS',
      cardElectronicsDesc: 'Experienced in assembling, maintaining, and troubleshooting electronic systems. Expertise in automated systems, acquired during hands-on work in electromechanics and electronics projects.',
      cardAutomatedTitle: 'AUTOMATED SYSTEMS',
      cardAutomatedDesc: 'Expertise in designing and maintaining automated systems. Skilled in microcontroller programming and optimizing production processes, ensuring system efficiency and performance.',
    },
    career: {
      sectionTitle: 'MY CAREER',
      education: 'EDUCATION',
      experience: 'EXPERIENCE',
      exp1Date: 'Jul. 2024 – Present',
      exp1Title: 'Information Systems Development Technician',
      exp1Desc:
        "Design of a student onboarding platform and a ticket management tool. Optimization of internal digital processes to improve information system efficiency.",
      exp1Societe: 'Fondation Mohammed VI',
      exp2Date: 'Nov. 2023 – Dec. 2023',
      exp2Title: 'Application Developer (Employment Forum)',
      exp2Desc:
        'Built a registration application with QR code–based identification. Managed and automated real-time participant data flows.',
      exp2Societe: 'ISTA Hay Hassani I',
      exp3Date: 'Jan. 2020 – Mar. 2020',
      exp3Title: 'Mechanical Manufacturing Intern',
      exp3Desc:
        'Performed engine maintenance and precision machining (turning, welding). Assembled and disassembled engine components in complex systems.',
      exp3Societe: 'Service Sakhir',
      exp4Date: 'Apr. 2021 – May 2021',
      exp4Title: 'Spare Parts Sales Intern',
      exp4Desc:
        'Managed technical stock for pumps and mechanical equipment. Advised customers on the selection of industrial components.',
      exp4Societe: 'Revocartie',
      edu1Date: '2024 – Present',
      edu1Title: 'Expert in Advanced Development of Embedded Systems',
      edu1Desc:
        'Excellence-focused training centered on the convergence of IoT and Artificial Intelligence for designing intelligent embedded systems.',
      edu1Societe: 'Université Hassan II',
      edu2Date: '2022 – 2023',
      edu2Title: 'Specialized Technician in IT Development',
      edu2Desc:
        'Mastery of Full Stack and mobile development, with a focus on database architecture and information systems management.',
      edu2Societe: 'ISTA Hay Hassani I',
      edu3Date: '2020 – 2021',
      edu3Title: 'Specialized Technician in Electromechanics of Automated Systems',
      edu3Desc:
        'Technical expertise in maintenance and automation of complex and robotic electromechanical systems.',
      edu3Societe: 'ISTA Hay Hassani I',
      edu4Date: '2018 – 2019',
      edu4Title: 'Baccalaureate in Physical and Chemical Sciences',
      edu4Desc:
        'Strong scientific foundation focused on rigorous analysis and logical reasoning applied to physical sciences.',
      edu4Societe: 'Technical High School',
    },
    about: {
      sectionTitle: 'ABOUT ME',
      intro: 'I am a Full Stack Software Engineer and IoT Specialist based in Morocco, with a dual background in Digital IT and Electromechanics. I focus on building secure web platforms and smart hardware integrations, and I enjoy bridging the physical and digital worlds—whether through facial recognition systems or AI-driven applications. I am looking for opportunities where I can solve complex technical challenges and deliver user-centric solutions.',
      cta: 'Want to discuss?',
    },
    contact: {
      sectionTitle: 'CONTACT ME',
      subtitle: "Let's work together",
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'SEND MESSAGE',
    },
    footer: {
      message: "I'm working on something new — watch this space for my updated portfolio!",
    },
    statiques: {
      projects: 'PROJECTS',
      skills: 'SKILLS',
      certifications: 'CERTIFICATIONS',
      frameworks: 'FRAMEWORKS',
    },
    certificats: {
      sectionTitle: 'MY CERTIFICATIONS',
      verify: 'Verify',
      cert1Title: 'Angular - The Complete Guide',
      cert1Platform: 'Coursera',
      cert1Desc: 'Comprehensive training on Angular framework covering components, services, routing, forms, and advanced patterns.',
      cert2Title: 'Full Stack Web Development',
      cert2Platform: 'Udemy',
      cert2Desc: 'End-to-end web development with modern technologies including frontend frameworks, backend APIs, and database management.',
      cert3Title: 'IoT & Embedded Systems',
      cert3Platform: 'Coursera',
      cert3Desc: 'Internet of Things fundamentals, microcontroller programming, sensor integration, and connected device architectures.',
      cert4Title: 'Responsive Web Design',
      cert4Platform: 'freeCodeCamp',
      cert4Desc: 'HTML, CSS, Flexbox, Grid, and responsive design principles for building accessible and mobile-friendly web pages.',
    },
    temoignages: {
      sectionTitle: 'TESTIMONIALS',
      seeOnLinkedin: 'See on LinkedIn',
      allRecommendations: 'See all my recommendations on LinkedIn',
      readMoreOnLinkedin: 'Read the full recommendation on LinkedIn',
      temo1Position: 'Training Manager • Instructional Design Coach • Personal Development & Soft Skills Trainer • Career & Employability Expert',
      temo1Text:
        "A model intern who was of great use at ISTA Hay Hassani I. He created a platform that allowed us to manage attendance at an employment forum in an innovative way without having to use pens and paper. A competent young professional to whom you can entrust a project and be sure you will be amazed. I highly recommend him.",
      temo1Date: 'June 2024',
      temo1Relation: 'Senior',
      temo2Position: 'Data Analyst | Full Stack Developer',
      temo2Text:
        "I am delighted to recommend Hakim for his remarkable professionalism and team spirit. Working with him has been an extremely positive experience, and I am constantly impressed by his skills and dedication. Hakim stands out for his intelligence, analytical skills and ability to solve complex problems. He always brings innovative and effective solutions, even in the most difficult situations. His keen attention to detail and rigour are undeniable assets for any project.",
      temo2Date: 'June 2024',
      temo2Relation: 'Colleague',
      temo3Position: 'Data & AI Engineer | Full Stack Developer | Building Scalable Data Solutions',
      temo3Text:
        "I am pleased to highly recommend Hakim for any opportunity within the web development domain. A very ambitious and responsible person, he is always ready for new experiences with an unbreakable spirit. He has a strong command over all dimensions of web development. Hakim is excellent at problem-solving, so he is very effective in complex and demanding situations. Hakim is a hard worker, blessed with most of the technical skills that help him successfully complete wide-ranged ambitious projects. Professionalism and technical acumen are his distinct qualities, which support and ensure the success of any project. As a person, Hakim is extremely pleasant and friendly, further enhancing his integration and collaboration within a team. I am confident that Hakim will provide enormous value to any organization that is lucky enough to welcome him aboard.",
      temo3Date: 'June 2024',
      temo3Relation: 'Colleague',
      temo4Position: 'Senior Frontend Architect | Angular 20 Specialist | 8+ Years Experience',
      temo4Text:
        "I've had the pleasure to know Hakim Mezrioui, and I am consistently impressed by his breadth of knowledge and ability to adapt to new challenges. Hakim is a highly skilled web developer, with a strong command of technologies such as React, Laravel, Node.js, and Python, among others. His certifications in Python Essentials, Angular, and Figma Design demonstrate his commitment to continuous learning and professional growth. Beyond his technical skills, Hakim has shown a remarkable understanding of mechanical manufacturing, with experience in analog circuit design, digital electronics, and Arduino. His hands-on experience in mechanical manufacturing and his ability to apply his skills in practical settings make him a valuable asset in any team. Hakim's diverse skill set, combined with his dedication and passion for his work, make him an exceptional professional. I highly recommend Hakim for any team looking for a versatile and dedicated web developer.",
      temo4Date: 'June 2024',
      temo4Relation: 'Mentor',
      temo5Position: 'Full-stack developer | React.js | Laravel | Next.js | Angular | Git | Machine Learning',
      temo5Text:
        "Hakim is a very ambitious and responsible person with a solid mastery of everything related to development and a great ability to solve problems. I highly recommend him for any opportunity in the field of web development. His technical expertise and professionalism make him a valuable asset to any team.",
      temo5Date: 'June 2024',
      temo5Relation: 'Colleague',
      temo6Position: 'Full-Stack Engineer | Java Developer | MEAN Stack | Freelance',
      temo6Text:
        'I had the opportunity to work regularly with Hakim and can attest to his professionalism and the quality of his work. He is a highly competent developer with excellent technical mastery and a real ability to solve problems effectively. He quickly understands requirements and always proposes clear, well-suited solutions. Beyond his technical skills, Hakim is a person who listens, is collaborative and always ready to help his team. He maintains excellent professional relationships and contributes to a positive work environment. I highly recommend Hakim to any organization looking for a serious, committed and reliable developer.',
      temo6Date: 'February 2026',
      temo6Relation: 'Colleague',
      temo7Position: 'Certified PMP® Project Manager | Information Systems Engineer',
      temo7Text:
        "I had the pleasure of working with Hakim Mezrioui at UM6SS, where he holds the position of IT & IoT developer. As a project manager, I appreciated his professionalism, technical rigor, and strong sense of responsibility. Hakim stands out through his solid command of development environments, his ability to quickly understand business needs, and his talent for proposing relevant and effective technical solutions. He is highly autonomous while remaining collaborative and team-oriented, which greatly facilitates project progress. His involvement in IT and IoT projects, as well as his ability to solve complex technical problems in a structured and efficient way, make him a valuable asset for any organization. I highly recommend Hakim for any opportunity requiring technical expertise, reliability, and commitment.",
      temo7Date: 'March 2026',
      temo7Relation: 'Manager',
      verifiedCount: 'verified LinkedIn recommendations',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      mySkills: 'Mes compétences',
      myExpertises: 'Mes expertises',
      myProjects: 'Mes projets',
      career: 'Parcours',
      certificats: 'Certifications',
      temoignages: 'Témoignages',
      about: 'À propos',
      contactMe: 'Contact',
    },
    hero: {
      welcome: 'BIENVENUE.',
      myName: 'JE SUIS HAKIM MEZRIOUI',
      jobTitle: 'Ingénieur Full Stack & Spécialiste IoT',
      profile: `Je suis ingénieur Full Stack et spécialiste IoT, avec une double formation en informatique et en électromécanique. Je pilote des projets de transformation numérique et conçois des systèmes complets—des plateformes web sécurisées et scalables à l’intégration de matériel intelligent.

Mon expertise me permet de faire le lien entre le monde physique et le numérique. Que ce soit pour un système de présence par reconnaissance faciale ou une application mobile pilotée par l’IA, je suis passionné par la résolution de défis techniques complexes et la livraison de solutions centrées utilisateur.`,
      viewMyWork: 'Voir mes réalisations',
    },
    skills: {
      sectionTitle: 'MES COMPÉTENCES',
      languages: 'Langages',
      frameworks: 'Frameworks',
      databases: 'Bases de données',
      design: 'Conception',
      montage: 'Montage',
      electronics: 'Électronique',
      others: 'Autres',
    },
    projects: {
      sectionTitle: 'MES PROJETS',
      velvetTableTitle: 'Velvet Table',
      velvetTableDesc: 'Velvet Table est un site dédié aux restaurants, conçu pour améliorer la gestion et l’interaction avec la clientèle. Il présente les plats proposés, permet les commandes en ligne et facilite la gestion des réservations et des utilisateurs.',
      storElecTitle: 'StorElec',
      storElecDesc: 'StorElec est un site e-commerce spécialisé dans la vente de composants électroniques. Il permet d’acheter une variété de produits électroniques : téléphones, ordinateurs, montres connectées et tablettes.',
      iptvTitle: 'IPTV',
      iptvDesc: 'IPTV est un site proposant des services de télévision IP avec différentes formules d’abonnement. Le projet vise à offrir une expérience de visionnage de qualité et une gestion des abonnements simplifiée.',
      forumEmploiTitle: "Forum d'emploi",
      forumEmploiDesc: "L’ISTA Hay Hassani I organise un événement majeur, le Forum de l’emploi et de la rencontre professionnelle, prévu le 30 novembre 2023 à Casablanca. J'ai développé une solution pour gérer les flux (la présence des participants) par code QR. App Forum Emploi (React, Laravel, QR Code) : système d'inscription et d'identification rapide des participants par QR Code pour la gestion des flux.",
      reseauxProTitle: 'Réseaux Professionnel',
      reseauxProDesc: 'Cette plateforme présente l’importance des réseaux professionnels : bénéfices, conseils pour un networking efficace et objectifs pour construire et entretenir des relations professionnelles. Les utilisateurs peuvent explorer des ressources montrant comment un réseau solide favorise les opportunités de carrière, la collaboration et la croissance personnelle. Avec des conseils concrets et des pratiques de networking stratégiques, le site vise à aider chacun à s’appuyer sur ses relations et à progresser professionnellement.',
      infobibliophileTitle: 'INFOBIBLIOPHILE',
      infobibliophileDesc: 'Infobibliophile est une plateforme dédiée à la gestion complète des livres, avec un back-office web et une application mobile. Le back-office web permet de gérer les utilisateurs, les livres, les catégories et les autres contenus. L\'application mobile est dédiée aux clients : consulter le catalogue, lire et acheter des livres.',
      smartCaravanTitle: "SMART CARAVAN",
      smartCaravanDesc:
        'Face aux défis logistiques majeurs attendus lors de la CAN 2026 et de la Coupe du Monde 2030 au Maroc, Smart Caravan apporte une solution tout-en-un innovante aux problématiques de transport et de logement des supporters. Une flotte de caravanes connectées, pilotée via un tableau de bord administrateur web et une application mobile de réservation, s’appuie sur des agents d’IA embarqués pour assister les utilisateurs de manière autonome tout au long de leur trajet et de leur séjour.',
      htechTitle: 'H-Tech',
      htechDesc:
        "Développement d'une application e-commerce complète et performante dédiée à la vente d'articles technologiques. La plateforme a été pensée pour offrir une expérience utilisateur optimale, avec une interface intuitive, un design entièrement responsive et une navigation fluide dans le catalogue produit jusqu'à la gestion du panier d'achat. Le déploiement continu est assuré via Vercel.",
      um6ssHelpdeskTitle: 'Ticketing App',
      um6ssHelpdeskDesc:
        "Plateforme web développée pour l'Université UM6SS visant à digitaliser et optimiser la gestion des réclamations informatiques. L'application permet aux utilisateurs de créer des tickets d'assistance et offre au support IT un outil de prise en charge structuré. Elle intègre un système de traçabilité totale des interventions et des tableaux de bord analytiques avancés pour suivre les performances de l'équipe (temps de résolution, charge de travail par technicien) et générer des rapports exportables.",
      absenceAppTitle: 'Absence-App',
      absenceAppDesc:
        "Développement d'une application web moderne dédiée à la gestion fluide et automatisée des absences étudiantes, en interfaçage direct avec le système de contrôle d'accès Biostar. Conçue avec une attention particulière portée à l'expérience utilisateur (UX/UI), la plateforme sécurise le suivi des présences pour les cours réguliers et les sessions d'examens, notamment via un système de scan de QR codes. Elle intègre un module de reporting avancé permettant aux administrateurs de générer et d'exporter des bilans détaillés (PDF et Excel) pour chaque étudiant sur des périodes ciblées.",
    },
    expertises: {
      sectionTitle: 'MES EXPERTISES',
      cardDesignTitle: 'CONCEPTION',
      cardDesignDesc: 'Spécialisé en conception graphique et en création d’interfaces utilisateur intuitives. À l’aise avec Figma et Adobe XD. Transformation d’idées créatives en designs fonctionnels et attrayants.',
      cardDevelopmentTitle: 'DÉVELOPPEMENT',
      cardDevelopmentDesc: 'Développement d’applications web et mobiles avec Angular, Node.js et Flutter. Livraison de solutions robustes pour des projets complexes, avec un focus sur les performances et l’expérience utilisateur.',
      cardElectronicsTitle: 'ÉLECTRONIQUE',
      cardElectronicsDesc: 'Expérience en assemblage, maintenance et dépannage de systèmes électroniques. Compétences en systèmes automatisés, acquises lors de travaux pratiques en électromécanique et en projets électroniques.',
      cardAutomatedTitle: 'SYSTÈMES AUTOMATISÉS',
      cardAutomatedDesc: 'Conception et maintenance de systèmes automatisés. Compétences en programmation de microcontrôleurs et en optimisation des processus de production pour l’efficacité et les performances.',
    },
    career: {
      sectionTitle: 'MON PARCOURS',
      education: 'FORMATION',
      experience: 'EXPÉRIENCE',
      exp1Date: 'Juil. 2024 – Présent',
      exp1Title: "Technicien en Développement de Systèmes d'Information",
      exp1Desc:
        "Conception d'une plateforme d'accueil étudiants et d'un outil de gestion de tickets. Optimisation des processus digitaux internes pour l'efficacité du SI.",
      exp1Societe: 'Fondation Mohammed VI',
      exp2Date: 'Nov. 2023 – Déc. 2023',
      exp2Title: "Développeur d'Application (Forum de l'Emploi)",
      exp2Desc:
        "Création d'une application d'inscription avec identification par QR Code. Gestion et automatisation des flux de données participants en temps réel.",
      exp2Societe: 'ISTA Hay Hassani I',
      exp3Date: 'Jan. 2020 – Mar. 2020',
      exp3Title: 'Stagiaire en Fabrication Mécanique',
      exp3Desc:
        "Maintenance moteur et usinage de précision (tournage, soudage). Montage et démontage d'organes moteurs sur systèmes complexes.",
      exp3Societe: 'Service Sakhir',
      exp4Date: 'Avr. 2021 – Mai 2021',
      exp4Title: 'Stagiaire en Vente de Pièces de Rechange',
      exp4Desc:
        'Gestion technique des stocks de pompes et équipements mécaniques. Conseil technique client pour la sélection de composants industriels.',
      exp4Societe: 'Revocartie',
      edu1Date: '2024 – Présent',
      edu1Title: 'Expert en Développement Avancé des systèmes embarqués',
      edu1Desc:
        "Formation d'excellence centrée sur la convergence de l'IoT et de l'Intelligence Artificielle pour la conception de systèmes embarqués intelligents.",
      edu1Societe: 'Université Hassan II',
      edu2Date: '2022 – 2023',
      edu2Title: 'Technicien spécialisé en développement informatique',
      edu2Desc:
        "Maîtrise du développement Full Stack et mobile, spécialisée dans l'architecture de bases de données et la gestion de systèmes d'information.",
      edu2Societe: 'ISTA Hay Hassani I',
      edu3Date: '2020 – 2021',
      edu3Title: 'Technicien Spécialisé Electromécanique des Systèmes Automatisés',
      edu3Desc:
        'Expertise technique en maintenance et automatisation de systèmes électromécaniques complexes et robotisés.',
      edu3Societe: 'ISTA Hay Hassani I',
      edu4Date: '2018 – 2019',
      edu4Title: 'Baccalauréat Sciences Physiques et Chimiques',
      edu4Desc:
        'Solide base scientifique axée sur l’analyse rigoureuse et le raisonnement logique appliqués aux sciences physiques.',
      edu4Societe: 'Technical High School',
    },
    about: {
      sectionTitle: 'À PROPOS',
      intro: 'Ingénieur Full Stack et spécialiste IoT basé au Maroc, je cumule une formation en informatique et en électromécanique. Je conçois des plateformes web sécurisées et des intégrations matériel intelligent, et j’aime faire le lien entre le physique et le numérique—que ce soit via des systèmes de reconnaissance faciale ou des applications pilotées par l’IA. Je recherche des opportunités où je peux relever des défis techniques complexes et livrer des solutions centrées utilisateur.',
      cta: 'Envie d’en discuter ?',
    },
    contact: {
      sectionTitle: 'ME CONTACTER',
      subtitle: "Travaillons ensemble",
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      message: 'Message',
      sendMessage: 'ENVOYER',
    },
    footer: {
      message: 'Je travaille sur de nouveaux projets — restez à l’écoute pour les mises à jour !',
    },
    statiques: {
      projects: 'PROJETS',
      skills: 'COMPÉTENCES',
      certifications: 'CERTIFICATIONS',
      frameworks: 'FRAMEWORKS',
    },
    certificats: {
      sectionTitle: 'MES CERTIFICATIONS',
      verify: 'Vérifier',
      cert1Title: 'Angular - Le Guide Complet',
      cert1Platform: 'Coursera',
      cert1Desc: 'Formation complète sur le framework Angular : composants, services, routing, formulaires et patterns avancés.',
      cert2Title: 'Développement Web Full Stack',
      cert2Platform: 'Udemy',
      cert2Desc: 'Développement web de bout en bout avec des technologies modernes : frameworks frontend, APIs backend et gestion de bases de données.',
      cert3Title: 'IoT & Systèmes Embarqués',
      cert3Platform: 'Coursera',
      cert3Desc: 'Fondamentaux de l\'Internet des objets, programmation de microcontrôleurs, intégration de capteurs et architectures d\'appareils connectés.',
      cert4Title: 'Responsive Web Design',
      cert4Platform: 'freeCodeCamp',
      cert4Desc: 'HTML, CSS, Flexbox, Grid et principes de design responsive pour créer des pages web accessibles et adaptées au mobile.',
    },
    temoignages: {
      sectionTitle: 'TÉMOIGNAGES',
      seeOnLinkedin: 'Voir sur LinkedIn',
      allRecommendations: 'Voir toutes mes recommandations sur LinkedIn',
      readMoreOnLinkedin: 'Lire la suite sur LinkedIn',
      temo1Position: 'Responsable Formation • Coach en Ingénierie Pédagogique • Formatrice Développement Personnel & Soft Skills • Experte Carrière et Employabilité',
      temo1Text:
        "Un stagiaire modèle qui a été d'une grande utilité à l'ISTA Hay Hassani 1. Il a créé une plateforme qui nous a permis lors d'un forum d'emploi de gérer la présence d'une manière innovante sans avoir à utiliser les stylos et le papier. Un jeune compétent a qui on pourra confier un cahier de charge et avoir la certitude qu'on sera émerveillé. Je recommande vivement.",
      temo1Date: 'Juin 2024',
      temo1Relation: 'Supérieure',
      temo2Position: 'Data Analyst | Full Stack Developer',
      temo2Text:
        "Je suis ravi de recommander Hakim pour son remarquable professionnalisme et son esprit d'équipe. Travailler avec lui a été une expérience extrêmement positive, et je suis constamment impressionné par ses compétences et son dévouement. Hakim se distingue par son intelligence, sa capacité d'analyse et son aptitude à résoudre des problèmes complexes. Il apporte toujours des solutions innovantes et efficaces, même dans les situations les plus difficiles. Son sens aigu du détail et sa rigueur sont des atouts indéniables pour tout projet.",
      temo2Date: 'Juin 2024',
      temo2Relation: 'Collègue',
      temo3Position: 'Data & AI Engineer | Full Stack Developer | Building Scalable Data Solutions',
      temo3Text:
        "Je suis heureux de recommander vivement Hakim pour toute opportunité dans le domaine du développement web. Une personne très ambitieuse et responsable, toujours prête pour de nouvelles expériences avec un esprit indéfectible. Il maîtrise parfaitement toutes les dimensions du développement web. Hakim excelle dans la résolution de problèmes et est très efficace dans les situations complexes et exigeantes. C'est un travailleur acharné, doté de la plupart des compétences techniques qui lui permettent de mener à bien des projets ambitieux et variés. Le professionnalisme et l'acuité technique sont ses qualités distinctives, qui garantissent le succès de tout projet. En tant que personne, Hakim est extrêmement agréable et sympathique, ce qui favorise son intégration et sa collaboration au sein d'une équipe. Je suis convaincu que Hakim apportera une valeur considérable à toute organisation qui aura la chance de l'accueillir.",
      temo3Date: 'Juin 2024',
      temo3Relation: 'Collègue',
      temo4Position: 'Senior Frontend Architect | Angular 20 Specialist | 8+ Years Experience',
      temo4Text:
        "J'ai eu le plaisir de connaître Hakim Mezrioui, et je suis constamment impressionné par l'étendue de ses connaissances et sa capacité à s'adapter à de nouveaux défis. Hakim est un développeur web hautement qualifié, avec une solide maîtrise de technologies telles que React, Laravel, Node.js et Python, entre autres. Ses certifications en Python Essentials, Angular et Figma Design démontrent son engagement envers l'apprentissage continu et la croissance professionnelle. Au-delà de ses compétences techniques, Hakim a fait preuve d'une compréhension remarquable de la fabrication mécanique, avec une expérience en conception de circuits analogiques, électronique numérique et Arduino. Son expérience pratique en fabrication mécanique et sa capacité à appliquer ses compétences dans des contextes concrets en font un atout précieux pour toute équipe. L'ensemble de compétences diversifié de Hakim, allié à son dévouement et sa passion pour son travail, en fait un professionnel exceptionnel. Je recommande vivement Hakim à toute équipe à la recherche d'un développeur web polyvalent et dévoué.",
      temo4Date: 'Juin 2024',
      temo4Relation: 'Mentor',
      temo5Position: 'Full-stack developer | React.js | Laravel | Next.js | Angular | Git | Machine Learning',
      temo5Text:
        "Hakim est une personne très ambitieuse et responsable, il possède une solide maîtrise en tout ce qui concerne le développement, il a une très bonne capacité à résoudre les problèmes. Je recommande vivement pour toute opportunité dans le domaine du développement web. Son expertise technique et son professionnalisme en font un atout précieux pour toute équipe.",
      temo5Date: 'Juin 2024',
      temo5Relation: 'Collègue',
      temo6Position: 'Full-Stack Engineer | Java Developer | MEAN Stack | Freelance',
      temo6Text:
        "J'ai eu l'occasion d'échanger régulièrement avec Hakim, et je peux témoigner de son professionnalisme et de la qualité de son travail. C'est un développeur très compétent, avec une excellente maîtrise technique et une vraie capacité à résoudre des problèmes de manière efficace. Il comprend rapidement les besoins et propose toujours des solutions claires et adaptées. Au-delà de ses compétences techniques, Hakim est une personne à l'écoute, collaborative et toujours prête à aider son équipe. Il entretient d'excellentes relations professionnelles et contribue à créer un environnement de travail positif. Je recommande vivement Hakim à toute organisation à la recherche d'un développeur sérieux, engagé et fiable.",
      temo6Date: 'Fév. 2026',
      temo6Relation: 'Collègue',
      temo7Position: 'Chef de projet certifié PMP® | Ingénieur SI en Systèmes d’Information',
      temo7Text:
        "J’ai eu le plaisir de travailler avec Hakim Mezrioui au sein de l’UM6SS, où il occupe le poste de développeur IT & IoT. En tant que chef de projet, j’ai pu apprécier son professionnalisme, sa rigueur technique et son sens des responsabilités. Hakim se distingue par sa solide maîtrise des environnements de développement, sa capacité à comprendre rapidement les besoins métiers et à proposer des solutions techniques pertinentes et efficaces. Il fait preuve d’une grande autonomie tout en restant collaboratif et orienté équipe, ce qui facilite considérablement l’avancement des projets. Son implication dans les projets IT et IoT, ainsi que sa capacité à résoudre des problématiques techniques complexes avec méthode et efficacité, en font un atout précieux pour toute organisation. Je recommande vivement Hakim pour toute opportunité nécessitant expertise technique, fiabilité et engagement.",
      temo7Date: 'Mars 2026',
      temo7Relation: 'Manager',
      verifiedCount: 'recommandations LinkedIn vérifiées',
    },
  },
};

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

export function getTranslation(lang: Lang, key: string): string {
  const value = getNested(translations[lang] as Record<string, unknown>, key);
  return value ?? key;
}
