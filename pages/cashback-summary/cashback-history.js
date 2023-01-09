import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

const storeData = [
  {
    store: "xyxxy",
    amount: 7635,
    status: "conform",
  },
  {
    store: "xyxxy",
    amount: 7635,
    status: "conform",
  },
  {
    store: "xyxxy",
    amount: 7635,
    status: "conform",
  },
  {
    store: "xyxxy",
    amount: 7635,
    status: "panding",
  },
  {
    store: "xyxxy",
    amount: 7635,
    status: "conform",
  },
  {
    store: "xyxxy",
    amount: 7635,
    status: "panding",
  },
];

const CashbackHistory = () => {
  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;

    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    min-width: 130px;
    padding: 10px 5px;

    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #f27935;
    }

    &:focus {
      color: #fff;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: #fff;
      color: #f27935;
    }
  `;

  const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
   
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? "#fff" : "#fff"};
    `
  );
  const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
   
    border-radius: 7px;
    `
  );
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const headeTitle = "Cashback History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box
          sx={{
            p: 2,
            margin: "10px 10px 0",
            bgcolor: "#f1f1f1",
            borderRadius: "5px",
          }}
        >
          <Typography component="p" fontSize="13px" color="gray">
            tting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop p
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList className="tabsList">
                <Tab>All</Tab>
                <Tab>Panding</Tab>
                <Tab>Confirmed</Tab>
                <Tab>Declined</Tab>
              </TabsList>
              <TabPanel value={0}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>SN</StyledTableCell>
                        <StyledTableCell>Store</StyledTableCell>
                        <StyledTableCell>Amount</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {storeData.map((item, i) => (
                        <StyledTableRow key={i + 1}>
                          <StyledTableCell>{i + 1}</StyledTableCell>
                          <StyledTableCell>{item.store}</StyledTableCell>
                          <StyledTableCell>
                            &#8377; {item.amount}
                          </StyledTableCell>
                          <StyledTableCell>{item.status}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value={1}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>SN</StyledTableCell>
                        <StyledTableCell>Store</StyledTableCell>
                        <StyledTableCell>Amount</StyledTableCell>
                        <StyledTableCell>Statusrr</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {storeData.map((item, i) => (
                        <StyledTableRow key={i + 1}>
                          <StyledTableCell>{i + 1}</StyledTableCell>
                          <StyledTableCell>{item.store}</StyledTableCell>
                          <StyledTableCell>
                            &#8377; {item.amount}
                          </StyledTableCell>
                          <StyledTableCell>{item.status}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value={2}></TabPanel>
              <TabPanel value={3}></TabPanel>
            </TabsUnstyled>
          </Box>
        </Box>
      </div>
      <style>
        {`
                        .tabsList::-webkit-scrollbar {
                          display: none;
                      }
                    
                    `}
      </style>
    </>
  );
};

export default CashbackHistory;
