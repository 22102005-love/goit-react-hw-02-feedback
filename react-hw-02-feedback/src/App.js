import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions.js';
import Statistics from './components/Statistics.js';
import Section from './components/Section.js';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = ({ target }) => {
    // console.log(event);
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositivPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    return Math.round((goodFeedback * 100) / totalFeedback);
  };

  render() {
    const data = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positivPercentage = this.countPositivPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={data}
            onLeaveFeedback={this.handleLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
