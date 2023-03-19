import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import "../styles/globals.css";
import { createContext, useEffect } from "react";
import { fetchAPI } from "../lib/api";
import { Toaster } from "react-hot-toast";
import { getStrapiMedia } from "../lib/media";
// Bootstrap and custom scss
import "../assets/scss/style.scss";
// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// custom scrollcue css
import "plugins/scrollcue/scrollCue.css";
import ThemeProvider from "theme/ThemeProvider";
import { useRouter } from "next/router";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // load bootstrap functionality
      (() => {
        const bootstrap = require("bootstrap");

        // Enables multilevel dropdown
        (function (bs) {
          const CLASS_NAME = "has-child-dropdown-show";

          bs.Dropdown.prototype.toggle = (function (_original) {
            return function () {
              document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
                e.classList.remove(CLASS_NAME);
              });
              // @ts-ignore
              let dd = this._element
                .closest(".dropdown")
                .parentNode.closest(".dropdown");
              for (
                ;
                dd && dd !== document;
                dd = dd.parentNode.closest(".dropdown")
              ) {
                dd.classList.add(CLASS_NAME);
              }
              // @ts-ignore
              return _original.call(this);
            };
          })(bs.Dropdown.prototype.toggle);

          document.querySelectorAll(".dropdown").forEach(function (dd) {
            dd.addEventListener("hide.bs.dropdown", function (e) {
              // @ts-ignore
              if (this.classList.contains(CLASS_NAME)) {
                // @ts-ignore
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
              }
              e.stopPropagation();
            });
          });
        })(bootstrap);
      })();
    }
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import("plugins/scrollcue")).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);
  return (
    <>
      <Head></Head>
      <GlobalContext.Provider value={global.attributes}>
        <ThemeProvider>
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
