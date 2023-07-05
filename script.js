// Assignment Code
var generateBtn = document.querySelector("#generate");
var displayText = document.querySelector("#password")
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passwordPossibleCharacters = [];
// Write password to the #password input
function writePassword(passwordLength) {
  var passwordLength = Number(
    window.prompt(
      "How many characters would you like the password to be (between 8-128)"
    )
  );
  if (passwordLength < 8) {
    window.alert("Password length is too short.");
  } else if (passwordLength > 128) {
    window.alert("Password length is too long.");
  }
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (hasSpecialCharacters) {
    passwordPossibleCharacters = passwordPossibleCharacters.concat(symbols);
  }
  if (hasNumericCharacters) {
    passwordPossibleCharacters = passwordPossibleCharacters.concat(numbers);
  }
  if (hasLowerCasedCharacters) {
    passwordPossibleCharacters =
      passwordPossibleCharacters.concat(lowerLetters);
  }
  if (hasUpperCasedCharacters) {
    passwordPossibleCharacters =
      passwordPossibleCharacters.concat(upperLetters);
  }

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }

  for (var i = 0; i < passwordLength; i++) {
    window.alert("Your generated password: " + getRandom(passwordPossibleCharacters))
  }

  
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
