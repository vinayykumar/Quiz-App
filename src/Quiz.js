import React from "react";
import { useState } from "react";
import './index.css'

const Quiz = () => {
  const Questionbank = [
    {
      Question : "What is the capital of India?",
      Answers: [
        { Answer: "Delhi", isCorrect: true },
        { Answer: "Pune", isCorrect: false },
        { Answer: "Ranchi", isCorrect: false },
        { Answer: "Patna", isCorrect: false },
      ],
    },
    {
      Question: "Who is the PM of India?",
      Answers: [
        { Answer: "Amit Shah", isCorrect: false },
        { Answer: "Modi", isCorrect: true },
        { Answer: "Raga", isCorrect: false },
        { Answer: "Kejri", isCorrect: false },
      ],
    },
    {
      Question: "2 +3 = ?",
      Answers: [
        { Answer: "5", isCorrect: true },
        { Answer: "7", isCorrect: false },
        { Answer: "4", isCorrect: false },
        { Answer: "3", isCorrect: false },
      ],
    },
    {
      Question: "What comes after january?",
      Answers: [
        { Answer: "feb", isCorrect: true },
        { Answer: "march", isCorrect: false },
        { Answer: "june", isCorrect: false },
        { Answer: "sept", isCorrect: false },
      ],
    },
    {
      Question: "Which company pankaj is working currently?",
      Answers: [
        { Answer: "Accenture", isCorrect: false },
        { Answer: "Oracle", isCorrect: false },
        { Answer: "L&T", isCorrect: true },
        { Answer: "IBM", isCorrect: false },
      ],
    },
  ];

  console.log(Questionbank);

  const [currentques, setCurrentques] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setShowscore] = useState(false);
  const handleAnswerResponse = (isCorrect) => {
    if(isCorrect){
        setScore(score+1)
    }
    const nextQuestion = currentques + 1;
    if(nextQuestion<Questionbank.length){
        setCurrentques (nextQuestion);
    }
    else{
        setShowscore(true);
    }
  }

  return <div>
    {showscore ? 
        <div>
            Yay!, you have scored {score} out of {Questionbank.length}
            <div>
                <button onClick={() => {
                    setScore(0);
                    setCurrentques(0);
                    setShowscore(false);
                }}>Play Again</button>
            </div>
        </div>
     : 
        <div className="question-----">
            <div className="question-num">
                <span> Question {currentques + 1} / {Questionbank.length}</span>
            </div>

            <div className="question-text">
                {Questionbank[currentques].Question}
            </div>

            <div className="answer-section">
                {Questionbank[currentques].Answers.map((answer)=>{
                        return <button onClick={() => {
                            handleAnswerResponse(answer.isCorrect)
                        }}>{answer.Answer}</button>
                })}
            </div>
            
        </div>
    }
  </div>;
};

export default Quiz;
