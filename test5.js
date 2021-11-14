/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  switch (words.length) {

    case 0:
      return "";

    case 1:
      return words[0];

    case 2:
      // compute the prefix between the two words
      var a = words[0],
          b = words[1],
          c = Math.min(a.length, b.length),
          i = 0;
      while (i < c && a.charAt(i) === b.charAt(i))
          ++i;
      return a.substring(0, i);

    default:
      return result([ words[0], result(words.slice(1)) ]);
  }
}

console.log(result(words));
