import { ProjectData } from './types';
import { docai } from './docai';
import { binomi } from './binomi';
import { kingSolar } from './king-solar';
import { clientPlatforms } from './client-platforms';
export const projects: Record<string, ProjectData> = {
  docai,
  binomi,
  'king-solar': kingSolar,
  'client-platforms': clientPlatforms
};
export type { ProjectData, ProjectSection } from './types';