import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import Carousel from "components/homeComponents/Carousel";
import DealOfTheDay from "components/homeComponents/DealOfTheDay";
import LiveDeals from "components/homeComponents/LiveDeals";
const HotDeals = dynamic(() => import("components/homeComponents/HotDeals"));
const HowToEarnCashback = dynamic(() => import("components/HowToEarnCashback"));
import CashBackStore from "components/homeComponents/CashBackStore";
import { homeAPI } from "service/API";

import axios from "axios";

import { useUserToken } from "service/customHooks";
// import ChatApp from "components/utilites/ChatApp";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

export default function Home() {
  const [carousel, setCarousel] = useState();
  const [liveDeal, setLiveDeal] = useState();
  const [dealofday, setDealofday] = useState();
  const [howtoearncashback, setHowtoearncashback] = useState();
  const [hotdeals, setHotdeals] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [sponsoredCount, setSponsoredCount] = useState();
  const [userDetails, setUserDetails] = useState();

  const authToken = useUserToken();

  const headeTitle =
    "Online Shopping India, Best Deals, Offers, Coupons & Free Stuff in India | Freekaamaal";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetData = async () => {
    try {
      let { data } = await axios.post(
        homeAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
        }
      );

      // console.log(data.response);
      setCarousel(data.response.slider);
      setLiveDeal(data.response.live_deals);
      setDealofday(data.response.sticky);
    } catch (error) {}
  };

  const fistApiCallback = useCallback(GetData, [authToken]);

  const getAPI2 = async () => {
    try {
      let { data } = await axios.post(
        homeAPI,
        {
          apiAuth: apiAuth,
          page: page,
          device_type: DEVICE_TYPE,
          sponsored_count: sponsoredCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
        }
      );

      if (data?.userdata) {
        setUserDetails(data.userdata);
      }
      if (data.response.user_summary) {
        localStorage.setItem(
          "usersummary",
          JSON.stringify(data.response.user_summary)
        );
      }
      setHowtoearncashback(data.response.earn_cashback);
      setSponsoredCount(data.response.sponsored_count);
      if (data.response.hotdeals.length == 0) {
        setNoData(true);
      } else {
        setHotdeals([...hotdeals, ...data.response.hotdeals]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fistApiCallback();
  }, []);

  // console.log(howtoearncashback)

  const secondApiCallback = useCallback(getAPI2, [authToken, page]);
  useEffect(() => {
    secondApiCallback();
  }, [page, authToken]);

  const pageFunction = () => {
    setPage(page + 1);
  };
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      {/* <ChatApp userDetails={userDetails} /> */}

      <div>
        <Carousel bannerImg={carousel} />
        <DealOfTheDay dealofday={dealofday} />
        <LiveDeals liveDeal={liveDeal} />
        <HotDeals
          hotdeals={hotdeals}
          pageFunction={pageFunction}
          noData={noData}
        />
        <CashBackStore />
        <HowToEarnCashback howtoearncashback={howtoearncashback} />
      </div>
    </>
  );
}
