import React, { useEffect, useState } from "react";
import "./App.css";
import Telegram from "./components/Telegram/Telegram";
import { v1 } from "uuid";
import Paper from "@mui/material/Paper";

export type MessageType = {
  id: string;
  text: string;
  likesCount: number;
};

const App: React.FC = () => {
  const [messages, setList] = useState<MessageType[]>(() => {
    const getMessage = localStorage.getItem("message");
    return getMessage ? JSON.parse(getMessage) : [];
  });

  useEffect(() => {
    localStorage.setItem("message", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (text: string) => {
    setList([{ id: v1(), text, likesCount: 0 }, ...messages]);
  };

  const removeLastMessage = () => {
    setList([...messages.slice(0, messages.length - 1)]);
  };

  const changeMessageText = (messageID: string, text: string) => {
    setList(messages.map(ms => (ms.id === messageID ? { ...ms, text } : ms)));
  };

  const changeAmountLikes = (messageID: string, likes: number) => {
    setList(messages.map(mes => (mes.id === messageID ? { ...mes, likesCount: likes + 1 } : mes)));
  };

  return (
    <div className="App">
      <h1>Telegram</h1>
      <Paper elevation={6}>
        <Telegram
          changeMessageText={changeMessageText}
          messages={messages}
          addMessage={addMessage}
          removeLastMessage={removeLastMessage}
          changeAmountLikes={changeAmountLikes}
        />
      </Paper>
    </div>
  );
};

export default App;
