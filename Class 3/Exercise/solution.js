// Part 1:
let num = 1001; // Use an integer OR a decimal here.

if (String(num).includes('.')){
  console.log(String(num).length-1);
} else {
  console.log(String(num).length);
}

// Part 2:
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim().toUpperCase();
console.log(dna);

dna = dna.replace('GCT','AGG');
console.log(dna);

if(dna.indexOf('CAT') < 0) {
  console.log("CAT gene NOT found");
} else {
  console.log("CAT gene found");
}

console.log(dna.slice(16,19));

console.log(`The DNA strand is ${dna.length} characters long.`);
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);

// Part 3:
let language = 'JavaScript';
console.log(language.slice(0,1)+language.slice(4,5));
let initials = language.replace('ava','').replace('cript','');
console.log(initials);
console.log(`The abbreviation for '${language}' is '${initials}'.`)

let notTitle = 'title case'; // Use a two word phrase here.
let title = notTitle.replace(notTitle[0],notTitle[0].toUpperCase()).replace(notTitle[notTitle.indexOf(' ')+1],notTitle[notTitle.indexOf(' ')+1].toUpperCase());
console.log(title);