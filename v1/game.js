const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Care este cel mai inalt munte de pe glob?",
        choice1: "Himalaya",
        choice2: "K2",
        choice3: "Negoiu",
        choice4: "Elbrus",
        answer: 1
    }, {
        question: "Ce planetă mai este cunoscută ca fiind denumită „Planeta Roşie”?",
        choice1: "PLUTO",
        choice2: "URANUS",
        choice3: "TERRA",
        choice4: "MARTE",
        answer: 4
    },
    {
        question: "Care este cel mai lung fluviu din Europa?",
        choice1: "VOLGA",
        choice2: "DUNAREA",
        choice3: "RINUL",
        choice4: "TISA",
        answer: 1
    },
    {
        question: "Cate continente exista pe Pamant?",
        choice1: "3",
        choice2: "5",
        choice3: "10",
        choice4: "7",
        answer: 4
    },
    {
        question: "In ce an s-a nascut regele Mihai I?",
        choice1: "1922",
        choice2: "1921",
        choice3: "1821",
        choice4: "1888",
        answer: 2
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore",score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();