import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

function MessageBox({ user, text, isSentByCurrentUser }) {
    console.log(user);
    return user === "admin" ? (
        <div className="messageContainerAdmin">
            <div className="adminMessage">{text}</div>
        </div>
    ) : (
        <div className={`messageContainer ${isSentByCurrentUser ? "" : "justify-start"}`} >
            <div className={`messageBox ${isSentByCurrentUser ? "align-start" : ""}`}>
                <div className="name">{isSentByCurrentUser ? 'You' : user}</div>
                <div className="messageText">{ReactEmoji.emojify(text)}</div>
            </div>
        </div>
    );
}

export default function Message({ message: { user, text }, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <MessageBox
            user={user}
            text={text}
            isSentByCurrentUser={isSentByCurrentUser}
        />
    );
}
