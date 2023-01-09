import React, { useState } from "react";

import {
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const brandList = [
  {
    name: "flipKart",
    count: 323,
  },
  {
    name: "JioMart",
    count: 3,
  },
  {
    name: "Ajio",
    count: 32,
  },
  {
    name: "flipKart",
    count: 323,
  },
  {
    name: "D Mart",
    count: 86,
  },
];
const category = [
  {
    name: "Man",
    count: 23,
  },
  {
    name: "Women",
    count: 3,
  },
  {
    name: "Child",
    count: 32,
  },
  {
    name: "Food",
    count: 33,
  },
  {
    name: "Grocery",
    count: 86,
  },
  {
    name: "Grocery",
    count: 96,
  },
  {
    name: "Electronics",
    count: 46,
  },
];
const DealsFilterDrower = ({ sandClick, togalDrower }) => {
  const [smallNumber, setSmallNumber] = useState();
  const [bigNumber, setBigNumber] = useState();
  const [brand, setBrand] = useState(brandList);
  const [searchBrand, setSearchBrand] = useState();
  const [searchType, setSearchType] = useState();

  const searchTypeHandler = (e) => {
    category.filter((item) =>
      item.name.toLowerCase().startsWith(e.target.value)
    );
    setSearchType(e.target.value);
  };
  const searchBrandHandler = (e) => {
    setSearchBrand(e.target.value);
    if ((e.target.value = "")) {
      setBrand(brand);
    } else {
      setBrand(
        brand.filter((item) =>
          item.name.toLowerCase().startsWith(e.target.value)
        )
      );
      // console.log(brand.filter((item) => item.name.startsWith(e.target.value)));
    }
  };

  const smallNumberChangeHandler = (e) => {
    setSmallNumber(e.target.value);
  };
  const bigNumberChangeHandler = (e) => {
    setBigNumber(e.target.value);
  };
  const collectPriceRange = (e) => {
    e.preventDefault();
    console.log(`price range ${smallNumber} and ${bigNumber}`);
    togalDrower();
  };

  const addFilter = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        {sandClick ? (
          <div className="drower_box">
            <Grid
              sx={{ paddingBottom: "3px" }}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                xs={8}
                container
                item
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <IconButton onClick={togalDrower} aria-label="times">
                    <ClearIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="#000" component="h5">
                  
                    Filter
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Button variant="text">Clear All</Button>
              </Grid>
            </Grid>
            <Divider></Divider>
            <Box component="div" sx={{ p: 1 }}>
              <Typography
                variant="p"
                sx={{ fontWeight: "600", paddingTop: 1 }}
                color="#000"
                component="p"
              >
                PRICE
              </Typography>
              <Typography
                sx={{ paddingTop: 1 }}
                variant="p"
                color="gray"
                component="p"
              >
                Enter a Price Range
              </Typography>
              <form onSubmit={addFilter}>
                <Grid container sx={{ paddingTop: 1, paddingBottom: 2 }}>
                  <Grid item xs={3}>
                    <TextField
                      type="number"
                      value={smallNumber}
                      name="smallNumber"
                      onChange={smallNumberChangeHandler}
                      id="outlined-basic"
                      placeholder="10"
                      size="small"
                      variant="outlined"
                    />{" "}
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="number"
                      value={bigNumber}
                      name="bigNumber"
                      onChange={bigNumberChangeHandler}
                      id="outlined-basic"
                      placeholder="100"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ textAlign: "right" }} item xs={5}>
                    <Button
                      onClick={collectPriceRange}
                      sx={{ color: "#fff", fontWeight: "600" }}
                      type="button"
                      variant="contained"
                    >
                      Go
                    </Button>
                  </Grid>
                </Grid>
                <Divider />
                <Box component="div" sx={{ padding: "10px 0" }}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "600", paddingTop: 1 }}
                    color="#000"
                    component="p"
                  >
                    BRAND
                  </Typography>
                  <TextField
                    name="sarchBrand"
                    onChange={searchBrandHandler}
                    value={searchBrand}
                    id="outlined-basic"
                    sx={{ width: "100%", margin: "10px 0" }}
                    placeholder="Search Brand"
                    size="small"
                    variant="outlined"
                  />
                  <FormGroup>
                    {brand.map((brand, i) => (
                      <FormControlLabel
                        key={i + 1}
                        control={<Checkbox />}
                        label={`${brand.name} (${brand.count})`}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box component="div" sx={{ padding: "10px 0" }}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "600", paddingTop: 1 }}
                    color="#000"
                    component="p"
                  >
                    TYPE
                  </Typography>
                  <TextField
                    name="sarchType"
                    onChange={searchTypeHandler}
                    value={searchType}
                    id="outlined-basic"
                    sx={{ width: "100%", margin: "10px 0" }}
                    placeholder="Search type"
                    size="small"
                    variant="outlined"
                  />
                  <FormGroup>
                    {category.map((category, i) => (
                      <FormControlLabel
                        key={i + 1}
                        control={<Checkbox />}
                        label={`${category.name} (${category.count})`}
                      />
                    ))}
                  </FormGroup>
                </Box>
                <Box>
                  <Button
                    onClick={togalDrower}
                    type="submit"
                    sx={{ color: "#fff", fontWeight: "600", width: "100%" }}
                    variant="contained"
                  >
                    Apply
                  </Button>
                </Box>
              </form>
            </Box>
          </div>
        ) : (
          ""
        )}
      </div>
      <style>{`
    .drower_box{
      width: 96%;
      position: fixed;
      overflow: auto;
      bottom: 0;
      background-color: #fff;
      top: 55px;
      padding: 7px 6px;
      box-shadow: 12px 6px 15px 4px;
      right: 0;
      max-width: 600px;
  }
    `}</style>
    </>
  );
};

export default DealsFilterDrower;
