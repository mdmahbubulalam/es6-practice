const ages1 = [25, 12, 17, 18, 90];
const ages2 = [24, 11, 16];
const ages3 = [23, 10, 15, 19];

const allAges1 = ages1.concat(ages2).concat([5]).concat(ages3);
console.log(allAges1);
const allAges2 = [...ages1, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const ministar = 550;
const shocib = 500;
const maxTaka = [650,550,500];
const maximum1 = Math.max(business,ministar,shocib);
const maximum2 = Math.max(...maxTaka);
console.log(maximum1);
console.log(maximum2);
