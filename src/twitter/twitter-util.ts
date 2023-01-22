import * as fs from 'node:fs';

export function readKeywords(path: fs.PathOrFileDescriptor): string {
  return fs
    .readFileSync(path, 'utf8')
    .split("\n")
    .filter(Boolean)
    .map(keyword => "\"" + keyword + "\"")
    .join(' OR ')
}

export function readNegativeAccounts(path: fs.PathOrFileDescriptor): string {
  return fs.readFileSync(path, 'utf8').split("\n").filter(Boolean).map(account => "-from:" + account).join(' ')
}
