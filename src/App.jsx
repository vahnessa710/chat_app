import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import ChatRoom from './components/ChatRoom.jsx';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
