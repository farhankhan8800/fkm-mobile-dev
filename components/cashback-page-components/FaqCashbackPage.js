import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    marginBottom: 10,
    borderRadius: 8,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FaqCashbackPage = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [howtoearncashback, setHowtoearncashback] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setHowtoearncashback(props.howtoearncashback);
  }, [props]);

  return (
    <>
      <Grid container>
        <Grid item></Grid>
        <Grid item>
          <Typography
            fontWeight={600}
            sx={{ fontSize: "18px", padding: "5px 0", color: "#f27935" }}
            variant="h6"
            component="h6"
          >
            {" "}
            Important Thing to Remember(FAQ)
          </Typography>
        </Grid>
      </Grid>
      <Box component="div">
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            bgcolor: "#fff5efv  ",
          }}
        >
          <div>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel1`}
              onChange={handleChange(`panel1`)}
            >
              <AccordionSummary
                aria-controls={`panel1d-content`}
                id={`panel1d-header`}
              >
                <Typography fontSize="14px">
                  What is this Cashback offer from FreeKaaMaal?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  We receive referral commission for driving traffic and sales
                  to our merchant store's site. We pass on the entire commission
                  back to our customers as Cashback reward which they can redeem
                  through PayTM or Bank transfer
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel2`}
              onChange={handleChange(`panel2`)}
            >
              <AccordionSummary
                aria-controls={`panel2d-content`}
                id={`panel2d-header`}
              >
                <Typography fontSize="14px">
                  How can I earn cashback via FreeKaaMaal.com?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  Easy steps to follow to earn Cashback
                </Typography>
                <ol>
                  <li>
                    Login to FreeKaaMaal and visit the cashback page here{" "}
                    <Link href="">https://freekaamaal.com/cashback</Link>
                  </li>
                  <li>Easy steps to follow to earn Cashback</li>
                  <li>
                    Look for your favorite online retailer you want to shop on.
                  </li>
                  <li>Click on their site via link given on our site.</li>
                  <li>
                    Shop and make the transaction with the retailer's site like
                    you normally do.
                  </li>
                  <li>
                    Retailer pays us a commission for this sale. We pass on the
                    same to you as 'cashback'. Initially your Cashback remains
                    in 'Pending' status. Once the return period for the product
                    is over, your cashback status becomes 'Confirmed'
                  </li>
                  <li>
                    Now you can redeem the amount any time via Online
                    Transfer/Mobile Recharge/Shopping Voucher.
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel3`}
              onChange={handleChange(`panel3`)}
            >
              <AccordionSummary
                aria-controls={`panel3d-content`}
                id={`panel3d-header`}
              >
                <Typography fontSize="14px">
                  Can I visit the retailer directly, and just send you a receipt
                  to get my cashback?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  Certainly not! In order to earn cashback, you have to visit
                  the retailer via our unique link.​This is how the retailer
                  tracks that we got them the sale, and we would receive a
                  commission from them and pay you cashback from this. If you go
                  to the retailer directly, thenwe will not​be able to claim any
                  commission and pay cashback to you. Also, werecommends you not
                  to use a reference or code provided by a comparison site. In
                  that case, the commission from the sale would be paid to the
                  comparison site. If we do not receive any commission from
                  retailers we would not be unable to give cashback to you.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel4`}
              onChange={handleChange(`panel4`)}
            >
              <AccordionSummary
                aria-controls={`panel4d-content`}
                id={`panel4d-header`}
              >
                <Typography fontSize="14px">
                  I made a purchase but have not received any cashback email for
                  it. What can I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  I made a purchase but have not received any cashback email for
                  it. What can I do? If you made a transaction less than than 3
                  days ago, please wait a little longer.Typically it takes
                  between 24 - 72 hours for retailers to track sales, so you
                  could still receive your cashback email automatically.
                </Typography>
                <Typography fontSize="13px">
                  However, If your purchase was done over 3 days ago, please
                  submit a missing Cashback Request visiting 'My Account'
                </Typography>

                <Typography fontSize="13px">
                  here (
                  <a href="https://freekaamaal.com/cashback/home">
                    https://freekaamaal.com/cashback/home
                  </a>
                  ) then click on ‘Report Missing Cashback". Any Missing
                  Cashback Report will not be accepted after 10 days. Sometimes,
                  though rare, retailers fail to track a transaction on their
                  end. After we receive transaction details from you, we can
                  follow this up with the retailer, and try to get your missing
                  cashback.
                </Typography>

                <Typography fontSize="13px">
                  Generally, sticking to the terms and conditions provided on
                  our retailer page and ensuring you follow the recommended
                  process will minimize the risk of anything going wrong.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel5`}
              onChange={handleChange(`panel5`)}
            >
              <AccordionSummary
                aria-controls={`panel5d-content`}
                id={`panel5d-header`}
              >
                <Typography fontSize="14px">
                  What are the reasons for a cashback to not track or track
                  incorrectly?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  IWhen you visit a retailer via our website, our systems can
                  track that visit and record an 'exit click'. Thereafter, if
                  you don't get an email from us about your cashback it is
                  likely that somehow the retailer has missed the transaction.
                  In these cases we will chase the retailer and do our best to
                  get you your missing cashback. In some cases the retailer may
                  decline your cashback, such as:
                </Typography>
                <ul>
                  <li>
                    The purchase was returned, cancelled or the order amended.
                  </li>
                  <li>The purchase was not completed fully online.</li>
                  <li>
                    Another referrer has been awarded the cashback commission
                    (e.g. a price comparison site) if you have used their
                    referreral code in between.
                  </li>
                  <li>
                    You did not comply with the terms and conditions listed on
                    our website and/or the retailer's.
                  </li>
                  <li>
                    A voucher code or gift code not authorized by our website
                    was used.
                  </li>
                  <li>
                    The retailer has ceased trading or has gone into
                    administration.
                  </li>
                  <li>
                    Cookies were disabled and hence the tracking could not be
                    completed.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel6`}
              onChange={handleChange(`panel6`)}
            >
              <AccordionSummary
                aria-controls={`panel6d-content`}
                id={`panel6d-header`}
              >
                <Typography fontSize="14px">
                  Where do I see my cashback earnings?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  You can Sign In to FreeKaaMaal here (
                  <a href="https://freekaamaal.com/cashback/home">
                    https://freekaamaal.com/cashback/home
                  </a>
                  )and then at the top right go to My Account & check your
                  Cashback earnings in Balance & Historysection.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel7`}
              onChange={handleChange(`panel7`)}
            >
              <AccordionSummary
                aria-controls={`panel7d-content`}
                id={`panel7d-header`}
              >
                <Typography fontSize="14px">
                  How do I request payment of my cashback?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                  When you have a ‘Confirmed’ status of your Cashback, you can
                  claim your cashback
                </Typography>
                <Typography fontSize="13px">
                  requesting PayTM Tranfer, Right now we only offer PayTM
                  tranfer but soon other options like Banktransfer andShopping
                  Voucherswill be available too.
                </Typography>
                <Typography fontSize="13px">
                  To request payment, login to your account and​​​ click
                  on“Withdraw Money” section inredeem your cashback amount.
                </Typography>
                <Typography fontSize="13px">
                  (Please note that only Cashback with ‘Confirmed’ status can be
                  paid. Until we receive payment from retailers, Cashback
                  remains as ‘Pending’ and cannot be paid to you.)
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel8`}
              onChange={handleChange(`panel8`)}
            >
              <AccordionSummary
                aria-controls={`panel8d-content`}
                id={`panel8d-header`}
              >
                <Typography fontSize="14px">
                Why have I not received my cashback yet ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                Because it generally takes quite a while for your transaction details to reach us via merchant and therefore for your transaction to become confirmed we need an authentication from retailer side that you have made a purchase on their site through FreeKaaMaal.com.
                </Typography>
               
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel9`}
              onChange={handleChange(`panel9`)}
            >
              <AccordionSummary
                aria-controls={`panel9d-content`}
                id={`panel9d-header`}
              >
                <Typography fontSize="14px">
                What does Pending ,Confirmed or Decline status mean?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                When you click through from FreeKaaMaaland make your transaction on a merchant site, your action is tracked by the merchant and reported back to us . When the transaction is first reported, it will be given a ‘Pending’ status. This means that the retailer has tracked your transaction and indicated us about your purchase through ​FreeKaaMaal​. Sometimes your transaction is declined often because of you return the purchased item back to the retailer.In this case your status will also switch to ‘Decline’.After a certain number of days, when their is no return and transaction is confirmed your status will normally switch to ‘Confirmed’ status. This means that the retailer has agreed that all is fine with your transaction and your cashback is now confirmed from our side. You can now claim your cashback at any time either through online transfer, mobile recharge or shopping voucher.
                </Typography>
               
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: "8px" }}
              expanded={expanded === `panel10`}
              onChange={handleChange(`panel10`)}
            >
              <AccordionSummary
                aria-controls={`panel10d-content`}
                id={`panel10d-header`}
              >
                <Typography fontSize="14px">
                Why hasn't my cashback been confirmed yet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="13px">
                Since different merchants process transactions through the various stages, they have a cycle of confirming the transaction when there is no probability of decline of the respective transaction.Once they confirm us with your transaction we will change your status as Confirmed.
                </Typography>
               
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </Box>
      <style jsx>{`
        ul,
        ol {
          margin-left: 10px;
          line-height: 19px;
          padding-top: 10px;
        }
      `}</style>
    </>
  );
};

export default FaqCashbackPage;
