import React from 'react';

const QuestionCount = props => (
  <div className="count">
    <p>Question : <span>{props.counter}</span> of <span>{props.total}</span></p>
  </div>
);

export default QuestionCount;
