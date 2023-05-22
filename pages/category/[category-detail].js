import Image from "next/image";

import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";

import { useEffect, useState } from "react";
import { categoryDetailApi } from "service/API";

import { useRouter } from "next/router";
import axios from "axios";
import DealsAndCouponsCategory from "components/couponsComponents/DealsAndCouponsCategory";
import Spinner from "../../components/utilites/Spinner"
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;

const CategoryDetail = () => {
  const [categoryProduct, setCategoryProduct] = useState();
  const [categoryProductTitle, setCategoryProductTitle] = useState();

  const router = useRouter();
  const authToken = useUserToken()
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
            Authorization: authToken,
          },
        }
      );
      console.log(data.response.category)
      setCategoryProduct(data.response.category);
      setCategoryProductTitle(data.response.category.description);
    } catch (error) { }
  };
  useEffect(() => {
    GetData();
  }, [cate_slug]);

  // const regex = /(<([^>]+)>)/ig;
  // const myhtmlresult = categoryProductTitle?.replace(regex, '');
  return (
    <>
      {categoryProduct ? (
        <HeadTag headeTitle={` ${categoryProduct.name} | Freekaamaal `} />
      ) : (
        ""
      )}

      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div component="div" style={{ paddingTop: "80px", background: "#F7F7F7" }}>
          {categoryProduct ? (
            <div
              style={{
                width: "100%",
                padding: "10px 20px",
                background: "#fff",
                position: "relative",
              }}
            >
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
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
              </div>
              <div style={{ padding: "50px 0" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#000",
                    padding: "5px",
                    textAlign: "center"
                  }}
                >
                  {categoryProduct.name}
                </p>
                <p
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    textAlign: "center"
                  }}
                >
                  {
                    <div>{categoryProductTitle}</div>
                  }
                </p>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "40px",
                justifyContent: "center",
              }}
            >
              <Spinner />
            </div>
          )}
          <DealsAndCouponsCategory
            cate_slug={cate_slug}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
