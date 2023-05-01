import { signIn, signOut, useSession } from 'next-auth/react'
import googleImage from "public/images/google.png";
import Image from "next/image";


function GoogleAuth( {Authpage}) {
  const { data } = useSession()
  console.log(data)

  return (
    <div className="full_with_button"
      style={{ padding: "8px 15px", width: "100%", background: "#f2793552", marginBottom: "15px", alignItems: "center", display: "flex", justifyContent: "center" }}>
      <Image
        height={20}
        width={20}
        style={{ marginRight: "10px" }}
        src={googleImage}
        alt="Google"
      ></Image>{" "}
      <button onClick={() => signIn("google")}
        style={
          {
            fontSize: "16px",
            fontWeight: "500",
            color: " #111"
          }}>{Authpage} With Google</button>
    </div>
  );
}
function FacebookAuth( {Authpage}) {
  const { data } = useSession()
  console.log(data)

  return (
    <div >
      <button onClick={() => signIn("facebook")}
        style={
          {
            fontSize: "16px",
            fontWeight: "500",
            color: " #111"
          }}>Login With Facebook</button>
    </div>
  );
}

export  {GoogleAuth,FacebookAuth} ;