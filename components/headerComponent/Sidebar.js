import {
  Box,
  Grid,
  Divider,
  Typography,
  Avatar,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import {motion} from "framer-motion"
import dashboardIcon from "../../public/images/icon/dashboard.png";
import shopIcon from "../../public/images/icon/shop.png";
import categoryIcon from "../../public/images/icon/category.png";
import promoCodeIcon from "../../public/images/icon/promo-code.png";
import confettiIcon from "../../public/images/icon/confetti.png";
import cashbackIcon from "../../public/images/icon/cashback.png";
import contentWritingIcon from "../../public/images/icon/content-writing.png";
import briefcaseIcon from "../../public/images/icon/briefcase.png";
import phoneCallIcon from "../../public/images/icon/phone-call.png";
import questionIcon from "../../public/images/icon/question.png";
import powerOffIcon from "../../public/images/icon/power-off.png";
import loginIcon from "../../public/images/icon/login-account.png";
import { useEffect, useState } from "react";

export const menuList = [
  
  {
    link: "/all-store",
    menuName: "Store",
    menuIcon: shopIcon,
  },
  {
    link: "/category",
    menuName: "Category",
    menuIcon: categoryIcon,
  },
  {
    link: "/coupons",
    menuName: "Coupons",
    menuIcon: promoCodeIcon,
  },
  {
    link: "/",
    menuName: "Festival",
    menuIcon: confettiIcon,
  },
  {
    link: "/",
    menuName: "100% Cashback",
    menuIcon: cashbackIcon,
  },
  {
    link: "/",
    menuName: "Hindi Artical",
    menuIcon: contentWritingIcon,
  },
  {
    link: "/",
    menuName: "Carrer",
    menuIcon: briefcaseIcon,
  },
  {
    link: "/",
    menuName: "Contact Us",
    menuIcon: phoneCallIcon,
  },
  {
    link: "/",
    menuName: "Help & Support",
    menuIcon: questionIcon,
  },
];

const Sidebar = ({ togalButton, closeSidebar }) => {
  const [userdata, setUserdata] = useState();

  useEffect(() => {
    setUserdata(localStorage.getItem("user"));
  }, []);
  
 
  const router = useRouter();
  const sidebarClose = () => {
    setTimeout(() => {
      closeSidebar();
    }, 200);
  };
  const logoutUser = () => {
    localStorage.clear("user");
    router.push("/login");
  };

  return (
    <Box>
      {togalButton ? (
        <Box
          onClick={sidebarClose}
          component="div"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            top: "55px",
            position: "fixed",
            zIndex: "9981",
            left: "-2px",
            overflow: "auto",
          }}
        >
          <Box
            component="div"
            style={{
              width: "83%",
              minWidth: "250px",
              maxWidth: "450px",
              backgroundColor: "#fff",
              padding: "20px 10px",
              minHeight: "94vh",
              boxShadow: "0px 0px 28px -3px",
            }}
          >
            <Box
           
              component="div"
              style={{
                backgroundColor: "#f5f3f3",
                padding: "10px 13px",
                borderRadius: "10px",
              }}
            >
              <Link  href={userdata ? "/cashback-summary":"/login"}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ color: "#000" }}
                >
                  <Grid item>
                    <Avatar
                      alt="Freekaamaal"
                      src=""
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="p" component="p">
                      Hello{" "}
                    </Typography>
                    {userdata ? (
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontWeight: "600" }}
                      >
                        {" "}
                        {JSON.parse(userdata).data.username}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontWeight: "600" }}
                      >
                        Guest
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>{
                    userdata? <Button
                    onClick={() => router.push("/user-edit-details")}
                    variant="contained"
                    sx={{ color: "#fff", borderRadius: "30px" }}
                    size="small"
                  >
                    Edit
                  </Button>:""
                  }
                    
                  </Grid>
                </Grid>
              </Link>
            </Box>
            <Box component="div">
              <List
                component="nav"
                aria-label="main mailbox folders"
                sx={{ width: "100%" }}
              >
                   <div>{
                     userdata ? (
                     <>
                     <Link href="/cashback-summary">
                      <ListItemButton onClick={sidebarClose}>
                        <ListItemIcon>
                          <Image
                            width={17}
                            height={17}
                            src={dashboardIcon}
                            alt="menuIcon"
                          ></Image>
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: "#000" }}
                          primary="Dashboard"
                        />
                      </ListItemButton>
                    </Link>
                    <Divider sx={{ opacity: "0.4" }} />
                     </>
                     ):("")
                    }
                    
                  </div>
                {menuList.map((item, i) => (
                  <div key={i + 1}>
                    <Link href={item.link}>
                      <ListItemButton onClick={sidebarClose}>
                        <ListItemIcon>
                          <Image
                            width={17}
                            height={17}
                            src={item.menuIcon}
                            alt="menuIcon"
                          ></Image>
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: "#000" }}
                          primary={item.menuName}
                        />
                      </ListItemButton>
                    </Link>
                    <Divider sx={{ opacity: "0.4" }} />
                  </div>
                ))}
                <div>
                  {
                    userdata ?  <div onClick={logoutUser}>
                    <ListItemButton onClick={sidebarClose}>
                      <ListItemIcon>
                        <Image
                          width={17}
                          height={17}
                          src={powerOffIcon}
                          alt="menuIcon"
                        ></Image>
                      </ListItemIcon>
                      <ListItemText sx={{ color: "#000" }} primary="Logout" />
                    </ListItemButton>
                    <Divider sx={{ opacity: "0.4" }} />
                  </div> :<div >
                    <Link href="/login">
                    <ListItemButton onClick={sidebarClose}>
                      <ListItemIcon>
                        <Image
                          width={20}
                          height={20}
                          src={loginIcon}
                          alt="menuIcon"
                        ></Image>
                      </ListItemIcon>
                      <ListItemText sx={{ color: "#000" }} primary="Login" />
                    </ListItemButton>
                    </Link>
                   
                    <Divider sx={{ opacity: "0.4" }} />
                  </div>
                  }
                </div>
               
              </List>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Sidebar;
