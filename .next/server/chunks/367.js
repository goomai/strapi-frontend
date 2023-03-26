"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 7503:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9066);




const GoogleAppBtn = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "d-flex justify-content-center justify-content-lg-start",
        style: slideInDownAnimate("900ms"),
        children: [
            /*#__PURE__*/ _jsx("span", {
                style: slideInDownAnimate("1200ms"),
                children: /*#__PURE__*/ _jsx(NextLink, {
                    href: "#",
                    className: "btn btn-primary btn-icon btn-icon-start rounded me-2",
                    title: /*#__PURE__*/ _jsxs(Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx("i", {
                                className: "uil uil-apple"
                            }),
                            " App Store"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("span", {
                style: slideInDownAnimate("1500ms"),
                children: /*#__PURE__*/ _jsx(NextLink, {
                    href: "#",
                    className: "btn btn-green btn-icon btn-icon-start rounded",
                    title: /*#__PURE__*/ _jsxs(Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx("i", {
                                className: "uil uil-google-play"
                            }),
                            " Google Play"
                        ]
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GoogleAppBtn)));


/***/ }),

/***/ 2679:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// ==================================================
const Accordion = (props)=>{
    const { no , body , heading , expand , type =""  } = props;
    return /*#__PURE__*/ _jsxs("div", {
        className: `card ${type} accordion-item`,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "card-header",
                id: `heading${no}`,
                children: /*#__PURE__*/ _jsx("button", {
                    "data-bs-toggle": "collapse",
                    "aria-controls": `collapse${no}`,
                    "data-bs-target": `#collapse${no}`,
                    "aria-expanded": expand ? "true" : "false",
                    className: expand ? "accordion-button fs-16 fs-md-16" : "collapsed fs-16 fs-md-16",
                    children: heading
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                id: `collapse${no}`,
                "aria-labelledby": `heading${no}`,
                "data-bs-parent": "#accordionExample",
                className: `accordion-collapse collapse ${expand && "show"}`,
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ _jsx("p", {
                        children: body
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Accordion)));


/***/ }),

/***/ 1195:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ServiceCard1, ServiceCard2, ServiceCard3, ServiceCard4, ServiceCard5, ServiceCard6

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(9066);
;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard1.tsx


// ===============================================================
const ServiceCard1 = (props)=>{
    const { title , description , Icon , linkUrl , linkType , cardClassName ="" , iconClassName  } = props;
    return /*#__PURE__*/ _jsx("div", {
        className: "col-md-6 col-xl-3",
        children: /*#__PURE__*/ _jsx("div", {
            className: `card shadow-lg ${cardClassName}`,
            children: /*#__PURE__*/ _jsxs("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ _jsx(Icon, {
                        className: iconClassName
                    }),
                    /*#__PURE__*/ _jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "mb-2",
                        children: description
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Learn More",
                        href: linkUrl,
                        className: `more hover link-${linkType}`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard1 = ((/* unused pure expression or super */ null && (ServiceCard1)));

// EXTERNAL MODULE: ./components/reuseable/IconBox.tsx
var IconBox = __webpack_require__(8369);
;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard2.tsx



// ================================================
const ServiceCard2 = (props)=>{
    const { title , linkUrl , description , icon , iconBoxClassNames , titleColor , hiddenBtn  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-md-6 col-lg-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                icon: icon,
                className: iconBoxClassNames
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: titleColor,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-3",
                children: description
            }),
            !hiddenBtn && /*#__PURE__*/ jsx_runtime_.jsx(links_NextLink/* default */.Z, {
                title: "Learn More",
                href: linkUrl,
                className: "more hover"
            })
        ]
    });
};
// set deafult Props
ServiceCard2.defaultProps = {
    iconBoxClassNames: "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
};
/* harmony default export */ const service_cards_ServiceCard2 = ((/* unused pure expression or super */ null && (ServiceCard2)));

;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard3.tsx

// ================================================
const ServiceCard3 = (props)=>{
    const { title , description , Icon , className ="d-flex flex-row"  } = props;
    return /*#__PURE__*/ _jsxs("div", {
        className: className,
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: Icon
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("h4", {
                        className: "mb-1",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "mb-0",
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const service_cards_ServiceCard3 = ((/* unused pure expression or super */ null && (ServiceCard3)));

;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard4.tsx

// ==================================================================================
const ServiceCard4 = (props)=>{
    const { title , Icon , cardColor , columnClass , description  } = props;
    return /*#__PURE__*/ _jsx("div", {
        className: columnClass,
        children: /*#__PURE__*/ _jsx("div", {
            className: `card ${cardColor}`,
            children: /*#__PURE__*/ _jsxs("div", {
                className: "card-body",
                children: [
                    Icon,
                    /*#__PURE__*/ _jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "mb-0",
                        children: description
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard4 = ((/* unused pure expression or super */ null && (ServiceCard4)));

;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard5.tsx


// ==================================================================================
const ServiceCard5 = (props)=>{
    const { icon , title , description , url , className ="card shadow-lg mb-md-6 mt-lg-6"  } = props;
    return /*#__PURE__*/ _jsx("div", {
        className: className,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "icon btn btn-circle btn-lg btn-soft-purple pe-none mb-3",
                    children: /*#__PURE__*/ _jsx("i", {
                        className: `uil ${icon}`
                    })
                }),
                /*#__PURE__*/ _jsx("h4", {
                    children: title
                }),
                /*#__PURE__*/ _jsx("p", {
                    className: "mb-2",
                    children: description
                }),
                /*#__PURE__*/ _jsx(NextLink, {
                    title: "Learn More",
                    href: url,
                    className: "more hover link-purple"
                })
            ]
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard5 = ((/* unused pure expression or super */ null && (ServiceCard5)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/reuseable/service-cards/ServiceCard6.tsx


// ================================================
const ServiceCard6 = (props)=>{
    const { title , linkUrl , description , icon , iconBoxClassNames  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-6 col-lg-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: icon,
                        alt: "cd icon",
                        className: "mb-5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-3",
                        children: description
                    })
                ]
            })
        })
    });
};
// set deafult Props
ServiceCard6.defaultProps = {
    iconBoxClassNames: "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
};
/* harmony default export */ const service_cards_ServiceCard6 = ((/* unused pure expression or super */ null && (ServiceCard6)));

;// CONCATENATED MODULE: ./components/reuseable/service-cards/index.ts









/***/ }),

/***/ 3591:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: factList, processList, reviews, services

// EXTERNAL MODULE: ./icons/lineal/User.tsx
var User = __webpack_require__(7355);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./icons/lineal/Gift.tsx

const Gift = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 388.9",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-blue mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M251.1 258.8l-44.3-22.9c-1.3-.6-2.7-.6-4 0l-44.4 22.9c-2.1 1.1-4.7.3-5.8-1.9-.3-.6-.5-1.3-.5-2v-113l105.4.2v112.8c0 2.4-1.9 4.3-4.3 4.3-.8 0-1.5-.1-2.1-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M253.1 270.7c-2.5 0-5-.6-7.2-1.8l-41.1-21.2-41.1 21.2c-2.2 1.2-4.7 1.8-7.2 1.8-8.7 0-15.8-7.1-15.8-15.8v-113c0-6.3 5.1-11.5 11.5-11.5l105.3.2c6.3 0 11.4 5.1 11.4 11.5v112.8c0 8.7-7.1 15.8-15.8 15.8zm-48.3-46.8c2.5 0 5 .6 7.2 1.8l34 17.6v-89.6l-82.4-.2v89.8l34-17.6c2.3-1.2 4.7-1.8 7.2-1.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M319.5 388.9H90.1c-29.6 0-53.6-24-53.6-53.6V142.1c0-6.3 5.1-11.5 11.5-11.5h313.8c6.3 0 11.5 5.1 11.5 11.5v25.5c.2 6.3-4.8 11.6-11.1 11.8-6.3.2-11.6-4.8-11.8-11.1v-14.7H59.3v181.7c0 17 13.8 30.7 30.7 30.7h229.5c17 0 30.7-13.8 30.7-30.7V228.8c0-6.3 5.1-11.5 11.5-11.5 6.3 0 11.5 5.1 11.5 11.5v106.4c-.1 29.7-24.1 53.6-53.7 53.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M356.5 142.1H53.2c-23 0-41.7-18.7-41.7-41.7 0-23 18.7-41.7 41.7-41.7h303.3c23 0 41.7 18.7 41.7 41.7-.1 23-18.7 41.7-41.7 41.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M356.5 153.5H53.2C23.8 153.5 0 129.7 0 100.4s23.8-53.2 53.2-53.2h303.3c29.4 0 53.1 23.8 53.1 53.2s-23.8 53.1-53.1 53.1zM53.2 70.1c-16.7-.3-30.5 13-30.8 29.7s13 30.5 29.7 30.8h304.4c16.7.3 30.5-13 30.8-29.7.3-16.7-13-30.5-29.7-30.8H53.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M203.2 58.7c-5.8-31.3-35.8-52-67.1-46.3-23.5 4.3-42 22.7-46.3 46.3h113.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M203.2 70.1H89.8c-6.3 0-11.5-5.1-11.4-11.5 0-.7.1-1.3.2-2C85.4 19 121.4-5.9 158.9 1c28.3 5.2 50.4 27.3 55.6 55.6 1.1 6.2-3 12.2-9.2 13.3-.7.1-1.4.2-2.1.2zm-97.4-22.9h81.4c-12.1-22.5-40.2-30.9-62.6-18.8-8 4.3-14.5 10.9-18.8 18.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M319.8 58.7c-5.8-31.3-35.8-52-67.1-46.3-23.5 4.3-42 22.7-46.3 46.3h113.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M319.8 70.1H206.4c-6.3 0-11.4-5.1-11.4-11.4 0-.7.1-1.4.2-2C201.9 19 237.9-5.9 275.5 1c28.3 5.2 50.4 27.3 55.6 55.6 1.1 6.2-3 12.2-9.3 13.3-.6.1-1.3.2-2 .2zm-97.4-22.9h81.4c-12.1-22.5-40.2-30.9-62.6-18.8-8 4.3-14.5 10.9-18.8 18.8z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Gift = (Gift);

// EXTERNAL MODULE: ./icons/lineal/Check.tsx
var Check = __webpack_require__(850);
;// CONCATENATED MODULE: ./icons/lineal/IdCard.tsx

const IdCard = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 385",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-orange mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M360.1 385H49.5C22.2 385 0 362.9 0 335.5V124.2c0-27.3 22.2-49.5 49.5-49.5h310.6c27.3 0 49.5 22.2 49.5 49.5v211.4c0 27.3-22.2 49.4-49.5 49.4zM49.5 97.6c-14.6 0-26.5 11.9-26.5 26.6v211.4c0 14.7 11.9 26.5 26.5 26.5h310.6c14.7 0 26.5-11.9 26.5-26.5V124.2c0-14.7-11.9-26.5-26.5-26.5l-310.6-.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M262.6 51.9h-16.5c-.5-22.8-19.4-40.9-42.2-40.4-22.1.5-39.9 18.3-40.4 40.4H147c-18.9 0-34.2 15.3-34.2 34.2s15.3 34.2 34.2 34.2h115.6c18.9 0 34.2-15.3 34.2-34.2s-15.3-34.2-34.2-34.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M262.6 131.9H147c-25.2-.4-45.4-21.1-45-46.4.4-24.7 20.3-44.7 45-45h6.5c6.8-28.3 35.3-45.8 63.6-39 19.3 4.6 34.4 19.7 39 39h6.5c25.2.4 45.4 21.1 45 46.4-.4 24.6-20.3 44.6-45 45zM147 63.4c-12.6.3-22.5 10.7-22.3 23.2.3 12.2 10.1 22 22.3 22.3h115.6c12.6-.3 22.5-10.7 22.3-23.2-.3-12.2-10.1-22-22.3-22.3h-16.5c-6.2 0-11.3-5-11.5-11.2-.4-16.5-14.1-29.5-30.6-29.1-15.9.4-28.7 13.2-29.1 29.1-.1 6.2-5.2 11.2-11.5 11.2H147zm-4 234.3c-34.2-.1-61.9-28-61.7-62.3s28-61.9 62.3-61.7c5.3 0 10.5.7 15.6 2.1 6.1 1.6 9.8 7.9 8.1 14.1s-7.9 9.8-14.1 8.1c-20.8-5.6-42.3 6.7-47.9 27.6s6.7 42.3 27.6 47.9 42.3-6.7 47.9-27.6c.9-3.3 1.3-6.7 1.3-10.2.2-6.3 5.5-11.3 11.8-11.1 6.1.2 11 5.1 11.1 11.1 0 34.2-27.7 61.9-62 62z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M180.5 300.2c-11.3-7-24.3-10.6-37.5-10.6-39.6.1-71.7 32.2-71.8 71.9v10.7h143.7v-10.7c-.1-25.1-13.1-48.2-34.4-61.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M214.9 383.6H71.2c-6.3 0-11.5-5.1-11.5-11.4v-10.7c.5-46 38.2-82.9 84.2-82.4 45.3.5 81.9 37.1 82.4 82.4v10.7c0 6.3-5.1 11.4-11.4 11.4zM82.6 360.7h120.8c-.4-33.3-27.8-60-61.2-59.6-32.7.4-59.1 26.8-59.6 59.6zm255.9-111.9h-76.9c-6.3-.2-11.3-5.5-11.1-11.8.2-6.1 5.1-11 11.1-11.1h76.9c6.3-.2 11.6 4.8 11.8 11.1.2 6.3-4.8 11.6-11.1 11.8h-.7zm0 82.6h-76.9c-6.4 0-11.5-5.1-11.5-11.5s5.1-11.5 11.5-11.5h76.9c6.4 0 11.5 5.1 11.5 11.5s-5.2 11.5-11.5 11.5z"
            })
        ]
    });
};
/* harmony default export */ const lineal_IdCard = (IdCard);

// EXTERNAL MODULE: ./icons/lineal/ChatTwo.tsx
var ChatTwo = __webpack_require__(9896);
// EXTERNAL MODULE: ./icons/lineal/Browser.tsx
var Browser = __webpack_require__(3652);
// EXTERNAL MODULE: ./types/demo-1.ts
var demo_1 = __webpack_require__(6158);
// EXTERNAL MODULE: ./icons/lineal/BriefcaseTwo.tsx
var BriefcaseTwo = __webpack_require__(4531);
;// CONCATENATED MODULE: ./data/demo-12.ts








const services = [
    {
        id: 1,
        link: "#",
        Icon: Browser/* default */.Z,
        title: "Content Marketing",
        linkType: demo_1/* LinkType.yellow */.U.yellow,
        iconClassName: "icon-svg-md text-yellow mb-3",
        cardClassName: "card-border-bottom border-soft-yellow",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 2,
        link: "#",
        Icon: ChatTwo/* default */.Z,
        title: "Social Engagement",
        linkType: demo_1/* LinkType.green */.U.green,
        iconClassName: "icon-svg-md text-green mb-3",
        cardClassName: "card-border-bottom border-soft-green",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 3,
        link: "#",
        Icon: lineal_IdCard,
        linkType: demo_1/* LinkType.orange */.U.orange,
        title: "Identity & Branding",
        iconClassName: "icon-svg-md text-orange mb-3",
        cardClassName: "card-border-bottom border-soft-orange",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 4,
        link: "#",
        Icon: lineal_Gift,
        linkType: demo_1/* LinkType.blue */.U.blue,
        title: "Product Design",
        iconClassName: "icon-svg-md text-blue mb-3",
        cardClassName: "card-border-bottom border-soft-blue",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    }
];
const processList = [
    {
        no: "1",
        className: "me-lg-6",
        title: "Collect Ideas",
        subtitle: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
    },
    {
        no: "2",
        title: "Data Analysis",
        className: "ms-lg-13 mt-6",
        subtitle: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
    },
    {
        no: "3",
        title: "Finalize Product",
        className: "mx-lg-6 mt-6",
        subtitle: "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."
    }
];
const factList = [
    {
        id: 1,
        number: 7518,
        title: "Completed Projects",
        Icon: Check/* default */.Z
    },
    {
        id: 2,
        number: 3472,
        title: "Happy Customers",
        Icon: User/* default */.Z
    },
    {
        id: 3,
        number: 2184,
        title: "Expert Employees",
        Icon: BriefcaseTwo/* default */.Z
    }
];
const reviews = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Manager",
        review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`
    },
    {
        id: 4,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`
    }
];



/***/ }),

/***/ 5203:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./icons/solid-mono/Code.tsx

const Code = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.98 213.34",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M104,213.34a11,11,0,0,1-2.59-.32,10.64,10.64,0,0,1-7.76-12.93l48-192a10.66,10.66,0,0,1,20.68,5.17l-48,192A10.66,10.66,0,0,1,104,213.34Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M74.66,181.34a10.57,10.57,0,0,1-7.54-3.12l-64-64a10.67,10.67,0,0,1,0-15.08l64-64A10.67,10.67,0,0,1,82.21,50.22L25.75,106.69l56.46,56.46a10.65,10.65,0,0,1-7.55,18.19Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M181.31,181.34a10.55,10.55,0,0,1-7.53-3.12,10.67,10.67,0,0,1,0-15.08l56.46-56.47L173.78,50.21a10.67,10.67,0,1,1,15.08-15.09l64,64a10.68,10.68,0,0,1,0,15.09l-64,64A10.58,10.58,0,0,1,181.31,181.34Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Code = (Code);

;// CONCATENATED MODULE: ./icons/solid-mono/Team.tsx

const Team = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.98 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "128",
                        cy: "26.67",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "202.67",
                        cy: "176",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "53.33",
                        cy: "176",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M173.33,106.67H82.66a8,8,0,0,1-8-8V93.34A29.35,29.35,0,0,1,104,64h48a29.35,29.35,0,0,1,29.33,29.32v5.33A8,8,0,0,1,173.33,106.67Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M248,256H157.33a8,8,0,0,1-8-8v-5.33a29.36,29.36,0,0,1,29.33-29.33h48A29.36,29.36,0,0,1,256,242.67V248A8,8,0,0,1,248,256Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M98.67,256H8a8,8,0,0,1-8-8v-5.33a29.36,29.36,0,0,1,29.33-29.33h48a29.37,29.37,0,0,1,29.33,29.33V248a8,8,0,0,1-8,8Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M29.33,136.13a8,8,0,0,1-8-8A107.1,107.1,0,0,1,83.06,31.36a8,8,0,1,1,6.73,14.51,91,91,0,0,0-52.48,82.26A8,8,0,0,1,29.33,136.13Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M226.67,136.13a8,8,0,0,1-8-8,91,91,0,0,0-52.48-82.26,8,8,0,1,1,6.74-14.51,107.09,107.09,0,0,1,61.73,96.77,8,8,0,0,1-8,8Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M128,234.8a105.08,105.08,0,0,1-11.15-.58,8,8,0,0,1,1.66-15.9,93.73,93.73,0,0,0,19.6-.06,8,8,0,0,1,1.76,15.9,110.68,110.68,0,0,1-11.87.64Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Team = (Team);

// EXTERNAL MODULE: ./icons/solid-mono/Bulb.tsx
var Bulb = __webpack_require__(4119);
// EXTERNAL MODULE: ./icons/solid-mono/Lamp.tsx
var Lamp = __webpack_require__(4694);
// EXTERNAL MODULE: ./icons/solid-mono/Puzzle.tsx
var Puzzle = __webpack_require__(1315);
;// CONCATENATED MODULE: ./icons/solid-mono/Devices.tsx

const Devices = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M226.67,0H80A29.35,29.35,0,0,0,50.67,29.33V42.66H72v-8A13.34,13.34,0,0,1,85.33,21.33h136a13.34,13.34,0,0,1,13.33,13.33V221.33a13.35,13.35,0,0,1-13.33,13.33H138.59A44.07,44.07,0,0,1,132.7,256h94A29.33,29.33,0,0,0,256,226.67V29.33A29.35,29.35,0,0,0,226.67,0Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M97.17,64h-77C9,64,0,73.87,0,86V234c0,12.13,9,22,20.16,22h77c11.12,0,20.16-9.87,20.16-22V86C117.33,73.87,108.29,64,97.17,64Zm5.5,168c0,4.42-3.28,8-7.33,8H22c-4.05,0-7.33-3.58-7.33-8V85.33c0-4.42,3.28-8,7.33-8h3.66c4.05,0,7.33,3.58,7.33,8s3.28,8,7.33,8H77c4.05,0,7.33-3.59,7.33-8s3.28-8,7.33-8h3.66c4,0,7.33,3.58,7.33,8V232Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M154.67,186.67A13.33,13.33,0,1,0,168,200,13.35,13.35,0,0,0,154.67,186.67Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Devices = (Devices);

;// CONCATENATED MODULE: ./icons/solid-mono/GlobeTwo.tsx

const GlobeTwo = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256.01 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M128.11,256V256h-.24a126.37,126.37,0,0,1-22-1.84,8,8,0,1,1,2.72-15.76A114.68,114.68,0,0,0,128,240a8.06,8.06,0,0,1,8.07,8,8,8,0,0,1-7.94,8Zm33.52-12.5a8,8,0,0,1,4.77-10.25A112.18,112.18,0,0,0,184.06,225a8,8,0,0,1,8,13.85,128.36,128.36,0,0,1-20.19,9.46,8,8,0,0,1-10.26-4.79Zm-97.5-4.56a128.83,128.83,0,0,1-18.27-12.78,8,8,0,1,1,10.25-12.27,114.33,114.33,0,0,0,16,11.2,8,8,0,1,1-8,13.85Zm150.69-27.71a8,8,0,0,1-1-11.26A112.91,112.91,0,0,0,225,184a8,8,0,0,1,13.86,8,130.3,130.3,0,0,1-12.78,18.26,8,8,0,0,1-11.28,1Zm-197.59-19A128.41,128.41,0,0,1,7.76,172a8,8,0,1,1,15-5.49,112.8,112.8,0,0,0,8.29,17.67,8,8,0,1,1-13.84,8ZM244.8,156.7a8,8,0,0,1-6.5-9.26A112.3,112.3,0,0,0,240,128a8.23,8.23,0,0,1,8-8.26,7.81,7.81,0,0,1,8,8.76,124.89,124.89,0,0,1-1.92,21.72,8,8,0,0,1-9.26,6.48ZM8,136.13a7.89,7.89,0,0,1-8-7.87s.61-15,1.86-22.18a8,8,0,1,1,15.76,2.7A114.47,114.47,0,0,0,16,128,8.09,8.09,0,0,1,8,136.13ZM233.1,89.25a110.41,110.41,0,0,0-8.32-17.63,8,8,0,0,1,13.83-8.08,129,129,0,0,1,9.52,20.17,8,8,0,0,1-15,5.54ZM19.9,75.18A8,8,0,0,1,17,64.26,126.41,126.41,0,0,1,29.73,46,8,8,0,1,1,42,56.21a112.72,112.72,0,0,0-11.17,16,8,8,0,0,1-10.93,3ZM199.66,41.94a113.17,113.17,0,0,0-16-11.16,8,8,0,1,1,7.95-13.87,127.39,127.39,0,0,1,18.3,12.75,8,8,0,0,1-10.24,12.28ZM60.78,28.26a8,8,0,0,1,2.88-11A128,128,0,0,1,83.84,7.82a8,8,0,1,1,5.52,15,112.17,112.17,0,0,0-17.63,8.31,8,8,0,0,1-11-2.88Zm86.29-10.64A112.4,112.4,0,0,0,128,16a8.17,8.17,0,0,1-8.19-8,7.84,7.84,0,0,1,7.81-8H128a127.72,127.72,0,0,1,21.8,1.86,8,8,0,0,1-2.71,15.76Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm62.61,145.66a103,103,0,0,0-14.49-7.76,160.22,160.22,0,0,0,5-33.9h26.48A79.47,79.47,0,0,1,190.59,177.66ZM48.4,136H74.88a161.6,161.6,0,0,0,5,33.9,104.11,104.11,0,0,0-14.5,7.76A79.47,79.47,0,0,1,48.4,136Zm17-57.66a103.14,103.14,0,0,0,14.5,7.76,160.2,160.2,0,0,0-5,33.9H48.4a79.47,79.47,0,0,1,17-41.66ZM120,79.7a106.49,106.49,0,0,1-20-3.43c5.41-13,12.6-22.11,20-26Zm0,16V120H90.86A145.12,145.12,0,0,1,95,91.49a122.72,122.72,0,0,0,25,4.21Zm0,40.3v24.3a121.26,121.26,0,0,0-25,4.23A144.37,144.37,0,0,1,90.86,136H120Zm0,40.3v29.48c-7.4-3.94-14.59-13-20-26a104.12,104.12,0,0,1,20-3.44Zm16,0a106.21,106.21,0,0,1,20,3.43c-5.4,13-12.59,22.11-20,26Zm0-16V136H165.1a144.37,144.37,0,0,1-4.16,28.51,122.49,122.49,0,0,0-25-4.21Zm0-40.3V95.7a121.14,121.14,0,0,0,25-4.23A142.91,142.91,0,0,1,165.1,120H136Zm0-40.3V50.24c7.41,3.94,14.6,13,20,26A104.36,104.36,0,0,1,136,79.7Zm27.94-23.08a80.19,80.19,0,0,1,15.25,10A88.15,88.15,0,0,1,171,70.83a98.1,98.1,0,0,0-7.12-14.21Zm-79,14.21a86.72,86.72,0,0,1-8.12-4.25,80.12,80.12,0,0,1,15.24-10A95.14,95.14,0,0,0,84.94,70.83Zm0,114.34a98.11,98.11,0,0,0,7.12,14.21,80.12,80.12,0,0,1-15.24-10A86.72,86.72,0,0,1,84.94,185.17Zm86.1,0a88.15,88.15,0,0,1,8.13,4.25,80.19,80.19,0,0,1-15.25,10A99.14,99.14,0,0,0,171,185.17ZM181.1,120a161,161,0,0,0-5-33.9,104.57,104.57,0,0,0,14.49-7.76,79.47,79.47,0,0,1,17,41.66Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_GlobeTwo = (GlobeTwo);

// EXTERNAL MODULE: ./icons/solid-mono/Headphone.tsx
var Headphone = __webpack_require__(4940);
;// CONCATENATED MODULE: ./data/demo-26.ts








const serviceList = [
    {
        id: 1,
        url: "#",
        Icon: solid_mono_GlobeTwo,
        title: "SEO Services",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 2,
        url: "#",
        Icon: solid_mono_Code,
        title: "Web Design",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 3,
        url: "#",
        Icon: solid_mono_Team,
        title: "Social Engagement",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 4,
        url: "#",
        Icon: solid_mono_Devices,
        title: "App Development",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    }
];
const abouts = [
    {
        id: 1,
        Icon: Lamp/* default */.Z,
        title: "Creativity",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 2,
        Icon: Bulb/* default */.Z,
        title: "Innovative Thinking",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 3,
        Icon: Puzzle/* default */.Z,
        title: "Rapid Solutions",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 4,
        Icon: Headphone/* default */.Z,
        title: "Top-Notch Support",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    }
];
const testimonialList = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    }
];
/* harmony default export */ const demo_26 = ({
    serviceList,
    abouts,
    testimonialList
});


