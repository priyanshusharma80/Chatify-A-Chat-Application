import Sidebar from "../ChatComponents/Sidebar";
import ChatArea from "../ChatComponents/Chatarea";
import React from "react";
import Chat from "../ChatComponents/Chat";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        {/* <ChatArea /> */}
        <Chat />
      </div>
    </div>
  );
}
