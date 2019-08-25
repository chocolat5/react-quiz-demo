import React, { Component } from 'react';

import questions from '../api/quizQuestions';
import Quiz from './Quiz';

import '../scss/style.scss';

class App extends Component {
  state = {
    counter : 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    result: '',
    class: '',
    answerCount: 0,
  }

  componentDidMount() {
    this.setState({
      question: questions[0].question,
      answerOptions: questions[0].answers
    })
  }

  handleAnswerSelected = (event) => {
    let correctNum = questions[this.state.counter].correct;
    let correctAnswer = questions[this.state.counter].answers[correctNum];
    let userSelect = event.target;

    setTimeout(() => {
      if( userSelect.value === correctAnswer) {
        this.setState({ class: 'correct' });
        this.state.answerCount += 1;
      } else {
        this.setState({ class: 'wrong' });
      }
    }, 500);

    if(this.state.questionId < questions.length) {
      setTimeout(() => this.setNextQuestion(), 1000);
    } else {
      setTimeout(() => this.setState({ result: true }), 1000);
    }

    this.setUserAnswer(userSelect.value);
  }

  setUserAnswer = (answer) => {
    this.setState({
      answer
    });
  }

  setNextQuestion = () => {
    const counter = this.state.counter;
    const questionId = this.state.questionId;

    this.setState({
      counter: counter + 1,
      questionId: questionId + 1,
      question: questions[counter + 1].question,
      answerOptions: questions[counter + 1].answers,
      answer: '',
      class: '',
    });
  }

  showResult = () => {
    console.log('finish');
  }

  renderQuiz = () => {
    return(
      <Quiz
      classNames={this.state.class}
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={questions.length}
      onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  renderResult = () => {
    const ResultMsg = () => {
      if(questions.length === this.state.answerCount) {
        return(
          <h2>Congratulations!</h2>
        )
      } else {
        return false;
      }
    }

    return(
      <div className="result_message">
        <ResultMsg />
        <p>Your score : <span>{this.state.answerCount}</span> / {questions.length}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="app">
      <header className="app_header">
      <h1>React Quiz</h1>
      </header>
      <main>
        {this.state.result ? this.renderResult() : this.renderQuiz() }
      </main>
      </div>
    );
  }

}


export default App;
