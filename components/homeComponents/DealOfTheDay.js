import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import hotdealImage from "../../public/images/hot-sale.png";
import { Grid, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DealOfTheDay = (props) => {
  const [dealofday, setDealofday] = useState();
  useEffect(() => {
    setDealofday(props.dealofday);
  }, [props]);

  return (
    <>
      {dealofday?.length > 0 ? (
        <>
          <Grid container sx={{ padding: "13px 3px 3px" }}>
            <Grid item>
              <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
                <Image
                  src={hotdealImage}
                  alt="Hot Deal Of the Day"
                  width={29}
                  height={29}
                  style={{}}
                />
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h6">
                Deal <strong>Of The Day</strong>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ padding: "2px 10px" }}>
            <Swiper
              className="deal_of_the_day_component"
              slidesPerView={1.8}
              spaceBetween={10}
            >
              {dealofday &&
                dealofday.map((item, i) => {
                  const { count, image, inventry_id, is_active, link } = item;
                  return (
                    <SwiperSlide key={i}>
                      <a href={link}>
                        <Image
                          width={200}
                          height={100}
                          src={image}
                          alt="deal of the day"
                        />
                      </a>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DealOfTheDay;
