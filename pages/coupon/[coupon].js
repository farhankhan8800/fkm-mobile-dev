import { useEffect,useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { useRouter } from "next/router";
import {coupon_detail} from "service/API"


const apiAuth = process.env.API_AUTH

const cardCupon = {
  position: "absolute",
  top: "-64px",
  padding: "15px",
  background: " #fff",
  boxShadow: " 0px 1px 22px -6px #ada4a4",
  width: "210px",
  left: "50%",
  transform: "translate(-50%,0%)",
  borderRadius: "7px",
};

const copyCode = () => {
  const copyValue = document.getElementById("couponCode");
  copyValue.select();
  navigator.clipboard.writeText(copyValue.value);
  document.getElementById("copyButton").innerHTML = "copied";
};

const CouponCodeCopy = () => {

const [couponCode, setCouponCode]= useState({})

const router = useRouter();
const couponid = router.query["coupon"];

// console.log(coupon_id)

  
  const GetData = async () => {

    try {
      let data = await fetch(coupon_detail, {
        method: "post",
        body: JSON.stringify({
          apiAuth: apiAuth,
          coupon_id:couponid
        }),
        mode: "cors",
        Headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await data.json();
        // console.log(result.response.coupon);
        setCouponCode(result.response.coupon)
       
    } catch (error) {
      return error;
    }
  };

  useEffect(()=>{
    GetData()
  },[])
  
  

  const headeTitle = "Copy Code | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        {
          couponCode? (  <Box component="div" sx={{ p: 4, paddingTop: "100px" }}>
          <Box
            component="div"
            sx={{
              padding: "50px 15px 20px",
              position: "relative",
              textAlign: "center",
              border: "2px solid #e7dede",
              borderRadius: "10px",
            }}
          >
            <Box
              component="div"
              style={cardCupon}
              sx={{ position: "absolute" }}
            >
              <Image src={couponCode.store_image} width={150} height={50} alt="" />
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{ fontWeight: "600", fontSize: "14px" }}
              >
               {couponCode.description}
              </Typography>
              <Typography
                component="p"
                sx={{ marginTop: "20px", fontSize: "14px" }}
              >
                {}
              </Typography>
            </Box>
            <Box component="div" margin="10px 0" position="relative">
              <input
                id="couponCode"
                style={{
                  width: "100%",
                  padding: "10px",
                  color: "red",
                  border: "2px solid #f27935",
                  borderRadius: "5px",
                }}
                readOnly
                value={couponCode.coupon_code}
                variant="outlined"
              />
              <Button
                onClick={copyCode}
                id="copyButton"
                sx={{
                  color: "#fff",
                  position: "absolute",
                  padding: "6px 40px",
                  top: "1px",
                  right: "0",
                  borderRadius: "none",
                }}
                variant="contained"
              >
                Copy
              </Button>
            </Box>
            <Box display="flex" justifyContent="space-around" padding="5px 0">
              <Button>
                <Link
                  href={`/cashback-activated/${1}`}
                  style={{ color: "green" }}
                >
                  Earn Cashback
                </Link>{" "}
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button>
                <Link href="/" style={{ color: "gray" }}>
                  Skip Cashback
                </Link>{" "}
              </Button>
            </Box>
          </Box>
        </Box>):""
       }
      
      </div>
    </>
  );
};

export default CouponCodeCopy;
