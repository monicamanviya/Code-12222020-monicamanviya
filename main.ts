const fs = require('fs');
const csv = fs.readFileSync('BankChurners.csv', 'utf8');
var stats = fs.statSync("BankChurners.csv");
var allTextLines = csv.split('\n');
console.log('Column or field names present in the CSV :',allTextLines[0]);
console.log('Total size in bytes of the file:',stats.size);
console.log('Total number of rows:',allTextLines.length);
			