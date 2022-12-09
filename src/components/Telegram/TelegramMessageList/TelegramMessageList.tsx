import React from 'react';
import {MessageType} from "../../../App";
import styles from "./TelegramMessageList.module.css";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import TelegramMessage from "./TelegrammMessage/TelegramMessage";

type TelegramMessageListPropsType = {
    messages: MessageType[]
    changeAmountLikes: (messageID: string, likes: number) => void
}

const TelegramMessageList: React.FC<TelegramMessageListPropsType> = ({messages, changeAmountLikes}) => {
    const mappedItem = messages.map(ms => {
        return (
            <TelegramMessage key={ms.id} message={ms} changeAmountLikes={changeAmountLikes}/>
        )
    });
    const [list] = useAutoAnimate<HTMLUListElement>()
    return (
        <ul className={styles.list} ref={list}>
            {mappedItem.length ? mappedItem : <li className={styles.error}>Messages is empty!</li>}
        </ul>
    );
};

export default TelegramMessageList;