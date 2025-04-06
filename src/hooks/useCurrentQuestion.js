import { useRecoilValue } from 'recoil';
import questionsState from '../stores/questions/atom';
import useStep from './useStep';

const useCurrentQuestions = () => {
  const step = useStep();
  const questions = useRecoilValue(questionsState);

  return questions[step];
};

export default useCurrentQuestions;
