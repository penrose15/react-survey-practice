import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import Completion from './pages/Completion';
import Survey from './pages/Survey';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Box>
          <Routes>
            <Route path="/survey/:surveyId" element={<Survey />}>
              <Route path=":step" element={<Survey />}></Route>
            </Route>
            <Route path="/completion" element={<Completion />} />
          </Routes>
        </Box>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  display: flex;
  min-height: 500px;
  box-sizing: border-box;
  padding: 60px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.07);
`;

export default App;
