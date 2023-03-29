import { Box, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/router'

const CashBackClaimCard = (props) => {
  const router = useRouter()
  return (
    <>
    
      <div
        style={{
          color:"#000",
          margin: "20px 7px",
          padding: "10px 15px",
          borderRadius: "10px",
          background: "#dddddd",
        }}
      >
        <div className="d_flex" style={{justifyContent:"space-around",alignItems:"center"}}>
          <div  style={{flexBasis:"70%"}}>
            <div >
              <h3 >
                Cashback claim form
              </h3>
              <p className="p_tag_small">
                fill up this form within 24 hrs
              </p>
            </div>
          </div>
          <div  style={{flexBasis:"30%"}}>
            <div component="div">
              <Link href="/cashback/missing-claimform">
              <button
                 className="contain_button"
                style={{ color: "var(--second-color)", background: "gray" }}
              >
                submit
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default CashBackClaimCard;
