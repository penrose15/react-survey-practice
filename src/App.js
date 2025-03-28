import { useState } from 'react';
import ProgressIndicator from './component/ProgressIndicator';
import QuestionBox from './component/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문 1 입니다',
      description: '설명입니다1. ',
      type: 'text',
      options: {},
      required: false,
    },
    {
      title: '질문 2 입니다',
      description: '설명입니다2. ',
      type: 'text',
      options: {},
      required: false,
    },
    {
      title: '질문 3 입니다',
      description: '설명입니다3. ',
      type: 'text',
      options: {},
      required: false,
    },
  ];

  const step = 0;
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionLength={questions.length}
        answers={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
