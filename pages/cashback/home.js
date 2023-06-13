import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import UserSummary from "../../components/clickHistoryComponents/UserSummary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { promoCodeAPI } from "service/API";
import { useGetUser, useUserToken } from "service/customHooks";
import { FaUser } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";

import protectRoute from "service/protect-route";
import Image from "next/image";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const UserProfile = () => {
  const [user_summary, setUser_summary] = useState();
  const [getCode, setGetCode] = useState();
  const [code_error, set_code_error] = useState();
  const [serverError, setServerError] = useState();
  const [alert_message, set_Alert_message] = useState();
  const router = useRouter();
  const userdata = useGetUser();
  const headeTitle = ` ${userdata?.data.username}| Freekaamaal`;

  const authToken = useUserToken();

  const GetUser = useGetUser();

  // console.log(GetUser?.data?.is_gold);

  useEffect(() => {
    setUser_summary(JSON.parse(localStorage.getItem("usersummary")));
  }, []);

  // session-expired

  const redeemCode = async (e) => {
    e.preventDefault();
    set_code_error("");
    setServerError("");
    set_Alert_message("");

    if (getCode) {
      try {
        let { data } = await axios.post(
          promoCodeAPI,
          {
            apiAuth: apiAuth,
            device_type: DEVICE_TYPE,
            promocode: getCode,
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        );

        // console.log(data)
        if (data.code == "401") {
          return router.push("/session-expired");
        }
        if (data.status == 1) {
          set_Alert_message(data.message);
        } else {
          setServerError(
            data.message ? data.message : data.msg ? data.msg : ""
          );
        }
      } catch (error) {}
    } else {
      set_code_error("Enter Any Code Then Press Redeem Button");
    }
  };

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div style={{ padding: "16px" }}>
          <div
            style={{
              backgroundColor:
                GetUser?.data?.is_gold == 1 ? " #3b4050" : "#f27935",
              padding: "10px 20px",
              borderRadius: "10px",
              borderBottom:
                GetUser?.data.is_gold == 1
                  ? "3px solid gold"
                  : "3px solid gray",
            }}
          >
            <div
              className="d_flex"
              style={{
                color: "#fff",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="avatar_div">
                {/* <FaUser /> */}{" "}
                <Image
                  src={userdata?.data.user_img_url}
                  alt="userProfile"
                  height={45}
                  width={45}
                ></Image>
              </div>
              <div>
                <h3 style={{ fontWeight: "600" }}>
                  {" "}
                  {userdata?.data.username}
                </h3>
                <p style={{ fontSize: "12px" }}>
                  Check Out Your Cashback Summary{" "}
                </p>
              </div>
              <div item>
                <button
                  onClick={() => router.push("/user-edit-details")}
                  style={{ color: "#fff" }}
                >
                  <AiFillEdit style={{ fontSize: "23px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "16px",
            margin: "15px",
            background: "#f9f9f9",
            borderRadius: "3px",
          }}
        >
          <div className="d_grid d_grid_6 grid_gap_ten">
            <div>
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <h4 style={{ textAlign: "center", fontWeight: "600" }}>
                  &#8377; {user_summary ? user_summary.confirm_amount : ""}
                </h4>
                <p style={{ textAlign: "center", fontSize: "10px" }}>
                  Confirmed Cashback
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <h4 style={{ textAlign: "center", fontWeight: "600" }}>
                  &#8377; {user_summary ? user_summary.available_amount : ""}
                </h4>
                <p style={{ textAlign: "center", fontSize: "10px" }}>
                  Available Amount{" "}
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <h4 style={{ textAlign: "center", fontWeight: "600" }}>
                  &#8377; {user_summary ? user_summary.pending_amount : ""}
                </h4>
                <p style={{ textAlign: "center", fontSize: "10px" }}>
                  Pending Amount
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <h4 style={{ textAlign: "center", fontWeight: "600" }}>
                  &#8377;{" "}
                  {user_summary ? user_summary.withdraw_pending_amount : ""}
                </h4>
                <p style={{ textAlign: "center", fontSize: "10px" }}>
                  Withdraw Pending Amount
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "5px",
                }}
              >
                <h4 style={{ textAlign: "center", fontWeight: "600" }}>
                  &#8377; {user_summary ? user_summary.withdrawal_amount : ""}
                </h4>
                <p style={{ textAlign: "center", fontSize: "10px" }}>
                  Withdrawal Amount{" "}
                </p>
              </div>
            </div>
          </div>

          {/* PromoCode  */}

          <div
            style={{
              padding: " 20px 10px",
              border:
                GetUser?.data?.is_gold == 1
                  ? "1px solid rgb(52 52 52)"
                  : "1px solid #faecec",
              borderRadius: "5px",
              marginTop: "20px",
              background: "#fff",
            }}
          >
            <h3 style={{ fontWeight: "600", marginBottom: "16px" }}>
              Get A Promo Code
            </h3>
            <div style={{ paddingTop: "10px", position: "relative" }}>
              <form onSubmit={redeemCode}>
                <input
                  value={getCode}
                  onChange={(e) => {
                    setGetCode(e.target.value);
                  }}
                  placeholder="Your Promo Code"
                  className=" promocode_input_style"
                  style={{ width: "100%" }}
                  id="standard-basic"
                />
                <div>
                  {code_error ? (
                    <div className="alert_warning_class">
                      {" "}
                      <span>
                        <ImWarning />
                      </span>{" "}
                      <p> {code_error}</p>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {serverError ? (
                    <div className="alert_warning_class">
                      {" "}
                      <span>
                        <ImWarning />
                      </span>{" "}
                      <p> {serverError}</p>{" "}
                    </div>
                  ) : (
                    ""
                  )}

                  {alert_message ? (
                    <div
                      className="alert_warning_class"
                      style={{ background: "#5cc64a4f", color: "green" }}
                    >
                      {" "}
                      <span>
                        <BsCheckCircle />
                      </span>{" "}
                      <p> {alert_message}</p>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  type="submit"
                  className="border_button"
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "7px",
                    padding: "4px",
                    minWidth: "90px",
                  }}
                >
                  Redeem
                </button>
              </form>
            </div>
          </div>
        </div>
        <UserSummary />
      </div>
      <style jsx>
        {`
          .avatar_div {
            padding: 10px;
            border: none;
            background: #cac3c3;
            border-radius: 32px;
            width: 45px;
            overflow: hidden;
            height: 45px;
            /* text-align: center; */
            justify-content: center;
            align-items: center;
            display: flex;
            position: relative;
            color: #fff;
            font-size: 21px;
          }
          // .avatar_div {
          //      GetUser?.data?.is_gold == 1 ? "4px solid #e9d22f" : ""
          // }
          .promocode_input_style {
            padding: 4px 10px;
            border: none;
            letter-spacing: 1px;
            font-size: 16px;
            outline: none;
            color: #343434;
            border-bottom: 1px solid #c4c3c3;
          }
        `}
      </style>
    </>
  );
};

export default protectRoute(UserProfile);
