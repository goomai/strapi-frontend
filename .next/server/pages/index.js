(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1154:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Editor_container__eyCqI",
	"editor_container": "Editor_editor_container__HeyfY",
	"code_ground": "Editor_code_ground__VbdKf",
	"code_editor": "Editor_code_editor__j_1xj",
	"output_container": "Editor_output_container__mNv_Y",
	"editor_options": "Editor_editor_options__DKN_V",
	"run_btn": "Editor_run_btn__VJTqx",
	"run_btn_2": "Editor_run_btn_2__00AqJ",
	"output": "Editor_output__slela",
	"code_title": "Editor_code_title__kkusL"
};


/***/ }),

/***/ 5808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gpt.31728a1c.svg","height":51,"width":50});

/***/ }),

/***/ 4559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ep": () => (/* reexport */ faq_FAQ1),
  "YK": () => (/* reexport */ faq_FAQ5)
});

// UNUSED EXPORTS: FAQ2, FAQ3, FAQ4, FAQ6, FAQ7

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/reuseable/accordion/index.tsx

// ==================================================
const accordion_Accordion = (props)=>{
    const { no , body , heading , expand , type =""  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `card ${type} accordion-item`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-header",
                id: `heading${no}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    "data-bs-toggle": "collapse",
                    "aria-controls": `collapse${no}`,
                    "data-bs-target": `#collapse${no}`,
                    "aria-expanded": expand ? "true" : "false",
                    className: expand ? "accordion-button fs-16 fs-md-16" : "collapsed fs-16 fs-md-16",
                    children: heading
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: `collapse${no}`,
                "aria-labelledby": `heading${no}`,
                "data-bs-parent": "#accordionExample",
                className: `accordion-collapse collapse ${expand && "show"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: body
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const accordion = (accordion_Accordion);

;// CONCATENATED MODULE: ./data/faq.ts
// used in the faq-1 block
const accordionList1 = [
    [
        {
            no: "One",
            expand: false,
            heading: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap ChatGPT which is based on OpenAI GPT 3.5 is a big leap",
            body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
        },
        {
            no: "Two",
            expand: false,
            heading: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap ChatGPT which",
            body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
        }
    ],
    [
        {
            no: "Four",
            expand: false,
            heading: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap ChatGPT which is based on OpenAI GPT 3.5 is a big leap",
            body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
        },
        {
            no: "Five",
            expand: false,
            heading: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap ChatGPT which is based on",
            body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
        }
    ]
];
// used in the faq-2 block
const faq_accordionList2 = [
    {
        no: "One",
        expand: false,
        heading: "How do I get my subscription receipt?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Two",
        expand: false,
        heading: "Are there any discounts for people in need?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Three",
        expand: false,
        heading: "Do you offer a free trial edit?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Four",
        expand: false,
        heading: "How do I reset my Account password?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    }
];
// used in the faq-6 block
const faq_accordionList3 = [
    {
        no: "One",
        expand: false,
        heading: "How do I get my subscription receipt?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Two",
        expand: false,
        heading: "Are there any discounts for people in need?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Three",
        expand: false,
        heading: "Do you offer a free trial edit?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    },
    {
        no: "Four",
        expand: false,
        heading: "How do I reset my Account password?",
        body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
    }
];

;// CONCATENATED MODULE: ./components/blocks/faq/FAQ1.tsx



// -------- data -------- //

const FAQ1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "display-4 mb-10 px-lg-12 px-xl-15 text-center",
                children: "Here are some frequently asked questions"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "accordion-wrapper",
                id: "accordion",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row w-60",
                    children: accordionList1.map((items, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12",
                            children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(accordion, {
                                    ...item
                                }, item.no))
                        }, i);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const faq_FAQ1 = (FAQ1);

;// CONCATENATED MODULE: ./components/blocks/faq/FAQ2.tsx


// -------- data -------- //

// ============================================================
const FAQ2 = ({ titleColor ="primary"  })=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-11 col-xxl-10 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: `fs-15 text-uppercase text-${titleColor} mb-3`,
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15",
                                children: "If you don't see an answer to your question, you can send us an email from our contact form."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7 mx-auto",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "accordion-wrapper",
                            id: "accordion",
                            children: accordionList2.map((item)=>/*#__PURE__*/ _jsx(Accordion, {
                                    ...item
                                }, item.no))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const faq_FAQ2 = ((/* unused pure expression or super */ null && (FAQ2)));

// EXTERNAL MODULE: ./icons/lineal/Target.tsx
var Target = __webpack_require__(9228);
;// CONCATENATED MODULE: ./icons/lineal/AwardTwo.tsx

const AwardTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 409.6 404.7",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-lg text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z"
            })
        ]
    });
};
/* harmony default export */ const lineal_AwardTwo = (AwardTwo);

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
        Icon: lineal_AwardTwo,
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
const demo_8_accordions = [
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


;// CONCATENATED MODULE: ./components/blocks/faq/FAQ3.tsx


// -------- data -------- //

const FAQ3 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card bg-soft-primary rounded-4",
        children: /*#__PURE__*/ _jsx("div", {
            className: "card-body p-md-10 p-xl-11",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-4",
                                children: "Frequently Asked Questions"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg mb-0",
                                children: "If you don't see an answer to your question, you can send us an email from our contact form."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "accordion accordion-wrapper",
                            id: "accordionExample",
                            children: accordions.map((item)=>/*#__PURE__*/ _jsx(Accordion, {
                                    type: "plain",
                                    ...item
                                }, item.no))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const faq_FAQ3 = ((/* unused pure expression or super */ null && (FAQ3)));

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
;// CONCATENATED MODULE: ./components/reuseable/counter/Counter1.tsx


// ====================================================
const Counter1 = ({ title , number , titleColor =""  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-md-4",
        children: [
            /*#__PURE__*/ _jsx("h3", {
                className: `counter counter-lg ${titleColor}`,
                children: /*#__PURE__*/ _jsx(CountUp, {
                    end: number,
                    suffix: "+"
                })
            }),
            /*#__PURE__*/ _jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter1 = ((/* unused pure expression or super */ null && (Counter1)));

;// CONCATENATED MODULE: ./components/reuseable/counter/Counter2.tsx


// ===================================================
const Counter2_Counter2 = ({ amount , title  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-6 col-lg-3",
        children: [
            /*#__PURE__*/ _jsx("h3", {
                className: "counter counter-lg text-white",
                children: /*#__PURE__*/ _jsx(CountUp, {
                    end: amount
                })
            }),
            /*#__PURE__*/ _jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter2 = ((/* unused pure expression or super */ null && (Counter2_Counter2)));

;// CONCATENATED MODULE: ./components/reuseable/counter/Counter3.tsx


// ====================================================
const Counter3 = ({ title , number , Icon , suffix  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-md-4",
        children: [
            Icon,
            /*#__PURE__*/ _jsx("h3", {
                className: "counter",
                children: /*#__PURE__*/ _jsx(CountUp, {
                    end: number,
                    ...suffix && {
                        suffix
                    }
                })
            }),
            /*#__PURE__*/ _jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter3 = ((/* unused pure expression or super */ null && (Counter3)));

;// CONCATENATED MODULE: ./components/reuseable/counter/index.ts





// EXTERNAL MODULE: ./data/demo-11.ts
var demo_11 = __webpack_require__(7664);
;// CONCATENATED MODULE: ./components/blocks/faq/FAQ4.tsx


// -------- data -------- //

const FAQ4 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row mt-md-n50p mb-14 mb-md-7",
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xl-10 mx-auto",
            children: /*#__PURE__*/ _jsx("div", {
                className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-400",
                style: {
                    backgroundImage: "url(/img/photos/bg2.jpg)"
                },
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card-body p-9 p-xl-11",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row align-items-center counter-wrapper gy-8 text-center text-white",
                        children: facts.map((item)=>/*#__PURE__*/ _jsx(Counter2, {
                                ...item
                            }, item.id))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const faq_FAQ4 = ((/* unused pure expression or super */ null && (FAQ4)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./assets/svgs/gpt.svg
var gpt = __webpack_require__(5808);
;// CONCATENATED MODULE: ./components/blocks/faq/FAQ5.tsx

// -------- data -------- //



const FAQ5 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-md-8 gx-xl-12 gy-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "display-5 col-lg-12 mb-10 px-xl-6",
                children: "Use Cases"
            }),
            demo_11/* cases.map */.c6.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6 mb-9 mt-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon btn btn-sm btn-circle pe-none me-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: gpt/* default */.Z,
                                        alt: "cd icon"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-0",
                                        children: item.description
                                    })
                                ]
                            })
                        ]
                    })
                }, item.id))
        ]
    });
};
/* harmony default export */ const faq_FAQ5 = (FAQ5);

// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(9066);
;// CONCATENATED MODULE: ./components/blocks/faq/FAQ6.tsx



// -------- data -------- //

const FAQ6 = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper bg-light",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container pt-6 pb-14 pb-md-16",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-10",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-6 mb-0",
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "fs-16 text-uppercase text-primary mb-4",
                                    children: "FAQ"
                                }),
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "display-3 mb-4",
                                    children: "If you don't see an answer to your question, you can send us an email from our contact form."
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-6",
                                    children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare."
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "All FAQ",
                                    href: "#",
                                    className: "btn btn-primary rounded-pill"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "accordion-wrapper",
                                id: "accordion",
                                children: accordionList3.map((item)=>/*#__PURE__*/ _jsx(Accordion, {
                                        type: "shadow-lg",
                                        ...item
                                    }, item.no))
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "divider text-navy mx-n2",
                    children: /*#__PURE__*/ _jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1440 100",
                        children: /*#__PURE__*/ _jsx("path", {
                            fill: "currentColor",
                            d: "M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const faq_FAQ6 = ((/* unused pure expression or super */ null && (FAQ6)));

// EXTERNAL MODULE: ./icons/lineal/Shield.tsx
var Shield = __webpack_require__(8192);
;// CONCATENATED MODULE: ./icons/lineal/Design.tsx

const Design = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 409.6 332.7",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-yellow me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M350.9 54.2H58.7c-6.2.2-11.4-4.7-11.5-10.9S51.8 31.9 58 31.7h292.9c6.2-.2 11.4 4.7 11.5 10.9s-4.7 11.4-10.9 11.5c-.2.1-.4.1-.6.1zM239.8 328.9a11.182 11.182 0 01-10.6-14.8c2.8-8.3 16.2-47.4 25.6-63.6-9.5-10.1-37-40.3-49.9-66.1-12.1 23.4-39.5 54.4-50.1 66 10.1 16.5 22.7 54.9 25.4 63.6.4 1.2.6 2.4.6 3.7 0 6.2-5 11.2-11.2 11.2-4.9 0-9.3-3.2-10.7-7.9v-.1c-6.6-20.7-18.4-52.9-24.3-60.3-4.8-6.1-3.4-14.5-.8-19.8.5-.9 1.1-1.8 1.8-2.6 20.6-22.3 50.7-59.4 52.7-72.4.6-3.7 3.3-10.1 14.8-10.7 12.5-.7 16.6 4.8 17.8 9.4 5.7 21.5 40 60.3 52.7 73.4.8.8 1.5 1.8 2 2.8 2.6 5.1 4 13.3-.5 19.5-5.7 7.7-18.2 41.6-24.8 61.1-1.3 4.6-5.6 7.7-10.5 7.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 254.9c-6.2 0-11.2-5-11.2-11.2V167c.3-6.2 5.6-10.9 11.8-10.6 5.7.3 10.3 4.9 10.6 10.6v76.7c0 6.2-5 11.2-11.2 11.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M366.6 244.6c-6.2 0-11.2-5-11.2-11.2v-28.6c0-83.1-67.6-150.6-150.6-150.6S54.2 121.7 54.2 204.8v28.6c-.2 6.2-5.4 11.1-11.5 10.9-5.9-.2-10.7-4.9-10.9-10.9v-28.6c-.1-95.5 77.2-172.9 172.7-173 46 0 90.1 18.2 122.6 50.8 32.6 32.3 50.9 76.3 50.9 122.2v28.6c-.1 6.2-5.2 11.2-11.4 11.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M220 74.7h-30.4c-9.1 0-16.5-7.4-16.5-16.5V27.7c0-9.1 7.4-16.5 16.5-16.5H220c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M220 85.9h-30.4c-15.3 0-27.7-12.4-27.7-27.7V27.7c0-15.3 12.4-27.7 27.7-27.7H220c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.4-63.5c-2.9 0-5.3 2.4-5.3 5.3v30.5c0 2.9 2.4 5.3 5.3 5.3H220c2.9 0 5.3-2.4 5.3-5.3V27.7c0-2.9-2.4-5.3-5.3-5.3h-30.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M381.9 275.4h-30.5c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5v30.5c0 9.1-7.4 16.5-16.5 16.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M381.9 286.6h-30.5c-15.3 0-27.7-12.4-27.7-27.7v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3h-30.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M58.2 275.4H27.7c-9.1 0-16.5-7.4-16.5-16.5v-30.5c0-9.1 7.4-16.5 16.5-16.5h30.5c9.1 0 16.5 7.4 16.5 16.5V259c0 9.1-7.4 16.5-16.5 16.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M58.2 286.6H27.7C12.4 286.6 0 274.2 0 258.9v-30.5c0-15.3 12.4-27.7 27.7-27.7h30.5c15.3 0 27.7 12.4 27.7 27.7v30.5c0 15.3-12.4 27.7-27.7 27.7zm-30.5-63.4c-2.9 0-5.3 2.4-5.3 5.3V259c0 2.9 2.4 5.3 5.3 5.3h30.5c2.9 0 5.3-2.4 5.3-5.3v-30.5c0-2.9-2.4-5.3-5.3-5.3H27.7zm234.1 109.5h-114c-6.2 0-11.2-5-11.2-11.2 0-6.2 5-11.2 11.2-11.2h114c6.2 0 11.2 5 11.2 11.2 0 6.2-5 11.2-11.2 11.2z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Design = (Design);

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
;// CONCATENATED MODULE: ./icons/lineal/LightBulb.tsx

const LightBulb = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 321.7 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-blue me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M160.9 221.3c-19.1 0-37.4-7.3-51.3-20.4l51.3 127.2 51.3-127.2c-13.9 13.1-32.3 20.4-51.3 20.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M160.9 339.9c-4.8 0-9.1-2.9-10.9-7.4L98.6 205.3c-2.5-6 .3-12.9 6.3-15.4 4.3-1.8 9.3-.9 12.7 2.4 24.3 22.9 62.2 22.9 86.5 0 4.7-4.5 12.1-4.3 16.6.3 3.2 3.4 4.2 8.3 2.4 12.7l-51.4 127.2c-1.7 4.5-6 7.4-10.8 7.4zm-27.5-111.3l27.5 68.1 27.5-68.1c-17.9 5.9-37.2 5.9-55 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M86.7 316.1c-5.9 0-10.9-4.4-11.7-10.2-2.2-16.6-9.8-23.9-22.3-36.1l-2.9-2.8C28.8 246.5 0 218.4 0 151.6c0-42.9 17.1-81.9 48-110C77.7 14.8 117.7 0 160.9 0s83.2 14.8 112.8 41.6c6.7 6.1 12.8 12.7 18.3 19.9 3.1 4.1 6 8.3 8.6 12.6 1.3 2.2 2.6 4.4 3.8 6.6 2.4 4.5 4.6 9.1 6.5 13.8 1.4 3.5 2.7 7.2 3.9 10.8 4.7 14.9 7 30.5 7 46.2 0 27.9-4.9 51.2-15 71.2-.6 1.2-1.2 2.4-1.8 3.5-1.8 3.3-3.8 6.5-5.9 9.6-.7 1-1.4 2-2 3-2.6 3.6-5.3 7.1-8.5 10.7-5.6 6.5-11.5 12.2-16.6 17.2-4.7 4.5-12.1 4.4-16.6-.2-4.5-4.7-4.4-12.1.2-16.6 5-4.9 10.2-9.9 15.2-15.7 2.6-3 4.9-6 7.1-9 .6-.8 1.1-1.6 1.7-2.4 1.7-2.5 3.3-5.2 4.7-7.8.5-.9 1-1.9 1.5-2.8 8.4-16.6 12.5-36.4 12.5-60.6 0-13.2-2-26.4-5.9-39.1-1-3.1-2.1-6.1-3.3-9.1-1.6-3.9-3.4-7.8-5.4-11.6-1-1.9-2.1-3.8-3.2-5.6-6.2-10.2-13.8-19.4-22.6-27.3-25.3-22.9-59.8-35.5-97-35.5S89.1 36.1 63.8 59c-26 23.5-40.3 56.4-40.3 92.5 0 56.9 22.7 79.1 42.8 98.6l2.8 2.7c13.4 13 26.1 25.2 29.3 49.9.9 6.4-3.7 12.4-10.1 13.2-.6.2-1.1.2-1.6.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M141.9 397.8h38c3.8 0 7.4-1.5 10.1-4.2l13-13c2-2 3.4-4.6 3.9-7.4l12.4-63.7h-117l12.4 63.7c.6 2.8 2 5.4 4 7.4l13 13c2.7 2.7 6.3 4.2 10.2 4.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M179.8 409.6h-37.9c-6.9 0-13.6-2.7-18.5-7.7l-13-13c-3.7-3.7-6.2-8.4-7.2-13.5l-12.4-63.7c-1.2-6.4 2.9-12.5 9.3-13.8.7-.1 1.5-.2 2.2-.2h117c6.5 0 11.8 5.3 11.8 11.8 0 .8-.1 1.5-.2 2.2l-12.4 63.7c-1 5.1-3.5 9.8-7.2 13.5l-13 13c-4.8 4.9-11.5 7.7-18.5 7.7zm-63.2-88.4l9.7 49.7c.1.5.4 1 .7 1.4l13 13c.5.5 1.2.8 1.9.8h38c.7 0 1.4-.3 1.9-.8l13-13c.4-.4.6-.9.7-1.4l9.6-49.7h-88.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M241.5 321H80.2c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h161.4c6.5-.2 11.9 4.9 12.1 11.4.2 6.5-4.9 11.9-11.4 12.1h-.8zm-14.8 44.3H95c-6.5-.2-11.6-5.6-11.4-12.1.2-6.2 5.2-11.2 11.4-11.4h131.7c6.5.2 11.6 5.6 11.4 12.1-.2 6.2-5.2 11.2-11.4 11.4z"
            })
        ]
    });
};
/* harmony default export */ const lineal_LightBulb = (LightBulb);

;// CONCATENATED MODULE: ./icons/lineal/PieChartTwo.tsx

const PieChartTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 408.1 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-green me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M396.3 192.3h-33.4c-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6h19.7C363.2 71.1 268.1 7.3 170.1 26.6c-4.2.8-8.4 1.8-12.6 2.9L235.1 169h72c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6h-78.9c-4.2 0-8.1-2.3-10.1-6l-87.9-158c-3.1-5.6-1.1-12.6 4.5-15.7.7-.4 1.5-.7 2.3-1l8.1-2.5c107.8-33.1 222 27.4 255.1 135.2 2.7 8.7 4.8 17.6 6.3 26.6l1.3 8c1.1 6.3-3.2 12.3-9.5 13.3-.7.2-1.3.2-2 .2zM204.6 409.6c-20.4-.1-40.6-3.2-60.1-9.2l-8.1-2.5c-6.1-1.9-9.6-8.4-7.7-14.5.2-.8.6-1.5 1-2.2l88.4-158.3c2.1-3.7 5.9-5.9 10.1-5.9h33.2c6.4.2 11.4 5.5 11.2 11.9-.2 6.1-5.1 11.1-11.2 11.2H235l-78 139.8c96.8 26.3 196.6-30.9 222.9-127.8 1.1-4 2-8 2.8-12h-65.4c-6.4.2-11.7-4.8-11.9-11.2-.2-6.4 4.8-11.7 11.2-11.9h79.8c6.4 0 11.6 5.2 11.6 11.6 0 .6-.1 1.3-.2 1.9l-1.3 7.9C390 337 304.7 409.4 204.6 409.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M93 361.8C6 300.1-14.5 179.6 47.1 92.6c12.7-17.9 28.4-33.5 46.3-46.2l6.2-4.4 90 161.7-90.4 162.5-6.2-4.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M99.2 377.8c-2.4 0-4.7-.7-6.7-2.1l-6.2-4.4C-5.9 305.9-27.7 178.2 37.7 86c13.5-19 30-35.5 49.1-48.9l6.2-4.4c5.2-3.7 12.4-2.4 16.1 2.8.2.3.5.7.7 1.1l90 161.7c1.9 3.5 1.9 7.8 0 11.3L109.4 372c-1.6 2.9-4.3 4.9-7.6 5.7-.8 0-1.7.1-2.6.1zM95.8 59C15.6 119.1-.7 232.9 59.4 313.1c10.2 13.7 22.4 25.8 36 36.1l81-145.4L95.8 59z"
            })
        ]
    });
};
/* harmony default export */ const lineal_PieChartTwo = (PieChartTwo);

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
        Icon: lineal_LightBulb,
        title: "Collect Ideas",
        description: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
    },
    {
        id: 2,
        Icon: lineal_PieChartTwo,
        title: "Data Analysis",
        description: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
    },
    {
        id: 3,
        Icon: lineal_Design,
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
        Icon: lineal_AwardTwo,
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
const demo_27_pricingList = [
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
    pricingList: demo_27_pricingList,
    faqList
});

;// CONCATENATED MODULE: ./components/blocks/faq/FAQ7.tsx

// -------- data -------- //

const FAQ7 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row",
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xl-11 mx-auto",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row gx-md-8 gx-xl-12 gy-10 px-lg-5",
                children: data.faqList.map(({ id , title , description , Icon  })=>/*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "d-flex flex-row",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx(Icon, {})
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "fs-20 ls-sm",
                                            children: title
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mb-0",
                                            children: description
                                        })
                                    ]
                                })
                            ]
                        })
                    }, id))
            })
        })
    });
};
/* harmony default export */ const faq_FAQ7 = ((/* unused pure expression or super */ null && (FAQ7)));

;// CONCATENATED MODULE: ./components/blocks/faq/index.ts










/***/ }),

/***/ 1055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Oo": () => (/* reexport */ footer_Footer15)
});

// UNUSED EXPORTS: Footer1, Footer10, Footer11, Footer12, Footer13, Footer14, Footer16, Footer17, Footer18, Footer2, Footer3, Footer4, Footer5, Footer6, Footer7, Footer8, Footer9

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/reuseable/SocialLinks.tsx
var reuseable_SocialLinks = __webpack_require__(2928);
// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(9066);
;// CONCATENATED MODULE: ./data/footer.ts
const footer_footerNav = [
    {
        title: "About Us",
        url: "#"
    },
    {
        title: "Our Story",
        url: "#"
    },
    {
        title: "Projects",
        url: "#"
    },
    {
        title: "Terms of Use",
        url: "#"
    },
    {
        title: "Privacy Policy",
        url: "#"
    }
];
const footer_helps = [
    {
        id: 1,
        title: "Support",
        url: "#"
    },
    {
        id: 2,
        title: "Get Started",
        url: "#"
    },
    {
        id: 3,
        title: "Terms of Use",
        url: "#"
    },
    {
        id: 4,
        title: "Privacy Policy",
        url: "#"
    }
];
const footer_learnMore = [
    {
        id: 1,
        title: "About Us",
        url: "#"
    },
    {
        id: 2,
        title: "Our Story",
        url: "#"
    },
    {
        id: 3,
        title: "Projects",
        url: "#"
    },
    {
        id: 4,
        title: "Pricing",
        url: "#"
    },
    {
        id: 5,
        title: "Features",
        url: "#"
    }
];
const footer_tags = [
    {
        id: 1,
        title: "Still Life",
        url: "#"
    },
    {
        id: 2,
        title: "Urban",
        url: "#"
    },
    {
        id: 3,
        title: "Nature",
        url: "#"
    },
    {
        id: 4,
        title: "Landscape",
        url: "#"
    }
];
const footer_categories = [
    {
        id: 1,
        post: 21,
        title: "Lifestyle",
        url: "#"
    },
    {
        id: 2,
        post: 19,
        title: "Photography",
        url: "#"
    },
    {
        id: 3,
        post: 16,
        title: "Journal",
        url: "#"
    }
];
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (footer_footerNav)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer1.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer1 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-navy text-inverse",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-15 pt-md-17 pb-13 pb-md-15",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-lg-flex flex-row align-items-lg-center",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            className: "display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white",
                            children: "Join our community by using our services and grow your business."
                        }),
                        /*#__PURE__*/ _jsx(NextLink, {
                            href: "#",
                            title: "Try It For Free",
                            className: "btn btn-primary rounded-pill mb-0 text-nowrap"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-11 mb-12"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        className: "mb-4",
                                        src: "/img/logo-light.png",
                                        srcSet: "/img/logo-light@2x.png 2x",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsxs("p", {
                                        className: "mb-4",
                                        children: [
                                            "\xa9 2022 Sandbox. ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-none d-lg-block"
                                            }),
                                            "All rights reserved."
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(SocialLinks, {
                                        className: "nav social social-white"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        className: "pe-xl-15 pe-xxl-17",
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx(NextLink, {
                                        title: "info@email.com",
                                        href: "mailto:#"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Learn More"
                                    }),
                                    /*#__PURE__*/ _jsx("ul", {
                                        className: "list-unstyled mb-0",
                                        children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx(NextLink, {
                                                    title: title,
                                                    href: url
                                                })
                                            }, title))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Our Newsletter"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-5",
                                        children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "newsletter-wrapper",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "mc_embed_signup2",
                                            children: /*#__PURE__*/ _jsx("form", {
                                                method: "post",
                                                target: "_blank",
                                                className: "validate dark-fields",
                                                id: "mc-embedded-subscribe-form2",
                                                name: "mc-embedded-subscribe-form",
                                                action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    id: "mc_embed_signup_scroll2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "mc-field-group input-group form-floating",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "email",
                                                                    name: "EMAIL",
                                                                    id: "mce-EMAIL2",
                                                                    placeholder: "Email Address",
                                                                    className: "required email form-control"
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "mce-EMAIL2",
                                                                    children: "Email Address"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    value: "Join",
                                                                    type: "submit",
                                                                    name: "subscribe",
                                                                    id: "mc-embedded-subscribe2",
                                                                    className: "btn btn-primary"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            id: "mce-responses2",
                                                            className: "clear",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-error-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-success-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            style: {
                                                                position: "absolute",
                                                                left: "-5000px"
                                                            },
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ _jsx("input", {
                                                                type: "text",
                                                                tabIndex: -1,
                                                                name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer1 = ((/* unused pure expression or super */ null && (Footer1)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact1.tsx

const Contact1 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gy-10 gy-sm-13 gx-lg-3 align-items-center",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "col-md-8 col-lg-6 position-relative",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "shape bg-dot primary rellax w-17 h-21",
                        style: {
                            top: "-2rem",
                            left: "-1.9rem"
                        }
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "shape rounded bg-soft-primary rellax d-md-block",
                        style: {
                            width: "85%",
                            height: "90%",
                            right: "-1.5rem",
                            bottom: "-1.8rem"
                        }
                    }),
                    /*#__PURE__*/ _jsx("figure", {
                        className: "rounded",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/img/photos/about14.jpg",
                            srcSet: "/img/photos/about14@2x.jpg 2x",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5 col-xl-4 offset-lg-1",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "fs-16 text-uppercase text-line text-primary mb-3",
                        children: "Get In Touch"
                    }),
                    /*#__PURE__*/ _jsx("h2", {
                        className: "display-4 mb-8",
                        children: "Convinced yet? Let's make something great together."
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "icon text-primary fs-28 me-6 mt-n1",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-location-pin-alt"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-1",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ _jsxs("address", {
                                        children: [
                                            "Moonshine St. 14/05 Light City, ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-none d-md-block"
                                            }),
                                            "London, United Kingdom"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "icon text-primary fs-28 me-6 mt-n1",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-phone-volume"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-1",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "00 (123) 456 78 90"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "icon text-primary fs-28 me-6 mt-n1",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-envelope"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-1",
                                        children: "E-mail"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "mailto:sandbox@email.com",
                                            className: "link-body",
                                            children: "sandbox@email.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact1 = ((/* unused pure expression or super */ null && (Contact1)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact2.tsx


const Contact2_Contact2 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-0",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block",
                style: {
                    backgroundImage: "url(/img/photos/tm1.jpg)"
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "p-10 p-md-11 p-lg-13",
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            className: "display-4 mb-3",
                            children: "Let’s Talk"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "lead fs-lg",
                            children: "Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                        }),
                        /*#__PURE__*/ _jsx(NextLink, {
                            title: "Join Us",
                            href: "#",
                            className: "btn btn-primary rounded-pill mt-2"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const contact_Contact2 = ((/* unused pure expression or super */ null && (Contact2_Contact2)));

// EXTERNAL MODULE: ./components/elements/tiles/index.tsx + 11 modules
var tiles = __webpack_require__(7211);
;// CONCATENATED MODULE: ./components/blocks/contact/Contact3.tsx



const Contact3 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gy-10 gx-lg-8 gx-xl-12 align-items-center",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-7 position-relative",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "shape bg-dot primary rellax w-18 h-18",
                        style: {
                            top: 0,
                            left: "-1.4rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ _jsx(Tiles3, {})
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "display-4 mb-3",
                        children: "Let’s Talk"
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                        className: "lead fs-lg",
                        children: [
                            "Lets make something great together. We are ",
                            /*#__PURE__*/ _jsx("span", {
                                className: "underline",
                                children: "trusted by"
                            }),
                            " over 5000+ clients. Join them by using our services and grow your business."
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Join Us",
                        href: "#",
                        className: "btn btn-primary rounded-pill mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact3 = ((/* unused pure expression or super */ null && (Contact3)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact4.tsx


const Contact4 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-7",
                children: /*#__PURE__*/ _jsx("figure", {
                    children: /*#__PURE__*/ _jsx("img", {
                        alt: "contact",
                        className: "w-auto",
                        src: "/img/illustrations/i5.png",
                        srcSet: "/img/illustrations/i5@2x.png 2x"
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "fs-16 text-uppercase text-muted mb-3 ",
                        children: "Let’s Talk"
                    }),
                    /*#__PURE__*/ _jsx("h3", {
                        className: "display-4 mb-5 ",
                        children: "Let's make something great together. We are trusted by over 5000+ clients."
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Join Us",
                        href: "#",
                        className: "btn btn-primary rounded-pill mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact4 = ((/* unused pure expression or super */ null && (Contact4)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact5.tsx



const Contact5 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gy-10 gx-lg-8 gx-xl-12 mb-10 mb-md-14 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-7 position-relative",
                children: /*#__PURE__*/ _jsx(Tiles3, {})
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "display-4 mb-3",
                        children: "Let’s Talk"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "lead fs-lg",
                        children: "Let’s make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Join Us",
                        href: "#",
                        className: "btn btn-primary rounded mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact5 = ((/* unused pure expression or super */ null && (Contact5)));

// EXTERNAL MODULE: ./components/reuseable/IconBox.tsx
var reuseable_IconBox = __webpack_require__(8369);
;// CONCATENATED MODULE: ./components/blocks/contact/Contact6.tsx


const Contact6 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-14 py-md-17",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ _jsx("figure", {
                            children: /*#__PURE__*/ _jsx("img", {
                                className: "w-auto",
                                src: "/img/illustrations/i5.png",
                                srcSet: "/img/illustrations/i5@2x.png 2x",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-7",
                                children: "Got any questions? Don't hesitate to get in touch."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-4 mt-n1",
                                            icon: "uil-location-pin-alt"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ _jsx("address", {
                                                children: "Moonshine St. 14/05 Light City, London"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-4 mt-n1",
                                            icon: "uil-phone-volume"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "Phone"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "00 (123) 456 78 90"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-4 mt-n1",
                                            icon: "uil-envelope"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "E-mail"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "mb-0",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "mailto:sandbox@email.com",
                                                    className: "link-body",
                                                    children: "sandbox@email.com"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const contact_Contact6 = ((/* unused pure expression or super */ null && (Contact6)));

;// CONCATENATED MODULE: ./icons/lineal/TeleMarketer.tsx

const TeleMarketer_TeleMarketer = ({ className  })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 320.8 409.6",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md mb-4"}`,
        children: [
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-fill",
                d: "M276.1 367.9v-8.5c0-63.6-52.1-115.7-115.7-115.7s-115.7 52-115.7 115.7v8.5c0 16.6 13.4 30 30 30h171.5c16.5 0 29.9-13.4 29.9-30z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M246.1 409.6H74.6c-23 0-41.7-18.7-41.7-41.7v-8.5c0-70.4 57.1-127.5 127.5-127.5S287.9 289 287.9 359.4v8.5c-.1 23-18.7 41.7-41.8 41.7zm-85.7-154.2c-57.4.1-103.9 46.6-104 104v8.5c0 10.1 8.2 18.2 18.2 18.2h171.5c10.1 0 18.2-8.2 18.2-18.2v-8.5c0-57.5-46.5-104-103.9-104zm145.5-109.9h-23.5c0-67.4-54.6-122-122-122s-122 54.6-122 122H14.9C14.9 65.3 80.2 0 160.4 0s145.5 65.3 145.5 145.5z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M160.4 251.3c-57 0-103.2-46.2-103.2-103.2S103.4 44.9 160.4 44.9s103.2 46.2 103.2 103.2c-.1 57-46.3 103.1-103.2 103.2zm0-182.9c-44 0-79.7 35.7-79.7 79.7s35.7 79.7 79.7 79.7 79.7-35.7 79.7-79.7c-.1-44-35.7-79.6-79.7-79.7z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-fill",
                d: "M68.3 130.4c0-5.6-2.9-10.8-7.6-13.8-15-9.4-34.7-4.9-44.1 10.1-3.2 5.1-4.9 11.1-4.9 17.1v21.5c0 17.7 14.4 32 32.1 32.1 6 0 11.8-1.7 16.9-4.9 4.7-3 7.6-8.2 7.6-13.8v-48.3z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M43.8 209.2C19.6 209.1 0 189.5 0 165.3v-21.5C0 119.6 19.5 100 43.7 100c8.2 0 16.3 2.3 23.3 6.7 8.2 5.1 13.1 14.1 13.1 23.8v48.4c.1 9.7-4.9 18.7-13.1 23.8-6.9 4.2-15 6.5-23.2 6.5zm0-85.8c-11.2 0-20.3 9.1-20.4 20.4v21.5c0 11.2 9.1 20.3 20.4 20.4 3.8 0 7.5-1.1 10.7-3.1 1.3-.9 2.1-2.3 2.1-3.9v-48.3c0-1.6-.8-3-2.1-3.9-3.2-2-6.9-3-10.7-3.1z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-fill",
                d: "M252.4 130.4c0-5.6 2.9-10.8 7.6-13.8 15-9.4 34.7-4.9 44.1 10.1 3.2 5.1 4.9 11.1 4.9 17.1v21.5c0 17.7-14.4 32-32.1 32.1-6 0-11.8-1.7-16.9-4.9-4.7-3-7.6-8.2-7.6-13.8v-48.3z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M276.9 209.2c-8.2 0-16.2-2.3-23.1-6.6-8.2-5.1-13.2-14.1-13.1-23.8v-48.4c-.1-9.7 4.9-18.7 13.1-23.8 20.5-12.8 47.5-6.6 60.3 13.9 4.4 7 6.7 15.1 6.7 23.3v21.5c0 24.2-19.6 43.8-43.9 43.9zm0-85.8c-3.8 0-7.5 1.1-10.7 3.1-1.3.9-2.1 2.3-2.1 3.9v48.4c0 1.6.8 3 2.1 3.9 9.5 5.9 22.1 3 28-6.5 2-3.2 3.1-7 3.1-10.8v-21.5c0-11.3-9.1-20.4-20.4-20.5z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M251.2 195.9h-83.3c-6.5 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7h83.3c6.5 0 11.7 5.3 11.7 11.7 0 6.5-5.3 11.7-11.7 11.7z"
            })
        ]
    });
};
/* harmony default export */ const lineal_TeleMarketer = ((/* unused pure expression or super */ null && (TeleMarketer_TeleMarketer)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact7.tsx



const Contact7 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-light angled upper-end lower-end",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-18 pb-14 pt-md-19 pb-md-16",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-md-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "shape bg-dot primary rellax w-17 h-21",
                                style: {
                                    top: "-2rem",
                                    left: "-1.4rem"
                                }
                            }),
                            /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/about4.jpg",
                                    srcSet: "/img/photos/about4@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ _jsx(TeleMarketer, {
                                className: "icon-svg-md mb-4"
                            }),
                            /*#__PURE__*/ _jsx("h2", {
                                className: "display-4 mb-8",
                                children: "Convinced yet? Let's make something great together."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-6 mt-n1",
                                            icon: "uil-location-pin-alt"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ _jsxs("address", {
                                                children: [
                                                    "Moonshine St. 14/05 Light City, ",
                                                    /*#__PURE__*/ _jsx("br", {
                                                        className: "d-none d-md-block"
                                                    }),
                                                    "London, United Kingdom"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-6 mt-n1",
                                            icon: "uil-phone-volume"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "Phone"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "00 (123) 456 78 90"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx(IconBox, {
                                            className: "icon text-primary fs-28 me-6 mt-n1",
                                            icon: "uil-envelope"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "mb-1",
                                                children: "E-mail"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "mb-0",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "mailto:sandbox@email.com",
                                                    className: "link-body",
                                                    children: "sandbox@email.com"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const contact_Contact7 = ((/* unused pure expression or super */ null && (Contact7)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact8.tsx



const Contact8 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gy-10 gx-lg-8 gx-xl-12 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-7 position-relative",
                children: /*#__PURE__*/ _jsx(Tiles3, {})
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "display-4 mb-3",
                        children: "Let’s Talk"
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                        className: "lead fs-lg",
                        children: [
                            "Let’s make something great together. We are ",
                            /*#__PURE__*/ _jsx("span", {
                                className: "underline",
                                children: "trusted by"
                            }),
                            " over 5000+ clients. Join them by using our services and grow your business."
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Join Us",
                        href: "#",
                        className: "btn btn-primary rounded-pill mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact8 = ((/* unused pure expression or super */ null && (Contact8)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact9.tsx


const Contact9 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay",
        style: {
            backgroundImage: "url(/img/photos/bg10.jpg)"
        },
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-18",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-lg-11 col-xl-10 col-xxl-8 mx-auto",
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            className: "fs-16 text-uppercase text-white mb-3",
                            children: "Join Our Community"
                        }),
                        /*#__PURE__*/ _jsx("h3", {
                            className: "display-4 mb-6 text-white px-lg-5 px-xxl-0",
                            children: "We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                        }),
                        /*#__PURE__*/ _jsx(NextLink, {
                            title: "Join Us",
                            href: "#",
                            className: "btn btn-white rounded-pill mb-0 text-nowrap"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const contact_Contact9 = ((/* unused pure expression or super */ null && (Contact9)));

;// CONCATENATED MODULE: ./icons/lineal/Email.tsx

const Email_Email = ({ className  })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 512 395.7",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm mb-4"}`,
        children: [
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-fill",
                d: "M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z"
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "lineal-stroke",
                d: "M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Email = ((/* unused pure expression or super */ null && (Email_Email)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact10.tsx



const Contact10 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "card bg-soft-primary mb-8",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "card-body p-12",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row gx-md-8 gx-xl-12 gy-10",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ _jsx(Email, {}),
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: "display-4 mb-3 pe-lg-10",
                                            children: "If you like what you see, let's work together."
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "lead pe-lg-12 mb-0",
                                            children: "I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ _jsxs("form", {
                                        className: "contact-form needs-validation",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "messages"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "row gx-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    type: "text",
                                                                    name: "name",
                                                                    id: "frm_name",
                                                                    placeholder: "Jane",
                                                                    className: "form-control border-0",
                                                                    "data-error": "First Name is required."
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "frm_name",
                                                                    children: "Name *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please enter your name."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    type: "email",
                                                                    name: "email",
                                                                    id: "frm_email",
                                                                    className: "form-control border-0",
                                                                    placeholder: "jane.doe@example.com",
                                                                    "data-error": "Valid email is required."
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "frm_email",
                                                                    children: "Email *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "valid-feedback",
                                                                    children: "Looks good!"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please provide a valid email address."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("textarea", {
                                                                    required: true,
                                                                    name: "message",
                                                                    id: "frm_message",
                                                                    placeholder: "Your message",
                                                                    className: "form-control border-0",
                                                                    style: {
                                                                        height: 150
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "frm_message",
                                                                    children: "Message *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "valid-feedback",
                                                                    children: "Looks good!"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please enter your messsage."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "submit",
                                                            value: "Send message",
                                                            className: "btn btn-outline-primary rounded-pill btn-send mb-3"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Sandbox. All rights reserved."
                        }),
                        /*#__PURE__*/ _jsx(SocialLinks, {
                            className: "nav social social-muted mb-0 text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const contact_Contact10 = ((/* unused pure expression or super */ null && (Contact10)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact11.tsx

const Contact11 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-3 gy-10 mb-15 mb-md-18 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    children: /*#__PURE__*/ _jsx("img", {
                        className: "w-auto",
                        src: "/img/illustrations/3d3.png",
                        srcSet: "/img/illustrations/3d3@2x.png 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5 offset-lg-1",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "fs-16 text-uppercase text-gradient gradient-1 mb-3",
                        children: "Contact Us"
                    }),
                    /*#__PURE__*/ _jsx("h3", {
                        className: "display-4 mb-8",
                        children: "Got any questions? Don't hesitate to get in touch."
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsxs("svg", {
                                    viewBox: "0 0 256 255.84",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "svg-inject icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4",
                                    style: {
                                        width: "1.5rem",
                                        height: "1.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-secondary",
                                            d: "M10.67 255.84a10.68 10.68 0 01-7.54-18.23l86.08-86a10.67 10.67 0 1115.08 15.1l-86.08 86a10.61 10.61 0 01-7.54 3.13z"
                                        }),
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-primary",
                                            d: "M250.54 80.72L175.12 5.29a19.12 19.12 0 00-26.4 0L138.3 15.71a27.18 27.18 0 00-6.61 27.93A11.25 11.25 0 01129 55.21L98.38 85.79a13.3 13.3 0 01-9.38 3.9H76.46a29.11 29.11 0 00-20.73 8.59l-5.06 5.06a18.66 18.66 0 000 26.4l75.42 75.42a18.64 18.64 0 0026.4 0l5.06-5.07a29.12 29.12 0 008.59-20.73v-12.5a13.43 13.43 0 013.91-9.42l30.57-30.58a11.24 11.24 0 0111.57-2.74 27.14 27.14 0 0027.92-6.6l10.42-10.42a18.65 18.65 0 000-26.38z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-0",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        children: "Moonshine St. 14/05 Light City, London"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsxs("svg", {
                                    viewBox: "0 0 256.01 256",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "svg-inject icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4",
                                    style: {
                                        width: "1.5rem",
                                        height: "1.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-secondary",
                                            d: "M128 106.67a128.15 128.15 0 00-128 128A21.36 21.36 0 0021.34 256h213.32A21.36 21.36 0 00256 234.67c0-70.57-57.42-128-128-128zM128 224a42.67 42.67 0 1142.67-42.67A42.71 42.71 0 01128 224z"
                                        }),
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-primary",
                                            d: "M33.45 117.34a22.89 22.89 0 01-12.56-3.69 50.7 50.7 0 01-6.61-5.12A43.84 43.84 0 01.74 68.3C5.45 43.31 33.27 27.06 53.8 17A169.32 169.32 0 01128 0c34.77 0 69.86 10.62 96.26 29.14 11.95 8.4 26.22 20.11 30.4 36.41a44 44 0 01-12.93 43 49.9 49.9 0 01-6.49 5 23.84 23.84 0 01-26.87-.76L171.1 86.18c-8.32-5.94-11.64-16.42-8.08-25.52.19-.53.41-1 .64-1.56a113 113 0 00-71.33 0l.67 1.54c3.57 9.1.22 19.6-8.08 25.52l-37.3 26.61a24.15 24.15 0 01-14.14 4.57z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-0",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "00 (123) 456 78 90"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "d-flex flex-row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsxs("svg", {
                                    viewBox: "0 0 256 202.66",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "svg-inject icon-svg icon-svg-xs solid-duo text-grape-fuchsia mt-1 me-4",
                                    style: {
                                        width: "1.5rem",
                                        height: "1.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-primary",
                                            d: "M192 0H21.33A21.36 21.36 0 000 21.33v96a21.36 21.36 0 0021.33 21.33H192a21.36 21.36 0 0021.33-21.33v-96A21.36 21.36 0 00192 0zm0 48l-73.6 37.12A25.12 25.12 0 01106.67 88a24.39 24.39 0 01-11.84-3L21.34 48V30.08l80.85 40.75a9.64 9.64 0 008.85.11l81-40.86z"
                                        }),
                                        /*#__PURE__*/ _jsx("path", {
                                            className: "fill-secondary",
                                            d: "M234.67 64v53.33A42.72 42.72 0 01192 160H42.67v21.33A21.36 21.36 0 0064 202.66h170.67A21.36 21.36 0 00256 181.33v-96A21.36 21.36 0 00234.67 64z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-0",
                                        children: "E-mail"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "mailto:sandbox@email.com",
                                            className: "link-body",
                                            children: "sandbox@email.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact11 = ((/* unused pure expression or super */ null && (Contact11)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact12.tsx

const Contact12 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        id: "pricing",
        children: /*#__PURE__*/ _jsx("div", {
            className: "wrapper image-wrapper bg-image bg-overlay",
            style: {
                backgroundImage: "url(/img/photos/bg36.jpg)"
            },
            children: /*#__PURE__*/ _jsx("div", {
                className: "container py-15 py-md-17",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-xl-9 mx-auto",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "card border-0 bg-white-900",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "card-body py-lg-13 px-lg-16",
                                children: [
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "display-5 mb-3 text-center",
                                        children: "Request Photography Pricing"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead fs-lg text-center mb-10",
                                        children: "For more information please get in touch using the form below:"
                                    }),
                                    /*#__PURE__*/ _jsxs("form", {
                                        className: "contact-form needs-validation",
                                        method: "post",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "messages"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "row gx-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    type: "text",
                                                                    name: "name",
                                                                    id: "form_name",
                                                                    placeholder: "Name",
                                                                    className: "form-control bg-white-700 border-0"
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "form_name",
                                                                    children: "Name *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "valid-feedback",
                                                                    children: "Looks good!"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please enter your name."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    required: true,
                                                                    type: "email",
                                                                    name: "email",
                                                                    id: "form_email",
                                                                    placeholder: "jane.doe@example.com",
                                                                    className: "form-control bg-white-700 border-0"
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "form_email",
                                                                    children: "Email *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "valid-feedback",
                                                                    children: "Looks good!"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please provide a valid email address."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "form-floating mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("textarea", {
                                                                    required: true,
                                                                    name: "message",
                                                                    id: "form_message",
                                                                    placeholder: "Your message",
                                                                    className: "form-control bg-white-700 border-0",
                                                                    style: {
                                                                        height: 150
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "form_message",
                                                                    children: "Message *"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "valid-feedback",
                                                                    children: "Looks good!"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: "Please enter your messsage."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-12 text-center",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "submit",
                                                            className: "btn btn-primary rounded-pill btn-send",
                                                            value: "Send message"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const contact_Contact12 = ((/* unused pure expression or super */ null && (Contact12)));

;// CONCATENATED MODULE: ./components/blocks/contact/Contact13.tsx


const Contact13 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-3 gy-10 gy-lg-0 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    children: /*#__PURE__*/ _jsx("img", {
                        className: "w-auto",
                        src: "/img/illustrations/3d3.png",
                        srcSet: "/img/illustrations/3d3@2x.png 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-5 ms-auto",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "fs-16 text-uppercase text-primary mb-3",
                        children: "Let’s Talk"
                    }),
                    /*#__PURE__*/ _jsx("h3", {
                        className: "display-4 mb-3",
                        children: "Let's make something great together. We are trusted by over 5000+ clients."
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                    }),
                    /*#__PURE__*/ _jsx(NextLink, {
                        title: "Join Us",
                        href: "#",
                        className: "btn btn-primary rounded mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contact_Contact13 = ((/* unused pure expression or super */ null && (Contact13)));

;// CONCATENATED MODULE: ./components/blocks/contact/index.ts















;// CONCATENATED MODULE: ./components/blocks/footer/Footer2.tsx



const Footer2 = ()=>{
    return /*#__PURE__*/ _jsxs("footer", {
        className: "bg-soft-primary",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14",
                    children: /*#__PURE__*/ _jsx(Contact2, {})
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "container pb-12 text-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row mt-n10 mt-lg-0",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-xl-10 mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "row mb-3",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: "Address"
                                                }),
                                                /*#__PURE__*/ _jsxs("address", {
                                                    children: [
                                                        "Moonshine St. 14/05 ",
                                                        /*#__PURE__*/ _jsx("br", {
                                                            className: "d-none d-md-block"
                                                        }),
                                                        " Light City, London, UK"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: "Phone"
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    children: [
                                                        "00 (123) 456 78 90 ",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "00 (987) 654 32 10"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: "E-mail"
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "mailto:sandbox@email.com",
                                                    className: "link-body",
                                                    children: "sandbox@email.com"
                                                }),
                                                /*#__PURE__*/ _jsx("br", {
                                                    className: "d-none d-md-block"
                                                }),
                                                /*#__PURE__*/ _jsx("a", {
                                                    href: "mailto:help@sandbox.com",
                                                    className: "link-body",
                                                    children: "help@sandbox.com"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "\xa9 2022 Sandbox. All rights reserved."
                            }),
                            /*#__PURE__*/ _jsx(SocialLinks, {
                                className: "nav social justify-content-center"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer2 = ((/* unused pure expression or super */ null && (Footer2)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer3.tsx



// -------- data -------- //

// =================================================
const Footer3 = ({ hiddenNewsletter  })=>{
    // common links section
    const widget = (list, title)=>{
        return /*#__PURE__*/ _jsxs("div", {
            className: "widget",
            children: [
                /*#__PURE__*/ _jsx("h4", {
                    className: "widget-title mb-3",
                    children: title
                }),
                /*#__PURE__*/ _jsx("ul", {
                    className: "list-unstyled text-reset mb-0",
                    children: list.map(({ url , title , id  })=>/*#__PURE__*/ _jsx("li", {
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                href: url,
                                title: title
                            })
                        }, id))
                })
            ]
        });
    };
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-gradient-reverse-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-13 pt-md-15 pb-7",
            children: [
                !hiddenNewsletter && /*#__PURE__*/ _jsx("div", {
                    className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mb-13",
                    style: {
                        backgroundImage: "url(/img/photos/bg2.jpg)"
                    },
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "card-body p-9 p-xl-11",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row align-items-center gy-6",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "col-lg-7",
                                    children: [
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "display-5 text-white",
                                            children: "Subscribe to our newsletter"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "lead pe-lg-12 mb-0 text-white",
                                            children: "Subscribe to our newsletter to get our news & deals delivered to you. Dont worry, we hate spam and we respect your privacy."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-5 col-xl-4 offset-xl-1",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "newsletter-wrapper",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "mc_embed_signup2",
                                            children: /*#__PURE__*/ _jsx("form", {
                                                action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                                method: "post",
                                                id: "mc-embedded-subscribe-form2",
                                                name: "mc-embedded-subscribe-form",
                                                className: "validate dark-fields",
                                                target: "_blank",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    id: "mc_embed_signup_scroll2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "mc-field-group input-group form-floating",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "email",
                                                                    name: "EMAIL",
                                                                    id: "mce-EMAIL2",
                                                                    placeholder: "Email Address",
                                                                    className: "required email form-control"
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "mce-EMAIL2",
                                                                    className: "position-absolute",
                                                                    children: "Email Address"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "submit",
                                                                    name: "subscribe",
                                                                    id: "mc-embedded-subscribe2",
                                                                    className: "btn btn-primary"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            id: "mce-responses2",
                                                            className: "clear",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-error-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-success-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            style: {
                                                                position: "absolute",
                                                                left: -5000
                                                            },
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ _jsx("input", {
                                                                type: "text",
                                                                name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc",
                                                                tabIndex: -1
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "h2 mb-3 ",
                                        children: "Join the Community"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead mb-5",
                                        children: "Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                                    }),
                                    /*#__PURE__*/ _jsx(NextLink, {
                                        title: "Join Us",
                                        href: "#",
                                        className: "btn btn-primary rounded-pill"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2 offset-lg-2",
                            children: widget(helps, "Need Help?")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: widget(learnMore, "Learn More")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "mailto:first.last@email.com",
                                        className: "link-body",
                                        children: "info@email.com"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-13 mt-md-15 mb-7"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Sandbox. All rights reserved."
                        }),
                        /*#__PURE__*/ _jsx(SocialLinks, {
                            className: "nav social text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer3 = ((/* unused pure expression or super */ null && (Footer3)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer4.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer4 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-light",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-13 py-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-dark.png",
                                    srcSet: "/img/logo-dark@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#",
                                    className: "link-body"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled text-reset mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer4 = ((/* unused pure expression or super */ null && (Footer4)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer5.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer5 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-15 pt-md-17 pb-13 pb-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-light.png",
                                    srcSet: "/img/logo-light@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social social-white"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer5 = ((/* unused pure expression or super */ null && (Footer5)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer6.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer6 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse mt-5 mt-md-16",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-13 py-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-light.png",
                                    srcSet: "/img/logo-light@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social social-white"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer6 = ((/* unused pure expression or super */ null && (Footer6)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer7.tsx



// -------- data -------- //

// common links section
const widget = (list, title)=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "widget",
        children: [
            /*#__PURE__*/ _jsx("h4", {
                className: "widget-title mb-3",
                children: title
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: "list-unstyled text-reset mb-0",
                children: list.map(({ url , title , id  })=>/*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx(NextLink, {
                            href: url,
                            title: title
                        })
                    }, id))
            })
        ]
    });
};
const Footer7 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-light",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-14 pt-md-17 pb-7",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "h2 mb-3 ",
                                        children: "Join the Community"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead mb-5",
                                        children: "Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                                    }),
                                    /*#__PURE__*/ _jsx(NextLink, {
                                        title: "Join Us",
                                        href: "#",
                                        className: "btn btn-primary rounded-pill"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2 offset-lg-2",
                            children: widget(helps, "Need Help?")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: widget(learnMore, "Learn More")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "mailto:first.last@email.com",
                                        className: "link-body",
                                        children: "info@email.com"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-13 mt-md-15 mb-7"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Sandbox. All rights reserved."
                        }),
                        /*#__PURE__*/ _jsx(SocialLinks, {
                            className: "nav social text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer7 = ((/* unused pure expression or super */ null && (Footer7)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer8.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer8 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-13 py-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-light.png",
                                    srcSet: "/img/logo-light@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social social-white"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer8 = ((/* unused pure expression or super */ null && (Footer8)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer9.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer9 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-13 py-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-light.png",
                                    srcSet: "/img/logo-light@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social social-white"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-2 offset-lg-2",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3 text-white",
                                    children: "Need Help?"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled mb-0",
                                    children: helps.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-2",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-2",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3 text-white",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer9 = ((/* unused pure expression or super */ null && (Footer9)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer10.tsx



// -------- data -------- //

const Footer10 = ()=>{
    // common links section
    const widget = (list, title)=>{
        return /*#__PURE__*/ _jsxs("div", {
            className: "widget",
            children: [
                /*#__PURE__*/ _jsx("h4", {
                    className: "widget-title text-white mb-3",
                    children: title
                }),
                /*#__PURE__*/ _jsx("ul", {
                    className: "list-unstyled text-reset mb-0",
                    children: list.map(({ url , title , id  })=>/*#__PURE__*/ _jsx("li", {
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                href: url,
                                title: title
                            })
                        }, id))
                })
            ]
        });
    };
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-20 pt-lg-21 pb-7",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "h2 mb-3 text-white",
                                        children: "Join the Community"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead mb-5",
                                        children: "Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                                    }),
                                    /*#__PURE__*/ _jsx(NextLink, {
                                        title: "Join Us",
                                        href: "#",
                                        className: "btn btn-white rounded-pill"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2 offset-lg-2",
                            children: widget(helps, "Need Help?")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: widget(learnMore, "Learn More")
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-2",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "mailto:first.last@email.com",
                                        children: "info@email.com"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-13 mt-md-15 mb-7"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Sandbox. All rights reserved."
                        }),
                        /*#__PURE__*/ _jsx(SocialLinks, {
                            className: "nav social social-white text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer10 = ((/* unused pure expression or super */ null && (Footer10)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer11.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer11 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-light",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pb-13 pb-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-dark.png",
                                    srcSet: "/img/logo-dark@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "info@email.com",
                                    href: "mailto:#",
                                    className: "link-body"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled text-reset mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary btn-gradient gradient-1"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer11 = ((/* unused pure expression or super */ null && (Footer11)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer12.tsx



// -------- data -------- //

const Footer12 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-13 py-md-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-6 gy-lg-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("img", {
                                    className: "mb-4",
                                    src: "/img/logo-light.png",
                                    srcSet: "/img/logo-light@2x.png 2x",
                                    alt: ""
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                        "\xa9 2022 Sandbox. ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-lg-block"
                                        }),
                                        "All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(SocialLinks, {
                                    className: "nav social social-white"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ _jsx("address", {
                                    className: "pe-xl-15 pe-xxl-17",
                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                }),
                                /*#__PURE__*/ _jsx("a", {
                                    href: "mailto:#",
                                    children: "info@email.com"
                                }),
                                /*#__PURE__*/ _jsx("br", {}),
                                " 00 (123) 456 78 90"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-4 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Learn More"
                                }),
                                /*#__PURE__*/ _jsx("ul", {
                                    className: "list-unstyled text-reset mb-0",
                                    children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: title,
                                                href: url
                                            })
                                        }, title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-12 col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "widget",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Our Newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-5",
                                    children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "newsletter-wrapper",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        id: "mc_embed_signup2",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            method: "post",
                                            target: "_blank",
                                            className: "validate dark-fields",
                                            id: "mc-embedded-subscribe-form2",
                                            name: "mc-embedded-subscribe-form",
                                            action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                id: "mc_embed_signup_scroll2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                value: "Join",
                                                                type: "submit",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        id: "mce-responses2",
                                                        className: "clear",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-error-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "response",
                                                                id: "mce-success-response2",
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            left: "-5000px"
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ _jsx("input", {
                                                            type: "text",
                                                            tabIndex: -1,
                                                            name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "clear"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer12 = ((/* unused pure expression or super */ null && (Footer12)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/blocks/footer/Footer13.tsx


// -------- custom component -------- //


// -------- data -------- //

const Footer13 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-navy text-inverse",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-12 pt-lg-6 pb-13 pb-md-15",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-lg-flex flex-row align-items-lg-center",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            className: "display-3 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white",
                            children: "Join our community by using our services and grow your business."
                        }),
                        /*#__PURE__*/ _jsx(NextLink, {
                            href: "#",
                            title: "Try It For Free",
                            className: "btn btn-primary rounded-pill mb-0 text-nowrap"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-11 mb-12"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("figure", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "logo",
                                            width: 134,
                                            height: 26,
                                            src: "/img/logo-light.png"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("p", {
                                        className: "mb-4",
                                        children: [
                                            "\xa9 2022 Sandbox. ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-none d-lg-block"
                                            }),
                                            "All rights reserved."
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(SocialLinks, {
                                        className: "nav social social-white"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        className: "pe-xl-15 pe-xxl-17",
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx(NextLink, {
                                        title: "info@email.com",
                                        href: "mailto:#"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Learn More"
                                    }),
                                    /*#__PURE__*/ _jsx("ul", {
                                        className: "list-unstyled mb-0",
                                        children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx(NextLink, {
                                                    title: title,
                                                    href: url
                                                })
                                            }, title))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title text-white mb-3",
                                        children: "Our Newsletter"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-5",
                                        children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "newsletter-wrapper",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "mc_embed_signup2",
                                            children: /*#__PURE__*/ _jsx("form", {
                                                method: "post",
                                                target: "_blank",
                                                className: "validate dark-fields",
                                                id: "mc-embedded-subscribe-form2",
                                                name: "mc-embedded-subscribe-form",
                                                action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    id: "mc_embed_signup_scroll2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "mc-field-group input-group form-floating",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "email",
                                                                    name: "EMAIL",
                                                                    id: "mce-EMAIL2",
                                                                    placeholder: "Email Address",
                                                                    className: "required email form-control"
                                                                }),
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "mce-EMAIL2",
                                                                    children: "Email Address"
                                                                }),
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    value: "Join",
                                                                    type: "submit",
                                                                    name: "subscribe",
                                                                    id: "mc-embedded-subscribe2",
                                                                    className: "btn btn-primary"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            id: "mce-responses2",
                                                            className: "clear",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-error-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "response",
                                                                    id: "mce-success-response2",
                                                                    style: {
                                                                        display: "none"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            style: {
                                                                position: "absolute",
                                                                left: "-5000px"
                                                            },
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ _jsx("input", {
                                                                type: "text",
                                                                tabIndex: -1,
                                                                name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "clear"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer13 = ((/* unused pure expression or super */ null && (Footer13)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer14.tsx


// -------- custom component -------- //


// -------- data -------- //

const Footer14 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark section-frame mt-15",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pb-13 pb-md-15",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5",
                    style: {
                        backgroundImage: "url(/img/photos/bg27.jpg)"
                    },
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white",
                                children: "We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                            }),
                            /*#__PURE__*/ _jsx(NextLink, {
                                title: "Join Us",
                                href: "#",
                                className: "btn btn-lg btn-white rounded mb-0 text-nowrap"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "text-inverse mx-md-5 mt-n15 mt-lg-0",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row gy-6 gy-lg-0",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-4 col-lg-3",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("figure", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                alt: "logo",
                                                width: 134,
                                                height: 26,
                                                src: "/img/logo-light.png"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            className: "mb-4",
                                            children: [
                                                "\xa9 2022 Sandbox. ",
                                                /*#__PURE__*/ _jsx("br", {
                                                    className: "d-none d-lg-block"
                                                }),
                                                "All rights reserved."
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(SocialLinks, {
                                            className: "nav social social-white"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-4 col-lg-3",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Get in Touch"
                                        }),
                                        /*#__PURE__*/ _jsx("address", {
                                            className: "pe-xl-15 pe-xxl-17",
                                            children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                        }),
                                        /*#__PURE__*/ _jsx(NextLink, {
                                            title: "info@email.com",
                                            href: "mailto:#"
                                        }),
                                        /*#__PURE__*/ _jsx("br", {}),
                                        " 00 (123) 456 78 90"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-4 col-lg-3",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Learn More"
                                        }),
                                        /*#__PURE__*/ _jsx("ul", {
                                            className: "list-unstyled mb-0",
                                            children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                                        title: title,
                                                        href: url
                                                    })
                                                }, title))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-12 col-lg-3",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Our Newsletter"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mb-5",
                                            children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "newsletter-wrapper",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                id: "mc_embed_signup2",
                                                children: /*#__PURE__*/ _jsx("form", {
                                                    method: "post",
                                                    target: "_blank",
                                                    className: "validate dark-fields",
                                                    id: "mc-embedded-subscribe-form2",
                                                    name: "mc-embedded-subscribe-form",
                                                    action: "https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        id: "mc_embed_signup_scroll2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "mc-field-group input-group form-floating",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        type: "email",
                                                                        name: "EMAIL",
                                                                        id: "mce-EMAIL2",
                                                                        placeholder: "Email Address",
                                                                        className: "required email form-control"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("label", {
                                                                        htmlFor: "mce-EMAIL2",
                                                                        children: "Email Address"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("input", {
                                                                        value: "Join",
                                                                        type: "submit",
                                                                        name: "subscribe",
                                                                        id: "mc-embedded-subscribe2",
                                                                        className: "btn btn-primary"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                id: "mce-responses2",
                                                                className: "clear",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "response",
                                                                        id: "mce-error-response2",
                                                                        style: {
                                                                            display: "none"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "response",
                                                                        id: "mce-success-response2",
                                                                        style: {
                                                                            display: "none"
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "-5000px"
                                                                },
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ _jsx("input", {
                                                                    type: "text",
                                                                    tabIndex: -1,
                                                                    name: "b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "clear"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer14 = ((/* unused pure expression or super */ null && (Footer14)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/blocks/footer/Footer15.tsx



const Footer15 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        style: {
            backgroundColor: "#F0EDEC"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer_menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "footer_menu_item",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contact/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "footer_menu_item",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/privacy-policy/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "footer_menu_item",
                            children: "Privacy Policy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/terms/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "footer_menu_item",
                            children: "Terms & Conditions"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/articles/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "footer_menu_item",
                            children: "Articles"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Goom. All rights reserved."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(reuseable_SocialLinks/* default */.Z, {
                            className: "nav social social-muted mb-0 text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer15 = (Footer15);

;// CONCATENATED MODULE: ./components/blocks/footer/Footer16.tsx


// -------- custom component -------- //


// -------- data -------- //

const Footer16 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-dark text-inverse",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-13 py-md-15",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "widget-title text-white mb-3",
                                    children: "Popular Posts"
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    className: "image-list",
                                    children: [
                                        /*#__PURE__*/ _jsxs("li", {
                                            children: [
                                                /*#__PURE__*/ _jsx(Link, {
                                                    legacyBehavior: true,
                                                    href: "#",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("figure", {
                                                            className: "rounded",
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: "/img/photos/a4.jpg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "post-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                                title: "Magna Mollis Ultricies",
                                                                className: "link-dark",
                                                                href: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("ul", {
                                                            className: "post-meta",
                                                            children: /*#__PURE__*/ _jsxs("li", {
                                                                className: "post-date",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "uil uil-calendar-alt"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "26 Mar 2022"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "mt-5",
                                            children: [
                                                /*#__PURE__*/ _jsx(Link, {
                                                    legacyBehavior: true,
                                                    href: "#",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("figure", {
                                                            className: "rounded",
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: "/img/photos/a5.jpg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "post-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                                title: "Ornare Nullam Risus",
                                                                className: "link-dark",
                                                                href: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("ul", {
                                                            className: "post-meta",
                                                            children: /*#__PURE__*/ _jsxs("li", {
                                                                className: "post-date",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "uil uil-calendar-alt"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "16 Feb 2022"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("li", {
                                            className: "mt-5",
                                            children: [
                                                /*#__PURE__*/ _jsx(Link, {
                                                    legacyBehavior: true,
                                                    href: "#",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("figure", {
                                                            className: "rounded",
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: "/img/photos/a6.jpg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "post-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                                title: "Euismod Nullam Fusce",
                                                                className: "link-dark",
                                                                href: "#"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("ul", {
                                                            className: "post-meta",
                                                            children: /*#__PURE__*/ _jsxs("li", {
                                                                className: "post-date",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "uil uil-calendar-alt"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "8 Jan 2022"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Tags"
                                        }),
                                        /*#__PURE__*/ _jsx("ul", {
                                            className: "list-unstyled tag-list",
                                            children: tags.map(({ id , title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                                        title: title,
                                                        href: url,
                                                        className: "btn btn-soft-ash text-white btn-sm rounded-pill"
                                                    })
                                                }, id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Categories"
                                        }),
                                        /*#__PURE__*/ _jsx("ul", {
                                            className: "unordered-list text-reset bullet-white ",
                                            children: categories.map(({ id , post , title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                                        title: `${title} (${post})`,
                                                        href: url
                                                    })
                                                }, id))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Get in Touch"
                                        }),
                                        /*#__PURE__*/ _jsx("address", {
                                            className: "pe-xl-15 pe-xxl-17",
                                            children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "mailto:#",
                                            children: "info@email.com"
                                        }),
                                        /*#__PURE__*/ _jsx("br", {}),
                                        " 00 (123) 456 78 90"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Elsewhere"
                                        }),
                                        /*#__PURE__*/ _jsx(SocialLinks, {
                                            className: "nav social social-white"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Learn More"
                                        }),
                                        /*#__PURE__*/ _jsxs("ul", {
                                            className: "list-unstyled text-reset mb-0",
                                            children: [
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "Our Story"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "Projects"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "widget",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title text-white mb-3",
                                            children: "Need Help?"
                                        }),
                                        /*#__PURE__*/ _jsxs("ul", {
                                            className: "list-unstyled text-reset mb-0",
                                            children: [
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "Support"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "Get Started"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        legacyBehavior: true,
                                                        href: "#",
                                                        children: "Contact Us"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("p", {
                    className: "mt-6 mb-0 text-center",
                    children: "\xa9 2022 Sandbox. All rights reserved."
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer16 = ((/* unused pure expression or super */ null && (Footer16)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer17.tsx

// -------- custom component -------- //


const Footer17 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-white",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-8 pt-md-10 pb-7",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-lg-0 gy-6",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        className: "mb-4",
                                        src: "/img/logo-dark.png",
                                        srcSet: "/img/logo-dark@2x.png 2x",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead mb-0",
                                        children: "We are trusted by over 5000+ clients. Join them by using our services and grow your business."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 offset-lg-2",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "widget",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "d-flex flex-row",
                                    children: [
                                        /*#__PURE__*/ _jsx(IconBox, {
                                            icon: "uil-phone-volume",
                                            className: "icon text-primary fs-28 me-4 mt-n1"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Phone"
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "mb-0",
                                                    children: [
                                                        "00 (123) 456 78 90 ",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "00 (987) 654 32 10"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "widget",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "d-flex flex-row",
                                    children: [
                                        /*#__PURE__*/ _jsx(IconBox, {
                                            icon: "uil-location-pin-alt",
                                            className: "icon text-primary fs-28 me-4 mt-n1"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "align-self-start justify-content-start",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Address"
                                                }),
                                                /*#__PURE__*/ _jsx("address", {
                                                    children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-13 mt-md-14 mb-7"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-md-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "mb-2 mb-lg-0",
                            children: "\xa9 2022 Sandbox. All rights reserved."
                        }),
                        /*#__PURE__*/ _jsx(SocialLinks, {
                            className: "nav social social-muted mb-0 text-md-end"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer17 = ((/* unused pure expression or super */ null && (Footer17)));

;// CONCATENATED MODULE: ./components/blocks/footer/Footer18.tsx

// -------- custom component -------- //


// -------- data -------- //

const Footer18 = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: "bg-gray",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-13 py-md-15",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-lg-flex flex-row align-items-lg-center",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            className: "display-3 ls-sm mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25",
                            children: "Join our community by using our services and grow your business."
                        }),
                        /*#__PURE__*/ _jsx(NextLink, {
                            title: "Try It For Free",
                            href: "#",
                            className: "btn btn-lg btn-primary rounded mb-0 text-nowrap"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("hr", {
                    className: "mt-11 mb-12"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gy-6 gy-lg-0",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        className: "mb-4",
                                        src: "/img/logo-dark.png",
                                        srcSet: "/img/logo-dark@2x.png 2x",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsxs("p", {
                                        className: "mb-4",
                                        children: [
                                            "\xa9 2022 Sandbox. ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-none d-lg-block"
                                            }),
                                            "All rights reserved."
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(SocialLinks, {
                                        className: "nav social social-muted"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title ls-sm mb-3",
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ _jsx("address", {
                                        className: "pe-xl-15 pe-xxl-17",
                                        children: "Moonshine St. 14/05 Light City, London, United Kingdom"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: "mailto:#",
                                        className: "link-body",
                                        children: "info@email.com"
                                    }),
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " 00 (123) 456 78 90"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-4 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title ls-sm mb-3",
                                        children: "Learn More"
                                    }),
                                    /*#__PURE__*/ _jsx("ul", {
                                        className: "list-unstyled text-reset mb-0",
                                        children: footerNav.map(({ title , url  })=>/*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx(NextLink, {
                                                    title: title,
                                                    href: url
                                                })
                                            }, title))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12 col-lg-3",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "widget-title ls-sm mb-3",
                                        children: "Our Newsletter"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-5",
                                        children: "Subscribe to our newsletter to get our news & deals delivered to you."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "newsletter-wrapper",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "mc_embed_signup2",
                                            children: /*#__PURE__*/ _jsx("form", {
                                                action: "#",
                                                method: "post",
                                                id: "mc-embedded-subscribe-form2",
                                                name: "mc-embedded-subscribe-form",
                                                className: "validate ",
                                                target: "_blank",
                                                noValidate: true,
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    id: "mc_embed_signup_scroll2",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "mc-field-group input-group form-floating",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "EMAIL",
                                                                id: "mce-EMAIL2",
                                                                placeholder: "Email Address",
                                                                className: "required email form-control"
                                                            }),
                                                            /*#__PURE__*/ _jsx("label", {
                                                                htmlFor: "mce-EMAIL2",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "submit",
                                                                value: "Join",
                                                                name: "subscribe",
                                                                id: "mc-embedded-subscribe2",
                                                                className: "btn btn-primary"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer18 = ((/* unused pure expression or super */ null && (Footer18)));

;// CONCATENATED MODULE: ./components/blocks/footer/index.ts





















/***/ }),

/***/ 8358:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Hero1 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-gradient-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-10 pt-md-14 pb-8 text-center",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ _jsx("figure", {
                            children: /*#__PURE__*/ _jsx("img", {
                                alt: "hero",
                                className: "w-auto",
                                src: "/img/illustrations/i2.png",
                                srcSet: "/img/illustrations/i2@2x.png 2x"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-1 mb-5 mx-md-n5 mx-lg-0",
                                children: "Grow Your Business with Our Solutions."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg mb-7",
                                children: "We help our clients to increase their website traffic, rankings and visibility in search results."
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                className: "btn btn-primary rounded-pill me-2",
                                children: "Try It For Free"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero1)));


/***/ }),

/***/ 9735:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero10 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-11 pt-md-13 pb-11 pb-md-19 pb-lg-22 text-center",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-lg-8 col-xl-7 col-xxl-6 mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxs("h1", {
                            className: "display-1 fs-60 mb-4 px-md-15 px-lg-0",
                            style: slideInDownAnimate("0ms"),
                            children: [
                                "We bring solutions to make life ",
                                /*#__PURE__*/ _jsx("span", {
                                    className: "underline-3 style-3 primary",
                                    children: "easier"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "lead fs-24 lh-sm mb-7 mx-md-13 mx-lg-10",
                            style: slideInDownAnimate("300ms"),
                            children: "We are a creative company that focuses on long term relationships with customers."
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            style: slideInDownAnimate("600ms"),
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                title: "Read More",
                                href: "#",
                                className: "btn btn-lg btn-primary rounded mb-5"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero10)));


/***/ }),

/***/ 4489:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9066);
/* harmony import */ var hooks_useLightBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom component -------- //


// -------- custom hook -------- //

const Hero11 = ()=>{
    // use video popup
    useLightBox();
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white",
        style: {
            backgroundImage: "url(/img/photos/bg4.jpg)"
        },
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-18 pb-16",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-0 gy-12 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-2 mb-5 text-white",
                                style: slideInDownAnimate("600ms"),
                                children: "Crafting project specific solutions with expertise."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg lh-sm mb-7 pe-xl-10",
                                style: slideInDownAnimate("900ms"),
                                children: "We’re a creative company that focuses on establishing long-term relationships with customers."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center justify-content-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Explore Now",
                                            href: "#",
                                            className: "btn btn-lg btn-white rounded-pill me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Contact Us",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-white rounded-pill"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-5 offset-lg-1",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "swiper-container shadow-lg",
                            children: /*#__PURE__*/ _jsxs(Carousel, {
                                slidesPerView: 1,
                                className: "dots-over",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        alt: "",
                                        className: "rounded",
                                        src: "/img/photos/about21.jpg",
                                        srcSet: "/img/photos/about21@2x.jpg 2x"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                "data-glightbox": true,
                                                "data-gallery": "hero",
                                                href: "/media/movie.mp4",
                                                className: "btn btn-circle btn-white btn-play ripple mx-auto mb-5 position-absolute",
                                                style: {
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%,-50%)",
                                                    zIndex: 3
                                                },
                                                children: /*#__PURE__*/ _jsx("i", {
                                                    className: "icn-caret-right"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("img", {
                                                alt: "",
                                                className: "rounded",
                                                src: "/img/photos/about22.jpg",
                                                srcSet: "/img/photos/about22@2x.jpg 2x"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("img", {
                                        alt: "",
                                        className: "rounded",
                                        src: "/img/photos/about23.jpg",
                                        srcSet: "/img/photos/about23@2x.jpg 2x"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero11)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9240:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero12 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-10 pb-15 pt-md-14 pb-md-20",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-1 mb-5 mx-md-n5 mx-lg-0",
                                style: slideInDownAnimate("600ms"),
                                children: "Creative. Smart. Awesome."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg mb-7",
                                style: slideInDownAnimate("900ms"),
                                children: "We specialize in web, mobile and identity design. We love to turn ideas into beautiful things."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center justify-content-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            href: "#",
                                            title: "See Projects",
                                            className: "btn btn-primary rounded me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            href: "#",
                                            title: "Learn More",
                                            className: "btn btn-yellow rounded"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        style: slideInDownAnimate("0ms"),
                        children: /*#__PURE__*/ _jsx("figure", {
                            children: /*#__PURE__*/ _jsx("img", {
                                className: "w-auto",
                                src: "/img/illustrations/i6.png",
                                srcSet: "/img/illustrations/i6@2x.png 2x",
                                alt: ""
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero12)));


/***/ }),

/***/ 7856:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useLightBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1496);


// -------- custom hook -------- //

const Hero13 = ()=>{
    // use video popup
    useLightBox();
    return /*#__PURE__*/ _jsx("section", {
        style: {
            backgroundImage: "url(/img/photos/bg2.jpg)"
        },
        className: "wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-17 pb-19 pt-md-19 pb-md-20 text-center",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row mb-11",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-md-9 col-lg-7 col-xxl-6 mx-auto",
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            className: "h6 text-uppercase ls-xl text-white mb-5",
                            style: zoomInAnimate("0ms"),
                            children: "Hello! This is Sandbox"
                        }),
                        /*#__PURE__*/ _jsx("h3", {
                            className: "display-1 text-white mb-7",
                            style: zoomInAnimate("500ms"),
                            children: "We bring rapid solutions for your business"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            "data-glightbox": true,
                            href: "/media/movie.mp4",
                            className: "btn btn-circle btn-white btn-play ripple mx-auto mb-5",
                            style: zoomInAnimate("1000ms"),
                            children: /*#__PURE__*/ _jsx("i", {
                                className: "icn-caret-right"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero13)));


/***/ }),

/***/ 4409:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);


const Hero14 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-10 pt-md-14 pb-14 pb-md-0",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ _jsx("h1", {
                                className: "display-1 fs-66 lh-xxs mb-0",
                                children: "We bring rapid solutions for your business."
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    className: "lead fs-25 my-3",
                                    children: "We are an award winning branding design agency that strongly believes in the power of creative ideas."
                                }),
                                /*#__PURE__*/ _jsx(NextLink, {
                                    title: "Learn More",
                                    href: "#",
                                    className: "more hover"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "position-relative",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "shape bg-dot primary rellax w-17 h-21",
                            style: {
                                top: "-2.5rem",
                                right: "-2.7rem"
                            }
                        }),
                        /*#__PURE__*/ _jsx("figure", {
                            className: "rounded mb-md-n20",
                            children: /*#__PURE__*/ _jsx("img", {
                                src: "/img/photos/about18.jpg",
                                srcSet: "/img/photos/about18@2x.jpg 2x",
                                alt: ""
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero14)));


/***/ }),

/***/ 3845:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var hooks_useLightBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1496);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //


const Hero15 = ()=>{
    // use video popup
    useLightBox();
    return /*#__PURE__*/ _jsx("div", {
        className: "wrapper bg-dark",
        children: /*#__PURE__*/ _jsxs(Carousel, {
            slidesPerView: 1,
            className: "swiper-hero dots-over",
            autoplay: {
                delay: 7000,
                disableOnInteraction: false
            },
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image",
                    style: {
                        backgroundImage: 'url("/img/photos/bg7.jpg")'
                    },
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "container h-100",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row h-100",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start",
                                children: [
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s",
                                        children: "We bring solutions to make life easier."
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s",
                                        children: "We are a creative company that focuses on long term relationships with customers."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "animate__animated animate__slideInUp animate__delay-3s",
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Read More",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-white rounded-pill"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image",
                    style: {
                        backgroundImage: 'url("/img/photos/bg8.jpg")'
                    },
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "container h-100",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row h-100",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center",
                                children: [
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s",
                                        children: "We are trusted by over a million customers."
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s",
                                        children: "Here a few reasons why our customers choose us."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "animate__animated animate__slideInUp animate__delay-3s",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            "data-glightbox": true,
                                            href: "/media/movie.mp4",
                                            className: "btn btn-circle btn-white btn-play ripple mx-auto mb-5",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "icn-caret-right"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image",
                    style: {
                        backgroundImage: 'url("/img/photos/bg9.jpg")'
                    },
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "container h-100",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row h-100",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start",
                                children: [
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s",
                                        children: "Just sit and relax."
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s",
                                        children: "We make sure your spending is stress free so that you can have the perfect control."
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "animate__animated animate__slideInUp animate__delay-3s",
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Contact Us",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-white rounded-pill"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero15)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3313:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var icons_lineal_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(850);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9066);



// -------- custom component -------- //


const Hero16 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-gray",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-12 pt-md-14 pb-14 pb-md-16",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gy-10 gy-md-13 gy-lg-0 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-8 col-lg-5 d-flex position-relative mx-auto",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "img-mask mask-1",
                                style: slideInDownAnimate("0ms"),
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/about17.jpg",
                                    srcSet: "/img/photos/about17@2x.jpg 2x",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "card shadow-lg position-absolute",
                                style: {
                                    right: "2%",
                                    bottom: "10%",
                                    ...slideInDownAnimate("300ms")
                                },
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "card-body py-4 px-5",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "d-flex flex-row align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                children: /*#__PURE__*/ _jsx(Check, {
                                                    className: "icon-svg-sm text-primary mx-auto me-3"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "counter mb-0 text-nowrap",
                                                        children: /*#__PURE__*/ _jsx(CountUp, {
                                                            end: 250,
                                                            suffix: "+"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "fs-14 lh-sm mb-0 text-nowrap",
                                                        children: "Projects Done"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-1 mb-5",
                                style: slideInDownAnimate("600ms"),
                                children: "I'm User Interface Designer & Developer."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-25 lh-sm mb-7 px-md-10 px-lg-0",
                                style: slideInDownAnimate("900ms"),
                                children: "Hello! I'm Julia, a freelance user interface designer & developer based in London. I’m very passionate about the work that I do."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center justify-content-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "See My Works",
                                            href: "#",
                                            className: "btn btn-lg btn-primary rounded-pill me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Contact Me",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-primary rounded-pill"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero16)));


/***/ }),

/***/ 7112:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero17 = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper bg-gray",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container pt-12 pt-md-16 text-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-8 col-xxl-7 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "fs-16 text-uppercase ls-xl text-dark mb-4",
                                style: slideInDownAnimate("600ms"),
                                children: "Hello! This is Sandbox"
                            }),
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-1 fs-58 mb-7",
                                style: slideInDownAnimate("900ms"),
                                children: "We bring rapid solutions for your business."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center mb-5 mb-md-0",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Explore Now",
                                            href: "#",
                                            className: "btn btn-lg btn-primary rounded-pill me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Contact Us",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-primary rounded-pill"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("figure", {
                className: "position-absoute",
                style: {
                    bottom: 0,
                    left: 0,
                    zIndex: 2
                },
                children: /*#__PURE__*/ _jsx("img", {
                    src: "/img/photos/bg11.jpg",
                    alt: ""
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero17)));


/***/ }),

/***/ 1651:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero18 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container-card",
            children: /*#__PURE__*/ _jsx("div", {
                className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5",
                style: {
                    backgroundImage: "url(/img/photos/bg22.png)"
                },
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card-body py-14 px-0",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ _jsxs("h1", {
                                            className: "display-2 mb-4 me-xl-5 me-xxl-0",
                                            style: slideInDownAnimate("900ms"),
                                            children: [
                                                "Networking ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-gradient gradient-1",
                                                    children: "solutions"
                                                }),
                                                " for worldwide communication"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "lead fs-23 lh-sm mb-7 pe-xxl-15",
                                            style: slideInDownAnimate("1200ms"),
                                            children: "We're a company that focuses on establishing long-term relationships with customers."
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            style: slideInDownAnimate("1500ms"),
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                title: "Explore Now",
                                                href: "#",
                                                className: "btn btn-lg btn-gradient gradient-1 rounded"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ _jsx("img", {
                                        alt: "demo",
                                        className: "img-fluid mb-n18",
                                        src: "/img/illustrations/3d6.png",
                                        srcSet: "/img/illustrations/3d6@2x.png 2x",
                                        style: fadeInAnimate("300ms")
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero18)));


/***/ }),

/***/ 5615:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Hero19 = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper image-wrapper bg-image bg-overlay bg-overlay-300",
        style: {
            backgroundImage: "url(/img/photos/bg16.png)"
        },
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container pt-17 pb-19 pt-md-18 pb-md-17 text-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-8 col-xl-7 col-xxl-6 mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxs("h1", {
                                className: "display-1 text-white fs-60 mb-4 px-md-15 px-lg-0",
                                style: slideInDownAnimate("0ms"),
                                children: [
                                    "We bring solutions to make life ",
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "underline-3 style-2 yellow",
                                        children: "easier"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10",
                                style: slideInDownAnimate("300ms"),
                                children: "We are a creative company that focuses on long term relationships with customers."
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                style: slideInDownAnimate("600ms"),
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: "btn btn-white rounded mb-10 mb-xxl-5",
                                    children: "Read More"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "divider text-light mx-n2",
                    children: /*#__PURE__*/ _jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1440 60",
                        children: /*#__PURE__*/ _jsx("path", {
                            fill: "currentColor",
                            d: "M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero19)));


/***/ }),

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_Hero2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./utils/animation.ts
const animation = ({ name , delay  })=>{
    return {
        animationName: name,
        animationDelay: delay,
        animationFillMode: "both",
        animationDuration: "700ms",
        animationDirection: "normal",
        animationTimingFunction: "ease"
    };
};
const slideInDownAnimate = (delay)=>animation({
        name: "slideInDown",
        delay
    });
const zoomInAnimate = (delay)=>animation({
        name: "zoomIn",
        delay
    });
const fadeInAnimate = (delay)=>animation({
        name: "fadeIn",
        delay
    });
/* harmony default export */ const utils_animation = ((/* unused pure expression or super */ null && (animation)));

;// CONCATENATED MODULE: ./components/blocks/hero/Hero2.tsx


const Hero2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 align-items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2",
                style: zoomInAnimate("0ms"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape bg-dot primary rellax w-17 h-19",
                        style: {
                            top: "-1.7rem",
                            left: "-1.5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape rounded bg-soft-primary rellax d-md-block",
                        style: {
                            width: "85%",
                            height: "90%",
                            right: "-0.8rem",
                            bottom: "-1.8rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "rounded",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/photos/about7.jpg",
                            srcSet: "/img/photos/about7@2x.jpg 2x",
                            alt: "hero"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-5 mt-lg-n10 text-center text-lg-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "display-1 mb-5",
                        style: slideInDownAnimate("600ms"),
                        children: "We bring solutions to make life easier for our customers."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lead fs-22 lh-sm mb-7 px-md-10 px-lg-0",
                        style: slideInDownAnimate("900ms"),
                        children: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of features. We will be able to detect any"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hero_Hero2 = (Hero2);


/***/ }),

/***/ 4284:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useReplaceMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(594);


const Hero20 = ()=>{
    // enable the text rotator animation
    useReplaceMe();
    return /*#__PURE__*/ _jsxs("section", {
        className: "video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80",
        children: [
            /*#__PURE__*/ _jsx("video", {
                loop: true,
                muted: true,
                autoPlay: true,
                playsInline: true,
                // __idm_id__="1187841"
                id: "1187841",
                src: "/media/movie2.mp4",
                poster: "/img/photos/movie2.jpg"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "video-content",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container text-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-8 col-xl-6 text-center text-white mx-auto",
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "display-1 fs-54 text-white mb-5",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "rotator-zoom",
                                        children: "Rapid Solutions,Innovative Thinking,Top-Notch Support"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "lead fs-24 mb-0 mx-xxl-8",
                                    children: "We are a digital agency specializing in web design, mobile development and seo optimization."
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero20)));


/***/ }),

/***/ 3018:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useReplaceMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(594);


// -------- data -------- //

const Hero21 = ()=>{
    // enable the text rotator animation
    useReplaceMe();
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper bg-light",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container pt-10 pt-md-14 pb-14 pb-md-16 text-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "row gx-lg-8 gx-xl-12 gy-10 gy-xl-0 mb-14 align-items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-7 order-lg-2",
                                children: /*#__PURE__*/ _jsx("figure", {
                                    children: /*#__PURE__*/ _jsx("img", {
                                        alt: "demo",
                                        className: "img-auto",
                                        src: "/img/illustrations/i21.png",
                                        srcSet: "/img/illustrations/i21@2x.png 2x"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsxs("h1", {
                                        className: "display-1 fs-54 mb-5 mx-md-n5 mx-lg-0 mt-7",
                                        children: [
                                            "A digital agency ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-md-none"
                                            }),
                                            "specializing on ",
                                            /*#__PURE__*/ _jsx("br", {
                                                className: "d-md-none"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "rotator-fade text-primary",
                                                children: "mobile design,web design,3D animation"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "lead fs-lg mb-7",
                                        children: "We are an award winning design agency that strongly believes in the power of creative ideas."
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: /*#__PURE__*/ _jsx("a", {
                                            className: "btn btn-lg btn-primary rounded-pill me-2",
                                            children: "Get Started"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-center mb-8",
                        children: "Trusted by over 2K+ clients across the world"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 gy-10 mb-2 d-flex align-items-center justify-content-center",
                        children: clientList.map((item)=>/*#__PURE__*/ _jsx("div", {
                                className: "col",
                                children: /*#__PURE__*/ _jsx("img", {
                                    className: "img-fluid px-md-3 px-lg-0 px-xl-2 px-xxl-5",
                                    src: item,
                                    alt: "client"
                                })
                            }, item))
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "divider text-soft-primary mx-n2",
                    children: /*#__PURE__*/ _jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1440 100",
                        children: /*#__PURE__*/ _jsx("path", {
                            fill: "currentColor",
                            d: "M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero21)));


/***/ }),

/***/ 2675:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Hero22 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "section-frame br-fix overflow-hidden",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500",
            style: {
                backgroundImage: "url(/img/photos/bg26.jpg)"
            },
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "container pt-18 pt-lg-21 pb-17 pb-lg-19 text-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto",
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "h6 text-uppercase ls-xl text-white mb-5",
                                    style: zoomInAnimate("500ms"),
                                    children: "Hello! We are Sandbox"
                                }),
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "display-1 fs-54 text-white mb-7",
                                    style: zoomInAnimate("1000ms"),
                                    children: "Grow your business with our marketing solutions"
                                }),
                                /*#__PURE__*/ _jsx("a", {
                                    "data-glightbox": true,
                                    href: "/media/movie.mp4",
                                    className: "btn btn-circle btn-white btn-play ripple mx-auto",
                                    style: zoomInAnimate("1500ms"),
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "icn-caret-right"
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "divider text-white mx-n2",
                        children: /*#__PURE__*/ _jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 60",
                            children: /*#__PURE__*/ _jsx("path", {
                                fill: "currentColor",
                                d: "M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero22)));


/***/ }),

/***/ 5908:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel2__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel2__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Hero23 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-dark",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "swiper-container swiper-thumbs-container swiper-fullscreen nav-dark",
            children: [
                /*#__PURE__*/ _jsx(Carousel2, {}),
                /*#__PURE__*/ _jsx("div", {
                    className: "swiper-static",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "container h-100 d-flex align-items-center justify-content-center",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-8 mx-auto mt-n10 text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("h1", {
                                        className: "fs-19 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s",
                                        children: "I'm Julia Sandbox"
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "display-1 fs-60 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s",
                                        children: "couples & wedding photographer"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero23)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8908:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //
const images = (/* unused pure expression or super */ null && ([
    "/img/photos/cf1.jpg",
    "/img/photos/cf2.jpg",
    "/img/photos/cf3.jpg",
    "/img/photos/cf4.jpg",
    "/img/photos/cf5.jpg",
    "/img/photos/cf6.jpg"
]));
const Hero24 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        id: "home",
        children: /*#__PURE__*/ _jsx("div", {
            className: "wrapper bg-gray overflow-hidden",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container-fluid px-xl-0 pt-6 pb-10",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "swiper-container swiper-auto",
                    children: /*#__PURE__*/ _jsx(Carousel, {
                        className: "overflow-visible",
                        grabCursor: true,
                        slidesPerView: "auto",
                        centeredSlides: true,
                        loop: true,
                        children: images.map((item)=>/*#__PURE__*/ _jsxs("figure", {
                                className: "rounded",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        src: item,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        className: "item-link",
                                        href: item,
                                        "data-glightbox": true,
                                        "data-gallery": "gallery-group",
                                        children: /*#__PURE__*/ _jsx("i", {
                                            className: "uil uil-focus-add"
                                        })
                                    })
                                ]
                            }, item))
                    })
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero24)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8803:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_blog_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9119);
/* harmony import */ var data_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Hero25 = ()=>{
    return /*#__PURE__*/ _jsx(Carousel, {
        navigation: false,
        slidesPerView: 2,
        className: "blog grid-view mb-11",
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }
        },
        children: blogList5.map((item)=>/*#__PURE__*/ _jsx(BlogCard5, {
                ...item
            }, item.id))
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero25)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);


const Hero26 = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper bg-soft-primary",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container pt-10 pt-lg-12 pt-xl-12 pt-xxl-10 pb-lg-10 pb-xl-10 pb-xxl-0",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-6",
                            "data-cues": "slideInDown",
                            "data-group": "page-title",
                            "data-delay": "900",
                            children: [
                                /*#__PURE__*/ _jsxs("h1", {
                                    className: "display-1 mb-4 me-xl-5 mt-lg-n10",
                                    children: [
                                        "Grow Your Business with ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-md-block d-lg-none"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-primary",
                                            children: "Our Marketing Solutions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "lead fs-24 lh-sm mb-7 pe-xxl-15",
                                    children: [
                                        "We help our clients to increase their website ",
                                        /*#__PURE__*/ _jsx("br", {
                                            className: "d-none d-md-block d-lg-none"
                                        }),
                                        " traffic, rankings and visibility in search results."
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "d-inline-flex me-2",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        href: "#",
                                        title: "Try it for Free",
                                        className: "btn btn-lg btn-grape rounded"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "d-inline-flex",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        href: "#",
                                        title: "Explore Now",
                                        className: "btn btn-lg btn-outline-grape rounded"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-10 col-md-7 mx-auto col-lg-6 col-xl-5 ms-xl-5",
                            children: /*#__PURE__*/ _jsx("img", {
                                className: "img-fluid mb-n12 mb-md-n14 mb-lg-n19",
                                src: "/img/illustrations/3d11.png",
                                srcSet: "/img/illustrations/3d11@2x.png 2x",
                                "data-cue": "fadeIn",
                                "data-delay": "300",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("figure", {
                children: /*#__PURE__*/ _jsx("img", {
                    src: "/img/photos/clouds.png",
                    alt: ""
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero26)));


/***/ }),

/***/ 4880:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);


const Hero27 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper image-wrapper bg-cover bg-image bg-xs-none bg-gray",
        style: {
            backgroundImage: "url(/img/photos/bg37.jpg)"
        },
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-17 pb-15 py-sm-17 py-xxl-20",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-sm-6 col-xxl-5 text-center text-sm-start",
                    "data-cues": "slideInDown",
                    "data-group": "page-title",
                    "data-interval": "-200",
                    "data-delay": "500",
                    children: [
                        /*#__PURE__*/ _jsxs("h2", {
                            className: "display-1 fs-56 mb-4 mt-0 mt-lg-5 ls-xs pe-xl-5 pe-xxl-0",
                            children: [
                                "We bring solutions to make life ",
                                /*#__PURE__*/ _jsx("span", {
                                    className: "underline-3 style-3 yellow",
                                    children: "easier"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "lead fs-23 lh-sm mb-7 pe-lg-5 pe-xl-5 pe-xxl-0",
                            children: "We are a creative company that focuses on long term relationships with customers."
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                title: "Read More",
                                href: "#",
                                className: "btn btn-lg btn-primary rounded"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero27)));


/***/ }),

/***/ 8897:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useLightBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1496);



// -------- custom hook -------- //

const Hero3 = ()=>{
    // used for lightbox
    useLightBox();
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-dark angled lower-start",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-7 pt-md-11 pb-8",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-0 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ _jsxs("h1", {
                                className: "display-1 text-white mb-4",
                                style: slideInDownAnimate("600ms"),
                                children: [
                                    "Sandbox focuses on ",
                                    /*#__PURE__*/ _jsx("br", {}),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-primary text-nowrap",
                                        children: /*#__PURE__*/ _jsx(Typewriter, {
                                            options: {
                                                loop: true,
                                                autoStart: true,
                                                strings: [
                                                    "customer satisfaction",
                                                    "business needs",
                                                    "creative ideas"
                                                ]
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15",
                                style: slideInDownAnimate("900ms"),
                                children: "We carefully consider our solutions to support each and every stage of your growth."
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                style: slideInDownAnimate("1200ms"),
                                children: /*#__PURE__*/ _jsx("a", {
                                    className: "btn btn-lg btn-primary rounded",
                                    children: "Get Started"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-5 offset-lg-1 mb-n18",
                        "data-cues": "slideInDown",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "position-relative",
                            style: slideInDownAnimate("0ms"),
                            children: [
                                /*#__PURE__*/ _jsx("a", {
                                    "data-glightbox": true,
                                    href: "/media/movie.mp4",
                                    className: "btn btn-circle btn-primary btn-play ripple mx-auto mb-6 position-absolute",
                                    style: {
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        zIndex: 3
                                    },
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "icn-caret-right"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("figure", {
                                    className: "rounded shadow-lg",
                                    children: /*#__PURE__*/ _jsx("img", {
                                        src: "/img/photos/about13.jpg",
                                        srcSet: "/img/photos/about13@2x.jpg 2x",
                                        alt: "hero"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero3)));


/***/ }),

/***/ 4670:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero4 = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                style: {
                    backgroundImage: "url(/img/photos/about16.jpg)"
                },
                className: "rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start",
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "display-1 mb-5",
                                    style: slideInDownAnimate("600ms"),
                                    children: "Just sit & relax while we take care of your business needs."
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "lead fs-25 lh-sm mb-7 pe-md-10",
                                    style: slideInDownAnimate("900ms"),
                                    children: "We make your spending stress-free for you to have the perfect control."
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "d-flex justify-content-center justify-content-lg-start",
                                    style: slideInDownAnimate("900ms"),
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            style: slideInDownAnimate("1200ms"),
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                href: "#",
                                                title: "Explore Now",
                                                className: "btn btn-lg btn-primary rounded-pill me-2"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            style: slideInDownAnimate("1500ms"),
                                            children: /*#__PURE__*/ _jsx(NextLink, {
                                                href: "#",
                                                title: "Contact Us",
                                                className: "btn btn-lg btn-outline-primary rounded-pill"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero4)));


/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero5 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-10 pb-15 pt-md-14 pb-md-20 text-center",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13",
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "display-1 mb-4",
                            style: slideInDownAnimate("0ms"),
                            children: "Staying on top of your bills never been this easy"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "lead fs-lg px-xl-12 px-xxl-6 mb-7",
                            style: slideInDownAnimate("300ms"),
                            children: "Easily achieve your saving goals. Have all your recurring and one time expenses and incomes in one place."
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "d-flex justify-content-center",
                            style: slideInDownAnimate("600ms"),
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    style: slideInDownAnimate("900ms"),
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        href: "#",
                                        title: "Get Started",
                                        className: "btn btn-primary rounded mx-1"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    style: slideInDownAnimate("1200ms"),
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        href: "#",
                                        title: "Free Trial",
                                        className: "btn btn-green rounded mx-1"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero5)));


/***/ }),

/***/ 2944:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(9066);
;// CONCATENATED MODULE: ./components/common/GoogleAppBtn.tsx




const GoogleAppBtn_GoogleAppBtn = ()=>{
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
/* harmony default export */ const common_GoogleAppBtn = ((/* unused pure expression or super */ null && (GoogleAppBtn_GoogleAppBtn)));

;// CONCATENATED MODULE: ./components/blocks/hero/Hero6.tsx



const Hero6 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-5 pb-15 py-lg-17 py-xl-19 pb-xl-20 position-relative",
            children: [
                /*#__PURE__*/ _jsx("img", {
                    alt: "hero",
                    src: "/img/photos/devices.png",
                    srcSet: "/img/photos/devices@2x.png 2x",
                    className: "position-lg-absolute col-12 col-lg-10 col-xl-11 col-xxl-10 px-lg-5 px-xl-0 ms-n5 ms-sm-n8 ms-md-n10 ms-lg-0 mb-md-4 mb-lg-0",
                    style: {
                        top: "-1%",
                        left: "-21%",
                        ...fadeInAnimate("0ms")
                    }
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row gx-0 align-items-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 col-lg-5 offset-lg-7 offset-xxl-6 ps-xxl-12 mt-md-n9 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-2 mb-4 mx-sm-n2 mx-md-0",
                                style: slideInDownAnimate("600ms"),
                                children: "Get all of your steps, exercise, sleep and meds in one place."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg mb-7 px-md-10 px-lg-0",
                                style: slideInDownAnimate("900ms"),
                                children: "Sandbox is now available to download from both the App Store and Google Play Store."
                            }),
                            /*#__PURE__*/ _jsx(GoogleAppBtn, {})
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const hero_Hero6 = ((/* unused pure expression or super */ null && (Hero6)));


/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);



const Hero7 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-gradient-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 pt-md-15 pb-md-18",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-9 col-xxl-7 mx-auto",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "display-1 mb-4",
                                style: zoomInAnimate("0ms"),
                                children: "Creative. Smart. Awesome."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-24 lh-sm px-md-5 px-xl-15 px-xxl-10 mb-7",
                                style: zoomInAnimate("500ms"),
                                children: "We are an award winning web & mobile design agency that strongly believes in the power of creative ideas."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "d-flex justify-content-center",
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            style: slideInDownAnimate("900ms"),
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                href: "#",
                                title: "See Projects",
                                className: "btn btn-lg btn-primary rounded-pill mx-1"
                            })
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            style: slideInDownAnimate("1200ms"),
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                href: "#",
                                title: "Contact Us",
                                className: "btn btn-lg btn-outline-primary rounded-pill mx-1"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row mt-12",
                    style: fadeInAnimate("1600ms"),
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-8 mx-auto",
                        children: /*#__PURE__*/ _jsx("figure", {
                            children: /*#__PURE__*/ _jsx("img", {
                                alt: "",
                                className: "img-fluid",
                                src: "/img/illustrations/i12.png",
                                srcSet: "/img/illustrations/i12@2x.png 2x"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero7)));


/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_IconBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8369);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9066);





const Hero8 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card bg-soft-primary rounded-4 mt-2 mb-13 mb-md-17",
        children: /*#__PURE__*/ _jsx("div", {
            className: "card-body p-md-10 py-xl-11 px-xl-15",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-0 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6 order-lg-2 d-flex position-relative",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/co3.png",
                                srcSet: "/img/photos/co3@2x.png 2x",
                                className: "img-fluid ms-auto mx-auto me-lg-8",
                                style: fadeInAnimate("0ms")
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                style: animation({
                                    name: "slideInRight",
                                    delay: "600ms"
                                }),
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "card shadow-lg position-absolute",
                                    style: {
                                        bottom: "10%",
                                        right: "-3%"
                                    },
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "card-body py-4 px-5",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "d-flex flex-row align-items-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    children: /*#__PURE__*/ _jsx(IconBox, {
                                                        icon: "uil-users-alt",
                                                        className: "icon btn btn-circle btn-md btn-soft-primary pe-none mx-auto me-3"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h3", {
                                                            className: "counter mb-0 text-nowrap",
                                                            children: /*#__PURE__*/ _jsx(CountUp, {
                                                                end: 25000,
                                                                suffix: "+"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "fs-14 lh-sm mb-0 text-nowrap",
                                                            children: "Happy Clients"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-6 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "display-2 mb-5",
                                style: slideInDownAnimate("600ms"),
                                children: "Crafting project specific solutions with expertise."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg lh-sm mb-7 pe-xl-10",
                                style: slideInDownAnimate("900ms"),
                                children: "We're a company that focuses on establishing long-term relationships with customers."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center justify-content-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Explore Now",
                                            href: "#",
                                            className: "btn btn-lg btn-primary rounded-pill me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Contact Us",
                                            href: "#",
                                            className: "btn btn-lg btn-outline-primary rounded-pill"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero8)));


/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9066);




const Hero9 = ()=>{
    // typewriter options
    const OPTIONS = {
        loop: true,
        autoStart: true,
        strings: [
            "easy usage",
            "fast transactions",
            "secure payments"
        ]
    };
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-10 pb-12 pt-md-14 pb-md-17",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0",
                        children: [
                            /*#__PURE__*/ _jsxs("h1", {
                                className: "display-1 mb-5 mx-md-10 mx-lg-0",
                                style: slideInDownAnimate("600ms"),
                                children: [
                                    "Sandbox is effortless and powerful with ",
                                    /*#__PURE__*/ _jsx("br", {}),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "typer text-primary text-nowrap",
                                        children: /*#__PURE__*/ _jsx(Typewriter, {
                                            options: OPTIONS
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "lead fs-lg mb-7",
                                style: slideInDownAnimate("900ms"),
                                children: "Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "d-flex justify-content-center justify-content-lg-start",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1200ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Get Started",
                                            href: "#",
                                            className: "btn btn-lg btn-primary rounded me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        style: slideInDownAnimate("1500ms"),
                                        children: /*#__PURE__*/ _jsx(NextLink, {
                                            title: "Free Trial",
                                            href: "#",
                                            className: "btn btn-lg btn-green rounded"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "ms-auto mt-auto",
                                            style: zoomInAnimate("300ms"),
                                            children: /*#__PURE__*/ _jsx("img", {
                                                className: "img-fluid rounded shadow-lg",
                                                src: "/img/photos/sa20.jpg",
                                                srcSet: "/img/photos/sa20@2x.jpg 2x",
                                                alt: "demo"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "ms-auto mt-5 mb-10",
                                            style: zoomInAnimate("600ms"),
                                            children: /*#__PURE__*/ _jsx("img", {
                                                className: "img-fluid rounded shadow-lg",
                                                src: "/img/photos/sa18.jpg",
                                                srcSet: "/img/photos/sa18@2x.jpg 2x",
                                                alt: "demo"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-4 col-lg-5",
                                    style: zoomInAnimate("0ms"),
                                    children: /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx("img", {
                                            className: "w-100 img-fluid rounded shadow-lg",
                                            src: "/img/photos/sa16.jpg",
                                            srcSet: "/img/photos/sa16@2x.jpg 2x",
                                            alt: "demo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "col-3 d-flex flex-column",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-auto",
                                            style: zoomInAnimate("300ms"),
                                            children: /*#__PURE__*/ _jsx("img", {
                                                alt: "demo",
                                                src: "/img/photos/sa21.jpg",
                                                srcSet: "/img/photos/sa21@2x.jpg 2x",
                                                className: "img-fluid rounded shadow-lg"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-5",
                                            style: zoomInAnimate("600ms"),
                                            children: /*#__PURE__*/ _jsx("img", {
                                                alt: "demo",
                                                src: "/img/photos/sa19.jpg",
                                                srcSet: "/img/photos/sa19@2x.jpg 2x",
                                                className: "img-fluid rounded shadow-lg"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-5 mb-10",
                                            style: zoomInAnimate("900ms"),
                                            children: /*#__PURE__*/ _jsx("img", {
                                                alt: "demo",
                                                src: "/img/photos/sa17.jpg",
                                                srcSet: "/img/photos/sa17@2x.jpg 2x",
                                                className: "img-fluid rounded shadow-lg"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero9)));


/***/ }),

/***/ 3025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_l": () => (/* reexport safe */ _Hero2__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _Hero1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8358);
/* harmony import */ var _Hero2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8921);
/* harmony import */ var _Hero3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8897);
/* harmony import */ var _Hero4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4670);
/* harmony import */ var _Hero5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9983);
/* harmony import */ var _Hero6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2944);
/* harmony import */ var _Hero7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7730);
/* harmony import */ var _Hero8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3984);
/* harmony import */ var _Hero9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3049);
/* harmony import */ var _Hero10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9735);
/* harmony import */ var _Hero11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4489);
/* harmony import */ var _Hero12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9240);
/* harmony import */ var _Hero13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7856);
/* harmony import */ var _Hero14__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4409);
/* harmony import */ var _Hero15__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3845);
/* harmony import */ var _Hero16__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3313);
/* harmony import */ var _Hero17__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7112);
/* harmony import */ var _Hero18__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1651);
/* harmony import */ var _Hero19__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5615);
/* harmony import */ var _Hero20__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4284);
/* harmony import */ var _Hero21__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3018);
/* harmony import */ var _Hero22__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2675);
/* harmony import */ var _Hero23__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5908);
/* harmony import */ var _Hero24__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8908);
/* harmony import */ var _Hero25__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8803);
/* harmony import */ var _Hero26__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(421);
/* harmony import */ var _Hero27__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Hero11__WEBPACK_IMPORTED_MODULE_10__, _Hero15__WEBPACK_IMPORTED_MODULE_14__, _Hero23__WEBPACK_IMPORTED_MODULE_22__, _Hero24__WEBPACK_IMPORTED_MODULE_23__, _Hero25__WEBPACK_IMPORTED_MODULE_24__]);
([_Hero11__WEBPACK_IMPORTED_MODULE_10__, _Hero15__WEBPACK_IMPORTED_MODULE_14__, _Hero23__WEBPACK_IMPORTED_MODULE_22__, _Hero24__WEBPACK_IMPORTED_MODULE_23__, _Hero25__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/useSticky.ts

const useSticky = (height = 100)=>{
    const [sticky, setSticky] = (0,external_react_.useState)(false);
    // scroll listener
    const listener = (0,external_react_.useCallback)(()=>{
        if (window.scrollY > height) setSticky(true);
        else setSticky(false);
    }, [
        height
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!window) return;
        window.addEventListener("scroll", listener);
        return ()=>window.removeEventListener("scroll", listener);
    }, [
        listener
    ]);
    return sticky;
};
/* harmony default export */ const hooks_useSticky = (useSticky);

// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(9066);
// EXTERNAL MODULE: ./components/reuseable/SocialLinks.tsx
var SocialLinks = __webpack_require__(2928);
;// CONCATENATED MODULE: ./components/reuseable/links/ListItemLink.tsx


// =========================================================
const ListItemLink = (props)=>{
    const { linkClassName =" " , liClassName ="" , href , title  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: liClassName,
        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
            className: linkClassName,
            href: href,
            title: title
        })
    });
};
/* harmony default export */ const links_ListItemLink = (ListItemLink);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/Info.tsx




// ========================================================
const Info = (props)=>{
    const { title , description , address , phone  } = props;
    const otherPages = [
        {
            title: "Our Story",
            url: "#"
        },
        {
            title: "Terms of Use",
            url: "#"
        },
        {
            title: "Privacy Policy",
            url: "#"
        },
        {
            title: "Contact Us",
            url: "#"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "offcanvas offcanvas-end text-inverse",
        id: "offcanvas-info",
        "data-bs-scroll": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-white fs-30 mb-0",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close btn-close-white",
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "Close"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-body pb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "widget mb-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: description
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Contact Info"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                children: address
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                title: "info@email.com",
                                className: "link-inverse",
                                href: "mailto:first.last@email.com"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: "tel:0123456789",
                                title: phone
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Learn More"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-unstyled",
                                children: otherPages.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            href: "#",
                                            title: item.title
                                        })
                                    }, item.title))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Follow Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {
                                className: "nav social social-white"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
// set default props
Info.defaultProps = {
    title: "Sandbox",
    phone: "00 (123) 456 78 90",
    description: `Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.`,
    address: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            "Moonshine St. 14/05 ",
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            " Light City, London"
        ]
    })
};
/* harmony default export */ const partials_Info = (Info);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/Search.tsx

const Search = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "offcanvas offcanvas-top bg-light",
        id: "offcanvas-search",
        "data-bs-scroll": "true",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container d-flex flex-row py-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    className: "search-form w-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        id: "search-form",
                        className: "form-control",
                        placeholder: "Type keyword and hit enter"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    "aria-label": "Close",
                    className: "btn-close",
                    "data-bs-dismiss": "offcanvas"
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Search = (Search);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/Social.tsx

const Social = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "nav-item",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "nav social social-muted justify-content-end text-end",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "uil uil-twitter"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "uil uil-facebook-f"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "uil uil-dribbble"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "uil uil-instagram"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Social = (Social);

;// CONCATENATED MODULE: ./components/elements/forms/LoginForm.tsx



const LoginForm = ()=>{
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [visiblePassword, setVisiblePassword] = (0,external_react_.useState)(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(email, password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-3 text-start",
                children: "Welcome Back"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "lead mb-6 text-start",
                children: "Fill your email and password to sign in."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "text-start mb-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                value: email,
                                id: "loginEmail",
                                placeholder: "Email",
                                className: "form-control",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "loginEmail",
                                children: "Email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: password,
                                id: "loginPassword",
                                placeholder: "Password",
                                className: "form-control",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "loginPassword",
                                children: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary rounded-pill btn-login w-100 mb-2",
                        children: "Sign In"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                    title: "Forgot Password?",
                    href: "/register",
                    className: "hover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mb-0",
                children: [
                    "Don't have an account? ",
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "Sign up",
                        href: "/register",
                        className: "hover"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "divider-icon my-4",
                children: "or"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "nav social justify-content-center text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-google",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-google"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-facebook-f",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-facebook-f"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-twitter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-twitter"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const forms_LoginForm = (LoginForm);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/Signin.tsx


const Signin = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "dialog",
        tabIndex: -1,
        "aria-modal": "true",
        id: "modal-signin",
        className: "modal fade",
        style: {
            display: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "modal-dialog modal-dialog-centered modal-sm",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-content text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(forms_LoginForm, {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const partials_Signin = (Signin);

;// CONCATENATED MODULE: ./components/elements/forms/RegisterForm.tsx



const RegisterForm = ()=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,external_react_.useState)("");
    const [visiblePassword, setVisiblePassword] = (0,external_react_.useState)(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(email, password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "text-start mb-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "name",
                                type: "text",
                                value: name,
                                placeholder: "Name",
                                className: "form-control",
                                onChange: (e)=>setName(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "name",
                                children: "Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                value: email,
                                id: "loginEmail",
                                placeholder: "Email",
                                className: "form-control",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "loginEmail",
                                children: "Email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: password,
                                id: "loginPassword",
                                placeholder: "Password",
                                className: "form-control",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "loginPassword",
                                children: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "password-confirm",
                                value: confirmPassword,
                                className: "form-control",
                                placeholder: "Confirm Password",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setConfirmPassword(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "password-confirm",
                                children: "Confirm Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary rounded-pill btn-login w-100 mb-2",
                        children: "Sign Up"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mb-0",
                children: [
                    "Already have an account? ",
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "Sign in",
                        href: "/login",
                        className: "hover"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "divider-icon my-4",
                children: "or"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "nav social justify-content-center text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-google",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-google"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-facebook-f",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-facebook-f"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        target: "__blank",
                        className: "btn btn-circle btn-sm btn-twitter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-twitter"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const forms_RegisterForm = (RegisterForm);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/Signup.tsx


const Signup = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "dialog",
        tabIndex: -1,
        "aria-modal": "true",
        id: "modal-signup",
        className: "modal fade",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "modal-dialog modal-dialog-centered modal-sm",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-content text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mb-3 text-start",
                            children: "Sign up to Sandbox"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "lead mb-6 text-start",
                            children: "Registration takes less than a minute."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(forms_RegisterForm, {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const partials_Signup = (Signup);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./utils/currency.ts
const currency = (amount)=>{
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD"
    }).format(amount);
};
/* harmony default export */ const utils_currency = (currency);

;// CONCATENATED MODULE: ./components/blocks/navbar/partials/MiniCart.tsx





const cartItems = [
    {
        id: 1,
        stock: 5,
        quantity: 1,
        name: "Nike Air Sneakers",
        image: "/img/photos/sth1.jpg",
        price: {
            sales: 45,
            regular: 55
        }
    },
    {
        id: 2,
        stock: 5,
        quantity: 1,
        name: "Colorful Sneakers",
        image: "/img/photos/sth2.jpg",
        price: {
            sales: 0,
            regular: 45
        }
    },
    {
        id: 3,
        stock: 5,
        quantity: 1,
        name: "Polaroid Camera",
        image: "/img/photos/sth3.jpg",
        price: {
            sales: 0,
            regular: 45
        }
    }
];
const MiniCart = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "offcanvas offcanvas-end bg-light",
        id: "offcanvas-cart",
        "data-bs-scroll": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mb-0",
                        children: "Your Cart"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "Close"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-body d-flex flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shopping-cart",
                        children: cartItems.map(({ id , price , image , quantity , name  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "shopping-cart-item d-flex justify-content-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                className: "rounded w-17",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/products/1",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: image,
                                                            width: 90,
                                                            height: 100,
                                                            layout: "responsive",
                                                            alt: name
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-100 ms-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "post-title fs-16 lh-xs mb-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                                            title: name,
                                                            href: "/products/1",
                                                            className: "link-dark"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "price fs-sm",
                                                        children: price.sales ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("del", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "amount",
                                                                        children: utils_currency(price.regular)
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ins", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "amount",
                                                                        children: utils_currency(price.sales)
                                                                    })
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "amount",
                                                            children: utils_currency(price.regular)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-select-wrapper",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                            className: "form-select form-select-sm",
                                                            defaultValue: quantity,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "1",
                                                                    children: "1"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "2",
                                                                    children: "2"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "3",
                                                                    children: "3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "4",
                                                                    children: "4"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "5",
                                                                    children: "5"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ms-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "link-dark",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-trash-alt"
                                            })
                                        })
                                    })
                                ]
                            }, id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "offcanvas-footer flex-column text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex w-100 justify-content-between mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Subtotal:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "h6 mb-0",
                                        children: "$135.99"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/checkout",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "uil uil-credit-card fs-18"
                                        }),
                                        " Checkout"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "fs-14 mb-0",
                                children: "Free shipping on all orders over $50"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const partials_MiniCart = (MiniCart);

;// CONCATENATED MODULE: ./components/blocks/navbar/Navbar.tsx



// -------- custom hook -------- //

// -------- custom component -------- //



// -------- partial header component -------- //







// ===================================================================
const Navbar = (props)=>{
    const { navClassName , info , search , social , language , button , cart , fancy , navOtherClass , stickyBox , logoAlt  } = props;
    const [activeNav, setActiveNav] = (0,external_react_.useState)("compiler");
    const sticky = hooks_useSticky(10);
    const navbarRef = (0,external_react_.useRef)(null);
    // dynamically render the logo
    const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";
    // dynamically added navbar classname
    const fixedClassName = "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed shadow-sm mb-5 p-2 bg-white";
    // render inner nav item links
    const renderLinks = (links)=>{
        return links.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(links_ListItemLink, {
                href: item.url,
                title: item.title,
                linkClassName: "dropdown-item"
            }, item.id));
    };
    // all main header contents
    const headerContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-brand w-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                    href: "/",
                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "logo",
                                src: `/img/logo.svg`,
                                srcSet: `/img/logo@2x.png 2x`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "logo",
                                src: `/img/logo2.svg`,
                                className: "px-2"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "offcanvas-nav",
                "data-bs-scroll": "true",
                className: "navbar-collapse offcanvas offcanvas-nav offcanvas-start",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "offcanvas-header d-lg-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-white fs-30 mb-0",
                                children: "Goom"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                "aria-label": "Close",
                                "data-bs-dismiss": "offcanvas",
                                className: "btn-close btn-close-white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "offcanvas-body ms-lg-auto d-flex flex-column h-100",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item dropdown dropdown-mega",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: `nav-link ${activeNav === "Learn" && "item-active"}`,
                                            onClick: ()=>setActiveNav("Learn"),
                                            children: "Learn Python"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: `nav-link ${activeNav === "compiler" && "item-active"}`,
                                            onClick: ()=>setActiveNav("compiler"),
                                            children: "Python Compiler"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: `nav-link ${activeNav === "answers" && "item-active"}`,
                                            onClick: ()=>setActiveNav("answers"),
                                            children: "Python Answers"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: `nav-link ${activeNav === "articles" && "item-active"}`,
                                            onClick: ()=>setActiveNav("articles"),
                                            children: "Articles"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "offcanvas-footer d-lg-none",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            title: "info@email.com",
                                            className: "link-inverse",
                                            href: "mailto:first.last@email.com"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            href: "tel:0123456789",
                                            title: "00 (123) 456 78 90"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: navOtherClass,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "navbar-nav flex-row align-items-center ms-auto",
                    children: [
                        info && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-info-circle"
                                })
                            })
                        }),
                        search && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-search",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-search",
                                    style: {
                                        color: "#FD7C47"
                                    }
                                })
                            })
                        }),
                        button && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item d-none d-md-block",
                            children: button
                        }),
                        cart && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-cart",
                                className: "nav-link position-relative d-flex flex-row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "uil uil-shopping-cart"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "badge badge-cart bg-primary",
                                        children: "3"
                                    })
                                ]
                            })
                        }),
                        social && /*#__PURE__*/ jsx_runtime_.jsx(partials_Social, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item d-lg-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-nav",
                                className: "hamburger offcanvas-nav-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                            })
                        })
                    ]
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                ref: navbarRef,
                className: sticky ? fixedClassName : navClassName,
                style: {
                    position: "sticky",
                    top: "0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container flex-lg-row flex-nowrap align-items-center ",
                    style: {
                        height: "80px"
                    },
                    children: headerContent
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(partials_Signin, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(partials_Signup, {}),
            info && /*#__PURE__*/ jsx_runtime_.jsx(partials_Info, {}),
            search && /*#__PURE__*/ jsx_runtime_.jsx(partials_Search, {}),
            cart && /*#__PURE__*/ jsx_runtime_.jsx(partials_MiniCart, {})
        ]
    });
};
// set deafult Props
Navbar.defaultProps = {
    cart: false,
    info: false,
    social: false,
    search: false,
    language: false,
    stickyBox: true,
    navOtherClass: "navbar-other w-100 d-flex ms-auto",
    navClassName: "navbar navbar-expand-lg center-nav transparent navbar-light shadow-sm mb-5 bg-white"
};
/* harmony default export */ const navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/blocks/navbar/index.ts




/***/ }),

/***/ 9952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2587);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var skulpt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8851);
/* harmony import */ var skulpt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(skulpt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1154);
/* harmony import */ var _styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// import { jsPython } from "jspython-interpreter";
function Playground() {
    const [runLoading, setRunLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const codeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    function handleEditorDidMount(editor, monaco) {
        codeRef.current = editor;
    }
    const handleEditorCopy = ()=>{
        const prog = codeRef.current.getValue();
        if (prog.length > 1) {
            navigator.clipboard.writeText(prog);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("Copied to clipboard", {
                duration: 1500
            });
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("No content to copy", {
                duration: 1300
            });
        }
    };
    const handleEditorDelete = ()=>{
        codeRef.current.setValue("");
    };
    const handleOutputCopy = ()=>{
        const prog = outputRef.current.innerHTML;
        if (prog.length > 1) {
            navigator.clipboard.writeText(prog);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("Copied to clipboard", {
                duration: 1500
            });
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("No content to copy", {
                duration: 1300
            });
        }
    };
    const handleOutputDelete = ()=>{
        outputRef.current.innerHTML = "output cleared";
    };
    const setEditorTheme = async (monaco)=>{
        monaco.editor.defineTheme("onedark", {
            base: "vs-dark",
            inherit: true,
            rules: [
                {
                    token: "comment",
                    foreground: "#5d7988",
                    fontStyle: "italic"
                },
                {
                    token: "constant",
                    foreground: "#e06c75"
                }
            ],
            colors: {
                "editor.background": "#1A1E24"
            }
        });
    };
    function outf(text) {
        var mypre = outputRef.current;
        mypre.innerHTML += text.replace(/\n/g, "<br/>");
    }
    function builtinRead(x) {
        if ((skulpt__WEBPACK_IMPORTED_MODULE_4___default().builtinFiles) === undefined || (skulpt__WEBPACK_IMPORTED_MODULE_4___default().builtinFiles.files)[x] === undefined) throw "File not found: '" + x + "'";
        return (skulpt__WEBPACK_IMPORTED_MODULE_4___default().builtinFiles.files)[x];
    }
    // Here's everything you need to run a python program in skulpt
    // grab the code from your textarea
    // get a reference to your pre element for output
    // configure the output function
    // call Sk.importMainWithBody()
    function runit() {
        setRunLoading(true);
        var prog = codeRef.current.getValue();
        console.log(prog);
        var mypre = outputRef.current;
        mypre.innerHTML = "";
        (skulpt__WEBPACK_IMPORTED_MODULE_4___default().canvas) = "skulpt-canvas";
        (skulpt__WEBPACK_IMPORTED_MODULE_4___default().pre) = "skulpt-output";
        skulpt__WEBPACK_IMPORTED_MODULE_4___default().configure({
            output: outf,
            read: builtinRead
        });
        ((skulpt__WEBPACK_IMPORTED_MODULE_4___default().TurtleGraphics) || ((skulpt__WEBPACK_IMPORTED_MODULE_4___default().TurtleGraphics) = {})).target = "mycanvas";
        var myPromise = skulpt__WEBPACK_IMPORTED_MODULE_4___default().misceval.asyncToPromise(function() {
            return skulpt__WEBPACK_IMPORTED_MODULE_4___default().importMainWithBody("<stdin>", false, prog, true);
        });
        myPromise.then(function(mod) {
            console.log("success");
            setRunLoading(false);
        }, function(err) {
            console.log(err.toString());
            outf('<span class="text-danger">' + err.toString() + "</span>");
            setRunLoading(false);
        });
    }
    //   const runIt = () => {
    //     var prog = codeRef.current.getValue();
    //     console.log(prog);
    //     // const interpreter = jsPython();
    //     // interpreter.evaluate(prog.toString()).then((res) => {
    //     //   consoe.log(res); // 5
    //     //   outf(res);
    //     // });
    //   };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (skulpt__WEBPACK_IMPORTED_MODULE_4___default()) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `bg_primary mb-10 mt-5`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().editor_container)}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().code_ground)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().editor_options)} px-md-5 px-2 pt-3 mx-0`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-light pe-none ${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().code_title)}`,
                                            children: "Input"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: `d-flex`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineContentCopy, {
                                                    role: "button",
                                                    className: "text-light m-1 m-md-0 my-0",
                                                    onClick: handleEditorCopy
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {
                                                    role: "button",
                                                    className: "text-light m-1 m-md-0 my-0 fs-20 ",
                                                    onClick: handleEditorDelete
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `text-light`,
                                            role: "button",
                                            children: "Examples"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: ` ${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().run_btn)}`,
                                                    role: "button",
                                                    disabled: runLoading,
                                                    onClick: runit,
                                                    children: runLoading ? "..." : "Run"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: ` ${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().run_btn_2)}`,
                                                    role: "button",
                                                    children: "Run Visualizer"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "editor-styles",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        beforeMount: setEditorTheme,
                                        width: "100%",
                                        height: "calc(100% - 70px)",
                                        theme: "onedark",
                                        defaultLanguage: "python",
                                        defaultValue: "# here there. welcome to Goom.AI",
                                        options: {
                                            fontFamily: "Hack, 'Fira Code', Consolas, Menlo, Monaco, 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",
                                            scrollBeyondLastLine: false,
                                            scrollBeyondLastColumn: false,
                                            scrollbar: {
                                                alwaysConsumeMouseWheel: false
                                            }
                                        },
                                        onMount: handleEditorDidMount
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().output_container)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().editor_options)} px-5 pt-3 mx-0`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `text-light pe-none`,
                                            children: "Output"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: `d-flex justify-content-end`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdShare, {
                                                    role: "button",
                                                    className: "text-light mx-2 my-0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineContentCopy, {
                                                    role: "button",
                                                    className: "text-light mx-2 my-0",
                                                    onClick: handleOutputCopy
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {
                                                    role: "button",
                                                    className: "text-light mx-2 my-0 fs-20",
                                                    onClick: handleOutputDelete
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: outputRef,
                                    className: `${(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_6___default().output)} px-5 fs-14`,
                                    style: {
                                        fontFamily: "Consolas,monaco,monospace",
                                        fontSize: ".875rem"
                                    },
                                    children: "here there. welcome to Goom.AI"
                                })
                            ]
                        })
                    ]
                })
            })
        }) : null
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playground);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ services_Services14)
});

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
/* harmony default export */ const service_cards_ServiceCard6 = (ServiceCard6);

