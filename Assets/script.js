const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".concat('"');
let passwordText = document.querySelector("#password");
let pwChar = [];
let pwLength;
let inclChar = "";

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

function checkLength() {
  const input = prompt(
    "Please enter the desire length of your password.\nIt has to be a number and between 8~128."
  );
  // Check if user clicked "Cancel"
  if (input === null || input === undefined) {
    console.log("cancel", input);
    return; // Return null to indicate cancellation
  }
  pwLength = parseInt(input);
  if (isNaN(pwLength) || pwLength > 128 || pwLength < 8) {
    console.log("input", pwLength);

    alert("Oopsie! Please enter a valid number!");
    checkLength();
  }
  generatePassword();
}

function generatePassword() {
  pwChar = [];
  inclChar = "";

  let upperIn = prompt(
    "(1/4) Do you like to include uppercase characters?\nPlease only enter Y or N to signify your choice of Yes or No."
  );
  if (upperIn === null) {
    return;
  } else if (upperIn.toLowerCase() !== "y" && upperIn.toLowerCase() !== "n") {
    alert("Please enter a valid input.");
    upperIn = prompt(
      "(1/4) Do you like to include uppercase characters?\nPlease only enter Y or N to signify your choice of Yes or No."
    );
  } else if (upperIn.toLowerCase() === "y") {
    inclChar = upperCase;
  }

  let lowerIn = prompt(
    "(2/4) Do you like to include lowercase characters?\nPlease only enter Y or N to signify your choice of Yes or No."
  );
  if (lowerIn === null) {
    return;
  } else if (lowerIn.toLowerCase() !== "y" && lowerIn.toLowerCase() !== "n") {
    alert("Please enter a valid input.");
    lowerIn = prompt(
      "(2/4) Do you like to include lowercase characters?\nPlease only enter Y or N to signify your choice of Yes or No."
    );
  } else if (lowerIn.toLowerCase() === "y") {
    inclChar = inclChar + lowerCase;
  }

  let numsIn = prompt(
    "(3/4) Do you like to include numeric characters?\nPlease only enter Y or N to signify your choice of Yes or No."
  );
  if (numsIn === null) {
    return;
  } else if (numsIn.toLowerCase() !== "y" && numsIn.toLowerCase() !== "n") {
    alert("Please enter a valid input.");
    numsIn = prompt(
      "(3/4) Do you like to include numeric characters?\nPlease only enter Y or N to signify your choice of Yes or No."
    );
  } else if (numsIn.toLowerCase() === "y") {
    inclChar = inclChar + nums;
  }

  let specCharIn = prompt(
    "(4/4) Do you like to include special characters?\nPlease only enter Y or N to signify your choice of Yes or No."
  );
  if (specCharIn === null) {
    return;
  } else if (
    specCharIn.toLowerCase() !== "y" &&
    specCharIn.toLowerCase() !== "n"
  ) {
    alert("Please enter a valid input.");
    specCharIn = prompt(
      "(4/4) Do you like to include special characters?\nPlease only enter Y or N to signify your choice of Yes or No."
    );
  } else if (specCharIn.toLowerCase() === "y") {
    inclChar = inclChar + specChar;
  }

  if (
    upperIn.toLowerCase() === "n" &&
    lowerIn.toLowerCase() === "n" &&
    numsIn.toLowerCase() === "n" &&
    specCharIn.toLowerCase() === "n"
  ) {
    alert(
      "At least one of the four criteria must be Y (yes).\nPlease reselect!"
    );
    return generatePassword();
  }

  for (let i = 0; i < pwLength; i++) {
    const chosenCode = inclChar[Math.floor(Math.random() * inclChar.length)];
    pwChar[i] = chosenCode;
  }
  console.log(pwChar);
}

function writePassword() {
  var password = pwChar.join("");
  passwordText.value = password;
}

generateBtn.addEventListener("click", function () {
  passwordText.value = "";
  checkLength();
  writePassword();
});
