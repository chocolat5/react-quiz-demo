import React from 'react';

const AnswerOption = props => (
  <li className="choice_item">
    <input
      type="radio"
      className={props.classNames}
      name={`question${props.questionId}`}
      id={props.answerContent}
      value={props.answerContent}
      checked={props.answer === props.answerContent}
      onChange={props.onAnswerSelected}
      disabled={props.answer}
      />
    <label htmlFor={props.answerContent}>
      {props.answerContent}
    </label>
  </li>
);

export default AnswerOption;
