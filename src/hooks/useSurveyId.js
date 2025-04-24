import { useParams } from 'react-router-dom';

const useSurveyId = () => {
  const params = useParams();
  console.log(params);
  return parseInt(params.surveyId);
};

export default useSurveyId;
