import Link from "next/link";
import { Grid, Box, Typography, Button } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useEffect } from "react";


const CouponsCade = (props) => {
  const [coupons, setCoupons] =  useState()

  useEffect(()=>{
    setCoupons(props.couponCard)
  
  },[props])

 console.log(coupons)
  return (
    <div>
      {
       coupons && coupons.map((item, i)=>
       <Link key={i+1} href={`/coupon/${item.coupon_id}`}>
        <Box 
                component="div"
                sx={{
                  padding: "15px 0px 0",
                  border: "1px solid #e1dada",
                  overflow: "hidden",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                
                <Box sx={{ padding: "0 15px" }}>
                  <Typography color="black" component="p" fontWeight="bold">
                    {item.description}
                  </Typography>
                  <Grid
                    sx={{ padding: "10px 0" }}
                    container
                    justifyContent="space-between"
                    alignItem="center"
                  >
                    <Grid item>
                     {
                      item.coupon_code?<Link href={`${item.shop_url}`} style={{ color: "#f27935",display:"inline-block",position:"relative" }}>
                      <span className="star_code_dot">
                      &#9733; &#9733; &#9733; &#9733;
                      </span>
                     <span className="mask_code">
                     {item.coupon_code}
                     </span>
                    </Link>:""
                     }
                        
                      
                     
                    </Grid>
                    <Grid item>
                      <Typography
                        justifyContent="center"
                        color="gray"
                        alignItems="center"
                        component="small"
                      >
                        <AccessTimeFilledIcon fontSize="10px" />{" "}
                        <small>{item.expiry}</small>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component="div"
                  sx={{ padding: "1px 10px", background: "#f5f1f1" }}
                >
                  <Grid container justifyContent="space-around" alignItem="center">
                    <Grid item>
                      <Button sx={{ color: "gray", textTransform: "capitalize" }}>
                        <RemoveRedEyeIcon fontSize="18px" sx={{ marginRight: "7px" }} />{" "}
                        2k views
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button sx={{ color: "gray", textTransform: "capitalize" }}>
                        <FavoriteIcon fontSize="18px" sx={{ marginRight: "7px" }} /> 10
                        Likes
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button sx={{ color: "gray", textTransform: "capitalize" }}>
                        <ShareIcon fontSize="18px" sx={{ marginRight: "7px" }} /> Share
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
                </Link>
                 

        )
      }
     
      <style jsx>
        {`
          .tabsList::-webkit-scrollbar {
            display: none;
          }
          .cash_back_store_offer {
            text-align: center;
            color: #000;
            padding: 1px 2px;

            font-size: 15px;
          }
          .cash_back_store_link {
            text-decoration: none;
          }
          .mask_code{
            position: relative;
            overflow: hidden;
            width: 100%;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            display: inline-block;
            padding: 7px 22px;
            border: 3px dotted gray;
          }
         .mask_code:after{
          width: 51%;
          background-color: #41a916;
          z-index: 10;
          height: 46px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          left: -3px;
          content: "";
          top: -4px;
          position: absolute;

          } 
          .mask_code:before{
            background-color: #41a916;
            content: "";
            z-index: 10;
            height: 71px;
            width: 58%;
            top: -3px;
            position: absolute;
            right: 33px;
            -webkit-transform: rotate(328deg);
            -moz-transform: rotate(328deg);
            -ms-transform: rotate(328deg);
            -o-transform: rotate(328deg);
            transform: rotate(328deg);

          }
          .star_code_dot{
            position: absolute;
            z-index: 11;
            color: #fff;
            font-size: 13px;
            top: 7px;
            left: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default CouponsCade;
