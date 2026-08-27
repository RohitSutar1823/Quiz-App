import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';
import { useRef } from 'react';

const Quiz = () => {

  let [index, setIndex] = useState(0);
  const [Question, setQuestion] = useState(data[index]);
  const [Lock, setLock] = useState(false);
  const [score, setscore] = useState(0);
  const [result, setresult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];


  const checkAns = (e, ans) => { 
    if (Lock === false) {
      if (Question.ans == ans) {
        e.target.classList.add("correct");
        setscore(prev=>prev+1);
      }
      else {
        e.target.classList.add("wrong");
        option_array[Question.ans-1].current.classList.add("correct");
      }
      setLock(true);
    }

  }

  const next = () => {
    if(Lock === true){
      if (index === data.length-1) {
        setresult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setscore(0);
    setLock(false);
    setresult(false);
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {result?<></>:<>
      <h2>{index + 1}. {Question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e) => checkAns(e, 1)}>{Question.option1}</li>
        <li ref={option2} onClick={(e) => checkAns(e, 2)}>{Question.option2}</li>
        <li ref={option3} onClick={(e) => checkAns(e, 3)}>{Question.option3}</li>
        <li ref={option4} onClick={(e) => checkAns(e, 4)}>{Question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index+1} of {data.length} questions</div>
      </>}
      {result?<>
      <h2>You Scored {score} out of {data.length}</h2>
      <button onClick={reset}>Reset</button>
      </>:<></>}
    
    </div>
  )
}

export default Quiz;
