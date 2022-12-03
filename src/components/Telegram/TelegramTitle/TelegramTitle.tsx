import React from 'react';
import styles from "./TelegramTitle.module.css";

type TelegramTitlePropsType = {
    countValue: number
}

const TelegramTitle: React.FC<TelegramTitlePropsType> = ({countValue}) => {
    return (
        <h1 className={`${styles.title} ${!countValue ? styles.red : ''}`}>{`${countValue ? `Limit ${countValue} messages` : 'Limit exhausted'}`}</h1>
    );
};

export default TelegramTitle;