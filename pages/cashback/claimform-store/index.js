
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userclaimdataAPI } from "service/API";

import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import axios from "axios";
import { ImWarning } from "react-icons/im";
import protectRoute from "service/protect-route";
import { useUserToken } from "service/customHooks";

const apiAuth = process.env.API_AUTH
const DEVICE_TYPE = process.env.DEVICE_TYPE

const ClaimformStore = () => {
  const [inputForm, setInputForm] = useState();
  const [store_id, setStore_id] = useState();
  const [store_name, setStore_name] = useState();
  const [data, setData] = useState({});
  const [serverError, setServerError] = useState();
  const [clientError, setClientError] = useState();

  const router = useRouter()
  const userToken = useUserToken()


  useEffect(() => {
    let InputData = sessionStorage.getItem("claimStoreForm");
    setInputForm(JSON.parse(InputData).response);
    setStore_id(sessionStorage.getItem("store_id"));
    setStore_name(sessionStorage.getItem("store_name"));

  }, []);

  const sendFormFunction = async () => {
    let data1 = data;
    let data2 = {
      apiAuth: apiAuth,
      store_id: store_id,
      device_type: DEVICE_TYPE,
      store: store_name,
    };
    let finnelData = {
      ...data1,
      ...data2,
    };

    if (finnelData.clickid) {
      if (finnelData.clickid === "nodata") {
        setClientError("Enter Valid Click Id");
      } else {
        try {
          let responce = await axios.post(
            userclaimdataAPI,
            {
              ...finnelData,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: userToken,
              },
            }
          );
          if (data.code == "401") {
            return router.push("/session-expired")
          }
          if (responce.data.status == 0) {
            setServerError(responce.data);
          } else if (responce.data.status == 1) {

          }
        } catch (error) { }
      }
    } else {
      setClientError("Enter Click Id");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData(data);
    sendFormFunction();
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setServerError("");
    setClientError("");
  };

  const updateFile = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
    setServerError("");
  };

  const headeTitle = " Claime store Form | Freekaamaal";

  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <div
          style={{ width: "100%", padding: " 5px 20px", paddingTop: "20px" }}
        >
          <h4>
            <strong style={{ fontWeight: "800" }}>Claim Form</strong>
          </h4>
          <form onSubmit={submitForm}>
            <div>
              <label htmlFor="userClicks">
                Your Click Date <span>*</span>
              </label>

              {inputForm ? (
                <select onChange={updateData} id="userClicks" name="clickid">
                  <option value="nodata">Your Click Date</option>
                  {inputForm.userclicks.map((item, i) => {
                    return (
                      <option key={i} value={item.clickid}>
                        {" "}
                        {item.created_time}
                      </option>
                    );
                  })}
                </select>
              ) : (
                "Loding ..."
              )}
            </div>
            <div>
              {inputForm
                ? inputForm.claimform.map((item, i) => {
                  if (item.type == "file") {
                    return (
                      <React.Fragment key={i + 1}>
                        {item.is_mandatory == 1 ? (
                          <label htmlFor={item.id}>
                            {item.title} <span>*</span>
                          </label>
                        ) : (
                          <label htmlFor={item.id}>{item.title}</label>
                        )}
                        <div className="file_input_style">
                          <input
                            style={{ width: "100%", marginTop: "5px" }}
                            size="small"
                            className=""
                            accept=".jpg, .jpeg, .png"
                            name={item.field_name}
                            id={item.id}
                            required={item.is_mandatory == 1 ? true : false}
                            onChange={updateFile}
                            type={item.type}
                          ></input>
                        </div>
                      </React.Fragment>
                    );
                  } else if (item.type == "date") {
                    return (
                      <React.Fragment key={i + 1}>
                        {item.is_mandatory == 1 ? (
                          <label htmlFor={item.id}>
                            {item.title} <span>*</span>
                          </label>
                        ) : (
                          <label htmlFor={item.id}>{item.title}</label>
                        )}
                        <input
                          style={{ width: "100%", marginTop: "5px" }}
                          className="input_style"
                          name={item.field_name}
                          id={item.id}
                          required={item.is_mandatory == 1 ? true : false}
                          onChange={updateData}
                          type={item.type}

                        ></input>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={i + 1}>
                        {item.is_mandatory == 1 ? (
                          <label htmlFor={item.id}>
                            {item.title} <span>*</span>
                          </label>
                        ) : (
                          <label htmlFor={item.id}>{item.title}</label>
                        )}
                        <input
                          style={{ width: "100%", marginTop: "5px" }}
                          className="input_style"
                          id={item.id}
                          required={item.is_mandatory == 1 ? true : false}
                          onChange={updateData}
                          name={item.field_name}
                          type={item.type}
                          placeholder={item.placeholder}
                        ></input>
                      </React.Fragment>
                    );
                  }
                })
                : "Loding ..."}
            </div>
            <div>
              {serverError ? (
                <div className="alert_warning_class"> <span><ImWarning /></span> <p> {serverError.message}!</p></div>
              ) : (
                ""
              )}
              {clientError ? (
                <div className="alert_warning_class"> <span><ImWarning /></span> <p>{clientError}!</p></div>
              ) : (
                ""
              )}
            </div>

            <button
              className="contain_button"
              style={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "10px 0",
                fontSize: "17px",
                letterSpacing: "1px",
              }}
              type="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        select {
          width: 100%;
          padding: 9px;
          margin-top: 10px;
          font-size: 16px;
          border: 1px solid #ccc6c6;
          border-radius: 5px;
        }
        label {
          font-size: 16px;
          margin-top: 11px;
          color: gray;
          display: inline-block;
        }
        label span {
          color: #f27935;
        }
        .file_input_style {
          padding: 6px 11px;
          border: 1px solid #ccc6c6;
          border-radius: 4px;
          margin-top: 8px;
          padding-bottom: 11px;
        }
      `}</style>
    </>
  );
};

export default protectRoute(ClaimformStore);
