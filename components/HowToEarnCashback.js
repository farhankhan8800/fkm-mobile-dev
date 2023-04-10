import React, { useEffect, useState } from "react";
import cashbackImage from "../public/images/money.png";
import Image from "next/image";

const HowToEarnCashback = (props) => {
  const [howtoearncashback, setHowtoearncashback] = useState();

  useEffect(() => {
    setHowtoearncashback(props.howtoearncashback);
  }, [props]);

  const accordionFun = (id) => {
    const panel = document.getElementById(`panel${id}`).classList;
    const accordion = document.getElementById(`accordion${id}`).classList;
    panel.toggle("activeTab");
    accordion.toggle("accordionActive");
  };

  return (
    <>
      <div className="d_flex" style={{ padding: "13px 3px 3px",alignItems: "center",
    justifyContent: "flex-start"}}>
          <div style={{ width: "30px", marginRight: "10px" }}>
            <Image
              src={cashbackImage}
              alt="cash back image"
              height={29}
              width={29}
            />
          </div>
        <div>
          <h6 className="heading">
            {" "}
            How To Earn <strong>Cashback?</strong>
          </h6>
        </div>
      </div>
      <div style={{ padding: "5px 17px" }}>
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: " 0px 0px 6px -2px grey",
          }}
        >
          <iframe
            width="100%"
            loading="lazy"
            height="200px"
            src="https://www.youtube.com/embed/hkStK-PBO_k"
            title="How to Earn Cashback"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          style={{
            borderRadius: "10px",
            bgcolor: "#fff5efv",
            padding: "0px 0px",
            marginTop: "30px",
          }}
        >
          {howtoearncashback &&
            howtoearncashback.map((item, i) => {
              return (
                <div key={i}>
                  <button
                    className={`accordion `}
                    id={`accordion${i}`}
                    onClick={() => accordionFun(i)}
                  >
                    {" "}
                    <Image
                      src={cashbackImage}
                      alt=""
                      width={20}
                      height={20}
                    />{" "}
                    &nbsp; &nbsp; {item.title}{" "}
                  </button>
                  <div className="panel" id={`panel${i}`}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
        .accordion {
          background-color: #eee;
          color: #444;
          cursor: pointer;
          border-radius: 3px;
          padding: 13px;
          width: 100%;
          border: none;
          outline: none;
          border-bottom: 1px solid#e0dddd;
          font-size: 15px;
          transition: .4s;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .panel.activeTab {
          display: block;
          margin-bottom: 21px;
        }
      
        .panel {
          padding: 0 11px;
          background-color: #f5f4f4;
          font-size: 14px;
          line-height: 21px;
          display: none;
          margin-bottom: 10px;
        }
        .accordion.accordionActive {
          background-color: #f27935;
          color: #fff;
        }
       .panel p{
          line-height: 1.55;
    font-size: 13px;
    font-weight: 100;
    margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default HowToEarnCashback;