;// CONCATENATED MODULE: ./components/reuseable/service-cards/index.ts








;// CONCATENATED MODULE: ./icons/solid-mono/Edit.tsx

const Edit = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-fuchsia mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_Edit = (Edit);

// EXTERNAL MODULE: ./icons/solid-mono/Lamp.tsx
var Lamp = __webpack_require__(4694);
;// CONCATENATED MODULE: ./icons/lineal/Team.tsx

const Team = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 409.6 356.2",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-purple me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Team = (Team);

// EXTERNAL MODULE: ./icons/lineal/Check.tsx
var Check = __webpack_require__(850);
;// CONCATENATED MODULE: ./icons/lineal/Medal.tsx

const Medal = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 316.5 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-yellow me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Medal = (Medal);

;// CONCATENATED MODULE: ./icons/lineal/Earth.tsx

const Earth = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-28.1 5.7-55.9 17-81.7C62.1 19.4 182.8-28.1 286.6 17c45.5 19.8 82.3 55.5 103.5 100.4 12.9 27.3 19.6 57.2 19.5 87.4v4.1c-.4 23.5-4.9 46.7-13.3 68.7-2.1 5.5-4.5 11.2-7.2 16.6 0 0 0 .1-.1.1l-.1.3c-7.8 16-17.7 30.8-29.3 44.2-4.1 4.9-11.4 5.5-16.2 1.4-4.9-4.1-5.5-11.4-1.4-16.2.1-.1.1-.2.2-.2 10.4-11.9 19.1-25.2 26-39.4l.2-.3c2.4-4.9 4.5-9.8 6.4-14.7 7.4-19.5 11.4-40.1 11.8-60.9v-3.8c.1-26.8-5.9-53.3-17.3-77.6C335 54.8 257.3 13.3 178.1 25 116.6 34 62.9 75.2 38 132.3c-10 22.9-15.1 47.6-15 72.5 0 100.2 81.5 181.8 181.8 181.8 26.1.1 52-5.6 75.7-16.5 5.8-2.6 12.6.1 15.2 5.9 2.5 5.7 0 12.4-5.6 15-26.7 12.3-55.8 18.7-85.3 18.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M398.1 204.8v3.9c-.4 22.2-4.6 44.1-12.5 64.8-2 5.4-4.3 10.6-6.8 15.7l-.1.3c-19.7-8.2-34.3-25.4-39.3-46.1l-12.2-50.7c-.7-2.8-2.5-5.3-4.9-6.8L311 179c-3.5-2.2-5.5-6.1-5.2-10.2l.8-9.8c.3-3.4 1.9-6.5 4.5-8.7l27.4-23.1c2.6-2.2 5.9-3.3 9.3-3l31.9-2c12.1 25.8 18.4 54 18.4 82.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M378.6 301c-1.5 0-3-.3-4.4-.9-23.1-9.6-40.2-29.7-46.1-54.1L316 195.5l-11-6.8c-7.3-4.4-11.4-12.6-10.6-21.1l.8-9.8c.6-6.4 3.6-12.3 8.6-16.5l27.3-23c4.7-3.9 10.6-6 16.7-5.7l31.2-1.9c4.7-.3 9.1 2.3 11.1 6.6 12.9 27.3 19.6 57.2 19.5 87.4v4.1c-.4 23.5-4.9 46.7-13.3 68.7-2.1 5.5-4.5 11.2-7.2 16.6 0 0 0 .1-.1.1l-.1.3c-2 4.1-6 6.5-10.3 6.5zm-61.4-131.6l10.9 6.7c5.1 3.1 8.7 8.1 10.1 13.9l12.2 50.7c2.3 9.6 7.1 18.3 13.9 25.4 2.7 2.8 5.6 5.3 8.8 7.4.6-1.4 1.1-2.8 1.6-4.1 7.4-19.5 11.4-40.1 11.8-60.9v-3.8c.1-24.2-4.8-48.2-14.2-70.5l-23.9 1.5h-1.8c-.3 0-.6.1-.8.3l-27.4 23.1c-.3.2-.4.5-.4.8l-.8 9.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M197.9 217.9s-22.1 60.7-32 88a19.44 19.44 0 01-18.3 12.8h-.2c-8.3-.1-15.6-5.4-18.2-13.3l-25.4-75.9c-.5-1.4-1.2-2.7-2.2-3.8-1-1.1-2.2-2-3.5-2.7-7.3-3.7-13.3-19-13.3-19l-2.7-22.2c-1.5-12.6-6.9-24.3-15.4-33.7-8.1-9-18.7-15.3-30.4-18.2l-3.4-.8c-2.5-.6-4.1-3.2-3.5-5.8l.3-.9c27.5-58.3 82.2-99.1 145.9-108.8.4-.1.7.1.9.4L191 42.9c.8 1.6 1.2 3.3 1.2 5v2.3c0 3.9-2 7.5-5.4 9.6l-9.2 5.6c-2.5 1.5-4.2 3.9-5 6.6l-11.8 43.2c-1.7 6.3-8.2 10-14.5 8.3-.4-.1-.8-.2-1.2-.4l-6.9-2.6c-5-1.9-12.3-.9-19.4 1-8.7 2.3-14.8 10.3-14.8 19.3 0 8.9 5.8 16.6 14.3 19.2 7.8 2.3 14.6 20.1 36.2 20.1 0 0 38-4.8 43.2 6.9 4.3 9.8 3.8 20.9.2 30.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M147.6 330.1h-.2c-13.2-.1-24.9-8.6-29.1-21.1L93 233.2c-10.4-5.3-17-20.5-18.8-25-.4-.9-.6-1.9-.7-2.8l-2.6-22.2c-1.2-10.2-5.6-19.7-12.5-27.3-6.6-7.3-15.2-12.4-24.7-14.8l-3.4-.8c-8.7-2.2-14-11-11.8-19.7.3-1 .6-2 1.1-3 29-61.8 87-105.1 154.6-115.2.6-.1 1.2-.1 1.8-.1 4.7 0 8.9 2.6 11 6.8l14.4 28.8c1.6 3.2 2.4 6.6 2.4 10.2v2.3c0 7.9-4.1 15.3-10.9 19.4l-9.1 5.6-11.8 42.8c-2.8 10.1-12 17.2-22.5 17.2-2.9 0-5.8-.5-8.5-1.6l-6.8-2.6c-.8-.2-1.5-.3-2.3-.2-3.4.1-6.8.7-10 1.6-3.7 1-6.3 4.3-6.3 8.2 0 1.1.2 2.1.6 3.1.9 2.4 2.9 4.3 5.4 5 5.4 1.6 9.3 5.5 13 9.2 5.2 5.2 10.2 10.2 19.3 10.4 5.7-.6 11.5-1 17.3-1 13.1 0 31.2 1.5 37 14.8 5.2 11.8 5.4 25.8.4 39.4 0 0-22.1 60.7-32 88-4.4 12.3-16 20.4-29 20.4zm-44.2-117.4c5.4 2.7 9.4 7.4 11.3 13.1l25.4 75.9c1.1 3.2 4.1 5.4 7.4 5.4h.1c3.3 0 6.3-2.1 7.5-5.2 9.9-27.2 32-88 32-88 2.7-7.5 2.9-15 .6-21.2-1.4-.6-5.7-2.1-16.4-2.1-5.1 0-10.2.3-15.2.9-.5.1-1 .1-1.4.1-19.1 0-29.8-10.8-36.2-17.2-1.2-1.3-2.5-2.5-3.8-3.6-13.1-4.1-22-16.3-22-30 0-14.2 9.6-26.7 23.3-30.4 5.2-1.5 10.6-2.3 16-2.4 3.6-.1 7.1.5 10.4 1.7l7.1 2.7c.1 0 .1 0 .2-.1.1 0 .1-.1.1-.2L161.5 69c1.5-5.6 5.1-10.4 10.1-13.4l9.1-5.5V48l-10.8-21.6c-54.1 10.5-100.4 45-126 93.8 26.9 8.7 46.3 32.3 49.7 60.3l2.4 20.6c2.2 5 5.6 10.4 7.4 11.6z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Earth = (Earth);

