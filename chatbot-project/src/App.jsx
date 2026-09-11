import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';
import './App.css'


function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []
  );
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'how are you?': 'fine, what about you?',
      'good': 'wish you the best'
    });

  }, []);
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}


export default App
