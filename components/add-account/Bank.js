import React, { useState } from "react";

import axios from "axios";
import {add_accountAPI} from "service/API"
import { ImWarning } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH
const DEVICE_TYPE = process.env.DEVICE_TYPE


const Bank = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [accountnumber, setAccountNumber] = useState();
  const [ifsc, setIfsc] = useState();
  const [bankName, setBankName] = useState();
  const [serverdata, setServerdata] = useState()
  const [notValid, setNotValid] = useState(null);

  const router = useRouter()
  const authToken = useUserToken()

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && phone && bankName && ifsc && accountnumber) {
       if (name.length > 2) {
        if (phone.length == 10) {
          if (bankName.length > 4) {
            if (ifsc.length == 11) {
              if (accountnumber.length > 11) {

                try {
                  let{data} = await axios.post(add_accountAPI,{
                      apiAuth:apiAuth,
                      device_type: DEVICE_TYPE,
                      phone: phone,
                      account_name:name,
                      account_type:"bank",
                      account_no:accountnumber,
                      ifsc_code:ifsc,
                      bank_name: bankName,
                    },
                    {
                      headers: {
                            Authorization:authToken
                          }
                    })
                  //  console.log(data)
                  if(data.code == "401"){
                    return router.push("/session-expired")
                  }
                   if(data.status == 1){
                    setTimeout(function(){
                      setName("");
                      setPhone("");
                      setAccountNumber("");
                      setIfsc("");
                      setBankName("");
                      setServerdata(data.message)
                    }, 500);
                         
                   }else{
                    setServerdata(data.message)
                   }
                
                } catch (error) {
                  console.log(error)
                }
               
              } else {
                setNotValid("Fill the Valid Account Number");
              }
            } else {
              setNotValid("Fill the Valid IFSC Code");
            }
          } else {
            setNotValid("Fill the Valid Bank Name");
          }
        } else {
          setNotValid("Fill the Valid Phone Number");
        }
      } else {
        setNotValid("Fill the Valid Name");
      }
    } else {
      setNotValid("Fill the all details ");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    setNotValid(null);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    setNotValid(null);
  };
  const acountNumberHandler = (e) => {
    setAccountNumber(e.target.value);
    setNotValid(null);
  };
  const ifscHandler = (e) => {
    setIfsc(e.target.value);
    setNotValid(null);
  };
  const bankNameHandler = (e) => {
    setBankName(e.target.value);
    setNotValid(null);
  };
 
  return (
    <>
     <div style={{paddingTop:"20px"}}>
        <hr></hr>
     <div style={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
              <label>Account Holder Name</label>
              <input
                value={name}
                onChange={nameHandler}
                type="text"
                id="outlined-basic"
                style={{width:"100%",padding: "6px 10px"}}
                placeholder="Name"
                className="input_style"
              />
              <label>Phone</label>
              <input
              
                onChange={phoneHandler}
                type="number"
                value={phone}
                id="outlined-basic"
                style={{width:"100%",padding: "6px 10px"}}
                placeholder="Phone"
                className="input_style"
              />
              <label>Account Number</label>
              <input
                className="input_style"
                type="text"
                style={{width:"100%",padding: "6px 10px"}}
                value={accountnumber}
                onChange={acountNumberHandler}
                id="outlined-basic"
                placeholder="Account Number"
                
              />
              <label>IFSC</label>
              <input
              className="input_style" 
              style={{width:"100%",padding: "6px 10px"}}
                value={ifsc}
                onChange={ifscHandler}
                type="text"
                id="outlined-basic"
                placeholder="IFSC"
               
              />
              <label>Bank Name</label>
              <input
                
                type="text"
                value={bankName}
                onChange={bankNameHandler}
                id="outlined-basic"
                placeholder="Bank Name"
                className="input_style" 
                style={{width:"100%",padding: "6px 10px"}}
              />
              <div style={{ padding: "10px 0" }}>
                <button
                  type="submit"
                   className="full_with_button"
                  style={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Save
                </button>
             
              </div>
              {notValid ?  <div  className="alert_warning_class"> <span><ImWarning /></span> <p>{notValid}</p> </div> : ""}
              {
                serverdata ?<div  className="alert_info_class"> <span><AiFillInfoCircle /></span> <p>{serverdata}</p> </div> :""
              }
            </form>
          </div>
     </div>
     
      <style jsx>{`
    label{
        display: block;
        padding: 9px 2px 5px;
    }
    select{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        font-size: 15px;
        border: 1px solid #c1c1c1;
    }
    `}</style>
    </>
  );
};

export default Bank;
