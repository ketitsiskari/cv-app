import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import InnerPage from './pages/Inner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/inner" element={<InnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
