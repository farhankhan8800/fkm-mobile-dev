import React, { useEffect, useState } from "react";
import {} from "@mui/material";

import Link from "next/link";

const FaqCashbackPage = (props) => {
  const [howtoearncashback, setHowtoearncashback] = useState();

  useEffect(() => {
    setHowtoearncashback(props.howtoearncashback);
  }, [props]);

  const accordionFun = (id) => {
    const panel = document.getElementById(`panel${id}`).classList;
    const accordion = document.getElementById(`accordion${id}`).classList;

    panel.toggle("activeTab");
    accordion.toggle("activeAccordion");
  };

  return (
    <>
      <div>
        <div>
          <h3
            style={{
              fontSize: "18px",
              padding: "5px 0",
              color: "#f27935",
              fontWeight: "600",
            }}
          >
            {" "}
            Important Thing to Remember(FAQ)
          </h3>
        </div>
      </div>
      <div>
        <div
          style={{
            borderRadius: "10px",
            bgcolor: "#fff5efv  ",
          }}
        >
          <div className="faq_main_box">
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion1`}
                onClick={() => accordionFun(1)}
              >
                <p style={{ fontSize: "14px" }}>
                  What is this Cashback offer from FreeKaaMaal?
                </p>
              </div>
              <div className={`panel`} id={`panel1`}>
                <p style={{ fontSize: "13px" }}>
                  We receive referral commission for driving traffic and sales
                  to our merchant store&#39;s site. We pass on the entire
                  commission back to our customers as Cashback reward which they
                  can redeem through PayTM or Bank transfer
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion2`}
                onClick={() => accordionFun(2)}
              >
                <p style={{ fontSize: "14px" }}>
                  How can I earn cashback via FreeKaaMaal.com?
                </p>
              </div>
              <div className={`panel`} id={`panel2`}>
                <p style={{ fontSize: "13px" }}>
                  Easy steps to follow to earn Cashback
                </p>
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
                    Shop and make the transaction with the retailer&#39;s site
                    like you normally do.
                  </li>
                  <li>
                    Retailer pays us a commission for this sale. We pass on the
                    same to you as &#39;cashback&#39;. Initially your Cashback
                    remains in &#39;Pending&#39; status. Once the return period
                    for the product is over, your cashback status becomes
                    &#39;Confirmed&#39;
                  </li>
                  <li>
                    Now you can redeem the amount any time via Online
                    Transfer/Mobile Recharge/Shopping Voucher.
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion3`}
                onClick={() => accordionFun(3)}
              >
                <p style={{ fontSize: "14px" }}>
                  Can I visit the retailer directly, and just send you a receipt
                  to get my cashback?
                </p>
              </div>
              <div className={`panel`} id={`panel3`}>
                <p style={{ fontSize: "13px" }}>
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
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion4`}
                onClick={() => accordionFun(4)}
              >
                <p style={{ fontSize: "14px" }}>
                  I made a purchase but have not received any cashback email for
                  it. What can I do?
                </p>
              </div>
              <div className={`panel`} id={`panel4`}>
                <p style={{ fontSize: "13px" }}>
                  I made a purchase but have not received any cashback email for
                  it. What can I do? If you made a transaction less than than 3
                  days ago, please wait a little longer.Typically it takes
                  between 24 - 72 hours for retailers to track sales, so you
                  could still receive your cashback email automatically.
                </p>
                <p style={{ fontSize: "13px" }}>
                  However, If your purchase was done over 3 days ago, please
                  submit a missing Cashback Request visiting &#39;My
                  Account&#39;
                </p>

                <p style={{ fontSize: "13px" }}>
                  here (
                  <a href="https://freekaamaal.com/cashback/home">
                    https://freekaamaal.com/cashback/home
                  </a>
                  ) then click on &#39;Report Missing Cashback&#39;. Any Missing
                  Cashback Report will not be accepted after 10 days. Sometimes,
                  though rare, retailers fail to track a transaction on their
                  end. After we receive transaction details from you, we can
                  follow this up with the retailer, and try to get your missing
                  cashback.
                </p>

                <p style={{ fontSize: "13px" }}>
                  Generally, sticking to the terms and conditions provided on
                  our retailer page and ensuring you follow the recommended
                  process will minimize the risk of anything going wrong.
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion5`}
                onClick={() => accordionFun(5)}
              >
                <p style={{ fontSize: "14px" }}>
                  What are the reasons for a cashback to not track or track
                  incorrectly?
                </p>
              </div>
              <div className={`panel`} id={`panel5`}>
                <p style={{ fontSize: "13px" }}>
                  IWhen you visit a retailer via our website, our systems can
                  track that visit and record an &#39;exit click&#39;.
                  Thereafter, if you don&#39;t get an email from us about your
                  cashback it is likely that somehow the retailer has missed the
                  transaction. In these cases we will chase the retailer and do
                  our best to get you your missing cashback. In some cases the
                  retailer may decline your cashback, such as:
                </p>
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
                    our website and/or the retailer&#39;s.
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
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion6`}
                onClick={() => accordionFun(6)}
              >
                <p style={{ fontSize: "14px" }}>
                  Where do I see my cashback earnings?
                </p>
              </div>
              <div className={`panel`} id={`panel6`}>
                <div style={{ fontSize: "13px" }}>
                  You can Sign In to FreeKaaMaal here (
                  <a href="https://freekaamaal.com/cashback/home">
                    https://freekaamaal.com/cashback/home
                  </a>
                  )and then at the top right go to My Account & check your
                  Cashback earnings in Balance & Historysection.
                </div>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion7`}
                onClick={() => accordionFun(7)}
              >
                <p style={{ fontSize: "14px" }}>
                  How do I request payment of my cashback?
                </p>
              </div>
              <div className={`panel`} id={`panel7`}>
                <p style={{ fontSize: "13px" }}>
                  When you have a ‘Confirmed’ status of your Cashback, you can
                  claim your cashback
                </p>
                <p style={{ fontSize: "13px" }}>
                  requesting PayTM Tranfer, Right now we only offer PayTM
                  tranfer but soon other options like Banktransfer andShopping
                  Voucherswill be available too.
                </p>
                <p style={{ fontSize: "13px" }}>
                  To request payment, login to your account and​​​ click
                  on“Withdraw Money” section inredeem your cashback amount.
                </p>
                <p style={{ fontSize: "13px" }}>
                  (Please note that only Cashback with ‘Confirmed’ status can be
                  paid. Until we receive payment from retailers, Cashback
                  remains as ‘Pending’ and cannot be paid to you.)
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion8`}
                onClick={() => accordionFun(8)}
              >
                <p style={{ fontSize: "14px" }}>
                  Why have I not received my cashback yet ?
                </p>
              </div>
              <div className={`panel`} id={`panel8`}>
                <p style={{ fontSize: "13px" }}>
                  Because it generally takes quite a while for your transaction
                  details to reach us via merchant and therefore for your
                  transaction to become confirmed we need an authentication from
                  retailer side that you have made a purchase on their site
                  through FreeKaaMaal.com.
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion9`}
                onClick={() => accordionFun(9)}
              >
                <p style={{ fontSize: "14px" }}>
                  What does Pending ,Confirmed or Decline status mean?
                </p>
              </div>
              <div className={`panel`} id={`panel9`}>
                <p style={{ fontSize: "13px" }}>
                  When you click through from FreeKaaMaaland make your
                  transaction on a merchant site, your action is tracked by the
                  merchant and reported back to us . When the transaction is
                  first reported, it will be given a ‘Pending’ status. This
                  means that the retailer has tracked your transaction and
                  indicated us about your purchase through ​FreeKaaMaal​.
                  Sometimes your transaction is declined often because of you
                  return the purchased item back to the retailer.In this case
                  your status will also switch to ‘Decline’.After a certain
                  number of days, when their is no return and transaction is
                  confirmed your status will normally switch to ‘Confirmed’
                  status. This means that the retailer has agreed that all is
                  fine with your transaction and your cashback is now confirmed
                  from our side. You can now claim your cashback at any time
                  either through online transfer, mobile recharge or shopping
                  voucher.
                </p>
              </div>
            </div>
            <div>
              <div
                className={`accordion `}
                style={{ background: "#f1f1f1" }}
                id={`accordion10`}
                onClick={() => accordionFun(10)}
              >
                <p style={{ fontSize: "14px" }}>
                  Why hasn&#39;t my cashback been confirmed yet?
                </p>
              </div>
              <div className={`panel`} id={`panel10`}>
                <p style={{ fontSize: "13px" }}>
                  Since different merchants process transactions through the
                  various stages, they have a cycle of confirming the
                  transaction when there is no probability of decline of the
                  respective transaction.Once they confirm us with your
                  transaction we will change your status as Confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ul,
        ol {
          margin-left: 10px;
          line-height: 19px;
          padding-top: 10px;
        }
        .accordion {
          background-color: #eee;
          color: #444;
          cursor: pointer;
          border-radius: 3px;
          padding: 13px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          border-bottom: 1px solid #e0dddd;
          font-size: 15px;
          transition: 0.4s;
          margin-bottom: 2px;
        }
        .panel.activeTab {
          display: block;
        }
        .accordion.active {
          background-color: #cdc6c6;
        }
        .panel {
          padding: 0 11px;
          background-color: #f5f4f4;
          font-size: 14px;
          line-height: 21px;
          display: none;
          margin-bottom: 10px;
        }

        .accordion_section {
          padding-top: 20px;
        }
        .activeAccordion {
          background: #eb4e4e45 !important;
        }
        .faq_main_box > div {
          margin-bottom: 10px;
          border: 1px solid #e0dcdc78;
          border-radius: 4px;
          padding: 4px;
        }
      `}</style>
    </>
  );
};

export default FaqCashbackPage;
