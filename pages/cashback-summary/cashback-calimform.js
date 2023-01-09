import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Box, Typography, Button,  } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CashbackCalimform = () => {
  const [accountType, setAccountType] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`${accountType}`);
    setAccountType("");
  };

  const accountTypeHandler = (e) => {
    setAccountType(e.target.value);
  };

  const headeTitle = "Cashback CalimForm | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ m: 2, p: 2, bgcolor: "#f1f1f1", borderRadius: "4px" }}>
          <Box>
            <Typography component="h6" fontWeight="700">
              {" "}
              Cashback CalimForm
            </Typography>
            <Typography component="p" fontSize="13px">
              {" "}
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
            </Typography>
          </Box>
          <Box>
            <Typography component="h6" paddingBottom="6px" fontWeight="700">
              Store Name
            </Typography>
            <form  onSubmit={onSubmit}>
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
      <style jsx>{`
        select {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          font-size: 15px;
          border: 1px solid #c1c1c1;
        }
        select option{
          
        }
      `}</style>
    </>
  );
};

export default CashbackCalimform;
