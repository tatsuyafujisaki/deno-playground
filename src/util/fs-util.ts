import * as fs from 'node:fs';

export const readFileAsArray = (path: fs.PathOrFileDescriptor) => fs.readFileSync(path, 'utf8').split("\n").filter(Boolean);