import React, { useState, useEffect } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { claimformStoreAPI } from "service/API";
import { userClaimformAPI } from "service/API";
import axios from "axios";
import { useRouter } from "next/router";
import { BsCheckCircle } from "react-icons/bs";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE

const CashbackClaimform = () => {
  const [storeType, setStoreType] = useState();
  const [store, setStore] = useState();
  const [err, setErr] = useState();

  const router = useRouter()
  const authToken = useUserToken()

  const getData = async () => {
    try {
      let { data } = await axios.post(
        claimformStoreAPI,
        {
          apiAuth: apiAuth,
          device_type: DEVICE_TYPE,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      if(data.code == "401"){
        return router.push("/session-expired")
      }
      setStore(data.response);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [authToken]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (storeType) {
      if (storeType == "nostore") {
        setErr(`Please Select valid Store Name`);
      } else {
        const sendStoreData = async () => {
          try {
            let { data } = await axios.post(
              userClaimformAPI,
              {
                apiAuth: apiAuth,
                device_type: "4",
                store_id: storeType,
              },
              {
                headers: {
                  Authorization: authToken,
                },
              }
            );
            if (data.status == 1) {
              sessionStorage.setItem("store_id", storeType);
              sessionStorage.setItem("claimStoreForm", JSON.stringify(data));
              setTimeout(() => {
                router.push("claimform-store");
              }, 500);
            } else if (data.status == 0) {
              setErr(data.message);
            }
          } catch (error) {
            console.log(error);
          }
        };
        sendStoreData();
      }
    } else {
      setErr(`Select Store Name`);
    }
  };

  const storeHandler = (e) => {
    let splitValue = e.target.value;
    let myArray = splitValue.split(" ");
    setStoreType(myArray[0]);
    sessionStorage.setItem("store_name", myArray[1]);
    setErr("");
  };

  const headeTitle = "Cashback CalimForm | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{margin:"15px", padding:"15px", background: "#f1f1f1", borderRadius: "4px" }}>
          <box>
            <h6 className="heading">
              {" "}
              Cashback CalimForm
            </h6>
          
          </box>
          <div style={{ paddingTop: "10px" }}>
            <form onSubmit={onSubmit}>
              <select
                onChange={storeHandler}
                name="account-type"
                id="account-type"
              >
                <option value="nostore">Store Name</option>
                {store &&
                  store.map((item, i) => {
                    return (
                      <option
                        key={item.id}
                        value={`${item.store_id} ${item.name}`}
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
              <div style={{ padding: "10px 0" }}>
                <button
                  type="submit"
                   className="contain_button"
                  style={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Submit
                </button>
              </div>
              <div>
                {err ? (
                  <div style={{ paddingTop: "10px" }}>
                    <div className="alert_warning_class" style={{background:"rgb(225 20 20 / 26%)"}}> <span><BsCheckCircle /></span> <p>{err}</p> </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        select {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          font-size: 15px;
          border: 1px solid #c1c1c1;
        }
      `}</style>
    </>
  );
};

export default protectRoute(CashbackClaimform) ;
