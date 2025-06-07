function MessageInput({ newMessage, setNewMessage, onSend }) {
  return (
    <form onSubmit={onSend} className="flex space-x-2">
      <input
        type="text"
        className="flex-grow p-2 border rounded"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
}

export default MessageInput;
