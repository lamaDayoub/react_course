import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function useAutoScroll(dependencies) {
    const containerRef = useRef(null);
    useEffect(() => {
        const containerElem = containerRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }

    }, dependencies);
    return containerRef;
}


function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>

            {
                chatMessages.length === 0
                    ? <p className="welcome-message">
                        Welcome to the Chatbot project!send a message using the textbox below.
                    </p>
                    : chatMessages.map((chatMessage) => {
                        return (
                            <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                                time={chatMessage.time}
                                key={chatMessage.id}
                            />
                        );
                    })
            }

        </div>
    );
}
export default ChatMessages;