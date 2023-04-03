import { Grid, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { allCategory } from "../../service/API";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Category = () => {
  const [categoryProduct, setCategoryProduct] = useState();

  const authToken = useUserToken()


  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      let {data} = await axios.post(allCategory, {
        apiAuth: apiAuth,
        device_type: DEVICE_TYPE,
      },
        {
          headers: {
            "Content-Type": "application/json",
             Authorization: authToken,
          },
        }
      
      );
      // console.log(data.response.allcategory)
      setCategoryProduct(data.response.allcategory);
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
        <div  style={{ padding:"10px" }}>
          <div  className="" style={{display:"grid", gridTemplateColumns:"auto auto", gap:"10px"}}>
            {categoryProduct &&
              categoryProduct.map((item, i) => {
                return (
                  <div  key={i}>
                    <div
                      style={{
                        border: "1px solid #fff0f0",
                        borderRadius: "10px",
                        width: "100%",
                        padding: "10px 20px",
                        bgcolor: "#F7F7F7",
                      }}
                    >
                      <div
                        style={{
                          padding: "5px",
                          bgcolor: "#fff",
                          borderRadius: "7px",
                          textAlign:"center"
                        }}
                      >
                        <Image
                          width={100}
                          height={140}
                          
                          src={item.img_url}
                          alt="categoryProduct"
                        ></Image>
                      </div>
                      <div>
                        <p
                          style={{fontWeight:"600", fontSize:"16px",color:"#000",padding:"5px",textAlign:"center"}}
                        >
                          {item.name}
                        </p>
                        <p
                         className="p_tag_big"
                         
                          style={{textAlign:"center"}}
                        >
                          <span>Deals </span>
                          <strong> {item.deals_count}</strong>
                         &nbsp;&nbsp;
                          <span> Coupons </span>
                          <strong>{item.coupons_count}</strong>
                        </p>
                      </div>
                      <div style={{ textAlign: "center", padding:"10px" }}>
                        <button className="text_button" >
                          <Link
                            href={`${item.cate_slug}`}
                            style={{ color: "#f27935" }}
                          >
                            View Deals
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
       
        `}
      </style>
    </>
  );
};

export default Category;
