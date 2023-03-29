import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import hotdealImage from "../../public/images/hot-sale.png";
import { Grid, Box, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const DealOfTheDay = (props) => {
  const [dealofday, setDealofday] = useState();
  useEffect(() => {
    setDealofday(props.dealofday);
  }, [props]);


  // console.log(dealofday)
  return (
    <>
      {dealofday?.length > 0 ? (
        <>
          <div className="flex_start" style={{ padding: "13px 3px 3px"}}>
            <div >
              <div  style={{ width: "30px", marginRight: "10px" }}>
                <Image
                  src={hotdealImage}
                  alt="Hot Deal Of the Day"
                  width={29}
                  height={29}
                  style={{}}
                />
              </div>
            </div>
            <div  >
              <h6 className="heading" >
                Deal <strong>Of The Day</strong>
              </h6>
            </div>
          </div>
          <Box sx={{ padding: "2px 10px" }}>
            <Swiper
              className="deal_of_the_day_component"
              slidesPerView={1.8}
              spaceBetween={10}
            >
              {dealofday &&
                dealofday.map((item, i) => {
                  const {  image, option, slug_url
                  } = item;
                  return (
                    <SwiperSlide key={i}>
                      <Link href={option =="deal"? `/deals/${slug_url}`:slug_url}>
                        <Image
                          width={200}
                          height={100}
                          src={image}
                          alt="deal of the day"
                        />
                      </Link>
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
