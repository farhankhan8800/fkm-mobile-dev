// login page --------------------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { saveMissingAPI } from "service/API";
import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import axios from "axios";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE


const MissingformStore = () => {
  const [inputForm, setInputForm] = useState();
  const [store_id, setStore_id] = useState();

  const [serverError, setServerError] = useState();
  const [clientError, setClientError] = useState();
  const [mess, setMessage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    click_id: "",
    order_id: "",
    amount: "",
    order_date: "",
    product_name: "",
    invoice_1: "",
    invoice_2: "",
  });

  const route = useRouter();
  const userToken = useUserToken()

  useEffect(() => {
    let InputData = sessionStorage.getItem("missingStoreForm");
    setInputForm(JSON.parse(InputData));
    setStore_id(sessionStorage.getItem("store_id"));
  }, []);

  const submitForm = async (e) => {
    setClientError("");
    e.preventDefault();
    if (formData.click_id) {
      try {
        let { data } = await axios.post(
          saveMissingAPI,
          {
            apiAuth: apiAuth,
            device_type:DEVICE_TYPE,
            name: formData.name,
            store_id: store_id,
            clickid: formData.click_id,
            orderid: formData.order_id,
            amount: formData.amount,
            order_date: formData.order_date,
            product: formData.product_name,
            invoice: formData.invoice_1,
            invoice2: formData.invoice_2,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: userToken,
            },
          }
        );
        if(data.code == "401"){
          return route.push("/session-expired")
        }
        if (data.status == 1) {
          setMessage(data);
          route.push("cashback-summary/missing-claimform");
          sessionStorage.removeItem("missingStoreForm", "store_id");
        }
        if (data.status == 0) {
          setServerError(data);
        }
      } catch (error) {}
    } else {
      setClientError(`Chosse Your Click Id`);
    }
  };
  const updateData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateFile = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
    setServerError("");
  };

  const headeTitle = " Claime store Form | Freekaamaal";

  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box
          component="div"
          style={{ width: "100%", padding: " 5px 20px", paddingTop: "20px" }}
        >
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Missing Form</strong>
          </Typography>
          <div>
            {inputForm ? (
              <form onSubmit={submitForm}>
                <label htmlFor="click_id">Click Id *</label>
                <select onChange={updateData} id="click_id" name="click_id">
                  <option value="nodata">Your Click Id</option>
                  {inputForm.map((item, i) => {
                    return (
                      <option key={i} value={item.clickid}>
                        {" "}
                        {item.created_time}
                      </option>
                    );
                  })}
                </select>

                <label htmlFor="name">Your Name *</label>
                <TextField
                  sx={{ width: "100%", marginTop: "5px" }}
                  size="small"
                  name={"name"}
                  id="name"
                  required={true}
                  onChange={updateData}
                  type="text"
                  placeholder="Your Name"
                  variant="outlined"
                ></TextField>

                <label htmlFor="order_id">Order Id *</label>
                <TextField
                  sx={{ width: "100%", marginTop: "5px" }}
                  size="small"
                  name={"order_id"}
                  id="order_id"
                  placeholder="Order Id"
                  required={true}
                  onChange={updateData}
                  type="text"
                  variant="outlined"
                ></TextField>
                <label htmlFor="amount">Amount *</label>
                <TextField
                  sx={{ width: "100%", marginTop: "5px" }}
                  size="small"
                  name={"amount"}
                  id="amount"
                  placeholder="Order Amount"
                  required={true}
                  onChange={updateData}
                  type="text"
                  variant="outlined"
                ></TextField>
                <label htmlFor="order_date">Order Date *</label>
                <TextField
                  sx={{ width: "100%", marginTop: "5px" }}
                  size="small"
                  name={"order_date"}
                  id="order_date"
                  placeholder="Order Date"
                  required={true}
                  onChange={updateData}
                  type="date"
                  variant="outlined"
                ></TextField>
                <label htmlFor="product_name">Product Name *</label>
                <TextField
                  sx={{ width: "100%", marginTop: "5px" }}
                  size="small"
                  name={"product_name"}
                  id="product_name"
                  placeholder="Product Name"
                  required={true}
                  onChange={updateData}
                  type="text"
                  variant="outlined"
                ></TextField>
                <label htmlFor="invoice_1">Invoice *</label>
                <div className="file_input_style">
                  <input
                    style={{ width: "100%", marginTop: "5px" }}
                    size="small"
                    className=""
                    accept=".jpg, .jpeg, .png"
                    name="invoice_1"
                    id="invoice_1"
                    required={true}
                    onChange={updateFile}
                    type="file"
                  ></input>
                </div>
                <label htmlFor="invoice_2">Invoice 2</label>
                <div className="file_input_style">
                  <input
                    style={{ width: "100%", marginTop: "5px" }}
                    size="small"
                    className=""
                    accept=".jpg, .jpeg, .png"
                    name="invoice_2"
                    id="invoice_2"
                    onChange={updateFile}
                    type="file"
                  ></input>
                </div>

                <div>
                  {mess ? (
                    <Alert severity="success" sx={{ mt: 2 }}>
                      {" "}
                      {mess.message}!
                    </Alert>
                  ) : (
                    ""
                  )}
                  {serverError ? (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {" "}
                      {serverError.message}!
                    </Alert>
                  ) : (
                    ""
                  )}
                  {clientError ? (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {" "}
                      {clientError}!
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    color: "#fff",
                    fontWeight: "bold",
                    margin: "10px 0",
                    fontSize: "17px",
                    letterSpacing: "1px",
                  }}
                  type="Submit"
                >
                  Submit
                </Button>
              </form>
            ) : (
              ""
            )}
          </div>
        </Box>
      </div>
      <style jsx>{`
        select {
          width: 100%;
          padding: 9px;
          margin-top: 10px;
          font-size: 16px;
          border: 1px solid #ccc6c6;
          border-radius: 5px;
        }
        label {
          font-size: 16px;
          margin-top: 11px;
          color: gray;
          display: inline-block;
        }
        label span {
          color: #f27935;
        }
        .file_input_style {
          padding: 6px 11px;
          border: 1px solid #ccc6c6;
          border-radius: 4px;
          margin-top: 8px;
          padding-bottom: 11px;
        }
      `}</style>
    </>
  );
};

export default protectRoute(MissingformStore) ;
