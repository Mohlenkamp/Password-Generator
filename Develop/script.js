// Assignment code here


// This is a generic function that will ask the user about which character sets they
// want in the generated password.
function AskAboutSet (setName, complexityValue){
  var characterSet = ""
  while (!characterSet){
    characterSet = window.prompt(setName)
    switch (characterSet){
      case "Y":
      case "y":
        return complexityValue //User selected this set
        break;
      case "N":
      case "n":
        return 0 // Do nothing - User skipped this set
        break;
      default: //User did not enter valid response
        window.alert("Please type letter (Y) for Yes or (N) for No to the question")
        characterSet = ""
    }
  }
}


function generatePassword() {

/* Setting available characters
 I'm removing the space " ", single ' ,and double " characters to prevent
 future errors with how strings are parsed. Also, I'm setting each 
 character set to a value so that when combined, I'll know what the 
 full character set the user wants
*/
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"              //Character set 1
var lowerCase = upperCase.toLowerCase();                  //Character set 2
var numericVals = "0123456789"                            //Character set 4
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"  //Character set 8

// User settings section

//How long a password?
var passwordLength =""
while (!passwordLength){
  passwordLength = window.prompt("Length of generated password (bewteen 8 and 128 characters)")
  passwordLength = parseInt(passwordLength)
  // Test if length was not valid
  if ((!passwordLength) || (passwordLength< 8) || (passwordLength > 128)){
    window.alert("Please retry with a numeric value between 8 and 128")
    passwordLength = ""
  } 
}
//What character sets do they want?
var passwordComplexity = 0
var characterSet = ""
var resultSet = ""
while (passwordComplexity < 1){
  // Ask about Upper Case
  /* Changing for function AskAboutSet

  while (!characterSet){
      characterSet = window.prompt("Include upper case alphabet characters? (Y)es or (N)o")
      switch (characterSet){
        case "Y":
        case "y":
          passwordComplexity += 1 //User selected this set
          break;
        case "N":
        case "n":
          // Do nothing - User skipped this set
          break;
        default:               //User did not enter valid response
          window.alert("Please type letter (Y) for Yes or (N) for No to the question")
          characterSet = ""
      }
  } */
  passwordComplexity += parseInt(AskAboutSet("Include upper case alphabet characters? (Y)es or (N)o",1))

  // Ask about lower case
  /* characterSet = ""
  while (!characterSet){
    characterSet = window.prompt("Include lower case alphabet characters? (Y)es or (N)o")
    switch (characterSet){
      case "Y":
      case "y":
        passwordComplexity += 2 //User selected this set
        break;
      case "N":
      case "n":
        // Do nothing - User skipped this set
        break;
      default:               //User did not enter valid response
        window.alert("Please type letter (Y) for Yes or (N) for No to the question")
        characterSet = ""
    }
  } */
  passwordComplexity += parseInt(AskAboutSet("Include lower case alphabet characters? (Y)es or (N)o",2))

    /* Ask about numeric
    characterSet = ""
    while (!characterSet){
      characterSet = window.prompt("Include numerict characters? (Y)es or (N)o")
      switch (characterSet){
        case "Y":
        case "y":
          passwordComplexity += 4 //User selected this set
          break;
        case "N":
        case "n":
          // Do nothing - User skipped this set
          break;
        default:               //User did not enter valid response
          window.alert("Please type letter (Y) for Yes or (N) for No to the question")
          characterSet = ""
      }
  }
*/
  passwordComplexity += parseInt(AskAboutSet("Include numerict characters? (Y)es or (N)o",4))

      /* Ask about special characters
  characterSet = ""
  while (!characterSet){
    characterSet = window.prompt("Include special characters? (Y)es or (N)o")
    switch (characterSet){
      case "Y":
      case "y":
        passwordComplexity += 8 //User selected this set
        break;
      case "N":
      case "n":
        // Do nothing - User skipped this set
        break;
      default:               //User did not enter valid response
        window.alert("Please type letter (Y) for Yes or (N) for No to the question")
        characterSet = ""
    }
  } */

  passwordComplexity += parseInt(AskAboutSet("Include special characters? (Y)es or (N)o",8))

  // Determine result set of password characters
  console.log("Password complexity level chosen: " + passwordComplexity.toString())
  switch (passwordComplexity){
    case 1: // Only upper case selected
      resultSet = upperCase
      break;
    case 2: // Only lower case selected
      resultSet = lowerCase
      break;
    case 3: // Upper and lower case selected
      resultSet = upperCase.concat(lowerCase)
      break;
    case 4: // Only numeric selected
      resultSet = numericVals
      break;
    case 5: // Upper case and numeric selected
      resultSet = upperCase.concat(numericVals)
      break;
    case 6: // Lower case and numeric selected
      resultSet = lowerCase.concat(numericVals)
      break;
    case 7: // Upper, lower, and numeric selected
      resultSet = upperCase.concat(lowerCase, numericVals)
      break;
    case 8: // Only special characters selected
      resultSet = specialCharacters
      break;
    case 9: // Upper case and special characters selected
      resultSet = upperCase.concat(specialCharacters)
      break;
    case 10: // Lower case and special characters selected
      resultSet = lowerCase.concat(specialCharacters)
      break;
    case 11: // Upper, lower, and special characters selected
      resultSet = upperCase.concat(lowerCase, specialCharacters)
      break;
    case 12: // Numeric and special characters selected
      resultSet = numericVals.concat(specialCharacters)
      break;
    case 13: // Upper case, numeric, and special characters selected
      resultSet = upperCase.concat(numericVals, specialCharacters)
      break;
    case 14: // Lower case, numeric, and special characters selected
      resultSet = lowerCase.concat(numericVals, specialCharacters)
      break;
    case 15: // All sets selected
      resultSet = upperCase.concat(lowerCase, numericVals, specialCharacters)
      break;
    default:
      window.alert("You have not chosen any character sets for your password.")
      break;
  }
}
 // Creating password using selected character set(s)
 // Loops number of times equal to password length
 // Then adds single character from random number between 1 and length of the requested character sets
 // 
var passwordGenerated = ""
var randomCharacterLocation
 for (var i=1; i<= passwordLength; i++){
    randomCharacterLocation = Math.floor(Math.random() * (resultSet.length)) + 1; 
    passwordGenerated = passwordGenerated.concat(resultSet.charAt(randomCharacterLocation))
    }

    return passwordGenerated;

}









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
