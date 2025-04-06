import React from 'react';
import styled from 'styled-components';
import ProgressIndicator from '../../component/ProgressIndicator';
import QuestionBox from '../../component/QuestionBox';

function Survey() {
  return (
    <SurveyWrapper>
      <ProgressIndicator />
      <QuestionBox />
    </SurveyWrapper>
  );
}

const SurveyWrapper = styled.div`
  width: 100%;
  min-height: 500px;
`;

export default Survey;
