// import React, { useEffect } from "react";

// import { Freshchat } from "reactjs-freshchat";
// import "reactjs-freshchat/dist/index.css";
// import { useState } from "react";
// import { useUserToken } from "service/customHooks";

// const CHAT_CODE = process.env.CHAT_CODE;

// const ChatApp = ({ userDetails }) => {
//   const [details, setDetails] = useState(userDetails);

//   const UserToken = useUserToken();

//   useEffect(() => {
//     // if (window.fcWidget) {
//     //   window.fcWidget.init({
//     //     token: CHAT_CODE,
//     //     externalId: details?.uid,
//     //     firstName: details?.title,
//     //     email: details?.email,
//     //     phone: details?.phone,
//     //   });
//     // }
//   }, [details]);

//   return (
//     // <div id="freshchat-container">{/* Render the Freshchat widget here */}</div>
//     <Freshchat
//       token={CHAT_CODE}
//       externalId={details?.uid}
//       firstName={details?.title}
//       email={details?.email}
//       phone={details?.phone}
//     />
//   );
// };

// export default ChatApp;
