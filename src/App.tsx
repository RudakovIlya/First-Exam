import React, {useState} from 'react';
import './App.css';
import Telegram from "./components/Telegram/Telegram";
import {v1} from "uuid";


export type MessageType = {
    id: string
    text: string
    likesCount: number
}

function App() {

    const [message, setList] = useState<Array<MessageType>>([]);

    const addMessage = (text: string) => {
        const newMessage: MessageType = {id: v1(), text, likesCount: 0};
        setList([newMessage, ...message]);
    }

    const deleteLastMessage = () => {
        setList([...message.slice(0, message.length - 1)])
    }

    return (
        <div className="App">
            <Telegram
                messages={message}
                addMessage={addMessage}
                deleteMessage={deleteLastMessage}
            />
        </div>
    );
}

export default App;
