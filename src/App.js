import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

function FrequentlyAskedQuestion({ question, answer }) {
  return (
    <details className='faq'>
      <summary>{question}</summary>
      <div className='answer'>{answer}</div>
    </details>
  );
}

const App = () => (
  <FrequentlyAskedQuestion
    question='What does “CSS” stand for?'
    answer='Cool Styling Strategy'
  />
);

export default App;
