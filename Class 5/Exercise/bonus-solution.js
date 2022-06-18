function line(size, c='#') {
  let retVal = '';
  for (let i = 0; i < size; i++) {
    retVal += c;
  }
  return retVal;
}

// console.log(line(5));

function square(size, c='#') {
  let retVal = '';
  for (let i = 0; i < size; i++) {
    retVal += (line(size, c) + '\n');
  }
  return retVal.slice(0, -1);;
}

// console.log(square(5));

function square2(size, c='#') {
  return rectangle(size, size), c;
}

// console.log(square2(5));

function rectangle(width, height, c='#') {
  let retVal = '';
  for (let i = 0; i < height; i++) {
    retVal += (line(width, c) + '\n');
  }
  return retVal.slice(0, -1);;
}

console.log(rectangle(5, 3));

function stairs(height, c='#') {
  let retVal = '';
  for (let i = 0; i < height; i++) {
    retVal += (line(i+1, c) + '\n');
  }
  return retVal.slice(0, -1);;
}

console.log(stairs(5, '@'));

function spaceLine(numSpaces, numChars, c='#') {
  let retVal = '';
  for (let i = 0; i < numSpaces; i++) {
    retVal += ' ';
  }
  for (let j = 0; j < numChars; j++) {
    retVal += c;
  }
  for (let i = 0; i < numSpaces; i++) {
    retVal += ' ';
  }
  return retVal;
}

// console.log(spaceLine(3, 5));

function triangle(height, c='#') {
  let retVal = '';
  for (let i = 0; i < height; i++) {
    retVal += (spaceLine(height - i - 1, 2*i + 1, c) + '\n');
  }
  return retVal.slice(0, -1);
}

console.log(triangle(5, '$'));

// Needed for diamond solution
function reverse(s) {
  return s.split('').reverse().join('');
}

function diamond(height, c='#') {
  let retVal = triangle(height, c);
  retVal += ('\n' + reverse(retVal.slice()));
  return retVal;
}

console.log(diamond(5, '?'));
