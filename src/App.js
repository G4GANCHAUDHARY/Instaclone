import {BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Postview from './components/Postview/Postview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path='/Postview' element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;