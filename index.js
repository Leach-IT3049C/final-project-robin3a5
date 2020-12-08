gameContainer.classList.add("d-none");
newGameButton.classList.add("d-none");
const family1Set = document.getElementById("family1Set");
const family2Set = document.getElementById("family2Set");

const family1Get = document.getElementById("family1Get");
const family2Get = document.getElementById("family2Get");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");
const answer7 = document.getElementById("answer7");
const answer8 = document.getElementById("answer8");

const scoreholdera = document.getElementById("scoreholdera");
const scoreholder = document.getElementById("scoreholdermain");
const scoreholderb = document.getElementById("scoreholderb");


const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");

const userguess = document.getElementById("userguess");
const question = document.getElementById("question");


const buzzer = document.getElementById("buzzer");
const submitButton = document.getElementById("submitButton");

const startButton = document.getElementById("startButton");

const teamHolder = document.getElementById("teamHolder");
var questionSelector = 0;
var correctCounter = 0;
var questionsArrayMax = questions.length;
var teamTurn = 1;
scoreholdera.value = 0;
scoreholderb.value = 0;
var roundCounter = 1;




function selectQuestion() {
   questionSelector = Math.floor(Math.random() * Math.floor(questionsArrayMax));
};

function clearPlaceholders() {
   answer1.placeholder = "";
   answer2.placeholder = "";
   answer3.placeholder = "";
   answer4.placeholder = "";
   answer5.placeholder = "";
   answer6.placeholder = "";
   answer7.placeholder = "";
   answer8.placeholder = "";
}

function clearStrikes() {
   strike1.value = "";
   strike2.value = "";
   strike3.value = "";
}

function setplaceholders() {
   scoreholder.value = 0;
   if (questions[questionSelector].questionsLength == 1) {
      answer1.placeholder = "1"
   }
   else if (questions[questionSelector].questionsLength == 2) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
   }
   else if (questions[questionSelector].questionsLength == 3) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
   }
   else if (questions[questionSelector].questionsLength == 4) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
   }
   else if (questions[questionSelector].questionsLength == 5) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
   }
   else if (questions[questionSelector].questionsLength == 6) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
   }
   else if (questions[questionSelector].questionsLength == 7) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
      answer7.placeholder = "7"
   }
   else if (questions[questionSelector].questionsLength == 8) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
      answer7.placeholder = "7"
      answer8.placeholder = "8"
   }
}

startButton.addEventListener('click', function (event) {
   gameContainer.classList.remove("d-none");
   startContainer.classList.add("d-none");
   family1Get.innerHTML = family1Set.value;
   family2Get.innerHTML = family2Set.value;
   selectQuestion();
   setplaceholders();
   question.innerHTML = questions[questionSelector].question;
});

submitButton.addEventListener('click', function (event) {
   guessChecker();
   userguess.value = "";
   // if (strike3.value == "X") {
   //    if (teamTurn == 1) {
   //       scoreholdera.value = parseInt(scoreholdera.value) + parseInt(scoreholder.value);
   //    }
   //    else if (teamTurn == 2) {
   //       scoreholderb.value = parseInt(scoreholderb.value) + parseInt(scoreholder.value);
   //    }
   // }
   if (correctCounter == questions[questionSelector].questionsLength) {
      submitButton.classList.add("d-none");
      newGameButton.classList.remove("d-none");
      if (teamTurn == 1) {
         scoreholdera.value = parseInt(scoreholder.value) + parseInt(scoreholdera.value);
         teamTurn = 2;
      }
      else if (teamTurn == 2) {
         scoreholderb.value = parseInt(scoreholder.value) + parseInt(scoreholderb.value);
         teamTurn = 1;
      }
   }

   console.log(correctCounter);
});

newGameButton.addEventListener('click', function (event) {
   selectQuestion();
   clearPlaceholders();
   correctCounter = 0;
   question.innerHTML = questions[questionSelector].question;
   clearStrikes();
   setplaceholders();
   newGameButton.classList.add("d-none");
   submitButton.classList.remove("d-none");
   roundCounter += 1;
   if (roundCounter % 2 == 0) {
      teamTurn = 2;
   }
   else {
      teamTurn = 1;
   }
});

function playBuzzer() {
   buzzer.play();
};

function playCorrect() {
   correctCounter += 1;
   correctSound.play();
};

function addStrike() {
   if (strike1.value == "") {
      strike1.value = "X";
   }
   else if (strike2.value == "") {
      strike2.value = "X"
   }
   else if (strike3.value == "") {
      strike3.value = "X"
      if (teamTurn == 1) {
         teamTurn = 2;
      }
      else if (teamTurn == 2) {
         teamTurn = 1;
      }

   }
   else {
      submitButton.classList.add("d-none");
      newGameButton.classList.remove("d-none");
      if (teamTurn == 1) {
         scoreholdera.value = parseInt(scoreholder.value) + parseInt(scoreholdera.value);
      }
      else if (teamTurn == 2) {
         scoreholderb.value = parseInt(scoreholder.value) + parseInt(scoreholderb.value);
      }
      if (questions[questionSelector].questionsLength == 1) {
         answer1.placeholder = questions[questionSelector].answer1;
      }
      else if (questions[questionSelector].questionsLength == 2) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;

      }
      else if (questions[questionSelector].questionsLength == 3) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
      }
      else if (questions[questionSelector].questionsLength == 4) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
      }
      else if (questions[questionSelector].questionsLength == 5) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
      }
      else if (questions[questionSelector].questionsLength == 6) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
      }
      else if (questions[questionSelector].questionsLength == 7) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
      }
      else if (questions[questionSelector].questionsLength == 8) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
         answer8.placeholder = questions[questionSelector].answer8;
      }
   }
};

function addPoints() {

};

function guessChecker() {
   if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer1 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer1 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer1 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers1 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers1 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers1) {
      answer1.placeholder = questions[questionSelector].answer1;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer1point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer2 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer2 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer2 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers2 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers2 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers2) {
      answer2.placeholder = questions[questionSelector].answer2;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer2point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer3 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer3 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer3 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers3 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers3 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers3) {
      answer3.placeholder = questions[questionSelector].answer3;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer3point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer4 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer4 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer4 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers4 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers4 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers4) {
      answer4.placeholder = questions[questionSelector].answer4;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer4point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer5 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer5 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer5 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers5 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers5 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers5) {
      answer5.placeholder = questions[questionSelector].answer5;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer5point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer6 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer6 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer6 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers6 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers6 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers6) {
      answer6.placeholder = questions[questionSelector].answer6;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer6point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer7 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer7 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer7 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers7 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers7 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers7) {
      answer7.placeholder = questions[questionSelector].answer7;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer7point;
      playCorrect();
   }
   else if (userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].answer8 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].answer8 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].answer8 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) === questions[questionSelector].alternateanswers8 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s" === questions[questionSelector].alternateanswers8 || userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers8) {
      answer8.placeholder = questions[questionSelector].answer8;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer8point;
      playCorrect();
   }
   else {
      playBuzzer();
      addStrike();
   }
}