/***/ }),

/***/ 3327:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./icons/lineal/Shield.tsx
var Shield = __webpack_require__(8192);
// EXTERNAL MODULE: ./icons/lineal/Design.tsx
var Design = __webpack_require__(572);
// EXTERNAL MODULE: ./icons/lineal/Target.tsx
var Target = __webpack_require__(9228);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./icons/lineal/Wallet.tsx

const Wallet = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 383.36 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-yellow me-5 mt-1"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M11.5,220.22A11.5,11.5,0,0,1,0,208.72V155.06A77.14,77.14,0,0,1,77.06,78H316.67a11.5,11.5,0,0,1,0,23H77.06A54.12,54.12,0,0,0,23,155.06v53.66a11.5,11.5,0,0,1-11.5,11.5Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M260.2,138.87a82.37,82.37,0,1,0-138,0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M260.2,150.37h-138a11.49,11.49,0,0,1-9.63-5.21A94.23,94.23,0,0,1,124.84,27.49a93.88,93.88,0,0,1,132.75,0,94.23,94.23,0,0,1,12.24,117.67,11.49,11.49,0,0,1-9.63,5.21Zm-131.44-23H253.67a71.18,71.18,0,0,0-12.35-83.61,70.85,70.85,0,0,0-100.21,0,71.18,71.18,0,0,0-12.35,83.61Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M189.6,128.68c-11.73-.3-20.55-6.6-20.55-12,0-2.71,2.43-6.78,5.43-6.78,3.69,0,6.59,6.3,15.12,7.27V97.85c-8.82-3.3-18.8-7.08-18.8-19.49s9.11-17.64,18.8-18.9V56.75c0-1.26,1.46-2.43,3.3-2.43,1.65,0,3.3,1.17,3.3,2.43v2.52c6.3.19,16.57,2,16.57,7.66,0,2.22-1.55,6.68-5.14,6.68-2.71,0-4.94-3.1-11.43-3.58V87.09c8.62,3.2,18.32,7.56,18.32,20.74,0,11.93-7.47,18.81-18.32,20.55v3c0,1.26-1.65,2.42-3.3,2.42-1.84,0-3.3-1.16-3.3-2.42ZM190.38,85V70.32c-4.84.77-7.76,3.1-7.76,6.79,0,4.26,3.3,6.1,7.76,7.85Zm5,15.22V117c4.27-.87,7.27-3.39,7.27-8,0-4.75-3.1-7.07-7.27-8.91Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M319.3,409.6H77.06A77.15,77.15,0,0,1,0,332.54V204.79a77.16,77.16,0,0,1,77.06-77.06H319.31a40.36,40.36,0,0,1,40.31,40.33V234.9a11.5,11.5,0,1,1-23,0V168.06a17.34,17.34,0,0,0-17.31-17.32H77.06a54.12,54.12,0,0,0-54.06,54V332.54A54.12,54.12,0,0,0,77.06,386.6H319.31a17.34,17.34,0,0,0,17.31-17.32V358.36a11.5,11.5,0,0,1,23,0v10.92A40.36,40.36,0,0,1,319.3,409.6Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M371.86,309.66H280.24a43.82,43.82,0,0,1,0-87.63h91.62Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M371.86,321.16H280.24a55.32,55.32,0,1,1,0-110.64h91.62A11.52,11.52,0,0,1,383.36,222v87.63a11.51,11.51,0,0,1-11.5,11.5Zm-91.62-87.63a32.32,32.32,0,0,0,0,64.63h80.11V233.53Z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Wallet = (Wallet);

