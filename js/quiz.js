/* Spørsmål og svar til quizen */
/* United */
const myQuestionsUnited = [
  {
    questionUnited: "Hvem er toppscorer for Manchester United i Champions League?",
    answersUnited: {
      a: "Marcus Rashford",
      b: "Cristiano Ronaldo",
      c: "David De Gea"
    },
    correctAnswerUnited: "b"
  },
  {
    questionUnited: "Hvem er keeper for United?",
    answersUnited: {
      a: "Luke Shaw",
      b: "Bruno Fernandes",
      c: "David De Gea"
    },
    correctAnswerUnited: "c"
  },
  {
    questionUnited: "Hvilken spiller på United har vunnet balon d'or?",
    answersUnited: {
      a: "Paul Pogba",
      b: "Marcus Rashford",
      c: "Harry Maguire",
      d: "Cristiano Ronaldo"
    },
    correctAnswerUnited: "d"
  },
  {
    questionUnited: "Hvilken spiller spiller for Frankrikes nasjonallag?",
    answersUnited: {
      a: "Paul Pogba",
      b: "Marcus Rashford",
      c: "Harry Maguire",
      d: "Cristiano Ronaldo"
    },
    correctAnswerUnited: "a"
  },
  {
    questionUnited: "Hvem har flest kamper for Manchester United",
    answersUnited: {
      a: "David De Gea",
      b: "Marcus Rashford",
      c: "Harry Maguire",
      d: "Victor Lindeløf"
    },
    correctAnswerUnited: "a"
  }
];

/* Liverpool */
const myQuestionsLiverpool = [
  {
    questionLiverpool: "Hvem er toppscorer for Liverpool i Champions League?",
    answersLiverpool: {
      a: "Sadio Mane",
      b: "Mohamed Salah",
      c: "Alisson Becker"
    },
    correctAnswerLiverpool: "b"
  },
  {
    questionLiverpool: "Hvem er keeper for Liverpool?",
    answersLiverpool: {
      a: "Jordan Henderson",
      b: "Michael Burry",
      c: "Alisson Becker"
    },
    correctAnswerLiverpool: "c"
  },
  {
    questionLiverpool: "Hvilken spiller på Liverpool har vunnet balon d'or?",
    answersLiverpool: {
      a: "Mohamed Salah",
      b: "Steven Gerrard",
      c: "Luis Suarez",
      d: "Michael Owen"
    },
    correctAnswerLiverpool: "d"
  },
  {
    questionLiverpool: "Hvem er kaptein for Liverpool?",
    answersLiverpool: {
      a: "Mohamed Salah",
      b: "Jordan Henderson",
      c: "Trent Alexander-Arnold",
      d: "Andy Robertson"
    },
    correctAnswerLiverpool: "b"
  },
  {
    questionLiverpool: "Hvilken spiller på Liverpool kostet mest penger?",
    answersLiverpool: {
      a: "Mohamed Salah",
      b: "Naby Keita",
      c: "Sadio Mane",
      d: "Virgil Van Dijk"
    },
    correctAnswerLiverpool: "d"
  }
];
  
