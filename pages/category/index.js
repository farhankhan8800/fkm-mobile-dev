import { Grid, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { allCategory } from "../../service/API";
import { useEffect, useState } from "react";
const apiAuth = process.env.API_AUTH;

const Category = () => {
  const [categoryProduct, setCategoryProduct] = useState();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      let data = await fetch(allCategory, {
        method: "post",
        body: JSON.stringify({
          apiAuth: apiAuth,
        }),
        mode: "cors",
        Headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await data.json();
      setCategoryProduct(result.response.allcategory);
    } catch (error) {
      return error;
    }
  };
  const headeTitle = "Category | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 1 }}>
          <Grid container spacing={2}>
            {categoryProduct &&
              categoryProduct.map((item, i) => {
                return (
                  <Grid item xs={6} key={i}>
                    <Box
                      component="div"
                      sx={{
                        border: "1px solid #fff0f0",
                        borderRadius: "10px",
                        width: "100%",
                        padding: "10px 20px",
                        bgcolor: "#F7F7F7",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          padding: "5px",
                          bgcolor: "#fff",
                          borderRadius: "7px",
                        }}
                      >
                        <Image
                          width={100}
                          height={140}
                          style={{ width: "100%" }}
                          src={item.img_url}
                          alt="categoryProduct"
                        ></Image>
                      </Box>
                      <Box>
                        <Typography
                          component="p"
                          fontWeight="600"
                          fontSize="14px"
                          color="#000"
                          padding="5px"
                          textAlign="center"
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          component="p"
                          color="#000"
                          fontSize="12px"
                          textAlign="center"
                        >
                          <span>Deals </span>
                          <strong> {item.deals_count}</strong>
                          <span> Coupons </span>
                          <strong>{item.coupons_count}</strong>
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "center", p: 1 }}>
                        <Button variant="outlined">
                          <Link
                            href={`${item.cate_slug}`}
                            style={{ color: "#f27935" }}
                          >
                            View Deals
                          </Link>
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Category;
