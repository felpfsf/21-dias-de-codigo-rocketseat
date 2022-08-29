import { questions } from './data.js'

console.log(questions)

const scoreboard = document.querySelector('.scoreboard')
const quizDiv = document.querySelector('.quiz')
const question = document.querySelector('#question')
const answersDiv = document.querySelector('.answers')

const letters = ['a', 'b', 'c', 'd']

let points = 0
let currentQuestion = 0

function initQuiz() {
  createQuestion(0)
}

function createQuestion(i) {
  const prevQuestion = answersDiv.querySelectorAll('button')
  prevQuestion.forEach(function (btn) {
    btn.remove()
  })

  const questionNum = question.querySelector('#question-id')
  const questionText = question.querySelector('#question-txt')

  questionNum.textContent = i + 1
  questionText.textContent = questions[i].question

  questions[i].answers.forEach(function (answer, i) {
    const answTemplate = document
      .querySelector('.answers-template')
      .cloneNode(true)
    const answLetter = answTemplate.querySelector('#answ-letter')
    const answText = answTemplate.querySelector('#answ-text')

    answLetter.textContent = letters[i]
    answText.textContent = answer['answer']

    answTemplate.setAttribute('correct-answ', answer['correct'])

    answTemplate.classList.remove('hidden')
    answTemplate.classList.remove('answers-template')

    answersDiv.appendChild(answTemplate)

    answTemplate.addEventListener('click', function () {
      checkAnswer(this)
    })
  })
  currentQuestion++
}

function checkAnswer(btn) {
  const buttons = answersDiv.querySelectorAll('button')

  buttons.forEach(function (button) {
    if (button.getAttribute('correct-answ') === 'true') {
      button.classList.add('correct-answ')
      if (btn === button) {
        points++
        console.log(points);
      }
    } else {
      button.classList.add('wrong-answ')
    }
  })
  nextQuestion()
}

function nextQuestion() {
  setTimeout(() => {
    if (currentQuestion >= questions.length) {
      endGame()
      return
    }
    createQuestion(currentQuestion)
  }, 1250)
}

function endGame() {
  showScore()

  const score = ((points / questions.length) * 100).toFixed(0)

  const displayScore = scoreboard.querySelector('.scoreboard--display span')

  displayScore.textContent = score.toString()

  const correctAnsw = document.querySelector('#scoreboard--correct-answ')
  correctAnsw.textContent = points

  const totalQuestions = document.querySelector('#scoreboard--total-questions')
  totalQuestions.textContent = questions.length

  // To do message
  const message = document.querySelector('.scoreboard--message')
  if(score < 20) {
    message.textContent = 'Mandou mal :('
  } else if(score > 20 && score < 60) {
    message.textContent = 'Precisa melhorar'
  } else if (score > 60 && score < 80) {
    message.textContent = 'Quase lá, foi bem'
  } else if (score > 80 && score < 99) {
    message.textContent = 'Mestre!!!!'
  } else {
    message.textContent = 'Parabéns Marmiteiro'
  }
}

function showScore() {
  scoreboard.classList.toggle('hidden')
  quizDiv.classList.toggle('hidden')
}

const restartQuiz = document.querySelector('#restart')
restartQuiz.addEventListener('click', () => {
  currentQuestion = 0
  points = 0
  showScore()
  initQuiz()
})

initQuiz()