// EXTERNAL MODULE: ./icons/lineal/Shield.tsx
var Shield = __webpack_require__(8192);
// EXTERNAL MODULE: ./icons/lineal/Target.tsx
var Target = __webpack_require__(9228);
;// CONCATENATED MODULE: ./icons/lineal/Search.tsx

const Search = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 511.9",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-yellow mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "lineal-fill",
                cx: "297.1",
                cy: "214.9",
                r: "111.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Search = (Search);

// EXTERNAL MODULE: ./icons/lineal/ChatTwo.tsx
var ChatTwo = __webpack_require__(9896);
;// CONCATENATED MODULE: ./icons/solid-duo/Script.tsx

const Script = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256.02 213.34",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M162.66 106.34a8 8 0 01-6.06-13.2l11.54-13.47-11.54-13.45a8 8 0 1112.14-10.42l16 18.67a8 8 0 010 10.42l-16 18.67a8 8 0 01-6.08 2.78zm-69.31 0a8 8 0 01-6.08-2.78l-16-18.67a8 8 0 010-10.42l16-18.67a8 8 0 0112.15 10.42L87.88 79.67l11.54 13.46a8 8 0 01-6.07 13.21zm24.87 15.8a8 8 0 01-6-9.6l16-69.33a8 8 0 1115.6 3.6l-16 69.33a8 8 0 01-9.6 6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M237.33 0H18.67A18.76 18.76 0 000 18.67v144a18.76 18.76 0 0018.67 18.67h81.68c-1.25 5.35-4.57 14-13.45 22.9a5.33 5.33 0 003.77 9.1h74.67a5.33 5.33 0 003.78-9.1c-8.86-8.86-12.27-17.54-13.6-22.9h81.82A18.77 18.77 0 00256 162.67v-144A18.79 18.79 0 00237.33 0zm-2.66 138.67H21.33V21.34h213.33v117.33z"
            })
        ]
    });
};
/* harmony default export */ const solid_duo_Script = (Script);

