
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Title } from './Components/Title/Title';
import { Navigation } from './Features/Navigation/Navigation';
import { Results } from './Features/Results/Results';

function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<Results />} path='/search' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
