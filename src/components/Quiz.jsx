import React from 'react';

import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

import '../scss/style.scss';

const Question = props => {
  return(
    <h2 className="question">{props.content}</h2>
  );
}

const AnswerOptions = props => {
  return props.answerOptions.map((row, index) => {
    return(
      <AnswerOption
        key={index}
        classNames={props.classNames}
        answerContent={row}
        questionId={props.questionId}
        answer={props.answer}
        onAnswerSelected={props.onAnswerSelected}
        />
    );
  });
}

const Quiz = (props) => {
  return (
    <div className="quiz_container">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal} />
      <Question content={props.question} />
      <ul className="choice_list">
        <AnswerOptions
          answer={props.answer}
          classNames={props.classNames}
          questionId={props.questionId}
          answerOptions={props.answerOptions}
          onAnswerSelected={props.onAnswerSelected}
          />
      </ul>
    </div>
  );
}

export default Quiz;
