import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Vanguard Investment Management is a leading firm committed to empowering investors with comprehensive financial solutions. With our expertise in investment management, we strive to optimize your financial future through strategic planning, personalized guidance, and a wide range of investment options."
        />
        <meta
          name="keywords"
          content="investment management, financial solutions, investment planning, portfolio management, wealth management, financial advisory, investment options, Vanguard Investment Management, startup"
        />
        <meta name="author" content="Vanguardnepal" />
        <link
          rel="shortcut icon"
          href="/Assets/fatan.png"
          type="image/x-icon"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NYCB8ZFQ03"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NYCB8ZFQ03');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
