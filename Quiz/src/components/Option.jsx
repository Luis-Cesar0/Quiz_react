import { useContext } from "react"
import {QuizContext} from '../context/quiz'

import "./Option.css"

const Option = ({option,selectOption,answer,hide}) => {
    const [quizstate, dispatch] = useContext(QuizContext)
  return (
    <div className= {`option 
    ${quizstate.answerSelected && option === answer ?'correct' :''}
    ${quizstate.answerSelected && option !== answer ?'wrong' :''}
    ${hide ? 'hide' : ''}
    `} onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option