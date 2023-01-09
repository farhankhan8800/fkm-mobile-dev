import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import priceLabelImage from "../../public/images/price-label.png";
import {
  Grid,
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
} from "@mui/material";



const TrendingCoupons = (props) => {
const [trending_coupons, setTrending_coupons] = useState()

useEffect(()=>{
  setTrending_coupons(props.trending_coupons)
},[props])


  return (
    <>
      <Grid container sx={{ padding: "13px 3px 2px" }}>
        <Grid item>
          <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
            <Image
              width={29}
              height={29}
              src={priceLabelImage}
              alt="Hot Deal Of the Day"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h6">
           
            Trending <strong>Coupons</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{padding:"2px 10px"}}>
      <Swiper className="deal_of_the_day_component" 
        slidesPerView={3}
        spaceBetween={10}
      >
        {trending_coupons && trending_coupons.map((item, i) => {
          const {couponid,img_url,description}= item
       
          return (
            <SwiperSlide key={i}>
              <Card
                sx={{
                  height:"100px",
                  padding: "5px",
                  border: "1px solid #a19b9b",
                  borderRadius: "8px",
                }}
              >
                <Link
                  className="card_link"
                  style={{ borderRadius: "0" }}
                  href={`coupon/${couponid}`}
                
                >
                  <CardActionArea
                  sx={{textAlign:"center"}}
                  >
                    <Image
                      width={90}
                      height={30}
                      style={{ borderRadius: "0",width:"90px",height:"30px" }}
                      src={img_url}
                      alt="tranding Coupons"
                    />
                    <CardContent sx={{ padding: "5px 0 0" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#000",
                          padding: "4px 0 0",
                          fontSize: "12px",
                        }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </Box>
      
      <style jsx>{`
        .card_link {
          text-decoration: none;
          border-radius: 10px;
          width: 100%;
          display: inline-block;
          overflow: hidden;
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
        .view_count {
          position: absolute;
          top: 3px;
          left: 4px;
          padding: 3px;
          z-index: 100;
          background-color: #f27935;
          border-radius: 3px;
        }
        .view_count p {
          font-size: 12px;
          letter-spacing: 1px;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default TrendingCoupons;
