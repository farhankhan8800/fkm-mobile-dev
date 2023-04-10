import React, { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

import { festivalAPI } from "service/API";
import axios from "axios";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Festivals = () => {
  const [readMore, setReadMore] = useState(false);
  const [authToken, setUserToken] = useState();
  const [Festivaldata, setFestivaldata] = useState();
  const [Festivalstore, setFestivalstore] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);
  const router = useRouter();

  useEffect(() => {
    const getFestival = async () => {
      try {
        const { data } = await axios.post(
          festivalAPI,
          {
            apiAuth: apiAuth,
            device_type: DEVICE_TYPE,
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
        setFestivaldata(data);
        setFestivalstore(data.response.festivals)
      } catch (error) {
        console.log(error);
      }
    };

    getFestival();
  }, [authToken]);
  const readmoreFunction = () => {
    if (readMore == true) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  const headeTitle = "Diwali Offers | Freekaamaal";

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div
        style={{
          paddingTop: "56px",
          background: "#edf4fb",
          minHeight: "100vh",
          overflow: "hidden",
        }}
        className="fastivals_offer_page"
      >
        <div className="fastivals_offer_top">
          <Image
            width={300}
            height={97}
            style={{ width: "100%" }}
            alt="fastivals_offer"
            src="https://images.freekaamaal.com/common-images/all_festival_offer_mobile.jpg"
          />
        </div>
        <div className="breadcrumb_fastivals_offer_page">
          <div className="d_flex" style={{ fontSize: "13px" }} >
            <Link style={{padding:"1px 5px" }} href="/">
              Home
            </Link>
            /
            <p className="p_tag_small" style={{ fontSize: "13px",padding:"1px 5px" }} >
              Fastivals
            </p>
          </div>
        </div>
        <div className="fastival_top_content_box">
          <h5 
          className=""
           style={{ fontSize:"18px",
           fontWeight:"bolder",
           paddingBottom:"10px"
          }}
          >
            {Festivaldata ? Festivaldata.response.topheading : ""}
          </h5>
          <p
            style={{ height: readMore ? "100%" : "140px", overflow: "hidden",    lineHeight: "20px" }}
            className="p_tag_big"
          >
            {Festivaldata ? Festivaldata.response.topdesc : ""}
          </p>
          <div style={{ textAlign: "right" }}>
            <button
              onClick={readmoreFunction}
              type="button"
              
              className="text_button"
            >
              {readMore ? "close" : "Read More"}
            </button>
          </div>
        </div>

        <div className="fastivals_articles_box">
          <h4
           style={{paddingBottom:"10px",
           fontSize:"20px"
          }}

          >
            Popular Festival Sales of 2021
          </h4>
          <div className="fastival_article_store_box_wraper">
            {
              Festivalstore && Festivalstore.map((item,i)=>{
                 return (
                  <div className="fastival_article_store_box" key={i}>
                  <Link href={`/festivals/${item.slug}`}>
                    <Image
                      src={item.image}
                      width={200}
                      height={100}
                      style={{width:"100%"}}
                      alt=""
                    ></Image>
                  </Link>
                  <p className="store_title" fontSize={14}>
                   {item.title}
                  </p>
                </div>
                 )
              })
            }
          
          </div>
        </div>

        <div className="fastival_top_content_box">
          <h6 className="heading"
            style={{fontSize:"18px",
            fontWeight:"bold",
            paddingBottom: "13px"
            }}
            
          >
            {Festivaldata ? Festivaldata.response.bottomheading : ""}
          </h6>
          <p fontSize={14}>
            {Festivaldata ? Festivaldata.response.bottomdesc : ""}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .breadcrumb_fastivals_offer_page {
            padding: 5px;
          }
          .fastival_top_content_box {
            max-width: 95%;
            margin-top: 10px;
            margin: auto;
            background: #fff;
            margin-top: 10px;
            padding: 10px;
            border-radius: 5px;
          }

          .fastivals_articles_box {
            max-width: 95%;
            padding: 10px 0;
            margin: auto;
          }
          .fastival_article_wrapper {
            background: #fff;
            padding: 9px;
            box-shadow: 0px 2px 12px 2px #e6e6e6;
          }
          .fastival_article_store_box_wraper .fastival_article_store_box {
            position: relative;
            text-align: center;
            border: 1px solid#d1ccccbd;
            padding: 10px;
            margin: 10px;
            padding-bottom: 40px;
            margin-bottom: 33px;
            flex-basis: 45%;
            margin-top: 15px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            -webkit-box-shadow: 0px 4px 17px -4px#bdbdbd;
            -moz-box-shadow: 0px 4px 17px -4px#bdbdbd;
            box-shadow: 0px 4px 17px -4px#bdbdbd;
          }
          .fastival_article_store_box_wraper
            .fastival_article_store_box
            .store_title {
            position: absolute;
            width: 80%;
            padding: 10px;
            -webkit-box-shadow: 1px 2px 16px -3px gray;
            -moz-box-shadow: 1px 2px 16px -3px gray;
            box-shadow: 1px 2px 16px -3px gray;
            z-index: 1;
            background: #fff;
            bottom: -17px;
            left: 50%;
            font-size:13px;
            transform: translate(-50%, 0px);
          }
          .fastival_article_store_box_wraper{
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
          }
          @media screen and (max-width: 420px){
            .fastival_article_store_box_wraper .fastival_article_store_box {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Festivals;
