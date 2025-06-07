function Message({ sender, text }) {
  const isUser = sender === 'You';

  return (
    <div className={`flex ${isUser ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`p-2 rounded max-w-xs ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-black'
        }`}
      >
        <strong>{sender}:</strong> {text}
      </div>
    </div>
  );
}

export default Message;
