
import  { useEffect, useState } from 'react'


// get user data in localStorage 

export const useGetUser = () => {
    const [getUser, setGetUser] = useState(null);
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("user"))) {
            setGetUser(JSON.parse(localStorage.getItem("user")));
        }
    },[])
  return (
    getUser
  )
}
// get user Token in localStorage 

export const useUserToken = () => {
    const [userToken, setUserToken] = useState(null);
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("user"))) {
            setUserToken(JSON.parse(localStorage.getItem("user")).token);
        }
    },[])
  return (
    userToken
  )
}
 