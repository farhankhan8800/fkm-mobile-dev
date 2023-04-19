import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsFillEyeFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import ArticlesTabs from "components/articles-components/ArticlesTabs";
import Link from "next/link";
import { allArticleAPI } from "service/API"
import axios from "axios";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Articels = () => {
  const [articels_data, setArticels_data] = useState();
  const [featured_article, setFeatured_article] = useState()
  const [mviewed_article, setMviewed_article] = useState()
  const [all_articles, setAll_articles] = useState([])
  const [page, setPage] = useState(1)
  const [option, setOption] = useState("all")
  const [nodata, setNoData] = useState(false)

  const lodeMoreData = () => {
    setPage(page + 1)
  }
  const changeOption = (item) => {
    setNoData(false)
    //  console.log(item)
    setAll_articles("")
    setOption(item)
    setPage(1)

  }

  const userToken = useUserToken()
  const router = useRouter();

  const getData = async () => {
    try {
      let { data } = await axios.post(allArticleAPI, {
        apiAuth: apiAuth,
        device_type: DEVICE_TYPE,
        page: page,
        option: option
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        }
      })

      // console.log(data)
      if (option == "all") {
        setFeatured_article(data.response.featured_article)
        setMviewed_article(data.response.mviewed_article)
      }
      if (data.response.all_articles.length === 0) {
        setNoData(true)
      } else {
        setAll_articles([...all_articles, ...data.response.all_articles])
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [userToken, page, option]);

  const headeTitle = "Articels | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div className="articels_page" style={{ padding: "15px 4px" }}>
          <div className="main_articels">
            {
              featured_article ? <Link id={featured_article.post_id} style={{ color: "#000" }} href={`/${featured_article.slug_url}`}>
                <div className="" style={{ textAlign: "center" }}>
                  <Image
                    style={{ width: "100%", borderRadius: "8px" }}
                    src={featured_article.article_image}
                    alt="featured_article"
                    height={200}
                    width={350}
                  />
                </div>
                <h2 className="main_heading">
                  {featured_article.title}
                </h2>
                <p className="p_tag_big">{featured_article.description}</p>
                <div className="main_articels_details">
                  <div>
                    <p>
                      {" "}
                      <BsFillEyeFill /> <span>845835</span>
                    </p>
                    <p>
                      {" "}
                      <BiTime /> <span>{featured_article.update_time}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaUserAlt />
                      {/* <Image alt="" src={featured_article.author_image} width={40} height={40} /> */}
                      <span>{featured_article.author_title}</span>
                    </p>
                  </div>
                </div>
              </Link> : "Loding.."
            }
          </div>
          <div className="popular_section_bottom">
            <h2 className="most_popular_title">Most Popular</h2>
            <div className="most_populr_list">
              {
                mviewed_article && mviewed_article.map((item, i) => {
                  return (<>
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
                        <h3>
                          {item.title}
                        </h3>
                        {/* <Typography>{item.description}</Typography> */}
                        <div className="main_articels_details">
                          <div className="main_articels_details_ico">
                            <p>
                              {" "}
                              <BiTime /> <span>{item.update_time}</span>
                            </p>
                            <p>
                              {" "}
                              <BsFillEyeFill /> <span>{item.views}</span>
                            </p>
                          </div>
                          <div>
                            <Link href={`/${item.slug_url}`}>
                              <button
                                className="text_button"
                                style={{ fontWeight: "600", letterSpacing: "1px" }}
                              >
                                Read Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>)
                })
              }

            </div>
          </div>
          <div className="categroy_articles">
            <ArticlesTabs all_articles={all_articles} changeOption={changeOption} nodata={nodata} lodeMoreData={lodeMoreData} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .main_articels {
          padding: 21px;
          -webkit-box-shadow: 0px 10px 11px 4px#ede7e7;
          -moz-box-shadow: 0px 10px 11px 4px#ede7e7;
          box-shadow: 0px 10px 11px 4px #ede7e7;
          background: #efefef;
          border-radius: 10px;
        }
        .main_heading {
          font-size: 16px;
          padding: 10px 0;
          word-spacing: 1px;
        }
        .main_articels_details {
          display: flex;
          color: #969696;
          flex-wrap: wrap;
          padding-top: 10px;
          font-size:13px;
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
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          background: #ece4e4;
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          justify-content: space-between;
        }
        .main_articels_details div.main_articels_details_ico:first-child {
          justify-content: flex-start;
        }
        .most_populr_item h3 {
          font-size: 17px;
          color: #3c3c3c;
          text-transform: capitalize;
          word-spacing: 1px;
        }
      `}</style>
    </>
  );
};

export default Articels;
