const sum = (a, b) => {
 if (typeof a !== 'number' || typeof b !== 'number') {
  throw new Error('os parâmetros precisam ser um número'); 
 }
 return a + b;
}

const myRemove = (arr, item) => {
  let newArray = [];
  arr.forEach((value) =>{
    if (item !== value) {
      newArray.push(value)
    }
  })
  return newArray;
};

module.exports = sum, myRemove;