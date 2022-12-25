import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { MessageType } from "../../../../App";
import styles from "./TelegramMessage.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

type TelegramMessagePropsType = {
  message: MessageType;
  changeMessage: (message: string) => void;
  changeAmountLikes: (likes: number) => void;
};

const TelegramMessage: React.FC<TelegramMessagePropsType> = ({
  message: { id, text, likesCount },
  changeAmountLikes,
  changeMessage,
}) => {
  const [newMessageText, setNewMessageText] = useState("");
  const [editMode, setEditMode] = useState<boolean>(false);

  const addLike = () => {
    changeAmountLikes(likesCount);
  };

  const deActiveViewMode = () => {
    changeMessage(newMessageText);
    setEditMode(false);
  };

  const activeViewMode = () => {
    setEditMode(true);
    setNewMessageText(text);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessageText(event.currentTarget.value);
  };

  const onKeyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && deActiveViewMode();
  };

  return (
    <li id={`message-id-${id}`} className={styles.item}>
      {editMode ? (
        <TextField
          autoFocus
          onBlur={deActiveViewMode}
          onKeyDown={onKeyDownEnter}
          onChange={onChangeHandler}
          value={newMessageText}
          id="outlined-basic"
          label="Edit message"
          variant="standard"
        />
      ) : (
        <span>{text}&nbsp;</span>
      )}
      <IconButton onClick={addLike} size={"small"}>
        <FavoriteBorderIcon color={"primary"} style={{ width: "0.8em", height: "0.8em" }} />
      </IconButton>
      <span>{likesCount}</span>
      <IconButton onClick={activeViewMode}>
        <ModeEditIcon color={"inherit"} style={{ width: "0.8em", height: "0.8em", fill: "#bdbdbd" }} />
      </IconButton>
    </li>
  );
};

export default TelegramMessage;
