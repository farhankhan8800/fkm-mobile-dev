import React from "react";


import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import FrequentlyQuestion from "../../components/FrequentlyQuestion";
import protectRoute from "service/protect-route";

const referEarn = () => {
  const copyLink = () => {
    const copyLinkValue = document.getElementById("couponLink");
    copyLinkValue.select();
    navigator.clipboard.writeText(copyLinkValue.value);
    document.getElementById("copyLinkButton").innerHTML = "copied";
  };
  const copyCode = () => {
    const copyCodeValue = document.getElementById("couponCode");
    copyCodeValue.select();
    navigator.clipboard.writeText(copyCodeValue.value);
    document.getElementById("copyCodeButton").innerHTML = "copied";
  };

  const headeTitle = "Refer and Earn | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div  style={{ padding:"15px", paddingBottom: "10px" }}>
          <div  style={{fontWeight:"600"}}>
            {" "}
            Let&apos;s Grow Together With Our Refer And Earn Program
          </div>
          <div
            
            style={{ background: "#fff0f0", margin: "10px 0",padding:"15px" }}
          >
            <div style={{ position: "relative", marginBottom: "10px" }}>
              <h6 className="heading" > Referral Link</h6>
              <input
                id="couponLink"
                readOnly
                value="freekaamaal.com/576345723DGFG/6456"
               />
              <button
                onClick={copyLink}
                id="copyLinkButton"
                style={{
                  position: "absolute",
                  color: "#fff",
                  right: "4px",
                  top: "27px",
                  padding:"4px",
                  minWidth:"85px"
                }}
               className="contain_button"
              >
                Copy
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <h6 className="heading" > Referral Code</h6>
              <input id="couponCode" readOnly value="6456"></input>
              <button
                onClick={copyCode}
                id="copyCodeButton"
                style={{
                  position: "absolute",
                  color: "#fff",
                  right: "4px",
                  top: "27px",
                  padding:"4px",
                  minWidth:"85px"
                }}
                className="contain_button"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
        <div
         
          style={{ padding:"15px", paddingTop: "0px", paddingBottom: "10px" }}
        >
          <h6 className="heading"  >
            {" "}
            Easy Process
          </h6>
          <div style={{ padding: "10px 0" }}></div>
        </div>
        <div  style={{padding:"15px", paddingTop: "0px" }}>
          <FrequentlyQuestion />
        </div>
      </div>
      <style jsx>{`
        input {
          width: 100%;
          padding: 8px;
          border: 2px solid #e1e1e1;
          border-radius: 5px;
          font-size: 15px;
        }
      `}</style>
    </>
  );
};

export default protectRoute(referEarn) ;
