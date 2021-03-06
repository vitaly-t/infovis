import React from 'react';
// import d3 from 'd3';

import {browserHistory} from 'react-router';
import { Button, ButtonGroup, ProgressBar, Well } from 'react-bootstrap';
import Table from './Table';
import ClassDrag from './iv/ClassDrag';
import ClassView from './iv/ClassView';
import StudentHypothetical from './iv/StudentHypothetical';


import api from '../api.js';
import '../App.css';

const Question = React.createClass({
  getInitialState() {
    return {
      question: 1,
      userID: null,
      type1Count: 0,
      type2Count: 0,
      type3Count: 0,
      type: this.getRandomType(),
    }
  },
  nextQuestion() {
    api.logActivity(this.state.userID, 2);
    const next = parseInt(this.state.question, 10)+1

    let type = this.getRandomType();
    let type1Count = this.state.type1Count;
    let type2Count = this.state.type2Count;
    let type3Count = this.state.type3Count;

    if (type === 1) {
      type1Count++;
    } else if (type === 2){
      type2Count++;
    } else {
      type3Count++;
    }

    if (next > 12) {
      return;
    }

    this.setState( 
    { 
      question: next, 
      type: type,
      type1Count: type1Count,
      type2Count: type2Count,
      type3Count: type3Count, 
    });

    browserHistory.push('/test/' + this.state.userID + '/' + next);
  },
  getRandomType() {
    const type = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(type);

    let type1Count = this.state ? this.state.type1Count : 0;
    let type2Count = this.state ? this.state.type2Count : 0;
    let type3Count = this.state ? this.state.type3Count : 0;

    if (type1Count > 3 && type === 1) {
      return this.getRandomType();
    } else if (type2Count > 3 && type === 2) {
      return this.getRandomType();
    } else if (type3Count > 3 && type === 3) {
      return this.getRandomType();
    } else {
      return type;
    } 
  },

  componentWillMount() {
    this.setState( { question: this.props.params.question, userID: this.props.params.userID });
    console.log(this.state);
  },
  render() {
    let iv = (
      <div>Something went wrong...</div>
    );

    if (this.state.type === 1) {
      iv = (
        <StudentHypothetical />
      );
    } else if (this.state.type === 2) {
      iv = (
        <ClassDrag />
      );
    } else if (this.state.type === 3) {
      iv = (
        <ClassView />
      );
    }

    return (
      <div className="App container">
        <h1>Question {this.state.question} of 12</h1>
        <ProgressBar bsStyle="success" now={(this.state.question-1)/12*100} />
        <Well>What is the best way for Elena to get an 95% or above?</Well>
        { iv }
       <div className="container">
         <Button bsStyle="primary" onClick={this.nextQuestion}>Next</Button>
       </div>
      </div>
    );
  }
});

module.exports = Question;