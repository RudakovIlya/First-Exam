import React, {ChangeEvent} from 'react';
import SuperInput from "../../SuperInput/SuperInput";
import SuperButton from "../../SuperButton/SuperButton";
import styles from './TelegramChat.module.css'

type TelegramChatPropsType = {
    error: string
    messageText: string
    countMessage: number
    addMessageCallback: () => void
    onChangeText: (event: ChangeEvent<HTMLInputElement>) => void
    onEnter: () => void
    clearInput: () => void
}

const TelegramChat: React.FC<TelegramChatPropsType> = ({
                                                                 messageText,
                                                                 error,
                                                                 countMessage,
                                                                 addMessageCallback,
                                                                 onChangeText,
                                                                 onEnter,
                                                                 clearInput
                                                             }) => {
    return (
        <div className={styles.input}>
            <SuperInput error={error} value={messageText} onChange={onChangeText} onEnter={onEnter}/>
            <SuperButton disabled={countMessage === 0} onClick={addMessageCallback}>send</SuperButton>
            <SuperButton onClick={clearInput}>clear</SuperButton>
        </div>
    );
};

export default TelegramChat;