;// CONCATENATED MODULE: ./icons/solid-mono/Verify.tsx

const Verify = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-navy me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M186.67 117.33A69.34 69.34 0 10256 186.68a69.43 69.43 0 00-69.33-69.35zm37.34 55L186.68 215a10.65 10.65 0 01-7.68 3.63h-.35a10.67 10.67 0 01-7.53-3.12l-21.33-21.33a10.67 10.67 0 0115.09-15.09l13.26 13.27L208 158.3a10.67 10.67 0 1116 14.07z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M177.92 32.32L92.58.32a5.88 5.88 0 00-3.84 0l-85.35 32a5.36 5.36 0 00-3.39 5v68.59c0 97.28 88.64 117.76 89.5 118a6.28 6.28 0 002.34 0 73.48 73.48 0 0010.77-3.41A89.34 89.34 0 0196 186.68a90.78 90.78 0 0185.34-90.56V37.35a5.38 5.38 0 00-3.42-5z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_Verify = (Verify);

;// CONCATENATED MODULE: ./icons/solid-duo/Server.tsx

const Server = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M250.58 126.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.19 8.19 0 003.12.62 7.85 7.85 0 003.12-.64c2.5-1.06 60.88-26.48 60.88-78.78v-42.87a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19l10.22 8.77 22.47-28.57a10.66 10.66 0 0116.77 13.18z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M202.67 0H32a32 32 0 000 64h170.67a32 32 0 000-64zM32 42.67A10.67 10.67 0 1142.67 32 10.67 10.67 0 0132 42.67zm42.67 0A10.67 10.67 0 1185.34 32a10.67 10.67 0 01-10.67 10.67zM32 85.33a32 32 0 000 64h74.67v-15.57a29.38 29.38 0 0120-27.84l55.89-19a29 29 0 019.49-1.6zM32 128a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0132 128zm42.67 0a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0174.67 128zm32 48.53v-5.87H32a32 32 0 000 64h95.68c-12.27-15.57-21.01-35.09-21.01-58.13zM32 213.33a10.67 10.67 0 1110.67-10.66A10.7 10.7 0 0132 213.33zm42.67 0a10.67 10.67 0 1110.67-10.66 10.7 10.7 0 01-10.67 10.66z"
            })
        ]
    });
};
/* harmony default export */ const solid_duo_Server = (Server);

