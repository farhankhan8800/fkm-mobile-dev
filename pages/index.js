// home page  -------------------


import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import Carousel from "components/homeComponents/Carousel";
import DealOfTheDay from "components/homeComponents/DealOfTheDay";
import LiveDeals from "components/homeComponents/LiveDeals";
import HotDeals from "components/homeComponents/HotDeals";
import CashBackStore from "components/homeComponents/CashBackStore";
import HowToEarnCashback from "components/HowToEarnCashback";
import { homeApi } from "service/API";
import { useEffect, useState } from "react";
import axios from "axios";

const apiAuth = process.env.API_AUTH;

export default function Home() {
  const [cbStore, setCbStore] = useState();
  const [carousel, setCarousel] = useState();
  const [liveDeal, setLiveDeal] = useState();
  const [dealofday, setDealofday] = useState();
  const [howtoearncashback, setHowtoearncashback] = useState();
  const [hotdeals, setHotdeals] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [sponsoredCount, setSponsoredCount] = useState();

  const headeTitle =
    "Online Shopping India, Best Deals, Offers, Coupons & Free Stuff in India | Freekaamaal";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetData = async () => {
    try {
      let {data} = await axios.post(homeApi, {
          apiAuth: apiAuth,
          page: page,
          sponsored_count: sponsoredCount,
      },
      { 
        headers: {
          "Content-Type": "application/json",
        }
      });
    
      console.log(data.response)
      setCbStore(data.response.cbstores);
      setCarousel(data.response.slider);
      setLiveDeal(data.response.live_deals);
      setDealofday(data.response.sticky);
      setHowtoearncashback(data.response.earn_cashback);

      if (data.response.hotdeals.length == 0) {
        // console.log(`no data`)
        setNoData(true);
      } else {
        setHotdeals([...hotdeals, ...data.response.hotdeals]);
      }
      setSponsoredCount(data.response.sponsored_count);
    } catch (error) {}
  };

  useEffect(() => {
    GetData();
  }, [page]);
  // console.log(hotdeals)
  const pageFunction = () => {
    setPage(page + 1);
  };
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <Carousel bannerImg={carousel} />
      <DealOfTheDay dealofday={dealofday} />
      <LiveDeals liveDeal={liveDeal} />
      <HotDeals
        hotdeals={hotdeals}
        pageFunction={pageFunction}
        noData={noData}
      />
      <CashBackStore cbStore={cbStore} />
      <HowToEarnCashback howtoearncashback={howtoearncashback} />
    </>
  );
}





