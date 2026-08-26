import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [Question, setQuestion] = useState(data[index]);

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index+1}. {Question.question}</h2>
      <ul>
        <li>{Question.option1}</li>
        <li>{Question.option2}</li>
        <li>{Question.option3}</li>
        <li>{Question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
