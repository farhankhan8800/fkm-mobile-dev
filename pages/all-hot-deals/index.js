import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import dealsImage from "../../public/images/img.jpg";
import Link from "next/link";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DealsFilterDrower from "../../components/allHotDealsComponent/DealsFilterDrower";

import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

const HotDealmain = [
  {
    src: "https://images.freekaamaal.com/featured_images/large_185287_Untitleddesign-2022-10-21T110259.194.png",
    alt: "banner",
    mrp: 200,
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    category: "child",
    store: "auric",
    title: "AURIC",
    producId: 1,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 140,
    category: "child",
    store: "jokey",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    category: "man",
    store: "yxyxx",
    mrp: 300,
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 700,
    category: "food",
    store: "freshtohome",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 30,
    category: "food",
    store: "freshtohome",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 100,
    category: "man",
    store: "sery",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 160,
    category: "food",
    store: "peesafe",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 2,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 30,
    category: "food",
    store: "freshtohome",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 3,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 80,
    category: "food",
    store: "peesafe",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 4,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 900,
    category: "chlid",
    store: "jockey",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 4,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 300,
    category: "man",
    store: "bage",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 4,
  },
  {
    src: dealsImage,
    alt: "banner",
    mrp: 360,
    category: "food",
    store: "freshtohome",
    text: " Lizards are a widespread group of squamate  ",
    Viewers: 5,
    title: "AURIC",
    producId: 4,
  },
];

const HotDealInternal = () => {
  const [allHotDealsPopup, setAllHotDealsPopup] = useState(false);
  const [drowerHotDealsPopup, setDrowerHotDealsPopup] = useState(false);
  const [filter, setFilter] = useState(HotDealmain);

  const toggleClick = () => {
    setAllHotDealsPopup(!allHotDealsPopup);
  };
  const FliterButtonClick = () => {
    setTimeout(() => {
      setAllHotDealsPopup(false);
    }, 500);
  };
  const togalDrower = () => {
    setTimeout(() => {
      setDrowerHotDealsPopup(!drowerHotDealsPopup);
    }, 500);
  };
  const lowPriceClick = () => {
    setFilter(filter.sort((a, b) => a.mrp - b.mrp));
  };
  const style = {
    width: "100%",

    bgcolor: "background.paper",
  };
  const togalBox = {
    position: "fixed",
    width: "90%",
    zIndex: 100,
    top: "26%",
    maxWidth: "360px",
    background: "#fff",
    left: " 19px",
    borderRadius: "7px",
    boxShadow: "0px 0px 19px -6px grey",
    overflow: "hidden",
  };
  const headeTitle = "All Hot Deals | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 1, position: "relative" }}>
          <Box
            component="div"
            sx={{ bgcolor: "#f1f1f1", p: 1, borderRadius: "4px", m: 2 }}
          >
            <Grid justifyContent="space-around" alignItems="center" container>
              <Grid item>
                <Button
                  onClick={toggleClick}
                  sx={{ color: "#000" }}
                  variant="text"
                  startIcon={<FilterListIcon />}
                >
                  Popularity
                </Button>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
                <Button
                  onClick={togalDrower}
                  sx={{ color: "#000" }}
                  variant="text"
                  startIcon={<FilterAltIcon />}
                >
                  Filter
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box component="div">
            <Grid container>
              <Grid>
                <div className="flex_div">
                  {filter.map((item, i) => {
                    return (
                      <Box
                        sx={{ maxWidth: "167px", marginBottom: "10px " }}
                        component="div"
                        key={i}
                      >
                        <Card
                          sx={{
                            background: "rgb(248 248 248)",
                            border: "1px solid #dfdbdb",
                          }}
                        >
                          <Link
                            className="card_link"
                            href={`/all-hot-deals/${item.producId}`}
                          >
                            <CardActionArea>
                              <Box
                                component="div"
                                sx={{ padding: "15px 21px 0px" }}
                              >
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  height={92}
                                  width={120}
                                  style={{ borderRadius: "7px" }}
                                />
                              </Box>
                              <CardContent
                                sx={{
                                  background: "rgb(248 248 248)",
                                  padding: "7px",
                                }}
                              >
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                  sx={{ color: "#000", marginBottom: "0" }}
                                >
                                  {item.title}{" "}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#000", padding: "4px 0" }}
                                >
                                  {item.text}{" "}
                                </Typography>
                                <Box component="div" sx={{ paddingTop: "4px" }}>
                                  <strong className="card_amouunt">
                                    &#8377;{item.mrp}
                                  </strong>
                                  <small className="card_small_amouunt">
                                    &#8377;{item.mrp}
                                  </small>
                                </Box>
                              </CardContent>
                            </CardActionArea>
                          </Link>
                        </Card>
                      </Box>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          </Box>
          {allHotDealsPopup ? (
            <Box componnt="div" sx={togalBox}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem sx={{ position: "relative" }}>
                  <Typography variant="h5" component="h5">
                    Filter
                  </Typography>
                  <div
                    onClick={toggleClick}
                    style={{ position: "absolute", right: "18px" }}
                  >
                    <IconButton>
                      <ClearOutlinedIcon color="warning" />
                    </IconButton>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button onClick={FliterButtonClick}>
                  <ListItemText sx={{ margin: "0" }}>Popular</ListItemText>
                </ListItem>
                <ListItem button onClick={FliterButtonClick}>
                  <ListItemText onClick={lowPriceClick} sx={{ margin: "0" }}>
                    Low Prize
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={FliterButtonClick}>
                  <ListItemText sx={{ margin: "0" }}>Discount</ListItemText>
                </ListItem>
                <ListItem button onClick={FliterButtonClick}>
                  <ListItemText sx={{ margin: "0" }}>CashBack</ListItemText>
                </ListItem>
              </List>
            </Box>
          ) : (
            ""
          )}
          <DealsFilterDrower
            sandClick={drowerHotDealsPopup}
            togalDrower={togalDrower}
          />
        </Box>
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
