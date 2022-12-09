import React, {useEffect, useState} from 'react';
import './App.css';
import Telegram from "./components/Telegram/Telegram";
import {v1} from "uuid";

export type MessageType = {
    id: string
    text: string
    likesCount: number
}

const App: React.FC = () => {

    const [message, setList] = useState<MessageType[]>(() => {
        const getMessage = localStorage.getItem('message');
        return getMessage ? JSON.parse(getMessage) : [];
    });

    useEffect(() => {
        localStorage.setItem('message', JSON.stringify(message));
    }, [message])

    const addMessage = (text: string) => {
        const newMessage: MessageType = {id: v1(), text, likesCount: 0};
        setList([newMessage, ...message]);
    }

    const deleteLastMessage = () => {
        setList([...message.slice(0, message.length - 1)])
    }

    const changeAmountLikes = (messageID: string, likes: number) => {
        setList(message.map(mes => mes.id === messageID ? {...mes, likesCount: likes} : mes))
    }

    return (
        <div className="App">
            <h1>Telegram</h1>
            <Telegram
                messages={message}
                addMessage={addMessage}
                deleteMessage={deleteLastMessage}
                changeAmountLikes={changeAmountLikes}
            />
        </div>
    );
}

export default App;
