import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      placeholder={options.placeholder}
      onChange={(e) => setAnswer(e.target.value)}
    ></TextArea>
  );
}

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box; / 박스 사이즈 조절 방법
  font-size: 18px;
  line-height: 21px; // 줄 간격
  padding: 12px 18px;
  height: 196px;
  resize: none;
`;

export default TextAreaInput;
