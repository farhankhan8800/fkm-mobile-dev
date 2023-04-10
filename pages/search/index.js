import { Button } from "@mui/material";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { searchAPI } from "service/API";

const apiAuth = process.env.API_AUTH;

const SearchPage = () => {
  const [deals, setDeals] = useState();
  const [articles, setArticles] = useState();
  const [store, setStore] = useState();
  const [noData, setNoData] = useState(false);
  const router = useRouter();
  let searchText = router.query["searchword"];
  const headeTitle = " Search | Freekaamaal";

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.post(searchAPI, {
          apiAuth: apiAuth,
          keyword: searchText,
        });
        console.log(data);
        if (data.status == 1) {
          setNoData(false);
          if (data.message == "Oops No Data Available") {
            setNoData(true);
          } else {
            setDeals(data.response.deals);
            setStore(data.response.store);
          }
        }
      } catch (error) {
      }
    };
    getData();
  }, [searchText]);

  console.log();

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }} className="search_page">
        <div>
          {noData ? (
            <div className="nodata_edit">
              <h2>Oops No Data Available</h2>
              <p>Search Again Valid Stores, Deals & Much More.. </p>

              <Link href="/">
                <button style={{marginTop:"20px"}} className="border_button">Home</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="showing_result_title">
                <h4>
                  Showing Results For Your Search{" "}
                  <span>{searchText ? `'${searchText}'` : ""}</span>{" "}
                </h4>
              </div>
              <div style={{ padding: "10px" }} className="showing_result">
                <div>
                  {" "}
                  {store ? (
                    <>
                      {store.length > 0 ? (
                        <>
                          <div className="showing_store_result_div">
                            <h5>
                              {" "}
                              <span>
                                {searchText ? `'${searchText}'` : ""},
                              </span>{" "}
                              In Stores <Link href="">View All</Link>
                            </h5>
                            <div className="showing_store_list">
                              {store.map((item, i) => {
                                return (
                                  <div key={i} className="showing_store_item">
                                    <span>
                                      {" "}
                                      <Image
                                        src={item.image}
                                        width={92}
                                        alt="store Image"
                                        height={30}
                                      />
                                    </span>
                                    <div>
                                      {item.is_cashback == 0 ? (
                                        <p>No CashBack</p>
                                      ) : (
                                        <p>CashBack Offer</p>
                                      )}
                                    </div>
                                    <Link
                                      style={{ fontSize: "12px" }}
                                      href={`/store/${item.name}`}
                                    >
                                      See all Offers
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {deals ? (
                  <>
                    {deals.length > 0 ? (
                      <>
                        <div className=" showing_deals_result_div ">
                          <h5>
                            {" "}
                            <span>
                              {searchText ? `'${searchText}'` : ""},
                            </span>{" "}
                            In Deals <Link href="">View All</Link>
                          </h5>
                          <div className="showing_deals_list">
                            {deals.map((item, i) => {
                              return (
                            <div key ={i} className="showing_deals_Item">
                              <span>
                                <Image
                                  alt=""
                                  src={item.img_url}
                                  width={180}
                                  height={100}
                                />
                              </span>
                              <div className="showing_deals_Item_contant">
                                <p style={{ fontSize: "14px" }}>
                                  {item.title}
                                </p>
                                <div className="showing_deals_Item_details">
                                  <div style={{ paddingRight: "7px" }}>
                                    <strong> &#8377; {item.offer_price}</strong>{" "}
                                    <small> &#8377; {item.price}</small>{" "}
                                  </div>
                                  <Link href={`/deals/${item.slug_url}`}>
                                    <button
                                      style={{
                                        whiteSpace: "pre",
                                        fontSize: "10px",
                                        color: "#fff",
                                      }}
                                     className="contain_button"
                                    >
                                      Read More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                              );
                              })}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}

                <div>
                  {articles ? (
                    <>
                      {articles ? (
                        <>
                          <div className="showing_articles_result_div">
                            <h5>
                              {" "}
                              <span>
                                {searchText ? `'${searchText}'` : ""},
                              </span>{" "}
                              In Articles <Link href="/">View All</Link>
                            </h5>
                            <div className="showing_articles_list">
                              <div className="showing_articles_item">
                                <span>
                                  {" "}
                                  <Image
                                    src="https://images.freekaamaal.com/home-slider/site/mobile_vday_sale_mobile_sitejpg.webp
                    "
                                    width={200}
                                    alt="store Image"
                                    height={90}
                                  />
                                </span>
                                <div style={{ padding: "6px" }}>
                                  <p>
                                    How to Airtel Missed Call Alert: Through #
                                    different Ways
                                  </p>
                                  <div className="showing_articles_Item_details">
                                    <div>
                                      <small> 3 hours Ago</small>
                                    </div>
                                    <Link href="">
                                      <button
                                        style={{
                                          whiteSpace: "pre",
                                          fontSize: "10px",
                                          color: "#fff",
                                        }}
                                      className="contain_button"
                                      >
                                        Read More
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .showing_result_title {
            padding: 17px 5px;
            background: #634da2;
          }
          .showing_result_title h4 {
            text-align: center;
            color: #fff;
            letter-spacing: 1px;
            font-size: 16px;
          }
          .showing_result_title h4 span {
            color: #fcff59;
          }
          .search_page h5 {
            font-size: 17px;
          }
          .showing_articles_result_div,
          .showing_deals_result_div,
          .showing_store_result_div {
            padding-top: 27px;
          }
          .showing_articles_list,
          .showing_deals_list,
          .showing_store_list {
            display: flex;
            text-align: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: flex-start;
            padding: 14px 0;
          }
          .showing_store_item,
          .showing_articles_item,
          .showing_deals_Item {
            box-shadow: 0px 11px 9px 4px #e5e1e1;
          }
          .showing_store_item {
            padding: 19px;
            border: 1px solid #eceaea;
            margin-right: 22px;
            border-radius: 8px;
            
          }
          .showing_store_item p:first-of-type {
            padding-top: 8px;
            font-size: 15px;
            text-align: center;
            color: #f27935;
          }
          .showing_store_item a {
            font-size: 12px;
          }
          .showing_deals_Item {
            border-radius: 7px;
            width: 170px;
            overflow: hidden;
            margin: 7px 7px;
          }
          .showing_deals_Item_contant {
            padding: 5px;
          }
          .showing_deals_Item_details {
            padding-top: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .showing_deals_Item_details strong {
            color: #f27935;
          }
          .showing_deals_Item_details small {
            color: gray;
            font-size: 11px;
            position: relative;
          }
          .showing_deals_Item_details small::after {
            content: "";
            height: 1px;
            width: 100%;
            left: 1px;
            background: gray;
            top: 5px;
            position: absolute;
          }
          .showing_articles_item {
            width: 200px;
            border-radius: 9px;
            overflow: hidden;
          }
          .showing_articles_item p {
            font-size: 14px;
            text-align: left;
          }
          .showing_articles_Item_details {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nodata_edit {
            padding-top: 24px;

            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default SearchPage;
