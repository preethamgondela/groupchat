import React from "react";
import "./Chats.css";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";

export default function Chats(props) {
    return (
        <div className="chats">
            <Messages messages={props.messages} name={props.name} />
            <Input
                message={props.message}
                setMessage={props.setMessage}
                sendMessage={props.sendMessage}
            />
        </div>
    );
}
