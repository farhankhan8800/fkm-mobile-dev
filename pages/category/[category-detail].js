import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import DealsAndCoupons from "../../components/couponsComponents/DealsAndCoupons";
import { useEffect, useState } from "react";
import { categoryDetailApi } from "../../service/API";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import axios from "axios";

const apiAuth = process.env.API_AUTH;

const CategoryDetail = () => {
   const [categoryDeals, setCategoryDeals] = useState([]);
  const [categoryCoupons, setCategoryCoupons] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState();
  const [Page, setPage] = useState(1);
  const [changeOption, setChangeOption] = useState("");
  const [noDealData, setNoDealData]= useState(false)
  const [noCouponData, setNoCouponData]= useState(false)


  const router = useRouter();
  const cate_slug = router.query["category-detail"];

  // console.log("Component agya",cate_slug);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetData = async () => {

    try {
      let {data} = await axios.post(categoryDetailApi, {
     
       
          apiAuth: apiAuth,
          page: Page,
          cate_slug: cate_slug,
          option: changeOption,
        },
        { headers: {
          "Content-Type": "application/json",
        }
      },
      );
       
      if(changeOption ==""){
          setCategoryProduct(data.response.category);
          if((data.response.deals).length == 0){
            setNoDealData(true)
          }else{
            setCategoryDeals([...categoryDeals, ...data.response.deals]);
          }
          
      }else if(changeOption =="deals") {
        if((data.response.deals).length == 0){
          setNoDealData(true)
        }else{
          setCategoryDeals([...categoryDeals, ...data.response.deals]);
        }

      }else if(changeOption =="coupons"){
        if((data.response.coupons).length == 0){
          setNoCouponData(true)
        }else{
          setCategoryCoupons([...categoryCoupons, ...data.response.coupons]);
        }
      }
    } catch (error) {
      return error;
    }
  };
<<<<<<< HEAD
  
  useEffect(() => {
    if(cate_slug){
    GetData();
=======

  useEffect(() => {
    // console.log("PAGE UPDATE----")
    if(cate_slug){
      // console.log("firse")
      GetData();
>>>>>>> 4d7ac1dc5d01a175bced95d9fb219ea5763d77bf
    }
  },[Page, changeOption,cate_slug]);

  const dealsTabCall = () => {
    setChangeOption("deals");
    setPage(1);
    setCategoryCoupons([]);

  };
  const couponsTabCall = () => {
    setChangeOption("coupons");
    setPage(1);
    setCategoryDeals([]);
  };


    // console.log( "category_info == ", categoryProduct)
    // console.log( "deals == ", categoryDeals)
    //  console.log( "coupons_info == ", categoryCoupons)


  const addDealPage = () => {
    setPage(Page + 1);
  };
  const addCouponPage = () => {
    setPage(Page + 1);
  };
  
  return (
    <>
      {categoryProduct? (
        <HeadTag headeTitle={` ${categoryProduct.name} | Freekaamaal `} />
      ) : (
        ""
      )}

      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ paddingTop: "80px", bgcolor: "#F7F7F7" }}>
          {categoryProduct? (
            <Box
              component="div"
              sx={{
                width: "100%",
                padding: "10px 20px",
                bgcolor: "#fff",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{
                  p: 2,
                  bgcolor: "#fff",
                  borderRadius: "100px",
                  position: "absolute",
                  left: "50%",
                  width: "100px",
                  transform: "translate(-50%,0)",
                  top: "-60px",
                  height: "100px",
                  boxShadow: "0px 1px 14px -9px #dbcccc",
                }}
              >
                <Image
                  width={70}
                  height={70}
                  src={categoryProduct.cate_img_url}
                  alt="taddy bear"
                 />
              </Box>
              <Box component="div" sx={{ paddingTop: "50px" }}>
                <Typography
                  component="p"
                  fontWeight="600"
                  fontSize="14px"
                  color="#000"
                  padding="5px"
                  textAlign="center"
                >
                  {categoryProduct.name}
                </Typography>
                <Typography
                  component="p"
                  color="#000"
                  fontSize="12px"
                  textAlign="center"
                >
                  {categoryProduct.description}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "40px",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <DealsAndCoupons
            categoryDeals={categoryDeals}
            categoryCoupons={categoryCoupons}
            categoryProduct={categoryProduct}
            addDealPage={addDealPage}
            addCouponPage={addCouponPage}
            dealsTabCall={dealsTabCall}
            couponsTabCall={couponsTabCall}
            noCouponData = {noCouponData}
            noDealData={noDealData}
          />
        </Box>
      </div>
    </>
  );
};

export default CategoryDetail;
