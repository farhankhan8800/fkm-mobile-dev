import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const MissingOrder = () => {
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

  const headeTitle = "Missing History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ p: 2 }}>
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
                    <StyledTableCell>&#8377; {item.amount}</StyledTableCell>
                    <StyledTableCell>{item.status}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default MissingOrder;
