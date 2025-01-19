const refs = {
  userInput: document.getElementById('user-input'),
  enterBtn: document.getElementById('enter-btn'),
  copyBtn: document.getElementById('copy-btn'),
  outputResult: document.getElementById('output-result'),
};

// add event listeners
refs.enterBtn.addEventListener('click', reverseIt);
refs.copyBtn.addEventListener('click', copy);

// reverse user input content
function reverseIt() {
  const inputData = refs.userInput.innerText;
  const reversedData = inputData.split('').reverse().join('');
  refs.outputResult.innerText = reversedData;
}

// copy to clipboard
function copy() {
  const valueToCopy = refs.outputResult.innerText;
  navigator.clipboard.writeText(valueToCopy);
}
