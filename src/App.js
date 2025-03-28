import { Route, Routes } from 'react-router-dom';
import Completion from './pages/Completion';
import Survey from './pages/Survey';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/survey/:surveyId" element={<Survey />}>
          <Route path=":step" element={<Survey />}></Route>
        </Route>
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </div>
  );
}

export default App;
