let mainFunction = (valueOfi) => {
  let wordLength = wordsList[valueOfi].length;

  for (let j = 0; j < wordLength; j++) {
    wordToShow.innerText += `${wordsList[valueOfi][j]}   `;
    wordToShow.className = "wordToShow";
  }
  // let input_value = inputBox.value.toLowercase();
  checkAnswer.addEventListener("click", function () {
    if (inputBox.value=== correctWords[valueOfi]) {
      console.log("true", inputBox.value, correctWords[valueOfi]);
      inputBox.style.backgroundColor = "green";
      inputBox.style.border = "green";
      // inputBox.value = "correct";
      score++;
    } else {
      console.log(
        "false",
        inputBox.value,
        correctWords[valueOfi]
      );
      inputBox.style.backgroundColor = "red";
      inputBox.style.border = "red";
      // inputBox.value = "wrong try again";
    }
  });
};

// ========================variables from html file=====================
let wordToShow = document.querySelector(".wordToShow");
const inputBox = document.querySelector(".inputBox");
const checkAnswer = document.querySelector("#checkAnswer");
const changeWord = document.querySelector("#changeWord");
let scoreDiv = document.querySelector(".score");
let gameDiv = document.querySelector(".game_div");
let circle = document.querySelector(".circle");
let restart = document.querySelector(".restart");
let counter = 0;
let score = 0;
// =========================my variable========================
let spanCreation;
let wordsList = [
  "fecefo",
  "eutbya",
  "imsel",
  "khtic",
  "rnom",
  "hbeca",
  "pleeop",
  "lepap",
  "etapcc",
  "lfiamy",
];
let correctWords = [
  "coffee",
  "beauty",
  "smile",
  "thick",
  "norm",
  "beach",
  "people",
  "apple",
  "accept",
  "family",
];

// let randomNumber = Math.round(Math.random() * correctWords.length - 1);

mainFunction(counter);
changeWord.addEventListener("click", function () {
  wordToShow.innerText = "";
  inputBox.style.backgroundColor = "rgb(186, 246, 226)";
  inputBox.style.border = "2px solid aqua";
  inputBox.value = "enter correct word";
  counter++;
  if (counter >= 10) {
    gameDiv.style.display = "none";
    scoreDiv.style.display = "block";
    if (score >= 6) {
      circle.innerText = score;
      circle.style.backgroundColor = "green";
      circle.style.border = "5px solid rgb(115, 209, 115)";
      circle.style.borderTop = "5px solid grey";
    } else {
      circle.innerText = `${score}`;
      circle.style.backgroundColor = "rgb(190, 68, 59)";
      circle.style.border = "5px solid rgb(255, 17, 0)";
      circle.style.borderTop = "5px solid grey";
    }
  } else {
    mainFunction(counter);
  }
});
restart.addEventListener("click", function () {
  gameDiv.style.display = "block";
  scoreDiv.style.display = "none";
  counter = 0;
  mainFunction(counter);
});
