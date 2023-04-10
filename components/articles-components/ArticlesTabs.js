import * as React from "react";

import TabsUnstyled from "@mui/base/TabsUnstyled";

import { BsFillEyeFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const ArticlesTabs = ({ all_articles, lodeMoreData, changeOption, nodata }) => {
  const [all_articles_data, setAll_articles_data] = useState();
  const [ToggleState, setToggleState] = useState(1);

  useEffect(() => {
    setAll_articles_data(all_articles);
  }, [all_articles]);

  const allTab = () => {
    changeOption("all");
    toggleTab(1);
  };

  const FashionTab = () => {
    changeOption("fashion-accessories-offers");
    toggleTab(2);
  };

  const FoodTab = () => {
    changeOption("food-drink-offers");
    toggleTab(3);
  };

  const ElectronicTab = () => {
    changeOption("electronics-offers");
    toggleTab(4);
  };
  const EntertainmentTab = () => {
    changeOption("entertainment-offers");
    toggleTab(5);
  };

  const HealthBeauityTab = () => {
    changeOption("health-beauty-personal-care-offers");
    toggleTab(6);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <>
      <div>
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={allTab}
          >
            All
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={FashionTab}
          >
            Fashion
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={FoodTab}
          >
            Food
          </li>
          <li
            className={`tabs ${getActiveClass(4, "active-tabs")}`}
            onClick={ElectronicTab}
          >
            Electronic
          </li>
          <li
            className={`tabs ${getActiveClass(5, "active-tabs")}`}
            onClick={EntertainmentTab}
          >
            Entertainment
          </li>
          <li
            className={`tabs ${getActiveClass(6, "active-tabs")}`}
            onClick={HealthBeauityTab}
          >
            Health&nbsp;&&nbsp;Beauity
          </li>
        </ul>

        <div>
          <div className={`content ${getActiveClass(1, "active-content")}`}>
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`/${item.slug_url}`}>
                                <button
                                  className="text_button"
                                  style={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p  className="p_tag_big" style={{fontSize:"20px"}}>NO Data</p>
                ) : (
                  <button onClick={lodeMoreData} className="border_button">
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`${item.slug_url}`}>
                                <button
                                 className="text_button"
                                  style={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p className="p_tag_big" style={{fontSize:"20px"}}>No Data</p>
                ) : (
                  <button onClick={lodeMoreData} className="border_button">
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                {" "}
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                {" "}
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`/${item.slug_url}`} className="text_button">
                                <button
                                  style={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p style={{fontSize:"20px"}} className="p_tag_big">NO Data</p>
                ) : (
                  <button onClick={lodeMoreData} className="border_button">
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={`content ${getActiveClass(4, "active-content")}`} >
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                {" "}
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                {" "}
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`/${item.slug_url}`}>
                                <Button
                                  variant="text"
                                  sx={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p style={{fontSize:"20px"}} className="p_tag_big">NO Data</p>
                ) : (
                  <button onClick={lodeMoreData} className="border_button">
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={`content ${getActiveClass(5, "active-content")}`}>
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                {" "}
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                {" "}
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`/${item.slug_url}`}>
                                <button
                                 className="text_button"
                                  style={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p style={{fontSize:"20px"}} className="p_tag_big">NO Data</p>
                ) : (
                  <button onClick={lodeMoreData} className="border_button">
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={`content ${getActiveClass(6, "active-content")}`}>
            <div className="most_populr_list">
              {all_articles_data &&
                all_articles_data.map((item, i) => {
                  return (
                    <>
                      <div className="most_populr_item" key={i}>
                        <div className="most_populr_item_img">
                          <Image
                            style={{ borderRadius: "5px" }}
                            src={item.article_image}
                            alt=""
                            height={80}
                            width={70}
                          />
                        </div>
                        <div style={{ paddingLeft: " 14px" }}>
                          <h3>{item.title}</h3>
                          <div className="main_articels_details">
                            <div className="main_articels_details_ico">
                              <p>
                                {" "}
                                <BiTime /> <span>{item.update_time}</span>
                              </p>
                              <p>
                                {" "}
                                <BsFillEyeFill /> <span>{item.author}</span>
                              </p>
                            </div>
                            <div>
                              <Link href={`/${item.slug_url}`}>
                                <button
                                  className="text_button"
                                  style={{
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Read Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div style={{ textAlign: "center" }}>
                {nodata ? (
                  <p style={{fontSize:"20px"}} className="p_tag_big">NO Data</p>
                ) : (
                  <button  className="border_button" onClick={lodeMoreData} >
                    More Data
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tab-list {
          display: flex;
          list-style: none;
          overflow: auto;
          font-size: 18px;
          padding: 10px 2px;
          margin: 0;
        }
        .tab-list::-webkit-scrollbar {
            display: none;
        }
        .tabs {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 6px 19px;
          cursor: pointer;
          margin: 0 10px;
          border: 1px solid transparent;
          border-radius: 4px;
        }
        .active-tabs {
          color: var(--main-color);
          border-color: var(--main-color);
        }

        .content {
          display: none;
        }

        .active-content {
          display: block;

          overflow: auto;
          margin: 0 10px;
        }

        .main_articels_details {
          display: flex;
          color: #969696;
          flex-wrap: wrap;
          padding-top: 10px;
          align-items: center;
          justify-content: space-between;
        }
        .main_articels_details div:first-child {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .main_articels_details div:first-child p:nth-child(2) {
          padding: 0 17px;
        }
        .main_articels_details span {
          padding: 0 5px;
        }
        .popular_section_bottom {
          padding-top: 16px;
        }
        .most_popular_title {
          letter-spacing: 1px;
          padding: 5px 0;
          font-size: 25px;
        }
        .most_populr_item {
          padding: 13px;
          border: 1px solid #e0d2d2;
          display: grid;
          grid-template-columns: auto auto;
          border-radius: 8px;
          background: #ece4e4;
          margin-bottom: 20px;
          justify-content: start;
          
        }
        .main_articels_details div.main_articels_details_ico:first-child {
          justify-content: flex-start;
        }
        .most_populr_item h3 {
          font-size: 15px;
          color: #3c3c3c;
          text-transform: capitalize;
          word-spacing: 1px;
        }
      `}</style>
    </>
  );
};

export default ArticlesTabs;
