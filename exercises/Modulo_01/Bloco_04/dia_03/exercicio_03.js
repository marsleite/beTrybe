let n = 5;
let ast = "*";
let spc = '';
let position = n;

for(let i = 0; i < n; i += 1){
  for(let j = 0; j <= n; j += 1){
    if (j < position) {
      spc = spc + ' ';
    } else {
      spc = spc + ast
    }
  }
  console.log(spc);
  spc ='';
  position -= 1;
};