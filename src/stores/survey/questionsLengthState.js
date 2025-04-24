import { selector } from 'recoil';
import surveyState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const survey = get(surveyState);
    const questions = survey.questions;
    return questions.length;
  },
});

export default questionsLengthState;
