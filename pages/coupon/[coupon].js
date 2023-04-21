import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { useRouter } from "next/router";
import { coupon_detail } from "service/API";
import axios from "axios";

import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

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
  const [couponCode, setCouponCode] = useState({});
  const [CouponNotFound, setCouponNotFound] = useState(false);

  const router = useRouter();
  const couponid = router.query["coupon"];
  const authToken = useUserToken();

  const GetData = async () => {
    try {
      let { data } = await axios.post(
        coupon_detail,
        {
          apiAuth: apiAuth,
          coupon_id: couponid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
        }
      );
      if (data.status == 1) {
        setCouponCode(data.response.coupon);
      } else if (data.status == 2) {
        setCouponNotFound(true);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (couponid) {
      GetData();
    }
  }, [couponid]);

  const headeTitle = "Copy Code | Freekaamaal";

  if (CouponNotFound === true) {
   return router.push("/404")
  }
  return (
    <>
      <Header />
      <HeadTag headeTitle={headeTitle}></HeadTag>

      <div style={{ paddingTop: "56px" }}>
        {couponCode ? (
          <div style={{ padding: "30px", paddingTop: "100px" }}>
            <div
              style={{
                padding: "50px 15px 20px",
                position: "relative",
                textAlign: "center",
                border: "2px solid #e7dede",
                borderRadius: "10px",
              }}
            >
              <div style={cardCupon}>
                <Image
                  src={couponCode.store_image}
                  width={150}
                  height={50}
                  alt="store"
                />
              </div>
              <div>
                <p style={{ fontWeight: "600", fontSize: "14px" }}>
                  {couponCode.description}
                </p>
                <p style={{ marginTop: "20px", fontSize: "14px" }}>{}</p>
              </div>
              <div  style={{margin:"10px 0", position:"relative"}}>
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
                <button
                  onClick={copyCode}
                  id="copyButton"
                  style={{
                    color:" rgb(255, 255, 255)",
                    position: "absolute",
                    padding: "6px 11px",
                    top: "3px",
                    right:' 6px',
                    minWidth: "89px"
                  }}
                 className="contain_button"
                >
                  Copy
                </button>
              </div>
              <div style={{display:"flex" ,justifyContent:"space-around", padding:"5px 0"}}>
                <button>
                  <Link
                    href={`/cashback-activated/${1}`}
                    style={{ color: "green" }}
                  >
                    Earn Cashback
                  </Link>{" "}
                </button>
                <div className="divider_line" />
                <div>
                  <Link href="/" style={{ color: "gray" }}>
                    Skip Cashback
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <style>{`
      .divider_line{
        border-left: 0.5px solid #cbc6c6b5;
      }
      `}</style>
    </>
  );
};

export default CouponCodeCopy;
