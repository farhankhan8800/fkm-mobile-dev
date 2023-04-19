import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import liveDealsImage from "../../public/images/live-streaming.png";
import { useEffect } from "react";
import { useState } from "react";

const LiveDeals = (props) => {
  const [deal, setDeal] = useState();
  
  useEffect(() => {
    setDeal(props.liveDeal);
  }, [props]);

  return (
    <>
      <div className="d_flex" style={{ padding: "13px 3px 3px",alignItems:"center" }}>
        <div >
          <div  style={{ width: "30px", marginRight: "10px" }}>
            <Image
              width={29}
              height={29}
              src={liveDealsImage}
              alt="Hot Deal Of the Day"
            />
          </div>
        </div>
        <div >
          <h6 className="heading">
            {" "}
            Live <strong className="strong_tag">Deals</strong>
          </h6>
        </div>
      </div>
      <div style={{ padding: "2px 10px" }}>
        <Swiper
          className="live_deals_component"
          slidesPerView={1.9}
          spaceBetween={12}
        >
          {deal &&
            deal.map((item, i) => {
              const { slug_url, views, img_hp_url, title, offer_price, price } =
                item;

              return (
                <SwiperSlide key={i}>
                  <div className="slider_card" style={{  }}>
                    <Link
                      className="Live_deal_card_link"
                      href={`deals/${slug_url}`}
                      rel="noopener"
                    >
                      <div className="view_count">
                        <p>{views} </p>
                      </div>
                      <div>
                        <div className="image_box">
                          <Image
                            className="image_box_image"
                            height={70}
                            width={100}
                            src={img_hp_url}
                            alt="live deals"
                          />
                        </div>

                        <div
                          style={{ padding: "7px" }}
                        >
                          <p
                          className="p_tag_small"
                          >
                            {title}
                          </p>
                          <div  style={{ paddingTop: "4px" }}>
                            <strong className="card_amouunt">
                              &#8377;{offer_price}
                            </strong>
                            <small className="card_small_amouunt">
                              &#8377;{price}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          {!deal && (<>
            <SwiperSlide>
            <div class="sk_livedeals_card">
              <p></p>
            </div>
            <div class="sk_livedeals_card_text">
             <p></p>
            </div>
            <div class="sk_livedeals_card_text">
             <p></p>
            </div>
            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
            <div class="sk_livedeals_card_button">
             <p></p>
            </div>
            <div class="sk_livedeals_card_button">
             <p></p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="sk_livedeals_card">
             <p></p>
            </div>
            <div class="sk_livedeals_card_text">
             <p></p>
            </div>
            <div class="sk_livedeals_card_text">
             <p></p>
            </div>
            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
            <div class="sk_livedeals_card_button">
             <p></p>
            </div>
            <div class="sk_livedeals_card_button">
             <p></p>
            </div>
            </div>
            </SwiperSlide>
          </>
          )}
        </Swiper>
      </div>

      <style jsx>
        {`
          

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
            
          }

          .card_amouunt {
            color: #000;
            font-weight: 900;
            font-size: 18px;
          }
          .card_small_amouunt {
            color: #222020;
            margin-left: 15px;
            position: relative;
            font-size: 15px;
          }
          .card_small_amouunt::after {
            content: "";
            background-color: red;
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 8px;
            left: 0;
            transform: rotate(359deg);
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
          p{
          color:  #474747;
          }
          .view_count p {
            font-size: 11px;
            color: #fff;
          }
          .slider_card{
            
            box-shadow: 0px 1px 18px -3px #d0d0d0;
            border: 1px solid #f1efef;
            border-radius: 7px;
            overflow: hidden;
          }
          
         
        `}
      </style>
      <style>{`
       .sk_livedeals_card{
        height: 4rem;
        box-shadow: 0 0 5px rgba(0,0,0,0.4);
        position: relative;
        border-radius: 7px;
        overflow: hidden;
          }
          .sk_livedeals_card p:empty{
            width: 100%;
            height: 4rem;
            background-color: rgba(0,0,0,0.2);
            animation: skeleton-anim 1s infinite alternate;
          }
          @keyframes skeleton-anim{
            0%{opacity: 0.3}
            100%{opacity: 0.8}
          }
          .sk_livedeals_card_text{
            height: 1rem;
            box-shadow: 0 0 5px rgba(0,0,0,0.4);
            position: relative;
            border-radius: 7px;
            overflow: hidden;
            margin-top: 8px;
          }
          .sk_livedeals_card_text p:empty{
            width: 100%;
            height: 1rem;
            background-color: rgba(0,0,0,0.2);
            animation: skeleton-anim 1s infinite alternate;
          }
          .sk_livedeals_card_button{
            height: 1.6rem;
            box-shadow: 0 0 5px rgba(0,0,0,0.4);
            position: relative;
            border-radius: 7px;
            overflow: hidden;
            margin-top: 8px;
            width: 26%;
            margin-right: 10px;
          }
          .sk_livedeals_card_button p:empty{
            width: 100%;
            height: 1.6rem;
            background-color: rgba(0,0,0,0.2);
            animation: skeleton-anim 1s infinite alternate;
          }
      `}</style>
    </>
  );
};

export default LiveDeals;
