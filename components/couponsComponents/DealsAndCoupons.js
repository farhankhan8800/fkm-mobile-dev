import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import CouponsCade from "../../pages/coupons-card";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import HotDealsCards from "../HotDealsCard";

const Tab = styled(TabUnstyled)`
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  min-width: 130px;
  padding: 16px 39px;
  margin: 2px 2px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #f27935;
  }
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
    background-color: #f27935;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: space-around;
    align-content: center;
  
    `
);
const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 9px 4px;
    background: ${theme.palette.mode === "dark" ? " #f27935" : "#fff"};
    border-radius: 0px;
    `
);

const DealsAndCoupons = ({categoryCoupons, noCouponData, noDealData , categoryDeals, dealsTabCall, couponsTabCall, addDealPage, addCouponPage}) => {
  const [deals, setDeals] = useState();
  const [coupons, setCoupons] = useState();


  useEffect(() => {
    setDeals(categoryDeals);
    setCoupons(categoryCoupons);
  }, [categoryCoupons, categoryDeals]);

  return (
    <>
      <Box sx={{ width: "100%", padding: "10px 17px" }}>
        <TabsUnstyled defaultValue={0}>
          <TabsList className="tabsList" sx={{ bgcolor: "#f27935" }}>
            <Tab onClick={dealsTabCall}> Deals </Tab>
            <Tab onClick={couponsTabCall}> Coupons </Tab>
          </TabsList>
          <TabPanel value={0}>
            <HotDealsCards hotdeals={deals} />
            <Box component="div" sx={{ p:1, textAlign: "center" }}>
              {
                noDealData ? `No Data Found`:
                <>
                 {deals ? (
                <Button
                  onClick={addDealPage}
                  sx={{ color: "#fff", fontWeight: "600" }}
                  variant="contained"
                >
                  Lode More
                </Button>
              ) : (
                ""
              )}
                </>
                }
             

            </Box>
          </TabPanel>
          <TabPanel value={1}>
            {
            // console.log(coupons)
            }
            <CouponsCade couponCard={coupons} />
            <Box component="div" sx={{ p: 1, textAlign: "center" }}>{
              noCouponData ? `No Data Found`:
              <>
               {coupons ? (
                <Button
                  onClick={addCouponPage}
                  sx={{ color: "#fff", fontWeight: "600" }}
                  variant="contained"
                >
                  Lode More
                </Button>
              ) : (
                ""
              )}
              </>
            }
             
            </Box>
          </TabPanel>
        </TabsUnstyled>
      </Box>
      <style jsx>
        {`
          .tabsList::-webkit-scrollbar {
            display: none;
          }
          .cash_back_store_offer {
            text-align: center;
            color: #000;
            padding: 1px 2px;

            font-size: 15px;
          }
          .cash_back_store_link {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default DealsAndCoupons;
