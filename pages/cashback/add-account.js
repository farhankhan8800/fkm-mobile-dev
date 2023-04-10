import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Bank from "components/add-account/Bank";
import { useEffect } from "react";
import OtherBank from "components/add-account/OtherBank";

const AddAccount = () => {
  const [account, setAccount] = useState();
  const [activeBank, setActiveBank] = useState(false);
  const [activePaytm, setActivePaytm] = useState(false);

  useEffect(() => {}, []);

  const accountHandler = (e) => {
    setAccount(e.target.value);
  };

  useEffect(() => {
    if (account == "bank") {
      setActiveBank(true);
      setActivePaytm(false);
    } else if (account == "paytm") {
      setActiveBank(false);
      setActivePaytm(true);
    } else {
      setActiveBank(false);
      setActivePaytm(false);
    }
  }, [account]);

  const headeTitle = "Add Your bank Account | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div
          
          style={{ padding:"15px",margin:"15px", marginTop: 0, background: "#f7f7f7", borderRadius: "5px" }}
        >
          
            <h6 className="heading">
              Add Your Account to withdraw Cashback
            </h6>
         
          <div>
            <select
              className="select_tag"
              onChange={accountHandler}
              value={account}
            >
              <option value="Option">Select Your Payment mode</option>
              <option value="bank">Bank</option>
              <option value="paytm">Paytm</option>
            </select>
          </div>
          <div>
            <div>{activeBank ? <Bank /> : ""}</div>

            <div>{activePaytm ? <OtherBank /> : ""}</div>
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

export default AddAccount;