// EXTERNAL MODULE: ./icons/lineal/ChatTwo.tsx
var ChatTwo = __webpack_require__(9896);
;// CONCATENATED MODULE: ./icons/lineal/Loyalty.tsx

const Loyalty = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 457.97",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-yellow me-5"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M286.5,180.78c-18.21,0-26.38,10.21-29.59,16.2a1.08,1.08,0,0,1-1.9,0c-3.21-6-11.33-16.2-29.54-16.2-20.74,0-39,14.16-39,40a54.24,54.24,0,0,0,8,29.43c12.06,20.38,51.78,46.81,59.94,52a2.74,2.74,0,0,0,3,0c8.16-5.18,47.9-31.48,60.05-52a54.22,54.22,0,0,0,8-29.43C325.51,194.94,307.24,180.78,286.5,180.78Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M256,316.82h0a16.91,16.91,0,0,1-9.09-2.65c-8.3-5.3-50.43-32.93-64.51-56.74a68.28,68.28,0,0,1-10-36.64c0-31.38,22.34-54.16,53.13-54.16,13.91,0,23.74,4.56,30.5,9.92,6.76-5.36,16.61-9.92,30.53-9.92,30.81,0,53.16,22.78,53.16,54.16a68.25,68.25,0,0,1-10,36.64c-14.19,24-56.34,51.49-64.65,56.76A16.86,16.86,0,0,1,256,316.82ZM225.47,194.94c-11.45,0-24.83,6.77-24.83,25.85A40.3,40.3,0,0,0,206.72,243c7.43,12.57,31.56,31.35,49.25,43.27,17.69-11.87,41.84-30.61,49.33-43.27a40.38,40.38,0,0,0,6.06-22.22c0-19.08-13.39-25.86-24.86-25.86-8.25,0-14,2.94-17.12,8.74a15.24,15.24,0,0,1-26.86,0C239.43,197.87,233.7,194.94,225.47,194.94Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M130.67,458c-8.1,0-19.71-3.73-44.41-31.37C74.07,413,64.07,399.53,63.65,399a14.32,14.32,0,0,1-1-1.56A58.57,58.57,0,0,1,55.29,369V301.34a14.15,14.15,0,0,1,14.15-14.15H155.9a50,50,0,0,1,35.31,14.46l44.27,43.56a36.25,36.25,0,1,1-51.18,51.34L141,353.28l-9.66-.06a14.16,14.16,0,0,1,.08-28.31h.07c5.35,0,9.26.06,11.84.09,5.33.07,9.54.13,13.67,4.25l47.28,47.29a7.94,7.94,0,0,0,11.23-11.24l-44.18-43.48a21.93,21.93,0,0,0-15.46-6.33H83.59V369A30.14,30.14,0,0,0,87,382.9c16.91,22.62,37.33,44.05,44.52,46.77l115,0c7.14,0,15.91-4,24.27-8,6.87-3.33,59.31-38.81,94.36-62.95.24-.16.48-.32.73-.46a9.49,9.49,0,0,0,3.22-13,9.47,9.47,0,0,0-12.79-3.34l-64.07,42.48a14.15,14.15,0,1,1-15.64-23.58L341,318.09l.52-.33a37.77,37.77,0,0,1,39.39,64.46c-15.12,10.41-86.6,59.5-97.77,64.9S259.62,458,246.49,458l-115.82,0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                className: "lineal-fill",
                x: "14.15",
                y: "288.21",
                width: "73.13",
                height: "141.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M87.28,443.56H14.15A14.16,14.16,0,0,1,0,429.41V288.21a14.15,14.15,0,0,1,14.15-14.15H87.28a14.14,14.14,0,0,1,14.15,14.15v141.2A14.15,14.15,0,0,1,87.28,443.56Zm-59-28.31H73.13V302.36H28.3Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M442.56,170.79H356.11a50.09,50.09,0,0,1-35.32-14.46l-44.27-43.56a36.25,36.25,0,1,1,51.19-51.35L371,104.69l9.66.07a14.15,14.15,0,0,1-.07,28.3h-.08c-5.34,0-9.25-.06-11.84-.09-5.33-.07-9.54-.12-13.66-4.25L307.69,81.44a7.94,7.94,0,0,0-11.23,11.23l44.18,43.48a21.93,21.93,0,0,0,15.46,6.33h72.3V88.94A30.13,30.13,0,0,0,425,75.07C408.11,52.45,387.69,31,380.5,28.3l-115,0c-7.14,0-15.91,4-24.28,8-6.86,3.33-59.3,38.82-94.35,63-.24.16-.48.32-.73.47a9.47,9.47,0,0,0,9.56,16.34L219.79,73.6a14.15,14.15,0,0,1,15.64,23.59l-64.38,42.7-.52.32a37.77,37.77,0,0,1-39.39-64.46c15.11-10.4,86.6-59.49,97.77-64.9C240.23,5.37,252.38,0,265.51,0L381.32,0h0c8.1,0,19.72,3.73,44.41,31.37C437.94,45,447.93,58.44,448.35,59a14.32,14.32,0,0,1,1,1.56,58.57,58.57,0,0,1,7.35,28.37v67.69A14.16,14.16,0,0,1,442.56,170.79Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                className: "lineal-fill",
                x: "424.72",
                y: "28.56",
                width: "73.13",
                height: "141.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M497.85,183.92H424.72a14.15,14.15,0,0,1-14.15-14.16V28.56a14.15,14.15,0,0,1,14.15-14.15h73.13A14.16,14.16,0,0,1,512,28.56v141.2A14.16,14.16,0,0,1,497.85,183.92Zm-59-28.31H483.7V42.72H438.87Z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Loyalty = (Loyalty);

