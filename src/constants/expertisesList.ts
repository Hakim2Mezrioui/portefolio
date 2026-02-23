import { ExpertiseModel } from 'src/app/models/expertiseModel';

// export const expertisesList: ExpertiseModel[] = [
//   new ExpertiseModel(
//     'bi bi-palette', // Icon for design
//     'DESIGN',
//     `Expertise in graphic design and UX/UI, creating intuitive and aesthetic interfaces.
//      Proficient in tools like Figma, Adobe XD, and Sketch to design seamless and engaging user experiences.`
//   ),
//   new ExpertiseModel(
//     'bi bi-code-slash', // Icon for web and mobile development
//     'WEB AND MOBILE DEVELOPMENT',
//     `Developing web and mobile applications using modern technologies such as Angular for frontend,
//      Node.js for backend, and Flutter for cross-platform mobile apps. Experience with projects like
//      Infobibliophile and IPTV applications.`
//   ),
//   new ExpertiseModel(
//     'bi bi-motherboard', // Icon for electronics
//     'ELECTRONICS',
//     `Skilled in assembling, disassembling, and maintaining electronic systems, gained during an internship
//      in mechanical manufacturing. Expertise in automated systems and electromechanics through studies in electromechanics.`
//   ),
//   new ExpertiseModel(
//     'bi bi-diagram-3-fill', // Icon for automated systems
//     'AUTOMATED SYSTEMS',
//     `Designing and maintaining automated systems, including microcontroller programming and sensor/actuator integration
//      to automate processes. Experience in PCB manufacturing and optimizing production processes.`
//   ),
// ];

export const expertisesList: ExpertiseModel[] = [
  new ExpertiseModel(
    'bi bi-palette',
    'expertises.cardDesignTitle',
    'expertises.cardDesignDesc'
  ),
  new ExpertiseModel(
    'bi bi-code-slash',
    'expertises.cardDevelopmentTitle',
    'expertises.cardDevelopmentDesc'
  ),
  new ExpertiseModel(
    'bi bi-motherboard',
    'expertises.cardElectronicsTitle',
    'expertises.cardElectronicsDesc'
  ),
  new ExpertiseModel(
    'bi bi-diagram-3-fill',
    'expertises.cardAutomatedTitle',
    'expertises.cardAutomatedDesc'
  ),
];
