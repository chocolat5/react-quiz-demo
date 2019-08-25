import React from 'react';
import PropTypes from 'prop-types';

const QuestionCount = (props) => {
  return(
    <div className="count">
      <p>Question : <span>{props.counter}</span> of <span>{props.total}</span></p>
    </div>
  );
}

export default QuestionCount;