;// CONCATENATED MODULE: ./icons/solid-duo/Setting.tsx

const Setting = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 213.34",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M177.81 73.28c.11-1.28.21-2.56.21-4s-.12-2.67-.21-4l8.85-6.52a13.19 13.19 0 003.63-17.07l-7.89-13.98a12.76 12.76 0 00-16.64-5.44L156 26.86a51.33 51.33 0 00-6.08-3.63l-1.12-11.39A13 13 0 00135.89 0H120.1a13 13 0 00-12.92 11.84l-1.07 11.41a51.33 51.33 0 00-6.11 3.63l-9.81-4.59a12.86 12.86 0 00-16.64 5.44L65.7 41.81a13.12 13.12 0 003.63 17.07l8.85 6.51c-.12 1.28-.21 2.56-.21 4s.11 2.68.21 4l-8.85 6.51a13.12 13.12 0 00-3.62 17l7.89 14.08a12.84 12.84 0 0016.64 5.44l9.81-4.59a51.33 51.33 0 006.08 3.63l1.07 11.41a13 13 0 0012.91 11.84h15.79a13 13 0 0012.92-11.84l1.07-11.41a51.33 51.33 0 006.08-3.63l9.81 4.59a12.76 12.76 0 0016.64-5.44l7.88-14.08a13.12 13.12 0 00-3.63-17.07zm-23.14-3.94A26.67 26.67 0 11128 42.67a26.69 26.69 0 0126.67 26.67z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M224 149.34H32a32 32 0 000 64h192a32 32 0 000-64zM42.67 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0142.67 192zM96 192a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 0196 192zm64 0a10.67 10.67 0 1110.67-10.66A10.67 10.67 0 01160 192zm53.33 0A10.67 10.67 0 11224 181.34 10.67 10.67 0 01213.33 192z"
            })
        ]
    });
};
/* harmony default export */ const solid_duo_Setting = (Setting);

;// CONCATENATED MODULE: ./icons/solid-mono/TeamTwo.tsx

const TeamTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.98 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-violet mb-3"}`,
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
                d: "M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_TeamTwo = (TeamTwo);

;// CONCATENATED MODULE: ./icons/lineal/ShopTwo.tsx

const ShopTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 466.4",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-green me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M201.4 172.5h-96l26.1-158.4h83zm205.2 0h-96L297.5 14.1h83zm-216.7 97.1c7.2-7 16.8-10.9 26.9-10.8 9.6 0 18.8 3.1 26.9 5.8 4 1.4 8.1 2.6 12.3 3.5 4.2-.9 8.3-2.1 12.3-3.5 8.1-2.7 17.3-5.8 26.9-5.8 10-.1 19.7 3.7 26.9 10.8 24.4 22.9 15.9 48.4 10.9 63.7l-.3.8c-4.6 14-22 59.8-51.4 59.8-15.6 0-20.9-2.5-24.8-4.4l-.6-.3-.6.3c-3.9 1.9-9.1 4.4-24.8 4.4-29.3 0-46.7-45.8-51.4-59.8l-.3-.8c-4.8-15.3-13.3-40.8 11.1-63.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M511.1 147.4l-6.4-25.9c-1.9-7.6-9.6-12.1-17.2-10.2-7.5 1.9-12.1 9.5-10.3 17l6.4 25.9c.4 1.8-.7 3.6-2.5 4.1-.3.1-.5.1-.8.1h-61.7l-14.2-86-7.3-44.1h52.6c1.5 0 2.9 1 3.2 2.5l6.6 26.8c1.9 7.6 9.6 12.1 17.2 10.2 7.5-1.9 12.1-9.5 10.3-17L480.5 24C477 9.9 464.3 0 449.8 0H62.2C47.7 0 35 9.9 31.5 24L.9 147.4c-4.2 17 6.1 34.1 23.1 38.3 2.5.6 5.1.9 7.6.9h8.1v265.6c0 7.8 6.3 14.1 14.2 14.1h404.2c7.8 0 14.1-6.3 14.1-14.1V257.8c0-7.8-6.3-14.2-14.1-14.2s-14.2 6.3-14.2 14.1V438H68V186.7h412.4c17.5 0 31.6-14.2 31.6-31.6 0-2.6-.3-5.2-.9-7.7zM227.5 28.3h56.9l10.8 130.1h-78.4l10.7-130.1zM29 157.1c-.7-.8-.9-1.9-.6-2.9L59 30.8c.4-1.5 1.7-2.5 3.2-2.5h52.6l-5.3 32.1-16.2 98H31.6c-1 0-2-.5-2.6-1.3zm98.3-30.8l16.2-98h55.6l-10.7 130.1H122l5.3-32.1zm196.3 32.1L315.2 57l-2.4-28.7h55.6l16.2 98 5.3 32.1h-66.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M256 220c-7.8 0-14.1 6.3-14.1 14.1v15c-7.4-2.3-15.9-4.4-25-4.4-13.6-.1-26.8 5.1-36.6 14.6-31 29.1-19.9 62.4-14.6 78.4l.3.8c6.9 20.9 27 69.5 64.8 69.5 12.6 0 19.9-1.5 25.3-3.4 5.4 2 12.8 3.4 25.3 3.4 37.8 0 57.9-48.6 64.8-69.5l.3-.8c5.3-16 16.3-49.3-14.6-78.4-9.8-9.5-22.9-14.7-36.6-14.6-9.1 0-17.6 2.1-25 4.4v-15c-.1-7.8-6.4-14.1-14.3-14.1zm39.2 53c6.4-.1 12.7 2.4 17.2 6.9 16.5 15.5 13 31.3 7.1 48.9l-.3.8c-8.2 24.9-23.2 50.1-37.9 50.1-12.4 0-15.8-1.7-18.6-3l-.7-.3c-3.9-1.8-8.3-1.8-12.2 0l-.6.3c-2.8 1.3-6.2 3-18.6 3-14.8 0-29.7-25.1-37.9-50l-.3-.8c-5.8-17.6-9.3-33.4 7.1-48.9 4.5-4.6 10.8-7.1 17.2-6.9 7.3 0 15 2.6 22.5 5 4.6 1.7 9.4 3 14.2 4 1.7.3 3.3.3 5 0 4.8-1 9.6-2.3 14.2-4 7.6-2.6 15.3-5.1 22.6-5.1z"
            })
        ]
    });
};
/* harmony default export */ const lineal_ShopTwo = (ShopTwo);

// EXTERNAL MODULE: ./icons/lineal/Browser.tsx
var Browser = __webpack_require__(3652);
;// CONCATENATED MODULE: ./icons/solid-duo/Director.tsx

const Director = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M163.78 19.12A42.63 42.63 0 00128 0c-18.54 0-34.77 11.81-40.14 28.34C74.26 31 64 42.66 64 56.53c0 15.89 13.42 28.8 29.92 28.8h63.3c19.18 0 34.78-15 34.78-33.43 0-16.22-12.08-29.87-28.22-32.78z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M224 168a8 8 0 01-8-8v-16H40v16a8 8 0 01-16 0v-24a8 8 0 018-8h192a8 8 0 018 8v24a8 8 0 01-8 8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M128 170.67a8 8 0 01-8-8v-48a8 8 0 0116 0v48a8 8 0 01-8 8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "fill-primary",
                cx: "32",
                cy: "197.33",
                r: "16"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M40 224H24a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "fill-primary",
                cx: "128",
                cy: "197.33",
                r: "16"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M136 224h-16a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "fill-primary",
                cx: "224",
                cy: "197.33",
                r: "16"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M232 224h-16a24 24 0 00-24 24 8 8 0 008 8h48a8 8 0 008-8 24 24 0 00-24-24z"
            })
        ]
    });
};
/* harmony default export */ const solid_duo_Director = (Director);

;// CONCATENATED MODULE: ./icons/lineal/Settings.tsx

const Settings = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "lineal-fill",
                cx: "256",
                cy: "256",
                r: "112.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M256 382.6c-69.9 0-126.6-56.7-126.6-126.6S186.1 129.4 256 129.4 382.6 186.1 382.6 256c-.1 69.9-56.7 126.5-126.6 126.6zm0-225.1c-54.4 0-98.5 44.1-98.5 98.5s44.1 98.5 98.5 98.5 98.5-44.1 98.5-98.5c-.1-54.4-44.1-98.4-98.5-98.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M279.4 512h-46.8c-16.2 0-29.4-13.2-29.4-29.4v-19.2c-19.9-5-38.9-12.9-56.5-23.4l-13.6 13.6c-5.5 5.5-14.4 5.5-19.9 0s-5.5-14.4 0-19.9l21.6-21.5c4.8-4.8 12.2-5.5 17.8-1.7 20.4 13.7 43.3 23.2 67.5 27.9 6.6 1.3 11.4 7.1 11.4 13.8v30.5c0 .7.6 1.3 1.3 1.3h46.8c.7 0 1.3-.6 1.3-1.3v-30.5c0-6.7 4.8-12.5 11.4-13.8 24.1-4.7 47.1-14.2 67.5-28 5.6-3.7 13-3 17.8 1.7l21.5 21.5c.5.5 1.3.5 1.8 0l33.1-33.1c.5-.5.5-1.3 0-1.8l-21.5-21.5c-4.8-4.8-5.5-12.2-1.7-17.8 13.8-20.4 23.3-43.3 28-67.5 1.3-6.6 7.1-11.4 13.8-11.4h30.5c.7 0 1.3-.6 1.3-1.3v-46.8c0-.7-.6-1.3-1.3-1.3h-30.5c-6.7 0-12.5-4.8-13.8-11.4-4.7-24.1-14.3-47.1-28-67.5-3.7-5.6-3-13 1.7-17.8l21.5-21.6c5.6-5.4 14.5-5.2 19.9.3 5.3 5.5 5.3 14.1 0 19.6l-13.9 14c10.5 17.6 18.4 36.7 23.4 56.6h19.2c16.2 0 29.3 13.2 29.4 29.4v46.8c0 16.2-13.2 29.4-29.4 29.4h-19.2c-5 19.9-12.9 38.9-23.4 56.5l13.6 13.6c11.5 11.5 11.5 30.1 0 41.6l-33.1 33.1c-11.5 11.5-30.1 11.5-41.6 0L365.3 440a211.57 211.57 0 01-56.5 23.4v19.2c-.1 16.3-13.2 29.4-29.4 29.4zm-211-109.1c-7.8 0-14.1-6.3-14-14.1 0-3.7 1.5-7.3 4.1-9.9L72 365.3a211.57 211.57 0 01-23.4-56.5H29.4C13.2 308.8 0 295.6 0 279.4v-46.8c0-16.2 13.2-29.4 29.4-29.4h19.2c5-19.9 12.9-38.9 23.4-56.5l-13.6-13.6C47 121.6 47 103 58.4 91.5l33.1-33.1c11.5-11.5 30.1-11.5 41.6 0L146.7 72c17.6-10.5 36.7-18.4 56.5-23.4V29.4c0-16.2 13.2-29.4 29.4-29.4h46.8c16.2 0 29.4 13.2 29.4 29.4v19.2c19.9 5 38.9 12.9 56.5 23.4l13.6-13.6c5.5-5.5 14.4-5.5 19.9 0s5.5 14.4 0 19.9l-21.5 21.6c-4.8 4.8-12.2 5.5-17.8 1.7-20.4-13.7-43.3-23.2-67.5-28-6.6-1.3-11.4-7.1-11.4-13.8V29.4c0-.7-.6-1.3-1.3-1.3h-46.8c-.7 0-1.3.6-1.3 1.3v30.5c0 6.7-4.8 12.5-11.4 13.8-24.1 4.7-47.1 14.2-67.5 28-5.6 3.8-13 3-17.8-1.7L113 78.4c-.5-.5-1.3-.5-1.8 0l-33.1 33.1c-.5.5-.5 1.3 0 1.8l21.6 21.6c4.8 4.8 5.5 12.2 1.7 17.8-13.8 20.4-23.3 43.3-28 67.5-1.3 6.6-7.1 11.4-13.8 11.4H29.4c-.7 0-1.3.6-1.3 1.3v46.8c0 .7.6 1.3 1.3 1.3h30.5c6.7 0 12.5 4.8 13.8 11.4 4.7 24.1 14.2 47.1 28 67.5 3.7 5.6 3 13-1.7 17.8l-21.6 21.5c-2.7 2.3-6.3 3.7-10 3.7z"
            })
        ]
    });
};
/* harmony default export */ const lineal_Settings = (Settings);

