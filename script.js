const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => 
        Math.random() - .5
    )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct == true){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
















const questions = [
    {
      question: 'What english player won 2 runner up awards at the ballon dor?',
      answers: [
        {text: 'David Beckham', correct: true },
        {text: 'Michael Owen', correct: false },
        {text: 'Wayne Rooney', correct: false },
        { text: 'Paul Scholes', correct: true}
      ]
    },
    {
      question: 'Who were the first team in britain to win the European cup',
      answers: [
        { text: 'Celtic', correct: true },
        { text: 'Rangers', correct: false },
        { text: 'Manchester United', correct: false},
        { text: 'Liverpool', correct: false }
      ]
    },
    {
      question: 'What odds were leicester to win the premier league in 2015/2016',
      answers: [
        { text: '5/1', correct: false },
        { text: '50/1', correct: false },
        { text: '500/1', correct: false },
        { text: '5000/1', correct: true }
      ]
    },
    {
      question: 'Who won man of the match against England for Scotland at this summers euros',
      answers: [
        {text: 'Billy Gilmour', correct: true },
        {text: 'Callum Mcgregor', correct: false },
        {text: 'Lyndon Dykes', correct: false},
        {text: 'Kieran Tierney', correct: false}
      ]
    },
    {
        question: 'Who is currentley the third all time top scorer for the Republic of Ireland',
        answers: [
          {text: 'Niall Quinn', correct: false},
          {text: 'Kevin Doyle', correct: false },
          {text: 'Shane Long', correct: true},
          {text: 'Cillian Sheridan', correct: false}
        ]
      },{
        question: 'What British player holds the most international caps?',
        answers: [
          {text: 'Steven Davis', correct: true },
          {text: 'Steven Gerrard', correct: false },
          {text: 'Gary Speed', correct: false},
          {text: 'Ally McCoist', correct: false}
        ]
      },{
        question: 'Which of the following DOES NOT HAVE over 500 premier league premier league appearances?',
        answers: [
          {text: 'David Beckham', correct: true},
          {text: 'Frank Lampard', correct: false },
          {text: 'John Terry', correct: false},
          {text: 'James Milner', correct: false}
        ]
      },{
        question: 'What country are ranked the lowest in the world according to FIFA"s" rankings?',
        answers: [
          {text: 'Andorra', correct: true },
          {text: 'San Marino', correct: false },
          {text: 'Taiwan', correct: false},
          {text: 'Mongolia', correct: false}
        ]
      },{
        question: 'Which of the following players have played at 4 world cups for the U.S.A?',
        answers: [
          {text: 'Clint Dempsey', correct: false},
          {text: 'Landon Donovan', correct: false },
          {text: 'Demarcus Beasley', correct: true},
          {text: 'Tim Howard', correct: false}
        ]
      },
      {
        question: 'Who were the last brothers to face eachother on opposing teams at a world cup',
        answers: [
          {text: 'the Boatengs brothers', correct: true },
          {text: 'the Nevilles brothers', correct: false },
          {text: 'the Rodriguez brothers', correct: false },
          { text: 'Paul Scholes and his long lost brother steve', correct: false}
        ]
      }
  ]