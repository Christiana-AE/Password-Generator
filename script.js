// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

var passwordLength = prompt("Choose password length. Minimum of 10 characters and maximum of 64");

function getPasswordOptions() {
  
  //Validate password length

  var passwordTries = 3;

  while(passwordTries > 0){
    if (passwordLength >= 10 && passwordLength <= 64){
      alert("You have selected a password with " + passwordLength + " characters");
      break;
    }
    else if (passwordLength < 10 || passwordLength > 64){
      alert("Password length must be between 10 and 64 characters only!");
      prompt("Choose password length. Minimum of 10 characters and maximum of 64");
      passwordTries--;
    }
  }

    // Ask user for password character type
  var charType = prompt("Choose password character type from: lowercase, uppercase, numeric, special characters");

   // Validate character type and use consistent casing for validation
   if (charType.toLowerCase() === "lowercase" || charType.toLowerCase() === "uppercase" || charType.toLowerCase() === "numeric" 
      || charType.toLowerCase() === "special characters")
   {
    alert("You have selected " + charType.toLowerCase() + " password");
  } 
    else {
    alert("Enter a valid password type between lowercase, uppercase, numeric or special characters!");
  }
    return passwordLength;
}

// call function to prompt user for password options at start of the password generation 
getPasswordOptions();

//-----------------------------------------------------------------------------------------------------------

// Function for getting a random element from an array
function getRandom(arr) {
  var element = arr[Math.floor(Math.random()* arr.length)];
}

//-----------------------------------------------------------------------------------------------------------

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);