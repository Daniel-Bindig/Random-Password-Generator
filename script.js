// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "1234567890".split('')
var symbols = "!@#$%^&*()".split('')
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split('')
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

// Write password to the #password input
function writePassword(passwordLength) {

  function generateNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  function generateSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function generateLower(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  function generateUpper(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  
  function confirmLetters(){
    var letterSelection = window.confirm("Would you like to add uppercase letters?");
        if (letterSelection == true){
          generateLower();
          generateUpper();
          passwordAlert();
        }else{
          generateLower();
          passwordAlert();
        }
      }

  function confirmSymbols(){
    var symbolSelection = window.confirm("Would you like to add symbols?");
        if (symbolSelection == true){
          generateSymbols();
          confirmLetters();
        }else{
          confirmLetters();
        }
      }

  function confirmNumbers(){
    var numberSelection = window.confirm("Would you like to add numbers?");
        if (numberSelection == true){
          generateNumbers();
          confirmSymbols();
        }else{
          confirmSymbols();
        }
  }

  var passwordLength = Number(window.prompt("How many characters would you like the password to be (between 8-128)"));
    if (passwordLength < 8){
      window.alert("Password length is too short.");
 
    }else if (passwordLength > 128){
      window.alert("Password length is too long. Get outta here stinky!");

    }else{
      confirmNumbers();
    }

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
