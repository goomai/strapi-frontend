exports.id = 484;
exports.ids = [484];
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

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": () => (/* binding */ GlobalContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7544);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5793);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7851);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6331);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8791);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5544);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9241);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7383);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var plyr_react_plyr_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2327);
/* harmony import */ var plyr_react_plyr_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(plyr_react_plyr_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var glightbox_dist_css_glightbox_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4154);
/* harmony import */ var glightbox_dist_css_glightbox_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(glightbox_dist_css_glightbox_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var plugins_scrollcue_scrollCue_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6008);
/* harmony import */ var plugins_scrollcue_scrollCue_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(plugins_scrollcue_scrollCue_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3142);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// Bootstrap and custom scss

// animate css

// import swiper css





// video player css

// glightbox css

// custom scrollcue css



// Store Strapi Global object in context
const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.createContext)({});
const MyApp = ({ Component , pageProps  })=>{
    const { global  } = pageProps;
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (false) {}
    }, []);
    // scroll animation added
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
                value: global.attributes,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {})
                    ]
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
    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .I)("/global", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_ThemeProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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