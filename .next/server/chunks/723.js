exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fetchAPI),
/* harmony export */   "p": () => (/* binding */ getStrapiURL)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */ function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://13.126.232.194:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */ async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    };
    // Build request URL
    const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}


/***/ }),

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7851);

function getStrapiMedia(media) {
    const { url  } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .getStrapiURL */ .p)(url) : url;
    return imageUrl;
}


/***/ }),

/***/ 7723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalContext": () => (/* binding */ GlobalContext),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
var app_default = /*#__PURE__*/__webpack_require__.n(app);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(5793);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6331);
// EXTERNAL MODULE: ./assets/scss/style.scss
var scss_style = __webpack_require__(8791);
// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./node_modules/swiper/modules/free-mode/free-mode.min.css
var free_mode_min = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation/navigation.min.css
var navigation_min = __webpack_require__(9176);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination/pagination.min.css
var pagination_min = __webpack_require__(2996);
// EXTERNAL MODULE: ./node_modules/swiper/modules/thumbs/thumbs.min.css
var thumbs_min = __webpack_require__(7383);
// EXTERNAL MODULE: ./node_modules/plyr-react/plyr.css
var plyr = __webpack_require__(2327);
// EXTERNAL MODULE: ./node_modules/glightbox/dist/css/glightbox.css
var glightbox = __webpack_require__(4154);
// EXTERNAL MODULE: ./plugins/scrollcue/scrollCue.css
var scrollCue = __webpack_require__(6008);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./theme/themeOptions.ts
const changeColor = (colorPath, fontPath)=>{
    // remove previous link
    document.getElementById("custom-theme")?.remove();
    document.getElementById("custom-font")?.remove();
    // add new color link
    if (colorPath) {
        const link = document.createElement("link");
        link.setAttribute("href", colorPath);
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("id", "custom-theme");
        document.querySelector("head")?.appendChild(link);
    }
    // add new custom font
    if (fontPath) {
        const link = document.createElement("link");
        link.setAttribute("href", fontPath);
        link.setAttribute("rel", "preload");
        link.setAttribute("as", "style");
        link.setAttribute("onload", "this.rel='stylesheet'");
        link.setAttribute("id", "custom-font");
        document.querySelector("head")?.appendChild(link);
    }
};
const changeTheme = (pathname)=>{
    switch(pathname){
        case "/":
            changeColor(null, null);
            break;
        case "/demo-1":
            changeColor("/css/colors/yellow.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-2":
            changeColor(null, "/css/fonts/dm.css");
            break;
        case "/demo-3":
            changeColor("/css/colors/aqua.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-4":
            changeColor("/css/colors/violet.css", "/css/fonts/dm.css");
            break;
        case "/demo-6":
            changeColor("/css/colors/aqua.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-7":
            changeColor("/css/colors/purple.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-8":
            changeColor("/css/colors/aqua.css", "/css/fonts/dm.css");
            break;
        case "/demo-9":
            changeColor(null, "/css/fonts/dm.css");
            break;
        case "/demo-10":
            changeColor("/css/colors/orange.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-11":
            changeColor("/css/colors/purple.css", null);
            break;
        case "/demo-12":
            changeColor("/css/colors/orange.css", null);
            break;
        case "/demo-13":
            changeColor("/css/colors/purple.css", null);
            break;
        case "/demo-14":
            changeColor("/css/colors/violet.css", "/css/fonts/thicccboi.css");
            break;
        case "/demo-16":
            changeColor("/css/colors/pink.css", null);
            break;
        case "/demo-17":
            changeColor("/css/colors/navy.css", null);
            break;
        case "/demo-18":
            changeColor("/css/colors/grape.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-19":
            changeColor("/css/colors/violet.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-20":
            changeColor("/css/colors/purple.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-21":
            changeColor("/css/colors/sky.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-22":
            changeColor("/css/colors/purple.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-23":
            changeColor("/css/colors/leaf.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-24":
            changeColor("/css/colors/yellow.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-25":
            changeColor("/css/colors/pink.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-26":
            changeColor("/css/colors/grape.css", "/css/fonts/urbanist.css");
            break;
        case "/demo-27":
            changeColor("/css/colors/navy.css", null);
            break;
        default:
            changeColor();
            return;
    }
};
/* harmony default export */ const themeOptions = (changeTheme);

;// CONCATENATED MODULE: ./theme/ThemeProvider.tsx




const ThemeProvider = ({ children  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const removePageLoader = ()=>{
        const pageLoader = document.querySelector(".page-loader");
        if (pageLoader) {
            pageLoader.remove();
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
        // Change the color and font based on route
        themeOptions(pathname);
        // Hide loader
        // If you don't want loader remove <div className="page-loader" /> element form _app.tsx
        let timer;
        timer = setTimeout(()=>removePageLoader(), 1000);
        return ()=>clearTimeout(timer);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const theme_ThemeProvider = (ThemeProvider);

;// CONCATENATED MODULE: ./pages/_app.js








// Bootstrap and custom scss

// animate css

// import swiper css





// video player css

// glightbox css

// custom scrollcue css



// Store Strapi Global object in context
const GlobalContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const MyApp = ({ Component , pageProps  })=>{
    const { global  } = pageProps;
    const { pathname  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    // scroll animation added
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const scrollCue = (await __webpack_require__.e(/* import() */ 550).then(__webpack_require__.bind(__webpack_require__, 7550))).default;
            scrollCue.init({
                interval: -400,
                duration: 700,
                percentage: 0.8
            });
            scrollCue.update();
        })();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalContext.Provider, {
                value: global.attributes,
                children: /*#__PURE__*/ jsx_runtime_.jsx(theme_ThemeProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
};
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx)=>{
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await app_default().getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const globalRes = await (0,api/* fetchAPI */.I)("/global", {
        populate: {
            favicon: "*",
            defaultSeo: {
                populate: "*"
            }
        }
    });
    // Pass the data to our page via props
    return {
        ...appProps,
        pageProps: {
            global: globalRes.data
        }
    };
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5793:
/***/ (() => {



/***/ }),

/***/ 8791:
/***/ (() => {



/***/ }),

/***/ 6008:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;