// EXTERNAL MODULE: ./icons/lineal/Telephone.tsx
var Telephone = __webpack_require__(1606);
;// CONCATENATED MODULE: ./icons/lineal/SearchTwo.tsx

const SearchTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 511.9",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-pink mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "lineal-fill",
                cx: "297.1",
                cy: "214.9",
                r: "111.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
            })
        ]
    });
};
/* harmony default export */ const lineal_SearchTwo = (SearchTwo);

// EXTERNAL MODULE: ./icons/lineal/Analytics.tsx
var Analytics = __webpack_require__(5754);
// EXTERNAL MODULE: ./icons/lineal/Megaphone.tsx
var Megaphone = __webpack_require__(7818);
;// CONCATENATED MODULE: ./icons/lineal/ClockThree.tsx

const ClockThree = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 391.2",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-red me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M148.9 61.3C136 24.4 95.7 4.9 58.8 17.8S2.4 71.1 15.3 108c6.5 18.5 20.3 33.5 38.3 41.4 15.9-42.8 51.3-75.5 95.3-88.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M53.5 160.7c-1.6 0-3.1-.4-4.6-1C7.5 141.4-11.3 93 7 51.5s66.8-60.3 108.2-42c20.8 9.2 36.9 26.6 44.4 48.1 2.1 5.9-1 12.3-6.9 14.4-.2.1-.4.1-.6.2-40.5 11.6-73.1 41.7-87.9 81.1-1.8 4.5-6 7.4-10.7 7.4zM82.1 25.2c-32.8 0-59.5 26.6-59.5 59.5 0 19.4 9.5 37.7 25.4 48.8C65.2 97.2 95.8 69 133.4 54.7c-10.7-18.3-30.2-29.5-51.3-29.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M327.5 13.9c-30.1 0-56.9 19-66.8 47.5 44 12.6 79.4 45.2 95.4 88.1 35.8-15.8 52-57.6 36.2-93.3-11.3-25.8-36.7-42.3-64.8-42.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M356.1 160.7c-4.7 0-8.9-2.9-10.6-7.4-14.8-39.5-47.4-69.6-87.9-81.2-6-1.7-9.5-8-7.8-14 .1-.2.1-.4.2-.6C264.9 14.7 311.7-7.9 354.5 7S420 68.8 405 111.7c-7.5 21.5-23.6 38.9-44.4 48.1-1.4.6-2.9.9-4.5.9zM276.2 54.6c37.6 14.3 68.1 42.5 85.4 78.8 26.9-18.8 33.5-55.9 14.7-82.8s-55.9-33.5-82.8-14.7c-7.1 4.9-13 11.3-17.3 18.7zm-79.4 176c-3.1 0-6.1-.7-8.8-2.1l-45.1-22.6c-5.6-2.8-7.8-9.6-5-15.2s9.6-7.8 15.2-5l43.3 21.6 57.4-57.4c4.4-4.4 11.6-4.4 16 0s4.4 11.6 0 16l-58.9 58.9c-3.8 3.7-8.8 5.8-14.1 5.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 391.2c-96.8 0-175.6-78.8-175.6-175.6S108 39.9 204.8 39.9c69.8 0 133 41.3 161 105.2 2.5 5.7-.1 12.4-5.9 14.9s-12.4-.1-14.9-5.9c-24.4-55.7-79.4-91.7-140.2-91.7-84.4 0-153 68.6-153 153s68.6 153 153 153 153-68.6 153-153c-.2-6.2 4.7-11.5 11-11.6 6.2-.2 11.5 4.7 11.6 11v.7c0 96.9-78.8 175.7-175.6 175.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M287.1 281.5c-1.9 0-3.7-.5-5.4-1.4l-102.4-55.7c-5.5-3-7.5-9.8-4.5-15.3s9.8-7.5 15.3-4.5l102.5 55.7c5.5 3 7.5 9.8 4.5 15.3-2 3.6-5.8 5.9-10 5.9zm-82.3-178.4c-6.2 0-11.3-5-11.3-11.3V51.2c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.3-5 11.3-11.3 11.4zm0 288.1c-6.2 0-11.3-5.1-11.3-11.3v-40.5c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.2-5 11.3-11.3 11.3zm164.3-164.3h-40.5c-6.2.2-11.5-4.7-11.6-11-.2-6.2 4.7-11.5 11-11.6h41.2c6.2.2 11.2 5.4 11 11.6-.3 6-5.1 10.8-11.1 11zm-288.1 0H40.5c-6.2-.2-11.2-5.4-11-11.6.2-6 5-10.8 11-11H81c6.2.2 11.2 5.4 11 11.6-.2 6-5 10.8-11 11z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M241.2 62.5c-6.2 0-11.3-5.1-11.3-11.3V27.9c0-2.9-2.4-5.3-5.3-5.3H185c-2.9 0-5.3 2.4-5.3 5.3v23.4c0 6.2-5.1 11.3-11.3 11.3s-11.3-5.1-11.3-11.3V27.9C157.1 12.5 169.6 0 185 0h39.6c15.4 0 27.9 12.5 27.9 27.9v23.4c-.1 6.2-5.1 11.2-11.3 11.2z"
            })
        ]
    });
};
/* harmony default export */ const lineal_ClockThree = (ClockThree);

;// CONCATENATED MODULE: ./icons/solid-mono/DeliveryBox.tsx

const DeliveryBox = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-green mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_DeliveryBox = (DeliveryBox);

;// CONCATENATED MODULE: ./icons/solid-duo/CloudNetwork.tsx

const CloudNetwork = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256.03 256.02",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M193.17 36.14C180.21 14.05 155.12 0 128 0 93.52 0 63.55 22.64 55.62 53.65c-25.27 2.75-44.95 23.09-44.95 47.68 0 26.46 22.79 48 50.79 48h123.6c33.24 0 60.28-25.52 60.28-56.9 0-28.67-22.57-52.62-52.17-56.29z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M245.34 208h-74.67v-8A18.69 18.69 0 00152 181.33h-13.33V144a10.67 10.67 0 10-21.34 0v37.33H104A18.69 18.69 0 0085.33 200v8H10.66a10.67 10.67 0 000 21.34h74.68v8A18.7 18.7 0 00104 256h48a18.7 18.7 0 0018.67-18.68v-8h74.67a10.67 10.67 0 100-21.34z"
            })
        ]
    });
};
/* harmony default export */ const solid_duo_CloudNetwork = (CloudNetwork);

;// CONCATENATED MODULE: ./icons/lineal/SmartphoneTwo.tsx

const SmartphoneTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 306.7 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-red mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M11.1 348.5c-6.1 0-11.1-5-11.1-11.1V72.2C0 66 5 61.1 11.1 61.1h284.5c6.1 0 11.1 5 11.1 11.1V257c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1V83.2H22.2v254.2c0 6.2-5 11.2-11.1 11.1 0 .1 0 .1 0 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M48.8 398.5H258c20.8 0 37.7-16.9 37.7-37.7v-23.4H11.1v23.4c0 20.8 16.9 37.7 37.7 37.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M258 409.6H48.8C21.9 409.6 0 387.7 0 360.8v-23.4c0-6.1 5-11.1 11.1-11.1h284.5c6.1 0 11.1 5 11.1 11.1v23.4c0 26.9-21.8 48.7-48.7 48.8zM22.2 348.5v12.3c0 14.7 11.9 26.6 26.6 26.6H258c14.7 0 26.6-11.9 26.6-26.6v-12.3H22.2zM295.6 83.2H11.1C5 83.2 0 78.3 0 72.2V48.8C0 21.9 21.9 0 48.8 0H258c26.9 0 48.8 21.9 48.8 48.8v23.4c0 6.1-5 11-11.2 11zM22.2 61h262.3V48.8c0-14.7-11.9-26.5-26.5-26.6H48.8c-14.7 0-26.6 11.9-26.6 26.6V61z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "st2",
                d: "M65.1 130.8L85 145.3l23.3-28.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M85 156.4c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.6s5.5 10.9 1.6 15.6l-23.3 28.8c-2 2.6-5.2 4.1-8.6 4.1zM241.7 142H159c-6.1-.2-11-5.3-10.8-11.4.2-5.9 4.9-10.6 10.8-10.8h82.7c6.1.2 11 5.3 10.8 11.4-.2 5.9-4.9 10.6-10.8 10.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "st2",
                d: "M65.1 204.8L85 219.2l23.3-28.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M85 230.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5l11.5 8.3 16.7-20.7c3.8-4.8 10.8-5.5 15.6-1.7s5.5 10.8 1.7 15.6l-23.3 28.9c-2.1 2.6-5.3 4.1-8.7 4.1zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "st2",
                d: "M65.1 278.8L85 293.2l23.3-28.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M85 304.3c-2.3 0-4.6-.7-6.5-2.1l-20-14.4c-5-3.6-6.1-10.5-2.5-15.5s10.5-6.1 15.5-2.5L83 278l16.7-20.7c3.9-4.8 10.9-5.5 15.6-1.7s5.5 10.9 1.7 15.6l-23.3 28.9c-2.1 2.7-5.3 4.2-8.7 4.2zm156.7-14.4H159c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1h82.7c6.1 0 11.1 5 11.1 11.1s-5 11.1-11.1 11.1z"
            })
        ]
    });
};
/* harmony default export */ const lineal_SmartphoneTwo = (SmartphoneTwo);

// EXTERNAL MODULE: ./icons/lineal/SettingsThree.tsx
var SettingsThree = __webpack_require__(7573);
;// CONCATENATED MODULE: ./icons/lineal/CloudComputing.tsx

const CloudComputing = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 361.2",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-primary me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
            })
        ]
    });
};
/* harmony default export */ const lineal_CloudComputing = (CloudComputing);

// EXTERNAL MODULE: ./types/demo-1.ts
var demo_1 = __webpack_require__(6158);
// EXTERNAL MODULE: ./utils/color.ts
var color = __webpack_require__(9957);
// EXTERNAL MODULE: ./assets/svgs/gpt.svg
var gpt = __webpack_require__(5808);
;// CONCATENATED MODULE: ./assets/svgs/ai.svg
/* harmony default export */ const ai = ({"src":"/_next/static/media/ai.f41018f8.svg","height":56,"width":56});
;// CONCATENATED MODULE: ./assets/svgs/pla.svg
/* harmony default export */ const pla = ({"src":"/_next/static/media/pla.2f01b321.svg","height":55,"width":55});
;// CONCATENATED MODULE: ./data/service.ts


































