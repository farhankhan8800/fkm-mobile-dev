import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";

import { useEffect, useState } from "react";
import { categoryDetailApi } from "service/API";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import axios from "axios";
import DealsAndCouponsCategory from "components/couponsComponents/DealsAndCouponsCategory";

const apiAuth = process.env.API_AUTH;

const CategoryDetail = () => {
  const [categoryProduct, setCategoryProduct] = useState();
  const [categoryProductTitle, setCategoryProductTitle] = useState();

  const router = useRouter();
  const cate_slug = router.query["category-detail"];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetData = async () => {
    try {
      let { data } = await axios.post(
        categoryDetailApi,
        {
          apiAuth: apiAuth,
          page: "1",
          cate_slug: cate_slug,
          option: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log(data.response.category)
        setCategoryProduct(data.response.category);
        setCategoryProductTitle(data.response.category.description);
    } catch (error) {}
  };
  useEffect(() => {
    GetData();
  }, [cate_slug]);

 
  return (
    <>
      {categoryProduct ? (
        <HeadTag headeTitle={` ${categoryProduct.name} | Freekaamaal `} />
      ) : (
        ""
      )}

      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ paddingTop: "80px", bgcolor: "#F7F7F7" }}>
          {categoryProduct ? (
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
              <Box component="div" sx={{ padding: "50px 0" }}>
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
                  {
                    <div
                      dangerouslySetInnerHTML={{ __html: categoryProductTitle }}
                    />
                  }
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
          <DealsAndCouponsCategory
           cate_slug={cate_slug}
          />
        </Box>
      </div>
    </>
  );
};

export default CategoryDetail;
