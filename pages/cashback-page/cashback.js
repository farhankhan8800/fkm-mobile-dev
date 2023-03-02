import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Button, Typography, Box } from "@mui/material";

const headeTitle = "100% Cashback | Freekaamaal";
const apiAuth = process.env.API_AUTH;

const Cashback = () => {
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div
        style={{
          paddingTop: "56px",
          background: "#f3f3f3",
          minHeight: "100vh",
        }}
        className="100cashbackpage"
      >
        <div className="top_box">
          <h3>Earn Real Money When You Shop Online</h3>
          <Typography fontSize={14} sx={{ margin: "10px 0" }}>
            Just shop at your favorite store by logging into your FreeKaaMaal
            account and earn upto 100% cashback. Amount will be added to your
            account once your purchase is over and redeem your earning through
            payTM , Bank Transfer or Gift Vouchers
          </Typography>

          <Box>
            <Link className="Shop__Start" href="">
              Shop & Start Earning Now
            </Link>
          </Box>
        </div>
        <div className="middle_box">
          <h4>Top CashBack Stores</h4>
          <hr />
          <div className="stroes_box">
            <div className="store_wrapper">
              <Link href="">
                <Image
                  alt=""
                  src="https://images.freekaamaal.com/store-images/4264.jpg"
                  width={92}
                  height={32}
                />
                <div className="prize_tag_ab">
                  {" "}
                  <strong>&#8377;3000</strong> &nbsp;Cashback
                </div>
              </Link>
            </div>
            <div className="store_wrapper">
              <Link href="">
                <Image
                  alt=""
                  src="https://images.freekaamaal.com/store-images/4264.jpg"
                  width={92}
                  height={32}
                />
                <div className="prize_tag_ab">
                  {" "}
                  <strong>&#8377;3000</strong> &nbsp;Cashback
                </div>
              </Link>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="">
              <Button variant="contained" size="small" sx={{ color: "#fff" }}>
                View All Store
              </Button>
            </Link>
          </div>
        </div>
        <div className="deal_section middle_box">
          <h4>Top Cashback Deals</h4>
          <hr />
          <div className="stroes_box ">
            <div className="store_wrapper deal_wrapper">
              <Link href="">
                <div className="deal_img">
                  <Image
                    alt=""
                    src="https://images.freekaamaal.com/featured_images/large_188866_k.png"
                    width={112}
                    height={100}
                  />
                </div>
                <Image
                  alt=""
                  src="https://images.freekaamaal.com/store-images/4264.jpg"
                  width={92}
                  height={32}
                />
                <div className="prize_tag_ab">
                  {" "}
                  <strong>&#8377;3000</strong> &nbsp;Cashback
                </div>
              </Link>
              <Typography
                fontSize={12}
                sx={{ margin: "7px 0", overflow: "hidden", height: "43px" }}
              >
                Holi 99 Stores - Free Gift On Every Order + 45% FKM CB Sitewide
                !!
              </Typography>
            </div>
            <div className="store_wrapper deal_wrapper">
              <Link href="">
                <div className="deal_img">
                  <Image
                    alt=""
                    src="https://images.freekaamaal.com/featured_images/large_188866_k.png"
                    width={112}
                    height={100}
                  />
                </div>
                <Image
                  alt=""
                  src="https://images.freekaamaal.com/store-images/4264.jpg"
                  width={92}
                  height={32}
                />
                <div className="prize_tag_ab">
                  {" "}
                  <strong>&#8377;3000</strong> &nbsp;Cashback
                </div>
              </Link>
              <Typography
                fontSize={12}
                sx={{ margin: "7px 0", overflow: "hidden", height: "43px" }}
              >
                Holi 99 Stores - Free Gift On Every Order + 45% FKM CB Sitewide
                !!
              </Typography>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="">
              <Button variant="contained" size="small" sx={{ color: "#fff" }}>
                View All Deals
              </Button>
            </Link>
          </div>
        </div>
        <div className="video_section">
          <Box
            component="div"
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              margin: "10px",
              bgcolor: "#fff",
              boxShadow: " 0px 0px 6px -2px grey",
            }}
          >
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/hkStK-PBO_k?start=2"
              title="How to work free kaa maal cashback"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </div>
        <div className="three_tabs">
          <div className="three_tabs_btn three_tabs_btn_one">
            <Image
              width={40}
              height={40}
              src="	https://images.freekaamaal.com/common-images/how-to-chb-works.png"
              alt=""
            />
            <div className="three_tabs_right">
              <h5>This is how your cashback Works!</h5>
              <Link className="three_tabs_right_link" href="">
                {" "}
                Know More{" "}
              </Link>
            </div>
          </div>
          <div className="three_tabs_btn three_tabs_btn_two">
            <Image
              width={40}
              height={40}
              src="	https://images.freekaamaal.com/common-images/faq-ico.png"
              alt=""
            />
            <div className="three_tabs_right">
              <h5>Frequently Asked Questions</h5>
              <Link className="three_tabs_right_link" href="">
                {" "}
                Know More{" "}
              </Link>
            </div>
          </div>

          <div className="three_tabs_btn three_tabs_btn_three">
            <Image
              width={40}
              height={40}
              src="	https://images.freekaamaal.com/common-images/signup-ico.png"
              alt=""
            />
            <div className="three_tabs_right">
              <h5>Signup to Start Earning Cashback</h5>
              <Link className="three_tabs_right_link" href="">
                {" "}
                Know More{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="tandc_section">
          <h3>Terms & Conditions</h3>
          <hr />
          <ol>
            <li>
              {" "}
              Please add products in your cart only AFTER you click out of
              FreeKaaMaal. Products lying in the cart before clicking out
              through FreeKaaMaal will not be eligible for claiming Cashback.
            </li>
            <li>
              {" "}
              Complete your purchase in the same session/in one go after
              clicking through FreeKaaMaal.
            </li>
            <li>
              Complete your purchase in the same session/in one go after
              clicking through FreeKaaMaal.
            </li>
            <li>
              Always use an incognito window of your browser, to avoid cashback
              tracking issue
            </li>
            <li>
              {" "}
              Cashback Valid as per the store may vary from month to month as
              per the unique freekaamaal and Merchant/store accounts based on
              Email ID, IP address, Mobile no., Delivery address & Payment
              card/Wallet
            </li>
            <li>
              It usually takes 2- 3 Business days to track the sale and credit
              the cashback to your FreeKaaMaal account. However, initially, this
              cashback status will remain Pending. Once the retailer confirms
              the transaction (within 10-12 Business Weeks) your cashback status
              will change to Confirmed.
            </li>
            <li>
              Missing Cashback Tickets could be reported post 1 hours of making
              the transaction i.e.within 5 days or before the 4th of the next
              month whichever is earlier. Any support ticket/query reported
              before the mentioned time will be Rejected.
            </li>
            <li>
              Cashback is not payable if you return/ canceled / exchange/
              partial cancellation / partial exchange of your order. In all
              these cases Cashback for the full order will be declined.
            </li>
            <li>
              Bulk Orders will NOT be accepted for claiming Cashback: Please
              note it is against our T&C’s to use our services for non-personal
              or commercial use. FreeKaaMaal shall block all such accounts and
              forfeit their cashback balances.
            </li>
            <li>
              {" "}
              Any claim reported after 7 days will not be considered for the
              re-validation and will not be eligible to claim the Decline order
              or to raise the dispute ahead.
            </li>
            <li>
              Cashback is NOT guaranteed based on various retailer criteria
              while Using a Coupon, Gift Voucher, Gift Card, Gift Certificate,
              or Store Credit.
            </li>
            <li>
              Cashback rates & offers are subject to change at any time without
              prior notification.
            </li>
            <li>
              For any Cashback/Rewards-related issues/queries, kindly mail us at
              support@freekaamaal.com our team will get back to you within 24
              business hours.
            </li>
            <li>
              {" "}
              Creating multiple accounts in order to avail of the Cashback
              multiple times will be considered as fraudulent activity and will
              lead to blocking Your Freekaamaal account For Further Usage due to
              the violation of our Services.
            </li>
            <li>
              Please share your Cashback-related queries to Freekaamaal only,
              not to the Merchant/purchase store.
            </li>
          </ol>
        </div>
      </div>
      <style jsx>{`
        .top_box {
          background: #fff;
          padding: 16px 10px;
          text-align: center;
          margin: 0 10px;
        }
        .top_box h3 {
          color: #582aca;
          word-spacing: 1px;
        }
        .middle_box {
          padding: 16px 16px 5px 16px;
        }
        .stroes_box {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .middle_box h4 {
          padding: 10px 0;
          font-weight: bold;
          font-size: 16px;
        }
        .store_wrapper {
          background: #fff;
          width: 168px;
          height: 100px;
          margin: 10px 10px 30px 0;
          text-align: center;
          display: flex;
          align-items: center;
          box-shadow: 0px 3px 15px -6px #bbb7b7;
          justify-content: center;
          position: relative;
          justify-content: center;
        }
        .prize_tag_ab {
          font-size: 11px;
          position: absolute;
          background: linear-gradient(
            to right,
            rgb(231, 47, 54) 3%,
            rgb(242, 101, 34) 100%
          );
          color: #fff;
          bottom: -16px;
          left: 50%;
          word-wrap: no-wrap;
          padding: 11px;
          border-radius: 3px;
          letter-spacing: 1px;
          font-size: 10px;
          min-width: 120px;
          box-shadow: 0px 2px 12px 6px #dfdfdf;
          transform: translate(-50%, 0);
        }
        .store_wrapper.deal_wrapper {
          height: auto;
          flex-direction: column;
          padding: 10px;
        }
        .three_tabs_btn {
          border-radius: 6px;
          padding: 18px;
          width: 100%;
          box-shadow: 0px 4px 8px rgb(0 0 0 / 25%);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .three_tabs_btn_one {
          background: linear-gradient(
            to right,
            rgba(74, 55, 158, 1) 3%,
            rgba(134, 81, 174, 1) 100%
          );
        }
        .three_tabs_btn_two {
          background: linear-gradient(
            to right,
            rgba(60, 71, 199, 1) 3%,
            rgba(1, 47, 90, 1) 100%
          );
        }
        .three_tabs_btn_three {
          background: linear-gradient(
            to right,
            rgba(74, 55, 158, 1) 3%,
            rgba(134, 81, 174, 1) 100%
          );
        }
        .three_tabs h5 {
          color: #fff;
          font-size: 14px;
          /* word-spacing: 1px; */
          letter-spacing: 1px;
        }
        .three_tabs {
          padding: 10px;
        }
        .tandc_section {
          background: #fff;
          color: #000;
          padding: 19px 10px;
          margin: 10px;
          box-shadow: 0px 3px 15px -2px #b3b3b3;
        }
        ol {
          font-size: 13px;
          padding: 10px 10px 10px 16px;
          line-height: 20px;
        }
        ol li {
          margin-bottom: 9px;
        }
        .tandc_section h3 {
          font-size: 22px;
          word-spacing: 1px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default Cashback;
