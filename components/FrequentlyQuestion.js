

import React, { useEffect } from "react";

const frQ = [
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "This is how Cashback works",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
]
const FrequentlyQuestion = () => {

  const accordionFun = (id) => {
    const panel = document.getElementById(`panel${id}`).classList;
    const accordion = document.getElementById(`accordion${id}`).classList;
    panel.toggle("activeTab");
    accordion.toggle("accordionActive");
  };

  return (
    <>
      <div>
        <h6 className="heading">
          frequent Asked Questions?
        </h6>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            borderRadius: "10px",
            bgcolor: "#fff5efv",
            padding: "0px 0px",
          }}
        >
          {frQ &&
            frQ.map((item, i) => {
              return (
                <div key={i}>
                  <button
                    className={`accordion `}
                    id={`accordion${i}`}
                    onClick={() => accordionFun(i)}
                  >
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
            text-align: left;
            outline: none;
            border-bottom: 1px solid #e0dddd;
            font-size: 15px;
            transition: 0.4s;
            margin-bottom: 2px;
          }
          .panel.activeTab {
            display: block;
          }
          .accordion.active {
            background-color: #cdc6c6;
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
            background: #080808e0;
            color: #fff;
          }
          `}</style>
    </>
  );
};

export default FrequentlyQuestion;
