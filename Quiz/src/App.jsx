// react
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

// estilo
import './App.css'

// componetes
import Welcome from './components/Welcome'
import Question from './components/Question'





function App() {
  const [quizState,dispatch] = useContext(QuizContext)
  
  useEffect(()=>{
    dispatch({type:'REORDER_QUESTIONS'})
  }, [])

  return (
    <div className='app'>
     <h1>Quiz de Programação</h1>
     {quizState.gameStage === 'Start' && <Welcome/>}
     {quizState.gameStage === 'Playing' && <Question/>}
    </div>
  )
}

export default App
