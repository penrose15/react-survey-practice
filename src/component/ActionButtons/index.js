import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import './index.css';

function ActionsButton({ step, questionsLength }) {
  const isLast = questionsLength - 1 === step;

  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={(e) => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={(e) => {
            navigate('/completion');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={(e) => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
`;

export default ActionsButton;
