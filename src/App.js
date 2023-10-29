import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import InnerPage from '../src/pages/Inner';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/inner" element={<InnerPage />} />
      </Routes>
  );
}

export default App;
