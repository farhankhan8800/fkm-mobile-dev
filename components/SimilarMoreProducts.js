import React, { useState,useEffect } from "react";
import hotDealsImage from "public/images/fire.png";
import Image from "next/image";
import Link from "next/link";
import HotDealsCards from "./HotDealsCard";



const SimilarMoreProducts = (props) => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    setStore(props.similarDeal)
  }, [props]);

  return (
    <>
     <div
       className="flex_space_between"
        style={{ padding: "13px 3px 3px" , alignItems:"center"}}
      >
        <div >
          <div className="d_flex" style={{alignItems:"center"}}>
            
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
                 Similar <strong>Product</strong>
              </h6>
            </div>
          </div>
        </div>
        <div >
          <button className="text_button">
            <Link style={{ color: "#f27935" }} href="/all-hot-deals">
              View All
            </Link>
          </button>
        </div>
      </div>
      <div style={{paddingBottom:"20px"}}>
      <HotDealsCards hotdeals={store} />
      </div>
        
    </>
  );
};

export default SimilarMoreProducts;
