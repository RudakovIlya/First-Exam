import React from 'react';
import {MessageType} from "../../../App";
import styles from "./TelegramMessageList.module.css";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import TelegramMessage from "./TelegrammMessage/TelegramMessage";

type TelegramMessageList = {
    messages: MessageType[]
}

const TelegramMessageList: React.FC<TelegramMessageList> = ({messages}) => {
    const mappedItem = messages.map(ms => {
        return (
            <TelegramMessage key={ms.id} message={ms}/>
        )
    });
    const [list] = useAutoAnimate<HTMLUListElement>()
    return (
        <ul className={styles.list} ref={list}>
            {mappedItem.length ? mappedItem : <li className={styles.red}>Messages is empty!</li>}
        </ul>
    );
};

export default TelegramMessageList;