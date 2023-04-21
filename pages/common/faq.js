import Header from "components/headerComponent/Header";
import Link from "next/link";
import HeadTag from "components/headTagComponent/HeadTag";

const headeTitle = "FAQ | Freekaamaal";

const faq = () => {

  const accordionFun = (id) => {
    const panel = document.getElementById(`panel${id}`).classList;
    const accordion = document.getElementById(`accordion${id}`).classList;
    panel.toggle("activeTab");
    accordion.toggle("activeAccordion")

  };

  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div className="faq_page" style={{ paddingTop: "56px" }}>
        <div className="faq-heading">
          <h1 className="">Frequently Asked Questions</h1>
        </div>
        <div role="presentation" style={{ padding: "10px" }} >
          <div className="d_flex">
            <Link href="/">
              Home
            </Link>
            <span>&nbsp;/&nbsp;</span>
            <p >FAQ&#39;s</p>
          </div>
        </div>
        <div className="faq-list-section">
          <div className="faq-list">
            <p>
              <Link href="#cashback">CASHBACK</Link>
            </p>
            <p>
              <Link href="#promo-balance">PROMO BALANCE</Link>
            </p>
            <p>
              <Link href="#fkm-gold">FKM GOLD MEMBERSHIP</Link>
            </p>
            <p>
              <Link href="#missing-cashback">CLAIM FORM / MISSING CASHBACK</Link>
            </p>
            <p>
              <Link href="#withdraw">WITHDRAW</Link>
            </p>
            <p>
              <Link href="#miscellaneous">MISCELLANEOUS</Link>
            </p>
          </div>
          <div id="cashback">
            <h2 className="h2-heading">cashback</h2>
            <div
              className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion1`}
              onClick={() => accordionFun(1)}
            >
              What is FKM Cashback and how does it work?
            </div>
            <div className={`panel`} id={`panel1`}>
              FreeKaaMaal provides rewards in the form of Cashback every time
              users successfully purchase something, redirecting via
              Freekaamaal, from its partner&#39;s website. The cashback can be
              used like real Cash as it can be transferred back to your
              account or Paytm wallet.
            </div>

            <div
              className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion2`}
              onClick={() => accordionFun(2)}
            >
              How does FreeKaaMaal provide cashback to its users?
            </div>
            <div className={`panel`} id={`panel2`}>
              Freekaamaal earns a commission every time users successfully
              purchase something from its partner sites visiting through
              Freekaamaal. We share this commission with our users in the form
              of cashback which they can withdraw into their bank account/
              Paytm.
            </div>
            <div
              className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion3`}
              onClick={() => accordionFun(3)}
            >
              How can I earn cashback from FreeKaaMaal?
            </div>
            <div className={`panel`} id={`panel3`}>
              To earn cashback from FreeKaaMaal, you need to follow some
              really easy steps.
              <br />
              <br />
              Go to FreeKaaMaal.com
              <br />
              Sign Up to FreeKaaMaal with a valid ID, and other details
              <br />
              Check out the best deals, Cashback offers, and discounts as per
              your requirements.Click on Shop & Earn Button. Shop on the
              partner&#39;s website like you do regularly (Follow the steps
              mentioned on the offer page).
              <br />
              Once the purchase has been completed. Take a screenshot for
              future reference.Your Cashback will be credited into your FKM
              account in the pending cashback section within 15 min or it may
              take upto 2-3 business days (varies from store to store).
            </div>
            <div
              className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion4`}
              onClick={() => accordionFun(4)}
            >
              Where can I see my cashback earnings or expected confirmation
              date?
            </div>
            <div className={`panel`} id={`panel4`}>
              To see the cashback, you need to follow these steps, which we
              have mentioned below for you: <br />
              <br />
              Login to your FreeKaaMaal account via App or Mobile site. <br />
              Open the sidebar and click on your profile tab. <br />
              3.1 Now you can click on the Pending Cashback, confirmed
              cashback, etc. to check your cashback status. <br />
              3.2 For the mobile website - You can visit your Cashback summary
              and then click on cashback history and there you will see all
              the tabs related to cashback status. <br />
              Your cashback confirmation days start from the first day of the
              next month. <br />
              You can check the tentative date of cashback confirmation in the
              pending cashback section.
            </div>
            <div
              className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion5`}
              onClick={() => accordionFun(5)}
            >
              What does Pending, Confirm, and Decline Cashback means?
            </div>
            <div className={`panel`} id={`panel5`}>
              There are three types of status for your cashback: <br /> <br />
              <strong>Pending Cashback:</strong> When your transaction is
              successful on the Merchant&#39;s Site, Your cashback will be
              credited with Pending Status. Now you have to wait till as per
              the confirmation days mentioned on the store page. <br />
              <strong>Confirmed Cashback:</strong> Once the merchant confirms
              that the transaction has been done through Freekaamaal and
              completed successfully without any modification. Your pending
              cashback for that transaction will be transferred to confirmed
              cashback status. Which means it is available to withdraw. <br />
              <strong>Declined Cashback:</strong> When your pending cashback
              gets declined it means your transaction had some issues and your
              cashback can&#39;t be processed further.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion6`}
              onClick={() => accordionFun(6)}
            >
              Why did my cashback got declined?
            </div>
            <div className={`panel`} id={`panel6`}>
              If your Cashback got declined, then below we have mentioned some
              of the reasons. <br /> <br />
              Modified Order: Cashback is not payable if you return/cancel/
              exchange/ partially cancel/ partially exchange, your order. In
              all these cases, Cashback for the full order will be declined.{" "}
              <br />
              Other Source: This is something that can happen intentionally or
              unintentionally. Please find the below list of reasons other
              source includes: <br /> <br />
              If you have clicked on it intentionally or unintentionally{" "}
              <br /> <br />
              Any Google ad <br />
              Any Instagram ad <br />
              Any Facebook ad <br />
              Any coupon code used other than mentioned or prohibited. <br />
              Direct website visit for price comparison <br />
              Other affiliate sources used <br />
              By mistake clicked on any ad at any video or audio streaming
              platform. Even if canceled immediately. <br />
              Session Took Too Long <br />
              Products were already in the cart when redirected <br />
              Session Took Too Long <br />
              previous cookies and caches not cleared &#34;Use Incognito Mode&#34;{" "}
              <br />
              Compliance Issue: If You did not follow the steps mentioned on
              the offer page.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion7`}
              onClick={() => accordionFun(7)}
            >
              Can the user visit the merchant directly and send the receipt to
              get his/her cashback?
            </div>
            <div className={`panel`} id={`panel7`}>
              No, We create a unique link with every deal posted on the
              FreeKaaMaal website, which gets us a commission on your Sale&#39;s
              completion. The unique link makes the merchant capable of
              tracking that you came from Freekaamaal. Purchasing
              intentionally or unintentionally from somewhere else and
              claiming a reward on Freekaamaal may result in your account
              being banned under the fraudulent activity policy.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion8`}
              onClick={() => accordionFun(8)}
            >
              Why I did not get any cashback crediting mail after my purchase
              through FreeKaaMaal.com?
            </div>
            <div className={`panel`} id={`panel8`}>
              You get a cashback crediting email only when cashback is
              credited. You can check your spam or promotions for that. It
              depends upon your cashback tracking speed. If it is 15 min then
              you will get an email within 15 to 20 min. If it is 2-3 business
              days then you will receive an email within 2-3 business days. In
              the case where the tracking speed time is over and you still
              haven&#39;t received the cashback kindly raise a missing request or
              connect with the support team asap.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion9`}
              onClick={() => accordionFun(9)}
            >
              Why is my cashback not tracked?
            </div>
            <div className={`panel`} id={`panel9`}>
              When you visit the partner&#39;s website via the shop & earn
              cashback button on FKM. our system tracks and records it as an
              “Exit Click.” On the basis of the unique link passed in the exit
              click, we track your purchase. In case when you don&#39;t get your
              cashback you can raise a missing request if allowed (this Varies
              from store to store). In case if it is not credited after all
              this, It means your transaction has been denied by the partner
              site. The reasons can be as follows: <br /> <br />
              You might have either canceled or returned the Order. <br />
              Any coupon code used other than mentioned or prohibited. <br />
              You may have used another website or purchased directly from the
              partner website. <br />
              You did not follow the terms & conditions mentioned on our
              website correctly. <br />
              You have used a voucher code or gift card, which our website
              does not support. <br />
              You have disabled the cookies, which didn&#39;t allow the retailer
              to track the purchase. <br />
              Your Session after redirection took too long or expired. <br />
              Products were already in the cart when you redirected. <br />
              previous cookies and caches not cleared (Use Incognito Mode).
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion10`}
              onClick={() => accordionFun(10)}
            >
              In how many days the cashback will get confirmed?
            </div>
            <div className={`panel`} id={`panel10`}>
              Check your cashback summary to know when your cashback will be
              confirmed. In general, it could be within 10 to 12 weeks or 90
              business days. However, The confirmation days may vary from
              store to store as we do have some particular stores wherein the
              confirmations stood between 72 hours to 15-30 Business days
              only.
            </div>
          </div>
          <div id="promo-balance">
            <h2 className="h2-heading">promo balance</h2>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion11`}
              onClick={() => accordionFun(11)}
            >
              {" "}
              What is FreeKaaMaal promo balance?
            </div>
            <div className={`panel`} id={`panel11`}>
              Promo Bal is an amount provided through a promo code given by
              the FKM team to its users as a token of apology or as
              appreciation. The promo code is also provided if there is a
              concern from our side or a wrongly declined cashback.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion12`}
              onClick={() => accordionFun(12)}
            >
              {" "}
              How can I redeem my promo balance?
            </div>
            <div className={`panel`} id={`panel12`}>
              To redeem the promo balance, you need to follow specific steps
              which we have mentioned below:
              <br /> <br />
              Go to FreeKaaMaal.com <br />
              Login to your ID or create one if you have not (You can create
              your ID using your Facebook and Google+ ID).
              <br />
              Go to the cashback summary. <br />
              Apply the promo code provided by us in the &#39;Get a promo code?&#39;
              section
              <br />
              Click on Redeem! <br />
              Now click on Withdraw and enter the information required for
              availing the earned cashback. If you want to know more about the
              radio button for adding the promo code value, then{" "}
              <Link href="" style={{ color: "#f27935" }}>
                CLICK HERE
              </Link>
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion13`}
              onClick={() => accordionFun(13)}
            >
              {" "}
              Is there any limit to redeem the promo balance?
            </div>
            <div className={`panel`} id={`panel13`}>
              Promo Balance is provided to you after you get a Promo Code
              provided by our team that adds the promo balance directly to
              your FKM account which is unique and has its own terms &
              conditions. Therefore, the limit of recovery will depend on the
              promo code that you have used to avail of the promo balance.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion14`}
              onClick={() => accordionFun(14)}
            >
              Is there any validity for the promo balance?
            </div>
            <div className={`panel`} id={`panel14`}>
              No, there is no such validity for the promo balance.
            </div>
          </div>
          <div id="fkm-gold">
            <h2 className="h2-heading">FKM Gold Membership</h2>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion15`}
              onClick={() => accordionFun(15)}
            >
              {" "}
              What is FKM Gold membership?
            </div>
            <div className={`panel`} id={`panel15`}>
              Freekaamaal Gold membership is for our privilege user who has
              successfully completed the minimum criteria of purchasing
              through our portal and being an gold member you will get plenty
              of Benefits for each purchase you make and to check your
              eligibility and gold membership in details{" "}
              <Link href="" style={{ color: "#f27935" }}>
                click here
              </Link>
            </div>
          </div>
          <div id="missing-cashback">
            <h2 className="h2-heading">missing cashback</h2>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion16`}
              onClick={() => accordionFun(16)}
            >
              When to fill the claim form/where to fill the Cashback claim
              form?
            </div>
            <div className={`panel`} id={`panel16`}>
              To avail the cashback its mandate to fill the cashback claim
              form within 24 hrs of your purchase and you can get the claim
              form link through our deal/offer page through which you have
              redirected through the merchant end.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion17`}
              onClick={() => accordionFun(17)}
            >
              What if the Store is not live or I forget to fill out the form?
            </div>
            <div className={`panel`} id={`panel17`}>
              It&#39;s very rare to occur such cases, though you can visit your
              Cashback summary wherein you will get the Option to Submit the
              Claim form for your purchase.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion18`}
              onClick={() => accordionFun(18)}
            >
              What is missing cashback requests?
            </div>
            <div className={`panel`} id={`panel18`}>
              If your purchase does not get tracked within 15 -30 minutes for
              an online store that does accept the missing request in such
              case you need to raise the missing request for your purchase.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion19`}
              onClick={() => accordionFun(19)}
            >
              When can I raise the missing request?
            </div>
            <div className={`panel`} id={`panel19`}>
              If your cashback does not get tracked in 15 mins, you can report
              the missing after 1 hour of your purchase, missing could be
              reported within 5 days of your purchase, and before the 4th of
              the next month whichever is earlier no further delay will be
              entertaining to claim the cashback.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion20`}
              onClick={() => accordionFun(20)}
            >
              How to raise the missing Cashback request for your purchase?
            </div>
            <div className={`panel`} id={`panel20`}>
              kindly follow the below-mentioned steps to raise the missing
              cashback request from your freekaamaal account. <br />
              <br />
              <Link href="" style={{ color: "#f27935" }}>
                click here
              </Link>{" "}
              and visit your FreeKaaMaal Cashback Summary.Select &#34;Report
              Missing Cashback&#34; by clicking on the left Menu.Now fill-up the
              mandate details for your order and click on the &#34;SUBMIT &#34;
              buttonWe will verify your request and upon verification,
              cashback will be added to your account within 2-3 Business days.
            </div>
          </div>
          <div id="withdraw">
            <h2 className="h2-heading">withdraw</h2>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion21`}
              onClick={() => accordionFun(21)}
            >
              How can I redeem my earned cashback?
            </div>
            <div className={`panel`} id={`panel21`}>
              You can not redeem the earned cashback unless FreeKaaMaal has
              confirmed it. After your pending cashback approval, you will
              receive mail for the same from us to process your confirmed
              cashback for the withdrawal Follow these steps mentioned below
              to redeem your confirmed cashback. <br /> <br />
              Go to FreeKaamaal.com <br />
              Login to your ID <br />
              Go to Profile and click on the cashback summary. <br />
              Click on the Withdraw money. <br />
              Select a suitable method by which you would like to get the
              cashback. You can get the cashback in the following ways: <br />
              -Paytm, <br />
              -Bank Transfer. <br />
              You will receive an OTP on your registered mobile number and
              also over the E-Mail.Insert the OTP and now click on Withdraw.
              (Your withdrawal reflect in your account in 4 to 5 business
              days)
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion22`}
              onClick={() => accordionFun(22)}
            >
              What are the modes to withdraw my cashback?
            </div>
            <div className={`panel`} id={`panel22`}>
              FreeKaaMaal provides two options for withdrawing cashback. These
              modes of transacting money are: <br /> <br /> PaytmBank <br />{" "}
              Transfer
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion23`}
              onClick={() => accordionFun(23)}
            >
              What is the minimum amount to withdraw the cashback in my FKM
              Account?
            </div>
            <div className={`panel`} id={`panel23`}>
              The minimum amount of cashback that you can withdraw is Rs. 100
              for all modes of Payment. You will be incurred with a 3%
              Convenience Charge (On Paytm only) on the withdrawal.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion24`}
              onClick={() => accordionFun(24)}
            >
              How to verify my mail ID and mobile number for withdrawal ??
            </div>
            <div className={`panel`} id={`panel24`}>
              <iframe
                src="https://www.youtube.com/embed/9m1lZixJrOc"
                frameborder="0"
                width={"100%"}
                height={"400px"}
              ></iframe>
            </div>
          </div>
          <div id="miscellaneous">
            <h2 className="h2-heading">Miscellaneous</h2>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion25`}
              onClick={() => accordionFun(25)}
            >
              What is declined cashback?
            </div>
            <div className={`panel`} id={`panel25`}>
              Based on the purchase criteria and as per the validation report
              the declined cashback orders are those order which has been
              rejected by the merchant due to the following reasons <br />{" "}
              <br /> The Cashback usually gets declined due to the following
              reasons <br /> <br />
              <b>
                Order Cancellation/returned/exchange/partial returned
              </b>{" "}
              <br />
              <b>Returned to Origin (RTO)</b>
              <br />
              <b>Order Undelivered</b>
              <br />
              <b>Used Other Affilate/Cashback site</b>
              <br />
              <b>Used Other Coupon code</b>
              <br />
              <b>Used any Gift card/coupon/store credit</b>
              <br />
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion26`}
              onClick={() => accordionFun(26)}
            >
              How to check the Decline Cashback Reason?
            </div>
            <div className={`panel`} id={`panel26`}>
              You can check the reason for declined cashback store along with
              the order id in the declined cashback summary.
            </div>
            <div className={`accordion `}
              style={{ background: "#f1f1f1" }}
              id={`accordion27`}
              onClick={() => accordionFun(27)}
            >
              How to claim/report the decline cashback?
            </div>
            <div className={`panel`} id={`panel27`}>
              To claim any declined cashback or order for any store you need
              to{" "}
              <strong>
                {" "}
                report to{" "}
                <Link
                  href="mailto:Support@freekaamaal.com"
                  style={{ color: "#f27935" }}
                >
                  Support@freekaamaal.com
                </Link>{" "}
                within 7 days
              </strong>{" "}
              along with the following details
              <br />
              <br />
              Screen recording by loin into the store account <br />
              Screenshot of AWB (Airway Bill Number) Reflecting the order has
              been delivered successfully <br />
              Post submitting the details our team will re-validate the data
              and will give you the final closure to your case. <br /> <br />
              <b>
                NOTE:- Any claim reported after 7 days will not be considered
                for the re-validation and will not be eligible to claim the
                Decline order or to raise the dispute ahead.
              </b>
            </div>
          </div>
        </div>
        <div className="tc-wrapper">
          <h2 className="h2-heading" style={{ marginLeft: "10px" }}>
            Terms & Conditions
          </h2>
          <div className="tc">
            <ol>
              <li>
                Please add products in your cart only AFTER you click out of
                FreeKaaMaal. Products lying in the cart before clicking out
                through FreeKaaMaal will not be eligible for claiming Cashback.
              </li>{" "}
              <br />
              <li>
                Complete your purchase in the same session/in one go after
                clicking through FreeKaaMaal.
              </li>{" "}
              <br />
              <li>
                {" "}
                Do not visit any other price comparison, coupon, or deal site in
                between clicking out through FreeKaaMaal & placing the order on
                the retailer&#39;s site.
              </li>{" "}
              <br />
              <li>
                {" "}
                Always use an incognito window of your browser, to avoid
                cashback tracking issue
              </li>{" "}
              <br />
              <li>
                Cashback Valid as per the store may vary from month to month as
                per the unique freekaamaal and Merchant/store accounts based on
                Email ID, IP address, Mobile no., Delivery address & Payment
                card/Wallet
              </li>
              <br />
              <li>
                It usually takes 2- 3 Business days to track the sale and credit
                the cashback to your FreeKaaMaal account. However, initially,
                this cashback status will remain Pending. Once the retailer
                confirms the transaction (within 10-12 Business Weeks) your
                cashback status will change to Confirmed.
              </li>
              <br />
              <li>
                Missing Cashback Tickets could be reported post 1 hours of
                making the transaction i.e.within 5 days or before the 4th of
                the next month whichever is earlier. Any support ticket/query
                reported before the mentioned time will be Rejected.
              </li>
              <br />
              <li>
                {" "}
                Cashback is not payable if you return/ canceled / exchange/
                partial cancellation / partial exchange of your order. In all
                these cases Cashback for the full order will be declined.
              </li>
              <br />
              <li>
                {" "}
                Bulk Orders will NOT be accepted for claiming Cashback: Please
                note it is against our T&C’s to use our services for
                non-personal or commercial use. FreeKaaMaal shall block all such
                accounts and forfeit their cashback balances.
              </li>
              <br />
              <li>
                Cashback is not payable if you return/ canceled / exchange/
                partial cancellation / partial exchange of your order. In all
                these cases Cashback for the full order will be declined.
              </li>
              <br />
              <li>
                {" "}
                Any claim reported after 7 days will not be considered for the
                re-validation and will not be eligible to claim the Decline
                order or to raise the dispute ahead.
              </li>
              <br />
              <li>
                Cashback is NOT guaranteed based on various retailer criteria
                while Using a Coupon, Gift Voucher, Gift Card, Gift Certificate,
                or Store Credit.
              </li>
              <br />
              <li>
                Cashback rates & offers are subject to change at any time
                without prior notification.
              </li>
              <br />
              <li>
                {" "}
                For any Cashback/Rewards-related issues/queries, kindly mail us
                at support@freekaamaal.com our team will get back to you within
                24 business hours
              </li>
              <br />
              <li>
                Creating multiple accounts in order to avail of the Cashback
                multiple times will be considered as fraudulent activity and
                will lead to blocking Your Freekaamaal account For Further Usage
                due to the violation of our Services.
              </li>
              <br />
              <li>
                Please share your Cashback-related queries to Freekaamaal only,
                not to the Merchant/purchase store.
              </li>
              <br />
            </ol>
          </div>
        </div>
      </div>

      <style jsx>
        {`
        
          .faq-heading {
            padding: 30px;
            background: #f1f1f1;
            text-align: center;

          }
          .faq-heading h1{
            font-size: 25px;
            color: #565252;
          }
          .faq-list-section {
            background-color: #fff;
            width: 100%;
            padding: 0 7px 
          
          }
          .faq-list {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: space-between;
            
          }
         
          .faq-list p {
            flex-basis: 46%;
            text-align: center;
            background: #f1f1f1;
            font-size: 13px;
            font-weight: 600;
            padding: 20px;
            text-align:center;
            border-radius: 7px;
          }
          .faq-list p a {
            color: #f27935;
            text-decoration: none;
          }
          .h2-heading {
            padding: 10px;
            text-transform: capitalize;
            font-size: 18px;
          }
          .tc-wrapper {
            margin: 10px 0;
          }
          .tc-wrapper h2 {
            border-bottom: 1px solid #000;
            margin: 0 0 10px 10px;
            padding-left: 0;
          }
          .tc {
            padding-left: 40px;
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
        .activeAccordion{
          background: #eb4e4e45 !important;
        }
       
        `}
      </style>

    </>
  );
};

export default faq;
