import styled from 'styled-components';
import './index.css';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  margin: 0;
  color: #121111;
  font-family: 'Roboto-CondensedBold', sans-serif;
  font-size: 24px;
  font-weight: bold;

  span {
    margin-right: 12px;
  }
`;

export default Title;
