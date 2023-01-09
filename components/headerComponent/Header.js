import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toolbar, AppBar, Box, IconButton, Grid,TextField } from "@mui/material";
import menuButton from "public/images/icon/menu-button.png";
import searchButton from "public/images/icon/search.png";
import accountButton from "public/images/icon/account.png";

import Sidebar from "./Sidebar";

import fkmLogo from "../../public/images/fkm-logo/fkm-logo.png";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [user, setuser] = useState();
  const [searchInput, setSearchInput] = useState(false)

  const toggleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const searchInputToggal = ()=> {
    if(searchInput == false){
      setSearchInput(true)
    }else{
      setSearchInput(false)
    }
    
  }

  useEffect(() => {
    setuser(localStorage.getItem("user"));
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        sx={{
          flexGrow: 1,
          maxWidth: "600px",
          position: "fixed",
          width: "100%",
          zIndex: "9999",
          margin: "auto",
          left: "0",
        }}
      >
        <Toolbar
          sx={{ alignItems: "center", justifyContent: "space-between", p: 0 }}
        >
          <IconButton size="large" aria-label="MenuIcon" sx={{ color: "#fff" }}>
            <Image
              width={24}
              height={24}
              src={menuButton}
              onClick={toggleClick}
              alt="menuButton"
            />
          </IconButton>
          <Link
            style={{
              width: "300px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            href="/"
          >
            <Image
              width={130}
              height={28}
              src={fkmLogo}
              alt="fkm-Logo"
            ></Image>
          </Link>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item >
              <IconButton 
               onClick={searchInputToggal}
                size="large"
                aria-label="SearchIcon"
                sx={{ color: "#fff" }}
              >
                <Image
                  width={18}
                  height={18}
                  src={searchButton}
                  alt="search button"
                />
              </IconButton>
            </Grid>
            {user ? (
              ""
            ) : (
              <Grid item>
                <IconButton size="large" aria-label="PersonOutlineIcon">
                  <Link
                    style={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    href="/login"
                  >
                    <Image src={accountButton} width={24} height={24} alt="account Button" />
                  </Link>
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Toolbar>
          {
            searchInput ? <Grid >
            
            </Grid>:""
          }
      </AppBar>
      <Sidebar closeSidebar={toggleClick} togalButton={sidebarToggle} />
    </Box>
  );
};

export default Header;
