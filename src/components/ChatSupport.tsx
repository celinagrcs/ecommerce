import { useState } from "react";
import { sendMessageToOpenAI } from "../service/openai";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola 👋 ¿En qué puedo ayudarte?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;
  
    const newMessage = { from: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
  
    const botResponse = await sendMessageToOpenAI(userInput);
    setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-[#ff8e3c] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-[#d37533] transition-colors"
        onClick={toggleChat}
        aria-label="Abrir chat de soporte"
      >
        💬
      </button>

      {isOpen && (
        <section
          role="dialog"
          aria-label="Chat de soporte"
          className="w-80 bg-white shadow-lg rounded-lg p-4 flex flex-col fixed bottom-20 right-4 animate-fade-in"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-gray-700">Soporte</h2>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-gray-700"
              aria-label="Cerrar chat"
            >
              X
            </button>
          </div>

          <div className="h-64 overflow-y-auto mb-2 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md text-sm max-w-[80%] break-words ${
                  msg.from === "user"
                    ? "bg-blue-100 text-right self-end"
                    : "bg-gray-100 text-left self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex mt-auto">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Escribe tu mensaje..."
              className="flex-1 border border-gray-300 rounded-l-md px-2 py-1 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-[#ff8e3c] text-white px-4 py-1 rounded-r-md hover:bg-[#d37533] transition-colors"
            >
              ➤
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ChatSupport;
