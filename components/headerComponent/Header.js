import React, { useEffect, useState,useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Toolbar, AppBar, Box, IconButton, Grid,TextField } from "@mui/material";
import menuButton from "public/images/icon/menu-button.png";
import searchButton from "public/images/icon/search.png";
import accountButton from "public/images/icon/account.png";
import { RxCross2 } from 'react-icons/rx';
import Sidebar from "./Sidebar";
import {searchSuggestionApi} from "service/API" 

// import { BiSearch } from 'react-icons/bi';
import fkmLogo from "../../public/images/fkm-logo/fkm-logo.png";
import axios from "axios";

const apiAuth = process.env.API_AUTH

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [user, setuser] = useState();
  const [searchInput, setSearchInput] = useState(false)
  const [searchSuggestion, setSearchSuggestion] = useState()
  const [searchTextLength, setSearchTextLength] = useState(0)
  const [getInputvalue, setGetInputvalue] = useState()

  const router = useRouter()

  const toggleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const searchInputToggal = ()=> {
    if(searchInput == false){
      setSearchSuggestion("")
      setSearchInput(true)
    }else{
      setSearchInput(false)
      setSearchSuggestion("")
    }
    
  }

const OnInputSearchText = async (e)=>{
 let value = e.target.value
 setGetInputvalue(value)
 setSearchTextLength(value.length)
 try {
  // if(value.length > 2){
      let {data} = await axios.post(searchSuggestionApi,{
        apiAuth:apiAuth,
        keyword:value
      })
        setSearchSuggestion(data.response.suggestion)
    
      // console.log(data.response.suggestion)
  // } 
 } catch (error) {
  
 }
 
}

const debounce = (func)=>{
   let timer;
   return function(...args){
    const context = this;
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      timer = null;
      func.apply(context, args)
    },400)
   }
}

const optimizedFunction = useCallback(debounce(OnInputSearchText),[])

  useEffect(() => {
    if(localStorage.getItem("user")){
    setuser(localStorage.getItem("user"));
    }
  }, []);
// console.log(searchSuggestion)

// search event 
const handleKeyPress = (e)=>{
  if(searchTextLength >= 3){
    if(e.key === "Enter"){
      e.preventDefault();
      router.push({pathname:"/search",
      query: { searchword: getInputvalue }
    })
    setSearchInput(false)
    setSearchSuggestion("")
     }
    
  } 
}
const searchButtonClick =(e)=>{
  if(searchTextLength >= 3){
    e.preventDefault();
    router.push({pathname:"/search",
    query: { name: getInputvalue }
  })
  setSearchSuggestion("")
  setSearchInput(false)
}}

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
              {
                searchInput ? 
                (<IconButton 
                  onClick={searchInputToggal}
                   size="large"
                   aria-label="SearchIcon"
                   sx={{ color: "#fff" }}
                 >
                   <RxCross2
                   style={{height:"20px", width:"20px"}}
                   />
                 </IconButton>)
                : (<IconButton 
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
                 </IconButton>)
              }
              
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
        <Box sx={{position:"relative"}}>
         {
            searchInput ? <Box  sx={{alignItems:"center", display:"flex",justifyContent:"center",padding:"10px", width:"100%",position:"relative" }}>
               <input onKeyDown={(e)=>{handleKeyPress(e)}} onChange={optimizedFunction} placeholder="Search Your Favorites Deals" className="header_input_search"></input>
               <button className="header_input_button" >
                {/* <BiSearch style={{height:"24px", width:"24px"}}></BiSearch> */}
                </button>
            </Box>:""
          }
           <Box sx={{width:"100%"}}>
            {
              searchSuggestion ?
               <div>
                {
                  searchSuggestion.length >= 1 ? <div >
                  {
                    searchSuggestion.map((item,i)=>
                    <ul className="search_out_put_box" key={i}>
                      <li> <Link style={{color:"#000"}} href=""> <span>{item.name}</span>  <span style={{float:"right"}}><span style={{fontWeight:"600"}}> &#x20B9; {item.amount}</span> <span style={{color:"red"}}>Cashback</span></span></Link> </li>
                    </ul>
                  )
                  }
                  </div>: searchTextLength == 0 ? "" : searchInput == false ? "" : <div className="search_out_put_box" style={{textAlign:"center", padding:"7px"}}>No Data Found</div>
                }
              </div>:""
            }
         {/* <div className="search_out_put_box" style={{textAlign:"center", padding:"7px"}}>No Data Found</div> */}
          </Box>
        </Box>
       
      </AppBar>
      <Sidebar closeSidebar={toggleClick} togalButton={sidebarToggle} />
      <style jsx>{`
     .header_input_search{
      width: 100%;
      padding: 8px 22px;
      outline: none;
      -webkit-border-radius: 35px;
      -moz-border-radius: 35px;
      border-radius: 5px;
      border: none;
      font-size: 15px;
      letter-spacing: 1px;
      font-weight: 500;
     }
     .header_input_button{
      position: absolute;
    right: 26px;
    cursor: pointer;
    background: no-repeat;
    border: none;
    top: 15px;
    color: gray;
     }
     .header_input_button:hover{
      color: #f27935;
     }
     .search_out_put_box{
      left: 8px;
    right: 8px;
    position: absolute;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-shadow: 1px -1px 28px 0px #cac4c4;
    top: 49px;
    list-style: none;
    padding: 3px 0;
    background-color: #fff;
}

.search_out_put_box li{
  cursor: pointer;
  padding: 6px 19px;
}
.search_out_put_box li:hover{
  color: #fff;
    background: #f27935;
}

      `}</style>
    </Box>
  );
};

export default Header;
