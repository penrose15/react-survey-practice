import { useRecoilState } from 'recoil';
import answersState from '../stores/answers/atom';
import useStep from './useStep';

const useCurrentAnswer = () => {
  const step = useStep();
  const [answers, setAnswers] = useRecoilState(answersState);
  const answer = answers[step];
  const setAnswer = (value) => {
    setAnswers((prevAnswers) => {
      const newAns = [...prevAnswers];
      newAns[step] = value;
      return newAns;
    });
  };

  return [answer, setAnswer];
};

export default useCurrentAnswer;
