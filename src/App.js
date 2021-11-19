import { Route, Routes } from 'react-router';
import './App.css';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
