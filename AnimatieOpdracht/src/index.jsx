import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/alles/App';
import Scene1 from './components/scene1/scene1';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scene1" element={<Scene1 />} />
      </Routes>
    </Router>
  </StrictMode>
);
