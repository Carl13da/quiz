import { v4 as uuidv4 } from 'uuid';

export const generateGameCode = (): string =>
  uuidv4().slice(0, 6).toUpperCase();
