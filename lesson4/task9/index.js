let sum = 0;

for (let index = 0; index <= 1000; index += 1) {
  sum += index;
}

let div;
div = sum / 1234;

let mods;
mods = sum % 1234;

console.log(div > mods ? true : false);
