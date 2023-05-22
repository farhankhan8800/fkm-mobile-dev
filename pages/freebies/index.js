
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { freebiesAPI } from "service/API";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "components/utilites/Spinner";
import { useUserToken } from "service/customHooks";


const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE

const Freebies = () => {
  const [readMore, setReadMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [cate_data, setCate_data] = useState();
  const [offers_data, setOffers_data] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);

  const token = useUserToken()

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.post(
        freebiesAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          cate_slug: "earn-extra-cashback",
          page: page,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setCate_data(data.response.cate_data);
      
      if (data.response.offers_data.length == 0) {
        setNoData(true);
      } else {
        setOffers_data([...offers_data, ...data.response.offers_data]);
      }
    };
    getData();
  }, [token, page]);


  const readMoreBtn = () => {
    if (readMore === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  };

  const LodeMoreFun = () => {
    setPage(page + 1);
  };

  const accordionFun = (id) => {
    const panel = document.getElementById(`panel${id}`).classList;
    const accordion = document.getElementById(`accordion${id}`).classList;
    panel.toggle("activeTab");
    setExpanded(!expanded)
    accordion.toggle("accordionActive");
  };

  const headeTitle = "Freebies | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div className="topFreebise_page" style={{ paddingTop: "57px" }}>
        {cate_data ? (
          <div className="freebise_top_box">
            <h3 className="freebise_top_box_heading">
              {cate_data.offer_heading}
            </h3>
            <p
              className="freebise_top_box_p"
              style={{ height: readMore === true ? "100%" : "40px" }}
            >
              {cate_data.top_desc}
            </p>
            <div className="freebise_top_box_button">
              <button onClick={readMoreBtn}  className="text_button" type="button">
                {readMore === true ? "Close" : "Read More"}{" "}
              </button>
            </div>
          </div>
        ) : (
          <>
          <div style={{minHeight:"95vh"}}>
          <Spinner  />
          </div>
          </>
        )}

        <div className="accordion_section">
          {offers_data ? (
            <>
              {offers_data &&
                offers_data.map((item, i) => {
                  return (
                    <div key={i}>
                    <button
                      className={`accordion d_flex ${i==0? "accordionActive":""} ` }
                      id={`accordion${i}`}
                      onClick={() => accordionFun(i)}
                    >
                     <Image
                        src={item.store_image}
                        alt=""
                        width={80}
                        height={30}
                      />
                      <div style={{paddingLeft:"10px"}}>
                      <h5> {item.offer_title}</h5>
                      {item.is_cashback == 1 ? (
                              <>
                                <p
                                 className="p_tag_small"
                                 style={{color:"red"}} 
                                >
                                  {item.max_cashback} &nbsp; Cashback
                                </p>
                              </>
                            ) : (
                              ""
                            )}
                      </div>
                       
                    </button>
                    <div className={`panel ${i==0?"activeTab":""}`} id={`panel${i}`}>
                          <p
                            className="accordion_section_bottom_p"
                            dangerouslySetInnerHTML={{ __html: item.bottom_desc }}
                          ></p>
                          <div className="" style={{ padding: "5px 0 " }}>
                            <Link href={`/deals/${item.landing_url}`}>
                              <button
                                className="contain_button"
                                style={{color: "#fff",padding:" 4px 6px" }}
                              >
                                {" "}
                                {item.is_cashback == 1
                                  ? "Shop & Earn"
                                  : "Shop Now"}{" "}
                              </button>
                            </Link>
                          </div>
                    </div>
                  </div>
                  );
                })}
              <div style={{ textAlign: "center" }}>
                {noData ? (
                  "No More Found"
                ) : (
                  <button
                    onClick={LodeMoreFun}
                    className="contain_button"
                    style={{ color: "#fff" }}
                  >
                    Lode More
                  </button>
                )}
              </div>
            </>
          ) : ""}
        </div>
      </div>
      <style jsx>{`
      .accordion {
          background-color: #eee;
          color: #444;
          cursor: pointer;
          border-radius: 3px;
          padding: 13px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          border-bottom: 1px solid #e0dddd;
          font-size: 15px;
          transition: 0.4s;
          margin-bottom: 2px;
        }
        .panel.activeTab {
          display: block;
        }
        .accordion.active {
          background-color: #cdc6c6;
        }
        .panel {
          padding: 0 11px;
          background-color: #f5f4f4;
          font-size: 14px;
          line-height: 21px;
          display: none;
          margin-bottom: 10px;
        }
        .accordion.accordionActive {
          background: #cbd1ee;
        }

        .topFreebise_page {
          padding: 4px;
        }
        .freebise_top_box_p {
          height: 37px;
          overflow: hidden;
          font-size: 15px;
        }
        .freebise_top_box {
          text-align: center;
          padding-top: 20px;
        }
        .freebise_top_box h3 {
          font-size: 21px;
          padding: 0px 0 10px;
        }
        .accordion_section {
          padding-top: 20px;
        }
        .accordion_section p {
          font-size: 13px;
          line-height: 20px;
        }
        .accordion_section p.accordion_section_bottom_p {
          padding-top: 0px;
        }
        .accordion_section h4 {
          font-size: 15px;
          color: #040404;
          font-weight: 600;
          margin-top: 6px;
          text-align: justify;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
export default Freebies;
