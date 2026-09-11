import RobotProfileImg from '../assets/robot.png'
import UserProfileImg from '../assets/profile-1.jpg'
import './ChatMessage.css';
import dayjs from 'dayjs';


export function ChatMessage({ message, sender, time }) {
    return (
        <div className=
            {sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
            }
        >
            {sender === "robot" && (
                < img src={RobotProfileImg} className="chat-message-profile" />
            )
            }
            <div className="chat-message-text">
                {message}
                {time && (
                    <div className='chat-message-time'>
                        {dayjs(time).format('h:mma')}
                    </div>
                )}
            </div>
            {sender === "user" && (
                < img src={UserProfileImg} className="chat-message-profile" />
            )
            }
        </div>
    );
}