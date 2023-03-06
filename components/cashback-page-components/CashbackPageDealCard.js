import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CashbackDealPageCard = ({cahsbackDeal}) => {
  const [dealData, setDealData] = useState()

  useEffect(()=>{
    setDealData(cahsbackDeal)
  },[cahsbackDeal])



  return (
    <>
    {
       dealData && dealData.map((item, i)=>{
return(<div key={i} className="store_wrapper deal_wrapper">
<Link href="cashback-deals">
  <div className="deal_img">
    <Image
      alt=""
      src={item.image_url}
      width={112}
      height={100}
    />
  </div>
  <Image
    alt=""
    src={item.store_img}
    width={92}
    height={32}
  />
  <div className="prize_tag_ab">
    {" "}
    <strong>{item.cahsback}</strong> 
  </div>
</Link>
<Typography
  fontSize={12}
  sx={{ margin: "7px 0", overflow: "hidden", height: "59px" }}
>
  {item.title}
</Typography>
</div>)
       })
    }
       
      <style jsx>{`
      .store_wrapper {
          background: #fff;
          width: 168px;
          height: 100px;
          margin: 10px 10px 30px 0;
          text-align: center;
          display: flex;
          align-items: center;
          box-shadow: 0px 3px 15px -6px #bbb7b7;
          justify-content: center;
          position: relative;
          justify-content: center;
        }
        .prize_tag_ab {
          font-size: 11px;
          position: absolute;
          background: linear-gradient(
            to right,
            rgb(231, 47, 54) 3%,
            rgb(242, 101, 34) 100%
          );
          color: #fff;
          bottom: -16px;
          left: 50%;
          word-wrap: no-wrap;
          padding: 11px;
          border-radius: 3px;
          letter-spacing: 1px;
          font-size: 10px;
          min-width: 120px;
          box-shadow: 0px 2px 12px 6px #dfdfdf;
          transform: translate(-50%, 0);
        }
        .store_wrapper.deal_wrapper {
          height: auto;
          flex-direction: column;
          padding: 10px;
        }
       
      `}</style>
    </>
  );
};

export default CashbackDealPageCard;