;// CONCATENATED MODULE: ./icons/lineal/Padlock.tsx

const Padlock = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 324.02 512",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-pink me-5 mt-1"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M14.31,241.68V439.17a58.52,58.52,0,0,0,58.52,58.52H251.19a58.52,58.52,0,0,0,58.52-58.52V241.68ZM162,407.85a47.7,47.7,0,1,1,47.7-47.7A47.7,47.7,0,0,1,162,407.85Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M251.19,512H72.83A72.91,72.91,0,0,1,0,439.17V241.68a14.31,14.31,0,0,1,14.31-14.3h295.4A14.31,14.31,0,0,1,324,241.68V439.17A72.91,72.91,0,0,1,251.19,512ZM28.62,256V439.17a44.26,44.26,0,0,0,44.21,44.21H251.19a44.26,44.26,0,0,0,44.21-44.21V256ZM162,422.16a62,62,0,1,1,62-62A62.08,62.08,0,0,1,162,422.16Zm0-95.4a33.39,33.39,0,1,0,33.39,33.39A33.44,33.44,0,0,0,162,326.76Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M68.56,234.54H20.38a14.31,14.31,0,0,1,0-28.62H68.56a14.31,14.31,0,0,1,0,28.62Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M303.64,234.54H255.46a14.31,14.31,0,0,1,0-28.62h48.18a14.31,14.31,0,0,1,0,28.62Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M45.14,256a14.3,14.3,0,0,1-14.31-14.31V124a124.16,124.16,0,0,1,124-124h14.32a124.17,124.17,0,0,1,124,124V225.16a14.31,14.31,0,1,1-28.62,0V124a95.51,95.51,0,0,0-95.4-95.4H154.85A95.51,95.51,0,0,0,59.44,124V241.68A14.3,14.3,0,0,1,45.14,256Z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Padlock = (Padlock);