// used in the services-1 block
const serviceList1 = [
    {
        id: 1,
        link: "#",
        icon: lineal_Search,
        title: "SEO Services",
        linkText: "Learn More",
        linkType: demo_1/* LinkType.yellow */.U.yellow,
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 2,
        link: "#",
        icon: Browser/* default */.Z,
        title: "Web Design",
        linkText: "Learn More",
        linkType: demo_1/* LinkType.red */.U.red,
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 3,
        link: "#",
        icon: ChatTwo/* default */.Z,
        linkType: demo_1/* LinkType.green */.U.green,
        title: "Social Engagement",
        linkText: "Learn More",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 4,
        link: "#",
        icon: Megaphone/* default */.Z,
        linkType: demo_1/* LinkType.blue */.U.blue,
        title: "Content Marketing",
        linkText: "Learn More",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    }
];
// used in the services-3, services-8, services-13 block
const serviceList2 = [
    {
        id: 1,
        linkUrl: "#",
        title: "24/7 Support",
        icon: "uil-phone-volume",
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
    },
    {
        id: 2,
        linkUrl: "#",
        title: "Secure Payments",
        icon: "uil-shield-exclamation",
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
    },
    {
        id: 3,
        linkUrl: "#",
        title: "Daily Updates",
        icon: "uil-laptop-cloud",
        description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
    }
];
// used in the services-4 block
const serviceList3 = [
    {
        id: 1,
        linkUrl: "#",
        title: "24/7 Support",
        icon: "uil-phone-volume",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
    },
    {
        id: 2,
        linkUrl: "#",
        title: "Secure Payments",
        icon: "uil-shield-exclamation",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
    },
    {
        id: 3,
        linkUrl: "#",
        title: "Daily Updates",
        icon: "uil-laptop-cloud",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
    },
    {
        id: 4,
        linkUrl: "#",
        title: "Market Research",
        icon: "uil-chart-line",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
    }
];
// used in the services-5 block
const serviceList4 = [
    {
        id: 1,
        Icon: Telephone/* default */.Z,
        title: "24/7 Support",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 2,
        Icon: Shield/* default */.Z,
        title: "Secure Payments",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 3,
        Icon: lineal_CloudComputing,
        title: "Daily Updates",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 4,
        Icon: Analytics/* default */.Z,
        title: "Market Research",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 5,
        Icon: lineal_Settings,
        title: "System Integration",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 6,
        Icon: lineal_Earth,
        title: "SEO Services",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    }
];
// used in the services-6 block
const serviceList5 = (/* unused pure expression or super */ null && ([
    [
        "Aenean quam ornare curabitur blandit consectetur.",
        "Nullam quis risus eget urna mollis ornare aenean leo."
    ],
    [
        "Etiam porta euismod malesuada mollis nisl ornare.",
        "Vivamus sagittis lacus augue rutrum maecenas odio."
    ]
]));
// used in the services-7 block
const serviceList6 = [
    {
        id: 1,
        Icon: Target/* default */.Z,
        color: color/* default.aqua */.Z.aqua,
        title: "Fitness Goal",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 2,
        Icon: lineal_Medal,
        color: color/* default.yellow */.Z.yellow,
        title: "Activity Tracking",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 3,
        Icon: lineal_ClockThree,
        color: color/* default.red */.Z.red,
        title: "Sleep Analysis",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 4,
        Icon: Check/* default */.Z,
        color: color/* default.pink */.Z.pink,
        title: "Workout Report",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 5,
        Icon: lineal_ShopTwo,
        color: color/* default.green */.Z.green,
        title: "Nutritional Analysis",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 6,
        Icon: lineal_Team,
        color: color/* default.purple */.Z.purple,
        title: "Activity Sharing",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    }
];
// used in the services-9 block
const serviceList7 = [
    {
        id: 1,
        Icon: Telephone/* default */.Z,
        color: color/* default.yellow */.Z.yellow,
        title: "24/7 Support",
        cardColor: "bg-pale-yellow",
        columnClass: "col-md-5 offset-md-1 align-self-end",
        description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta."
    },
    {
        id: 2,
        Icon: Shield/* default */.Z,
        color: color/* default.red */.Z.red,
        title: "Secure Payments",
        cardColor: "bg-pale-red",
        columnClass: "col-md-6 align-self-end",
        description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta."
    },
    {
        id: 3,
        color: color/* default.leaf */.Z.leaf,
        Icon: lineal_CloudComputing,
        title: "Daily Updates",
        cardColor: "bg-pale-leaf",
        columnClass: "col-md-5",
        description: "Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 4,
        Icon: Analytics/* default */.Z,
        color: color/* default.primary */.Z.primary,
        title: "Market Research",
        cardColor: "bg-pale-primary",
        columnClass: "col-md-6 align-self-start",
        description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget."
    }
];
// used in the services-18 block
const serviceList8 = [
    {
        id: 1,
        Icon: Browser/* default */.Z,
        title: "Web Design",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
    },
    {
        id: 2,
        Icon: lineal_SmartphoneTwo,
        title: "Mobile Design",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
    },
    {
        id: 3,
        Icon: SettingsThree/* default */.Z,
        title: "Development",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
    },
    {
        id: 4,
        title: "SEO",
        Icon: lineal_SearchTwo,
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
    }
];
// used in the services-19 block
const serviceList9 = [
    {
        id: 1,
        linkUrl: "#",
        color: color/* default.purple */.Z.purple,
        title: "Detect ChatGPT Content",
        icon: gpt/* default */.Z,
        description: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content"
    },
    {
        id: 2,
        linkUrl: "#",
        color: color/* default.green */.Z.green,
        title: "Detect Plagiarised Content",
        icon: ai,
        description: `Contentdetector.ai not just detects AI content but also detect plagiarism from the writers give what it can be done`
    },
    {
        id: 3,
        linkUrl: "#",
        color: color/* default.orange */.Z.orange,
        title: "Detect Content by AI Writing Software",
        icon: pla,
        description: `Most of the AI writers such as Jasper or copy.ai or that exist today currently use openai’s GPT 3. Our detector will be able to detect content written using any of the software`
    }
];
// used in the services-20 block
const serviceList10 = [
    {
        id: 1,
        linkUrl: "#",
        Icon: solid_duo_Script,
        title: "Software & Integration",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 2,
        linkUrl: "#",
        Icon: solid_mono_Verify,
        title: "Network Security",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 3,
        linkUrl: "#",
        Icon: solid_duo_CloudNetwork,
        title: "Cloud Services",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 4,
        linkUrl: "#",
        Icon: solid_duo_Director,
        title: "Wireless Networking",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 5,
        linkUrl: "#",
        Icon: solid_duo_Setting,
        title: "IT Solutions",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    },
    {
        id: 6,
        linkUrl: "#",
        Icon: solid_duo_Server,
        title: "Server Configuration",
        description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
    }
];
// used in the services-21 block
const serviceList11 = [
    {
        id: 1,
        link: "#",
        Icon: solid_mono_Edit,
        title: "Content Marketing",
        linkType: demo_1/* LinkType.fuchsia */.U.fuchsia,
        iconClassName: "icon-svg-sm solid-mono text-fuchsia mb-3",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 2,
        link: "#",
        Icon: solid_mono_TeamTwo,
        title: "Social Engagement",
        linkType: demo_1/* LinkType.violet */.U.violet,
        iconClassName: "icon-svg-sm solid-mono text-violet mb-3",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 3,
        link: "#",
        Icon: Lamp/* default */.Z,
        linkType: demo_1/* LinkType.orange */.U.orange,
        title: "Identity & Branding",
        iconClassName: "icon-svg-sm solid-mono text-orange mb-3",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 4,
        link: "#",
        Icon: solid_mono_DeliveryBox,
        title: "Product Design",
        linkType: demo_1/* LinkType.green */.U.green,
        iconClassName: "icon-svg-sm solid-mono text-green mb-3",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    }
];
// used in the services-24 block
const serviceList12 = [
    {
        id: 1,
        title: "Web Design",
        image: {
            "1x": "/img/illustrations/i24.png",
            "2x": "/img/illustrations/i24@2x.png 2x"
        },
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
    tellus.`
    },
    {
        id: 2,
        title: "Graphic Design",
        image: {
            "1x": "/img/illustrations/i19.png",
            "2x": "/img/illustrations/i19@2x.png 2x"
        },
        description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
    },
    {
        id: 3,
        title: "3D Animation",
        image: {
            "1x": "/img/illustrations/i18.png",
            "2x": "/img/illustrations/i18@2x.png 2x"
        },
        description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
    }
];
// used in the services-25 block
const serviceList13 = [
    {
        id: 1,
        linkUrl: "#",
        color: color/* default.purple */.Z.purple,
        title: "Web Design",
        icon: "uil-monitor",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
    },
    {
        id: 2,
        linkUrl: "#",
        color: color/* default.green */.Z.green,
        title: "Graphic Design",
        icon: "uil-swatchbook",
        description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
    },
    {
        id: 3,
        linkUrl: "#",
        color: color/* default.pink */.Z.pink,
        title: "3D Animation",
        icon: "uil-presentation-play",
        description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
    }
];
// used in the services-26 block
const serviceList14 = [
    {
        id: 1,
        url: "#",
        title: "Wedding",
        image: {
            "1x": "/img/photos/fs1.jpg",
            "2x": "/img/photos/fs1@2x.jpg 2x"
        }
    },
    {
        id: 2,
        url: "#",
        title: "Couples",
        image: {
            "1x": "/img/photos/fs2.jpg",
            "2x": "/img/photos/fs2@2x.jpg 2x"
        }
    },
    {
        id: 3,
        url: "#",
        title: "Engagement",
        image: {
            "1x": "/img/photos/fs3.jpg",
            "2x": "/img/photos/fs3@2x.jpg 2x"
        }
    }
];

;// CONCATENATED MODULE: ./components/blocks/services/Services14.tsx


// -------- data -------- //

const Services14 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-10 px-xl-10",
                        children: "The Features we offer is specifically designed to meet your needs."
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "position-relative ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape rounded-circle bg-soft-primary rellax w-16 h-16",
                        style: {
                            bottom: "-0.5rem",
                            right: "-2.5rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape bg-dot primary rellax w-16 h-17",
                        style: {
                            top: "-0.5rem",
                            left: "-2.5rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row gx-md-8 gx-xl-12 gy-8 text-center",
                        children: serviceList9.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(service_cards_ServiceCard6, {
                                ...item
                            }, item.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services14 = (Services14);

;// CONCATENATED MODULE: ./components/blocks/services/index.ts




/***/ }),

/***/ 9152:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9066);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial1 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-gradient-reverse-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container py-14 py-md-18",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row gx-md-5 gy-5",
                            children: testimonialList1.map((item, i)=>/*#__PURE__*/ _jsx("div", {
                                    className: `col-md-6 ${item.columnClasses}`,
                                    children: /*#__PURE__*/ _jsx(TestimonialCard1, {
                                        ...item
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3 mt-lg-n6",
                                children: "Our Community"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-5",
                                children: "Don't take our word for it. See what customers are saying about us."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod."
                            }),
                            /*#__PURE__*/ _jsx(NextLink, {
                                href: "#",
                                title: "All Testimonials",
                                className: "btn btn-primary rounded-pill mt-3"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial1)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9142:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2353);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial10 = ()=>{
    // used for masonry layout
    useIsotope();
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 py-md-17",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row mt-md-n25",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-10 px-xl-10 px-xxl-15",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row isotope gy-6",
                        children: testimonialList.map((item)=>/*#__PURE__*/ _jsx("div", {
                                className: "item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ _jsx(TestimonialCard3, {
                                    ...item,
                                    shadow: true
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial10)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9169:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var data_demo_11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial11 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row mt-md-n50p text-white text-center",
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xl-10 mx-auto mb-14 mb-lg-n6",
            children: /*#__PURE__*/ _jsx("div", {
                className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-400",
                style: {
                    backgroundImage: "url(/img/photos/bg2.jpg)"
                },
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card-body p-9 p-xl-12",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row gx-0",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col-xxl-9 mx-auto",
                            children: /*#__PURE__*/ _jsx(Carousel, {
                                navigation: false,
                                slidesPerView: 1,
                                className: "dots-light dots-closer",
                                children: testimonialList.map((item)=>/*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "ratings five mb-3"
                                            }),
                                            /*#__PURE__*/ _jsxs("blockquote", {
                                                className: "border-0 fs-lg mb-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        children: [
                                                            "“",
                                                            item.review,
                                                            "”"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "blockquote-details justify-content-center text-center",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "info ps-0",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h5", {
                                                                    className: "mb-1 text-white",
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "mb-0",
                                                                    children: item.designation
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id))
                            })
                        })
                    })
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial11)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2784:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var data_demo_12__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial12 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "grid mb-14 mb-md-18 mt-3",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row isotope gy-6 mt-n19 mt-md-n22",
            children: reviews.map((item)=>/*#__PURE__*/ _jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ _jsx(TestimonialCard5, {
                        borderBottom: true,
                        ...item
                    })
                }, item.id))
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial12)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2837:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(633);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial13 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white",
        style: {
            backgroundImage: "url(/img/photos/bg2.jpg)"
        },
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 py-md-17",
            children: [
                /*#__PURE__*/ _jsx("h2", {
                    className: "display-4 mb-5 text-white text-center",
                    children: "Happy Customers"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-md-10 col-lg-8 mx-auto",
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-light dots-closer text-center",
                            grabCursor: true,
                            children: testimonialList3.map(({ name , image , designation , review , id  })=>/*#__PURE__*/ _jsxs("blockquote", {
                                    className: "border-0 fs-lg mb-0",
                                    children: [
                                        /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                "“",
                                                review,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "blockquote-details justify-content-center",
                                            children: [
                                                /*#__PURE__*/ _jsx(FigureImage, {
                                                    width: 100,
                                                    height: 100,
                                                    className: "rounded-circle w-12 overflow-hidden",
                                                    src: image
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h6", {
                                                            className: "mb-1 text-white",
                                                            children: name
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "mb-0",
                                                            children: designation
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial13)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial14 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "grid mb-14 mb-md-17",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row isotope gy-6 mt-n19 mt-md-n22",
            children: testimonialList4.map((item)=>/*#__PURE__*/ _jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ _jsx(TestimonialCard5, {
                        ...item
                    })
                }, item.id))
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial14)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7120:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial14 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "grid mb-18",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row isotope gy-6 mt-n18",
            children: testimonialList4.map((item)=>/*#__PURE__*/ _jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ _jsx(TestimonialCard6, {
                        ...item
                    })
                }, item.id))
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial14)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 605:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data-------- //

const Testimonial16 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card shadow-lg mt-n21 mt-md-n23",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "row gx-0",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start",
                    style: {
                        backgroundImage: "url(/img/photos/tm2.jpg)"
                    }
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "p-10 p-md-11 px-lg-13 py-lg-14",
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-closer",
                            children: testimonialList5.map(({ id  })=>/*#__PURE__*/ _jsxs("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "ratings five mt-4 mb-3"
                                        }),
                                        /*#__PURE__*/ _jsxs("blockquote", {
                                            className: "border-0 fs-lg text-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    children: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.”"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "blockquote-details justify-content-center text-center",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "info ps-0",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h5", {
                                                                className: "mb-1",
                                                                children: "Cory Zamora"
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "mb-0",
                                                                children: "Marketing Specialist"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial16)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6831:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2353);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial17 = ()=>{
    // used for masonry grid layout
    useIsotope();
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-gradient-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container pt-12 pt-lg-8 pb-14 pb-md-17",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-3 mb-10 px-xxl-10",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row isotope gy-6",
                        children: testimonialList.map((item)=>/*#__PURE__*/ _jsx("div", {
                                className: "item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ _jsx(TestimonialCard3, {
                                    ...item,
                                    shadow: true
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial17)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2640:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial18 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay text-white",
        style: {
            backgroundImage: "url(/img/photos/bg32.jpg)"
        },
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container py-14 py-md-17 text-center",
            children: [
                /*#__PURE__*/ _jsx("i", {
                    className: "icn-flower text-white fs-30 opacity-50"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row mt-3",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-xl-9 col-xxl-8 mx-auto",
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            navigation: false,
                            slidesPerView: 1,
                            className: "dots-light dots-closer",
                            children: testimonialList6.map(({ id , name , review  })=>/*#__PURE__*/ _jsxs("blockquote", {
                                    className: "border-0 fs-24 mb-0",
                                    children: [
                                        /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                "“",
                                                review,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "blockquote-details justify-content-center",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "info p-0",
                                                children: /*#__PURE__*/ _jsx("h6", {
                                                    className: "mb-0 text-white",
                                                    children: name
                                                })
                                            })
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial18)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5716:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6126);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial19 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        id: "testimonials",
        children: /*#__PURE__*/ _jsx("div", {
            className: "wrapper image-wrapper bg-image bg-overlay",
            style: {
                backgroundImage: "url(/img/photos/bg35.jpg)"
            },
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container pt-15 pb-13",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "display-5 mb-4 text-center text-white",
                        children: "Happy Customers"
                    }),
                    /*#__PURE__*/ _jsx(Carousel, {
                        spaceBetween: 0,
                        navigation: false,
                        breakpoints: carouselBreakpoints,
                        className: "dots-closer dots-light dots-light-75",
                        children: testimonialList7.map(({ id , name , designation , review  })=>/*#__PURE__*/ _jsx("div", {
                                className: "item-inner",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "card border-0 bg-white-900",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "card-body",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "ratings five mb-3"
                                            }),
                                            /*#__PURE__*/ _jsxs("blockquote", {
                                                className: "border-0 mb-0",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        children: [
                                                            "“",
                                                            review,
                                                            "”"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "blockquote-details",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "info p-0",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: name
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "mb-0",
                                                                    children: designation
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, id))
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial19)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9560:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Testimonial2 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "position-relative mt-n18 mt-md-n23 mb-16 mb-md-18",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "shape rounded-circle bg-line primary rellax w-18 h-18",
                style: {
                    zIndex: 0,
                    top: "-2rem",
                    right: "-2.7rem"
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "shape rounded-circle bg-soft-primary rellax w-18 h-18",
                style: {
                    zIndex: 0,
                    left: "-3rem",
                    bottom: "-1rem"
                }
            }),
            /*#__PURE__*/ _jsx(TestimonialCard4, {})
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial2)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var data_demo_26__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial20 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card bg-soft-primary mb-15 mb-md-17",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card-body py-14 px-lg-0",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                className: "display-4 mb-10 px-xxl-10",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-lg-8 gx-xl-12 align-items-center",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-5 ms-auto col-xl-4 d-none d-lg-flex",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "img-mask mask-3",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/about31.jpg",
                                    srcSet: "/img/photos/about31@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6 col-xl-6 col-xxl-5 me-auto",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "swiper-container",
                                children: /*#__PURE__*/ _jsx(Carousel, {
                                    spaceBetween: 0,
                                    navigation: false,
                                    slidesPerView: 1,
                                    className: "dots-start",
                                    children: data.testimonialList.map(({ id , name , designation , review  })=>/*#__PURE__*/ _jsxs("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "ratings five mb-3"
                                                }),
                                                /*#__PURE__*/ _jsxs("blockquote", {
                                                    className: "border-0 fs-lg mb-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            children: [
                                                                "“",
                                                                review,
                                                                "”"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "blockquote-details",
                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                className: "info ps-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                        className: "mb-1",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "mb-0",
                                                                        children: designation
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, id))
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial20)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial21 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row position-relative mb-15 mb-md-17",
        children: [
            /*#__PURE__*/ _jsx("figure", {
                className: "rounded position-absolute d-none d-lg-block",
                style: {
                    top: "50%",
                    right: 0,
                    width: "45%",
                    height: "auto",
                    zIndex: 2,
                    transform: "translateY(-50%)"
                },
                children: /*#__PURE__*/ _jsx("img", {
                    src: "/img/photos/tei1.jpg",
                    srcSet: "/img/photos/tei1@2x.jpg 2x",
                    alt: ""
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-9 text-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "card bg-gray",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "card-body p-md-10 py-xxl-16",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row gx-0",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-8 ps-xl-10",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "ratings five fs-20 mb-3"
                                    }),
                                    /*#__PURE__*/ _jsxs("blockquote", {
                                        className: "border-0 fs-lg mb-0",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: "“Donec id elit non mi porta gravida at eget metus. Vivamus mollis est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis porta est non commodo luctus.”"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "blockquote-details justify-content-center text-center",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "info p-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "ls-sm mb-1",
                                                            children: "Coriss Ambady"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "mb-0",
                                                            children: "Financial Analyst"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial21)));


/***/ }),

/***/ 4148:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_elements_tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7211);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// -------- data -------- //

const Testimonial3 = ()=>{
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("h3", {
                className: "display-4 mb-3 text-center",
                children: "What People Say About Us"
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "lead fs-lg mb-10 text-center",
                children: "Dont take our word for it. See what customers are saying about us."
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ _jsx(Tiles3, {})
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-5 mt-5",
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            children: testimonialList2.map((item, i)=>/*#__PURE__*/ _jsx(TestimonialCard2, {
                                    ...item
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial3)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4062);
/* harmony import */ var utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6126);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// -------- custom component -------- //



// -------- data -------- //

const Testimonial4 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "display-4 mb-6 px-xl-10 px-xxl-15",
                            children: "Dont take our word for it. See what users are saying about us."
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    grabCursor: true,
                    className: "p-2",
                    navigation: false,
                    breakpoints: utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__/* .TestimonialCard3 */ .ZW, {
                            ...item,
                            key: i
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7045:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// -------- data -------- //

const Testimonial5 = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container pt-16 pb-14 pb-md-0",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row gx-lg-8 gx-xl-0 align-items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block",
                                style: {
                                    top: "7rem",
                                    left: "1rem"
                                }
                            }),
                            /*#__PURE__*/ _jsx("figure", {
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/co1.png",
                                    srcSet: "/img/photos/co1@2x.png 2x",
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1",
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-start",
                            children: testimonialList2.map((item, i)=>/*#__PURE__*/ _createElement(TestimonialCard2, {
                                    ...item,
                                    key: i,
                                    blockClassName: "icon fs-lg",
                                    blockDetailsClassName: "blockquote-details"
                                }))
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial5)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8382:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial6 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card bg-soft-primary",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card-body p-md-10 py-xxl-16 position-relative",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "position-absolute d-none d-lg-block",
                    style: {
                        bottom: 0,
                        left: "10%",
                        width: "28%",
                        zIndex: 2
                    },
                    children: /*#__PURE__*/ _jsx("figure", {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/img/photos/co2.png",
                            srcSet: "/img/photos/co2@2x.png 2x",
                            alt: "coriss"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row gx-md-0 gx-xl-12 text-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-7 offset-lg-5 col-xl-6",
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "ratings five mb-3"
                            }),
                            /*#__PURE__*/ _jsxs("blockquote", {
                                className: "border-0 fs-lg mb-0",
                                children: [
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”"
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "blockquote-details justify-content-center text-center",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "info p-0",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Coriss Ambady"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "meta mb-0",
                                                    children: "Financial Analyst"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial6)));


/***/ }),

/***/ 4457:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_elements_tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7211);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4062);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4735);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// -------- data -------- //

const Testimonial7 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "col-lg-7 position-relative",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "shape bg-dot primary rellax w-18 h-18",
                        style: {
                            top: 0,
                            left: "-1.4rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ _jsx(Tiles3, {})
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-lg-5 mt-5",
                children: /*#__PURE__*/ _jsx(Carousel, {
                    grabCursor: true,
                    slidesPerView: 1,
                    navigation: false,
                    children: testimonialList2.map((item, i)=>/*#__PURE__*/ _jsx(TestimonialCard2, {
                            ...item
                        }, i))
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial7)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4168:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4735);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2353);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial8 = ()=>{
    // used for masonry layout
    useIsotope();
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("h2", {
                className: "display-4 text-center mb-8",
                children: "Happy Customers"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row isotope gy-6",
                    children: testimonialList.map((item)=>/*#__PURE__*/ _jsx("div", {
                            className: "item col-md-6 col-xl-4",
                            children: /*#__PURE__*/ _jsx(TestimonialCard3, {
                                ...item,
                                shadow: true
                            })
                        }, item.id))
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial8)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5339:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial9 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "card bg-soft-primary rounded-4 mb-14 mb-md-18",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card-body p-md-10 py-xxl-16 position-relative",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "position-absolute d-none d-lg-block",
                    style: {
                        bottom: 0,
                        left: "10%",
                        width: "28%",
                        zIndex: 2
                    },
                    children: /*#__PURE__*/ _jsx("figure", {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/img/photos/co2.png",
                            srcSet: "/img/photos/co2@2x.png 2x",
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row gx-md-0 gx-xl-12 text-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg-7 offset-lg-5 col-xl-6",
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "ratings five mb-3"
                            }),
                            /*#__PURE__*/ _jsxs("blockquote", {
                                className: "border-0 fs-lg mb-0",
                                children: [
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”"
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "blockquote-details justify-content-center text-center",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "info p-0",
                                            children: [
                                                /*#__PURE__*/ _jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Coriss Ambady"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "meta mb-0",
                                                    children: "Financial Analyst"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial9)));


/***/ }),

/***/ 3798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i8": () => (/* reexport safe */ _Testimonial4__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _Testimonial1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9152);
/* harmony import */ var _Testimonial2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9560);
/* harmony import */ var _Testimonial3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4148);
/* harmony import */ var _Testimonial4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1203);
/* harmony import */ var _Testimonial5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7045);
/* harmony import */ var _Testimonial6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8382);
/* harmony import */ var _Testimonial7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4457);
/* harmony import */ var _Testimonial8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4168);
/* harmony import */ var _Testimonial9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5339);
/* harmony import */ var _Testimonial10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9142);
/* harmony import */ var _Testimonial11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9169);
/* harmony import */ var _Testimonial12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2784);
/* harmony import */ var _Testimonial13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2837);
/* harmony import */ var _Testimonial14__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(189);
/* harmony import */ var _Testimonial15__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7120);
/* harmony import */ var _Testimonial16__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(605);
/* harmony import */ var _Testimonial17__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6831);
/* harmony import */ var _Testimonial18__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2640);
/* harmony import */ var _Testimonial19__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5716);
/* harmony import */ var _Testimonial20__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25);
/* harmony import */ var _Testimonial21__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Testimonial1__WEBPACK_IMPORTED_MODULE_0__, _Testimonial2__WEBPACK_IMPORTED_MODULE_1__, _Testimonial3__WEBPACK_IMPORTED_MODULE_2__, _Testimonial4__WEBPACK_IMPORTED_MODULE_3__, _Testimonial5__WEBPACK_IMPORTED_MODULE_4__, _Testimonial7__WEBPACK_IMPORTED_MODULE_6__, _Testimonial8__WEBPACK_IMPORTED_MODULE_7__, _Testimonial10__WEBPACK_IMPORTED_MODULE_9__, _Testimonial11__WEBPACK_IMPORTED_MODULE_10__, _Testimonial12__WEBPACK_IMPORTED_MODULE_11__, _Testimonial13__WEBPACK_IMPORTED_MODULE_12__, _Testimonial14__WEBPACK_IMPORTED_MODULE_13__, _Testimonial15__WEBPACK_IMPORTED_MODULE_14__, _Testimonial16__WEBPACK_IMPORTED_MODULE_15__, _Testimonial17__WEBPACK_IMPORTED_MODULE_16__, _Testimonial18__WEBPACK_IMPORTED_MODULE_17__, _Testimonial19__WEBPACK_IMPORTED_MODULE_18__, _Testimonial20__WEBPACK_IMPORTED_MODULE_19__]);
([_Testimonial1__WEBPACK_IMPORTED_MODULE_0__, _Testimonial2__WEBPACK_IMPORTED_MODULE_1__, _Testimonial3__WEBPACK_IMPORTED_MODULE_2__, _Testimonial4__WEBPACK_IMPORTED_MODULE_3__, _Testimonial5__WEBPACK_IMPORTED_MODULE_4__, _Testimonial7__WEBPACK_IMPORTED_MODULE_6__, _Testimonial8__WEBPACK_IMPORTED_MODULE_7__, _Testimonial10__WEBPACK_IMPORTED_MODULE_9__, _Testimonial11__WEBPACK_IMPORTED_MODULE_10__, _Testimonial12__WEBPACK_IMPORTED_MODULE_11__, _Testimonial13__WEBPACK_IMPORTED_MODULE_12__, _Testimonial14__WEBPACK_IMPORTED_MODULE_13__, _Testimonial15__WEBPACK_IMPORTED_MODULE_14__, _Testimonial16__WEBPACK_IMPORTED_MODULE_15__, _Testimonial17__WEBPACK_IMPORTED_MODULE_16__, _Testimonial18__WEBPACK_IMPORTED_MODULE_17__, _Testimonial19__WEBPACK_IMPORTED_MODULE_18__, _Testimonial20__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7211:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: Tiles1, Tiles10, Tiles11, Tiles2, Tiles3, Tiles4, Tiles5, Tiles6, Tiles7, Tiles8, Tiles9

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/elements/tiles/Tiles1.tsx

const Tiles1 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-md-5 gy-5 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-md-5 gy-5",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-10 offset-md-2",
                            children: /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/ab1.jpg",
                                    srcSet: "/img/photos/ab1@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12",
                            children: /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/ab2.jpg",
                                    srcSet: "/img/photos/ab2@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/ab3.jpg",
                        srcSet: "/img/photos/ab3@2x.jpg 2x",
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles1 = ((/* unused pure expression or super */ null && (Tiles1)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles2.tsx

const Tiles2 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-md-5 gy-5",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-4 offset-md-2 align-self-end",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g1.jpg",
                        srcSet: "/img/photos/g1@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6 align-self-end",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g2.jpg",
                        srcSet: "/img/photos/g2@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6 offset-md-1",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g3.jpg",
                        srcSet: "/img/photos/g3@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-4 align-self-start",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g4.jpg",
                        srcSet: "/img/photos/g4@2x.jpg 2x",
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles2 = ((/* unused pure expression or super */ null && (Tiles2)));

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
;// CONCATENATED MODULE: ./components/elements/tiles/Tiles3.tsx


const Tiles3 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-md-5 gy-5",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded mt-md-10 position-relative",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g5.jpg",
                        srcSet: "/img/photos/g5@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-md-5 gy-5",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12 order-md-2",
                            children: /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/g6.jpg",
                                    srcSet: "/img/photos/g6@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-10",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "card bg-pale-primary text-center",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "card-body py-11 counter-wrapper",
                                    children: [
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: "counter text-nowrap",
                                            children: /*#__PURE__*/ _jsx(CountUp, {
                                                end: 5000,
                                                suffix: "+"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mb-0",
                                            children: "Satisfied Customers"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles3 = ((/* unused pure expression or super */ null && (Tiles3)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles4.tsx

const Tiles4_images = [
    {
        id: 1,
        className: "col-md-4 offset-md-2 align-self-end",
        image: {
            "1x": "/img/photos/g1.jpg",
            "2x": "/img/photos/g1@2x.jpg 2x"
        }
    },
    {
        id: 2,
        className: "col-md-6 align-self-end",
        image: {
            "1x": "/img/photos/g2.jpg",
            "2x": "/img/photos/g2@2x.jpg 2x"
        }
    },
    {
        id: 3,
        className: "col-md-6 offset-md-1",
        image: {
            "1x": "/img/photos/g3.jpg",
            "2x": "/img/photos/g3@2x.jpg 2x"
        }
    },
    {
        id: 4,
        className: "col-md-4 align-self-start",
        image: {
            "1x": "/img/photos/g4.jpg",
            "2x": "/img/photos/g4@2x.jpg 2x"
        }
    }
];
const Tiles4 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row gx-md-5 gy-5",
        children: Tiles4_images.map(({ id , className , image  })=>/*#__PURE__*/ _jsx("div", {
                className: className,
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: image["1x"],
                        srcSet: image["2x"],
                        alt: ""
                    })
                })
            }, id))
    });
};
/* harmony default export */ const tiles_Tiles4 = ((/* unused pure expression or super */ null && (Tiles4)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/tiles/Tiles5.tsx


const Tiles5 = ()=>{
    const images = [
        "about2",
        "about3"
    ];
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "shape bg-dot primary rellax w-16 h-20",
                style: {
                    top: "3rem",
                    left: "5.5rem"
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "overlap-grid overlap-grid-2",
                children: images.map((item, i)=>/*#__PURE__*/ _jsx("div", {
                        className: "item",
                        children: /*#__PURE__*/ _jsx("figure", {
                            className: "rounded shadow",
                            children: /*#__PURE__*/ _jsx("img", {
                                src: `/img/photos/${item}.jpg`,
                                srcSet: `/img/photos/${item}@2x.jpg 2x`,
                                alt: item
                            })
                        })
                    }, item + i))
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles5 = ((/* unused pure expression or super */ null && (Tiles5)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles6.tsx


const Tiles6 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row gx-0 mb-16 mb-mb-20",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20",
            children: [
                /*#__PURE__*/ _jsx("img", {
                    alt: "hero",
                    src: "/img/photos/sa1.jpg",
                    srcSet: "/img/photos/sa1@2x.jpg 2x",
                    className: "img-fluid mx-auto rounded shadow-lg",
                    style: animation({
                        name: "slideInUp",
                        delay: "1500ms"
                    })
                }),
                /*#__PURE__*/ _jsx("img", {
                    alt: "demo",
                    src: "/img/photos/sa2.jpg",
                    className: "position-absolute rounded shadow-lg",
                    style: {
                        top: "20%",
                        right: "-10%",
                        maxWidth: "30%",
                        height: "auto",
                        ...animation({
                            name: "slideInRight",
                            delay: "1800ms"
                        })
                    }
                }),
                /*#__PURE__*/ _jsx("img", {
                    alt: "demo",
                    src: "/img/photos/sa3.jpg",
                    className: "position-absolute rounded shadow-lg",
                    style: {
                        top: "10%",
                        left: "-10%",
                        maxWidth: "30%",
                        height: "auto",
                        ...animation({
                            name: "slideInLeft",
                            delay: "2100ms"
                        })
                    }
                }),
                /*#__PURE__*/ _jsx("img", {
                    alt: "demo",
                    src: "/img/photos/sa4.jpg",
                    className: "position-absolute rounded shadow-lg",
                    style: {
                        left: "-13%",
                        bottom: "10%",
                        height: "auto",
                        maxWidth: "30%",
                        ...animation({
                            name: "slideInLeft",
                            delay: "2400ms"
                        })
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const tiles_Tiles6 = ((/* unused pure expression or super */ null && (Tiles6)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles7.tsx


const Tiles7 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-lg-6 position-relative",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "shape rounded bg-pale-red rellax d-block",
                style: {
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)"
                }
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row gx-md-5 gy-5 position-relative",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa5.jpg",
                                srcSet: "/img/photos/sa5@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg mb-5",
                                style: fadeInAnimate("300ms")
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa6.jpg",
                                srcSet: "/img/photos/sa6@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg d-flex col-10 ms-auto",
                                style: fadeInAnimate("600ms")
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa7.jpg",
                                srcSet: "/img/photos/sa7@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg my-5",
                                style: fadeInAnimate("900ms")
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa8.jpg",
                                srcSet: "/img/photos/sa8@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg d-flex col-10",
                                style: fadeInAnimate("1200ms")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles7 = ((/* unused pure expression or super */ null && (Tiles7)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles8.tsx


// ====================================================
const Tiles8 = ({ hiddenShape  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-lg-6 position-relative order-lg-2",
        children: [
            !hiddenShape && /*#__PURE__*/ _jsx("div", {
                className: "shape rounded bg-pale-green rellax d-block",
                style: {
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)"
                }
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row gx-md-5 gy-5 position-relative",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-5",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa9.jpg",
                                srcSet: "/img/photos/sa9@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg my-5 d-flex ms-auto",
                                style: fadeInAnimate("300ms")
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                alt: "",
                                src: "/img/photos/sa10.jpg",
                                srcSet: "/img/photos/sa10@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg d-flex col-10 ms-auto",
                                style: fadeInAnimate("600ms")
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-7",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa11.jpg",
                                srcSet: "/img/photos/sa11@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg mb-5",
                                style: fadeInAnimate("900ms")
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                alt: "demo",
                                src: "/img/photos/sa12.jpg",
                                srcSet: "/img/photos/sa12@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg d-flex col-11",
                                style: fadeInAnimate("1200ms")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles8 = ((/* unused pure expression or super */ null && (Tiles8)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles9.tsx


// ====================================================
const Tiles9 = ({ hiddenShape  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "col-lg-6 position-relative",
        children: [
            !hiddenShape && /*#__PURE__*/ _jsx("div", {
                className: "shape rounded bg-pale-yellow rellax d-block",
                style: {
                    zIndex: 0,
                    top: "50%",
                    left: "50%",
                    width: "50%",
                    height: "60%",
                    transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)"
                }
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row gx-md-5 gy-5 position-relative align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ _jsx("img", {
                            alt: "",
                            src: "/img/photos/sa13.jpg",
                            srcSet: "/img/photos/sa13@2x.jpg 2x",
                            className: "img-fluid rounded shadow-lg d-flex ms-auto",
                            style: fadeInAnimate("300ms")
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                alt: "",
                                src: "/img/photos/sa14.jpg",
                                srcSet: "/img/photos/sa14@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg mb-5",
                                style: fadeInAnimate("900ms")
                            }),
                            /*#__PURE__*/ _jsx("img", {
                                alt: "",
                                src: "/img/photos/sa15.jpg",
                                srcSet: "/img/photos/sa15@2x.jpg 2x",
                                className: "img-fluid rounded shadow-lg d-flex col-10",
                                style: fadeInAnimate("1200ms")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles9 = ((/* unused pure expression or super */ null && (Tiles9)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles10.tsx

const Tiles10 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-md-5 gy-5 align-items-center",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row gx-md-5 gy-5",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-10 offset-md-2",
                            children: /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/ab1.jpg",
                                    srcSet: "/img/photos/ab1@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-12",
                            children: /*#__PURE__*/ _jsx("figure", {
                                className: "rounded",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/img/photos/ab2.jpg",
                                    srcSet: "/img/photos/ab2@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/ab3.jpg",
                        srcSet: "/img/photos/ab3@2x.jpg 2x",
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles10 = ((/* unused pure expression or super */ null && (Tiles10)));

;// CONCATENATED MODULE: ./components/elements/tiles/Tiles11.tsx

const Tiles11 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "row gx-md-5 gy-5",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g12.jpg",
                        srcSet: "/img/photos/g12@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-md-6 align-self-end",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g13.jpg",
                        srcSet: "/img/photos/g13@2x.jpg 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ _jsx("figure", {
                    className: "rounded mx-md-5",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/img/photos/g11.jpg",
                        srcSet: "/img/photos/g11@2x.jpg 2x",
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const tiles_Tiles11 = ((/* unused pure expression or super */ null && (Tiles11)));

;// CONCATENATED MODULE: ./components/elements/tiles/index.tsx














/***/ }),

/***/ 4062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// ==================================================================
const Carousel = (props)=>{
    const { children , slideClassName , spaceBetween =30 , slidesPerView =3 , pagination =true , navigation =true , ...others } = props;
    const [prevEl, setPrevEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [nextEl, setNextEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
        spaceBetween: spaceBetween,
        slidesPerView: slidesPerView,
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
            swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
        ],
        navigation: navigation ? {
            prevEl,
            nextEl
        } : false,
        pagination: pagination ? {
            clickable: true
        } : false,
        ...others,
        children: [
            children.map((slide, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                    className: slideClassName,
                    children: slide
                }, i)),
            navigation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "swiper-navigation",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "button",
                        ref: (node)=>setPrevEl(node),
                        className: "swiper-button swiper-button-prev swiper-button-disabled"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "button",
                        ref: (node)=>setNextEl(node),
                        className: "swiper-button swiper-button-next"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5699:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Carousel2 = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const slideImages = [
        {
            id: 1,
            url: "/img/photos/bg28.jpg"
        },
        {
            id: 2,
            url: "/img/photos/bg29.jpg"
        },
        {
            id: 3,
            url: "/img/photos/bg30.jpg"
        },
        {
            id: 4,
            url: "/img/photos/bg31.jpg"
        }
    ];
    const thumbImages = [
        {
            id: 1,
            url: "/img/photos/bg28-th.jpg"
        },
        {
            id: 2,
            url: "/img/photos/bg29-th.jpg"
        },
        {
            id: 3,
            url: "/img/photos/bg30-th.jpg"
        },
        {
            id: 4,
            url: "/img/photos/bg31-th.jpg"
        }
    ];
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-main",
                children: /*#__PURE__*/ _jsxs(SwiperCarousel, {
                    spaceBetween: 10,
                    pagination: false,
                    navigation: {
                        prevEl,
                        nextEl
                    },
                    modules: [
                        FreeMode,
                        Navigation,
                        Thumbs
                    ],
                    thumbs: {
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    },
                    children: [
                        slideImages.map(({ url , id  })=>/*#__PURE__*/ _jsx(SwiperSlide, {
                                style: {
                                    backgroundImage: `url(${url})`
                                },
                                className: "bg-overlay bg-overlay-400 bg-dark bg-image"
                            }, id)),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "swiper-navigation",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    role: "button",
                                    ref: (node)=>setPrevEl(node),
                                    className: "swiper-button swiper-button-prev swiper-button-disabled"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    role: "button",
                                    ref: (node)=>setNextEl(node),
                                    className: "swiper-button swiper-button-next"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(SwiperCarousel, {
                freeMode: true,
                threshold: 2,
                spaceBetween: 10,
                slidesPerView: 5,
                watchSlidesProgress: true,
                onSwiper: setThumbsSwiper,
                modules: [
                    FreeMode,
                    Navigation,
                    Thumbs
                ],
                children: thumbImages.map(({ url , id  })=>/*#__PURE__*/ _jsx(SwiperSlide, {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: url,
                            alt: "product"
                        })
                    }, id))
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Carousel2)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 633:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


// ====================================================
const FigureImage = (props)=>{
    const { className , src , width , height , ...others } = props;
    return /*#__PURE__*/ _jsx("figure", {
        className: className,
        ...others,
        children: /*#__PURE__*/ _jsx(Image, {
            width: width,
            height: height,
            src: src,
            alt: "demo",
            layout: "responsive",
            quality: "100"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FigureImage)));


/***/ }),

/***/ 8369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// ====================================================
const IconBox = ({ icon , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: `uil ${icon}`
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBox);


/***/ }),

/***/ 2928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// ========================================================
const links = [
    {
        id: 1,
        icon: "uil uil-twitter",
        url: "https://twitter.com/uilibofficial"
    },
    {
        id: 2,
        icon: "uil uil-facebook-f",
        url: "https://facebook.com/uiLibOfficial/"
    },
    {
        id: 3,
        icon: "uil uil-dribbble",
        url: "#"
    },
    {
        id: 4,
        icon: "uil uil-instagram",
        url: "https://www.instagram.com/uilibofficial/"
    },
    {
        id: 5,
        icon: "uil uil-youtube",
        url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg"
    }
];
const SocialLinks = ({ className ="nav social social-white mt-4"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: className,
        children: links.map(({ id , icon , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: url,
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: icon
                })
            }, id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);


/***/ }),

/***/ 9119:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: BlogCard1, BlogCard2, BlogCard3, BlogCard4, BlogCard5

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(9066);
;// CONCATENATED MODULE: ./components/reuseable/blog-cards/BlogCard1.tsx




// ======================================================
const BlogCard1 = ({ date , image , title , category  })=>{
    return /*#__PURE__*/ _jsxs("article", {
        children: [
            /*#__PURE__*/ _jsxs("figure", {
                className: "overlay overlay-1 hover-scale rounded mb-6",
                children: [
                    /*#__PURE__*/ _jsx(Link, {
                        legacyBehavior: true,
                        href: "#",
                        children: /*#__PURE__*/ _jsxs("a", {
                            children: [
                                /*#__PURE__*/ _jsx(Image, {
                                    width: 560,
                                    height: 350,
                                    src: image,
                                    alt: title,
                                    layout: "responsive"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "bg"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("figcaption", {
                        children: /*#__PURE__*/ _jsx("h5", {
                            className: "from-top mb-0",
                            children: "Read More"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "post-header",
                children: /*#__PURE__*/ _jsx("h2", {
                    className: "post-title h3 mb-3",
                    children: /*#__PURE__*/ _jsx(NextLink, {
                        title: "Ligula tristique quis risus",
                        className: "link-dark",
                        href: "#"
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "post-footer",
                children: /*#__PURE__*/ _jsxs("ul", {
                    className: "post-meta",
                    children: [
                        /*#__PURE__*/ _jsxs("li", {
                            className: "post-date",
                            children: [
                                /*#__PURE__*/ _jsx("i", {
                                    className: "uil uil-calendar-alt"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    children: date
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("li", {
                            className: "post-comments",
                            children: /*#__PURE__*/ _jsx(NextLink, {
                                href: "#",
                                className: "link-dark",
                                title: /*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsx("i", {
                                            className: "uil uil-file-alt fs-15"
                                        }),
                                        category
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_cards_BlogCard1 = ((/* unused pure expression or super */ null && (BlogCard1)));

;// CONCATENATED MODULE: ./components/reuseable/blog-cards/BlogCard2.tsx



// ========================================================
const BlogCard2 = (props)=>{
    const { cardTop , title , category , description , link  } = props;
    return /*#__PURE__*/ _jsx("article", {
        className: "post",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card",
            children: [
                cardTop,
                /*#__PURE__*/ _jsxs("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "post-header",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "post-category text-line",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        title: category,
                                        href: "#",
                                        className: "hover"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "post-title mt-1 mb-0",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        title: title,
                                        className: "link-dark",
                                        href: link
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ _jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "post-meta d-flex mb-0",
                        children: [
                            /*#__PURE__*/ _jsxs("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "5 Jul 2022"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-author",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-user"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "By Sandbox"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-comments",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-comment"
                                            }),
                                            " 3",
                                            /*#__PURE__*/ _jsx("span", {
                                                children: " Comments"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-likes ms-auto",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-heart-alt"
                                            }),
                                            "3"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard2 = ((/* unused pure expression or super */ null && (BlogCard2)));

// EXTERNAL MODULE: ./components/reuseable/FigureImage.tsx
var reuseable_FigureImage = __webpack_require__(633);
;// CONCATENATED MODULE: ./components/reuseable/blog-cards/BlogCard3.tsx




// ========================================================
const BlogCard3 = (props)=>{
    const { title , category , description , link , image  } = props;
    return /*#__PURE__*/ _jsx("article", {
        className: "item post col-md-6",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card",
            children: [
                /*#__PURE__*/ _jsxs("figure", {
                    className: "card-img-top overlay overlay-1 hover-scale",
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            legacyBehavior: true,
                            href: "#",
                            children: /*#__PURE__*/ _jsxs("a", {
                                children: [
                                    /*#__PURE__*/ _jsx(FigureImage, {
                                        width: 560,
                                        height: 350,
                                        src: image
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "bg"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("figcaption", {
                            children: /*#__PURE__*/ _jsx("h5", {
                                className: "from-top mb-0",
                                children: "Read More"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "post-header",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "post-category text-line",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        title: category,
                                        href: "#",
                                        className: "hover"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "post-title h3 mt-1 mb-3",
                                    children: /*#__PURE__*/ _jsx(NextLink, {
                                        title: title,
                                        className: "link-dark",
                                        href: link
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ _jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "post-meta d-flex mb-0",
                        children: [
                            /*#__PURE__*/ _jsxs("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "14 Apr 2022"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-comments",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-comment"
                                            }),
                                            "4"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-likes ms-auto",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-heart-alt"
                                            }),
                                            "5"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard3 = ((/* unused pure expression or super */ null && (BlogCard3)));

;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
;// CONCATENATED MODULE: ./components/reuseable/blog-cards/BlogCard4.tsx





// ======================================================
const BlogCard4 = (props)=>{
    const { date , image , title , category , description  } = props;
    return /*#__PURE__*/ _jsx("article", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card",
            children: [
                /*#__PURE__*/ _jsxs("figure", {
                    className: "card-img-top overlay overlay-1 hover-scale",
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            legacyBehavior: true,
                            href: "#",
                            children: /*#__PURE__*/ _jsxs("a", {
                                children: [
                                    /*#__PURE__*/ _jsx(Image, {
                                        width: 560,
                                        height: 350,
                                        src: image,
                                        alt: title,
                                        layout: "responsive"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "bg"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("figcaption", {
                            children: /*#__PURE__*/ _jsx("h5", {
                                className: "from-top mb-0",
                                children: "Read More"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "post-header",
                            children: /*#__PURE__*/ _jsx("h2", {
                                className: "post-title h3 mt-1 mb-3",
                                children: /*#__PURE__*/ _jsx(NextLink, {
                                    title: title,
                                    className: "link-dark",
                                    href: "#"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ _jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "post-meta d-flex mb-0",
                        children: [
                            /*#__PURE__*/ _jsxs("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: dayjs(date).format("DD MMM YYYY")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-comments",
                                children: /*#__PURE__*/ _jsx(NextLink, {
                                    href: "#",
                                    className: "link-dark",
                                    title: /*#__PURE__*/ _jsxs(_Fragment, {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-file-alt fs-15"
                                            }),
                                            category
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard4 = ((/* unused pure expression or super */ null && (BlogCard4)));

;// CONCATENATED MODULE: ./components/reuseable/blog-cards/BlogCard5.tsx




// ======================================================
const BlogCard5 = (props)=>{
    const { image , title , author , category , createdAt , comments  } = props;
    return /*#__PURE__*/ _jsxs("figure", {
        className: "overlay caption caption-overlay rounded mb-0",
        children: [
            /*#__PURE__*/ _jsx(Link, {
                legacyBehavior: true,
                href: "#",
                children: /*#__PURE__*/ _jsxs("a", {
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: image,
                            alt: ""
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "bg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsxs("figcaption", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "badge badge-lg bg-white text-uppercase mb-3",
                        children: category
                    }),
                    /*#__PURE__*/ _jsx("h2", {
                        className: "post-title h3 mt-1 mb-3",
                        children: /*#__PURE__*/ _jsx(NextLink, {
                            title: title,
                            href: "#"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("ul", {
                        className: "post-meta text-white mb-0",
                        children: [
                            /*#__PURE__*/ _jsxs("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ _jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: dayjs(createdAt).format("DD MMM YYYY")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-author",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-user"
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                children: [
                                                    "By ",
                                                    author
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "post-comments",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "#",
                                    children: /*#__PURE__*/ _jsxs("a", {
                                        children: [
                                            /*#__PURE__*/ _jsx("i", {
                                                className: "uil uil-comment"
                                            }),
                                            comments,
                                            " ",
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "Comments"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_cards_BlogCard5 = ((/* unused pure expression or super */ null && (BlogCard5)));

;// CONCATENATED MODULE: ./components/reuseable/blog-cards/index.ts








/***/ }),

/***/ 9066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


// ==============================================================
const NextLink = (props)=>{
    const { href , className , title  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        legacyBehavior: true,
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "fs-20",
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLink);


/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard1 = (props)=>{
    const { name , review , designation  } = props;
    return /*#__PURE__*/ _jsx("div", {
        className: "card shadow-lg",
        children: /*#__PURE__*/ _jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/ _jsxs("blockquote", {
                className: "icon mb-0",
                children: [
                    /*#__PURE__*/ _jsxs("p", {
                        children: [
                            "“",
                            review,
                            "”"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "blockquote-details",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "info p-0",
                            children: [
                                /*#__PURE__*/ _jsx("h5", {
                                    className: "mb-1",
                                    children: name
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-0",
                                    children: designation
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TestimonialCard1)));


/***/ }),

/***/ 9439:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard2 = (props)=>{
    const { name , review , designation , blockClassName , blockDetailsClassName  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
        className: blockClassName,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "“",
                    review,
                    "”"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: blockDetailsClassName,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "info ps-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "mb-1",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-0",
                            children: designation
                        })
                    ]
                })
            })
        ]
    });
};
// set default props
TestimonialCard2.defaultProps = {
    blockClassName: "icon icon-top fs-lg text-center",
    blockDetailsClassName: "blockquote-details justify-content-center text-center"
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TestimonialCard2)));


/***/ }),

/***/ 3100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


// =================================================
const TestimonialCard3 = (props)=>{
    const { name , image , review , designation , hideRating , shadow  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `card ${shadow ? "shadow-lg" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body",
            children: [
                !hideRating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ratings four mb-3"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                    className: "icon mb-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-3 mb-md-5",
                            children: [
                                "“",
                                review,
                                "”"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "blockquote-details",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    className: "rounded-circle w-12 overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: 100,
                                        height: 100,
                                        src: image,
                                        layout: "responsive",
                                        alt: "team"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "mb-0",
                                            children: name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-0",
                                            children: designation
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard3);


/***/ }),

/***/ 4949:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4062);
/* harmony import */ var _TestimonialCard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9439);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// ============================================================
const TestimonialCard4 = ({ className ="" , sliderWrapperClassname ="p-10 p-md-11 p-lg-13"  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `card shadow-lg ${className}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "row gx-0",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    style: {
                        backgroundImage: "url(/img/photos/tm1.jpg)"
                    },
                    className: "col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: sliderWrapperClassname,
                        children: /*#__PURE__*/ _jsx(Carousel, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-closer",
                            children: testimonialList2.map((item, i)=>/*#__PURE__*/ _jsx(TestimonialCard2, {
                                    ...item
                                }, i))
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TestimonialCard4)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard5 = (props)=>{
    const { name , review , designation , borderBottom  } = props;
    const className = `card shadow-lg ${borderBottom ? "card-border-bottom border-soft-primary" : ""}`;
    return /*#__PURE__*/ _jsx("div", {
        className: className,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ _jsx("span", {
                    className: "ratings five mb-3"
                }),
                /*#__PURE__*/ _jsxs("blockquote", {
                    className: "icon mb-0",
                    children: [
                        /*#__PURE__*/ _jsxs("p", {
                            children: [
                                "“",
                                review,
                                "”"
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "blockquote-details",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "info ps-0",
                                children: [
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "mb-1",
                                        children: name
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "mb-0",
                                        children: designation
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TestimonialCard5)));


/***/ }),

/***/ 1949:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard6 = (props)=>{
    const { name , review , designation  } = props;
    return /*#__PURE__*/ _jsx("div", {
        className: "card shadow-lg card-border-bottom border-soft-primary",
        children: /*#__PURE__*/ _jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/ _jsxs("blockquote", {
                className: "border-0 mb-0",
                children: [
                    /*#__PURE__*/ _jsxs("p", {
                        children: [
                            "“",
                            review,
                            "”"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "blockquote-details",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "info ps-0",
                            children: [
                                /*#__PURE__*/ _jsx("h5", {
                                    className: "mb-1",
                                    children: name
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mb-0",
                                    children: designation
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TestimonialCard6)));


/***/ }),

/***/ 4735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZW": () => (/* reexport safe */ _TestimonialCard3__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _TestimonialCard1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4704);
/* harmony import */ var _TestimonialCard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var _TestimonialCard3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3100);
/* harmony import */ var _TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4949);
/* harmony import */ var _TestimonialCard5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(658);
/* harmony import */ var _TestimonialCard6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__]);
_TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports blogList1, blogList2, blogList3, blogList4, blogList5 */
// used in the blog-1 block
const blogList1 = [
    {
        id: 1,
        category: "Coding",
        date: "14 Apr 2022",
        image: "/img/photos/b4.jpg",
        title: "Ligula tristique quis risus"
    },
    {
        id: 2,
        category: "Workspace",
        date: "29 Mar 2022",
        image: "/img/photos/b5.jpg",
        title: "ullam id dolor elit id nibh"
    },
    {
        id: 3,
        category: "Meeting",
        date: "26 Feb 2022",
        image: "/img/photos/b6.jpg",
        title: "Ultricies fusce porta elit"
    },
    {
        id: 4,
        category: "Business Tips",
        date: "7 Jan 2022",
        image: "/img/photos/b7.jpg",
        title: "Morbi leo risus porta eget"
    }
];
// used in the blog-3, blog-4 block
const blogList2 = [
    {
        id: 1,
        category: "Coding",
        date: "14 Apr 2022",
        image: "/img/photos/b4.jpg",
        title: "Ligula tristique quis risus"
    },
    {
        id: 2,
        category: "Workspace",
        date: "29 Mar 2022",
        image: "/img/photos/b5.jpg",
        title: "ullam id dolor elit id nibh"
    },
    {
        id: 3,
        category: "Meeting",
        date: "26 Feb 2022",
        image: "/img/photos/b6.jpg",
        title: "Ultricies fusce porta elit"
    },
    {
        id: 4,
        category: "Business Tips",
        date: "7 Jan 2022",
        image: "/img/photos/b7.jpg",
        title: "Morbi leo risus porta eget"
    }
];
// used in the blog-5 block
const blogList3 = [
    {
        id: 1,
        link: "#",
        comments: 4,
        category: "Wedding",
        createdAt: "14 Apr 2022",
        title: "Ligula tristique quis risus",
        image: {
            "1x": "/img/photos/b12.jpg",
            "2x": "/img/photos/b12@2x.jpg 2x"
        }
    },
    {
        id: 2,
        link: "#",
        comments: 3,
        category: "Engagement",
        createdAt: "29 Mar 2022",
        title: "Ligula tristique quis risus",
        image: {
            "1x": "/img/photos/b13.jpg",
            "2x": "/img/photos/b13@2x.jpg 2x"
        }
    },
    {
        id: 3,
        link: "#",
        comments: 6,
        category: "Couples",
        createdAt: "26 Feb 2022",
        title: "Ultricies fusce porta elit",
        image: {
            "1x": "/img/photos/b14.jpg",
            "2x": "/img/photos/b14@2x.jpg 2x"
        }
    },
    {
        id: 4,
        link: "#",
        comments: 3,
        category: "Engagement",
        createdAt: "17 Jan 2022",
        title: "Morbi leo risus porta eget",
        image: {
            "1x": "/img/photos/b15.jpg",
            "2x": "/img/photos/b15@2x.jpg 2x"
        }
    },
    {
        id: 5,
        link: "#",
        comments: 1,
        category: "Couples",
        createdAt: "7 Jan 2022",
        title: "Nulla vitae elit libero",
        image: {
            "1x": "/img/photos/b16.jpg",
            "2x": "/img/photos/b16@2x.jpg 2x"
        }
    },
    {
        id: 6,
        link: "#",
        comments: 2,
        category: "Wedding",
        createdAt: "2 Jan 2022",
        title: "Pharetra augue elit sem",
        image: {
            "1x": "/img/photos/b17.jpg",
            "2x": "/img/photos/b17@2x.jpg 2x"
        }
    }
];
// used in the blog-6 block
const blogList4 = [
    {
        id: 1,
        link: "#",
        category: "Roadtrip",
        image: "/img/photos/tb10.jpg",
        title: "Ligula tristique quis risus",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 2,
        link: "#",
        category: "Historic",
        image: "/img/photos/tb11.jpg",
        title: "Nullam id dolor elit id nibh",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 3,
        link: "#",
        category: "Cities",
        image: "/img/photos/tb12.jpg",
        title: "Ultricies fusce porta elit",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 4,
        link: "#",
        category: "Beaches",
        image: "/img/photos/tb13.jpg",
        title: "Morbi leo risus porta eget",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    }
];
// used in the hero-25 block
const blogList5 = [
    {
        id: 1,
        comments: 3,
        author: "Sandbox",
        category: "Places",
        createdAt: "8 Aug 2022",
        image: "/img/photos/tb1.jpg",
        title: "The Best Moments in Venice"
    },
    {
        id: 2,
        comments: 5,
        author: "Sandbox",
        category: "Restaurants",
        createdAt: "5 Jul 2022",
        image: "/img/photos/tb2.jpg",
        title: "10 Great Places in Belgium"
    },
    {
        id: 3,
        comments: 8,
        author: "Sandbox",
        category: "Roadtrip",
        createdAt: "23 Jun 2022",
        image: "/img/photos/tb3.jpg",
        title: "A Dreamy Roadtrip in Australia"
    },
    {
        id: 4,
        comments: 9,
        author: "Sandbox",
        category: "Historic",
        createdAt: "15 Apr 2022",
        image: "/img/photos/tb4.jpg",
        title: "My Love Affair with Cappadocia"
    },
    {
        id: 5,
        comments: 11,
        author: "Sandbox",
        category: "Nature",
        createdAt: "14 Feb 2022",
        image: "/img/photos/tb5.jpg",
        title: "24 Hours in a Village of Valencia"
    },
    {
        id: 6,
        comments: 8,
        author: "Sandbox",
        category: "Architecture",
        createdAt: "22 Jan 2022",
        image: "/img/photos/tb6.jpg",
        title: "The Largest Train Station in Europe"
    },
    {
        id: 7,
        comments: 14,
        author: "Sandbox",
        category: "Nature",
        createdAt: "2 Jan 2022",
        image: "/img/photos/tb7.jpg",
        title: "The Natural Places in Brazil"
    }
];


/***/ }),

/***/ 7664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c6": () => (/* binding */ cases)
/* harmony export */ });
/* unused harmony exports list, facts, blogList, teams, testimonialList, faq */
const list = (/* unused pure expression or super */ null && ([
    [
        "Aenean quam ornare. Curabitur blandit.",
        "Nullam quis risus eget urna mollis ornare."
    ],
    [
        "Etiam porta euismod malesuada mollis.",
        "Vivamus sagittis lacus vel augue rutrum."
    ]
]));
const facts = [
    {
        id: 1,
        amount: 7518,
        title: "Completed Projects"
    },
    {
        id: 2,
        amount: 3472,
        title: "Satisfied Customers"
    },
    {
        id: 3,
        amount: 2184,
        title: "Expert Employees"
    },
    {
        id: 4,
        amount: 4523,
        title: "Awards Won"
    }
];
const blogList = [
    {
        id: 1,
        category: "Coding",
        date: "14 Apr 2022",
        image: "/img/photos/b4.jpg",
        title: "Ligula tristique quis risus",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
    },
    {
        id: 2,
        category: "Workspace",
        date: "29 Mar 2022",
        image: "/img/photos/b5.jpg",
        title: "ullam id dolor elit id nibh",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
    },
    {
        id: 3,
        category: "Meeting",
        date: "26 Feb 2022",
        image: "/img/photos/b6.jpg",
        title: "Ultricies fusce porta elit",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
    },
    {
        id: 4,
        category: "Business Tips",
        date: "7 Jan 2022",
        image: "/img/photos/b7.jpg",
        title: "Morbi leo risus porta eget",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
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
const testimonialList = [
    {
        id: 1,
        name: "Coriss Ambady",
        image: "/img/avatars/te7.jpg",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        image: "/img/avatars/te8.jpg",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 3,
        name: "Barclay Widerski",
        image: "/img/avatars/te9.jpg",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    }
];
const faq = [
    {
        id: 1,
        title: "Can I cancel my subscription?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
    },
    {
        id: 2,
        title: "Which payment methods do you accept?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
    },
    {
        id: 3,
        title: "How can I manage my Account?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
    },
    {
        id: 4,
        title: "Is my credit card information secure?",
        description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
    }
];
const cases = [
    {
        id: 1,
        title: "Detect ChatGPT Content",
        description: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.`
    },
    {
        id: 2,
        title: "Detect ChatGPT Content",
        description: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.`
    },
    {
        id: 3,
        title: "Detect ChatGPT Content",
        description: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.`
    },
    {
        id: 4,
        title: "Detect ChatGPT Content",
        description: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.`
    }
];



/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: factList, processList, reviews, services

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./icons/lineal/User.tsx

const User = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 441.4 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z"
            })
        ]
    });
};
/* harmony default export */ const lineal_User = (User);

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
;// CONCATENATED MODULE: ./icons/lineal/BriefcaseTwo.tsx

const BriefcaseTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 409.6 380.8",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-primary mb-3"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-fill",
                d: "M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "lineal-stroke",
                d: "M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"
            })
        ]
    });
};
/* harmony default export */ const lineal_BriefcaseTwo = (BriefcaseTwo);

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
        Icon: lineal_User
    },
    {
        id: 3,
        number: 2184,
        title: "Expert Employees",
        Icon: lineal_BriefcaseTwo
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

/***/ 5215:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

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

;// CONCATENATED MODULE: ./icons/solid-mono/Bulb.tsx

const Bulb = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 255.98",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "fill-primary",
                cx: "58.67",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: "fill-primary",
                cx: "197.33",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_Bulb = (Bulb);

// EXTERNAL MODULE: ./icons/solid-mono/Lamp.tsx
var Lamp = __webpack_require__(4694);
;// CONCATENATED MODULE: ./icons/solid-mono/Puzzle.tsx

const Puzzle = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.97 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-orange me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_Puzzle = (Puzzle);

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

;// CONCATENATED MODULE: ./icons/solid-mono/Headphone.tsx

const Headphone = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 244.09",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-green me-4"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-secondary",
                d: "M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-primary",
                d: "M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z"
            })
        ]
    });
};
/* harmony default export */ const solid_mono_Headphone = (Headphone);

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
        Icon: solid_mono_Bulb,
        title: "Innovative Thinking",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 3,
        Icon: solid_mono_Puzzle,
        title: "Rapid Solutions",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 4,
        Icon: solid_mono_Headphone,
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

/***/ 6286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports carouselImages, countList, list, testimonialList */
const countList = [
    {
        id: 1,
        amount: 7518,
        color: "btn-soft-purple",
        title: "Projects Done",
        icon: "uil-presentation-check"
    },
    {
        id: 2,
        amount: 3472,
        color: "btn-soft-red",
        title: "Happy Customers",
        icon: "uil-users-alt"
    },
    {
        id: 3,
        amount: 4537,
        color: "btn-soft-yellow",
        title: "Expert Employees",
        icon: "uil-user-check"
    },
    {
        id: 4,
        amount: 2184,
        color: "btn-soft-aqua",
        title: "Awards Won",
        icon: "uil-trophy"
    }
];
const carouselImages = [
    {
        id: 0,
        url: "#",
        image: "/img/photos/pp17.jpg"
    },
    {
        id: 1,
        url: "#",
        image: "/img/photos/pp18.jpg"
    },
    {
        id: 2,
        url: "#",
        image: "/img/photos/pp19.jpg"
    },
    {
        id: 3,
        url: "#",
        image: "/img/photos/pp20.jpg"
    },
    {
        id: 4,
        url: "#",
        image: "/img/photos/pp21.jpg"
    },
    {
        id: 5,
        url: "#",
        image: "/img/photos/pp22.jpg"
    }
];
const list = (/* unused pure expression or super */ null && ([
    [
        "Aenean quam ornare. Curabitur blandit.",
        "Nullam quis risus eget urna mollis ornare."
    ],
    [
        "Etiam porta euismod malesuada mollis.",
        "Vivamus sagittis lacus vel augue rutrum."
    ]
]));
const testimonialList = [
    {
        id: 1,
        name: "Coriss Ambady",
        image: "/img/avatars/te1.jpg",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        image: "/img/avatars/te2.jpg",
        designation: "Marketing Specialist",
        review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        image: "/img/avatars/te3.jpg",
        designation: "Sales Manager",
        review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui.`
    },
    {
        id: 4,
        name: "Coriss Ambady",
        image: "/img/avatars/te4.jpg",
        designation: "Financial Analyst",
        review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor`
    },
    {
        id: 5,
        name: "Laura Widerski",
        image: "/img/avatars/te5.jpg",
        designation: "Sales Specialist",
        review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient.`
    },
    {
        id: 6,
        name: "Jackie Sanders",
        image: "/img/avatars/te6.jpg",
        designation: "Jackie Sanders",
        review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio.`
    }
];



/***/ }),

/***/ 328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qh": () => (/* binding */ testimonialList2)
/* harmony export */ });
/* unused harmony exports testimonialList1, testimonialList3, testimonialList4, testimonialList5, testimonialList6, testimonialList7 */
// used in the testimonial-1 block
const testimonialList1 = [
    {
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: "Cum sociis natoque penatibus et magnis dis parturient montes.",
        columnClasses: "col-xl-5 align-self-end"
    },
    {
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod.`,
        columnClasses: "align-self-end"
    },
    {
        name: "Barclay Widerski",
        designation: "Sales Specialist",
        review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`,
        columnClasses: "col-xl-5 offset-xl-1"
    },
    {
        name: "Jackie Sanders",
        designation: "Investment Planner",
        review: `Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.`,
        columnClasses: "align-self-start"
    }
];
const testimonialList2 = [
    {
        name: "Marie Reid",
        image: "/img/avatars/te7.jpg",
        designation: "Financial Analyst",
        review: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score`
    },
    {
        name: "Cory Zamora",
        image: "/img/avatars/te8.jpg",
        designation: "Marketing Specialist",
        review: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score`
    },
    {
        name: "Barclay Widerski",
        image: "/img/avatars/te9.jpg",
        designation: "Sales Specialist",
        review: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score`
    },
    {
        name: "Jackie Sanders",
        image: "/img/avatars/te10.jpg",
        designation: "Investment Planner",
        review: `ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score`
    }
];
// used in the testimonial-13 block
const testimonialList3 = [
    {
        id: 1,
        name: "Coriss Ambady",
        image: "/img/avatars/te1.jpg",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        image: "/img/avatars/te2.jpg",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    },
    {
        id: 3,
        name: "Barclay Widerski",
        image: "/img/avatars/te3.jpg",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    }
];
// used in the testimonial-14, testimonial-15 block
const testimonialList4 = [
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
        review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus fermentum.`
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
        designation: "Marketing Manager",
        review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum.`
    }
];
// used in the testimonial-16 block
const testimonialList5 = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Manager",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    }
];
// used in the testimonial-18 block
const testimonialList6 = [
    {
        id: 1,
        name: "Julia & David",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    },
    {
        id: 2,
        name: "Jolene & Andrea",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    },
    {
        id: 3,
        name: "Eve & Will",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    }
];
// used in the testimonial-19 block
const testimonialList7 = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 4,
        name: "Jackie Sanders",
        designation: "Investment Planner",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 5,
        name: "Laura Widerski",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    }
];


