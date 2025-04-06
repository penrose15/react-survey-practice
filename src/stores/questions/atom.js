import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState', // unique ID (with respect to other atoms/selectors)
  default: [
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
  ],
});

export default questionsState;
