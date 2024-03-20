import { useContext } from "react"
import {QuizContext} from '../context/quiz'

import "./Option.css"

const Option = ({opction,selectOption,answer}) => {
    const [quizstate, dispatch] = useContext(QuizContext)
  return (
    <div className="option" onClick={() => selectOption()}>
        <p>{opction}</p>
    </div>
  )
}

export default Option