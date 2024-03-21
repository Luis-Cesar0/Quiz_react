// react
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

// estilo
import './App.css'

// componetes
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'





function App() {
  const [quizState,dispatch] = useContext(QuizContext)
  

  return (
    <div className='app'>
     <h1>Quiz de Programação</h1>
     {quizState.gameStage === 'Start' && <Welcome/>}
     {quizState.gameStage === 'Category' && <PickCategory/>}
     {quizState.gameStage === 'Paying' && <Question/>}
     {quizState.gameStage === 'End' && <GameOver/>}
    </div>
  )
}

export default App
