import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';
import './index.css';

function Body({ children, type, answers, setAnswers, options }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textArea') {
    InputComponent = TextAreaInput;
  }

  return (
    <>
      <InputComponent
        answers={answers}
        setAnswers={setAnswers}
        options={options}
      ></InputComponent>
    </>
  );
}

export default Body;
