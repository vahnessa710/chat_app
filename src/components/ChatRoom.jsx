import { useState, useEffect } from 'react';
import {
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import NavBar from './NavBar';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // 🔄 Real-time listener
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Clean up
  }, []);

  // ➕ Send a new message
  const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const user = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      sender: user?.displayName || 'Anonymous',
      uid: user?.uid,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp(),
    });

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
