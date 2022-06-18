function funPhrase(str) {
  let part;
  if (str.length < 4 && str.length > 0) {
    part = str[str.length - 1];
  } else if (str.length > 3) {
    part = str.slice(0,3);
  }
  return `We put the '${part}' in '${str}'.`;
}

console.log(funPhrase('Functions rock!'));
console.log(funPhrase('asd'));
console.log(funPhrase('asdf'));

function areaOfRectangle(length, width) {
  if (width == undefined) {
    width = length;
  }
  return length * width;
}

console.log(`The area is ${areaOfRectangle(2,3)} cm^2`);
console.log(`The area is ${areaOfRectangle(2)} cm^2`);
