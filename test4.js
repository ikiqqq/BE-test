/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  numbers.sort((a,b) => a-b)

  let missing = [];
  let number = 0;

  for (let i = 1; i < numbers.length; i++) {
    number++
    if (numbers[i] !== i) {
      missing.push(number)
      number++;
    }
  }
  return missing
}

console.log(result(numbers));
