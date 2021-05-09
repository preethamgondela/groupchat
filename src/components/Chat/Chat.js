import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import NavBar from "./NavBar/NavBar";
import DashBoard from "./Dashboard/DashBoard";

const ENDPOINT = "https://socket-chat-react-app.herokuapp.com/";
let socket;

export default function Chat({ location }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT, {
            transports: ["websocket", "polling", "flashsocket"],
        });

        setName(name);
        setRoom(room);

        socket.emit("join", { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, []);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    // <div className="outerContainer">
    //     <div className="container">
    //       <InfoBar room={room}/>
    //       <Messages messages={messages} name={name} />
    //       <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    //     </div>
    //   </div>

    return (
        <div className="main">
            <NavBar />
            <DashBoard
                room={room}
                messages={messages}
                name={name}
                message={message}
                sendMessage={sendMessage}
                setMessage={setMessage}
                users={users}
            />
        </div>
    );
}
