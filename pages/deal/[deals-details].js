import CashBackClimeCard from "components/CashBackClaimCard";
import { Box, Typography, Grid,Button} from "@mui/material";

 import Link from "next/link";
import Image from "next/image";
import SimilarMoreProducts from "components/SimilarMoreProducts";
import brandImage from "public/images/fkm_cover.png";
import InfoIcon from "@mui/icons-material/Info";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { useRouter } from "next/router";
import {useEffect, useState } from "react";
import { deal_detail} from "service/API"
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

const apiAuth = process.env.API_AUTH


const DealsDetails = () => {
  const [deal, setDeal] = useState()
  const [similarDeal, setSimilarDeal] = useState()
  const [myhtml , setMyHtml] = useState()
  const [user,setUser]= useState()
  const router = useRouter()
  const dealSlug = router.query["deals-details"];

  useEffect(()=>{
    setUser(localStorage.getItem("user"));
  },[])
 
useEffect(()=>{
  const storeData = async () => {
    
    try {
      let {data} = await axios.post(deal_detail, {
          apiAuth: apiAuth,
          page: "1",
          deal_slug: dealSlug,
          device_type:"4"
        },
        {  
          headers: {
          "Content-Type": "application/json",
        }
      });

      setMyHtml(data.response.deal.deal_description_url)
      setDeal(data.response.deal)
      setSimilarDeal(data.response.related_deals)
    } catch (err) {
    
    }
  }
  
  storeData()
},[dealSlug])
// console.log(myhtml)
   
  return (
    <>
     
      <Header />
      <div style={{ paddingTop: "56px" }}>
        {
        deal? (<div>
          <HeadTag headeTitle={`${deal.deal_title} || Freekaamaal`} />
          <Box component="div" sx={{ padding: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }} component="h6"> {deal.deal_title}</Typography>
                  <Box
                    component="div"
                    sx={{
                      padding: "20px 0 20px ",
                      margin: "10px 7px 10px ",
                      border: "1px solid #e1dadab3",
                      borderRadius: "10px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div className="product_offer">
                      <Typography
                        variant="strong"
                        sx={{ color: "#fff" }}
                        component="strong"
                      >
                        50% OOF
                      </Typography>
                    </div>
                    <Box sx={{ maxWidth: "350px", margin: "auto" }} component="div">
                      <Image
                        style={{ width: "100%" }}
                        height={400}
                        width={350}
                        src={deal.deal_img_url}
                        alt=""
                      />
                    </Box>
                    <Box sx={{ maxWidth: "350px", margin: "auto" }} component="div">
                      <Typography
                        variant="p"
                        sx={{ fontWeight: "400", marginTop: "10px" }}
                        component="p"
                      >
                        Choose the best price and the rertailer
                      </Typography>
                      <Link 
                        href={`regtg${deal.deal_slug}`}
                         className="shopNowbtn"
                      >
                        Shope & Earn CashBack
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "350px",
                        margin: "auto",
                        marginTop: "15px",
                        padding: "5px 10px",
                      }}
                      component="div"
                    >
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <div className="card_mrp_box">
                            <strong>&#8377; {deal.offer_price} </strong> <span>&#8377; {deal.price}</span>
                          </div>
                          <div className="card_cashback_tag">
                            <strong>&#8377; {deal.price - deal.offer_price} </strong> <span> cashback </span>
                            <InfoIcon
                              sx={{
                                width: "22px",
                                paddingLeft: "6px",
                                color: "#fd4d4d",
                              }}
                            ></InfoIcon>{" "}
                          </div>
                        </Grid>
                        <Grid item>
                          <Box component="div" sx={{ maxWidth: "100px" }}>
                            <Image
                              width={100}
                              height={25}
                              src={brandImage}
                              alt=""
                             />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* cash backclaim card start  */}
                  <CashBackClimeCard />
                  {/* cash backclaim card end  */}
                  <Box
                    component="div"
                    sx={{
                      padding: "13px 14px ",
                      margin: "10px 7px 10px ",
                      border: "1px solid #e1dadab3",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "600" }} component="h5">
                     
                      About The Deals
                    </Typography>
                    <div  >
                    {
                        <div id="about_the_deals" className="about_the_deals" dangerouslySetInnerHTML={{__html: myhtml}} />
                    }
                    </div>
                  </Box>
                </Box>
               
                {
                  similarDeal.length == 0 ?  "":<Box sx={{marginBottom:"25px"}}><SimilarMoreProducts similarDeal={similarDeal} /></Box>
                }

                <Box sx={{position:"fixed",bottom:"0",padding:"1px 4px",width:"100%", maxWidth:"530px", bgcolor:"#fff"}}>
                  {
                user ? <Button sx={{width:"100%", color:"#fff",fontWeight:"600"}} variant="contained">Shop & Earn Cashback</Button>:
                <Button sx={{width:"100%", color:"#fff",fontWeight:"600"}} variant="contained">Login Now & Earn Cashback</Button>
                 }
                
                </Box>
               
              </div>):( <Box sx={{ display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center" }}>
                      <CircularProgress />
                    </Box>)
       }
      
      
        <style jsx>{`
          .card_mrp_box {
            position: relative;
          }
          .card_mrp_box span {
            margin-left: 10px;
            color: gray;
            position: relative;
          }
          .card_mrp_box span::after {
            position: absolute;
            content: "";
            top: 10px;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: red;
            transform: rotate(-10deg);
          }
          .product_offer {
            position: absolute;
            top: -1px;
            padding: 5px 12px;
            right: -1px;
            background-color: #248b24;
          }
          .about_the_deals {
            padding: 10px 0 !important;
          }
          .about_the_deals p{
           display :block
          }
          .about_the_deals_tag strong {
            color: rgba(62, 62, 168, 0.521);
          }
          .card_cashback_tag {
            padding: 3px 8px;
            font-size: 13px;
            border: 1px solid #fd9f9f;
            margin-top: 10px;
            display: flex;
            border-radius: 6px;
            background: #ffcece;
            align-items: center;
            justify-content: space-between;
          }
          .about_the_deals p{
           font-size:13px
          }
        `}</style>
      </div>
    </>
  );
};






export default DealsDetails;

