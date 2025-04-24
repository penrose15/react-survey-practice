import { useRecoilState } from 'recoil';
import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

const useCurrentQuestions = () => {
  const surveyId = useStep();
  const [survey, setSurvey] = useRecoilState(surveyState);
  const questions = survey?.questions || [];

  return questions[surveyId];
};

export default useCurrentQuestions;
