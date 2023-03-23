
import jwtDecode from "jwt-decode";


// check jwt tooken funtion
const isTokenExpired = (token) => {
  // const user =  localStorage.getItem("user")
  // console.log(token)
    if(token){
      // let  token = JSON.parse(localStorage.getItem("user")).token
      const decodedToken = jwtDecode(token);
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
           if(exp <= currentTime)  {

              return true
            }
    }
  }

  export  {isTokenExpired}




