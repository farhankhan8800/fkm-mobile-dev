import axios from "axios";
import React, { useEffect, useState } from "react";
import { categoryDetailApi } from "service/API";
import { useUserToken } from "service/customHooks";
import CouponsCade from "../../pages/coupons-card";
import HotDealsCards from "../HotDealsCard";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const DealsAndCouponsCategory = ({ cate_slug }) => {
  const [deals, setDeals] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [cat_slug_url, setCat_slug_url] = useState();
  const [option, setOption] = useState("deals");
  const [clickTab, setClickTab] = useState("deals");
  const [page, setPage] = useState("1");
  const [noData, setNoData] = useState(false);

  const authToken = useUserToken();

  useEffect(() => {
    setCat_slug_url(cate_slug);
  }, [cate_slug]);

  const cateData = async () => {
    try {
      let { data } = await axios.post(
        categoryDetailApi,
        {
          apiAuth: apiAuth,
          page: page,
          cate_slug: cat_slug_url,
          option: option,
          device_type: DEVICE_TYPE,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      if (data.status == 0 && data.error == 0) {
        router.push(`/404`);
      } else {
        if (option == "deals") {
          if (data.response.deals.length == "0") {
            setNoData(true);
          } else {
            setDeals([...deals, ...data.response.deals]);
          }
        } else {
          if(data.response.coupons.length == "0"){
            setNoData(true);
          }else{
            setCoupons([...coupons, ...data.response.coupons]);
          }
        }
      }
    } catch (err) {}
  };

  useEffect(() => {
    cateData();
  }, [cat_slug_url, option, page]);

  function openTab(tab) {
    if (tab == "deals") {
      setClickTab("deals");
      setOption("deals");
      setPage("1");
      setCoupons("")
      setNoData(false);
    } else {
      setDeals("")
      setClickTab("coupons");
      setOption("coupons");
      setPage("1");
      setNoData(false);
    }
  }

  const addDealPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="coupon_deal">
        <div className="tab">
          <button
            className={`${clickTab == "deals" ? "active" : ""}  tablinks`}
            onClick={(e) => openTab("deals")}
          >
            Deals
          </button>
          <button
            className={`${clickTab == "coupons" ? "active" : ""}  tablinks`}
            onClick={(e) => openTab("coupons")}
          >
            Coupons
          </button>
        </div>

        <div className="tabcontent">
          {clickTab == "deals" ? (
            <div>
              {deals.length > 0 ? (
                <div>
                  <HotDealsCards hotdeals={deals} />
                  <div className="flex_center" style={{paddingBottom:"20px"}}>
                    {noData ? (
                      "No More Data"
                    ) : (
                      <button
                      className="contain_button"
                        onClick={addDealPage}
                        style={{ color: "#fff", fontWeight: "600" }}
                      >
                        Lode More
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                "No Data Found"
              )}
            </div>
          ) : (
            <div>
             
              {coupons.length > 0 ? (
                <div>
                   <CouponsCade couponCard={coupons} />
                  <div className="flex_center" style={{paddingBottom:"20px"}}>
                    {noData ? (
                      "No More Data"
                    ) : (
                      <button
                      className="contain_button"
                        onClick={addDealPage}
                        style={{ color: "#fff", fontWeight: "600" }}
                      >
                        Lode More
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                "No Data Found"
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .tabsList::-webkit-scrollbar {
            display: none;
          }
          .cash_back_store_offer {
            text-align: center;
            color: var(--dark-color);
            padding: 1px 2px;
            font-size: 15px;
          }
          .cash_back_store_link {
            text-decoration: none;
          }
          .tab {
            overflow: hidden;
            border: 1px solid var(--main-color);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }

          .tab button {
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            -webkit-transition: 0.3s;
            -moz-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;
            font-size: 17px;
            font-weight: 700;
            width: 100%;
          }

          .tablinks.active {
            background: var(--main-color);
            color: var(--second-color);
          }
          .tabcontent {
            padding: 6px 3px;
          }
          .coupon_deal {
            padding: 0px 5px;
          }
        `}
      </style>
    </>
  );
};

export default DealsAndCouponsCategory;
