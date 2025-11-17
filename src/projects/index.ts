import { ProjectData } from './types';
import { docai } from './docai';
import { binomi } from './binomi';
import { kingSolar } from './king-solar';
import { tracky } from './tracky';
export const projects: Record<string, ProjectData> = {
  docai,
  binomi,
  'king-solar': kingSolar,
  tracky,

};
export type { ProjectData, ProjectSection } from './types';