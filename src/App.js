import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/course';
import Newsdetail from './components/NewsDetails/NewsDetails';
import News from './components/New/News';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/schoolwebapp" exact element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="courses" element={<Courses />} />

          <Route path="News" element={<News />} />

          <Route path="Newsdetail" element={<Newsdetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
