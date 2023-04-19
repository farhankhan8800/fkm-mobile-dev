import { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import FeaturedStore from "../featured-store/index";
import TopCoupons from "../top-coupons/index";
import TrendingCoupons from "../tranding-coupons/index";
import { AllCoupons } from "service/API";
import { useUserToken } from "service/customHooks";
import axios from "axios";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Coupons = () => {

  const [featured_store, setFeatured_store] = useState();
  const [trending_coupons, setTrending_coupons] = useState();
  const [top_coupons, setTop_coupons] = useState();

  const authToken = useUserToken();

  const getData = async () => {
    try {
      let {data} = await axios.post(AllCoupons, {
          apiAuth: apiAuth,
        },
        {
          headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
      });
      
      setFeatured_store(data.response.featured_stores);
      setTrending_coupons(data.response.trending_coupons);
      setTop_coupons(data.response.latest_coupons);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const headeTitle = "Coupons | Freekaamaal";

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <FeaturedStore featured_store={featured_store}></FeaturedStore>
        <TrendingCoupons trending_coupons={trending_coupons}> </TrendingCoupons>
        <TopCoupons top_coupons={top_coupons}></TopCoupons>
      </div>
    </>
  );
};

export default Coupons;
