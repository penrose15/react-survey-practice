import mainApi from './apis/mainApi';

const postAnswers = (surveyId, data) => {
  mainApi.post('/answers', {
    surveyId: surveyId,
    data: data,
  });
};

export default postAnswers;
