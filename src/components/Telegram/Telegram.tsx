import React, {ChangeEvent, useEffect, useState} from 'react';
import {MessageType} from "../../App";
import SuperButton from "../SuperButton/SuperButton";
import styles from './Telegram.module.css'
import TelegramTitle from "./TelegramTitle/TelegramTitle";
import TelegramChat from "./TelegramChat/TelegramChat";
import TelegramMessageList from "./TelegramMessageList/TelegramMessageList";

type TelegramPropsType = {
    addMessage: (text: string) => void
    messages: MessageType[]
    removeLastMessage: () => void
    changeAmountLikes: (messageID: string, likes: number) => void
    changeMessageText: (messageID: string, text: string) => void
}

const startValue = 5;
const minValue = 0;
const Telegram: React.FC<TelegramPropsType> = ({
                                                   addMessage,
                                                   messages,
                                                   removeLastMessage,
                                                   changeAmountLikes,
                                                   changeMessageText
                                               }) => {
    const [count, setCount] = useState<number>(() => {
        const newCount = localStorage.getItem('currentCount');
        return newCount && messages.length === startValue ? minValue : startValue - messages.length;
    });
    const [text, setText] = useState<string>('');
    const [error, setError] = useState('')

    useEffect(() => {
        localStorage.setItem('currentCount', JSON.stringify(count));
    }, [count])

    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
        error && setError('')
    }

    const addMessageCallBack = () => {
        const trimmedMessage = text.trim();
        if (!trimmedMessage) {
            setError('Message is required!')
        } else {
            setCount(startValue - (messages.length + 1));
            addMessage(text.trim());
            setText('')
        }
    }

    const clearInput = () => {
        setText('');
    }

    const deleteMessageCallBack = () => {
        setCount(startValue - (messages.length - 1));
        removeLastMessage();
    }

    const onEnterCallback = () => {
        count && addMessageCallBack();
    }

    const telegramClassName = `${styles.container} ${!count ? styles['border-error'] : ''}`;

    return (
        <div className={telegramClassName}>
            <TelegramTitle countValue={count}/>
            <TelegramChat
                clearInput={clearInput}
                addMessageCallback={addMessageCallBack}
                error={error}
                countMessage={count}
                messageText={text}
                onChangeText={onChangeText}
                onEnter={onEnterCallback}/>
            <SuperButton disabled={!messages.length} onClick={deleteMessageCallBack} buttonSize={"large"}>delete last
                message</SuperButton>
            <div>
                <TelegramMessageList messages={messages} changeAmountLikes={changeAmountLikes}
                                     changeMessageText={changeMessageText}/>
            </div>
        </div>
    );
};

export default Telegram;