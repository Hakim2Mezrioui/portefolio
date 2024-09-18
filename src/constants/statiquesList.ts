import { StatiqueModel } from 'src/app/models/statiqueModel';
import { projects } from './projectsList';

export const statiquesList: StatiqueModel[] = [
  new StatiqueModel(
    'PROJECTS',
    projects.length.toString(),
    'bi bi-kanban-fill fs-1' // Icône pour les projets (kanban)
  ),
  new StatiqueModel(
    'SKILLS',
    '40',
    'bi bi-lightbulb fs-1' // Icône pour les compétences (idée ou connaissance)
  ),
  new StatiqueModel(
    'CERTIFICATIONS',
    '13',
    'bi bi-award fs-1' // Icône pour les certifications (trophée)
  ),
  new StatiqueModel(
    'FRAMEWORKS',
    '5',
    'bi bi-tools fs-1' // Icône pour les frameworks (outils)
  ),
];
