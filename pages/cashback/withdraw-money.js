import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import WithdrawBank from "components/withdraw-money/withdrawBank";

import WithdrawOtherBank from "components/withdraw-money/withdrawOtherBank";
import { withdrawPaymentModeAPI } from "service/API";
import axios from "axios";
import { AiFillInfoCircle } from "react-icons/ai";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE

const WithdrawMoney = () => {
  const [account, setAccount] = useState();
  const [activeBank, setActiveBank] = useState(false);
  const [activePaytm, setActivePaytm] = useState(false);
  const [serverdata, setServerdata] = useState();
  const [userData, setuserData] = useState([]);

  const authToken = useUserToken()
  const router = useRouter()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeAccount = async (account) => {
    try {
      let { data } = await axios.post(
        withdrawPaymentModeAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          wallet_type: account,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      if (data.code == "401") {
        return router.push("/session-expired")
      }
      if (data.status == 1) {
        setuserData(data)
        if (account == "bank") {
          setActiveBank(true);
          setActivePaytm(false);
        } else if (account == "paytm") {
          setActiveBank(false);
          setActivePaytm(true);
        }
      } else {
        setServerdata(data.message);
      }
    } catch (error) {
      // console.log(error);
    }
  };


  const accountHandler = (e) => {
    setServerdata("");
    setAccount(e.target.value);
    setActiveBank(false);
    setActivePaytm(false);
  };

  const callAccount = () => {
    setActiveBank(false);
    setActivePaytm(false);
    if (account == "bank") {
      changeAccount(account);
    } else if (account == "paytm") {
      changeAccount(account);
    }

  }

  const headeTitle = "Add Your bank Account | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div
          component="div"
          style={{ padding: "15px", margin: "15px", marginTop: "0", background: "#f7f7f7", borderRadius: "5px" }}
        >

          <h6 className="heading">
            Select Your Payment Mode
          </h6>

          <div>
            <select
              className="select_tag"
              onChange={accountHandler}
              onClick={callAccount}
              value={account}
            >
              <option value="Option">Select Payment Mode</option>
              <option value="bank">Bank</option>
              <option value="paytm">Paytm</option>
            </select>
          </div>
          {serverdata ? <div className="alert_info_class"> <span><AiFillInfoCircle /></span> <p>{serverdata}</p> </div> : ""}
          <div>
            <div>
              {activeBank ? <WithdrawBank userData={userData} /> : ""}
            </div>

            <div>
              {activePaytm ? (
                <WithdrawOtherBank userData={userData} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .select_tag{
        width: 100%;
        margin: 18px 0px;
        cursor: pointer;
        padding: 8px;
        border: none;
        border: 2px solid #383535;
        border-radius: 7px;
        color: #000;
      }
      .select_tag option{
        padding:5px;
      }
    `}</style>
    </>
  );
};

export default protectRoute(WithdrawMoney);
