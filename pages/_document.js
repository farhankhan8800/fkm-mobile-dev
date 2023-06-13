import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
          // dangerouslySetInnerHTML={{
          //   __html: `
          //     document.addEventListener('contextmenu', event => event.preventDefault());
          //   `,
          // }}
          />
          {/* <script src="https://wchat.freshchat.com/js/widget.js" async></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
