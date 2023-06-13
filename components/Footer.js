import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: "facebook",
    src: "https://images.freekaamaal.com/common-images/fb.png",
    link: "https://www.facebook.com/FreeKaaMaalIndia/",
  },
  {
    name: "Twitter",
    src: "https://images.freekaamaal.com/common-images/twitter.png",
    link:
      "https://twitter.com/FreeKaaMaal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    name: "Telegram",
    src: "https://images.freekaamaal.com/common-images/telegram.png",
    link: "https://t.me/freekaamaalindia",
  },
  {
    name: "facebook",
    src: "https://images.freekaamaal.com/common-images/pin.png",
    link: "",
  },
];

const Footer = () => {
  const [emailData, setEmailData] = useState();

  const sendDataFun = () => {
    console.log(emailData);
  };
  const emailHandler = (e) => {
    setEmailData(e.target.value);
  };

  return (
    <>
      <div className="footer_components">
        <div>
          <Image
            width={50}
            height={50}
            alt="Email Image"
            src="https://m.freekaamaal.com/images/footer-emailer.png"
          ></Image>
          <h3>Subscribe to Our Newsletter</h3>
          <p className="p_tag_small">
            Get Best Deals On Internet Deliverd Right In Your Inbox
          </p>
          <div className="Subscribe_box">
            <input
              type="text"
              name="email"
              onChange={emailHandler}
              value={emailData}
              placeholder="Your Email"
            />
            <button onClick={sendDataFun} type="button">
              Subscribe
            </button>
          </div>
          <p className="p_tag_small">
            We value your privacy & assure you that there will be no spams from
            us in your inbox. By Subscribing with us, you will receive only 1
            mail per day. Subscribe now & never miss an offer again.
          </p>
          <div>
            <Image
              width={60}
              height={60}
              alt="Email Image"
              src="https://m.freekaamaal.com/images/mobile-app.png"
            ></Image>
            <h3 style={{ paddingBottom: "10px" }}>
              Download "FreekaaMaal" App
            </h3>
            <a href="">
              {" "}
              <Image
                width={120}
                height={50}
                alt="Email Image"
                src="https://images.freekaamaal.com/common-images/downloadapp.png"
              ></Image>
            </a>
            <p className="p_tag_big">Scan This QR Code to get our App</p>
            <Image
              width={100}
              height={100}
              alt="Email Image"
              src="	https://images.freekaamaal.com/common-images/fkm_qr_codenew.png"
            ></Image>
          </div>
        </div>
        <div className="important_links">
          <Link href="/">About Us</Link>
          <Link href="/">Advertise With Us</Link>
          <Link href="/">News & Articles </Link>
          <Link href="/">Hindi Articles</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_meida">
          {socialIcons.map((item, i) => {
            return (
              <a target="_blank" href={item.link} key={i}>
                <Image
                  width={25}
                  height={25}
                  src={item.src}
                  alt={item.name}
                ></Image>
              </a>
            );
          })}
        </div>
        <p>
          Copyright 2010-2021. <Link href="/">FreeKaaMaal.com</Link>
        </p>
        <p>
          All Rights Reserved. All content, trademarks and logos are copyright
          of their respective owners.
        </p>
      </div>
      <style jsx>{`
        .footer_components {
          background: #686868;
          text-align: center;
          padding: 20px;
          color: #fff;
          font-size: 14px;
        }
        .footer_components h3 {
          letter-spacing: 1px;
          text-align: center;
          color: #fff;
          font-weight: bold;
          margin: 0;
          padding: 0;
          font-size: 20px;
        }
        p.p_tag_small {
          color: #fff;
          word-spacing: 2px;
          margin-bottom: 14px;
        }
        .Subscribe_box {
          position: relative;
          overflow: hidden;
          margin: 10px 0;
          border-radius: 4px;
        }
        .Subscribe_box input {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: none;
          outline: none;
          color: #000;
          font-size: 14px;
        }
        .Subscribe_box button {
          position: absolute;
          right: 0;
          background: #f27935;
          color: #fff;
          padding: 10px 20px;
          font-size: 15px;
          font-weight: 500;
          top: -3px;
        }
        .p_tag_big {
          color: #fff;
          padding: 10px 0;
        }
        .footer_bottom {
          background: #333;
          color: #fff;
          text-align: center;
          padding: 20px;
          line-height: 19px;
          font-size: 13px;
        }
        .important_links {
          font-size: 12px;
          padding: 10px 0;
          line-height: 22px;
        }
      `}</style>
    </>
  );
};

export default Footer;