// EXTERNAL MODULE: ./icons/lineal/AwardTwo.tsx
var AwardTwo = __webpack_require__(3487);
;// CONCATENATED MODULE: ./icons/lineal/CheckList.tsx

const CheckList = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 418.2 512",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-blue me-5 mt-1"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M14.8 97.6h85.4V14.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M100.2 112.4H14.8C6.6 112.4 0 105.8 0 97.7c0-4 1.6-7.9 4.5-10.7L89.9 4.2c5.8-5.7 15.2-5.6 20.9.3 2.7 2.8 4.2 6.5 4.2 10.3v82.8c0 8.2-6.6 14.8-14.8 14.8zm-49-29.6h34.2V49.7L51.2 82.8zM403.4 320c-8.2 0-14.8-6.6-14.8-14.8v-269c0-3.6-3.2-6.6-7.2-6.6H168.7c-8.2 0-14.8-6.6-14.8-14.8 0-8.2 6.6-14.8 14.8-14.8h212.6c20.3 0 36.8 16.2 36.8 36.1v269c.1 8.3-6.5 14.9-14.7 14.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M381.4 512H36.8C16.5 512 0 495.8 0 475.9V97.6c0-4 1.6-7.8 4.5-10.6L89.9 4.2c5.9-5.7 15.2-5.5 20.9.3 5.7 5.9 5.5 15.2-.3 20.9l-80.9 78.5v372c0 3.6 3.2 6.6 7.2 6.6h344.6c4 0 7.2-3 7.2-6.6v-92.7c.2-8.2 7-14.6 15.2-14.4 7.9.2 14.2 6.5 14.4 14.4v92.7c0 19.9-16.5 36.1-36.8 36.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M403.4 112.4H168.7c-8.2-.2-14.6-7-14.4-15.2.2-7.9 6.5-14.2 14.4-14.4h219.9v-43c0-5.7-4.6-10.3-10.3-10.3H168.7c-8.2 0-14.8-6.6-14.8-14.8C154 6.6 160.6 0 168.7 0h209.6c22 0 39.8 17.9 39.9 39.8v57.8c0 8.2-6.6 14.8-14.8 14.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M73 189.6h124.1v65H73z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M197.1 269.4H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.6-14.8 14.7-14.8H197c8.2 0 14.8 6.6 14.8 14.8v65c.1 8.1-6.5 14.8-14.7 14.8.1 0 0 0 0 0zM87.8 239.8h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M73 346.1h124.1v65H73z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M197.1 426H73c-8.2 0-14.8-6.6-14.8-14.8v-65c0-8.2 6.5-14.8 14.7-14.9h124.2c8.2 0 14.8 6.6 14.8 14.8v65c0 8.2-6.5 14.9-14.8 14.9.1 0 .1 0 0 0zM87.8 396.4h94.6v-35.5H87.8v35.5zm201 25.3c-3.9 0-7.7-1.6-10.5-4.3l-23.6-23.6c-5.7-5.9-5.6-15.2.3-20.9 5.7-5.6 14.9-5.6 20.6 0l13.2 13.2 46-46c5.9-5.7 15.2-5.6 20.9.3 5.6 5.7 5.6 14.9 0 20.6l-56.4 56.4c-2.8 2.7-6.6 4.3-10.5 4.3z"
            })
        ]
    });
};
/* harmony default export */ const lineal_CheckList = (CheckList);

