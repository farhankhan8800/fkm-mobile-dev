import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import shopImage from "../../public/images/restaurant.png";
import { Grid, Box, Typography } from "@mui/material";


const FeaturedStore = (props) => {
 
  const [storeCard, setStoreCard] = useState()

  useEffect(()=>{
    setStoreCard(props.featured_store)
  },[props])

  return (
    <>
      <Grid container sx={{ padding: "13px 3px 2px" }}>
        <Grid item>
          <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
            <Image
              src={shopImage}
              alt="Hot Deal Of the Day"
              width={29}
              height={29}
              
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h6">
            {" "}
            Featured <strong>Store</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{padding:"2px 10px"}}>
      <Swiper className="deal_of_the_day_component" 
      slidesPerView={4}
      spaceBetween={5}
      >
        { storeCard && storeCard.map((item, i) => {
          const {store_image,name} = item
        
          return (
            <SwiperSlide key={i}>
              <Link  href={`/${name}`} style={{height:"70px",display:"flex",justifyContent:"center",alignItems:"center" }}>
                <Image src={store_image} width={90} style={{width:"90px",height:"30px"}}  height={30} alt="" />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </Box>
      
    </>
  );
};

export default FeaturedStore;
