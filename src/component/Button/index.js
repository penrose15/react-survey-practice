import styled from 'styled-components';
import { PRIMARY, SECONDARY, TERTIARY } from '../../constant/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  width: 200px;
  padding: 16px 24px;

  border-radius: 4px;
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${colorMap[type].BUTTON.DEFAULT.BORDER}`
      : 'none'};
  font-weight: bold;

  &:hover {
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
