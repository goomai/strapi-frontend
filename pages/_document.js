import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M7XKGHX');
`}
        </Script>
        {/* eslint-disable-next-line */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"
        />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
        />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"
        />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
        />
        <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"
          type="text/javascript"
        ></script>
        <script
          src="http://www.skulpt.org/js/skulpt.min.js"
          type="text/javascript"
        ></script>
        <script
          src="http://www.skulpt.org/js/skulpt-stdlib.js"
          type="text/javascript"
        ></script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="[https://www.googletagmanager.com/ns.html?id=GTM-PN3VMLP](https://www.googletagmanager.com/ns.html?id=GTM-PN3VMLP)"
height="0" width="0" style="display:none;visibility:hidden"</iframe>
`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
