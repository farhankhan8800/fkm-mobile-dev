import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Typography, Box, Button } from "@mui/material";
import FaqCashbackPage from "components/cashback-page-components/FaqCashbackPage";
import CashbackStorePageCard from "components/cashback-page-components/CashbackPageStoreCard";

import {cashbackstoreAPI} from "service/API"
import { useState } from "react";
import { useEffect } from "react";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;
const headeTitle = "Cashback Store | Freekaamaal";


const CashbackStore = () => {
  const [cahsbackstore, setCahsbackstore] = useState([])
  const [option, setOption] = useState("hundredpercent");
  const [page, setPage]= useState(null)
  const [noData, setNoData] = useState()
  const [ToggleState, setToggleState] = useState(1);

  const authToken = useUserToken();

  const getdata = async ()=>{
    try {
      let {data} = await axios.post(
        cashbackstoreAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          option:option,
          page:page
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      )
      if(option=="all"){
        if(data.response.cahsbackstore.length == 0){
          setNoData(true)
        }else{
          setCahsbackstore([...cahsbackstore,...data.response.cahsbackstore])
        }
      }else{
        setCahsbackstore(data.response.cahsbackstore)
      }
      
      // console.log(data.response)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
   getdata()
},[authToken,page,option])


const tabClick = (value)=>{
  if(value == "hundredpercent"){
    toggleTab(1);
    setCahsbackstore("")
    setOption("hundredpercent")

  }else if(value == "newest"){
    toggleTab(2);
    setCahsbackstore("")
    setOption("newest")
  }else if(value == "popular"){
    toggleTab(3);
    setCahsbackstore("")
    setOption("popular")
  }else if(value == "all"){
    toggleTab(4);
    setPage(1)
    setNoData(false)
    setCahsbackstore("")
    setOption("all")
  }  
}

const addPage =()=>{
  setPage(page+1)
}

const toggleTab = (index) => {
  setToggleState(index);
};

const getActiveClass = (index, className) =>
  ToggleState === index ? className : "";


  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
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
          <p className="p_tag_big"  style={{ margin: "10px 0",fontSize:"14px" }}>
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
          <div >
          <ul className="tab-list">
                <li
                  className={`tabs ${getActiveClass(1, "active-tabs")}`}
                  onClick={()=>tabClick("hundredpercent")}
                >
                  100%&nbsp;Cashback
                </li>
                <li
                  className={`tabs ${getActiveClass(2, "active-tabs")}`}
                  onClick={()=>tabClick("newest")}
                >
                  Newest
                </li>
                <li
                  className={`tabs ${getActiveClass(3, "active-tabs")}`}
                  onClick={()=>tabClick("popular")}
                >
                  Popular
                </li>
                <li
                  className={`tabs ${getActiveClass(4, "active-tabs")}`}
                  onClick={()=>tabClick("all")}
                >
                  A&nbsp;-&nbsp;Z
                </li>
              </ul>

            <div className={`content ${getActiveClass(1, "active-content")}`}>
              {
                option == "hundredpercent"? <main>
                <div className="stroes_box">
                              <CashbackStorePageCard cahsbackstore={cahsbackstore} />
                              </div>
                          
                              <div className="how_cashback_work_box">
                                <p
                                  style={{ color: "#fff",fontWeight:"600"}}
                                >
                                  How Cashback Works?
                                </p>
                                <h4
                                  
                                 
                                  style={{ color: "#fff" ,fontSize:"12px",lineHeight:"1.45" }}
                                  
                                >
                                  Now shop through FreeKaaMaal and get cashback on every
                                  purchase. We get commission for every sale that you do through
                                  us and now we will be passing on that commission back to our
                                  users. Shop from our partner stores and get upto 100%
                                  cashback. This is what we call Free Ki Shopping
                                </h4>
                              </div>
                              <div className="point_remamber">
                                <div className="point_remamber_ab_heading">
                                  <h5>Important Points to Remember</h5>
                                </div>
                                <ol className="point_remamber_content">
                                  <li>
                                    <p>
                                      {" "}
                                      <span>1 &nbsp;</span> Please add products in your Cart
                                      only AFTER you click out of FreeKaaMaal. Products lying in
                                      the cart before clicking out through FreeKaaMaal will not
                                      be eligible for claiming Cashback.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>2 &nbsp;</span> Complete your purchase in the same
                                      session/in one go after clicking through FreeKaaMaal.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>3 &nbsp;</span> Do not visit any other price comparison, coupon or deal site in between clicking-out through FreeKaaMaal & placing the order on retailer&apos;s site.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>4 &nbsp;</span> Always use an incognito window of your browser, to avoid cashback tracking issue.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>5 &nbsp;</span> Cashback is Applicable thrice per month( May vary from store to store), per unique freekaamaal and Merchant/store accounts based on Email ID, IP address, Mobile no., Delivery address & Payment card/Wallet
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>6 &nbsp;</span> It usually takes 24-48 hours to track the sale and crediting the cashback to your FreeKaaMaal account. However, initially, this cashback status will remain Pending. Once the retailer confirms the transaction (within 6-10 business weeks) your cashback status will change to Confirmed. Thus, Missing Cashback Support Tickets could be raised only after 72 hours of making the transaction and before 4th of the next month whichever is earlier. Any support ticket/query raised before the mentioned time will be Rejected
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>7 &nbsp;</span> Only use Coupons available on FreeKaaMaal to ensure validity & Cashback tracking. Restrictions may apply in some cases.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>8 &nbsp;</span> Bulk Orders will NOT be accepted for claiming Cashback: Please note it is against our T&C&apos;s to use our services for non-personal or commercial use. FreeKaaMaal shall block all such accounts and forfeit their cashback balances.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>9 &nbsp;</span> Cashback is not payable if you return/ canceled / exchange/ partial cancellation / partial exchange of your order. In all these cases Cashback for the full order will be declined.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>10 &nbsp;</span> Cashback is NOT guaranteed based on various retailer criteria while Using a Coupon, Gift Voucher, Gift Card, Gift Certificate or Store Credit.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>11 &nbsp;</span> Cashback rates are subject to change at any time without prior notification.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      {" "}
                                      <span>11 &nbsp;</span> For any Cashback/Rewards related issues/queries, kindly mail us at 
                                      <a target="_balnk" href="mailto:support@freekaamaal.com">support@freekaamaal.com</a>
                                    </p>
                                  </li>
                                </ol>
                              </div>
                              <div className="faq_section_components">
                                <FaqCashbackPage />
                              </div>
                              </main> :""
              }
              
              
            </div>
            <div className={`content ${getActiveClass(2, "active-content")}`}>
            <div className="stroes_box">
              {
                option == "newest" ? 
                    <CashbackStorePageCard cahsbackstore={cahsbackstore} />
                :""
              }
              </div>
             
            </div>
            <div className={`content ${getActiveClass(3, "active-content")}`}>
              <div className="stroes_box">
                {
                  option == "popular" ?  <CashbackStorePageCard cahsbackstore={cahsbackstore} />:""
                }
               
              </div>
             
              <div className="how_cashback_work_box">
                <h4
                  style={{ color: "#fff",fontWeight:"600" }}
                >
                  How Cashback Works?
                </h4>
                <p
                  style={{ color: "#fff", fontSize:"12px", lineHeight:"1.55" }}
                >
                  Now shop through FreeKaaMaal and get cashback on every
                  purchase. We get commission for every sale that you do through
                  us and now we will be passing on that commission back to our
                  users. Shop from our partner stores and get upto 100%
                  cashback. This is what we call Free Ki Shopping
                </p>
              </div>
              <div className="point_remamber">
                <div className="point_remamber_ab_heading">
                  <h5>Important Points to Remember</h5>
                </div>
                <ol className="point_remamber_content">
                  <li>
                    <p>
                      {" "}
                      <span>1 &nbsp;</span> Please add products in your Cart
                      only AFTER you click out of FreeKaaMaal. Products lying in
                      the cart before clicking out through FreeKaaMaal will not
                      be eligible for claiming Cashback.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>2 &nbsp;</span> Complete your purchase in the same
                      session/in one go after clicking through FreeKaaMaal.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>3 &nbsp;</span> Do not visit any other price comparison, coupon or deal site in between clicking-out through FreeKaaMaal & placing the order on retailer&apos;s site.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>4 &nbsp;</span> Always use an incognito window of your browser, to avoid cashback tracking issue.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>5 &nbsp;</span> Cashback is Applicable thrice per month( May vary from store to store), per unique freekaamaal and Merchant/store accounts based on Email ID, IP address, Mobile no., Delivery address & Payment card/Wallet
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>6 &nbsp;</span> It usually takes 24-48 hours to track the sale and crediting the cashback to your FreeKaaMaal account. However, initially, this cashback status will remain Pending. Once the retailer confirms the transaction (within 6-10 business weeks) your cashback status will change to Confirmed. Thus, Missing Cashback Support Tickets could be raised only after 72 hours of making the transaction and before 4th of the next month whichever is earlier. Any support ticket/query raised before the mentioned time will be Rejected
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>7 &nbsp;</span> Only use Coupons available on FreeKaaMaal to ensure validity & Cashback tracking. Restrictions may apply in some cases.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>8 &nbsp;</span> Bulk Orders will NOT be accepted for claiming Cashback: Please note it is against our T&C&apos;s to use our services for non-personal or commercial use. FreeKaaMaal shall block all such accounts and forfeit their cashback balances.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>9 &nbsp;</span> Cashback is not payable if you return/ canceled / exchange/ partial cancellation / partial exchange of your order. In all these cases Cashback for the full order will be declined.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>10 &nbsp;</span> Cashback is NOT guaranteed based on various retailer criteria while Using a Coupon, Gift Voucher, Gift Card, Gift Certificate or Store Credit.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>11 &nbsp;</span> Cashback rates are subject to change at any time without prior notification.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <span>11 &nbsp;</span> For any Cashback/Rewards related issues/queries, kindly mail us at 
                      <a target="_balnk" href="mailto:support@freekaamaal.com">support@freekaamaal.com</a>
                    </p>
                  </li>
                </ol>
              </div>
              <div className="faq_section_components">
                <FaqCashbackPage />
              </div>
            </div>
            <div className={`content ${getActiveClass(4, "active-content")}`}>
              <div className="atoz_tab">
                  <div className="atoz_tab_heading">
                         <span className="active">A - Z</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                         <span>B</span>
                  </div>
              </div>
              <div className="store_list_box">
                 <div className="store-main-con">
                  {/* <h5>A</h5> */}
                  <div className="stroes_box">
                    {
                    option == "all" ?  <CashbackStorePageCard cahsbackstore={cahsbackstore} />:""
                    }
                  </div>
                 <div style={{ textAlign: "center", padding: "7px" }}>
                  {
                    noData ? "No Data Found": <button
                    onClick={addPage}
                   className="contain_button"
                   type="button"
                   style={{ color: "#fff" }}
                 >
                   {" "}
                   Lode More
                 </button>
                  }
               
              </div>
                 </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .top_box {
          background: #fff;
          padding: 16px 10px;
          text-align: center;
          margin: 0 10px;
        }
        .middle_box {
          padding: 13px 12px 5px 12px;
        }
        .stroes_box {
          display: flex;
          align-items: flex-start;
          padding: 10px 0;

          flex-wrap: wrap;
          justify-content: space-around;
        }
        
        .middle_box h4 {
          padding: 10px 0;
          font-weight: bold;
          font-size: 16px;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        .how_cashback_work_box {
          background-color: "#513aa0";
        }
        .how_cashback_work_box {
          background: #513aa0;
          padding: 10px;
          margin: 10px 0;
        }
        .point_remamber {
          border: 1px solid red;
          padding: 20px 10px 10px;
          border-radius: 4px;
          position: relative;
          margin-top: 57px;
        }
        .point_remamber_ab_heading {
          width: 257px;
          padding: 10px;
          position: absolute;
          top: -19px;
          background: #fff;
          left: 68px;
          border: 1px solid red;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
        }
        .point_remamber_ab_heading::after {
          position: absolute;
          content: "";
          background-image: url(https://images.freekaamaal.com/common-images/Important.png);
          top: -14px;
          left: -46px;
          width: 64px;
          height: 64px;
        }
        .point_remamber_ab_heading h5 {
          margin: 2px 2px 2px 10px;
          font-size: 15px;
        }
        .point_remamber_content {
          margin: 20px 10px 10px;
          line-height: 19px;
          list-style: none;
        }
        .point_remamber_content li p span {
          color: red;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .point_remamber_content li {
          padding-bottom: 6px;
        }
        .faq_section_components{
          background: #fff;
    padding: 8px;
    margin: 14px 0 10px;
        }
        .atoz_tab_heading{
          padding: 10px 9px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
        }
        .atoz_tab_heading span {
          display: inline-block;
    padding: 4px;
    cursor: pointer;
    font-weight: 600;
    margin: 5px;
    min-width: 30px;
    text-align: center;
        }
        .store-main-con{
          padding: 12px 0;

        }
        .store-main-con h5{
          font-size: 47px;
    color: skyblue;
    position: relative;
    padding-left: 15px;
        }
        .store-main-con h5::after {
          content: "";
    background: gray;
    height: 0.7px;
    width: 70%;
    position: absolute;
    top: 27px;
    left: 67px;
        }
        .tab-list {
            display: flex;
            list-style: none;
            overflow: auto;
            font-size: 18px;
            padding: 10px 2px;
            margin: 0;
          }

          .tabs {
            position: relative;
    cursor: pointer;
    
    padding: 8px 17px;
    border: 1px solid transparent;
    margin-right: 10px;
    border-radius: 4px;
          }
          .active-tabs {
            color: var(--main-color);
            border-color: var(--main-color);
          }

          .content {
            display: none;
          }

          .active-content {
            display: block;

            overflow: auto;
            margin: 0 10px;
          }
      `}</style>
    </>
  );
};

export default CashbackStore;
