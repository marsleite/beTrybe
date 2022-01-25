let n = 5;
let ast = "*";

for(i = n; i > 0; i -= 1) {
    console.log(ast.repeat((n + 1) - i))
}