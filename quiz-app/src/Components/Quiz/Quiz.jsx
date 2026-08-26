import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [Question, setQuestion] = useState(data[index]);
  const [Lock, setLock] = useState(false)

  const checkAns = (e, ans) => {
    if (Lock === false) {
      if (Question.ans == ans) {
        e.target.classList.add("correct");
      }
      else {
        e.target.classList.add("wrong");
      }
      setLock(true);
    }

  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {Question.question}</h2>
      <ul>
        <li onClick={(e) => checkAns(e, 1)}>{Question.option1}</li>
        <li onClick={(e) => checkAns(e, 2)}>{Question.option2}</li>
        <li onClick={(e) => checkAns(e, 3)}>{Question.option3}</li>
        <li onClick={(e) => checkAns(e, 4)}>{Question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
