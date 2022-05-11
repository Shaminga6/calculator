// DISPLAY
let displayBoard = document.getElementById("output");

// EVENT LISTENER ON THE KEYS
let calculatorKeys = document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
      displayBoard.innerText += btn.value;
  })
})

// CALCULATION
  document.getElementById("submit").addEventListener("click", () => {
  displayBoard.innerText = eval(displayBoard.innerText)
})


// CLEARING THE DISPLAY
let clear = document.getElementById("clear").addEventListener("click", () => {
  displayBoard.innerText = ""
})

// DELETING A NUMBER
let deleteKey = document.getElementById("deleteKey").addEventListener("click", () => {
  displayBoard.innerText = displayBoard.innerText.slice(0, -1);
})