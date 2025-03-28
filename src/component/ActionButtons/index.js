import { useNavigate } from 'react-router-dom';
import './index.css';

function ActionsButton({ step, questionsLength }) {
  const isLast = questionsLength - 1 === step;

  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <button
          onClick={(e) => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={(e) => {
            navigate('/completion');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={(e) => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionsButton;
