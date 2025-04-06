import styled from 'styled-components';

function TextInput({ answer, setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      placeholder={options.placeholder}
      onChange={(e) => setAnswer(e.target.value)}
    ></Input>
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box; / 박스 사이즈 조절 방법
  font-size: 18px;
  line-height: 21px; // 줄 간격
  padding: 12px 18px;
`;

export default TextInput;
