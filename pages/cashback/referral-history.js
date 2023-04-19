import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import axios from "axios";
import { useState, useEffect } from "react";
import { referral_summaryAPI } from "service/API";
import React from "react";
import { cashbackHistoryAPI } from "service/API";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE

const ReferralHistory = () => {
  const [referral, setReferral] = useState();
  const [page, setPage] = useState(1);
  const [cashback_history_all, setCashback_history_all] = useState([]);
  const [cashback_history_pending, setCashback_history_pending] = useState([]);
  const [cashback_history_confirmed, setCashback_history_confirmed] = useState(
    []
  );
  const [cashback_history_declined, setCashback_history_declined] = useState(
    []
  );
  const [option, setOption] = useState("all");
  const [noMoreData, setNoMoreData] = useState(false);
  const [ToggleState, setToggleState] = useState(1);

  const router = useRouter()
  const authToken = useUserToken()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    try {
      const { data } = await axios.post(
        referral_summaryAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          option: "summary",
          page: 1,
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
      setReferral(data.response.summary);
    } catch (error) {
      // console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cashback_History = async () => {
    try {
      const { data } = await axios.post(
        cashbackHistoryAPI,
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
      } else if (option == "confirmed") {
        if (data.response.confirmed.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_confirmed([
            ...cashback_history_confirmed,
            ...data.response.confirmed,
          ]);
        }
      } else if (option == "declined") {
        if (data.response.declined.length == 0) {
          setNoMoreData(true);
        } else {
          setCashback_history_declined([
            ...cashback_history_declined,
            ...data.response.declined,
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
    } catch (error) { }
  };

  const moreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getData();
  }, [page, authToken]);

  useEffect(() => {
    cashback_History();
  }, [page, authToken, option]);

  const allTab = () => {
    toggleTab(1)
    setNoMoreData(false);
    setOption("all");
    setPage(1);
    setCashback_history_pending("");
    setCashback_history_confirmed("");
    setCashback_history_declined("");
  };
  const pendingTab = () => {
    toggleTab(2)
    setNoMoreData(false);
    setOption("pending");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_confirmed("");
    setCashback_history_declined("");
  };
  const confirmedTab = () => {
    toggleTab(3)
    setNoMoreData(false);
    setOption("confirmed");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_pending("");
    setCashback_history_declined("");
  };
  const declinedTab = () => {
    toggleTab(4)
    setNoMoreData(false);
    setOption("declined");
    setPage(1);
    setCashback_history_all("");
    setCashback_history_pending("");
    setCashback_history_confirmed("");
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  const headeTitle = "Referral History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div
          style={{ margin: "15px", background: "#f9f9f9", borderRadius: "3px" }}
        >
          <div>
            <h6 className="heading">Referral History</h6>

            <div className="d_grid d_grid_6 grid_gap_ten">
              {referral ? (
                <>
                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.confirm_ref_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Confirm Ref Amount
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.pending_ref_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Pending Ref Amount{" "}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.declined_ref_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Declined Ref Amount
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.withdrawal_ref_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Withdrawal Ref Amount
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.withdrawal_request_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Withdrawal Request Amount
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.withdrawal_declined_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Withdrawal Declined Amount
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      &#8377; {referral.available_ref_amount}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>
                      Available Ref Amount
                    </p>
                  </div>
                </>
              ) : (
                "Loding..."
              )}
            </div>
          </div>

          <div style={{ padding: "15px" }}>
            <h6 className="heading">Cashback History</h6>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <div style={{ width: "100%" }}>
              <div>
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
                    onClick={confirmedTab}
                  >
                    Confirmed
                  </li>
                  <li
                    className={`tabs ${getActiveClass(4, "active-tabs")}`}
                    onClick={declinedTab}
                  >
                    Declined
                  </li>
                </ul>
                <div
                  className={`content ${getActiveClass(1, "active-content")}`}
                >
                  {cashback_history_all.length > 0 ? (
                    <table id="table_style" >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Store</th>
                          <th>Amount</th>
                          <th>Order Id</th>
                          <th>Transaction Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_all &&
                          cashback_history_all.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.store_name}</td>
                              <td> &#8377; {item.amount} </td>
                              <td>{item.orderid}</td>
                              <td>{item.transaction_date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      No Data Available
                    </p>
                  )}
                  <div>
                    {noMoreData ? (
                      "No More Data..."
                    ) : (
                      <div
                        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
                      >
                        <button className="contain_button" onClick={moreData} >
                          More Data
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`content ${getActiveClass(2, "active-content")}`}
                >
                  {cashback_history_pending.length > 0 ? (
                    <table id="table_style"  >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Store</th>
                          <th>Amount</th>
                          <th>Order Id</th>
                          <th>Transaction Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_pending &&
                          cashback_history_pending.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.store_name}</td>
                              <td> &#8377; {item.amount} </td>
                              <td>{item.orderid}</td>
                              <td>{item.transaction_date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{ textAlign: "center", fontSize: "18" }}>
                      No Data Available
                    </p>
                  )}

                  <div>
                    {noMoreData ? (
                      "No More Data..."
                    ) : (
                      <div
                        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
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
                  {cashback_history_confirmed.length > 0 ? (
                    <table id="table_style"  >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Store</th>
                          <th>Amount</th>
                          <th>Order Id</th>
                          <th>Transaction Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_confirmed &&
                          cashback_history_confirmed.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.store_name}</td>
                              <td> &#8377; {item.amount} </td>
                              <td>{item.orderid}</td>
                              <td>{item.transaction_date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{ textAlign: "center", fontSize: "18" }}>
                      No Data Available
                    </p>
                  )}

                  <div>
                    {noMoreData ? (
                      "No More Data..."
                    ) : (
                      <div
                        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
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
                  {cashback_history_declined.length > 0 ? (
                    <table id="table_style" >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Store</th>
                          <th>Amount</th>
                          <th>Order Id</th>
                          <th>Transaction Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashback_history_declined &&
                          cashback_history_declined.map((item, i) => (
                            <tr key={i + 1}>
                              <td>{i + 1}</td>
                              <td>{item.store_name}</td>
                              <td> &#8377; {item.amount} </td>
                              <td>{item.orderid}</td>
                              <td>{item.transaction_date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      No Data Available
                    </p>
                  )}

                  <div>
                    {noMoreData ? (
                      "No More Data..."
                    ) : (
                      <div
                        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
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
        <style jsx>
          {`
            ::-webkit-scrollbar {
              display: none;
            }

            .heading {
              font-weight: 500;
              font-size: 21px;
            }
            .tab-list {
            display: flex;
            list-style: none;
            font-size: 18px;
            padding: 24px 2px;
            margin: 0;
            overflow: auto;
            padding-top: 0;
          }

          .tabs {
            
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            min-width: 100px;
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
           {
            /* table  style  */
          }
          #table_style {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          #table_style td,
          #table_style th {
            border: 1px solid #dddddd5c;
            padding: 8px;
            min-width: 100px;
            text-align: center;
          }

          #table_style tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          #table_style tr:hover {
            background-color: #ddd;
          }

          #table_style th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #757171;
            color: white;
          }
          `}
        </style>
      </div>
    </>
  );
};

export default protectRoute(ReferralHistory);
