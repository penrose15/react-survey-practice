import styled from 'styled-components';
import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';
import './index.css';

function Body({ children, type, answer, setAnswer, options }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }

  return (
    <>
      <BodyWrapper>
        <InputComponent
          answer={answer}
          setAnswer={setAnswer}
          options={options}
        ></InputComponent>
      </BodyWrapper>
    </>
  );
}

const BodyWrapper = styled.div`
  margin: 0px 36px;
  flex: 1;
`;

export default Body;
