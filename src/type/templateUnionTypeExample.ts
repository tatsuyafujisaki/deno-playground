type City = 'Tokyo' | 'Osaka';
type Gender = 'male' | 'female';
type Combined = `${City}_${Gender}`;

const x: Combined = 'Tokyo_female';

console.log(typeof x);
