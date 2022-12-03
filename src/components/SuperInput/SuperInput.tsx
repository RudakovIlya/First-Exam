import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, ChangeEvent} from 'react';
import styles from './SuperInput.module.css'
import {useAutoAnimate} from "@formkit/auto-animate/react";

type SuperInputDefaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = Omit<SuperInputDefaultType, 'type'> & {
    onEnter?: () => void
    onChangeText?: (value: string) => void
    spanClassName?: string
    error?: ReactNode
    name?: string
};

const SuperInput: React.FC<SuperInputPropsType> = ({
                                                       onEnter,
                                                       onChangeText,
                                                       spanClassName,
                                                       error,
                                                       name,
                                                       onChange,
                                                       id,
                                                       onKeyPress,
                                                       onBlur,
                                                       ...restProps
                                                   }) => {

    const onEnterHandlerCallBack = (event: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(event)

        onEnter && event.key === 'Enter' && onEnter();
    }

    const onChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)

        onChangeText?.(event.currentTarget.value);
    }


    const finalSpanClassName = `${error && styles.spanError}`;
    const finalInputClassName = styles.input + ` ${error && styles.inputError}`;
    const [div] = useAutoAnimate<HTMLDivElement>()
    return (
        <div ref={div} className={styles.InputWrapper}>
            <label className={styles.label} htmlFor={id}>{name}</label>
            <input id={id} className={finalInputClassName} onChange={onChangeInputText}
                   onKeyPress={onEnterHandlerCallBack}
                   type="text" {...restProps}/>
            {
                error && <span  className={finalSpanClassName}>{error}</span>
            }
        </div>
    );
};

export default SuperInput;

