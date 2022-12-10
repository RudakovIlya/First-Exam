import React from 'react';
import {MessageType} from "../../../App";
import styles from "./TelegramMessageList.module.css";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import TelegramMessage from "./TelegrammMessage/TelegramMessage";

type TelegramMessageListPropsType = {
    messages: MessageType[]
    changeAmountLikes: (messageID: string, likes: number) => void
    changeMessageText: (messageID: string, text: string) => void
}

const TelegramMessageList: React.FC<TelegramMessageListPropsType> = ({
                                                                         messages,
                                                                         changeAmountLikes,
                                                                         changeMessageText
                                                                     }) => {
    const mappedItem = messages.map(ms => {
        const changeMessageTextCallback = (text: string) => {
            changeMessageText(ms.id, text)
        }
        const changeAmountLikesCallBack = (likes: number) => {
            changeAmountLikes(ms.id, likes);
        }
        return (
            <TelegramMessage key={ms.id} message={ms} changeAmountLikes={changeAmountLikesCallBack}
                             changeMessage={changeMessageTextCallback}/>
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