
let Array = [10, 20, 30, 40];


let addOne = function (param) {
  param += 1;
  console.log(param);
};


let checkAndCall = function (func, number) {
  if (number % 2 === 0) {
    func(number);
  } else {
    console.log("the number is odd");
  }
};


for (let index in Array) {
    checkAndCall(addOne, parseInt(index));
  }
