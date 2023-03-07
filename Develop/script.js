// Assignment code here
// const upper_codes = arrayFromLowToHigh(65,90);
// const lower_codes = arrayFromLowToHigh(97,122);
// const num_codes = arrayFromLowToHigh(48,57);
// const char_codes = arrayFromLowToHigh(32,47)
//                   .concat(arrayFromLowToHigh(58, 64))
//                   .concat(arrayFromLowToHigh(91, 96))
//                   .concat(arrayFromLowToHigh(123, 126));
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const specChar =  " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".concat('"');
let pwChar = []
let pwLength;
let inclChar ='';
                  
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

function checkLength(){
  pwLength = parseInt(prompt("Please enter the desire length of your password.\nIt has to be a number and between 8~128."));
  if (isNaN(pwLength)|| pwLength > 128 || pwLength < 8) {
    alert("Oopsie! Please enter a valid number!");
    checkLength();
  }
}

function generatePassword(){
  let upperIn = prompt("(1/4) Do you like to include uppercase characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();   
  while (upperIn !== 'y'&& upperIn !== 'n'){    
    alert("Please enter a valid input.");
    upperIn = prompt("(1/4) Do you like to include uppercase characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();
  }
  if (upperIn === 'y'){
    inclChar = upperCase;
  } 
  // else if (upperIn !== 'y'&& upperIn !== 'n'){
  //   alert("Please enter a valid input.")
  //   generatePassword(upperIn);
  // };
  
  let lowerIn = prompt("(2/4) Do you like to include lowercase characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase (); 
  while (lowerIn !== 'y'&& lowerIn !== 'n'){
    alert("Please enter a valid input.");
    lowerIn = prompt("(2/4) Do you like to include lowercase characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase (); 
  }
  if (lowerIn === 'y'){
    inclChar = inclChar+lowerCase;
  } 
  // else if (lowerIn !== 'y'&& lowerIn !== 'n'){
  //   alert("Please enter a valid input.")
  //   generatePassword(lowerIn);
  // };
  
  let numsIn = prompt("(3/4) Do you like to include numeric characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();
  while (numsIn !== 'y'&& numsIn !== 'n'){
    alert("Please enter a valid input.")
    numsIn = prompt("(3/4) Do you like to include numeric characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();
  }
    if (numsIn === 'y'){
    inclChar = inclChar+nums;
  } 
  // else if (numsIn !== 'y'&& numsIn !== 'n'){
  //   alert("Please enter a valid input.")
  //   generatePassword(numsIn);
  // };
  
  let specCharIn = prompt("(4/4) Do you like to include special characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();   
  while (specCharIn !== 'y'&& specCharIn !== 'n'){
    alert("Please enter a valid input.")
    specCharIn = prompt("(4/4) Do you like to include special characters?\nPlease only enter Y or N to signify your choice of Yes or No.").toLowerCase ();   
  }
  if (specCharIn === 'y'){
    inclChar = inclChar+specChar;
  } 
  // else if (specCharIn !== 'y'&& specCharIn !== 'n'){
  //   alert("Please enter a valid input.")
  //   generatePassword(specCharIn);
  // };

  if (upperIn === 'n' && lowerIn === 'n' && numsIn === 'n' && specCharIn === 'n') {
    alert("At least one of the four criteria must be Y (yes).\nPlease reselect!")
    generatePassword();
    return;
    }
  
  // console.log(inclChar); //<----
  for (let i = 0; i < pwLength; i++){
    const chosenCode = inclChar[Math.floor(Math.random()*inclChar.length)];
    // pwChar.push(string.inclChar(chosenCode));
    pwChar[i]=chosenCode;
  }
  console.log(pwChar)
}

checkLength();
generatePassword();




// Write password to the #password input
function writePassword() {
  
  // function generate Pwd is called 
  var password = pwChar.join('');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



