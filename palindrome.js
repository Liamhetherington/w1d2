function isPalindrome(str) {
  var lowerCase = str.toLowerCase();
  var noSpaces = lowerCase.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;
  var bool = true;

  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) {
      bool = false;
    }
  }
    if (noSpaces.length === 1) {
      bool = true;
  }
  return bool;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
