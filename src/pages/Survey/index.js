import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressIndicator from '../../component/ProgressIndicator';
import QuestionBox from '../../component/QuestionBox';

function Survey() {
  const params = useParams();

  const questions = [
    {
      title: '질문 1 입니다',
      description: '설명입니다1. ',
      type: 'text',
      options: {
        placeholder: 'placeholder 입니다.',
      },
      required: false,
    },
    {
      title: '질문 2 입니다',
      description: '설명입니다2. ',
      type: 'textArea',
      options: {
        placeholder: 'placeholder입니다. ',
      },
      required: false,
    },
    {
      title: '질문 3 입니다',
      description: '설명입니다3. ',
      type: 'select',
      options: {
        items: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
      },
      required: false,
    },
  ];

  const surveyId = params.surveyId;
  const step = parseInt(params.step);
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionsLength={questions.length}
        answers={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;

            return newAnswers;
          });
        }}
      />
    </>
  );
}

export default Survey;
