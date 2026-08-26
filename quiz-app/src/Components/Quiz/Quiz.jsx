import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';
import { useRef } from 'react';

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [Question, setQuestion] = useState(data[index]);
  const [Lock, setLock] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];


  const checkAns = (e, ans) => {
    if (Lock === false) {
      if (Question.ans == ans) {
        e.target.classList.add("correct");
      }
      else {
        e.target.classList.add("wrong");
        option_array[Question.ans-1].current.classList.add("correct");
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
        <li ref={option1} onClick={(e) => checkAns(e, 1)}>{Question.option1}</li>
        <li ref={option2} onClick={(e) => checkAns(e, 2)}>{Question.option2}</li>
        <li ref={option3} onClick={(e) => checkAns(e, 3)}>{Question.option3}</li>
        <li ref={option4} onClick={(e) => checkAns(e, 4)}>{Question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
