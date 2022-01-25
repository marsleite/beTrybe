function fatorial(n) {
    let res = n;
    for (let i = 1; i < n; i += 1) {
      res *= i;
    }
    return res;
}

console.log(fatorial(5));

const factorial = n => n > 1 ? n * fatorial(n - 1) : 1;

console.log(fatorial(4));