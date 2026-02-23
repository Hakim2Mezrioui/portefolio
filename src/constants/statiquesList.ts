import { StatiqueModel } from 'src/app/models/statiqueModel';
import { projects } from './projectsList';
import { databases, designeTools, electronicsSkills, Frameworks, Languages, montageTools, othersSkills } from './skillsList';

export const statiquesList: StatiqueModel[] = [
  new StatiqueModel(
    'statiques.projects',
    projects.length.toString(),
    'bi bi-kanban-fill fs-1'
  ),
  new StatiqueModel(
    'statiques.skills',
    `${Languages.length + Frameworks.length + databases.length + designeTools.length + montageTools.length + electronicsSkills.length + othersSkills.length}`,
    'bi bi-lightbulb fs-1'
  ),
  new StatiqueModel(
    'statiques.certifications',
    '20',
    'bi bi-award fs-1'
  ),
  new StatiqueModel(
    'statiques.frameworks',
    Frameworks.length.toString(),
    'bi bi-tools fs-1'
  ),
];
