import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { missing_historyAPI } from "service/API"
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH
const DEVICE_TYPE = process.env.DEVICE_TYPE

const ClickHistory = () => {
  const [missing_history, setMissing_history] = useState([])
  const [page, setPage] = useState(1)
  const [noMoreData, setNoMoreData] = useState(false)
  const router = useRouter()
  const authToken = useUserToken()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    try {
      const { data } = await axios.post(missing_historyAPI, {
        apiAuth: apiAuth,
        device_type: DEVICE_TYPE,
        page: page
      },
        {
          headers: {
            Authorization: authToken
          }
        })
      if (data.code == "401") {
        return router.push("/session-expired")
      }
      if ((data.response.missing_history).length == 0) {
        setNoMoreData(true)
      } else {
        setMissing_history([...missing_history, ...data.response.missing_history])
      }
    } catch (error) {
    }
  }

  const moreData = () => {
    setPage(page + 1)
  }
  useEffect(() => {
    getData()
  }, [page, authToken])

  const headeTitle = "Click History | Freekaamaal";
  
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{ margin: "15px" }}>
          <div className="overflow_div">
            <table id="click_id"   >
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Store</th>
                  <th>Amount</th>
                  <th>Reported  Date</th>
                  <th>Order  Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  missing_history && missing_history.map((item, i) => (
                    <tr key={i + 1}>
                      <td>{i + 1}</td>
                      <td>{item.store}</td>
                      <td>{item.amount}</td>
                      <td>{item.reported_date}</td>
                      <td>{item.order_date}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))

                }
              </tbody>
            </table>
          </div>

        </div>

        {
          noMoreData ? <div style={{ textAlign: "center" }}>No More Data...</div> :
            <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
              <button className="border_button" onClick={moreData} >More Data</button>
            </div>
        }

      </div>
      <style jsx>{`
       #click_id {
        border-collapse: collapse;
        width: 100%;
      }
      
      #click_id td, #click_id th {
        border: 1px solid #dddddd5c;
        padding: 8px;
      }
      
      #click_id tr:nth-child(even){background-color: #f2f2f2;}
      
      #click_id tr:hover {background-color: #ddd;}
      
      #click_id th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        min-width: 166px;
        background-color: #757171;
        color: white;
      }
      .overflow_div{
        overflow: auto;
      }
      .overflow_div::-webkit-scrollbar {
        display: none;
    }
    `}</style>

    </>
  );
};

export default protectRoute(ClickHistory);
