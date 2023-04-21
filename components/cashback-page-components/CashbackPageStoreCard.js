import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CashbackStorePageCard = ({cahsbackstore}) => {
  const [storeData, setStoreData] = useState()

  useEffect(()=>{
    setStoreData(cahsbackstore)
  },[cahsbackstore])

  return (
    <>
    {
      storeData && storeData.map((item, i)=>{
        // eslint-disable-next-line react/jsx-key
        return(
        <div key={i} className="store_wrapper">
        <Link href="">
          <div className="store_wrapper_item">
            <p className="store_name">{item.name}</p>
            <Image
              alt=""
              src={item.img_url}
              width={92}
              height={32}
            />
          </div>
          <div className="prize_tag_ab">
            {" "}
            <strong>{item.cahsback}</strong>
          </div>
        </Link>
      </div>)
      }) 
    }
      
      <style jsx>{`
        .store_wrapper:hover .store_name {
          border-bottom: 1px solid #7d7dc6;
        }
        .store_name {
          border-bottom: 1px solid transparent;
          padding: 3px;
          display: inline-block;
          margin-bottom: 21px;
        }
        .store_wrapper {
          background: #fff;
          width: 168px;
          height: 150px;
          margin: 10px 10px 30px 0;
          text-align: center;
          display: flex;
          align-items: center;
          box-shadow: 0px 3px 15px -6px #bbb7b7;
          justify-content: center;
          position: relative;
          justify-content: center;
        }
        .store_wrapper p {
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
        .store_wrapper_item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
       
      `}</style>
    </>
  );
};

export default CashbackStorePageCard;
