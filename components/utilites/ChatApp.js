import React from 'react'

import { Freshchat } from 'reactjs-freshchat';
import 'reactjs-freshchat/dist/index.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useUserToken } from 'service/customHooks';


const CHAT_CODE = process.env.CHAT_CODE


const ChatApp = ({userDetails}) => {
  const [details, setDetails] = useState(userDetails)
  
  const UserToken = useUserToken()
  

 

  
  const handleLogout = () => {
    window.fcWidget.destroy();
    //  console.log(window.fcWidget)
  };
  

  return (
    <>
      <Script src="https://wchat.freshchat.com/js/widget.js"></Script>
       <div>
      {
       UserToken ? <Freshchat 
       token={CHAT_CODE} 
       externalId={details?.uid} 
       firstName={details?.title}
       email={details?.email}
       phone={details?.phone}
       ic_styles={{
         bottom: "50px",
         right: "10px"
        }}
     /> : ""
      }
      {/* <button className='clearFreasChatStyle' onClick={handleLogout}>Logout</button> */}
    <style jsx>
      {`
      .clearFreasChatStyle{
        background-color: red;
        position: fixed;
        top: 50%;
        right: 10px;
        z-index:20;
      }
     
      `}
    </style>
    </div>
    </>
 
  )
}

export default ChatApp