import styled from 'styled-components';
import ActionsButton from '../ActionButtons';
import Body from '../Body';
import Description from '../Description';
import Title from '../Title';
import './index.css';

function QuestionBox({ question, step, questionsLength, answers, setAnswers }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answers={answers}
        setAnswers={setAnswers}
        options={question.options}
      />
      <ActionsButton step={step} questionsLength={questionsLength} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QuestionBox;

// 리엑트는 사드세요...
