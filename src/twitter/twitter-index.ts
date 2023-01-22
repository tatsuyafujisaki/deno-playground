import * as path from 'node:path';
import * as open from 'open';

import { readKeywords, readNegativeAccounts } from '../twitter/twitter-util';
import { yesterday, yyyymmdd } from '../util/date-util';

const sinceYesterday: string = 'since:' + yyyymmdd(yesterday())
const negativeAccounts: string = readNegativeAccounts(path.join(__dirname, 'negative-accounts.txt'))
const keywords1: string = readKeywords(path.join(__dirname, 'keywords1.txt'))
const keywords2: string = readKeywords(path.join(__dirname, 'keywords2.txt'))

open(["https://twitter.com/search?q=" + keywords1, "filter:verified", negativeAccounts, sinceYesterday].join(' '))
open(["https://twitter.com/search?q=" + keywords2, "filter:verified", negativeAccounts, sinceYesterday].join(' '))
