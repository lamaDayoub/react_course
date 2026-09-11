import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoaddingSpinnerImg from '../assets/loading-spinner.gif'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('',);
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);

    }

    async function sendMessage() {
        if (isLoading || inputText === '') {
            return;
        }
        setIsLoading(true);
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoaddingSpinnerImg} className="loading-spinner" />,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);
        setInputText('');
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);
        setIsLoading(false);

    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {

            sendMessage();
        } else if (event.key === 'Escape') {

            setInputText('');
        }
    }
    return (
        <div className="chat-input-container">
            <input
                placeholder="send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={handleKeyDown}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>

    );
}