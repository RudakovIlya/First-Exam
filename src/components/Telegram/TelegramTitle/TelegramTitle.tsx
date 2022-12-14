import React from 'react';
import styles from "./TelegramTitle.module.css";

type TelegramTitlePropsType = {
    countValue: number
}

const TelegramTitle: React.FC<TelegramTitlePropsType> = ({countValue}) => {
    const titleClassName = `${styles.title} ${!countValue ? styles['error-title'] : ''}`;
    return (
        <h2 className={titleClassName}>{`${countValue ? `Limit ${countValue} messages` : 'Limit exhausted'}`}</h2>
    );
};

export default TelegramTitle;