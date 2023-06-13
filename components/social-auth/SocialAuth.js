// import { signIn, signOut, useSession } from "next-auth/react";
import googleImage from "public/images/google.png";
import Image from "next/image";
import { googleLoginAPI } from "service/API";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { googleLoginApp } from "pages/firebase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginFun } from "store/slices/UserSlice";

const apiAuth = process.env.API_AUTH;

function GoogleAuth({ Authpage }) {
  const handleLogin = async () => {
    const auth = getAuth(googleLoginApp);
    const provider = new GoogleAuthProvider();
    const userData = await signInWithPopup(auth, provider);
    onSubmitGoogle(userData);
    // console.log(userData);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmitGoogle = async (user) => {
    const details = user._tokenResponse;
    try {
      let { data } = await axios.post(
        googleLoginAPI,
        {
          apiAuth: apiAuth,
          email: details.email,
          device_type: process.env.DEVICE_TYPE,
          app_device_id: "web-social-login",
          guid: user.user.providerData[0].uid,
          accesstoken: details.oauthAccessToken,
          infotoken: details.idToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(data);
      if (data.status == 1) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loginFun(data));
        setTimeout(() => {
          router.push("/");
        }, 300);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div
      className="full_with_button"
      style={{
        padding: "8px 15px",
        width: "100%",
        background: "#f2793552",
        marginBottom: "15px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        height={20}
        width={20}
        style={{ marginRight: "10px" }}
        src={googleImage}
        alt="Google"
      ></Image>{" "}
      <button
        onClick={handleLogin}
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: " #111",
        }}
      >
        {Authpage} With Google
      </button>
    </div>
  );
}

export { GoogleAuth };
