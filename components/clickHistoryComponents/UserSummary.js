import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import clickImage from "public/images/icon/dashboard/click.png";
import referalHistoryImage from "public/images/icon/dashboard/referal-history.png";
import referEarnImage from "public/images/icon/dashboard/refer-earn.png";
import cashbackHistoryImage from "public/images/icon/dashboard/cashback-history.png";
import reportIconImage from "public/images/icon/dashboard/report-icon.png";
import withdrawalHistoryImage from "public/images/icon/dashboard/withdrawal-history.png";
import withdrawalMoneyImage from "public/images/icon/dashboard/withdrawal-money.png";
import refrealMoneyImage from "public/images/icon/dashboard/refreal-money.png";
import climeFormImage from "public/images/icon/dashboard/clime-form.png";
import missingCashbackImage from "public/images/icon/dashboard/missing-cashback.png";
import addAccountImage from "public/images/icon/dashboard/add-account.png";
import bellImage from "public/images/icon/dashboard/bell.png";
import { useGetUser } from "service/customHooks";

const userManage = [
  {
    headingTag: "Click History",
    pTage: "List Of store your visited reacently",
    icon: clickImage,
    link: "/cashback/click-history",
  },
  {
    headingTag: "Cashback History",
    pTage: "List Of store your visited reacently",
    icon: cashbackHistoryImage,
    link: "/cashback/cashback-history",
  },
  {
    headingTag: "Withdrawal History",
    pTage: "List Of store your visited reacently",
    icon: withdrawalHistoryImage,
    link: "/cashback/withdraw-history",
  },
  {
    headingTag: "Report Missing",
    pTage: "List Of store your visited reacently",
    icon: reportIconImage,
    link: "/cashback/missing-claimform",
  },
  {
    headingTag: "Refer and earn",
    pTage: "List Of store your visited reacently",
    icon: referEarnImage,
    link: "/cashback/refer-earn",
  },
  {
    headingTag: "Referral History",
    pTage: "List Of store your visited reacently",
    icon: referalHistoryImage,
    link: "/cashback/referral-history",
  },
  {
    headingTag: "Withdraw Money",
    pTage: "List Of store your visited reacently",
    icon: withdrawalMoneyImage,
    link: "/cashback/withdraw-money",
  },
  {
    headingTag: "Referal Money",
    pTage: "List Of store your visited reacently",
    icon: refrealMoneyImage,
    link: "cashback/referal-money",
  },
  {
    headingTag: "Cashback Claim Form",
    pTage: "List Of store your visited reacently",
    icon: climeFormImage,
    link: "/cashback/cashback-claimform",
  },
  {
    headingTag: "Missing Cashback History",
    pTage: "List Of store your visited reacently",
    icon: missingCashbackImage,
    link: "/cashback/missing-order",
  },

  {
    headingTag: "Add Account",
    pTage: "List Of store your visited reacently",
    icon: addAccountImage,
    link: "/cashback/add-account",
  },
  {
    headingTag: "Notification",
    pTage: "List Of store your visited reacently",
    icon: bellImage,
    link: "/",
  },
];

const UserSummary = () => {
  const GetUser = useGetUser();

  console.log(GetUser);
  return (
    <>
      <div>
        {userManage.map((item, i) => (
          <div
            key={i}
            style={{
              background:
                GetUser?.data?.is_gold == 1
                  ? "rgb(255 248 212 / 98%)"
                  : "#fff7f7",
              margin: "8px",
              padding: "9px",
              borderRadius: "5px",
            }}
          >
            <Link href={item.link}>
              <div
                className="d_grid"
                style={{ gridTemplateColumns: "20% auto 20%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={20}
                    height={20}
                    alt="icon"
                    sx={{ color: "#000" }}
                    src={item.icon}
                  ></Image>
                </div>
                <div>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {item.headingTag}
                  </p>
                  <p style={{ color: "#000", fontSize: "11px" }}>
                    {item.pTage}
                  </p>
                </div>
                <div>
                  <button
                    className="text_button"
                    style={{ color: "#bbb7b7", minWidth: "65px" }}
                  >
                    <MdKeyboardArrowRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserSummary;
