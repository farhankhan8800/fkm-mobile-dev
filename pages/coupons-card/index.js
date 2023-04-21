import Link from "next/link";

import { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";


const CouponsCade = (props) => {
  const [coupons, setCoupons] =  useState()

  useEffect(()=>{
    setCoupons(props.couponCard)
  
  },[props])

//  console.log(coupons)
  return (
    <div>
      {
       coupons && coupons.map((item, i)=>
       <Link key={i+1} href={`/coupon-code/${item.coupon_id}`}>
        <div 
                
                style={{
                  padding: "15px 0px 0",
                  border: "1px solid #e1dada",
                  overflow: "hidden",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                
                <div style={{ padding: "0 15px" }}>
                  <p style={{color:"black",  fontWeight:"bold"}}>
                    {item.description}
                  </p>
                  <div
                 style={{ padding: "10px 0",  justifyContent:"space-between",
                 alignItem:"center"}}
                 className="d_flex"
                   
                  >
                    <div >
                     {
                      item.coupon_code?<Link href={`${item.shop_url}`} style={{ color: "#f27935",display:"inline-block",position:"relative" }}>
                      <span className="star_code_dot">
                      &#9733; &#9733; &#9733; &#9733;
                      </span>
                     <span className="mask_code">
                     {item.coupon_code}
                     </span>
                    </Link>:""
                     }
                    </div>
                    <div >
                      <p
                      className="d_flex"
                       style={{ justifyContent:"center",
                       color:"gray",
                       alignItems:"center"
                      }}
                      >
                        <BiTimeFive fontSize="17px" />{" "}
                        <small>{item.expiry}</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                 
                  style={{ padding: "1px 10px", background: "#f5f1f1" }}
                >
                  <div className="d_flex" style={{justifyContent:"space-around", alignItem:"center"}}>
                    <div >
                      <button style={{ color: "gray", textTransform: "capitalize" }}>
                        <AiFillEye  style={{ marginRight: "7px",fontSize:"18px" }} />{" "}
                        2k views
                      </button>
                    </div>
                    <div >
                      <button style={{ color: "gray", textTransform: "capitalize" }}>
                        <AiFillHeart  style={{ marginRight: "7px",fontSize:"18px" }} /> 10
                        Likes
                      </button>
                    </div>
                    <div >
                      <button style={{ color: "gray", textTransform: "capitalize" }}>
                        <BsFillShareFill  style={{ marginRight: "7px",fontSize:"18px" }} /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                </Link>
                 

        )
      }
     
      <style jsx>
        {`
          .tabsList::-webkit-scrollbar {
            display: none;
          }
          .cash_back_store_offer {
            text-align: center;
            color: #000;
            padding: 1px 2px;

            font-size: 15px;
          }
          .cash_back_store_link {
            text-decoration: none;
          }
          .mask_code{
            position: relative;
            overflow: hidden;
            width: 100%;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            display: inline-block;
            padding: 7px 22px;
            border: 3px dotted gray;
          }
         .mask_code:after{
          width: 51%;
          background-color: #41a916;
          z-index: 10;
          height: 46px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          left: -3px;
          content: "";
          top: -4px;
          position: absolute;

          } 
          .mask_code:before{
            background-color: #41a916;
            content: "";
            z-index: 10;
            height: 71px;
            width: 58%;
            top: -3px;
            position: absolute;
            right: 33px;
            -webkit-transform: rotate(328deg);
            -moz-transform: rotate(328deg);
            -ms-transform: rotate(328deg);
            -o-transform: rotate(328deg);
            transform: rotate(328deg);

          }
          .star_code_dot{
            position: absolute;
            z-index: 11;
            color: #fff;
            font-size: 13px;
            top: 7px;
            left: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default CouponsCade;
