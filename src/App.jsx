import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import './App.css';
import Header from './components/Header';
import CourseContent from './components/CourseContent'; // Assuming you will create a CourseContent component
import Homepage from './components/Homepage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header /> */}
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Home route */}
        <Route path="/coursecontent" element={<CourseContent />} /> {/* CourseContent route */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
