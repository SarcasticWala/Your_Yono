import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-games" element={<div></div>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;