import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { homeAPI2 } from "service/API";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import axios from "axios";
import { useEffect } from "react";

const apiAuth = process.env.API_AUTH;

const HotDealInternal = () => {
  const [sponsoredCount, setSponsoredCount] = useState();
  const [allHotDeals, setAllHotDeals] = useState([]);
  const [page, setPage] = useState(1);
  const [noDeals, setNoDeals] = useState(false);

  // get data in server
  const getData = async () => {
    try {
      let { data } = await axios.post(
        homeAPI2,
        {
          apiAuth: apiAuth,
          page: page,
          device_type: "4",
          sponsored_count: sponsoredCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.response.hotdeals.length == 0) {
        setNoDeals(true);
      } else {
        setAllHotDeals([...allHotDeals, ...data.response.hotdeals]);
        setSponsoredCount(data.response.sponsored_count);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [page]);

  const pageFunction = () => {
    setPage(page + 1);
  };

  const headeTitle = "All Hot Deals | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div style={{ padding: "10px", position: "relative" }}>
          <div>
            <div className="d_flex">
              <div className="flex_div">
                {allHotDeals &&
                  allHotDeals.map((item, i) => {
                    return (
                      <div
                        style={{ maxWidth: "167px", marginBottom: "10px " }}
                        key={i}
                      >
                        <div
                          style={{
                            background: "rgb(248, 248, 248)",
                              border: "1px solid rgb(223 219 219 / 40%)",
                              borderRadius: "7px"
                          }}
                        >
                          <Link
                            className="card_link"
                            href={`/deals/${item.slug_url}`}
                          >
                            <div>
                              <div style={{ padding: "15px 21px 0px" }}>
                                <Image
                                  src={item.deal_image}
                                  alt={item.title}
                                  height={92}
                                  width={120}
                                  style={{ borderRadius: "7px" }}
                                />
                              </div>
                              <p
                                className=""
                                style={{
                                  background: "rgb(248 248 248)",
                                  padding: "7px",
                                }}
                              >
                                <p
                                 style={{
                                    color: "#000",
                                    marginBottom: "0",
                                    fontSize: "17px",
                                  }}
                                >
                                  {item.store_name}{" "}
                                </p>
                                <p
                                  style={{
                                    color: "#000",
                                    padding: "4px 0",
                                    fontSize: "13px",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "wrap",
                                    height: "62px",
                                  }}
                                >
                                  {item.title}{" "}
                                </p>
                                <div style={{ paddingTop: "4px" }}>
                                  <strong className="card_amouunt">
                                    &#8377;{item.offer_price}
                                  </strong>
                                  <small className="card_small_amouunt">
                                    &#8377;{item.price}
                                  </small>
                                </div>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              {noDeals ? (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  No Data Found{" "}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={pageFunction} className="border_button">
                    Lode More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
            justify-content: space-around;
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
            font-size: 10px;
            background-color: #f27932;
          }
        `}
      </style>
    </>
  );
};

export default HotDealInternal;
