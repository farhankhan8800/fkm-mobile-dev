import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsFacebook, BsFillEyeFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import { GrMail } from "react-icons/gr";
import {
  AiFillPrinter,
  AiFillTwitterCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {articleDetailsAPI} from "service/API"



const Articels = () => {
   
  const [authToken, setAuthToken] = useState()
  const [articleDetails, setArticleDetails]= useState()
  const [articleHtml, setArticleHtml]= useState()

  const router = useRouter();
  const paramId  = router.query


  console.log(articleDetails)
  const apiAuth = process.env.API_AUTH;

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("user"))){
      setAuthToken(JSON.parse(localStorage.getItem("user")).token)
    }
  },[])

  useEffect(() => {

  const getArticles = async ()=>{
    try {
      let {data} = await axios.post(articleDetailsAPI,
        {
          apiAuth :apiAuth ,
          device_type : "4",
          article_slug : paramId.articles
        },
        {
          headers:{
            Authorization:authToken
          }
        })
        setArticleDetails(data)
        setArticleHtml(data.article_detail.description)
    } catch (error) {
      console.log(error)
    }
  }

  getArticles()
  }, [apiAuth, authToken, paramId]);

  const headeTitle = "Articels | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        {
          articleDetails ? <>
          <div className="articels_page_dynimic" style={{ padding: "15px 4px" }}>
          <div className="main_articels">
            <div className="" style={{ textAlign: "center" }}>
              <Image
                style={{ width: "100%", borderRadius: "8px" }}
                src={articleDetails.article_detail.article_image}
                alt=""
                height={200}
                width={350}
              />
            </div>
            <h2 className="main_heading">
            {articleDetails.article_detail.title}
            </h2>
            <div className="main_articels_details">
              <div>
                <p>
                  {" "}
                  <BsFillEyeFill /> <span>845835</span>
                </p>
                <p>
                  {" "}
                  <BiTime /> <span>{articleDetails.article_detail.update_time}</span>
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <FaUserAlt /> <span>{articleDetails.article_detail.author_title}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="articels_dynimic_bottom">
              <div className="share_Blog">
                <h3>Share This Blog</h3>
                <div className="social_icon">
                  <span>
                    <Link href="">
                      <AiFillTwitterCircle />
                    </Link>
                  </span>
                  <span>
                    <Link href="">
                      <AiFillPrinter />
                    </Link>
                  </span>
                  <span>
                    <Link href="">
                      <GrMail />
                    </Link>
                  </span>
                  <span>
                    <Link href="">
                      <AiFillPlusCircle />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="articels_dynimic_bottom_div">
                <div className="articels_dynimic_bottom_div_contant">
                  {
                     <div id="about_the_deals" className="about_the_deals" dangerouslySetInnerHTML={{__html: articleHtml}} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
          
          </>:"Loding.."
        }
        
      </div>
      <style jsx>{`
        figcaption {
          padding-top: 10px;
        }
        .main_articels {
          padding: 21px;
          -webkit-box-shadow: 0px 10px 11px 4px#ede7e7;
          -moz-box-shadow: 0px 10px 11px 4px#ede7e7;
          box-shadow: 0px 10px 11px 4px #ede7e7;
          background: #efefef;
          border-radius: 10px;
        }
        .main_heading {
          font-size: 20px;
          padding: 10px 0;
          word-spacing: 1px;
        }
        .main_articels_details {
          display: flex;
          color: #969696;
          flex-wrap: wrap;
          padding-top: 10px;
          align-items: center;
          justify-content: space-between;
        }
        .main_articels_details div:first-child {
          display: flex;

          align-items: center;
          justify-content: space-around;
        }
        .main_articels_details div:first-child p:nth-child(2) {
          padding: 0 17px;
        }
        .main_articels_details span {
          padding: 0 5px;
        }
        .articels_dynimic_bottom {
          padding: 18px 0;
        }
        .articels_dynimic_bottom .share_Blog h3 {
          color: gray;
          letter-spacing: 1px;
          font-size: 20px;
          font-weight: 100;
        }
        .articels_dynimic_bottom .share_Blog {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .articels_dynimic_bottom .share_Blog .social_icon span {
          font-size: 33px;
          margin: 8px;
          cursor: pointer;
        }
        .articels_dynimic_bottom .share_Blog .social_icon span a {
          color: "red";
        }
        .articels_dynimic_bottom_div .articels_dynimic_bottom_div_contant {
          background: #fff2e6;
          padding: 20px;
          border-radius: 4px;
        }
        .articels_dynimic_bottom_div .articels_dynimic_bottom_div_contant h3 {
          font-size: 21px;
          letter-spacing: 1px;
          word-spacing: 1px;
          margin-bottom: 10px;
          text-transform: capitalize;
        }
        .articels_dynimic_bottom_div .articels_dynimic_bottom_div_contant p {
          margin-bottom: 10px;
          line-height: 21px;
          word-spacing: 1px;
        }
        .bottom_contant_ {
          padding: 10px 20px;
        }
        .bottom_contant_ h3 {
          font-size: 19px;
          letter-spacing: 1px;
          word-spacing: 1px;
          margin-bottom: 10px;
          text-transform: capitalize;
        }
        .bottom_contant_ p {
          margin-bottom: 10px;
          line-height: 21px;
          word-spacing: 1px;
        }
      `}</style>
    </>
  );
};

export default Articels;
