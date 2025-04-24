import styled from 'styled-components';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import ActionsButton from '../ActionButtons';
import Body from '../Body';
import Description from '../Description';
import Title from '../Title';
import './index.css';

function QuestionBox() {
  const questions = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

  console.log(questions);

  if (!questions) {
    return;
  }

  return (
    <QuestionBoxWrapper>
      <Title>{questions.title}</Title>
      <Description>{questions.description}</Description>
      <Body
        type={questions.type}
        answer={answer}
        setAnswer={setAnswer}
        options={questions.options}
      />
      <ActionsButton />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export default QuestionBox;

// 리엑트는 사드세요...
