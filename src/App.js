import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Blog, SinglePost } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact caseSensitive={false} element={ <Blog />} />
          <Route path="/technews/:id" element={<SinglePost/> } />
        </Routes>         
      </Router>
    </div>
  );
}

export default App;
