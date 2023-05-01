
import HeadTag from 'components/headTagComponent/HeadTag';
import Header from 'components/headerComponent/Header';
import { useRouter } from 'next/router'


const OpenExpireSectionDialog = () => {
  const router = useRouter()
  const handleClose = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/")
  };
  const loginAgain = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login")
  }

  const headeTitle = "Session Expired"

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div className="model_class">
        <div className="model_class_inner">
          <p style={{ fontSize: "14px" }} >
            Your session has expired. please log in now,
            otherwise use the app as a guest account click the home button
          </p>
          <div className="model_class_btn">
            <button className="contain_button" style={{ color: "#fff" }} onClick={loginAgain} autoFocus>
              Login Again
            </button>
            <button className="contain_button" style={{ color: "#fff" }} onClick={handleClose}>
              Go To Home
            </button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .model_class{
          background-color: #b7b7b787;
          height: 100vh;
          width: 100%;
          max-width: 600px;
          position: fixed;
          top: 0;
          z-index: 10000;
        }
        .model_class_btn {
           padding-top: 25px;
           display: flex;
            align-items: center;
            justify-content: space-evenly;

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
        .contain_button{
          font-size: 11px;
          padding: 6px 10px;
        }
         
      `}
      </style>
    </>

  )
}
export default OpenExpireSectionDialog