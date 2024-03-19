import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'
import "../components/welcome.css"

const Welcome = () => {
    const [quizState,dispatch] = useContext(QuizContext)
    


  return (
    <div>
        <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={()=> dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt="inicio do quiz" />
        
    </div>
    </div>
  )
}

export default Welcome