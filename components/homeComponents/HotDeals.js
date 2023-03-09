import React, { useEffect, useState } from "react";

import hotDealsImage from "../../public/images/fire.png";
import { Grid, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HotDealsCards from "../HotDealsCard";

const HotDeals = (props) => {
  const [hotDeals, SethotDeals] = useState();
  useEffect(() => {
    SethotDeals(props.hotdeals);
  }, [props]);

  return (
    <>
      <Grid
        container
        textAlign="center"
        justifyContent="space-between"
        sx={{ padding: "13px 3px 3px" }}
      >
        <Grid item>
          
          <Grid container>
           
            <Grid item>
              <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
                <Image
                  src={hotDealsImage}
                  alt="Hot Deal Of the Day"
                  width={29}
                  height={29}
                />
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h6">
                {" "}
                Hot <strong>Deals</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button>
            <Link style={{ color: "#f27935" }} href="/all-hot-deals">
              View All
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <HotDealsCards hotdeals={hotDeals} />
      </Box>

      <Box component="div" sx={{ p: 1, textAlign: "center" }}>
        {props.noData ? (
          `No Data Found`
        ) : (
          <>
            {hotDeals ? (
              <Button
                onClick={props.pageFunction}
                sx={{ color: "#fff", fontWeight: "600" }}
                variant="contained"
              >
                Lode More
              </Button>
            ) : (
              "No Data"
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default HotDeals;
