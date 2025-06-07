// src/components/ChatRoom.jsx
import { useState } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello there!', sender: 'You' },
    { id: 2, text: 'Hi! Welcome to the chat.', sender: 'Bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      sender: 'You',
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <>
    <div className="text-2xl text-red-500">Hello Tailwind</div>
    <div className="chat-room">
      <h2>Chat Room</h2>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
    </>
  );
}

export default ChatRoom;
