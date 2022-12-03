import React, {useState} from 'react';
import {MessageType} from "../../../../App";
import styles from './TelegramMessage.module.css'

type TelegramMessagePropsType = {
    message: MessageType
}

const TelegramMessage: React.FC<TelegramMessagePropsType> = ({message: {id, text, likesCount}}) => {
    const [like, setLike] = useState<number>(likesCount);
    const addLike = () => {
        setLike((prevLike) => prevLike + 1);
    }
    return (
        <li key={id} className={styles.item}>
            <span>{text}&nbsp;</span>
            <button onClick={addLike} className={styles.like}>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 0.900024C18.7001 0.907957 20.3279 1.5889 21.5273 2.7939C22.7267 3.9989 23.4 5.62987 23.4 7.33002C23.4 10.9 21.97 12.69 15.95 17.33L13.17 19.49C12.8367 19.7487 12.4269 19.8891 12.005 19.8891C11.5831 19.8891 11.1733 19.7487 10.84 19.49L8.05001 17.37C2.00001 12.69 0.600006 10.9 0.600006 7.33002C0.599988 5.62987 1.27331 3.9989 2.47269 2.7939C3.67207 1.5889 5.29987 0.907957 7.00001 0.900024C7.97073 0.920434 8.92437 1.1594 9.79001 1.59915C10.6557 2.03889 11.411 2.66811 12 3.44002C12.589 2.66811 13.3444 2.03889 14.21 1.59915C15.0756 1.1594 16.0293 0.920434 17 0.900024ZM7.00001 2.70002C5.77726 2.70795 4.60729 3.19924 3.74548 4.06668C2.88366 4.93412 2.39998 6.10725 2.40001 7.33002C2.40001 10.15 3.55001 11.59 9.16001 15.96L11.94 18.12C11.9573 18.133 11.9784 18.14 12 18.14C12.0216 18.14 12.0427 18.133 12.06 18.12L14.84 16C20.45 11.64 21.6 10.2 21.6 7.37002C21.6053 6.76116 21.4904 6.15724 21.262 5.59283C21.0335 5.02843 20.696 4.51462 20.2687 4.08084C19.8414 3.64705 19.3328 3.30181 18.7719 3.06487C18.211 2.82793 17.6089 2.70395 17 2.70002C15.44 2.70002 14 3.58002 12.77 5.43002L12 6.50002L11.26 5.43002C10 3.58002 8.58001 2.70002 7.00001 2.70002Z"
                        fill="#818C99"/>
                </svg>
            </button>
            <span>{like}</span>
        </li>
    );
};

export default TelegramMessage;