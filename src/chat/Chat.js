import React from 'react'
import ChatBot from "react-simple-chatbot";

const Chat = () => {
    return (
        <div>
            <ChatBot 
       steps={[
        {
            id:'intro', 
            message:'Hello. What is your name?', 
            trigger:'intro-user',
           },
         {
            id:'intro-user', 
            user:true, 
            end:true,
           },
           {
            id:'intro', 
            message:'Hello', 
            trigger:'intro-user',
           },
         ]}
      />
        </div>
    )
}

export default Chat
