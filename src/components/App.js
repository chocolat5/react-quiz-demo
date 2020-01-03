import React, { useState, useEffect } from 'react';

import questions from '../api/quizQuestions';
import Quiz from './Quiz';

import '../scss/style.scss';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [flag, setFlag] = useState('');
  const [answerCount, setAnswerCount] = useState(0);

  useEffect(() => {
    setQuestion(questions[0].question);
    setAnswerOptions(questions[0].answers);
  }, []);

  const handleAnswerSelected = (event) => {
    let correctNum = questions[counter].correct;
    let correctAnswer = questions[counter].answers[correctNum];
    let userSelect = event.target;

    setTimeout(() => {
      if (userSelect.value === correctAnswer) {
        setFlag('correct');
        setAnswerCount(answerCount + 1);
      } else {
        setFlag('wrong');
      }
    }, 500);

    if (questionId < questions.length) {
      setTimeout(() => updateQuestion(), 1000);
    } else {
      setTimeout(() => setResult(true), 1000);
    }

    getUserAnswer(userSelect.value);
  };

  const getUserAnswer = userAnswer => {
    setAnswer(userAnswer);
  };

  const updateQuestion = () => {
    setAnswer('');
    setCounter(counter + 1);
    setQuestionId(questionId + 1);
    setQuestion(questions[counter + 1].question);
    setAnswerOptions(questions[counter + 1].answers);
    setFlag('');
  };

  const showResult = () => {
    console.log('finish');
  };

  const renderQuiz = () => {
    return (
      <Quiz
        classNames={flag}
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={questions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    )
  };

  const renderResult = () => {
    const ResultMsg = () => {
      if (questions.length === answerCount) {
        return (
          <h2>Congratulations!</h2>
        )
      } else {
        return false;
      }
    }

    return (
      <div className="result_message">
        <ResultMsg />
        <p>Your score : <span>{answerCount}</span> / {questions.length}</p>
      </div>
    )
  };

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Quiz</h1>
      </header>
      <main>
        {result ? renderResult() : renderQuiz()}
      </main>
    </div>
  );
};

export default App;