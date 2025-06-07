import Message from './Message';

function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto mb-4 space-y-2 flex flex-col">
      {messages.map(msg => (
        <Message key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;
