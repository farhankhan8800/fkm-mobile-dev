import Image from "next/image";
import React from "react";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";

import { useRouter } from "next/router";

const headeTitle = " Error 404 | Freekaamaal";

const Error404 = () => {
  const router = useRouter();

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      <div className="error_page">
        <div>
          <Image
            src="https://images.freekaamaal.com/common-images/page-error-info.png"
            width={300}
            height={300}
            alt="Error"
          ></Image>
        </div>
        <h1>404</h1>
        <h3> Page Not Found...</h3>
        <div className="button_error_page">
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            style={{ color: "#fff", fontWeight: 500 }}
            className="contain_button"
          >
            Go To Home Page
          </button>
        </div>
      </div>

      <style jsx>
        {`
          .error_page {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .error_page h1 {
            color: gray;
          }
          .error_page h3 {
            padding: 6px 0;
          }
          .button_error_page {
            padding-top: 15px;
          }
        `}
      </style>
    </>
  );
};

export default Error404;
