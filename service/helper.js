
import jwtDecode from "jwt-decode";

// check jwt tooken funtion
const isTokenExpired = (token) => {
    if(token){
      const decodedToken = jwtDecode(token);
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
           if(exp <= currentTime)  {
            return true
     }
    }
  }


  export  {isTokenExpired}




