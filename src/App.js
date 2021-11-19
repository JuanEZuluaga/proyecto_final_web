import { Route, Routes } from 'react-router';
import './App.css';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import ContextWrapper from './context/ContextWrapper'
import Login from './pages/Login'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<ContextWrapper> <Calendar /> </ContextWrapper>} />
      </Routes>
    </div>
  );
}

export default App;
