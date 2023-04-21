import React, { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { OneFestivalAPI } from "service/API";
import axios from "axios";
import { useUserToken } from "service/customHooks";


const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const FestivalDetail = () => {

  const [readMore, setReadMore] = useState(false);
  const [ festivalInfo ,setFestivalInfo] = useState()
  const [article, setArticle] = useState([])
  const [store, setStore] = useState([])


 const userToken = useUserToken();

  const router = useRouter();
  const dealSlug = router.query["festival-detail"];

  useEffect(() => {
    const getFestival = async () => {
      try {
        const { data } = await axios.post(
          OneFestivalAPI,
          {
            apiAuth: apiAuth,
            device_type: DEVICE_TYPE,
            festivalslug:dealSlug
          },
          {
            headers: {
              Authorization: userToken,
            },
          }
        );

        setFestivalInfo(data.response.festivalinfo)
        setArticle(data.response.article)
       
        setStore(data.response.stores)
        

    
      } catch (error) {
        console.log(error);
      }
    };

    getFestival()
  }, [userToken,dealSlug]);

  const readmoreFunction = () => {
    if (readMore == true) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  const headeTitle = "Festivals Offer | Freekaamaal";
  console.log(store)


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
          <div className="d_flex" style={{ fontSize: "13px" }}>
            <Link style={{ padding: "1px 5px" }} href="/">
              Home
            </Link>
            /
            <Link style={{ padding: "1px 5px" }} href="/">
              Fastivals
            </Link>
            /
            <p
              className="p_tag_small"
              style={{ fontSize: "13px", padding: "1px 5px",textTransform:"capitalize"}}
            >
              {festivalInfo ? festivalInfo.name :""}
            </p>
          </div>
        </div>
        <div className="fastival_top_content_box">
          <h6 style={{ fontSize: "18px", fontWeight: "bolder", marginBottom:"10px", textTransform:"capitalize"}}>
          {festivalInfo ? festivalInfo.name :""}
          </h6>
          <p
            style={{ height: readMore ? "100%" : "140px", overflow: "hidden" }}
            fontSize={14}
            dangerouslySetInnerHTML={{__html:festivalInfo ? festivalInfo.description:"" }}
          >
            
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
           style={{fontSize:"19px",fontWeight:"bolder",marginBottom:"8px", textTransform:"capitalize"}}
          >
           {festivalInfo ? festivalInfo.name :""} Article
          </h4>
          <div>
            {
              article && article.map((item , i)=>{
                return (

            <div className="fastival_article_wrapper" key={i}>
            <Link href={`/${item.base_url}`}>
              <Image
                src="https://images.freekaamaal.com/common-images/M-topCoupons14-10-19.jpg"
                width={200}
                height={100}
                alt=""
              ></Image>
            </Link>

            <div className="fastival_article_contant">
              <p style={{fontSize:"14px"}}>
              {item.title}
              </p>
              <Link style={{ fontSize: "12px" }}  href={`/${item.base_url}`}>
                Read Article
              </Link>
            </div>
           </div>
                )
              })
            }
          </div>
        </div>
        <div className="fastival_store_section">
          <div
            style={{ padding: "10px 0", fontSize:"19px", letterSpacing:"1.47",
             color:"#fff",fontWeight:"bloder", textTransform:"capitalize"
          }}
          >
              {festivalInfo ? festivalInfo.name :""} Sale 2023
          </div>
          <div className="fastival_store_box">
            {
              store && store.map((item , i)=>{
                return(
             <div className="fastival_store_wrapper" key={i}>
              <Image
                alt=""
                src="	https://images.freekaamaal.com/store-images/1.jpg"
                width={92}
                height={30}
              />
              <Link href="">
                <p style={{color:"#000", fontSize:"12px"}}>
                {item.name}   {festivalInfo ? festivalInfo.name :""} Sale 2023
                </p>
              </Link>
            </div>
                )
              })
            }
            
           
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
            flex-wrap: wrap;
            text-align: center;
          }
          .fastival_store_wrapper {
            background: #fff;
            padding: 16px 19px;
            min-width: 200px;
            margin: 10px;
            border-radius: 6px;
          }
        `}
      </style>
    </>
  );
};

export default FestivalDetail;
