
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dashboardIcon from "../../public/images/icon/sidebar/dashboard.png";
import shopIcon from "../../public/images/icon/sidebar/store.png";
import categoryIcon from "../../public/images/icon/sidebar/top categories.png";
import promoCodeIcon from "../../public/images/icon/sidebar/coupon.png";
import contentWritingIcon from "../../public/images/icon/sidebar/article.png";
import phoneCallIcon from "../../public/images/icon/sidebar/contact us.png";
import powerOffIcon from "../../public/images/icon/sidebar/logout.png";
import loginIcon from "../../public/images/icon/sidebar/login-account.png";
import freebies from "../../public/images/icon/sidebar/Freebies.png";
import livefeed from "../../public/images/icon/sidebar/live.png";
import festivals from "../../public/images/icon/sidebar/festival.png";
import cashbackIcon from "../../public/images/icon/sidebar/100cb.png";
import aboutus from "../../public/images/icon/sidebar/about.png";
import FAQs from "../../public/images/icon/sidebar/faq.png";
import addwithUs from "../../public/images/icon/sidebar/advertise with us.png";

import { FaUser } from "react-icons/fa";
import { useGetUser } from "service/customHooks";

export const menuList = [
  {
    link: "/all-store",
    menuName: "Top Stores",
    menuIcon: shopIcon,
  },
  {
    link: "/category",
    menuName: "Top Categories",
    menuIcon: categoryIcon,
  },
  {
    link: "/coupons",
    menuName: "Coupons",
    menuIcon: promoCodeIcon,
  },
  {
    link: "/freebies",
    menuName: "Freebies",
    menuIcon: freebies,
  },
  {
    link: "/live-feed",
    menuName: "Live Feed",
    menuIcon:livefeed,
  },
  {
    link: "/articles",
    menuName: " Articles",
    menuIcon: contentWritingIcon,
  },
  {
    link: "/festivals",
    menuName: "Festivals",
    menuIcon: festivals,
  },
  {
    link: "/cashback-page/cashback",
    menuName: "100% Cashback",
    menuIcon: cashbackIcon,
  },
  {
    link: "/contact-us",
    menuName: "Contact Us",
    menuIcon: phoneCallIcon,
  },
  {
    link: "/about-us",
    menuName: "About Us",
    menuIcon: aboutus,
  },
  {
    link: "/advertise-with-us",
    menuName: "Advertise with Us",
    menuIcon: addwithUs,
  },
  {
    link: "/faq",
    menuName: "FAQ's",
    menuIcon: FAQs,
  },
];

const Sidebar = ({ togalButton, closeSidebar }) => {

  const userdata = useGetUser()
  // console.log(userdata)
  const router = useRouter();

  const sidebarClose = () => {
    setTimeout(() => {
      closeSidebar();
    }, 200);
  };

  const logoutUser = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  };

  return (
    <div>
      {togalButton ? (
        <div
          className=""
          onClick={sidebarClose}
          style={{
            width: "100%",
            backgroundColor: "#e7e7e778",
            top: "55px",
            position: "fixed",
            zIndex: "9981",
            left: "-2px",
            overflow: "auto",
          }}
        >
          <div className="sidebar_class"
            style={{
              width: "83%",
              minWidth: "250px",
              maxWidth: "450px",
              backgroundColor: "#fff",
              padding: "20px 10px",
              minHeight: "94vh",
              boxShadow: "0px 2px 13px 3px #cecece",
            }}
          >
            <div>

            <div
              style={{
                padding: "10px 13px",
                borderRadius: "10px",
               background: "#ff00000d"
              }}
            >
              <Link href={userdata ? "/cashback/home" : "/login"}>
                <div
                  className="d_flex"
                  style={{
                    color: "#000",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <div className="avatar_div" style={{overflow:"hidden"}}>
                    {/* <FaUser /> */}
                   <Image src= {userdata.data.user_img_url} alt=""height={45} width={45}></Image>
                  </div>
                  <div>
                    <p className="p_tag_big" style={{ fontSize: "16px" }}>
                      Hello{" "}
                    </p>
                    {userdata ? (
                      <p
                        className="p_tag_big"
                        style={{
                          fontWeight: "600",
                          fontSize: "19px",
                          letterSpacing: "1px",
                        }}
                      >
                        {" "}
                        {userdata.data.username}
                      </p>
                    ) : (
                      <p
                        className="p_tag_big"
                        style={{
                          fontWeight: "600",
                          fontSize: "19px",
                          letterSpacing: "1px",
                        }}
                      >
                        Guest
                      </p>
                    )}
                  </div>
                  <div>
                    {userdata ? (
                      <button
                        onClick={() => router.push("/user-edit-details")}
                        className="text_button"
                      >
                        Edit
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            </div>
              <ul
              className="sidebar_list_ul"
                style={{ width: "100%" }}
              >
                <div>
                  {userdata ? (
                    <>
                      <Link href="/cashback/home">
                        <div style={{padding:"14px 18px"}} className="d_flex" onClick={sidebarClose}>
                            <Image
                              width={17}
                              height={17}
                              src={dashboardIcon}
                              alt="menuIcon"
                            ></Image>
                          <p className="list_item_text" style={{ color: "#646161",paddingLeft:"35px"}}>Dashboard</p>
                        </div>
                      </Link>
                      <hr className="divider_class" />
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {menuList.map((item, i) => (
                  <div key={i + 1}>
                    <Link href={item.link}>
                      <div style={{padding:"14px 18px"}} className="d_flex" onClick={sidebarClose}>
                          <Image
                            width={17}
                            height={17}
                            src={item.menuIcon}
                            alt="menuIcon"
                          />
                        <p className="list_item_text" style={{ color: "#646161",paddingLeft:"35px"}}
                        >{item.menuName}</p>
                      </div>
                    </Link>
                    <hr className="divider_class" />
                  </div>
                ))}
                <div>
                  {userdata ? (
                    <div  onClick={logoutUser}>
                      <div style={{padding:"14px 18px" ,cursor:"pointer"}} className="d_flex"  onClick={sidebarClose}>
                          <Image
                            width={17}
                            height={17}
                            src={powerOffIcon}
                            alt="menuIcon"
                          ></Image>
                     
                        <p  className="list_item_text" style={{ color: "#646161",paddingLeft:"35px",}} >Logout</p>
                      </div>
                      <hr className="divider_class" />
                    </div>
                  ) : (
                    <div>
                      <Link href="/login">
                        <div style={{padding:"14px 18px"}} className="d_flex" onClick={sidebarClose}>
                            <Image
                              width={20}
                              height={20}
                              src={loginIcon}
                              alt="menuIcon"
                            ></Image>
                         <p className="list_item_text" style={{ color: "#646161",paddingLeft:"35px"}} >Login</p>
                        </div>
                      </Link>
                      <hr className="divider_class" />
                    </div>
                  )}
                </div>
              </ul>
            </div>
            
          </div>
        </div>
      ) : (
        ""
      )}
      <style jsx>{`
      .avatar_div{
        padding: 10px;
        border: none;
        {/* background: #cac3c3; */}
        border-radius: 32px;
        width: 45px;
        height: 45px;
        /* text-align: center; */
        justify-content: center;
        align-items: center;
        display: flex;
        color: #fff;
        font-size: 21px;
      }
      @media screen and (max-width:420px) {
        .sidebar_class{
           width:95% !important;
        }
      }
      .divider_class{
        opacity: 0.1;
      }
     
      `}</style>
    </div>
  );
};

export default Sidebar;
