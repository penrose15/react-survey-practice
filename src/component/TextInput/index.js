function TextInput({ answers, setAnswers }) {
  return (
    <input
      type="text"
      value={answers}
      onChange={(e) => setAnswers(e.target.value)}
    ></input>
  );
}

export default TextInput;