;// CONCATENATED MODULE: ./icons/lineal/Insurance.tsx

const Insurance = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 441.41 512",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-pink me-5 mt-1"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M254.93,457a46.24,46.24,0,0,1-24.13-40.62V285.62A70,70,0,0,0,307.94,270a100.73,100.73,0,0,0-81.62-41.61H115.72A100.88,100.88,0,0,0,14.84,329.31V497.16H327.2v-.81Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M426.57,270.78a14.85,14.85,0,0,0-14.85,14.84V416.34a31.41,31.41,0,0,1-16.38,27.59l-66.66,36.32L262,443.93a31.4,31.4,0,0,1-16.39-27.59V305.05a85.35,85.35,0,0,0,12.31.89c1.26,0,2.51,0,3.76-.1l1,0c1.13-.06,2.25-.14,3.37-.25l1.59-.18,1.65-.2a83.72,83.72,0,0,0,41.13-17.47l1.09-.86,1.28-1.07c.85-.72,1.69-1.47,2.52-2.23l.41-.38c.95-.88,1.88-1.79,2.78-2.71l0,0h0a85,85,0,0,0,10.13-12.56,85.74,85.74,0,0,0,28,26.55,14.84,14.84,0,0,0,15-25.63A55.78,55.78,0,0,1,349,243.37a14.85,14.85,0,0,0-13.58-8.85H321.94a14.85,14.85,0,0,0-13.58,8.85c-.45,1-.94,2-1.44,3a116.46,116.46,0,0,0-45.39-27.21,87.22,87.22,0,0,0,27.23-63.34V87.5a14.85,14.85,0,0,0-29.69,0v68.29A57.86,57.86,0,0,1,202,213.58H140A57.86,57.86,0,0,1,83,155.79V87.5a57.87,57.87,0,0,1,57.81-57.81h60.48a14.85,14.85,0,0,0,0-29.69H140.78a87.6,87.6,0,0,0-87.5,87.5v68.29a87.23,87.23,0,0,0,27.19,63.3A115.93,115.93,0,0,0,0,329.31V497.16A14.85,14.85,0,0,0,14.84,512H327.2c.27,0,.55,0,.82,0s.44,0,.66,0a14.76,14.76,0,0,0,7.1-1.81L409.54,470a61.06,61.06,0,0,0,31.87-53.65V285.63A14.85,14.85,0,0,0,426.57,270.78Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M29.69,482.31v-153a86.13,86.13,0,0,1,86-86H140l.74,0h15.4V387.46a14.84,14.84,0,1,0,29.68,0V243.29h15.4l.74,0h24.32a86.35,86.35,0,0,1,60.4,24.82,55,55,0,0,1-20.58,7.54l-.15,0c-1.15.17-2.31.29-3.47.38l-.56.06c-1.24.09-2.49.13-3.74.14H258a54.76,54.76,0,0,1-21.38-4.3A14.84,14.84,0,0,0,216,285.62V416.34A61.12,61.12,0,0,0,247.82,470l22.6,12.31Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M327.19,405.92a14.81,14.81,0,0,1-7.22-1.87l-24.85-13.86a14.84,14.84,0,0,1,14.45-25.93L325.24,373l34.06-30.14A14.84,14.84,0,1,1,379,365.09L337,402.2A14.82,14.82,0,0,1,327.19,405.92Z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Insurance = (Insurance);

// EXTERNAL MODULE: ./icons/lineal/Telephone.tsx
var Telephone = __webpack_require__(1606);
// EXTERNAL MODULE: ./icons/lineal/Analytics.tsx
var Analytics = __webpack_require__(5754);
// EXTERNAL MODULE: ./icons/lineal/Megaphone.tsx
var Megaphone = __webpack_require__(7818);
// EXTERNAL MODULE: ./icons/lineal/LightBulb.tsx
var LightBulb = __webpack_require__(6729);
// EXTERNAL MODULE: ./icons/lineal/PieChartTwo.tsx
var PieChartTwo = __webpack_require__(8807);
;// CONCATENATED MODULE: ./icons/lineal/CloudComputingTwo.tsx

const CloudComputingTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 319.1",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-orange me-5"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M333.9 278.3H276c-6-.2-10.8-5.2-10.6-11.2.2-5.8 4.8-10.4 10.6-10.6h57.9c29.8 0 53.9-24.1 53.9-53.9 0-25.9-18.5-48.1-43.9-52.9-5.9-1.1-9.8-6.8-8.7-12.7 0-.2.1-.5.2-.7 12.6-48.9-16.8-98.7-65.7-111.4-38.3-9.9-78.7 6-100 39.4-2.9 4.6-8.8 6.3-13.7 4.1-30.1-13.6-65.6-.2-79.2 29.9-3.5 7.8-5.3 16.2-5.3 24.7 0 4.6.6 9.3 1.6 13.8 1.4 5.9-2.3 11.7-8.1 13.1-.1 0-.2 0-.2.1-29.3 6-47.9 34.6-41.8 63.7 5.3 24.9 27.2 42.8 52.7 42.8h58.2c6 .2 10.8 5.2 10.6 11.2-.2 5.8-4.8 10.4-10.6 10.6H75.7C33.9 278.3 0 244.4 0 202.6c0-31.9 20-60.4 50-71.2-.3-2.8-.4-5.7-.5-8.5 0-45.1 36.6-81.7 81.8-81.7 8.5 0 16.9 1.3 25 3.9 37.6-50 108.6-60 158.5-22.4C348.4 48 365.2 89.6 358.6 131c39.5 13.6 60.5 56.7 46.9 96.2-10.6 30.6-39.3 51.1-71.6 51.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M250.6 224.3l-39.3-53.6c-2.7-3.6-7.8-4.4-11.4-1.8-.7.5-1.3 1.1-1.8 1.8L159 224.3c-2.7 3.6-1.9 8.7 1.7 11.4 1.4 1 3.1 1.6 4.9 1.6h10.7v52.2c0 10.3 8.3 18.6 18.6 18.6h19.8c10.3 0 18.6-8.3 18.6-18.6v-52.3H244c4.5 0 8.2-3.6 8.2-8.1.1-1.7-.5-3.4-1.6-4.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M214.7 319.1h-19.8c-16.3 0-29.5-13.2-29.5-29.5v-41.3c-10.5-.1-19-8.8-18.9-19.3 0-4 1.3-7.8 3.7-11l39.3-53.6c6.2-8.5 18-10.4 26.5-4.2 1.6 1.2 3 2.6 4.2 4.2l39.3 53.6c6.2 8.5 4.4 20.4-4.1 26.6-3.2 2.3-7.1 3.6-11 3.7v41.3c-.1 16.2-13.4 29.4-29.7 29.5zM171 226.4h5.3c6 0 10.9 4.9 10.9 10.9v52.2c0 4.3 3.5 7.7 7.7 7.7h19.8c4.3 0 7.7-3.5 7.7-7.7v-52.2c0-6 4.9-10.9 10.9-10.9h5.3l-33.9-46.2-33.7 46.2z"
            })
        ]
    });
};
/* harmony default export */ const lineal_CloudComputingTwo = (CloudComputingTwo);

// EXTERNAL MODULE: ./utils/color.ts
var color = __webpack_require__(9957);
;// CONCATENATED MODULE: ./data/demo-27.ts

















