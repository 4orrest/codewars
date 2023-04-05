// DESCRIPTION:
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.


//MY SOLUTION
function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (Number.isInteger(numbers[i]) && numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }


//top rated solution
sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)
