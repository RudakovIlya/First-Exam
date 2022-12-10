import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../../../../App";
import styles from './TelegramMessage.module.css'
import SuperInput from "../../../SuperInput/SuperInput";

type TelegramMessagePropsType = {
    message: MessageType
    changeMessage: (message: string) => void
    changeAmountLikes: (likes: number) => void
}

const TelegramMessage: React.FC<TelegramMessagePropsType> = ({
                                                                 message: {id, text, likesCount},
                                                                 changeAmountLikes,
                                                                 changeMessage
                                                             }) => {

    const [newMessageText, setNewMessageText] = useState('');
    const [editMode, setEditMode] = useState<boolean>(false);

    const addLike = () => {
        changeAmountLikes(likesCount);
    }

    const deActiveViewMode = () => {
        changeMessage(newMessageText);
        setEditMode(false)
    }

    const activeViewMode = () => {
        setEditMode(true);
        setNewMessageText(text)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewMessageText(event.currentTarget.value)
    }

    return (
        <li key={id} className={styles.item}>
            {editMode ?
                <SuperInput autoFocus onBlur={deActiveViewMode} onChange={onChangeHandler} value={newMessageText}
                            onEnter={deActiveViewMode}/> :
                <span>{text}&nbsp;</span>}
            <button onClick={addLike} className={styles.like}>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 0.900024C18.7001 0.907957 20.3279 1.5889 21.5273 2.7939C22.7267 3.9989 23.4 5.62987 23.4 7.33002C23.4 10.9 21.97 12.69 15.95 17.33L13.17 19.49C12.8367 19.7487 12.4269 19.8891 12.005 19.8891C11.5831 19.8891 11.1733 19.7487 10.84 19.49L8.05001 17.37C2.00001 12.69 0.600006 10.9 0.600006 7.33002C0.599988 5.62987 1.27331 3.9989 2.47269 2.7939C3.67207 1.5889 5.29987 0.907957 7.00001 0.900024C7.97073 0.920434 8.92437 1.1594 9.79001 1.59915C10.6557 2.03889 11.411 2.66811 12 3.44002C12.589 2.66811 13.3444 2.03889 14.21 1.59915C15.0756 1.1594 16.0293 0.920434 17 0.900024ZM7.00001 2.70002C5.77726 2.70795 4.60729 3.19924 3.74548 4.06668C2.88366 4.93412 2.39998 6.10725 2.40001 7.33002C2.40001 10.15 3.55001 11.59 9.16001 15.96L11.94 18.12C11.9573 18.133 11.9784 18.14 12 18.14C12.0216 18.14 12.0427 18.133 12.06 18.12L14.84 16C20.45 11.64 21.6 10.2 21.6 7.37002C21.6053 6.76116 21.4904 6.15724 21.262 5.59283C21.0335 5.02843 20.696 4.51462 20.2687 4.08084C19.8414 3.64705 19.3328 3.30181 18.7719 3.06487C18.211 2.82793 17.6089 2.70395 17 2.70002C15.44 2.70002 14 3.58002 12.77 5.43002L12 6.50002L11.26 5.43002C10 3.58002 8.58001 2.70002 7.00001 2.70002Z"
                        fill="#818C99"/>
                </svg>
            </button>
            <span>{likesCount}</span>
            <button onClick={activeViewMode}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.1213 4.28868L23.7071 5.87447C24.8787 7.04604 24.8787 8.94554 23.7071 10.1171L21 12.8242L10.1464 23.6779C9.30249 24.5217 8.15794 24.9958 6.96451 24.9958H5.05C3.91782 24.9958 3 24.078 3 22.9458V21.0314C3 19.8378 3.47414 18.6932 4.31811 17.8493L15.172 6.996L15.1716 6.99579L17.8787 4.28868C19.0503 3.11711 20.9497 3.11711 22.1213 4.28868ZM16.5 8.49645L5.73228 19.2635C5.26341 19.7324 5 20.3683 5 21.0314V22.9458C5 22.9734 5.02239 22.9958 5.05 22.9958H6.96451C7.62752 22.9958 8.26339 22.7324 8.73222 22.2636L19.5 11.4965L16.5 8.49645ZM19.2929 5.7029L18 6.99579L21 9.99579L22.2929 8.7029C22.6834 8.31237 22.6834 7.67921 22.2929 7.28868L20.7071 5.7029C20.3166 5.31237 19.6834 5.31237 19.2929 5.7029Z"
                        fill="#5181B8"/>
                </svg>
            </button>
        </li>
    );
};

export default TelegramMessage;