const serviceList = [
    {
        id: 1,
        Icon: Telephone/* default */.Z,
        color: color/* default.blue */.Z.blue,
        title: "24/7 Support",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 2,
        Icon: Shield/* default */.Z,
        color: color/* default.yellow */.Z.yellow,
        title: "Secure Payments",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 3,
        color: color/* default.orange */.Z.orange,
        Icon: lineal_CloudComputingTwo,
        title: "Daily Updates",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 4,
        Icon: Analytics/* default */.Z,
        color: color/* default.pink */.Z.pink,
        title: "Market Research",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 5,
        Icon: ChatTwo/* default */.Z,
        color: color/* default.green */.Z.green,
        title: "Social Engagement",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 6,
        Icon: Megaphone/* default */.Z,
        color: color/* default.purple */.Z.purple,
        title: "Content Marketing",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    }
];
const processList = [
    {
        id: 1,
        Icon: LightBulb/* default */.Z,
        title: "Collect Ideas",
        description: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
    },
    {
        id: 2,
        Icon: PieChartTwo/* default */.Z,
        title: "Data Analysis",
        description: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
    },
    {
        id: 3,
        Icon: Design/* default */.Z,
        title: "Magic Touch",
        description: "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."
    }
];
const abouts = [
    {
        id: 1,
        Icon: Target/* default */.Z,
        color: color/* default.blue */.Z.blue,
        title: "Our Vision",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`
    },
    {
        id: 2,
        Icon: AwardTwo/* default */.Z,
        color: color/* default.green */.Z.green,
        title: "Our Mission",
        description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`
    },
    {
        id: 3,
        Icon: lineal_Loyalty,
        color: color/* default.yellow */.Z.yellow,
        title: "Our Values",
        description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
    }
];
const pricingList = [
    {
        price: 9,
        plan: "Basic",
        features: [
            "2 Projects",
            "100K API Access",
            "100MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    },
    {
        price: 19,
        plan: "Premium",
        features: [
            "5 Projects",
            "200K API Access",
            "300MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    },
    {
        price: 29,
        plan: "Corporate",
        features: [
            "20 Projects",
            "300K API Access",
            "500MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    },
    {
        price: 49,
        plan: "Community",
        features: [
            "90 Projects",
            "900K API Access",
            "900MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    }
];
const faqList = [
    {
        id: 1,
        Icon: lineal_CheckList,
        title: "Can I cancel my subscription?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
    },
    {
        id: 2,
        Icon: lineal_Wallet,
        title: "Which payment methods do you accept?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
    },
    {
        id: 3,
        Icon: lineal_Insurance,
        title: "How can I manage my Account?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
    },
    {
        id: 4,
        Icon: lineal_Padlock,
        title: "Is my credit card information secure?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
    }
];
/* harmony default export */ const demo_27 = ({
    serviceList,
    processList,
    abouts,
    pricingList,
    faqList
});


/***/ }),

/***/ 2356:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: accordions, clients, pricingList, progressList, services, teams, whatWeAre

// EXTERNAL MODULE: ./icons/lineal/Target.tsx
var Target = __webpack_require__(9228);
// EXTERNAL MODULE: ./icons/lineal/AwardTwo.tsx
var AwardTwo = __webpack_require__(3487);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./icons/lineal/BarChart.tsx

const BarChart = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 431.2",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-orange mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M125.8 121.3h86.6v296.4h-86.6zM299 13.5h86.6v404.2H299z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M498.5 404.2h-11.8V161.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v242.5h-59.6V94.3h73.1c7.4 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-74.1V13.5c0-7.4-6-13.5-13.5-13.5H299c-7.4 0-13.5 6-13.5 13.5v134.8h-59.7v-27c0-7.4-6-13.5-13.5-13.5h-73.6V33.7c0-7.4-6-13.5-13.5-13.5H38.7c-7.4 0-13.5 6-13.5 13.5v294.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V47.2h59.7v357.1H13.5c-7.4.2-13.3 6.4-13.1 13.8.2 7.2 6 12.9 13.1 13.1h485.1c7.4-.2 13.3-6.4 13.1-13.8-.3-7.2-6-13-13.2-13.2zM139.3 134.7H199v269.5h-59.7V134.7zm86.6 40.5h59.7v229h-59.7v-229zm86.6 229V27h59.7v377.2h-59.7z"
            })
        ]
    });
};
/* harmony default export */ const lineal_BarChart = (BarChart);

// EXTERNAL MODULE: ./icons/lineal/Megaphone.tsx
var Megaphone = __webpack_require__(7818);
// EXTERNAL MODULE: ./icons/lineal/SettingsThree.tsx
var SettingsThree = __webpack_require__(7573);
;// CONCATENATED MODULE: ./data/demo-8.ts





const clients = [
    {
        id: 1,
        image: "/img/brands/c1.png"
    },
    {
        id: 2,
        image: "/img/brands/c2.png"
    },
    {
        id: 3,
        image: "/img/brands/c3.png"
    },
    {
        id: 4,
        image: "/img/brands/c4.png"
    },
    {
        id: 5,
        image: "/img/brands/c5.png"
    },
    {
        id: 6,
        image: "/img/brands/c6.png"
    },
    {
        id: 7,
        image: "/img/brands/c7.png"
    },
    {
        id: 8,
        image: "/img/brands/c8.png"
    }
];
const whatWeAre = [
    {
        id: 1,
        Icon: Target/* default */.Z,
        title: "Our Mission",
        description: "Dapibus eu leo quam ornare curabitur blandit tempus."
    },
    {
        id: 2,
        Icon: AwardTwo/* default */.Z,
        title: "Our Values",
        description: "Aenean lacinia bibendum nulla sed consectetur."
    }
];
const services = [
    {
        id: 1,
        Icon: Megaphone/* default */.Z,
        title: "Marketing",
        description: "Nulla vitae elit libero pharetra augue dapibus."
    },
    {
        id: 2,
        Icon: Target/* default */.Z,
        title: "Strategy",
        description: "Vivamus sagittis lacus augue laoreet vel."
    },
    {
        id: 3,
        Icon: SettingsThree/* default */.Z,
        title: "Development",
        description: "Cras mattis consectetur purus sit amet."
    },
    {
        id: 4,
        Icon: lineal_BarChart,
        title: "Data Analysis",
        description: "Aenean lacinia bibendum nulla sed consectetur."
    }
];
const teams = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        image: {
            "1x": "/img/avatars/t1.jpg",
            "2x": "/img/avatars/t1@2x.jpg 2x"
        }
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        image: {
            "1x": "/img/avatars/t2.jpg",
            "2x": "/img/avatars/t2@2x.jpg 2x"
        }
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Manager",
        image: {
            "1x": "/img/avatars/t3.jpg",
            "2x": "/img/avatars/t3@2x.jpg 2x"
        }
    },
    {
        id: 4,
        name: "Jackie Sanders",
        designation: "Investment Planner",
        image: {
            "1x": "/img/avatars/t4.jpg",
            "2x": "/img/avatars/t4@2x.jpg 2x"
        }
    }
];
const progressList = [
    {
        id: 1,
        percent: 100,
        title: "Marketing"
    },
    {
        id: 2,
        percent: 80,
        title: "Strategy"
    },
    {
        id: 3,
        percent: 85,
        title: "Development"
    }
];
const pricingList = [
    {
        monthlyPrice: 19,
        yearlyPrice: 199,
        planName: "Premium",
        features: [
            "5 Projects",
            "100K API Access",
            "200MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    },
    {
        monthlyPrice: 49,
        yearlyPrice: 499,
        planName: "Corporate",
        features: [
            "20 Projects",
            "300K API Access",
            "500MB Storage",
            "Weekly Reports",
            "7/24 Support"
        ]
    }
];
const accordions = [
    {
        no: "One",
        expand: false,
        heading: "How do I get my subscription receipt?",
        body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
        no: "Two",
        expand: false,
        heading: "Are there any discounts for people in need?",
        body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
        no: "Three",
        expand: false,
        heading: "Do you offer a free trial edit?",
        body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
        no: "Four",
        expand: false,
        heading: "How do I reset my Account password?",
        body: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    }
];



/***/ }),

