function Message({ sender, text, photoURL }) {
  const isUser = sender === 'You';

  return (
    <div className={`flex ${isUser ? 'justify-start' : 'justify-end'}`}>
      <div className="flex items-center space-x-2 p-2 rounded max-w-xs bg-blue-500 text-white">
        {photoURL && <img src={photoURL} alt={sender} className="w-6 h-6 rounded-full" />}
        <span><strong>{sender}:</strong> {text}</span>
      </div>
    </div>
  );
}

export default Message;
