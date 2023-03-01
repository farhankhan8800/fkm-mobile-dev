import React, { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import Spinner from "components/Spinner";
import Error404 from "pages/404";

const DiwaliOffers = () => {
  const [userToken, setUserToken] = useState();
  const [noData, setNoData] = useState(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);
  const router = useRouter();
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
            src="https://images.freekaamaal.com/common-images/M-headerBanner10-9-19.jpg"
          />
        </div>
        <div className="breadcrumb_fastivals_offer_page">
          <Breadcrumbs sx={{ fontSize: "13px" }} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="">
              Fastivals
            </Link>
            <Typography sx={{ fontSize: "13px" }} color="text.primary">
              Diwali Offers
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="fastival_top_content_box">
          <Typography
            variant="h4"
            fontSize={18}
            fontWeight={"bolder"}
            component="h6"
          >
            Diwali Offers
          </Typography>
          <Typography
            sx={{ height: readMore ? "100%" : "140px", overflow: "hidden" }}
            fontSize={14}
          >
            The festive season has begun, and it is time to shop and save with
            Diwali offers. People eagerly wait for the Diwali sale to start
            their festive shopping. With the Diwali offers of top online stores,
            you get discounts on everything - electronics, appliances, fashion,
            daily essentials etc. If you are looking for the best deals this
            festive season, your search ends with FreeKaaMaal. Here on this
            page, you will get Diwali offers across all categories such as
            mobiles, electronics, fashion, accessories and more. We handpick the
            top offers from leading stores to ensure you pay the lowest price.
            The handpicked deals make your festive shopping more affordable. Get
            up to 80% off across all categories with Diwali offers online.
          </Typography>
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={readmoreFunction}
              type="button"
              size="small"
              variant="text"
            >
              {readMore ? "close" : "Read More"}
            </Button>
          </div>
        </div>
        <div className="fastivals_articles_box">
          <Typography
            variant="h4"
            fontSize={19}
            fontWeight={"bolder"}
            component="h6"
            marginBottom={1}
          >
            Diwali Article
          </Typography>
          <div className="fastival_article_wrapper">
            <Link href="/">
              <Image
                src="https://images.freekaamaal.com/common-images/M-topCoupons14-10-19.jpg"
                width={200}
                height={100}
                alt=""
              ></Image>
            </Link>

            <div className="fastival_article_contant">
              <Typography fontSize={14}>
                Top 10 Diwali Coupons for Gifts, Travel and More
              </Typography>
              <Link style={{ fontSize: "12px" }} href="">
                Read Article
              </Link>
            </div>
          </div>
        </div>
        <div className="fastivals_Couppon_section">
          <Typography
            variant="h4"
            fontSize={19}
            fontWeight={"bolder"}
            component="h6"
            marginBottom={1}
          >
            Diwali Coupons
          </Typography>
          <div className="fastival_Couppon_box">
            <div className="fastival_Couppon_wrapper">
              <div className="fastival_Couppon_div1">
                <Typography
                  variant="h2"
                  fontWeight={"bolder"}
                  component="h4"
                  fontSize={25}
                  color={"red"}
                  sx={{ height: "82px" }}
                  textTransform={"capitalize"}
                >
                  Lab Test New Offer
                </Typography>
                <Typography>
                  Flat Rs.499 off on Swift Health Checkup (45+ Tests) worth
                  Rs.999
                </Typography>
              </div>
              <div className="fastival_Couppon_div2">
                <Image
                  src="https://images.freekaamaal.com/store-images/4111.jpg"
                  width={50}
                  height={30}
                  alt=""
                ></Image>
              </div>
              <div className="fastival_Couppon_div3">
                <span>
                  <StarIcon sx={{ fontSize: "12px" }} />
                </span>
                <span>
                  <StarIcon sx={{ fontSize: "12px" }} />
                </span>{" "}
                <span>
                  <StarIcon sx={{ fontSize: "12px" }} />
                </span>
                <span>
                  <StarIcon sx={{ fontSize: "12px" }} />
                </span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ color: "#fff" }} size="small">
              View More Coupons
            </Button>
          </div>
        </div>
        <div className="fastival_store_section">
          <Typography
            variant="h4"
            fontWeight={"bolder"}
            component="h4"
            color={"#fff"}
            letterSpacing={1}
            fontSize={19}
            style={{ padding: "10px 0" }}
          >
            Diwali Sale 2021
          </Typography>
          <div className="fastival_store_box">
            <div className="fastival_store_wrapper">
              <Image
                alt=""
                src="	https://images.freekaamaal.com/store-images/1.jpg"
                width={92}
                height={30}
              />
              <Link href="">
                <Typography color={"#000"} fontSize={13}>Amazon Diwali Sale 2022</Typography>
              </Link>
            </div>
            <div className="fastival_store_wrapper">
              <Image
                alt=""
                src="	https://images.freekaamaal.com/store-images/1.jpg"
                width={92}
                height={30}
              />
              <Link href="">
                <Typography color={"#000"} fontSize={13}>Amazon Diwali Sale 2022</Typography>
              </Link>
            </div>
          </div>
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
          .fastivals_Couppon_section,
          .fastivals_articles_box {
            max-width: 95%;
            padding: 10px 0;
            margin: auto;
          }
          .fastival_article_wrapper {
            background: #fff;
            padding: 9px;

            box-shadow: 0px 2px 12px 2px #e6e6e6;
            display: flex;
          }
          .fastival_article_wrapper .fastival_article_contant {
            margin-left: 10px;
          }
          .fastival_Couppon_wrapper {
            background: #fff;
            text-align: center;
            border-radius: 6px;
            box-shadow: 0px 4px 7px -3px #d9d9d9;
          }
          .fastival_Couppon_div1 {
            position: relative;
            padding: 38px 10px;
            border-bottom: 3px dotted #d0cdcd;
          }
          .fastival_Couppon_div1::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #edf4fb;
            left: -20px;
            bottom: -27px;
          }
          .fastival_Couppon_div1::before {
            content: "";
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #edf4fb;
            right: -20px;
            bottom: -27px;
          }
          .fastival_Couppon_div2 {
            padding: 26px;
          }
          .fastival_Couppon_div3 {
            position: absolute;
            background: #edf4fb;
            width: 150px;
            height: 48px;
            bottom: -30px;
            overflow: hidden;
            border: 1px solid #c6c5c5;
            left: 50%;
            transform: translate(-50%, 0);
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 15px;
          }
          .fastival_Couppon_div3 span {
            color: #fff;
            z-index: 1;
          }
          .fastival_Couppon_div3:after {
            background: green;
            content: "";
            position: absolute;
            height: 100%;
            width: 50%;
            left: 0px;
          }
          .fastival_Couppon_div3:before {
            background: green;
            content: "";
            position: absolute;
            height: 100%;
            width: 74%;
            transform: rotate(45deg);
            left: 10px;
            bottom: 0;
          }
          .fastival_Couppon_box {
            position: relative;
            margin-bottom: 60px;
          }
          .fastival_store_section {
            background: #697988 !important;
            margin: 20px 0 30px;
            width: 100%;
            padding: 0 15px !important;
          }
          .fastival_store_box {
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
            text-align: center;
          }
          .fastival_store_wrapper {
            background: #fff;
            padding: 16px 19px;
            margin: 10px;
            border-radius: 6px;
          }
        `}
      </style>
    </>
  );
};

export default DiwaliOffers;
