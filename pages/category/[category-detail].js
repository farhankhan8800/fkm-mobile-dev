import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import DealsAndCoupons from "../../components/couponsComponents/DealsAndCoupons";
import { useEffect, useState } from "react";
import { categoryDetailApi } from "../../service/API";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

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

 
  
  const GetData = async () => {

    try {
      let data = await fetch(categoryDetailApi, {
        method: "post",
        body: JSON.stringify({
          apiAuth: apiAuth,
          page: Page,
          cate_slug: cate_slug,
          option: changeOption,
        }),
        mode: "cors",
        Headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await data.json();       
      if(changeOption ==""){
          setCategoryProduct(result.response.category);
          if((result.response.deals).length == 0){
            setNoDealData(true)
          }else{
            setCategoryDeals([...categoryDeals, ...result.response.deals]);
          }
          
      }else if(changeOption =="deals") {
        if((result.response.deals).length == 0){
          setNoDealData(true)
        }else{
          setCategoryDeals([...categoryDeals, ...result.response.deals]);
        }

      }else if(changeOption =="coupons"){
        if((result.response.coupons).length == 0){
          setNoCouponData(true)
        }else{
          setCategoryCoupons([...categoryCoupons, ...result.response.coupons]);
        }
        
      }
    } catch (error) {
      return error;
    }
  };


  useEffect(() => {
    GetData();
  },[Page, changeOption]);

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
