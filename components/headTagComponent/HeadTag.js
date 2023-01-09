import Head from "next/head";
const HeadTag = (props) => {
  return (
    <>
      <Head>
        <title>{props.headeTitle}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Onlinee Shopping India, Best Deals, Offers, Coupons & Free Stuff in India | Freekaamaal"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,react.js, next.js"
        />
        <meta name="author" content="Freekaamaal.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/icon"
          href="https://images.freekaamaal.com/common-images/favicon.ico"
        />
      </Head>
    </>
  );
};

export default HeadTag;
