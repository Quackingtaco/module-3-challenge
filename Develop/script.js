// Variable arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "?", ">", "<", "}", "{", "|", ".", ",", "[", "]", "~", "`", ":", ";"];

// Password prompts
function passwordOptions() {
  
  // Character length 
  var length = prompt("How many characters would you like your password to contain?");
if (length < 8 || length > 128) {
  alert("Password must be at least 8 characters and less than 129");
 return;
  
}

// User confirmation of variables
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");

// User input reference
  var passwordOptions = {
    length: length,
    special: special,
    numbers: numbers,
    lowercase: lowercase,
    uppercase: uppercase,
  };
  return passwordOptions;

}

// Get random elements from arrays
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Generate the password
function generatePassword() {
  var options = passwordOptions();

  // Array for possible characters
  var possibleCharacters = [];

  // Array for characters to be used
  var usedCharacters = [];
  
  var result = [];

  // Find user input
  if (!options) return null;

  // Concat input to possible characters and add to used characters
  
  // Include special characters
  if(options.special) {
    possibleCharacters = possibleCharacters.concat(special);
    usedCharacters.push(getRandom(special));
  }

  // Include numbers
  if(options.numbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    usedCharacters.push(getRandom(numbers));
  }

  // Include lowercase
  if(options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    usedCharacters.push(getRandom(lowercase));
  }

  // Include uppercase
  if(options.uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    usedCharacters.push(getRandom(uppercase));
  }

  // For loop to use length and concat options from the arrays
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

// For loop to make sure each used character is included
  for (var i = 0; i < usedCharacters.length; i++) {
    result[i] = usedCharacters[i];
  }

// Make password string
    return result.join('');
  
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);