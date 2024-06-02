alert("HELLO");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const loginContainer = document.getElementById("login-container");
const loginButton = document.getElementById("login-btn");
const timerElement = document.getElementById("timer");
const timerRemainingElement = document.getElementById("time-remaining");
const mainContainer = document.getElementById("main-container");

let shuffledQuestions, currentQuestionIndex;
let timerInterval;
let timeRemaining = 60; //Example: 60seconds for exam

loginButton.addEventListener("click", handleLogin);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === 'password') {
    //Example credentials

    loginContainer.classList.add('hide');
    mainContainer.classList.remove('hide');
    startButton.classList.remove('hide');
  } else {
    alert("invalid credentials");
  }
}

function startGame() {
  startButton.classList.add('hide');
  timerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  startTimer();
  setNextQuestion();
}

function startTimer() {
  timeRemaining = 60; // Reset timer
  timerRemainingElement.innerText = timeRemaining;
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerRemainingElement.innerText = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  questionContainerElement.classList.add("hide");

  timerElement.classList.add("hide");
  alert("Time is up! Exam ended.");
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
}

function setNextQuestion() {
  resetState();

  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);

    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while
   (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    clearInterval(timerInterval);
    startButton.innerText = 'Restart';

    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
    {
        question: 'what is 2 + 2?',
        answers: [
            {
                text: '4', correct: true
            },
            {
                text: '22', correct: false
            },
            {
                text: '2', correct: false
            },
            {
                text: '3', correct: false
            }
        ]
    },
    {
        question: 'what is the capital oe France?',
        answers: [
            {
                text: 'Berlin', correct: false
            },
            {
                text: 'Madrid', correct: false
            },
            {
                text: 'Paris', correct: true
            },
            {
                text: 'Rome', correct: false
            }
        ]
    },
]
