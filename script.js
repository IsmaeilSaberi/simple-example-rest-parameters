// rest paremeters=represents an undefinite number of parameters

// ...

a = 1;
b = 3;
c = 10;
d = 11;

console.log(sum3(a, b, c, d));

function sum1(a, b) {
  return a + b;
}

function sum2(a, b, c) {
  return a + b + c;
}

// this function with help of rest parameters can accept undefinite parameters
function sum3(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
