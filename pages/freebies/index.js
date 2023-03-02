import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { freebiesAPI } from "service/API";
import { useRouter } from "next/router";
import axios from "axios";

const apiAuth = process.env.API_AUTH;

const Freebies = () => {
  const [readMore, setReadMore] = useState(false);
  const [expanded, setExpanded] = useState("panel1");
  const [userToken, setUserToken] = useState();
  const [cate_data, setCate_data] = useState();
  const [offers_data, setOffers_data] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.post(
        freebiesAPI,
        {
          apiAuth: apiAuth,
          device_type: "4",
          cate_slug: "earn-extra-cashback",
          page: page,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );
      setCate_data(data.response.cate_data);
      console.log(data.response.offers_data.length);
      if (data.response.offers_data.length == 0) {
        setNoData(true);
      } else {
        console.log(data.response.offers_data);
        setOffers_data([...offers_data, ...data.response.offers_data]);
      }
    };
    getData();
  }, [userToken, page]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const readMoreBtn = () => {
    if (readMore === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  };

  const LodeMoreFun = () => {
    setPage(page + 1);
  };
  const headeTitle = "Freebies | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div className="topFreebise_page" style={{ paddingTop: "57px" }}>
        {cate_data ? (
          <div className="freebise_top_box">
            <h3 className="freebise_top_box_heading">
              {cate_data.offer_heading}
            </h3>
            <p
              className="freebise_top_box_p"
              style={{ height: readMore === true ? "100%" : "40px" }}
            >
              {cate_data.top_desc}
            </p>
            <div className="freebise_top_box_button">
              <Button onClick={readMoreBtn} variant="text" type="button">
                {readMore === true ? "Close" : "Read More"}{" "}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "2rem", marginTop: "10px" }}
            />
            <Skeleton animation="wave" variant="rounded" height={60} />
            <Skeleton animation="wave" variant="text" height={20} />
          </>
        )}

        <div className="accordion_section">
          {offers_data ? (
            <>
              {offers_data &&
                offers_data.map((item, i) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Accordion
                      expanded={expanded === `panel${i + 1}`}
                      sx={{ marginBottom: "10px" }}
                      onChange={handleChange(`panel${i + 1}`)}
                      key={i}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${i + 1}bh-content`}
                        id={`panel${i + 1}bh-header`}
                      >
                        <div style={{ width: "24%", flexShrink: 0 }}>
                          <Image
                            src={item.store_image}
                            alt=""
                            width={60}
                            height={40}
                          />
                        </div>
                        <div style={{ color: "text.secondary" }}>
                          <h4 className="">{item.offer_title}</h4>
                          {item.is_cashback == 1 ? (
                            <>
                              <Typography
                                color={"red"}
                                fontSize={12}
                                paddingTop={"7px"}
                              >
                                {item.max_cashback} &nbsp; Cashback
                              </Typography>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p
                          className="accordion_section_bottom_p"
                          dangerouslySetInnerHTML={{ __html: item.bottom_desc }}
                        ></p>
                        <div className="" style={{ padding: "5px 0 " }}>
                          <Link href={item.landing_url}>
                            <Button
                              variant="contained"
                              size="small"
                              sx={{ color: "#fff" }}
                            >
                              {" "}
                              {item.is_cashback == 1
                                ? "Shop & Earn"
                                : "Shop Now"}{" "}
                            </Button>
                          </Link>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              <div style={{ textAlign: "center" }}>
                {noData ? (
                  "No More Found"
                ) : (
                  <Button
                    onClick={LodeMoreFun}
                    variant="contained"
                    size="small"
                    sx={{ color: "#fff" }}
                  >
                    Lode More
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
              <Skeleton animation="wave" variant="rounded" height={130} />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ margin: "10px 0" }}
                height={60}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ margin: "10px 0" }}
                height={60}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ margin: "10px 0" }}
                height={60}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ margin: "10px 0" }}
                height={60}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ margin: "10px 0" }}
                height={60}
              />
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .topFreebise_page {
          padding: 4px;
        }
        .freebise_top_box_p {
          height: 37px;
          overflow: hidden;
          font-size: 15px;
        }
        .freebise_top_box {
          text-align: center;
          padding-top: 20px;
        }
        .freebise_top_box h3 {
          font-size: 21px;
          padding: 0px 0 10px;
        }
        .accordion_section {
          padding-top: 20px;
        }
        .accordion_section p {
          font-size: 13px;
          line-height: 20px;
          padding-top: 10px;
        }
        .accordion_section p.accordion_section_bottom_p {
          padding-top: 0px;
        }
        .accordion_section h4 {
          font-size: 15px;
          color: #040404;
          font-weight: 600;
          margin-top: 6px;
          text-align: justify;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
export default Freebies;
