import React, { useState, useEffect } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import { missingStoreAPI } from "service/API";
import { missingStoreClickAPI } from "service/API";
import axios from "axios";
import { useRouter } from "next/router";
import { BsCheckCircle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE

const MissingClaimForm = () => {
  const [storeType, setStoreType] = useState();

  const [store, setStore] = useState();
  const [alert_message, setAlert_Message] = useState();
  const [err, setErr] = useState();

  const router = useRouter()
  const authToken = useUserToken()

  const getData = async () => {
    try {
      let { data } = await axios.post(
        missingStoreAPI,
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
              missingStoreClickAPI,
              {
                apiAuth: apiAuth,
                device_type: DEVICE_TYPE,
                store_id: storeType,
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
              if (data.status == 1) {
              setAlert_Message(data.message);
              if (data.response) {
                sessionStorage.setItem("store_id", storeType);
                sessionStorage.setItem(
                  "missingStoreForm",
                  JSON.stringify(data.response)
                );
                setTimeout(() => {
                  router.push("missingform-store");
                }, 1000);
              }
            } else if (data.status == 0) {
            }
          } catch (error) {}
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
    setErr("");
    setAlert_Message("");
  };

  const headeTitle = "Cashback CalimForm | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{ margin:"15px", padding:"15px", background: "#f1f1f1", borderRadius: "4px" }}>
          <div>
            <h6 className="heading">
              Missing CalimForm
            </h6>
          </div>
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
                        key={item.store_id}
                        value={`${item.store_id} ${item.store}`}
                      >
                        {item.store}
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
                  <div sx={{ paddingTop: "10px" }}>
                    {" "}
                    <div className="alert_warning_class" style={{background:"rgb(225 20 20 / 26%)"}}> <span><BsCheckCircle /></span> <p>{err}</p> </div>
                  </div>
                ) : (
                  ""
                )}
                {alert_message ? (
                   <div  className="alert_warning_class" style={{background:" #f0462b4f"}}> <span><BiErrorCircle /></span> <p>{alert_message}</p> </div>
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

export default protectRoute(MissingClaimForm) ;
