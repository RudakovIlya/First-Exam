import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './SuperButton.module.css'

type SuperButtonDefaultType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type XType = 'primary' | 'secondary' | 'outline';

type ButtonSizeType = 'small' | 'medium' | 'large';

type SuperButtonPropsType = SuperButtonDefaultType & {
    xType?: XType,
    buttonSize?: ButtonSizeType
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                xType,
                                                                className,
                                                                disabled,
                                                                buttonSize,
                                                                ...restProps
                                                            }) => {

    const finalButtonSize = `${styles.button} ${buttonSize === 'medium' ? styles.medium : buttonSize === 'large' ? styles.large : styles.small}`;
    const finalButtonStyle = `${disabled ? `${styles.disabled} ${styles.secondary}` : xType === 'secondary' ? styles.secondary : xType === 'outline' ? styles.outline : styles.primary}`;

    return (
        <div>
            <button className={`${finalButtonSize} ${finalButtonStyle}`} disabled={disabled}  {...restProps}/>
        </div>
    );
};

export default SuperButton;