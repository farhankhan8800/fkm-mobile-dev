import { Box, styled, Typography } from "@mui/material";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

const CardWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "1em",
}));

const AboutUs = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#fff",
          overflow: "hidden",
          padding: "5px",
          margin: "70px 0px 10px",
          fontWeight: "500",
          fontSize: "small",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px" }}
        >
          FreeKaaMaal.com - Your Saving Partner!!
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          FreeKaaMaaI.com is India's leading cashback website, where you can
          earn up to 100% cashback on your online shopping. With 10 L+
          registered users & 7.5 miIIion+ pageviews/month, we rank as one of
          India's top 250 internet properties (Source Alexa.com).
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          We work closely with hundreds of retailers across India to publish
          exclusive offers and cashback deals on our site.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Whether you're looking for clothes, toys, makeup or anything else,
          FreeKaaMaal has it all.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Sign up at FreeKaaMaal and start earning cash back every time you
          shop!
        </Typography>
        <Box
          component="img"
          src="https://images.freekaamaal.com/common-images/ceofkm.jpg"
          width={330}
        />
        <Typography variant="p" component="p" marginBottom={1}>
          In 2010, Mr. Ravi Kumar started FreeKaaMaal.com in a college dorm room
          which has now grown into one of India's leading bargain-hunting
          websites, benefitting millions of customers every month. His mission
          was to help people avail the best deals and offers in online shopping
          to deal with unprecedented inflation.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          FreeKaaMaal.com helps its e-commerce partners acquire new shoppers for
          a reasonable cost.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Whether you're looking for the lowest prices, discount coupons,
          freebies, or contest giveaways - everything's on FreeKaaMaal!
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px", textAlign: "center" }}
        >
          Our Community
        </Typography>

        <Typography variant="p" component="p" marginBottom={1}>
          We're more than a deals and coupons website - FreeKaaMaal.com is a
          community of more than 2,50,000 members who share and discuss loot
          deals and freebies present online. Our community is home to a
          constellation of deal hunters who are always up for the hunt.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Become a member of our network by following us on Facebook, Twitter,
          Instagram, Telegram, and Youtube.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px", textAlign: "center" }}
        >
          Our Partners
        </Typography>
        <Box
          component="img"
          src="https://m.freekaamaal.com/images/partners.png"
          width={"100%"}
        />
        <Typography
          variant="p"
          component="p"
          marginBottom={1}
          paddingBottom={1}
          textAlign={"center"}
          borderBottom={"1px solid gray"}
        >
          We work with the top-notch ecommerce sites in India. Some of our
          esteemed clients are -
        </Typography>
        <CardWrap>
          <Box
            border={"1px solid #999"}
            width={"155px"}
            height={"90px"}
            textAlign={"center"}
            sx={{ marginInline: "0.25em", paddingInline: "0.5em" }}
          >
            <Box
              component="img"
              src="https://images.freekaamaal.com/store-images/1.jpg"
              width={"90px"}
              paddingTop={"2.5em"}
            />
          </Box>
          <Box
            border={"1px solid #999"}
            width={"155px"}
            height={"90px"}
            textAlign={"center"}
            sx={{ marginInline: "0.25em", paddingInline: "0.5em" }}
          >
            <Box
              component="img"
              src="https://images.freekaamaal.com/store-images/2.jpg"
              width={"90px"}
              paddingTop={"2.25em"}
            />
          </Box>
          <Box
            border={"1px solid #999"}
            width={"155px"}
            height={"90px"}
            textAlign={"center"}
            sx={{ marginInline: "0.25em", paddingInline: "0.5em" }}
          >
            <Box
              component="img"
              src="https://images.freekaamaal.com/store-images/3.jpg"
              width={"90px"}
              paddingTop={"1em"}
            />
          </Box>
        </CardWrap>
        <Typography variant="p" component="p" marginBottom={1}>
          FreeKaaMaal has been in the market for over 10 years with a reputation
          for selling authentic branded products. We work with 550+ different
          brands across dimensions and niches in e-commerce. Through
          collaborations with a plethora of major brands, we've been able to
          build our name as a premier destination for deal hunting.
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          We work with top-notch e-commerce sites in India. Some of our esteemed
          clients are -
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px", textAlign: "center" }}
        >
          Become Our Partner
        </Typography>

        <Box
          component="img"
          src="https://m.freekaamaal.com/images/who-we-are.png"
          width={"100%"}
        />

        <Typography variant="p" component="p" marginBottom={1}>
          By advertising with us, you're guaranteed to get highly relevant
          traffic. No matter your target market, we know how to get you the
          great results that you need and deserve. We'll help you reach
          consumers who are more likely to buy from you and help make your sales
          goals easier to achieve.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px", textAlign: "center" }}
        >
          What Our Customers Say About Us
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Our customers love us because we help them save money on their online
          shopping. They appreciate our commitment to providing them with the
          best possible deals on their favorite products and brands. With our
          exclusive offers and cashback deals, they can earn up to 100% cashback
          on their purchases
        </Typography>

        <Box
          component="img"
          src="https://images.freekaamaal.com/common-images/Testimonial-Page.jpg"
          width={"100%"}
        />
        <Typography variant="p" component="p" marginBottom={1}>
          Here are some testimonials from our happy customers!
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: "1.75rem", marginBlock: "10px", textAlign: "center" }}
        >
          Download our app
        </Typography>
        <Typography variant="p" component="p" marginBottom={1}>
          Download our freekaamaal.com app and take advantage of the exclusive
          offers and cashback deals available!
        </Typography>
      </Box>
    </>
  );
};

export default AboutUs;
