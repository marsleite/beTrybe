let numb = 5;
let aste = '*';

let media = (numb + 1) / 2;
let left = media;
let right = media;

let input = '';

for (let i = 0; i <= media; i += 1) {
  for (let j = 0; j <= numb; j+= 1) {
    if (j > left && j < right) {
      input = input + aste
    } else {
      input = input + ' ';
    }
  }
  console.log(input);
  input = '';
  right += 1;
  left -= 1;
};