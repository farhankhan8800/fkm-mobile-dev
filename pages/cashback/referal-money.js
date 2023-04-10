import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Alert, Box, Typography } from "@mui/material";
import ReferalOtherBank from "components/referal-money/referalOtherBank";
import { useEffect } from "react";
import ReferalBank from "components/referal-money/referalBank";
import { withdrawPaymentModeAPI } from "service/API";
import axios from "axios";

const apiAuth = process.env.API_AUTH;

const ReferalMoney = () => {
  const [account, setAccount] = useState();
  const [activeBank, setActiveBank] = useState(false);
  const [activePaytm, setActivePaytm] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [serverdata, setServerdata] = useState();
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeAccount = async (account) => {
    try {
      let { data } = await axios.post(
        withdrawPaymentModeAPI,
        {
          apiAuth: apiAuth,
          device_type: "4",
          wallet_type: account,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      if (data.status == 1) {
        setuserData(data);
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
      console.log(error);
    }
  };
  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  }, []);

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
  };

  const headeTitle = "Add Your bank Account | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div
          
          style={{ padding:"16px",margin:"15px", marginTop: 0, background: "#f7f7f7", borderRadius: "5px" }}
        >
          <div>
            <p className="p_tag_big">
              Select Your Payment Mode
            </p>
          </div>
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
          {serverdata ? <Alert severity="info">{serverdata}</Alert> : ""}
          <div>
            <div>{activeBank ? <ReferalBank userData={userData} /> : ""}</div>

            <div>
              {activePaytm ? <ReferalOtherBank userData={userData} /> : ""}
            </div>
          </div>
        </div>
      </div>
      <style jxs>{`
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

export default ReferalMoney;
