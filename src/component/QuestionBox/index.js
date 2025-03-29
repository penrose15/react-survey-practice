import ActionsButton from '../ActionButtons';
import Body from '../Body';
import Description from '../Description';
import Title from '../Title';
import './index.css';

function QuestionBox({ question, step, questionsLength, answers, setAnswers }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answers={answers}
        setAnswers={setAnswers}
        options={question.options}
      />
      <ActionsButton step={step} questionsLength={questionsLength} />
    </div>
  );
}

export default QuestionBox;

// 리엑트는 사드세요...
