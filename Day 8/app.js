// Get the HTML elements
const colourDisplaySection = document.getElementById("colour-display");
const newColourBtnElement = document.getElementById("new-colour-button");
const currentColourElement = document.getElementById("current-colour");

// Define the hexadecimal values from 0 to F
const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Generate a random hexadecimal value
function getRandomHexVlaue() {
  return hexValues[Math.floor(Math.random() * hexValues.length)];
}

// Generate a random hexadecimal string of a given length
function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexVlaue();
  }
  return hexString;
}

// Change background color on button click
newColourBtnElement.addEventListener("click", function () {
  const randomHexString = "#" + getRandomHexString(6);
  document.body.style.setProperty("background-color", randomHexString);
  currentColourElement.textContent = randomHexString;
  colourDisplaySection.style.borderColor = randomHexString;
});
