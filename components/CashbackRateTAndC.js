import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CashbackRateAndTC = ({ toc, store_rates }) => {
  const [cbRate, setCbRate] = useState(false);
  const [tandC, setTandC] = useState(false);
  const [tocdata, setTocdata] = useState(toc);
  const [storeRates, setStoreRates] = useState(store_rates);

  const cbRateClick = () => {
    setTandC(false);
    setCbRate(!cbRate);
  };
  const tandCClick = () => {
    setCbRate(false);
    setTandC(!tandC);
  };
  return (
    <>
      <div className="CashbackRateAndTC">
        <div className="CashbackRateAndTC_button">
          <button onClick={cbRateClick}>
            Cashback Rate
            <span>
              {" "}
              <IoMdArrowDropdown />
            </span>
          </button>
          <button onClick={tandCClick}>
            T&C
            <span>
              {" "}
              <IoMdArrowDropdown />
            </span>
          </button>
        </div>
        {cbRate ? (
          <div className="CashbackRate_content style_dropdown_content">
            {storeRates &&
              storeRates.map((item, i) => {
                return (
                  <div className="CashbackRate_card">
                    <div className="CashbackRate_card_left">
                      <h4>{item.rate}</h4>
                      <span></span>
                    </div>
                    <div className="CashbackRate_card_right">
                      <h3>{item.cashback_tag}</h3>
                      <p>{item.tag_desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}

        {tandC ? (
          <div
            className="TandC_content style_dropdown_content"
            dangerouslySetInnerHTML={{ __html: tocdata }}
          ></div>
        ) : (
          ""
        )}
      </div>

      <style jsx>
        {`
          .CashbackRateAndTC {
            position: relative;
            margin-top: 20px;
            padding: 0 13px;
          }
          .CashbackRateAndTC_button {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .CashbackRateAndTC_button button {
            background: #dfdfdf;
            padding: 10px;
            color: #201f1f;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            letter-spacing: 1px;
            font-weight: 700;
            font-size: 14px;
            text-align: left;
            display: flex;
            padding-left: 20px;
            align-items: center;
            justify-content: space-between;
          }
          .CashbackRateAndTC_button button:first-child {
            flex-basis: 55%;
          }
          .CashbackRateAndTC_button button:nth-child(2) {
            flex-basis: 40%;
          }
          .CashbackRateAndTC_button button span {
            font-size: 20px;
            display: flex;
            align-items: center;
          }

          .CashbackRateAndTC .style_dropdown_content {
            position: absolute;
            background: #fff;
            top: 54px;
            line-height: 23px;
            width: 100%;
            padding: 16px;
            left: 0;
            font-size: 13px;
            box-shadow: 1px 1px 6px 5px #ebe6e6;
            border-radius: 10px;
            max-height: 400px;
            z-index: 2;
            overflow: auto;
          }
          .CashbackRateAndTC .CashbackRate_content {
          }
          .CashbackRateAndTC .CashbackRate_content:after {
            content: "";
            background: #f27935;
            width: 30px;
            height: 30px;
            top: -21px;
            position: absolute;
            left: 29px;
            transform: rotate(45deg);
          }
          .CashbackRateAndTC .TandC_content {
          }

          .CashbackRateAndTC .TandC_content:after {
            content: "";
            background: #f27935;
            width: 30px;
            height: 30px;
            top: -21px;
            position: absolute;
            right: 29px;
            transform: rotate(45deg);
          }
          .CashbackRate_card {
            background: #fff;
            border: 1px dashed #dfdede;
            box-shadow: 0px 1px 14px 0px #999999;
            border-radius: 4px;
            margin-top: 10px;
            display: flex;
            overflow: hidden;
            justify-content: space-between;
          }
          .CashbackRate_card .CashbackRate_card_left {
            padding: 10px;
            align-items: center;
            display: flex;
            justify-content: center;
            background: #f27935;
            color: #fff;
            flex-basis: 30%;
          }
          .CashbackRate_card .CashbackRate_card_left h4 {
            font-size: 16px;
            font-weight: 500;
          }
          .CashbackRate_card .CashbackRate_card_right {
            padding: 10px;
            text-align: center;
            flex-basis: 70%;
          }
        `}
      </style>
    </>
  );
};

export default CashbackRateAndTC;
