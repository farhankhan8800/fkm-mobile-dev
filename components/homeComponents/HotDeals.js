import React, { useEffect, useState } from "react";

import hotDealsImage from "../../public/images/fire.png";
import Link from "next/link";
import Image from "next/image";
import HotDealsCards from "../HotDealsCard";

const HotDeals = (props) => {
  const [hotDeals, SethotDeals] = useState();
  useEffect(() => {
    SethotDeals(props.hotdeals);
  }, [props]);


  return (
    <>
      <div
       className="flex_space_between"
        style={{ padding: "13px 3px 3px",alignItems:"center",paddingRight:"10px"}}
      >
        <div >
          <div className="d_flex" style={{alignItems:"center",justifyContent:"center"}}>
         
              <div  style={{ width: "30px", marginRight: "10px" }}>
                <Image
                  src={hotDealsImage}
                  alt="Hot Deal Of the Day"
                  width={29}
                  height={29}
                />
              </div>
            
            <div >
              <h6 className="heading">
                {" "}
                Hot <strong>Deals</strong>
              </h6>
            </div>
          </div>
        </div>
        <div >
            <Link className="text_button" href="/all-hot-deals">
              View All
            </Link>
        </div>
      </div>
      <div
      >
        <HotDealsCards hotdeals={hotDeals} />
      </div>
      <div style={{ padding:"10px", textAlign: "center" }}>
        {props.noData ? (
          `No Data Found`
        ) : (
          <>
            {hotDeals ? (
              <button
               onClick={props.pageFunction}
               className="contain_button" 
              >
                Lode More
              </button>
            ) : (
              "No Data"
            )}
          </>
        )}
      </div>
    </>
  );
};

export default HotDeals;
