
import { useRouter } from "next/router";
import CashBackClaimCard from "components/CashBackClaimCard";
import Link from "next/link";
import axios from "axios";
import { StoreDetailApi } from "service/API";
import Image from "next/image";

import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";

import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import DealsAndCouponsStore from "components/couponsComponents/DealsAndCouponsStore";




const headeTitle = " Store | Freekaamaal";
const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const StoreDetails = () => {
  const [store_data, setStore_data] = useState();
  const [storeRate, setStoreRate] = useState();
  const [storeRateMore, setStoreRateMore] = useState(false);
  const [user, setUser] = useState();
  const [topDescState, setTopDescState] = useState(false);
  const [tcOpenState, setTcOpenState] = useState(false);
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
          page: "1",
          store_slug: store_slug,
          option: "",
          device_type: DEVICE_TYPE,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );



      console.log(data)
      if (data.status == 0 && data.error == 0) {
        router.push(`/404`);
      } else {
          setStore_data(data.response.store_details);
          setStoreRate(data.response.store_rates);
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    if (store_slug) {
      storeData();
    }
  }, [store_slug]);

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

  const topDescClick = () => {
    setTopDescState(!topDescState);
  };
  const tcOpenFun = () => {
    setTcOpenState(!tcOpenState);
  };
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px", position: "relative" }}>
        {store_data ? (
          <div>
            <div style={{ background: "#f1f1f1", padding: "70px 20px 20px" }}>
              <div
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  color: "#000",
                  padding: "32px 24px 24px",
                  background: "#fff",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  boxShadow: "1px 2px 29px -19px #000",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    background: "#fff",
                    position: "absolute",
                    top: "-42px",
                    padding: "16px",
                    borderRadius: "8px",
                    boxShadow: "4px 1px 36px 10px #f1f1f1",
                  }}
                >
                  <Link href={store_data.store_landing_url}>
                    <Image
                      width={100}
                      height={30}
                      style={{ width: "100%" }}
                      src={store_data.store_img}
                      alt="store image"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <p
                      className="p_tag_small top_desc_class "
                      style={{ height: topDescState ? "100%" : "113px" }}
                      dangerouslySetInnerHTML={{ __html: store_data.top_desc }}
                    ></p>
                    <p className="top_desc_class_bottom_p">
                      <button onClick={topDescClick} className="text_button">
                        {topDescState ? "Close" : "Read More"}{" "}
                      </button>
                    </p>
                  </div>
                  <div className="flex_center ">
                    <strong>{store_data.cashback_amount} </strong>
                    <BsInfoCircle
                      style={{
                        color: "#000",
                        fontSize: "13px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "10px 0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {store_data.is_cashback == 1 ? (
                      <>
                        <div>
                          <p
                            style={{ color: "#ad2323", fontSize: "14px" }}
                            className="p_tag_small"
                          >
                            <small>Confirmation Time</small>
                          </p>
                          <p
                            className="p_tag_small"
                            style={{ textAlign: "center", fontSize: "12px" }}
                          >
                            <small>{store_data.confirmation}</small>
                          </p>
                        </div>
                        <div>
                          <p
                            className="p_tag_small"
                            style={{ color: "#ad2323", fontSize: "14px" }}
                          >
                            <small>Tracking Speed</small>
                          </p>
                          <p
                            className="p_tag_small"
                            style={{ textAlign: "center", fontSize: "12px" }}
                          >
                            <small>{store_data.speed}</small>
                          </p>
                        </div>
                        <div>
                          <p
                            className="p_tag_small"
                            style={{ color: "#ad2323", fontSize: "14px" }}
                          >
                            <small>Missing Order</small>
                          </p>
                          <p
                            className="p_tag_small"
                            style={{ textAlign: "center", fontSize: "12px" }}
                          >
                            <small>{store_data.is_missing}</small>
                          </p>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>

              {storeRate ? (
                <div
                  style={{
                    marginTop: "22px",
                    padding: "20px 9px",
                    background: "#fff",
                    borderRadius: "5px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ textAlign: "center", position: "relative" }}
                    className="flex_space_between"
                  >
                    <p>
                      Cashback <strong>Rates</strong>
                    </p>
                    <button
                      onClick={tcOpenFun}
                      style={{ padding: "5px 15px" }}
                      className="contain_button"
                    >
                      {tcOpenState ? "Close" : "T & C"}
                    </button>
                    <div
                      style={{ display: tcOpenState ? "block" : "none" }}
                      className="tandc_box"
                    >
                      <div
                        className="tandc_contant"
                        dangerouslySetInnerHTML={{ __html: store_data.toc }}
                      ></div>
                    </div>
                  </div>
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
                          <div key={i + 1} style={{ display: "flex" }}>
                            <div
                              style={{
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
                              <small
                                style={{
                                  textAlign: "center",
                                  textTransform: "capitalize",
                                }}
                              >
                                {rate}
                              </small>
                            </div>
                            <div
                              style={{
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
                              <small
                                className="p_tag_small"
                                style={{ textTransform: "capitalize" }}
                              >
                                {tag_desc}
                              </small>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {storeRate && storeRate.length > 1 ? (
                    <div
                    className="flex_center"
                      style={{width:'100%'}}
                      
                    >
                      <button
                        onClick={moreStoreHandel}
                        className="text_button"
                      >
                        { 
                          storeRateMore ? "Close" :"More"
                        }
                      
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
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
            </div>
            <div style={{ paddingBottom: "25px" }}>
              <DealsAndCouponsStore  store_slug={store_slug}/>
            </div>
            <div
              style={{
                position: "Fixed",
                width: "100%",
                textAlign: "center",
                bottom: "0",
                left: "0",
                zIndex:"99",
                padding: "4px",
                background: "#fff",
              }}
            >
              {user ? (
                <Link href={store_data.store_landing_url}>
                  <button
                    className="full_with_button"
                    style={{ width: "100%", maxWidth: "600px", color: "#fff" }}
                  >
                    {store_data.is_claim == "1"
                      ? "Shope & earn More"
                      : "Shope Now"}
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  <button
                    className="full_with_button"
                    style={{ width: "100%", maxWidth: "600px", color: "#fff" }}
                  >
                    Login Now & Earn Cashback
                  </button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <style jsx>
        {`
          .top_desc_class {
            line-height: 22px;
            overflow: hidden;
            border: 1px solid #e2e2e2;
            padding: 5px;
            border-radius: 5px;
          }
          .top_desc_class_bottom_p {
            text-align: right;
          }
          .tandc_box {
            position: absolute;
            background: #fff;
            z-index: 12;
            box-shadow: 0px 2px 15px -1px gray;
            padding: 16px 10px;
            border-radius: 3px;
            
            top: 40px;
            max-height: 500px;
             overflow: auto;
            border-bottom: 6px solid var(--main-color);
          }
          .tandc_contant {
            line-height: 23px;
            text-align: left;
          }
          
        `}
      </style>
      <style>
        {`
      
      .tandc_contant ol li{
        font-size: 13px;
      margin-bottom: 4px;
      }
      .tandc_contant ol{
        margin-left: 14px;
      }
      .tandc_contant p{
        font-size: 14px;
        margin-bottom: 6px;
      }
      `}
      </style>
    </>
  );
};

export default StoreDetails;
