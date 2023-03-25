// ------------------- Problem 1

const arr = [1, 3, 5, 7, 9];
const val = 5;

const index = findIndex(arr, val);

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(index);



// ------------------- Problem 2

// ------------------- Problem 3

// ------------------- Problem 4



// ------------------- Problem 5 
// For loop

// function powerOfTwoForLoop(arr) {
//     const result = [(1,2,3)];
//     for(let i = 0; i < arr.length; i++) {
//       result.push(Math.pow(2, arr[i]));
//     }
//     return result;
//   }
//   console.log(powerOfTwoForLoop([1,2,3]));

// ForEach loop

// function powerOfTwoForEach(arr) {
//   const result = [(1,2,3)];
//   arr.forEach(element => {
//     result.push(Math.pow(2, element));
//   });
//   return result;
// }
// console.log(powerOfTwoForEach([1,2,3]));

// Map loop (a method for array which is the best way because it combines the iteration and the mapping into one step, making the code cleaner and it is higher order function, means it takes function inside a function, also accept 3 parameters) 

function powerOfTwoMap(arr) {
  const result = [(1, 2, 3)];
  arr.map(element => {
    result.push(Math.pow(2, element));
  });
  return result;
}
console.log(powerOfTwoMap([1, 2, 3]));



// ------------------- Problem 6

function evenOrOdd(arr) {
  const result = arr.map((num) => {
    if (typeof num !== "number") { // || isNaN(num) is another way of excluding numbers .. just like typeof num
      return "N/A";
    } else if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  });
  return result;
}
console.log(evenOrOdd([1, 2, "Bushra", 3, 4, 5]))



// ------------------- Problem 7

function fizzbuzz(numbers) {
  const output = [];

  numbers.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      output.push("Fizz Buzz");
    } else if (number % 3 === 0) {
      output.push("Fizz");
    } else if (number % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(number);
    }
  });

  return output;
}

console.log(fizzbuzz([3, 5, 9, 10, 12, 14, 15, 20, 30, 32]));