/***/ }),

/***/ 2353:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsotope = ()=>{
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(()=>{
        if (false) {}
        (async function() {
            const Isotope = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2349, 23))).default;
            const grids = document.querySelectorAll(".grid");
            if (grids !== null) {
                grids.forEach((g)=>{
                    const grid = g.querySelector(".isotope");
                    isotope.current = new Isotope(grid, {
                        itemSelector: ".item",
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: grid.offsetWidth / 12
                        },
                        percentPosition: true,
                        transitionDuration: "0.7s"
                    });
                });
            }
        })();
        return ()=>isotope.current?.destroy();
    }, []);
    useEffect(()=>{
        const filtered = filterKey === "*" ? {
            filter: "*"
        } : {
            filter: filterKey
        };
        isotope.current?.arrange(filtered);
    }, [
        filterKey
    ]);
    // change filter item
    const handleFilterKeyChange = (key)=>()=>setFilterKey(key);
    return {
        handleFilterKeyChange,
        filterKey
    };
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useIsotope)));


/***/ }),

/***/ 1496:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 594:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useReplaceMe = ()=>{
    useEffect(()=>{
        let replace;
        const options = {
            speed: 2500,
            separator: ",",
            clickChange: false,
            loopCount: "infinite"
        };
        (()=>{
            const ReplaceMe = __webpack_require__(8322);
            if (document.querySelector(".rotator-zoom") !== null) {
                replace = new ReplaceMe(document.querySelector(".rotator-zoom"), {
                    ...options,
                    animation: "animate__animated animate__zoomIn"
                });
            }
            if (document.querySelector(".rotator-fade") !== null) {
                replace = new ReplaceMe(document.querySelector(".rotator-fade"), {
                    ...options,
                    animation: "animate__animated animate__fadeInDown"
                });
            }
        })();
        return ()=>replace?.stop();
    }, []);
    return;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useReplaceMe)));


/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 4694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_blocks_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1214);
/* harmony import */ var components_blocks_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3803);
/* harmony import */ var components_blocks_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3025);
/* harmony import */ var components_blocks_faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4559);
/* harmony import */ var components_blocks_testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3798);
/* harmony import */ var components_blocks_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1055);
/* harmony import */ var _styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1154);
/* harmony import */ var _styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_blocks_playground_Playground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_blocks_hero__WEBPACK_IMPORTED_MODULE_4__, components_blocks_testimonial__WEBPACK_IMPORTED_MODULE_6__, components_blocks_playground_Playground__WEBPACK_IMPORTED_MODULE_8__]);
([components_blocks_hero__WEBPACK_IMPORTED_MODULE_4__, components_blocks_testimonial__WEBPACK_IMPORTED_MODULE_6__, components_blocks_playground_Playground__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function index() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_navbar__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .w, {
                search: true,
                stickyBox: true,
                navClassName: "navbar navbar-expand-lg navbar-light navbar-bg-light shadow rounded mb-5 bg-white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_playground_Playground__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                styles: (_styles_Editor_module_css__WEBPACK_IMPORTED_MODULE_9___default())
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg_secondary pt-10 pb-10 pt-md-14 pb-md-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_services__WEBPACK_IMPORTED_MODULE_3__/* .Services14 */ .Y, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg_primary pt-10 pb-10 pt-md-14 pb-md-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_hero__WEBPACK_IMPORTED_MODULE_4__/* .Hero2 */ ._l, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg_secondary pt-10 pb-10 pt-md-14 pb-md-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_faq__WEBPACK_IMPORTED_MODULE_5__/* .FAQ5 */ .YK, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg_primary pt-10 pb-10 pt-md-14 pb-md-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_testimonial__WEBPACK_IMPORTED_MODULE_6__/* .Testimonial4 */ .i8, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg_secondary pt-10 pb-10 pt-md-14 pb-md-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_faq__WEBPACK_IMPORTED_MODULE_5__/* .FAQ1 */ .ep, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer15 */ .Oo, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8322:
/***/ ((module) => {

"use strict";
/*!
 *  replaceme.js - text rotating component in vanilla JavaScript
 *  @version 1.1.0
 *  @author Adrian Klimek
 *  @link https://adrianklimek.github.io/replaceme/
 *  @copyright Adrian Klimek 2016
 *  @license MIT
 */ 
const ReplaceMe = function() {
    "use strict";
    // Extend defaults
    function extend(target, values) {
        for(var P in values){
            if (values.hasOwnProperty(P)) {
                target[P] = values[P];
            }
        }
        return target;
    }
    // Constructor
    function ReplaceMe(element, options) {
        // Defaults
        var defaults = {
            animation: "animated fadeIn",
            speed: 2000,
            separator: ",",
            hoverStop: false,
            clickChange: false,
            loopCount: "infinite",
            autoRun: true,
            onInit: false,
            onChange: false,
            onComplete: false // Function
        };
        // Extend defaults
        if (typeof options == "object") {
            this.options = extend(defaults, options);
        } else {
            this.options = defaults;
        }
        // Get element
        if (typeof element == "undefined") {
            throw new Error('ReplaceMe [constructor]: "element" parameter is required');
        } else if (typeof element == "object") {
            this.element = element;
        } else if (typeof element == "string") {
            this.element = document.querySelector(element);
        } else {
            throw new Error('ReplaceMe [constructor]: wrong "element" parameter');
        }
        this.init();
    }
    ReplaceMe.prototype.init = function() {
        if (typeof this.options.onInit == "function") {
            this.options.onInit();
        }
        this.words = this.escapeHTML(this.element.innerHTML).split(this.options.separator);
        this.count = this.words.length;
        this.position = this.loopCount = 0;
        this.running = false;
        this.bindAll();
        if (this.options.autoRun === true) {
            this.start();
        }
    };
    ReplaceMe.prototype.bindAll = function() {
        if (this.options.hoverStop === true) {
            this.element.addEventListener("mouseover", this.pause.bind(this));
            this.element.addEventListener("mouseout", this.start.bind(this));
        }
        if (this.options.clickChange === true) {
            this.element.addEventListener("click", this.change.bind(this));
        }
    };
    ReplaceMe.prototype.changeAnimation = function() {
        this.change();
        this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed);
    };
    ReplaceMe.prototype.start = function() {
        if (this.running !== true) {
            this.running = true;
            this.changeWord(this.words[this.position]);
            this.position++;
        }
        this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed);
    };
    ReplaceMe.prototype.change = function() {
        if (this.position > this.count - 1) {
            this.position = 0;
            this.loopCount++;
            if (this.loopCount >= this.options.loopCount) {
                this.stop();
                return;
            }
        }
        this.changeWord(this.words[this.position]);
        this.position++;
        if (typeof this.options.onChange == "function") {
            this.options.onChange();
        }
    };
    ReplaceMe.prototype.stop = function() {
        this.running = false;
        this.position = this.loopCount = 0;
        this.pause();
        if (typeof this.options.onComplete == "function") {
            this.options.onComplete();
        }
    };
    ReplaceMe.prototype.pause = function() {
        clearTimeout(this.loop);
    };
    ReplaceMe.prototype.changeWord = function(word) {
        this.element.innerHTML = '<span class="' + this.options.animation + '" style="display:inline-block;">' + word + "</span>";
    };
    // If there is html tag inside string delete it
    ReplaceMe.prototype.escapeHTML = function(string) {
        var reg = /<\/?\w+\s*[^>]*>/g;
        if (reg.test(string) === true) {
            return string.replace(reg, "");
        }
        return string;
    };
    return ReplaceMe;
}();
module.exports = ReplaceMe;


/***/ }),

/***/ 6158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const carouselBreakpoints = {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 3
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselBreakpoints);


/***/ }),

/***/ 9957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 2587:
/***/ ((module) => {

"use strict";
module.exports = require("@monaco-editor/react");

/***/ }),

/***/ 1440:
/***/ ((module) => {

"use strict";
module.exports = require("glightbox");

/***/ }),

/***/ 2349:
/***/ ((module) => {

"use strict";
module.exports = require("isotope-layout");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

"use strict";
module.exports = require("react-countup");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8851:
/***/ ((module) => {

"use strict";
module.exports = require("skulpt");

/***/ }),

/***/ 2589:
/***/ ((module) => {

"use strict";
module.exports = require("typewriter-effect");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,932,676,61], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();