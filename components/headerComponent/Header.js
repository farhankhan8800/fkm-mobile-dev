import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import menuButton from "public/images/icon/menu-button.png";
import searchButton from "public/images/icon/search.png";
import accountButton from "public/images/icon/account.png";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { searchSuggestionApi } from "service/API";

import fkmLogo from "../../public/images/fkm-logo/fkm-logo.png";
import axios from "axios";
import { useGetUser } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const [searchInput, setSearchInput] = useState(false);
  const [searchSuggestion, setSearchSuggestion] = useState();
  const [searchTextLength, setSearchTextLength] = useState(0);
  const [getInputvalue, setGetInputvalue] = useState();

  const router = useRouter();

  const user = useGetUser()

  const toggleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const searchInputToggal = () => {
    if (searchInput == false) {
      setSearchSuggestion("");
      setSearchInput(true);
    } else {
      setSearchInput(false);
      setSearchSuggestion("");
    }
  };

  const OnInputSearchText = async (e) => {
    let value = e.target.value;
    setGetInputvalue(value);
    setSearchTextLength(value.length);
    try {
      let { data } = await axios.post(searchSuggestionApi, {
        apiAuth: apiAuth,
        keyword: value,
      });
      setSearchSuggestion(data.response.suggestion);
    } catch (error) {}
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 400);
    };
  };

  const optimizedFunction = useCallback(debounce(OnInputSearchText), []);

 console.log()

  const handleKeyPress = (e) => {
    if (searchTextLength >= 3) {
      if (e.key === "Enter") {
        e.preventDefault();
        router.push({
          pathname: "/search",
          query: { searchword: getInputvalue },
        });
        setSearchInput(false);
        setSearchSuggestion("");
      }
    }
  };
  
  const searchButtonClick = (e) => {
    if (searchTextLength >= 3) {
      e.preventDefault();
      router.push({ pathname: "/search", query: { name: getInputvalue } });
      setSearchSuggestion("");
      setSearchInput(false);
    }
  };

  return (
    <>
      <div className="app_bar d_flex" 
      // style={{background:user?.data.is_gold == 1?"#000":""}}
      >
        <div 
          className="app_tool_bar d_flex"
        >
          <button onClick={toggleClick} >
            <Image
              width={24}
              height={24}
              onClick={toggleClick}
              src={menuButton}
              alt="menuButton"
            />
          </button>
          <Link
            style={{
              width: "300px",
              alignItems: "centr",
              justifyContent: "flex-start",
              display: "flex",
            }}
            href="/"
          >
            <Image width={130} height={28} src={fkmLogo} alt="fkm-Logo"></Image>
          </Link>
          <div className="flex_center">
            <div >
              {searchInput ? (
                <button
                  onClick={searchInputToggal}
                >
                  <RxCross2 style={{ height: "20px", width: "20px" }} />
                </button>
              ) : (
                <button
                  onClick={searchInputToggal}
                >
                  <Image
                    width={19}
                    height={19}
                    src={searchButton}
                    alt="search button"
                  />
                </button>
              )}
            </div>
            {user ? (
              ""
            ) : (
              <button >
                  <Link
                    style={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    href="/login"
                  >
                    <Image
                      src={accountButton}
                      width={24}
                      height={24}
                      alt="account Button"
                    />
                  </Link>
              </button>
            )}
          </div>
        </div>
        <div className="input_box_ab">
          {searchInput ? (
            <div className="flex_center"
              style={{padding: "10px",
              width: "100%",}}
            >
              <input
                onKeyDown={(e) => {
                  handleKeyPress(e);
                }}
                onChange={optimizedFunction}
                placeholder="Search Your Favorites Deals"
                className="header_input_search"
              ></input>
              <button className="header_input_button"></button>
            </div>
          ) : (
            ""
          )}
          <div style={{ width: "100%" }}>
            {searchSuggestion ? (
              <div>
                {searchSuggestion.length >= 1 ? (
                  <div>
                    {searchSuggestion.map((item, i) => (
                      <ul className="search_out_put_box" key={i}>
                        <li>
                          {" "}
                          <Link style={{ color: "#000" }} href="">
                            {" "}
                            <span>{item.name}</span>{" "}
                            <span style={{ float: "right" }}>
                              <span style={{ fontWeight: "600" }}>
                                {" "}
                                &#x20B9; {item.amount}
                              </span>{" "}
                              <span style={{ color: "red" }}>Cashback</span>
                            </span>
                          </Link>{" "}
                        </li>
                      </ul>
                    ))}
                  </div>
                ) : searchTextLength == 0 ? (
                  ""
                ) : searchInput == false ? (
                  ""
                ) : (
                  <div
                    className="search_out_put_box"
                    style={{ textAlign: "center", padding: "7px" }}
                  >
                    No Data Found
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Sidebar closeSidebar={toggleClick} togalButton={sidebarToggle} />
      <style jsx>{`
        .app_bar{
          max-width: 600px;
          position: fixed;
          width: 100%;
          z-index: 9999;
          margin: auto;
          background: var(--main-color);
          box-shadow: 0px 3px 13px -5px #a7a2a2;
        }
        .app_tool_bar{
          padding: 5px;
          width: 100%;
          justify-content: space-between;
          position: relative;
          align-items: center;
        }
        {/* button:focus{background-color:red;} */}
        .header_input_search {
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
        .input_box_ab{
          position: absolute;
          top: 64px;
          background: var(--main-color);
          width: 100%;
        }
        button{
          color: var(--second-color);
          padding: 10px;
          transition: auto;
          border-radius: 50px;
        }
        button:hover{
          background: #e7834a;
   
        }
        .header_input_button {
          position: absolute;
          right: 26px;
          cursor: pointer;
          background: no-repeat;
          border: none;
          top: 15px;
          color: gray;
        }
        .header_input_button:hover {
          color: #f27935;
        }
        .search_out_put_box {
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

        .search_out_put_box li {
          cursor: pointer;
          padding: 6px 19px;
        }
        .search_out_put_box li:hover {
          color: #fff;
          background: #f27935;
        }
      `}</style>
    </>
  );
};

export default Header;
