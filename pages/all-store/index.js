import React from "react";

import { allStores } from "../../service/API";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";


const headeTitle = "All Store | Freekaamaal";
const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const Index = () => {
  const [allStore, setAllStore] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    GetData();
  }, [page, apiAuth]);

  const GetData = async () => {
    try {
      let { data } = await axios.post(
        allStores,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
          page: page,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAllStore([...allStore, ...data.response.allstores]);
      // console.log(data.response.allstores)
    } catch (error) {
      return error;
    }
  };

  const addPageFun = () => {
    setPage(page + 1);
  };

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{ padding: "18px" }}>
          <div className="flex_wrap" style={{ justifyContent: "space-around" }}>
            {allStore &&
              allStore.map((store, i) => (
                <div
                  style={{ marginBottom: "30px", minWidth: "170px" }}
                  key={i + 1}
                >
                  <Link href={`/${store.store_slug}`}>
                    <div
                      style={{
                        color: "black",
                        position: "relative",
                        border: "2px solid #e9e9e9",
                        borderRadius: "7px",
                        padding: "18px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={store.store_img_url}
                          width={90}
                          height={30}
                          alt="store image"
                        ></Image>
                      </div>
                      <p className="store_name">{store.store_name}</p>
                      <div
                        style={{
                          position: "absolute",
                          background: "#f27935",
                          padding: "6px 14px",
                          left: "50%",
                          transform: "translate(-50%,0)",
                          bottom: "-19px",
                          borderRadius: "7px",
                          minWidth: "154px",
                        }}
                      >
                        <p
                         className="p_tag_big"
                         style={{textAlign:'center', color:"var(--second-color)"}}
                        >
                          {store.is_cashback == "1"
                            ? <> {`${store.cashback_amount}`} &nbsp; Cashback</>
                            : "No Cashback"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div
            className="flex_center"
            style={{ padding: "10px", marginTop: "10px" }}
          >
            <button onClick={addPageFun} className="contain_button">
              Lode More
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .store_name {
            text-align: center;
            text-transform: capitalize;
            padding-top: 10px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Index;
