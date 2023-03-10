import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import liveDealsImage from "../../public/images/live-streaming.png";
import {
  Grid,
  Box,
  Typography,
  CardActionArea,
  CardContent,
  Card,
  Skeleton,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const LiveDeals = (props) => {
  const [deal, setDeal] = useState();
  useEffect(() => {
    setDeal(props.liveDeal);
  }, [props]);

  return (
    <>
      <Grid container sx={{ padding: "13px 3px 3px" }}>
        <Grid item>
          <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
            <Image
              width={29}
              height={29}
              src={liveDealsImage}
              alt="Hot Deal Of the Day"
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h6">
            {" "}
            Live <strong className="strong_tag">Deals</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ padding: "2px 10px" }}>
        <Swiper
          className="live_deals_component"
          slidesPerView={2}
          spaceBetween={10}
        >
          {deal &&
            deal.map((item, i) => {
              const { slug_url, views, img_hp_url, title, offer_price, price } =
                item;

              return (
                <SwiperSlide key={i}>
                  <Card sx={{ height: "190px" }}>
                    <Link
                      className="card_link"
                      href={`deals/${slug_url}`}
                      rel="noopener"
                    >
                      <div className="view_count">
                        <p>{views} </p>
                      </div>
                      <CardActionArea>
                        <div className="image_box">
                          <Image
                            className="image_box_image"
                            height={70}
                            width={100}
                            src={img_hp_url}
                            alt="live deals"
                          />
                        </div>

                        <CardContent
                          sx={{ background: "#f1f1f16b", padding: "7px" }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#000",
                              padding: "4px 0",
                              fontSize: "11px",
                            }}
                          >
                            {title}
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
                </SwiperSlide>
              );
            })}
          {!deal && (<>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: "7px" }}
                height={100}
              />
              <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
              <Grid container columnSpacing={1}>
                  <Grid item xs={7}>
                  <Skeleton   variant="text" sx={{ fontSize: '2rem' }} />
                  </Grid>
                  <Grid  xs={5}item>
                  <Skeleton   variant="text" sx={{ fontSize: '2rem' }} />
                  </Grid>
                 </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: "7px" }}
                height={100}
              />
              <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
              <Grid container columnSpacing={1}>
                  <Grid item xs={7}>
                  <Skeleton   variant="text" sx={{ fontSize: '2rem' }} />
                  </Grid>
                  <Grid  xs={5}item>
                  <Skeleton   variant="text" sx={{ fontSize: '2rem' }} />
                  </Grid>
                 </Grid>
            </SwiperSlide>
          </>
          
          )}
        </Swiper>
      </Box>

      <style jsx>
        {`
          .card_link {
            text-decoration: none;
            border-radius: 10px;
            width: 100%;
            height: 190px;
            display: inline-block;
            overflow: hidden;
            position: relative;
          }

          .strong_tag {
            font-weight: 900;
          }
          .image_box_image {
            width: 168px;
          }
          .image_box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 16px;
            padding-bottom: 7px;
            background: #f1f1f16b;
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
            font-size: 10px;
            color: #fff;
          }
        `}
      </style>
    </>
  );
};

export default LiveDeals;
