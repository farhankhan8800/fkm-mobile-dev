import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import { homeApi } from "service/API";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import axios from "axios";
import { useEffect } from "react";

const apiAuth = process.env.API_AUTH;

const HotDealInternal = () => {
  const [sponsoredCount, setSponsoredCount] = useState();
  const [allHotDeals, setAllHotDeals] = useState([]);
  const [page, setPage] = useState(1);
  const [noDeals, setNoDeals] = useState(false);

  // get data in server
  const getData = async () => {
    try {
      let { data } = await axios.post(
        homeApi,
        {
          apiAuth: apiAuth,
          page: page,
          sponsored_count: sponsoredCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.response.hotdeals.length == 0) {
        setNoDeals(true);
      }

      setAllHotDeals([...allHotDeals, ...data.response.hotdeals]);
      setSponsoredCount(data.response.sponsored_count);
    } catch (error) {}
  };

  // console.log(allHotDeals)
  useEffect(() => {
    getData();
  }, [page]);

  const pageFunction = () => {
    setPage(page + 1);
  };

  const headeTitle = "All Hot Deals | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 1, position: "relative" }}>
          <Box component="div">
            <Grid container>
              <Grid>
                <div className="flex_div">
                  {allHotDeals &&
                    allHotDeals.map((item, i) => {
                      return (
                        <Box
                          sx={{ maxWidth: "167px", marginBottom: "10px " }}
                          component="div"
                          key={i}
                        >
                          <Card
                            sx={{
                              background: "rgb(248 248 248)",
                              border: "1px solid #dfdbdb",
                            }}
                          >
                            <Link
                              className="card_link"
                              href={`/deal/${item.slug_url}`}
                            >
                              <CardActionArea>
                                <Box
                                  component="div"
                                  sx={{ padding: "15px 21px 0px" }}
                                >
                                  <Image
                                    src={item.deal_image}
                                    alt={item.title}
                                    height={92}
                                    width={120}
                                    style={{ borderRadius: "7px" }}
                                  />
                                </Box>
                                <CardContent
                                  sx={{
                                    background: "rgb(248 248 248)",
                                    padding: "7px",
                                  }}
                                >
                                  <Typography
                                    gutterBottom
                                    variant="p"
                                    component="div"
                                    sx={{
                                      color: "#000",
                                      marginBottom: "0",
                                      fontSize: "17px",
                                    }}
                                  >
                                    {item.store_name}{" "}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: "#000",
                                      padding: "4px 0",
                                      fontSize: "13px",
                                      textOverflow: "ellipsis",
                                      overflow: "hidden",
                                      whiteSpace: "wrap",
                                      height: "62px",
                                    }}
                                  >
                                    {item.title}{" "}
                                  </Typography>
                                  <Box
                                    component="div"
                                    sx={{ paddingTop: "4px" }}
                                  >
                                    <strong className="card_amouunt">
                                      &#8377;{item.offer_price}
                                    </strong>
                                    <small className="card_small_amouunt">
                                      &#8377;{item.price}
                                    </small>
                                  </Box>
                                </CardContent>
                              </CardActionArea>
                            </Link>
                          </Card>
                        </Box>
                      );
                    })}
                </div>
              </Grid>
            </Grid>
            <Box>
              {noDeals ? (
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  No Data Found{" "}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={pageFunction} variant="outlined">
                    Lode More
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </div>
      <style jsx>
        {`
          .card_link {
            text-decoration: none;
            border-radius: 10px;
            width: 100%;

            display: inline-block;

            position: relative;
          }

          .card_amouunt {
            color: #000;
            font-weight: 900;
            font-size: 18px;
          }
          .card_small_amouunt {
            color: gray;
            margin-left: 15px;
            position: relative;
            font-size: 16px;
          }
          .card_small_amouunt::after {
            content: "";
            background-color: red;
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 9px;
            left: 0;
            transform: rotate(-10deg);
            border-radius: 10px;
          }

          .flex_div {
            padding: 6px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .flex_div img {
            width: 100%;
          }
          .card_cashback {
            position: absolute;
            top: 0;
            right: 0;
            padding: 2px 5px;
            color: #fff;
            font-size: 10px;
            background-color: #f27932;
          }
        `}
      </style>
    </>
  );
};

export default HotDealInternal;
