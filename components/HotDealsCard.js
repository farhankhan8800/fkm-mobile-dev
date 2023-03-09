import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";


const HotDealsCards = (props) => {
  const [hotDeals, SethotDeals] = useState(null);
  
  useEffect(()=>{
    //  SethotDeals(props.hotdeals)
  },[props])

  return (
    <>
     
      <div className="flex_div">
        {
          hotDeals ? <>
           {hotDeals && hotDeals.map((item, i) => {
          const {is_cashback,deal_image,slug_url,deal_slug,title,store_img_url:store_image, deal_title, offer_price, price}= item;

         
         
          return (
            <Box
              sx={{ maxWidth: "154px", margin: "7px" }}
              component="div"
              key={i}
            >
              <Card
                sx={{
                  background: "#f1f1f16b",
                  border: "1px solid #f1f1f16b",
                  position: "relative",
                  boxShadow: "none",
                }}
              >
                <Link
                  className="card_link"
                  href={slug_url? `/deals/${slug_url}`:`/deals/${deal_slug}`}
                >
                  <span>{is_cashback == "1" ? <span className="card_cashback">Cashback</span>:<span></span>}</span>
                
                  <CardActionArea>
                    <Box component="div" sx={{ padding: "23px 21px 0px" }}>
                      <Image
                        src={deal_image}
                        alt='FreeKaaMaal Product'
                        height={92}
                        width={120}
                        style={{ borderRadius: "7px" }}
                      />
                    </Box>
                    <CardContent
                      sx={{ background: "#f1f1f16b", padding: "7px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#000", marginBottom: "0", fontSize:"15px"}}
                      >
                        <Image
                        src={store_image}
                        alt='FreeKaaMaal Product'
                        height={17}
                        width={50}
                        style={{ borderRadius: "7px" }}
                      />
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#000",
                          padding: "4px 0",
                          fontSize: "11px",
                        }}
                      >
                        {deal_title ? deal_title :  title }{" "}
                      </Typography>
                      <Box component="div" sx={{ paddingTop: "4px" }}>
                        <strong className="card_amouunt">
                          &#8377;{offer_price}
                        </strong>
                        <small className="card_small_amouunt">
                          &#8377;{price}
                        </small>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Box>
          );
        })}
          </>:""
        }
      </div>
      {
          !hotDeals && 
              <div className="Skeleton_hotDeal_card"> 
                <div className="Skeleton_hotDeal_card_wrapper">
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "7px",}}
                  height={120}   />
                 <Skeleton variant="text"  sx={{ fontSize: '3rem' }} />
                 <Skeleton variant="text"   sx={{ fontSize: '2rem' }} />
                </div>
              
                <div className="Skeleton_hotDeal_card_wrapper">
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "7px", }}
                   height={120} />
                 <Skeleton   variant="text" sx={{ fontSize: '3rem' }} />
                 <Skeleton   variant="text" sx={{ fontSize: '2rem' }} />
                </div>

              </div>
        }
      <style jsx>{`
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
        .Skeleton_hotDeal_card{
          display:flex;
          width:100%;
          justify-content: center;
          flex-wrap: wrap;
        }
        .Skeleton_hotDeal_card_wrapper{
          width:45%;
          padding:5px;
        }
      `}</style>
    </>
  );
};

export default HotDealsCards;
