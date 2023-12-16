//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  s = s.toLowerCase();
  let normalWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "," && s[i] !== " " && s[i] !== ":") {
      normalWord = s[i] + normalWord;
    }
  }
  let backward = "";
  for (let i = 0; i < normalWord.length; i++) {
    backward = normalWord[i] + backward;
  }
  if (backward === normalWord) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
