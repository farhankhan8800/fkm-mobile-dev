import { Box, Typography, Grid, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useRouter } from "next/router";
import CashBackClaimCard from "components/CashBackClaimCard";
import Link from "next/link";
import axios from "axios";
import { StoreDetailApi } from "service/API";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import DealsAndCoupons from "components/couponsComponents/DealsAndCoupons";
import { useEffect, useState } from "react";

const headeTitle = " Store | Freekaamaal";
const apiAuth = process.env.API_AUTH;

const StoreDetails = () => {
  const [store_data, setStore_data] = useState();
  const [storeRate, setStoreRate] = useState();
  const [storeRateMore, setStoreRateMore] = useState(false);
  const [storeDeals, setStoreDeals] = useState([]);
  const [storeCoupons, setStoreCoupons] = useState([]);
  const [changeOption, setChangeOption] = useState("");
  const [Page, setPage] = useState(1);
  const [noCouponData, setNoCouponData] = useState(false);
  const [noDealData, setNoDealData] = useState(false);
  const [user, setUser] = useState();

  const router = useRouter();
  const store_slug = router.query["store"];

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const storeData = async () => {
    try {
      let { data } = await axios.post(
        StoreDetailApi,
        {
          apiAuth: apiAuth,
          page: Page,
          store_slug: store_slug,
          option: changeOption,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.status == 0 && data.error == 0) {
        router.push(`/404`);
        // console.log("no store found");
      } else {
        if (changeOption == "") {
          setStore_data(data.response.store_details);
          setStoreRate(data.response.store_rates);
          if (data.response.deals.length == 0) {
            setNoDealData(true);
          } else {
            setStoreDeals([...storeDeals, ...data.response.deals]);
          }
        } else if (changeOption == "deals") {
          if (data.response.deals.length == 0) {
            setNoDealData(true);
          } else {
            setStoreDeals([...storeDeals, ...data.response.deals]);
          }
        } else if (changeOption == "coupons") {
          if (data.response.coupons.length == 0) {
            setNoCouponData(true);
          } else {
            setStoreCoupons([...storeCoupons, ...data.response.coupons]);
          }
        }
      }
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    if (store_slug) {
    storeData();
    }
  }, [Page, changeOption, store_slug]);

// console.log(store_data)

  const dealsTabCall = () => {
    setNoCouponData(false);
    setChangeOption("deals");
    setPage(1);
    setStoreCoupons([]);
  };

  const couponsTabCall = () => {
    setNoDealData(false);
    setChangeOption("coupons");
    setPage(1);
    setStoreDeals([]);
  };
  const addDealPage = () => {
    setPage(Page + 1);
  };
  const addCouponPage = () => {
    setPage(Page + 1);
  };

  const moreStoreHandel = () => {
    if (storeRateMore == true) {
      setStoreRateMore(false);
    } else {
      setStoreRateMore(true);
    }
  };

  useEffect(() => {
    if (store_data) {
    }
  }, [store_data]);

  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px", position: "relative" }}>
        {store_data ? (
          <div>
            <Box
              component="div"
              sx={{ bgcolor: "#f1f1f1", padding: "70px 20px 20px" }}
            >
              <Link href={store_data.store_landing_url}>
                <Box
                  component="div"
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    color: "#000",
                    padding: "32px 24px 24px",
                    bgcolor: "#fff",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    boxShadow: "1px 2px 29px -19px #000",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: "150px",
                      bgcolor: "#fff",
                      position: "absolute",
                      top: "-42px",
                      padding: "16px",
                      borderRadius: "8px",
                      boxShadow: "4px 1px 36px 10px #f1f1f1",
                    }}
                  >
                    <Image
                      width={100}
                      height={30}
                      style={{ width: "100%" }}
                      src={store_data.store_img}
                      alt="store image"
                    />
                  </Box>
                  <Box component="div" sx={{}}>
                    <Box component="div">
                      <Typography
                        variant="p"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        component="p"
                      >
                        <strong>{store_data.cashback_amount} </strong>
                        <InfoIcon
                          fontSize="small"
                          sx={{ color: "#000" }}
                        />{" "}
                      </Typography>
                      <Box
                        component="div"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarHalfIcon fontSize="small" />
                        <StarOutlineIcon fontSize="small" />
                      </Box>
                    </Box>
                    <Box component="div" sx={{}}>
                      <Grid
                        container
                        justifyContent="space-around"
                        spacing={1}
                        sx={{ padding: "10px 0" }}
                      >
                        {store_data.is_cashback == 1 ? (
                          <div>
                            <Grid item>
                              <Typography
                                sx={{ color: "#ad2323", fontSize: "14px" }}
                                variant="p"
                                component="p"
                              >
                                <small>Confirmation Time</small>
                              </Typography>
                              <Typography
                                variant="p"
                                sx={{ textAlign: "center", fontSize: "12px" }}
                                component="p"
                              >
                                <small>{store_data.confirmation}</small>
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="p"
                                sx={{ color: "#ad2323", fontSize: "14px" }}
                                component="p"
                              >
                                <small>Tracking Speed</small>
                              </Typography>
                              <Typography
                                variant="p"
                                sx={{ textAlign: "center", fontSize: "12px" }}
                                component="p"
                              >
                                <small>{store_data.speed}</small>
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="p"
                                sx={{ color: "#ad2323", fontSize: "14px" }}
                                component="p"
                              >
                                <small>Missing Order</small>
                              </Typography>
                              <Typography
                                variant="p"
                                sx={{ textAlign: "center", fontSize: "12px" }}
                                component="p"
                              >
                                <small>{store_data.is_missing}</small>
                              </Typography>
                            </Grid>
                          </div>
                        ) : (
                          " "
                        )}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Link>
              {storeRate ? (
                <Box
                  component="div"
                  sx={{
                    marginTop: "22px",
                    padding: "20px 9px",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  <Typography component="p">
                    Cashback <strong>Rates</strong>{" "}
                  </Typography>

                  <div
                    style={{
                      height: storeRateMore ? "" : "92px",
                      overflow: storeRateMore ? "" : "hidden",
                    }}
                  >
                    {storeRate &&
                      storeRate.map((item, i) => {
                        const { cashback_tag, rate, tag_desc } = item;

                        return (
                          <Box
                            key={i + 1}
                            component="div"
                            sx={{ display: "flex" }}
                          >
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                margin: " 10px 0",
                                padding: "10px",
                                color: "#fff",
                                backgroundColor: "#f27935",
                                flexBasis: "30%",
                              }}
                            >
                              <Typography
                                sx={{ textAlign: "center" }}
                                component="small"
                                varient="small"
                              >
                                {rate}
                              </Typography>
                            </Box>
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                borderTopRightRadius: "7px",
                                borderBottomRightRadius: "7px",
                                margin: " 10px 0",
                                padding: "10px",
                                flexBasis: "70%",
                                border: "2px  dashed #f27935",
                                borderLeft: "none",
                              }}
                            >
                              <strong>{cashback_tag}</strong>
                              <Typography
                                component="small"
                                fontSize="12px"
                                varient="small"
                              >
                                {tag_desc}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}
                  </div>

                  {storeRate && storeRate.length > 1 ? (
                    <Box
                      component="div"
                      width="100%"
                      textAlign="center"
                      justifyContent="center"
                    >
                      <Button
                        onClick={moreStoreHandel}
                        variant="contained"
                        sx={{ borderRadius: "70px", color: "#fff" }}
                      >
                        {" "}
                        <ExpandMoreIcon />
                      </Button>
                    </Box>
                  ) : (
                    ""
                  )}
                </Box>
              ) : (
                ""
              )}

              {store_data.is_claim == 1 ? (
                <CashBackClaimCard
                  claim_form_link={store_data.claim_form_link}
                />
              ) : (
                ""
              )}
            </Box>
            <Box sx={{ paddingBottom: "25px" }}>
              <DealsAndCoupons
                categoryCoupons={storeCoupons}
                categoryDeals={storeDeals}
                noCouponData={noCouponData}
                noDealData={noDealData}
                couponsTabCall={couponsTabCall}
                dealsTabCall={dealsTabCall}
                addDealPage={addDealPage}
                addCouponPage={addCouponPage}
              />
            </Box>
            <Box
              component="div"
              sx={{
                position: "Fixed",
                width: "100%",
                textAlign: "center",
                bottom: "0",
                left: "0",
                padding: "4px",
                bgcolor: "#fff",
              }}
            >
              {user ? (
                <Link href={store_data.store_landing_url}>
                  <Button
                    variant="contained"
                    sx={{ width: "100%", maxWidth: "600px", color: "#fff" }}
                  >
                    {
                      store_data.is_claim == '1' ? "Shope & earn More":"Shope Now"
                    }
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button
                    variant="contained"
                    sx={{ width: "100%", maxWidth: "600px", color: "#fff" }}
                  >
                    Login Now & Earn Cashback
                  </Button>
                </Link>
              )}
            </Box>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default StoreDetails;
