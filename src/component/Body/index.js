import TextInput from '../TextInput';
import './index.css';

function Body({ children, type, answers, setAnswers }) {
  let InputComponent = null;
  if (type === 'select') {
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textArea') {
  }

  return (
    <>
      <InputComponent
        answers={answers}
        setAnswers={setAnswers}
      ></InputComponent>
    </>
  );
}

export default Body;
