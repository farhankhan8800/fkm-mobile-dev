import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@mui/material";

const Carousel = (props) => {
  const [banner, setBanner] = useState();

  useEffect(() => {
    setBanner(props.bannerImg);
  }, [props, banner]);

  return (
    <div style={{ paddingTop: "56px" }}>
      <Swiper
        className="carousel_component"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {banner &&
          banner.map((item) => {
            const { app_landing_url, app_slider_image, slider_id } = item;
            return (
              <SwiperSlide key={slider_id}>
                <Link href={`deals/${app_landing_url}`}>
                  <Image
                    src={app_slider_image}
                    alt="banner product"
                    width={335}
                    height={140}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {
       !banner && <>
       <Skeleton variant="rectangular"  sx={{width:"95%",m:"10px", borderRadius:"7px"}} height={140} />
       </>
      }
    </div>
  );
};

export default Carousel;
