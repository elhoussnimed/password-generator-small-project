const passwordContainer = document.querySelector(".password .passContainer");
const generateBtn = document.querySelector(".btn");
const clipboardBtn = document.querySelector(".password .fa-clipboard");
const passLengthInput = document.querySelector("#passwordLength");
const uppercaseInput = document.querySelector("#uppercase");
const lowercaseInput = document.querySelector("#lowercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const lowercaseLetters = [
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
const uppercaseLetters = lowercaseLetters.map((letter) => letter.toUpperCase());
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["&", "@", "_", "$", "?", "!", "-", "#"];

const generatePassword = () => {
  let passwordElements = [];
  let password = [];
  const passLength = +passLengthInput.value;

  if (uppercaseInput.checked) {
    passwordElements.push(...uppercaseLetters);
  }
  if (lowercaseInput.checked) {
    passwordElements.push(...lowercaseLetters);
  }
  if (numbersInput.checked) {
    passwordElements.push(...numbers);
  }
  if (symbolsInput.checked) {
    passwordElements.push(...symbols);
  }

  for (let i = 0; i < passLength; i++) {
    password.push(
      passwordElements[Math.floor(Math.random() * passwordElements.length)]
    );
  }
  passwordContainer.innerHTML = password.join("");

  clipboardBtn.addEventListener("click", () => {
    copyToClipboard(password);
  });
};

const copyToClipboard = (password) => {
  navigator.clipboard.writeText(password.join(""));
  passwordContainer.innerHTML = "";
  alert("Password Copied Successfully");
};

generateBtn.addEventListener("click", generatePassword);
