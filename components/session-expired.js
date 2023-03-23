import { Button,  } from "@mui/material";
import { useRouter } from 'next/router'

const OpenExpireSectionDialog = ({setSessionExpired})=>{
    const router = useRouter()
    const handleClose = () => {
      setSessionExpired(false)
      localStorage.clear();
      sessionStorage.clear();
    };
    const loginAgain = ()=>{
      setSessionExpired(false)
      router.push("/login")
      localStorage.clear();
      sessionStorage.clear();
    }
   
    return(
      <>
      <div className="model_class">
        <div  className="model_class_inner">
            <div >
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </div>
            <div className="model_class_btn"> 
            <Button sx={{marginRight:"10px", color:"#fff"}} variant="contained" size="small" onClick={loginAgain} autoFocus>
            Login Again
            </Button>
            <Button size="small" variant="outlined" onClick={handleClose}>
              Ok
            </Button>
          </div>
      </div>
      </div>
      
     <style>
      {`
        .model_class{
          position: fixed;
          top: 0;
          background-color: #6965658c;
          height: 100vh;
          width: 100%;
          z-index: 99;  
        }
        .model_class_btn {
           padding-top: 25px;
       }
        .model_class_inner{
          top: 50%;
          position: fixed;
          transform: translate(-50%, -50%);
          min-width: 300px;
          max-width: 400px;
          left: 50%;
          border-radius: 7px;
          box-shadow: 0px 3px 14px 0px gray;
          padding: 15px 20px;
          background: #fff;
        }
         
      `}
     </style>
      </>
     
    )
  }
  export default OpenExpireSectionDialog