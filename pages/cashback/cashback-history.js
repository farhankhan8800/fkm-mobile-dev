import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import axios from "axios";
import { withdrawal_historyAPI } from "service/API";
import { useState } from "react";
import { useEffect } from "react";
import { useUserToken } from "service/customHooks";
import protectRoute from "service/protect-route";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const CashbackHistory = () => {
  const [page, setPage] = useState(1);
  const [ToggleState, setToggleState] = useState(1);
  const [cashback_history_title, setCashback_history_title] = useState();
  const [cashback_history_all, setCashback_history_all] = useState([]);
  const [cashback_history_pending, setCashback_history_pending] = useState([]);
  const [cashback_history_debit, setCashback_history_debit] = useState([]);
  const [cashback_history_decline, setCashback_history_decline] = useState([]);
  const [option, setOption] = useState("all");
  const [noMoreData, setNoMoreData] = useState(false);

  const authToken = useUserToken();
  const router = useRouter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    try {
      const { data } = await axios.post(
        withdrawal_historyAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          option: option,
          page: page,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      if(data.code == "401"){
        return router.push("/session-expired")
      }
      setCashback_history_title(data.response.top_desc);
      if (option == " ") {
        if (data.response.all.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_all([
            ...cashback_history_all,
            ...data.response.all,
          ]);
        }
      } else if (option == "pending") {
        if (data.response.pending.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_pending([
            ...cashback_history_pending,
            ...data.response.pending,
          ]);
        }
      } else if (option == "debit") {
        if (data.response.debit.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_debit([
            ...cashback_history_debit,
            ...data.response.debit,
          ]);
        }
      } else if (option == "decline") {
        if (data.response.decline.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_decline([
            ...cashback_history_decline,
            ...data.response.decline,
          ]);
        }
      } else {
        if (data.response.all.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_all([
            ...cashback_history_all,
            ...data.response.all,
          ]);
        }
      }
    } catch (error) {}
  };
  const moreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getData();
  }, [authToken]);

  useEffect(() => {
    getData();
  }, [option, page]);

  const allTab = () => {
    toggleTab(1);
    setNoMoreData(false);
    setOption("all");
    setPage(1);
    setCashback_history_pending("");
    setCashback_history_debit("");
    setCashback_history_decline("");
  };

  const pendingTab = () => {
    toggleTab(2);
    setNoMoreData(false);
    setOption("pending");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_debit("");
    setCashback_history_decline("");
  };

  const debitTab = () => {
    setNoMoreData(false);
    toggleTab(3);
    setOption("debit");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_pending("");
    setCashback_history_decline("");
  };

  const declineTab = () => {
    toggleTab(4);
    setNoMoreData(false);
    setOption("decline");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_pending("");
    setCashback_history_debit("");
  };

  useEffect(() => {}, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

    // console.log(cashback_history_all)
  const headeTitle = "Cashback History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div
          style={{
            padding:"15px",
            margin: "10px 10px 0",
            background: "#f1f1f1",
            borderRadius: "5px",
          }}
        >
          <p  style={{fontSize:"13px",color:"gray"}}>
            {setCashback_history_title ? cashback_history_title : "Loding.."}
          </p>
        </div>
        <div sx={{ p: 2 }}>
          <div sx={{ width: "100%" }}>
            <div className="container">
              <ul className="tab-list">
                <li
                  className={`tabs ${getActiveClass(1, "active-tabs")}`}
                  onClick={allTab}
                >
                  All
                </li>
                <li
                  className={`tabs ${getActiveClass(2, "active-tabs")}`}
                  onClick={pendingTab}
                >
                  Pending
                </li>
                <li
                  className={`tabs ${getActiveClass(3, "active-tabs")}`}
                  onClick={debitTab}
                >
                  Debit
                </li>
                <li
                  className={`tabs ${getActiveClass(4, "active-tabs")}`}
                  onClick={declineTab}
                >
                  Declined
                </li>
              </ul>

              <div className="content-container">
                <div
                  className={`content ${getActiveClass(1, "active-content")}`}
                >
                  <div>
                    {cashback_history_all.length > 0 ? (
                      <table id="table_style" style={{ minWidth: 300 }}>
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>Amount</th>
                            <th>Transaction Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cashback_history_all &&
                            cashback_history_all.map((item, i) => (
                              <tr key={i + 1}>
                                <td>{i + 1}</td>
                                <td> &#8377; {item.amount} </td>
                                <td>{item.date}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    ) : (
                      <p style={{textAlign:"center", fontSize:18}}>
                        No Data Available
                      </p>
                    )}
                  </div>
                  <div>
                    {noMoreData ? (
                      "No More Data..."
                    ) : (
                      <div
                        style={{ padding:"10px", display: "flex", justifyContent: "center" }}
                      >
                        <button onClick={moreData} className="border_button" >
                          More Data
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`content ${getActiveClass(2, "active-content")}`}
                >
                 
                 <div >
                  {cashback_history_pending.length > 0 ? (
                    <table id="table_style" style={{ minWidth: 300 }} >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Bank</th>
                          <th>Amount</th>
                          <th>Transaction Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_pending &&
                          cashback_history_pending.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.type}</td>
                              <td>
                                {" "}
                                &#8377; {item.amount}{" "}
                              </td>
                              <td>{item.date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{textAlign:"center", fontSize:18}}>
                      No Data Available
                    </p>
                  )}
                </div>
                <div>
                  {noMoreData ? (
                    "No More Data..."
                  ) : (
                    <div
                    style={{ padding:"10px", display: "flex", justifyContent: "center" }}
                    >
                      <button onClick={moreData} className="border_button">
                        More Data
                      </button>
                    </div>
                  )}
                </div>
                </div>
                <div
                  className={`content ${getActiveClass(3, "active-content")}`}
                >
                   <div>
                  {cashback_history_debit.length > 0 ? (
                    <table id="table_style" style={{ minWidth: 300 }} aria-label="customized table">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Bank</th>
                          <th>Amount</th>
                          <th>Transaction Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_debit &&
                          cashback_history_debit.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.type}</td>
                              <td>
                                {" "}
                                &#8377; {item.amount}{" "}
                              </td>
                              <td>{item.date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{textAlign:"center", fontSize:18}}>
                      No Data Available
                    </p>
                  )}
                </div>
                <div>
                  {noMoreData ? (
                    "No More Data..."
                  ) : (
                    <div
                    style={{ padding:"10px", display: "flex", justifyContent: "center" }}
                    >
                      <button onClick={moreData} className="border_button">
                        More Data
                      </button>
                    </div>
                  )}
                </div>
                </div>
                <div
                  className={`content ${getActiveClass(4, "active-content")}`}
                >
                  <div >
                  {cashback_history_decline.length > 0 ? (
                    <table id="table_style" style={{ minWidth: 300 }} >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Bank</th>
                          <th>Amount</th>
                          <th style={{minWidth:"160px !important "}}>Reason</th>
                          <th>Transaction Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_decline &&
                          cashback_history_decline.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.type}</td>
                              <td>
                                {" "}
                                &#8377; {item.amount}{" "}
                              </td>
                              <td sx={{ minWidth: "200px" }}>
                                {item.reason}
                              </td>
                              <td>{item.date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{textAlign:"center", fontSize:18}}>
                      No Data Available
                    </p>
                  )}
                </div>
                <div>
                  {noMoreData ? (
                    "No More Data..."
                  ) : (
                    <div
                    style={{ padding:"10px", display: "flex", justifyContent: "center" }}
                    >
                      <button onClick={moreData} className="border_button">
                        More Data
                      </button>
                    </div>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tab-list {
            display: flex;
            list-style: none;
            font-size: 18px;
            padding: 10px 2px;
            margin: 0;
          }

          .tabs {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
          }
          .active-tabs {
            color: var(--main-color);
          }

          .content {
            display: none;
          }

          .active-content {
            display: block;
           
    overflow: auto;
    margin: 0 10px;
          }
          {/* table  style  */}
          #table_style {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table_style td, #table_style th {
  border: 1px solid #dddddd5c;
  padding: 8px;
  min-width:100px;
  text-align: center;
}

#table_style tr:nth-child(even){background-color: #f2f2f2;}

#table_style tr:hover {background-color: #ddd;}

#table_style th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #757171;
    color: white;
  }
        `}
      </style>
    </>
  );
};

export default protectRoute(CashbackHistory) ;
