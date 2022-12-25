import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./TelegramChat.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type TelegramChatPropsType = {
  error: string;
  messageText: string;
  countMessage: number;
  addMessageCallback: () => void;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  clearInput: () => void;
};

const TelegramChat: React.FC<TelegramChatPropsType> = ({
  messageText,
  error,
  countMessage,
  addMessageCallback,
  onChangeText,
  onEnter,
  clearInput,
}) => {
  return (
    <div className={styles.input}>
      <TextField
        value={messageText}
        onChange={onChangeText}
        onKeyDown={onEnter}
        id="outlined-basic"
        label="Enter text"
        variant="outlined"
        error={!!error}
        helperText={error}
      />
      <Button disabled={countMessage <= 0} onClick={addMessageCallback} variant="contained">
        send
      </Button>
      <Button onClick={clearInput} variant="outlined">
        clear
      </Button>
    </div>
  );
};

export default TelegramChat;
