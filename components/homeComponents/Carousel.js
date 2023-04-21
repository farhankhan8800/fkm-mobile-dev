import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";



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
                    priority
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
        <div class="sk_carousel_card">
          <p></p>
        </div>
       </>
      }
      <style jsx>{`
     .sk_carousel_card{
        height: 9rem;
        box-shadow: 0 0 5px rgba(0,0,0,0.4);
        position: relative;
        margin: 10px 7px;
        border-radius: 7px;
        overflow: hidden;
      }
      .sk_carousel_card p:empty{
        width: 100%;
        height: 9rem;
        background-color: rgba(0,0,0,0.2);
        animation: skeleton-anim 1s infinite alternate;
      }
      @keyframes skeleton-anim{
        0%{opacity: 0.3}
        100%{opacity: 0.8}
      }
      `}</style>
    </div>
  );
};

export default Carousel;
