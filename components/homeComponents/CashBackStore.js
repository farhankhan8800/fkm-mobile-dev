import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Typography, Card, CardActionArea } from "@mui/material";
import cashbackImage from "../../public/images/money.png";

import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

const Tab = styled(TabUnstyled)`
 
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  min-width: 130px;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f27935;
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #f27935;
  }
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
    background-color: #f27935;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? "#fff" : "#fff"};
    `
);
const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
    background:rgb(248 248 248);
    border-radius: 7px;
    `
);

const CashBackStore = (props) => {
  const [stores, setStores] = useState();
  useEffect(()=>{
      //  console.log(props.cbStore)
       setStores(props.cbStore)
  },[props]) 


  return (
    <>
      <Grid container sx={{ padding: "13px 3px 3px" }}>
        <Grid item>
          <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
            <Image
              src={cashbackImage}
              alt="cashback image"
              width={29}
              height={29}
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h6">
            {" "}
            Cashback <strong>Store</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <TabsUnstyled defaultValue={0}>
          <TabsList className="tabsList" sx={{ bgcolor: "#f279359e" }}>
            <Tab>All Store</Tab>
            <Tab>Beauty Product</Tab>
            <Tab>Kids</Tab>
            <Tab>food</Tab>
          </TabsList>
          <TabPanel value={0}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {stores && stores.map((store, i) => {
                if(store.rate_type==0)
                {
                var cashback_amount = ' Rs ' +parseInt(store.cashback_amount) ;
                }
                else if(store.rate_type==1)
                {
                  var cashback_amount = parseInt(store.cashback_amount) +' %';
                }
               
                return (
                  <Grid key={i} item xs={4}>
                    <Card
                      sx={{
                        maxWidth: "120px",
                        padding: "5px 3px 7px 3px ",
                        marginBottom: "10px",
                        boxShadow: "0 0 0 ",
                      }}
                    >
                      <Link className="cash_back_store_link" href={`store/${store.name}`}>
                        <CardActionArea>
                          <Box
                              component="div"
                              sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              padding: "10px",
                            }}
                          >
                            <Image
                              src={store.store_image}
                              alt="store"
                              height={30}
                              style={{ width: "100%" }}
                              width={100}
                            />
                          </Box>
                          <p className="cash_back_store_offer">
                            <span style={{ color: "red" }}>
                              {cashback_amount}
                            </span>{" "}
                            Cashback
                          </p>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>

          <TabPanel value={1}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {stores && stores.map((store, i) => {
                if (store.cate_id == "14") {
                  return (
                    <Grid key={i} item xs={4}>
                      <Card
                        sx={{
                          maxWidth: "120px",
                          padding: "5px 3px 7px 3px ",
                          marginBottom: "10px",
                          boxShadow: "0 0 0 ",
                        }}
                      >
                        <a className="cash_back_store_link" href='https://freekaamaal.com/'>
                          <CardActionArea>
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                padding: "10px",
                              }}
                            >
                              <Image
                                src={store.store_image}
                                alt="store"
                                height={30}
                                width={100}
                              />
                            </Box>
                            <p className="cash_back_store_offer">
                              <span style={{ color: "red" }}>
                                {store.name}{" "}
                              </span>
                              Cashback
                            </p>
                          </CardActionArea>
                        </a>
                      </Card>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </TabPanel>

          <TabPanel value={2}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
               {stores && stores.map((store, i) => {
                if (store.cate_id === "0") {
                  return (
                    <Grid key={i} item xs={4}>
                      <Card
                        sx={{
                          maxWidth: "120px",
                          padding: "5px 3px 7px 3px ",
                          marginBottom: "10px",
                          boxShadow: "0 0 0 ",
                        }}
                      >
                        <a className="cash_back_store_link" href='https://freekaamaal.com/'>
                          <CardActionArea>
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                padding: "10px",
                              }}
                            >
                              <Image
                                src={store.store_image}
                                alt="store"
                                height={30}
                                width={100}
                              />
                            </Box>
                            <p className="cash_back_store_offer">
                              <span style={{ color: "red" }}>
                                {store.name}{" "}
                              </span>
                              Cashback
                            </p>
                          </CardActionArea>
                        </a>
                      </Card>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={3}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {stores && stores.map((store, i) => {
                if (store.cate_id === "14") {
                  return (
                    <Grid key={i} item xs={4}>
                      <Card
                        sx={{
                          maxWidth: "120px",
                          padding: "5px 3px 7px 3px ",
                          marginBottom: "10px",
                          boxShadow: "0 0 0 ",
                        }}
                      >
                        <a className="cash_back_store_link" href='https://freekaamaal.com/'>
                          <CardActionArea>
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                padding: "10px",
                              }}
                            >
                              <Image
                                src={store.store_image}
                                alt="store"
                                height={30}
                                width={100}
                              />
                            </Box>
                            <p className="cash_back_store_offer">
                              <span style={{ color: "red" }}>
                                {store.name}{" "}
                              </span>
                              Cashback
                            </p>
                          </CardActionArea>
                        </a>
                      </Card>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </TabPanel>
        </TabsUnstyled>
      </Box>
      <style>
        {`
                        .tabsList::-webkit-scrollbar {
                          display: none;
                      }
                      .cash_back_store_offer{
                          text-align: center;
                          color: #000;
                          padding: 1px 2px;
                          font-size: 13px;
                      }
                      .cash_back_store_link{
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                    `}
      </style>
    </>
  );
};

export default CashBackStore;
