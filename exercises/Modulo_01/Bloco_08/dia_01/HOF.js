const repeat = (number, action) => {
    for (let count = 0; count < number; count += 1) {
        action(count);
    }
};

repeat(5, console.log);
//--------------------------------------------
const repeat = (number, action) => {
  for (let c = 0; c <= number; c += 1) {
    action(c);
  }
};

repeat(15, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});
//-----------------------------------------
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'isEven');
  }
}

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven);
repeat(3, isOdd)