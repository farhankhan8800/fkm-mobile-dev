import CashBackClimeCard from "components/CashBackClaimCard";

import Link from "next/link";
import Image from "next/image";
import SimilarMoreProducts from "components/SimilarMoreProducts";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deal_detail } from "service/API";
import Spinner from "components/utilites/Spinner";
import axios from "axios";
import PageNotFound from "components/PageNotFound";
import { isTokenExpired } from "service/helper";
import OpenExpireSectionDialog from "components/utilites/session-expired";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const DealsDetails = () => {
  const [deal, setDeal] = useState();
  const [similarDeal, setSimilarDeal] = useState();
  const [myhtml, setMyHtml] = useState();
  const [user, setUser] = useState();
  const [DealNotFound, setDealNotFound] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const router = useRouter();
  
  const dealSlug = router.query["deals-details"];

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    if (user) {
      // console.log( "deals",user.token)
      if (isTokenExpired(user.token)) {
        setSessionExpired(true);
      }
    }
  }, [user]);

  useEffect(() => {
    const storeData = async () => {
      try {
        let { data } = await axios.post(
          deal_detail,
          {
            apiAuth: apiAuth,
            page: "1",
            deal_slug: dealSlug,
            device_type: DEVICE_TYPE,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.status == 1) {
          setMyHtml(data.response.deal.description);
          setDeal(data.response.deal);
          setSimilarDeal(data.response.related_deals);
        } else if (data.status == 2) {
          setDealNotFound(true);
        }
      } catch (err) {}
    };

    storeData();
  }, [dealSlug]);

  if (DealNotFound) {
   router.push("/404")
  }

  return (
    <>
      <Header />
      {sessionExpired ? (
        <OpenExpireSectionDialog setSessionExpired={setSessionExpired} />
      ) : (
        ""
      )}
      <div style={{ paddingTop: "56px" }}>
        {deal ? (
          <div>
            <HeadTag headeTitle={`${deal.deal_title} || Freekaamaal`} />
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontWeight: "600", color: "#4a4a4a",lineHeight: '1.55'}}>
                {deal.deal_title}
              </h3>
              <div
                style={{
                  padding: "20px 0 20px ",
                  margin: "17px 0",
                  border: "1px solid #e1dadab3",
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ maxWidth: "350px", margin: "auto" }}>
                  <Image
                    style={{ width: "100%" }}
                    height={250}
                    width={350}
                    src={deal.deal_img_url}
                    alt=""
                  />
                </div>
                <div sx={{ maxWidth: "350px", margin: "auto" }}>
                  <p style={{ fontWeight: "400", marginTop: "10px" }}></p>
                  <Link
                    href={`${deal.deal_slug}`}
                    className="shopNowbtn"
                  ></Link>
                </div>
                <div
                  style={{
                    maxWidth: "350px",
                    margin: "auto",
                    marginTop: "15px",
                    padding: "5px 10px",
                  }}
                >
                  <div
                    className="flex_space_between"
                    style={{ alignItems: "center" }}
                  >
                    <div>
                      <h3 className="card_mrp_box">
                        <strong>&#8377; {deal.offer_price} </strong>{" "}
                        <span>&#8377; {deal.price}</span>
                      </h3>
                    </div>
                    <div>
                      <div style={{ maxWidth: "100px" }}>
                        <Image
                          width={100}
                          height={25}
                          src={deal.store_image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* cash backclaim card start  */}
              <CashBackClimeCard />
              {/* cash backclaim card end  */}
              <div
                style={{
                  padding: "13px 14px ",
                  margin: "10px 7px 10px ",
                  border: "1px solid #e1dadab3",
                  borderRadius: "10px",
                }}
              >
                <h3 style={{ fontWeight: "600" }}>About The Deals</h3>
                <div>
                  {
                    <div
                      id="about_the_deals"
                      className="about_the_deals"
                      dangerouslySetInnerHTML={{ __html: myhtml }}
                    />
                  }
                </div>
              </div>
            </div>

            {similarDeal.length == 0 ? (
              ""
            ) : (
              <div style={{ marginBottom: "25px" }}>
                <SimilarMoreProducts similarDeal={similarDeal} />
              </div>
            )}

            <div
              style={{
                position: "fixed",
                bottom: "0",
                padding: "1px 4px",
                width: "100%",
                maxWidth: "548px",
                background: "#fff",
              }}
            >
              {user ? (
                <Link href={deal.landing_url}>
                  <button className="full_with_button">
                    {deal.is_cashback == 1
                      ? "Shop & Earn Cashback"
                      : "Shop Now"}
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  <button className="full_with_button">
                    Login Now & Earn Cashback
                  </button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div>
        )}

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
            left: -1px;
            height: 1px;
            width: 106%;
            background-color: red;
            transform: rotate(358deg);
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
          .about_the_deals p {
            display: block;
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
          .about_the_deals p {
            font-size: 13px;
          }
          .about_the_deals img {
            width: 100% !important;
          }
        `}</style>
      </div>
    </>
  );
};

export default DealsDetails;
