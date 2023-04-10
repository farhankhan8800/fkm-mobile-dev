
import axios from "axios";
import CashbackDealPageCard from "components/cashback-page-components/CashbackPageDealCard";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {cashbackdealAPI} from "service/API"

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.API_AUTH;

const CashbackDeals = () => {
  const [search_by_category, setSearch_by_category] = useState(false);
  const [search_by_store, setSearch_by_store] = useState(false);
  const [cahsbackDeal, setCahsbackDeal] = useState([])
  const [authToken, setAuthToken] = useState();
  const [page,setPage]= useState(1)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setAuthToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);

  const getdata = async ()=>{
    try {
      let {data} = await axios.post(
        cashbackdealAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          page:page
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      )
      console.log(data.response)
     
      setCahsbackDeal([...cahsbackDeal,...data.response.cashbackdeal])
      // console.log(data.response)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
   getdata()
},[authToken,page])

const loadMoreFun = ()=>{
  setPage(page + 1)
}

  const filter_box_left_fn = () => {
    setSearch_by_store(false);
    if (search_by_category === true) {
      setSearch_by_category(false);
    } else {
      setSearch_by_category(true);
    }
  };
  const filter_box_right_fn = () => {
    setSearch_by_category(false);
    if (search_by_store === true) {
      setSearch_by_store(false);
    } else {
      setSearch_by_store(true);
    }
  };

  return (
    <>
      <HeadTag></HeadTag>
      <Header />
      <div
        style={{
          paddingTop: "56px",
          background: "#f3f3f3",
          minHeight: "100vh",
        }}
        className="cashback_store"
      >
        <div className="top_box">
          <h3>Earn Real Money When You Shop Online</h3>
          <p  style={{ margin: "10px 0",fontSize:"14"}}>
            Get upto 100% Cashback at over 200+ Online E-commerce stores in
            India. Stores pay us a commission for sending you onto their store,
            and we at FreeKaaMaal shares the commission with you as Cash Back.
          </p>

          <div>
            <Link className="Shop__Start" href="">
              Join & start Earning Now
            </Link>
          </div>
        </div>
        <div className="middle_box">
          <div className="filter_box">
            <div className="filter_box_left">
              <h5 onClick={filter_box_left_fn}>Search By Category</h5>
            </div>
            <div className="filter_box_right">
              <h5 onClick={filter_box_right_fn}>Search By Store</h5>
            </div>
            {search_by_store ? (
              <div className="filter_box_left_ab filter_box_ab">
                <input type="text" />
              </div>
            ) : (
              ""
            )}
            {search_by_category ? (
              <div className="filter_box_right_ab filter_box_ab">
                {" "}
                <input type="text" />{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="store_list">
            <CashbackDealPageCard cahsbackDeal={cahsbackDeal} />
            
          </div>
          <div style={{ textAlign: "center" }}>
            <button style={{ color: "#fff" }} className="contain_button"  onClick={loadMoreFun}>
              View All{" "}
            </button>
          </div>
          <div>
            <div className="how_cashback_work_box">
              <h5 style={{color: "#fff",fontWeight:"600"}}>
                How Cashback Works?
              </h5>
              <p
                sx={{ color: "#fff"  }}
              >
                Now shop through FreeKaaMaal and get cashback on every purchase.
                We get commission for every sale that you do through us and now
                we will be passing on that commission back to our users. Shop
                from our partner stores and get upto 100% cashback. This is what
                we call Free Ki Shopping
              </p>
              <Link href=""> Know More </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .top_box {
            background: #fff;
            padding: 16px 10px;
            text-align: center;
            margin: 0 10px;
          }
          .filter_box_left_ab {
          }
          .filter_box {
            display: flex;
            align-items: center;
            position: relative;
            padding: 12px 10px;
            justify-content: space-evenly;
            background: #fff;

            margin: 10px;
          }
          .filter_box_right {
            width: 50%;
          }
          .filter_box_left {
            width: 50%;
            background: url(https://images.freekaamaal.com/common-images/cb-deals-filter.png);
            background-repeat: no-repeat;
            padding-left: 26px;
          }
          .filter_box h5 {
            font-size: 17px;
            position: relative;
            text-align: center;
            cursor: pointer;
          }
          .filter_box h5:hover {
            color: gray;
          }
          
          .filter_box_left_ab {
            right: 4px;
          }
          .filter_box_right_ab {
            left: 4px;
          }
          .filter_box_ab {
            position: absolute;
            top: 50px;
            z-index: 1;
            padding: 10px;
            background: #fff;
          }
          .filter_box_ab input {
            width: 220px;
            padding: 5px;
            border: 1px solid gray;
            border-radius: 4px;
            outline: none;
          }
          .filter_box h5::selection {
            display: none;
          }
          .store_list {
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }
          .how_cashback_work_box {
            background-color: "#513aa0";
          }
          .how_cashback_work_box {
            background: #513aa0;
            padding: 10px;
            margin: 10px 0;
          }
          .how_cashback_work_box a {
            padding: 10px 0;
            display: inline-block;
            color: #fff;
            background: url(https://images.freekaamaal.com/common-images/know-more-btn.png);
            background-repeat: no-repeat;
            background-position: right;
            width: 115px;
          }
          .how_cashback_work_box a:hover{
            color:blue;
          }
        `}
      </style>
    </>
  );
};

export default CashbackDeals;
