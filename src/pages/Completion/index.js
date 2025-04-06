import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import testWithComma from '../../stores/test/testWithComma';

function Completion() {
  const test = useRecoilValue(testWithComma);
  return <CompletionWrapper>{test}</CompletionWrapper>;
}

const CompletionWrapper = styled.div`
  background: aqua;
  padding: 4em;
`;

export default Completion;
