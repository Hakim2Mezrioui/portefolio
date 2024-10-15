import { StatiqueModel } from 'src/app/models/statiqueModel';
import { projects } from './projectsList';
import { databases, designeTools, electronicsSkills, Frameworks, Languages, montageTools, othersSkills } from './skillsList';

export const statiquesList: StatiqueModel[] = [
  new StatiqueModel(
    'PROJECTS',
    projects.length.toString(),
    'bi bi-kanban-fill fs-1' // Icône pour les projets (kanban)
  ),
  new StatiqueModel(
    'SKILLS',
    `${Languages.length + Frameworks.length + databases.length + designeTools.length + montageTools.length + electronicsSkills.length + othersSkills.length}`,
    'bi bi-lightbulb fs-1' // Icône pour les compétences (idée ou connaissance)
  ),
  new StatiqueModel(
    'CERTIFICATIONS',
    '20',
    'bi bi-award fs-1' // Icône pour les certifications (trophée)
  ),
  new StatiqueModel(
    'FRAMEWORKS',
    Frameworks.length.toString(),
    'bi bi-tools fs-1' // Icône pour les frameworks (outils)
  ),
];
