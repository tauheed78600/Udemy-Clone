import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import CourseContent from './components/CoursePage/CourseContent';
import Homepage from './components/Homepage/Homepage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coursecontent" element={<CourseContent />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