/* Funksjon for quizene */
(function(){

const unitedQuizBtn = document.querySelector("#unitedBtn")
const unitedQuizBox = document.querySelector(".quiz-container__united")
const liverpoolQuizBtn = document.querySelector("#liverpoolBtn")
const liverpoolQuizBox = document.querySelector(".quiz-container__liverpool")

liverpoolQuizBox.style.display = "none"
/* Vise en av quizene/reloade og skjule den andre */
let showUnitedQuiz = () => {

  unitedQuizBox.style.display = "block"
  liverpoolQuizBox.style.display = "none"
  buildQuizUnited()
  resultsContainerUnited.innerHTML = ""

}
unitedQuizBtn.addEventListener("click", showUnitedQuiz,)

let showLiverpoolQuiz = () => {
  
  unitedQuizBox.style.display = "none"
  liverpoolQuizBox.style.display = "block"
  buildQuizLiverpool()
  resultsContainerLiverpool.innerHTML = ""

}
liverpoolQuizBtn.addEventListener("click", showLiverpoolQuiz)

/* Funksjon for United sin quiz */
    function buildQuizUnited(){
        
      const outputUnited = []
        myQuestionsUnited.forEach(
            (curentQuestionUnited, questionNumberUnited) => {

                const answersUnited = []

                for(letterUnited in curentQuestionUnited.answersUnited){
                    answersUnited.push(
                        `<label>
                        <input type="radio" name="questionUnited${questionNumberUnited}" value="${letterUnited}">
                        ${letterUnited} :
                        ${curentQuestionUnited.answersUnited[letterUnited]}
                        </label>`
                    )
                }

                outputUnited.push(
                    `<div class="questionUnited"> ${curentQuestionUnited.questionUnited} </div>
                    <div class="answersUnited"> ${answersUnited.join('')} </div>`  
                )
            }
        )
        quizContainerUnited.innerHTML = outputUnited.join('')
    }

    function showResultsUnited(){
        
        const answerContainersUnited = quizContainerUnited.querySelectorAll(".answersUnited")
        let numberCorrectUnited = 0
        let highscoreUnited = 0
        localStorage.setItem("highscoreUnited", numberCorrectUnited)

        myQuestionsUnited.forEach( (curentQuestionUnited, questionNumberUnited) => {  
            const answerContainerUnited = answerContainersUnited[questionNumberUnited] 
            const selectorUnited = `input[name=questionUnited${questionNumberUnited}]:checked`
            const userAnswerUnited = (answerContainerUnited.querySelector(selectorUnited) || {}).value

            if (userAnswerUnited === curentQuestionUnited.correctAnswerUnited){
                numberCorrectUnited++
                answerContainersUnited[questionNumberUnited].style.color = 'chartreuse'
            } else {
                answerContainersUnited[questionNumberUnited].style.color = 'maroon'
            }
        })

        if(numberCorrectUnited > parseInt(localStorage.getItem("highscoreUnited"))){
          localStorage.setItem("highscoreUnited", numberCorrectUnited)
        }
        
        highscoreUnited = localStorage.getItem("highscoreUnited")
        unitedHighscore.innerHTML = `Din forrige score er: ${highscoreUnited}` 
        resultsContainerUnited.innerHTML = `Herlig, du fikk ${numberCorrectUnited} av ${myQuestionsUnited.length} riktige!`

        if(numberCorrectUnited < 3){
          resultsContainerUnited.innerHTML = `Du må øve mer, du fikk ${numberCorrectUnited} av ${myQuestionsUnited.length} riktige.`
        }
    }

    const unitedHighscore = document.querySelector(".unitedHighscore")
    const quizContainerUnited = document.querySelector(".quizUnited")
    const submitUnited =  document.querySelector(".submitUnited")
    const resultsContainerUnited = document.querySelector(".resultUnited")

    buildQuizUnited()
    submitUnited.addEventListener("click", showResultsUnited)

 /* Funksjon for Liverpool sin quiz */   
    function buildQuizLiverpool(){
            const outputLiverpool = []

            myQuestionsLiverpool.forEach(
                (curentQuestionLiverpool, questionNumberLiverpool) => {
                    const answersLiverpool = []

                    for(letterLiverpool in curentQuestionLiverpool.answersLiverpool){
                        answersLiverpool.push(
                            `<label>
                            <input type="radio" name="questionLiverpool${questionNumberLiverpool}" value="${letterLiverpool}">
                            ${letterLiverpool} :
                            ${curentQuestionLiverpool.answersLiverpool[letterLiverpool]}
                            </label>`
                        )
                    }

                    outputLiverpool.push(
                        `<div class="questionLiverpool"> ${curentQuestionLiverpool.questionLiverpool} </div>
                        <div class="answersLiverpool"> ${answersLiverpool.join('')} </div>`  
                    )
                }
            )
            quizContainerLiverpool.innerHTML = outputLiverpool.join('')
        }

        function showResultsLiverpool(){
            
            const answerContainersLiverpool = quizContainerLiverpool.querySelectorAll(".answersLiverpool")
            let numberCorrectLiverpool = 0
            let highscoreLiverpool = 0
            localStorage.setItem("highscoreLiverpool", numberCorrectLiverpool)

            myQuestionsLiverpool.forEach( (curentQuestionLiverpool, questionNumberLiverpool) => {           
                const answerContainerLiverpool = answerContainersLiverpool[questionNumberLiverpool] 
                const selectorLiverpool = `input[name=questionLiverpool${questionNumberLiverpool}]:checked`
                const userAnswerLiverpool = (answerContainerLiverpool.querySelector(selectorLiverpool) || {}).value

                if (userAnswerLiverpool === curentQuestionLiverpool.correctAnswerLiverpool){
                    numberCorrectLiverpool++
                    answerContainersLiverpool[questionNumberLiverpool].style.color = 'chartreuse'
                } else {
                    answerContainersLiverpool[questionNumberLiverpool].style.color = 'maroon'
                }
            })

            if(numberCorrectLiverpool > parseInt(localStorage.getItem("highscoreLiverpool"))){
              localStorage.setItem("highscoreLiverpool", numberCorrectLiverpool)
            }
            
            highscoreLiverpool = localStorage.getItem("highscoreLiverpool")    
            liverpoolHighscore.innerHTML = `Din forrige score er: ${highscoreLiverpool}`
            resultsContainerLiverpool.innerHTML = `Herlig, du fikk ${numberCorrectLiverpool} av ${myQuestionsLiverpool.length} riktige!`

            if(numberCorrectLiverpool< 3){
              resultsContainerLiverpool.innerHTML = `Du må øve mer, du fikk ${numberCorrectLiverpool} av ${myQuestionsLiverpool.length} riktige.`
            }
        }

        const liverpoolHighscore = document.querySelector(".liverpoolHighscore")
        const quizContainerLiverpool = document.querySelector(".quizLiverpool")
        const submitLiverpool =  document.querySelector(".submitLiverpool")
        const resultsContainerLiverpool = document.querySelector(".resultLiverpool")
        
        buildQuizLiverpool()
        submitLiverpool.addEventListener("click", showResultsLiverpool)
})()

