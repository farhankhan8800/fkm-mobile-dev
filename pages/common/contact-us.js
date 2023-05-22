
import Header from "components/headerComponent/Header";
import Image from "next/image";
import React from "react";
import captcha from "../../public/images/logo_48.png"
import HeadTag from "components/headTagComponent/HeadTag";

const headeTitle = "Contact Us | Freekaamaal";
const contactUs = () => {
  return (
    <>
      <Header />
      <HeadTag headeTitle={headeTitle} />
      <div
        style={{
          backgroundColor: "#fff",
          overflow: "hidden",
          padding: "5px",
          padding: "60px 0px 10px",
          fontWeight: "700",
        }}
      >
        <div style={{ padding: "10px" }}>
          <h1>
            We would love to listen from you !
          </h1>
          <p className="p_tag_big" style={{ lineHeight: "1.45", fontWeight: "100" }}>
            Do you want to promote your offers on FreeKaaMaal.com or would like to
            share any queries, thoughts, ideas, feedback ? We are always there to
            help you. Just fill up the short form below and we will contact you
            soon
          </p>
        </div>
        <div className="contact_form" >

          <input className="input_style" type="text" id="my-input" placeholder="Enter Your Name" name="name" />
          <input className="input_style" type="email" id="my-input" placeholder="Enter Your Email" name="email" />
          <input className="input_style" type="text" id="my-input" placeholder="Subject" name="subject" />
          <select className="input_style">
            <option>Select One</option>
            <option value={10}>Advertising / Partnership Query</option>
            <option value={20}>General</option>
            <option value={30}>Cashback or Reward Related Query</option>
          </select>
          <textarea rows="6" className="input_style" placeholder="Meaasge" name="message"  ></textarea>
          <div
            style={{  backgroundColor: "#eeeeee", padding: "10px", border: "1px solid #999", borderRadius: "5px", width:"300px",minWidth:"200px"  }}
          >
            <div
              className="flex_space_between"
            >
              <input
                type="checkbox"
                style={{ width: "30px", height: "30px" }}
              ></input>
              <h4 >I&#39;m not a robot</h4>
              <Image
                alt=""
                width={50}
                height={50}
                src={captcha}
              />
            </div>
            <div style={{ textAlign: "right" }}>
              <p>reCAPTCHA</p>
              <div >
                <span>Privacy -</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              margin: "20px",
            }}
          >
            <button className="contain_button" style={{ fontWeight: "600" }} >
              Submit
            </button>
          </div>
        </div>

        <div>
          <div className="contact-info">
            <h2>Contact Us</h2>
            <span>Email:</span> <br />
            <span>Support[at]freekaamaal.com</span> <br /> <br />
            <span>Support Timeline:</span> <br />
            <span>Monday To Saturday 9AM-6PM</span>
          </div>
          <div className="flex_center" style={{ padding: "20px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7637.850195870972!2d77.3767628831543!3d28.63066854144106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff0b7507d05%3A0xb7acb98f54d99b41!2sFreeKaaMaal.com!5e0!3m2!1sen!2sin!4v1519626143912"
              frameborder="0"
              width={"80%"}
              height={"200px"}
            ></iframe>
          </div>

        </div>
      </div>
      <style jsx>
        {`
          .contact-info {
            background-image: url(https://m.freekaamaal.com/images/contact-us-bottom.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: right;
            padding: 10px;
          }
          h1{
          font-size: 1.75rem;
          margin: 15px 0;
          font-weight: 400;
          color: #100f0fbf;
        }
        .contact_form{
          padding: 20px;
        }
        .contact_form input{

        }
        .input_style{
          width: 100%;
    margin-bottom: 10px;
    border: 1px solid #bbb9b9;
        }
        span{
          font-size:13px;
        }
        `}
      </style>
    </>
  );
};

export default contactUs;
