import React, { useEffect, useState } from "react";
import couponImage from "../../public/images/coupon.png";

import {
  Grid,
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TopCoupons = (props) => {
  const [countBanner, SetCountBanner] = useState(10);
  const [top_coupons, setTop_coupons] = useState();

  useEffect(() => {
    setTop_coupons(props.top_coupons);
  }, [props]);
  const lodeMore = () => {
    SetCountBanner(countBanner + 4);
  };
  return (
    <>
      <div className="d_flex" style={{ padding: "13px 3px 2px" }}>
          <div style={{ width: "30px", marginRight: "10px" }}>
            <Image
              src={couponImage}
              alt="Hot Deal Of the Day"
              width={29}
              height={29}
              style={{ width: "100%" }}
            />
          </div>
          <h6 className="heading">
            Top <strong>Coupons</strong>
          </h6>
      </div>
      <div className="flex_div">
        {top_coupons &&
          top_coupons.map((item, i) => {
            const { img_url, couponid, description } = item;
            return (
              <div
                style={{ maxWidth: "167px", margin: "0px 5px 10px 5px" }}
                
                key={i}
              >
                <div
                 style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "140px",
                    padding: "5px",
                    border: "1px solid #a19b9b",
                    borderRadius: "8px",
                  }}
                >
                  <Link
                    style={{ borderRadius: "0" }}
                    className="card_link"
                    href={`/coupon-code/${couponid}`}
                  >
                    <div style={{ textAlign: "center" }}>
                      <Image
                        height={40}
                        width={90}
                        style={{ borderRadius: "0" }}
                        src={img_url}
                        alt=""
                      />
                      <div style={{ padding: "5px 5px 0" }}>
                        <p
                        className="p_tag_big"
                          style={{ color: "#000", padding: "4px 0" }}
                        >
                          {description}{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div style={{ padding:"10px", textAlign: "center" }}>
        <button
          onClick={lodeMore}
          style={{ color: "#fff", fontWeight: "600" }}
          className="contain_button"
        >
          Lode More
        </button>
      </div>
      <style jsx>
        {`
          .card_link {
            text-decoration: none;
            border-radius: 10px;
            width: 100%;

            display: inline-block;
            position: relative;
          }

          .card_amouunt {
            color: #000;
            font-weight: 900;
            font-size: 18px;
          }
          .card_small_amouunt {
            color: gray;
            margin-left: 15px;
            position: relative;
            font-size: 16px;
          }
          .card_small_amouunt::after {
            content: "";
            background-color: red;
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 9px;
            left: 0;
            transform: rotate(-10deg);
            border-radius: 10px;
          }

          .flex_div {
            padding: 6px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          .flex_div img {
            width: 100%;
          }
          .card_cashback {
            position: absolute;
            top: 0;
            right: 0;
            padding: 2px 5px;
            color: #fff;
            font-size: 10px;
            background-color: #f27932;
          }
        `}
      </style>
    </>
  );
};

export default TopCoupons;
