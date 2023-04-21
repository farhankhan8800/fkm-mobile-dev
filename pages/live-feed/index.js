import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { livefeed_detailAPI } from "service/API";
import { useRouter } from "next/router";
import Spinner from "components/utilites/Spinner";
import Error404 from "pages/404";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;

const LiveFeed = () => {
  const [topStore, setTopStore] = useState();
  const [feed_banner, setFeed_banner] = useState();
  const [feedStore, setfeedStore] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);

  
  const userToken = useUserToken()
  const DEVICE_TYPE = process.env.DEVICE_TYPE;
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.post(
        livefeed_detailAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          cate_slug: "amazon-summer-sale",
          page: page,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );
      console.log(data.response.cate_data);
      if (data.response.cate_data.length == 0) {
        return router.push("/404")
      } else {
        setFeed_banner(data.response.cate_data);
      }

      setTopStore(data.response.stores_data);
      setNoData(false);
      if (data.response.feed_data.length == 0) {
        setNoData(true);
      } else {
        setfeedStore([...feedStore, ...data.response.feed_data]);
      }
    };
    getData();
  }, [page]);

  const lodeMoredata = () => {
    setPage(page + 1);
  };
  const headeTitle = "Live Feed | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }} className="LiveFeed">
        {feed_banner ? (
          <div className="live_feed_banner">
            <Image
              src={feed_banner.cate_image}
              alt=""
              width={200}
              height={120}
              style={{ width: "100%" }}
            />
          </div>
        ) : (
          <Spinner />
        )}

        <div className="top_cashback_store_box">
          <h3 className="top_cashback_store_title">Top Cashback Store</h3>
          <div className="top_cashback_store_slider">
            <Swiper className="" slidesPerView={3.2} spaceBetween={6}>
              {topStore ? (
                <>
                  {topStore &&
                    topStore.map((item, i) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <SwiperSlide key={i}>
                          <Link href={`/${item.landing_url}`}>
                            <Image
                              width={200}
                              style={{ width: "100%" }}
                              height={90}
                              src={item.image_path}
                              alt="deal of the day"
                            />
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                </>
              ) : (
                ""
              )}
            </Swiper>
            <div className="top_cashback_store_live_tag">
              <p>LIVE Deals</p>
              <div className="video_icon">
                <div className="circle-inner"></div>
              </div>
            </div>
            <div className="live_feed_wrapper_box">
              {feedStore &&
                feedStore.map((item, i) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    <div className="live_feed_wrapper" key={i}>
                      <p className="live_feed_time">14:33(ist), feb 24</p>
                      <div className="live_feed_box">
                        <p className="live_feed_contant">{item.title}</p>
                        <div className="live_feed_box_bottom">
                          <Image
                            src={item.feed_image}
                            alt=""
                            width={60}
                            height={70}
                          />
                          <p>
                            <Link
                              href={
                                item.slug_flag == 0
                                  ? item.landing_url
                                  : `/deals/${item.landing_url}`
                              }
                            >
                              Shope Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="lodemore_button">
              {noData ? (
                "No Data Found"
              ) : (
                <button type="button" onClick={lodeMoredata} className="border_button">
                  Lode More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .top_cashback_store_box {
          padding: 7px;
        }
        .top_cashback_store_box .top_cashback_store_title {
          padding-bottom: 10px;
          text-transform: uppercase;
          font-size: 16px;
        }

         {
          /* feed blinking  */
        }
        .top_cashback_store_live_tag {
          position: relative;
          margin-top: 17px;
        }
        .top_cashback_store_live_tag p {
          text-transform: uppercase;
          text-align: center;
        }
        .video_icon:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        .live_feed_wrapper_box {
          display: flex;
          flex-direction: column;
          padding: 20px 4px;
        }
        .live_feed_wrapper {
          padding-left: 20px;
          position: relative;
          padding-bottom: 10px;
        }
        .live_feed_wrapper:after {
          content: "";
          position: absolute;
          left: 0;
          width: 1px;
          top: 0;
          height: 100%;
          background: gray;
        }
        .live_feed_time {
          position: relative;
          color: red;

          text-transform: uppercase;
          font-weight: 600;
          word-spacing: 1px;
          letter-spacing: 1px;
          margin-bottom: 10px;
          font-size: 12px;
        }
        .live_feed_time:after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          left: -25px;
          background: #b4aeae;
          z-index: 2;
          border: 1px solid #716c6c;
        }
        .live_feed_box {
          padding: 10px;
          border-radius: 10px;
          border-left: 10px solid #ff5722;
          background: #ece7e7;
        }
        .live_feed_contant {
          color: #18314b;
          font-size: 14px;
          font-weight: 600;
          text-transform: capitalize;
          letter-spacing: 0.3px;
          line-height: 20px;
          margin: 0;
        }
        .live_feed_box_bottom {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 14px;
        }
        .live_feed_box_bottom p {
          padding: 7px;
          padding-top: 10px;
        }
        .lodemore_button {
          text-align: center;
          padding: 5px 0 20px;
        }
      `}</style>
    </>
  );
};

export default LiveFeed;
