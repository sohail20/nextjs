import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css" />
          <Script
            src="algoliaScript.js"
            strategy="lazyOnload"
            onLoad={() => {
              console.log(`script loaded correctly, window.FB has been populated`)
            }
            }
          />

          <style src="main.css" />
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
