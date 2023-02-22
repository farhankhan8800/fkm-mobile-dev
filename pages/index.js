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
  const [authToken, setAuthToken] = useState()



  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("user"))){
      setAuthToken(JSON.parse(localStorage.getItem("user")).token)
    }
    
  },[])

  // console.log(authToken)
  const headeTitle =
    "Online Shopping India, Best Deals, Offers, Coupons & Free Stuff in India | Freekaamaal";



    // console.log(sponsoredCount)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetData = async () => {
    try {
      let {data} = await axios.post(homeApi, {
          apiAuth: apiAuth,
          page: page,
          device_type:"4",
          sponsored_count: sponsoredCount,
      },
      { 
        headers:{
          Authorization:authToken
        }
      });
    
      //  console.log(data.response.user_summary)
       if(data.response.user_summary){
        // console.log(data.response.user_summary)
        localStorage.setItem("usersummary", JSON.stringify(data.response.user_summary));  
       }
      setCbStore(data.response.cbstores);
      setCarousel(data.response.slider);
      setLiveDeal(data.response.live_deals);
      setDealofday(data.response.sticky);
      setHowtoearncashback(data.response.earn_cashback);
      setSponsoredCount(data.response.sponsored_count);
      if (data.response.hotdeals.length == 0) {
        // console.log(`no data`)
        setNoData(true);
      } else {
        setHotdeals([...hotdeals, ...data.response.hotdeals]);
      }
     
    } catch (error) {}
  };

  useEffect(() => {
    GetData();
  }, [page,authToken]);
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





