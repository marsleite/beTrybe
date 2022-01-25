const myRemove = (arr, item) => {
  let newArray = [];
  arr.forEach((value) =>{
    if (item !== value) {
      newArray.push(value)
    }
  })
  return newArray;
};

module.exports = myRemove;