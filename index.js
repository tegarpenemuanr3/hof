const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// * For
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// * forEach
// companies.forEach(function (company) {
//   console.log(company);
// });

// * filter ages > 21
// Cara 1 - jadul
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Cara 2
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// Cara 3
// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// * example filter retail companies
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   (compan) => compan.category === "Retail"
// );
// console.log(retailCompanies);

// Get 80s companies
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end < 1990
// );
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// map
// Create array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// Coba dengan arrow function =>
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesTimesTwo = ages.map((age) => age * 2);

// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// * sort
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
// contoh hitung semua umur
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// menggunakan reduce
// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// });

// console.log(ageSum);

// Get total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
); // fungsi 0 disini ibarat yang tambil itu bertingkat misal [][] / {}{} agar hasilnya tidak rancu diberikan 0
// console.log(totalYears);

// Combine Methods
const Combined = ages //variabel dg isian pola array ages
  .map((age) => age * 2) //bentuk pola array
  .filter((age) => age >= 40) //filter umur >= 40
  .sort((a, b) => a - b) //sort
  .reduce((a, b) => a + b, 0); // jumlahkan
console.log(Combined);
