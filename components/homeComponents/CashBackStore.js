import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import cashbackImage from "../../public/images/money.png";
import { homeAPI2 } from "service/API.js";
import axios from "axios";

const DEVICE_TYPE = process.env.DEVICE_TYPE
const apiAuth = process.env.API_AUTH

const CashBackStore = () => {
  const [stores, setStores] = useState([]);
  const [storeTabs,setStoreTabs] = useState([])
  const [authToken, setAuthToken] = useState()
  const [cat_id,setCat_id] = useState("all")
  const [activeTab, setActiveTab]= useState(true)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setAuthToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, []);

  useEffect(() => {
    const getAPI2 = async () => {
      try {
        let  {data}  = await axios.post(
          homeAPI2,
          {
            apiAuth: apiAuth,
            page: "1",
            device_type: DEVICE_TYPE,
            sponsored_count: "1",
            option:cat_id
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
       
        setStores(data.response.cbstores)
        setStoreTabs(data.response.store_tabbing)
      } catch (error) {}
    };
    getAPI2()
  }, [authToken, cat_id]);
  useEffect(()=>{
   
  })

  function openTabFun(id){
    setCat_id(id)
    setActiveTab(false)
  }

  // console.log(stores)
  return (
    <>
      <div className="d_flex" style={{ padding: "13px 3px 3px" }}>
        <div style={{ width: "30px", marginRight: "10px" }}>
          <Image
            src={cashbackImage}
            alt="cashback image"
            width={29}
            height={29}
          />
        </div>
        <div>
          <h6 className="heading">
            Cashback <strong>Store</strong>
          </h6>
        </div>
      </div>
      <div className="store_box">
        <div className="tab">
          {
            storeTabs && storeTabs.map((item, i)=>{
              return  <button   key={i}
              className={`tablinks  ${i=="0" && activeTab ? "active":""}` }
              onClick={(e) => openTabFun(item.cate_id)}
            >
             {item.name}
            </button>
            })
          }
        </div>
        <div className="stores">
          <div  class="tabcontent">
          <div
              className="flex_start"
              style={{flexWrap: "wrap",justifyContent:"center"}}
            >
              {stores &&
                stores.map((store, i) => {
                  return (
                    <div
                     key ={i}
                     style={{
                      maxWidth: "120px",
                      padding: "5px 3px 7px 3px ",
                      marginBottom: "10px",
                      boxShadow: "0 0 0 ",
                    }}
                  >
                    <Link
                      className="cash_back_store_link"
                      href={`/${store.store_slug}`}
                    >
                      <div>
                        <div
                         style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            padding: "10px",
                          }}
                        >
                          <Image
                            src={store.store_image}
                            alt="store"
                            height={30}
                            width={100}
                          />
                        </div>
                        <p className="cash_back_store_offer">
                          <span style={{ color: "red" }}>
                            {store.name}{" "}
                          </span>
                          Cashback
                        </p>
                      </div>
                    </Link>
                  </div>
                  );
                })}
            </div>
          </div>

        </div>
      </div>
      <style jsx>
        {`
       .tab {
        background-color: #ffeade;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: auto;
        width: 100%;
       }
       .tab button {
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 15px;
        font-weight: 600;
        color: #222222;
        border-radius: 4px;
        min-width: 241px;
        letter-spacing: 1px;
    }
        .tab button:hover {
          background-color: var(--main-color);
          color: #fff;
      }
      .tab button.active {
          background-color: var(--main-color);
          color: #fff;
      }
      .tabcontent {
        display: block;
        padding: 6px 12px;
        border: 1px solid #e9e7e7;
        border-top: none;
      }
      .tab::-webkit-scrollbar {
        display: none;
     }
        .cash_back_store_offer{
          text-align: center;
          color: #000;
          padding: 1px 2px;
          font-size: 13px;
      }
      .cash_back_store_link{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      `}
      </style>
    </>
  );
};

export default CashBackStore;
