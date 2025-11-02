import { ProjectData } from './types';
import { docai } from './docai';
import { binomi } from './binomi';
import { kingSolar } from './king-solar';
export const projects: Record<string, ProjectData> = {
  docai,
  binomi,
  'king-solar': kingSolar,

};
export type { ProjectData, ProjectSection } from './types';