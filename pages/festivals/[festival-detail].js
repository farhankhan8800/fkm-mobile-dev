import React, { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE; 

const FestivalDetail = () => {
  const [userToken, setUserToken] = useState();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);
 


  const router = useRouter();
  const dealSlug = router.query["festival-detail"];

  console.log(dealSlug)

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
              Authorization: userToken,
            },
          }
        );
       
      } catch (error) {
        console.log(error);
      }
    };

   
  }, [userToken]);

  const readmoreFunction = () => {
    if (readMore == true) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  const headeTitle = "Festivals Offer | Freekaamaal";

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
            <Link underline="hover" color="inherit" href="/festivals">
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
                <Typography color={"#000"} fontSize={13}>
                  Amazon Diwali Sale 2022
                </Typography>
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
                <Typography color={"#000"} fontSize={13}>
                  Amazon Diwali Sale 2022
                </Typography>
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

export default FestivalDetail;
