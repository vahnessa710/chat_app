import { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import NavBar from './NavBar';

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
    <NavBar />
    <div className="flex flex-col h-screen max-w-xxl mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Chat Room</h2>
      <MessageList messages={messages} />
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onSend={handleSend}
      />
    </div>
    </>
  );
}

export default ChatRoom;
