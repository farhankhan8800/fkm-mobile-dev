import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";




const AddAccount = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [accountnumber, setAccountNumber] = useState();
  const [ifsc, setIfsc] = useState();
  const [bankName, setBankName] = useState();
  const [accountType, setAccountType] = useState();


  const onSubmit = (e) => {
    e.preventDefault();
    if(name.length > 2 && phone.length > 9 && accountType != " " && bankName.length > 3 && ifsc.length > 9 && accountnumber.length > 10){
   console.log("valid")
   console.log(`${name},${phone},${accountnumber},${ifsc},${bankName},${accountType}`)

    }else{
      console.log("err")
    }
   
  };
//     setName("");
//     setPhone("");
//     setAccountNumber("");
//     setIfsc("");
//     setBankName("");
//     setAccountType("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const acountNumberHandler = (e) => {
    setAccountNumber(e.target.value);
  };
  const ifscHandler = (e) => {
    setIfsc(e.target.value);
  };
  const bankNameHandler = (e) => {
    setBankName(e.target.value);
  };
  const accountTypeHandler = (e) => {
    setAccountType(e.target.value);
  };

  const headeTitle = "Add Your bank Account | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box
          component="div"
          sx={{ p: 2, m: 2,mt:0, background: "#f7f7f7", borderRadius: "5px" }}
        >
          <Box sx={{}}>
            <Typography variant="h6" fontWeight={600} color="initial">Add Account</Typography>
          </Box>
          <Box>
            <form onSubmit={onSubmit}>
              <label>Account Type</label>
              <select
                onChange={accountTypeHandler}
                value={accountType}
                name="account-type"
                id="account-type"
              >
                <option value="">Opction</option>
                <option value="saving">Saving</option>
                <option value="current">Current</option>
                <option value="bussines">Bussines</option>
              </select>
              <label>Account Holder Name</label>
              <TextField
                size="small"
                fullWidth
                value={name}
                onChange={nameHandler}
                type="text"
                id="outlined-basic"
                placeholder="Account Type"
                variant="outlined"
              />
              <label>Phone</label>
              <TextField
                size="small"
                fullWidth
                onChange={phoneHandler}
                type="number"
                value={phone}
                id="outlined-basic"
                placeholder="Phone"
                variant="outlined"
              />
              <label>Account Number</label>
              <TextField
                size="small"
                fullWidth
                type="text"
                value={accountnumber}
                onChange={acountNumberHandler}
                id="outlined-basic"
                placeholder="Account Number"
                variant="outlined"
              />
              <label>IFSC</label>
              <TextField
                size="small"
                fullWidth
                value={ifsc}
                onChange={ifscHandler}
                type="text"
                id="outlined-basic"
                placeholder="IFSC"
                variant="outlined"
              />
              <label>Bank Name</label>
              <TextField
                size="small"
                fullWidth
                type="text"
                value={bankName}
                onChange={bankNameHandler}
                id="outlined-basic"
                placeholder="Bank Name"
                variant="outlined"
              />
              <Box sx={{ padding: "10px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
      <style jxs>{`
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

export default AddAccount;
