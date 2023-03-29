import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

const HotDealsCards = (props) => {
  const [hotDeals, SethotDeals] = useState(null);
  
  useEffect(()=>{
      SethotDeals(props.hotdeals)
  },[props])

  const Skeleton = []
   for (let input = 1; input <= 10; input++) {
    Skeleton.push( <div className="Skeleton_hotDeal_card_wrapper" style={{width:"45%",marginBottom:"25px"}}>
    <div class="sk_livedeals_card">
      <p></p>
    </div>
    <div class="sk_livedeals_card_text">
     <p></p>
    </div>
    <div class="sk_livedeals_card_text">
     <p></p>
    </div>
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
    <div class="sk_livedeals_card_button">
     <p></p>
    </div>
    <div class="sk_livedeals_card_button">
     <p></p>
    </div>
    </div>
    </div>
    )
   }
  
  return (
    <>
      <div className="flex_div">
        {hotDeals ? (
          <>
            {hotDeals &&
              hotDeals.map((item, i) => {
                const {
                  is_cashback,
                  deal_image,
                  slug_url,
                  deal_slug,
                  title,
                  store_img_url: store_image,
                  deal_title,
                  offer_price,
                  price,
                } = item;

                return (
                  <div
                    style={{ maxWidth: "154px", margin: "13px" }}
                   
                    key={i}
                  >
                    <div
                      style={{
                        background: "#f1f1f16b",
                        border: "1px solid #f1f1f16b",
                        position: "relative",
                        boxShadow: "none",
                      }}
                    >
                      <Link
                        className="card_link"
                        href={
                          slug_url
                            ? `/deals/${slug_url}`
                            : `/deals/${deal_slug}`
                        }
                      >
                        <span>
                          {is_cashback == "1" ? (
                            <span className="card_cashback">Cashback</span>
                          ) : (
                            <span></span>
                          )}
                        </span>

                        <div>
                          <div
                            
                            style={{ padding: "23px 21px 0px" }}
                          >
                            <Image
                              src={deal_image}
                              alt="FreeKaaMaal Product"
                              height={92}
                              priority={true}
                              width={120}
                              style={{ borderRadius: "7px" }}
                            />
                          </div>
                          <div
                            style={{ background: "#f1f1f16b", padding: "7px" }}
                          >
                            <div
                              style={{
                                color: "#000",
                                marginBottom: "0",
                                fontSize: "15px",
                              }}
                            >
                              <Image
                                src={store_image}
                                alt="FreeKaaMaal Product"
                                height={17}
                                width={50}
                                style={{ borderRadius: "7px" }}
                              />
                            </div>
                            <div
                              style={{
                                color: "#000",
                                padding: "4px 0",
                                fontSize: "11px",
                                overflow:"hidden",
                                height:"51px"
                              }}
                            >
                              {deal_title ? deal_title : title}{" "}
                            </div>
                            <div  style={{ paddingTop: "4px" }}>
                              <strong className="card_amouunt">
                                &#8377;{offer_price}
                              </strong>
                              <small className="card_small_amouunt">
                                &#8377;{price}
                              </small>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          ""
        )}
      </div>
      {!hotDeals && (
        <div className="Skeleton_hotDeal_card">
          { Skeleton }
        </div>
      )}
      <style jsx>{`
        .card_link {
          text-decoration: none;
          border-radius: 10px;
          width: 100%;
          display: inline-block;
          position: relative;
        }

        .card_amouunt {
          color: #000;
          font-weight: 900;
          font-size: 18px;
        }
        .card_small_amouunt {
          color: gray;
          margin-left: 15px;
          position: relative;
          font-size: 16px;
        }
        .card_small_amouunt::after {
          content: "";
          background-color: red;
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 9px;
          left: 0;
          transform: rotate(-10deg);
          border-radius: 10px;
        }

        .flex_div {
          padding: 6px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .flex_div img {
          width: 100%;
        }
        .card_cashback {
          position: absolute;
          top: 0;
          right: 0;
          padding: 2px 5px;
          color: #fff;
          font-size: 11px;
          background-color: #f27932;
        }
        .Skeleton_hotDeal_card {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .Skeleton_hotDeal_card_wrapper {
          width: 45%;
          padding: 5px;
          padding-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default HotDealsCards;
