import { useEffect, useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import FeaturedStore from "../featured-store/index";
import TopCoupons from "../top-coupons/index";
import TrendingCoupons from "../tranding-coupons/index";
import {AllCoupons} from "service/API"
const apiAuth = process.env.API_AUTH

const Coupons = () => {

  const [featured_store, setFeatured_store] = useState()
  const [trending_coupons, setTrending_coupons] = useState()
  const [top_coupons, setTop_coupons] = useState()

    useEffect(()=>{
      getData()
    },[])

    const getData = async ()=>{
     try {
      let resp = await fetch(AllCoupons,{
        method: "post",
        body: JSON.stringify({
          apiAuth: apiAuth,
          
        }),
        mode: "cors",
        Headers: {
          "Content-Type": "application/json",
        },
 
      })
      let result = await resp.json();
      setFeatured_store(result.response.featured_stores)
      setTrending_coupons(result.response.trending_coupons);
      setTop_coupons(result.response.latest_coupons)
     } catch (error) {
      
     }
    
    }

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
