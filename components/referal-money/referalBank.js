import React, { useState } from "react";
import axios from "axios";
import { withdrawMoneyAPI } from "service/API"
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { BiErrorCircle } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const ReferalBank = ({ userData }) => {

  const [amount, setAmount] = useState();
  const [account, setAccount] = useState();
  const [serverdata, setServerdata] = useState()
  const [notValid, setNotValid] = useState(null);
  const [userAccountData, setUserAccountData] = useState()
  const [userPromocodes, setUserPromocodes] = useState()
  const [promocodes_code, setPromocodes_code] = useState()
  const [promocodes_couponid, setPromocodes_couponid] = useState()


  const router = useRouter()
  const authToken = useUserToken()


  useEffect(() => {
    setPromocodes_code("")
    setPromocodes_couponid("")
  }, [])


  useEffect(() => {
    setUserAccountData(userData)
    setUserPromocodes(userData.promocodes)
  }, [userData])

  const SubmitFormHandal = async () => {
    // e.prevent.default()
    if (account) {
      if (amount) {
        if (account == "00") {
          setNotValid("Select Valid Withdrawal Account");
        } else {
          try {
            let { data } = await axios.post(withdrawMoneyAPI, {
              apiAuth: apiAuth,
              device_type: DEVICE_TYPE,
              wallet_name: "paytm",
              account_ref_id: account,
              amount: amount,
              couponid: promocodes_couponid,
              code: promocodes_code,
              option: "cbrequest"
            },
              {
                headers: {
                  Authorization: authToken
                }
              })
            if (data.status == 1) {
              setTimeout(() => {
                setServerdata(data.msg)
                setAmount("")
                setAccount("")
                sessionStorage.setItem("verifydata", JSON.stringify(data));
              }, 400);
              setTimeout(() => {
                router.push("/cashback-summary/verify-withdraw-money")
              }, 3000);


            } else if (data.status == 0) {
              setServerdata(data.msg)
            } else {
              setServerdata(data.msg)
            }

          } catch (error) {
          }

        }
      } else {
        setNotValid("Fill Withdrawal Amount");
      }
    } else {
      setNotValid("Select Withdrawal Account");
    }
  };



  const amountHandler = (e) => {
    setAmount(e.target.value);
    setNotValid(null);
  };

  const promocodesHandal = (promo_code, promo_id) => {

    setPromocodes_code(promo_code)
    setPromocodes_couponid(promo_id)
  }

  const accountHandler = (e) => {
    setAccount(e.target.value)
    setNotValid(null);
  }
  useEffect(() => {

  }, [])

  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        {
          userAccountData ? <p style={{ fontSize: "13px", fontWeight: "600" }}> {userAccountData.label_msg}</p> : ""
        }

        <div style={{ paddingTop: "10px" }}>
          <div >
            <label>Select Account</label>
            <select className="select_tag_account"
              onChange={accountHandler}
              value={account}
            >
              <option value="00">Select Account</option>
              {

                userAccountData ? userAccountData.account.map((item, i) =>

                  // eslint-disable-next-line react/jsx-key
                  <option key={i} value={item.account_ref_id}>{item.name}</option>

                ) : ""

              }
            </select>
            <label>Enter Amount</label>
            <input
              value={amount}
              onChange={amountHandler}
              type="Number"
              id="outlined-basic"
              placeholder="Enter Amount"
              className="input_style"
            />

            <div style={{ padding: "10px 0" }}>
              <button
                type="button"
                onClick={SubmitFormHandal}
                className="full_with_button"
                style={{ width: "100%", color: "#fff", fontWeight: "600" }}
              >
                {" "}
                Withdraw
              </button>
            </div>

            {notValid ? <div className="alert_warning_class" style={{ background: " #f0462b4f" }}> <span><BiErrorCircle /></span> <p>{notValid}</p> </div> : ""}
            {

              serverdata ? <div className="alert_warning_class" style={{ background: "#4ac6ac4f;", color: "skyblue" }}> <span><BsCheckCircle /></span> <p> {serverdata}</p> </div> : ""
            }
          </div>
        </div>
        <div>
          {
            userPromocodes ? (<div style={{ paddingTop: "10px" }}>{
            }
              <h6 className="heading" style={{ fontWeight: "600" }}>Your save Coupons</h6>
              <div>
                {
                  userPromocodes.map((item, i) => {
                    return (

                      <React.Fragment key={i}>
                        <div style={{ display: 'flex' }} className="promocodes_class" >
                          <input onClick={() => promocodesHandal(item.code, item.couponid)} id={`id_${i}`} style={{ curser: "pointer" }} type="radio" name="Promocodes" />
                          <label htmlFor={`id_${i}`} style={{ fontSize: "14px", marginLeft: "10px" }} className="">{item.usage_text}</label>
                        </div>
                      </React.Fragment>
                    )
                  }

                  )
                }
              </div>
            </div>) : ""
          }
        </div>

      </div>

      <style jsx>{`
    label{
        display: block;
        padding: 9px 2px 5px;
    }
    .select_tag_account{
        width: 100%;
        padding: 8px 2px;
        border: 1px solid gray;
        font-size: 15px;
       }
       .select_tag option{
        padding:5px;
       }
       .promocodes_class{
         display: flex !important;
         padding-left: 5px;
       }
       .promocodes_class input{
        margin-right: 10px;
       }
    `}</style>
    </>
  );
};

export default ReferalBank;


