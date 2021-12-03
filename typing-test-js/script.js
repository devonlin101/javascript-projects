// Selecting All Tags In Html For JavaScript Word
let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let userInput = document.querySelector("#userInput");
let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");
let inputArea = document.querySelector("#input_area");

//Variables For CountDown
let timer = 60;
let interval = null;

//Variables To Store Errors , Words & Characters
let errorCounter = 0;
let wordsCounter = "";
let index = 0;

// Words For Speed Test
let text = `Push yourself, because no one else is going to do it for you. Failure is the condiment that gives success its flavor. Wake up with determination. Go to bed with satisfaction. It's going to be hard, but hard does not mean impossible. Learning never exhausts the mind. The only way to do great work is to love what you do. series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night.`;

text.split("").map((characters) => {
  let spanTxt = document.createElement("span");
  spanTxt.innerText = characters;
  inputArea.appendChild(spanTxt);
});
inputArea.firstChild.classList.add("correct");
userInput.addEventListener("click", startGame);

//click start game button trigger startGame() function
//
function startGame() {
  userInput.classList.add("cursor");
  // Appending Spans
  interval = setInterval(countDown, 1000);
}
userInput.addEventListener("input", (e) => {
  //match Characters
  let userValue = userInput.value.split("");
  // console.log(userValue);

  let randomText = inputArea.querySelectorAll("span");
  // console.log(randomText);

  //if user key will be equal to `backspace` so
  if (e.inputType === "deleteContentBackward") {
    index--;
    randomText[index].classList.remove("correct");
    randomText[index].classList.remove("incorrect");
  }
  //if user Key Matched So
  else if (userValue[index] === randomText[index].innerText) {
    randomText[index].classList.add("correct");
    index++;
  }
  // if user key not matched so
  else {
    {
      randomText[index].classList.add("incorrect");
      index++;
      errorCounter++;
    }
  }
});

//CountDown Function
let countDown = () => {
  if (timer > 0) {
    timer--;
    counter.innerText = timer;
  } else {
    //Stop Timer
    clearInterval(interval);
    timer = 60; //reset Timer
    time.style.display = "none";
    result.style.display = "flex"; //Display Result
    document.querySelector(".myButton").style.display = "block";
    userInput.disabled = true;
    words.innerText = userInput.value.split(" ").length;
    characters.innerText = index; //total Characters
    error.innerText = errorCounter; //total errors
  }
};

function restartGame() {
  location.reload();
}
