import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
const ReferalMoney = () => {
  const router = useRouter();
  useEffect(()=>{
    if(!(localStorage.getItem("user"))){
      router.push("/")
    }
  },[router])
  const [amount, setAmount] = useState();
  const [slecteHandler, setSlecteHandler] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`${amount},${setSlecteHandler}`);
    setAmount("");
    setSlecteHandler("");
  };
  const amountHeandler = (e) => {
    setAmount(e.target.value);
  };

  const slecteAccountHandler = (e) => {
    setSlecteHandler(e.target.value);
  };
  const headeTitle = "Referal Money | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ p: 2, m: 2, bgcolor: "#fbf6f6" }}>
          <Box>
            <form onSubmit={onSubmit}>
              <Typography component="h6" paddingBottom="5px" fontWeight="600">
                Slecte Account{" "}
              </Typography>
              <select
                onChange={slecteAccountHandler}
                value={slecteHandler}
                name="account-type"
                id="account-type"
              >
                <option value="">Opction</option>
                <option value="saving">Saving</option>
                <option value="current">Current</option>
                <option value="bussines">Bussines</option>
              </select>
              <Typography component="h6" padding="5px 0" fontWeight="600">
                Enter the amount you want to redeem{" "}
              </Typography>

              <TextField
                size="small"
                fullWidth
                value={amount}
                onChange={amountHeandler}
                type="number"
                id="outlined-basic"
                placeholder="Enter Amount"
                variant="outlined"
              />
              <Box sx={{ padding: "10px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Withdraw
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
        margin-bottom:10px
        border: 1px solid #c1c1c1;
    }
    input{
        margin-bottom:10px
    }
    `}</style>
    </>
  );
};

export default ReferalMoney;
