/* Variabler */
const quizContainerUnited = document.getElementById('quiz-united');
const quizContainerLiverpool = document.getElementById('quiz-liverpool');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
    question: "Hvem er toppscorer i premier league?",
    answers: {
      a: "Mohamed Salah",
      b: "Sadio Mane",
      c: "Diogo Jota"
    },
    correctAnswer: "a"
  },
  {
    question: "Hvem er keeper for Liverpool?",
    answers: {
      a: "Virgil Van Dijk",
      b: "Joel Matip",
      c: "Alisson Becker"
    },
    correctAnswer: "c"
  },
  {
    question: "Hvilke av disse spillerene er en forsvarspiller?",
    answers: {
      a: "Trent Alexander-Arnold",
      b: "Jordan Henderson",
      c: "Sadio Mane",
      d: "Roberto Firmino"
    },
    correctAnswer: "a"
  }
];

function myFunction(){
    var x = document.getElementById("unitedArticle")
    if(x.style.display ==="block"){
        x.style.display = "none"
    }else{
        x.style.display = "block"
    }
}


function myFunctionLiv(){
  var y = document.getElementById("liverpoolArticle")
  if(y.style.display ==="block"){
      y.style.display = "none"
  }else{
      y.style.display = "block"
  }
}

(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question... UNITED
      myQuestionsUnited.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
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

      // for each question...LIVERPOOL
      myQuestionsLiverpool.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
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
        });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainerLiverpool.innerHTML = output.join('');
    }

         
  
function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
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
      resultsContainer.innerHTML = `Du fikk ${numCorrect} av ${myQuestions.length} riktige`;
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
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  