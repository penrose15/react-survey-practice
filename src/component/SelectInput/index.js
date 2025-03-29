import styled from 'styled-components';

const Item = ({ children, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
};

function SelectInput({ answers = [], setAnswers, options }) {
  const items = options.items;

  const handleChange = (hasChecked, idx) => {
    console.log(answers, idx, hasChecked);
    if (hasChecked) {
      const newAnswer = [...answers, idx];
      setAnswers(newAnswer);
      console.log(newAnswer);
    } else {
      setAnswers(answers.filter((v) => v !== idx));
    }
  };
  return (
    <SelectInputWrapper>
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    display: inline-block;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
