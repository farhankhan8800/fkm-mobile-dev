
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";


const headeTitle = "About Us | Freekaamaal";
const AboutUs = () => {
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div
        style={{
          backgroundColor: "#fff",
          overflow: "hidden",
          padding: "5px",
          paddingTop: "56px",
          fontWeight: "500",
          fontSize: "small",
          lineHeight: " 19px",
        }}
      >
        <h1
          style={{ fontSize: "1.75rem" }}
        >
          FreeKaaMaal.com - Your Saving Partner!!
        </h1>
        <p style={{ marginBottom: "8px" }}>
          FreeKaaMaaI.com is India &#39;s leading cashback website, where you can
          earn up to 100% cashback on your online shopping. With 10 L+
          registered users & 7.5 miIIion+ pageviews/month, we rank as one of
          India s top 250 internet properties (Source Alexa.com).
        </p>
        <p style={{ marginBottom: "8px" }}>
          We work closely with hundreds of retailers across India to publish
          exclusive offers and cashback deals on our site.
        </p>
        <p style={{ marginBottom: "8px" }}>
          Whether you&#39;re looking for clothes, toys, makeup or anything else,
          FreeKaaMaal has it all.
        </p>
        <p style={{ marginBottom: "8px" }}>
          Sign up at FreeKaaMaal and start earning cash back every time you
          shop!
        </p>
        <Image
          alt=""
          height={170}
          src="https://images.freekaamaal.com/common-images/ceofkm.jpg"
          width={330}
        />
        <p style={{ marginBottom: "8px" }}>
          In 2010, Mr. Ravi Kumar started FreeKaaMaal.com in a college dorm room
          which has now grown into one of India&#39;s leading bargain-hunting
          websites, benefitting millions of customers every month. His mission
          was to help people avail the best deals and offers in online shopping
          to deal with unprecedented inflation.
        </p>
        <p style={{ marginBottom: "8px" }}>
          FreeKaaMaal.com helps its e-commerce partners acquire new shoppers for
          a reasonable cost.
        </p>
        <p style={{ marginBottom: "8px" }}>
          Whether you&#39;re looking for the lowest prices, discount coupons,
          freebies, or contest giveaways - everything s on FreeKaaMaal!
        </p>
        <h1
          style={{ fontSize: "1.75rem", textAlign: "center" }}
        >
          Our Community
        </h1>

        <p style={{ marginBottom: "8px" }}>
          We&#39;re more than a deals and coupons website - FreeKaaMaal.com is a
          community of more than 2,50,000 members who share and discuss loot
          deals and freebies present online. Our community is home to a
          constellation of deal hunters who are always up for the hunt.
        </p>
        <p style={{ marginBottom: "8px" }}>
          Become a member of our network by following us on Facebook, Twitter,
          Instagram, Telegram, and Youtube.
        </p>
        <p

          style={{ fontSize: "1.75rem", textAlign: "center" }}
        >
          Our Partners
        </p>
        <div style={{ textAlign: "center" }}>
          <Image
            src="https://m.freekaamaal.com/images/partners.png"
            width={350}
            height={200}
            alt=""
          />
        </div>

        <p
          style={{ marginBottom: "8px", paddingBottom: "8px", borderBottom: "1px solid gray", textAlign: "center", borderBottom: "1px solid gray" }}
        >
          We work with the top-notch ecommerce sites in India. Some of our
          esteemed clients are -
        </p>
        <div className="d_flex flex_wrap flex_space_between" style={{}}>
          <div
            style={{ textAlign: "center", width: "155px", height: "80px", marginBottom: "10px", border: "1px solid #999" }}
            className="flex_center"
          >
            <Image
              alt=""
              height={40}
              src="https://images.freekaamaal.com/store-images/1.jpg"
              width={90}

            />
          </div>
          <div
            style={{ textAlign: "center", width: "155px", height: "80px", marginBottom: "10px", border: "1px solid #999" }}
            className="flex_center"
          >
            <Image
              alt=""
              height={40}
              src="https://images.freekaamaal.com/store-images/2.jpg"
              width={90}
            />
          </div>
          <div
            style={{ textAlign: "center", width: "155px", height: "80px", marginBottom: "10px", border: "1px solid #999" }}
            className="flex_center"
          >
            <Image
              alt=""
              height={40}
              src="https://images.freekaamaal.com/store-images/3.jpg"
              width={90}
            />
          </div>
        </div>
        <p style={{ marginBottom: "8px" }}>
          FreeKaaMaal has been in the market for over 10 years with a reputation
          for selling authentic branded products. We work with 550+ different
          brands across dimensions and niches in e-commerce. Through
          collaborations with a plethora of major brands, we&#39;ve been able to
          build our name as a premier destination for deal hunting.
        </p>
        <p style={{ marginBottom: "8px" }}>
          We work with top-notch e-commerce sites in India. Some of our esteemed
          clients are -
        </p>

        <p
          style={{ fontSize: "1.75rem", textAlign: "center" }}
        >
          Become Our Partner
        </p>
        <div className="flex_center">
          <Image
            src="https://m.freekaamaal.com/images/who-we-are.png"
            width={300}
            height={200}
            alt=""
          />
        </div>


        <p style={{ marginBottom: "8px" }}>
          By advertising with us, you&#39;re guaranteed to get highly relevant
          traffic. No matter your target market, we know how to get you the
          great results that you need and deserve. We&#39;ll help you reach
          consumers who are more likely to buy from you and help make your sales
          goals easier to achieve.
        </p>
        <h1
          style={{ fontSize: "1.75rem", textAlign: "center" }}
        >
          What Our Customers Say About Us
        </h1>
        <p style={{ marginBottom: "8px" }}>
          Our customers love us because we help them save money on their online
          shopping. They appreciate our commitment to providing them with the
          best possible deals on their favorite products and brands. With our
          exclusive offers and cashback deals, they can earn up to 100% cashback
          on their purchases
        </p>
        <div className="flex_center">
          <Image
            height={200}
            src="https://images.freekaamaal.com/common-images/Testimonial-Page.jpg"
            width={350}
            alt=""
          />
        </div>

        <p style={{ marginBottom: "8px" }}>
          Here are some testimonials from our happy customers!
        </p>
        <h1
          style={{ fontSize: "1.75rem", textAlign: "center" }}
        >
          Download our app
        </h1>
        <p style={{ marginBottom: "8px" }}>
          Download our freekaamaal.com app and take advantage of the exclusive
          offers and cashback deals available!
        </p>
      </div>
      <style jsx>
        {`
        h1{
          font-size: 1.75rem;
          margin: 15px 0;
          font-weight: 400;
          color: #100f0fbf;
          line-height: 34px;
        }
        
        `}
      </style>
    </>
  );
};

export default AboutUs;