/***/ 1496:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useLightBox = ()=>{
    const lightboxLoad = ()=>{
        const GLightbox = __webpack_require__(1440);
        GLightbox({
            loop: false,
            moreLength: 0,
            zoomable: false,
            autoplayVideos: true,
            touchNavigation: true,
            selector: "*[data-glightbox]",
            // slideExtraAttributes: { poster: '' },
            plyr: {
                config: {
                    fullscreen: {
                        enabled: false,
                        iosNative: false
                    },
                    youtube: {
                        noCookie: true,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        transparent: false
                    }
                }
            }
        });
    };
    useEffect(()=>{
        lightboxLoad();
    }, []);
    return null;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useLightBox)));


/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Analytics = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 427.5",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M186.9 353.4h138.3V413H186.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Analytics);


/***/ }),

/***/ 3487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AwardTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 409.6 404.7",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-lg text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AwardTwo);


/***/ }),

/***/ 4531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BriefcaseTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 380.8",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BriefcaseTwo);


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Browser = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 442.8",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-red mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M112.8 268.5h286.4v63.6H112.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browser);


/***/ }),

/***/ 9896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ChatTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 454.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-green mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M131.5 126.8h249V15.2H15.2v256.3h116.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatTwo);


/***/ }),

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Check = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 409.6 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Check);


/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CloudComputing = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 361.2",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudComputing);


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Design = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 409.6 332.7",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-yellow me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Design);


/***/ }),

/***/ 6729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LightBulb = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 321.7 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-blue me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightBulb);


/***/ }),

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Megaphone = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 409.6 362.5",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-blue mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Megaphone);


/***/ }),

/***/ 8807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PieChartTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 408.1 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-green me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M396.3 192.3h-33.4c-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6h19.7C363.2 71.1 268.1 7.3 170.1 26.6c-4.2.8-8.4 1.8-12.6 2.9L235.1 169h72c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6h-78.9c-4.2 0-8.1-2.3-10.1-6l-87.9-158c-3.1-5.6-1.1-12.6 4.5-15.7.7-.4 1.5-.7 2.3-1l8.1-2.5c107.8-33.1 222 27.4 255.1 135.2 2.7 8.7 4.8 17.6 6.3 26.6l1.3 8c1.1 6.3-3.2 12.3-9.5 13.3-.7.2-1.3.2-2 .2zM204.6 409.6c-20.4-.1-40.6-3.2-60.1-9.2l-8.1-2.5c-6.1-1.9-9.6-8.4-7.7-14.5.2-.8.6-1.5 1-2.2l88.4-158.3c2.1-3.7 5.9-5.9 10.1-5.9h33.2c6.4.2 11.4 5.5 11.2 11.9-.2 6.1-5.1 11.1-11.2 11.2H235l-78 139.8c96.8 26.3 196.6-30.9 222.9-127.8 1.1-4 2-8 2.8-12h-65.4c-6.4.2-11.7-4.8-11.9-11.2-.2-6.4 4.8-11.7 11.2-11.9h79.8c6.4 0 11.6 5.2 11.6 11.6 0 .6-.1 1.3-.2 1.9l-1.3 7.9C390 337 304.7 409.4 204.6 409.6z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M93 361.8C6 300.1-14.5 179.6 47.1 92.6c12.7-17.9 28.4-33.5 46.3-46.2l6.2-4.4 90 161.7-90.4 162.5-6.2-4.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M99.2 377.8c-2.4 0-4.7-.7-6.7-2.1l-6.2-4.4C-5.9 305.9-27.7 178.2 37.7 86c13.5-19 30-35.5 49.1-48.9l6.2-4.4c5.2-3.7 12.4-2.4 16.1 2.8.2.3.5.7.7 1.1l90 161.7c1.9 3.5 1.9 7.8 0 11.3L109.4 372c-1.6 2.9-4.3 4.9-7.6 5.7-.8 0-1.7.1-2.6.1zM95.8 59C15.6 119.1-.7 232.9 59.4 313.1c10.2 13.7 22.4 25.8 36 36.1l81-145.4L95.8 59z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PieChartTwo);


/***/ }),

/***/ 7573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SettingsThree = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 427.5",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-yellow mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M186.9 353.4h138.3V413H186.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsThree);


/***/ }),

/***/ 8192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Shield = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 339.8 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SmartphoneTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 306.7 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-red mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M11.1 348.5c-6.1 0-11.1-5-11.1-11.1V72.2C0 66 5 61.1 11.1 61.1h284.5c6.1 0 11.1 5 11.1 11.1V257c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1V83.2H22.2v254.2c0 6.2-5 11.2-11.1 11.1 0 .1 0 .1 0 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M48.8 398.5H258c20.8 0 37.7-16.9 37.7-37.7v-23.4H11.1v23.4c0 20.8 16.9 37.7 37.7 37.7z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M258 409.6H48.8C21.9 409.6 0 387.7 0 360.8v-23.4c0-6.1 5-11.1 11.1-11.1h284.5c6.1 0 11.1 5 11.1 11.1v23.4c0 26.9-21.8 48.7-48.7 48.8zM22.2 348.5v12.3c0 14.7 11.9 26.6 26.6 26.6H258c14.7 0 26.6-11.9 26.6-26.6v-12.3H22.2zM295.6 83.2H11.1C5 83.2 0 78.3 0 72.2V48.8C0 21.9 21.9 0 48.8 0H258c26.9 0 48.8 21.9 48.8 48.8v23.4c0 6.1-5 11-11.2 11zM22.2 61h262.3V48.8c0-14.7-11.9-26.5-26.5-26.6H48.8c-14.7 0-26.6 11.9-26.6 26.6V61z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "st2",
                d: "M65.1 130.8L85 145.3l23.3-28.9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M85 156.4c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.6s5.5 10.9 1.6 15.6l-23.3 28.8c-2 2.6-5.2 4.1-8.6 4.1zM241.7 142H159c-6.1-.2-11-5.3-10.8-11.4.2-5.9 4.9-10.6 10.8-10.8h82.7c6.1.2 11 5.3 10.8 11.4-.2 5.9-4.9 10.6-10.8 10.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "st2",
                d: "M65.1 204.8L85 219.2l23.3-28.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M85 230.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.8-4.8 10.8-5.5 15.6-1.7s5.5 10.8 1.7 15.6l-23.3 28.9c-2.1 2.6-5.3 4.1-8.7 4.1zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "st2",
                d: "M65.1 278.8L85 293.2l23.3-28.9"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M85 304.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5L83 278l16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.7s5.5 10.9 1.7 15.6l-23.3 28.9c-2.1 2.7-5.3 4.2-8.7 4.2zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartphoneTwo);


/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Target = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-aqua me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "lineal-fill",
                cx: "283.8",
                cy: "283.8",
                r: "143"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Target);


/***/ }),

/***/ 1606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Telephone = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 507 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Telephone);


/***/ }),

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const User = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 441.4 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 4119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Bulb = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 255.98",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-primary",
                cx: "58.67",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-primary",
                cx: "197.33",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bulb);


/***/ }),

/***/ 1619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DeliveryBox = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-green mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeliveryBox);


/***/ }),

/***/ 4940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Headphone = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 244.09",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-green me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headphone);


/***/ }),

/***/ 4694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Lamp = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-orange mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M95.25 208H96a1.8 1.8 0 00-.75.11z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M160.53 208v.11a.93.93 0 00-.53-.11z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lamp);


/***/ }),

/***/ 1315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Puzzle = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.97 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-orange me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Puzzle);


/***/ }),

/***/ 6158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LinkType)
/* harmony export */ });
var LinkType;
(function(LinkType) {
    LinkType["red"] = "red";
    LinkType["blue"] = "blue";
    LinkType["green"] = "green";
    LinkType["yellow"] = "yellow";
    LinkType["violet"] = "violet";
    LinkType["orange"] = "orange";
    LinkType["fuchsia"] = "fuchsia";
})(LinkType || (LinkType = {}));



/***/ }),

/***/ 9957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const color = {
    aqua: "aqua",
    fuchsia: "fuchsia",
    grape: "grape",
    green: "green",
    leaf: "leaf",
    navy: "navy",
    orange: "orange",
    pink: "pink",
    purple: "purple",
    red: "red",
    sky: "sky",
    blue: "blue",
    violet: "violet",
    yellow: "yellow",
    primary: "primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (color);


/***/ })

};
;