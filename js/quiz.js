/* Variabler */
const quizContainerUnited = document.getElementById('quiz-united');
const resultsUnited = document.getElementById('resultsUnited');
const submitButton = document.getElementById('submit');
const quizContainerLiverpool = document.getElementById('quiz-liverpool');
const resultsLiverpool = document.getElementById('resultsLiverpool');

/* Array for Manchester United */
const myQuestionsUnited = [
  {
    question: "Hvem er toppscorer for Manchester United i Champions League?",
    answers: {
      a: "Marcus Rashford",
      b: "Cristiano Ronaldo",
      c: "David De Gea"
    },
    correctAnswer: "b"
  },
  {
    question: "Hvem er keeper for United?",
    answers: {
      a: "Luke Shaw",
      b: "Bruno Fernandes",
      c: "David De Gea"
    },
    correctAnswer: "c"
  },
  {
    question: "Hvilken spiller på United har vunnet balon d'or?",
    answers: {
      a: "Paul Pogba",
      b: "Marcus Rashford",
      c: "Harry Maguire",
      d: "Cristiano Ronaldo"
    },
    correctAnswer: "d"
  }
];


const myQuestionsLiverpool = [
  {
    questionLiv: "Hvem er toppscorer for Liverpool i Champions League?",
    answersLiv: {
      x: "Sadio Mane",
      y: "Mohamed Salah",
      z: "Alisson Becker"
    },
    correctAnswerLiv: "y"
  },
  {
    questionLiv: "Hvem er keeper for Liverpool?",
    answersLiv: {
      x: "Jordan Henderson",
      y: "Michael Burry",
      z: "Alisson Becker"
    },
    correctAnswerLiv: "z"
  },
  {
    questionLiv: "Hvilken spiller på Liverpool har vunnet balon d'or?",
    answersLiv: {
      x: "Mohamed Salah",
      y: "Steven Gerrard",
      z: "Luis Suarez",
      æ: "Michael Owen"
    },
    correctAnswerLiv: "æ"
  }
];

/* Funksjoner for buttons i QuizArticle */

const unitedQuizBtn = document.querySelector("#unitedBtn")
const unitedQuizBox = document.querySelector("#unitedArticle")
const liverpoolQuizBtn = document.querySelector("#liverpoolBtn")
const liverpoolQuizBox = document.querySelector("#liverpoolArticle")

/* Vise en av quizene og skjule den andre */
let showUnitedQuiz = () => {
  
  unitedQuizBox.style.display = "block"
  liverpoolQuizBox.style.display = "none"

}
unitedQuizBtn.addEventListener("click", showUnitedQuiz)



let showLiverpoolQuiz = () => {
  
  unitedQuizBox.style.display = "none"
  liverpoolQuizBox.style.display = "block"

}
liverpoolQuizBtn.addEventListener("click", showLiverpoolQuiz)
//slutt


// Funksjoner
function buildQuizUnited(){
  // variabel for å store output
    const output = [];
  
    // forEach United spørsmål
    myQuestionsUnited.forEach(
      (currentQuestion, questionNumber) => {
  
        // variabel for å store mulige svar
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          //for hvert svar-alternativ, legg til label
          answers.push(
            `<label>
              <input type="checkbox" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

          
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
  
// finally combine our output list into one string of HTML and put it on the page
quizContainerUnited.innerHTML = output.join('');
}


function buildQuizLiverpool(){

  const outputLiv = [];
  myQuestionsLiverpool.forEach(
    (currentQuestionLiv, questionNumberLiv) => {

      // variable to store the list of possible answers
      const answersLiv = [];

      // and for each available answer...
      for(letter in currentQuestionLiv.answersLiv){

        // ...add an HTML radio button
        answersLiv.push(
          `<label>
            <input type="checkbox" name="question${questionNumberLiv}" value="${letter}">
            ${letter} :
            ${currentQuestionLiv.answersLiv[letter]}
          </label>`
        );
      }
      

    // add this question and its answers to the output
    outputLiv.push(
      `<div class="slide">
        <div class="questionLiv"> ${currentQuestionLiv.questionLiv} </div>
        <div class="answersLiv"> ${answersLiv.join("")} </div>
      </div>`
    );
  });

// finally combine our output list into one string of HTML and put it on the page
quizContainerLiverpool.innerHTML = outputLiv.join('');
} 
         
  
function showResultsUnited(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainerUnited.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question... UNITED
      myQuestionsUnited.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      // show number of correct answers out of total
      resultsUnited.innerHTML = `Du fikk ${numCorrect} av ${myQuestionsUnited.length} riktige`;
}

function showResultsLiverpool(){

    // gather answer containers from our quiz
    const answerContainers = quizContainerLiverpool.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;

    // for each question... LIVERPOOL
    myQuestionsLiverpool.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsLiverpool.innerHTML = `Du fikk ${numCorrect} av ${myQuestions.length} riktige`;
    }
  
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }

    
// Funksjoner for å vise neste slide og/eller forrige    
function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

// Kjør program
buildQuizUnited();


buildQuizLiverpool();


// Navigering i Quiz, HENTE INN KNAPPER FRA HTML
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
  
//Vis første spørsmålsslide
showSlide(currentSlide);

/* Event listeners på knappene */
submitButton.addEventListener('click', showResultsUnited, showLiverpoolQuiz);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);