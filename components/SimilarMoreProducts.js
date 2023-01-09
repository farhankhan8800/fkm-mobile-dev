import React, { useState,useEffect } from "react";
import { Grid, Box,Typography ,Button  } from "@mui/material";
import hotDealsImage from "public/images/fire.png";
import Image from "next/image";
import Link from "next/link";
import HotDealsCards from "./HotDealsCard";



const SimilarMoreProducts = (props) => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    setStore(props.similarDeal)
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
               Similar <strong>Product</strong>
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
        <HotDealsCards hotdeals={store} />
    </>
  );
};

export default SimilarMoreProducts;
