"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 7865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ articles),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6331);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/image.js



const Image = ({ image  })=>{
    const { alternativeText , width , height  } = image.data.attributes;
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        layout: "responsive",
        width: width,
        height: height,
        objectFit: "contain",
        src: (0,media/* getStrapiMedia */.$)(image),
        alt: alternativeText || ""
    });
};
/* harmony default export */ const components_image = (Image);

;// CONCATENATED MODULE: ./components/card.js




const Card = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        legacyBehavior: true,
        href: `/article/${article.attributes.slug}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "uk-link-reset",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "uk-card uk-card-muted",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "uk-card-media-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image, {
                            image: article.attributes.image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "uk-card-body",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                id: "category",
                                className: "uk-text-uppercase",
                                children: article.attributes.category.data.attributes.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                id: "title",
                                className: "uk-text-large",
                                children: article.attributes.title
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./components/articles.js



const Articles = ({ articles  })=>{
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "uk-child-width-1-2@s",
            "data-uk-grid": "true",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: leftArticles.map((article, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(card, {
                            article: article
                        }, `article__left__${article.attributes.slug}`);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "uk-child-width-1-2@m uk-grid-match",
                        "data-uk-grid": true,
                        children: rightArticles.map((article, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                article: article
                            }, `article__left__${article.attributes.slug}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_articles = (Articles);

;// CONCATENATED MODULE: ./components/nav.js



const Nav = ({ categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "uk-navbar-container",
            "data-uk-navbar": true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "uk-navbar-left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "uk-navbar-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/",
                                children: "Strapi Blog"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "uk-navbar-right",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "uk-navbar-nav",
                        children: categories.map((category)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: `/category/${category.attributes.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "uk-link-reset",
                                        children: category.attributes.name
                                    })
                                })
                            }, category.id);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/layout.js


const Layout = ({ children , categories , seo  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav, {
                categories: categories
            }),
            children
        ]
    });
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/_app.js + 2 modules
var _app = __webpack_require__(7723);
;// CONCATENATED MODULE: ./components/seo.js





const Seo = ({ seo  })=>{
    const { defaultSeo , siteName  } = (0,external_react_.useContext)(_app.GlobalContext);
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo
    };
    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
        // Get full image URL
        shareImage: (0,media/* getStrapiMedia */.$)(seoWithDefaults.shareImage)
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            fullSeo.metaTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: fullSeo.metaTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: fullSeo.metaTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: fullSeo.metaTitle
                    })
                ]
            }),
            fullSeo.metaDescription && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: fullSeo.metaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: fullSeo.metaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: fullSeo.metaDescription
                    })
                ]
            }),
            fullSeo.shareImage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: fullSeo.shareImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: fullSeo.shareImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "image",
                        content: fullSeo.shareImage
                    })
                ]
            }),
            fullSeo.article && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "article"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    });
};
/* harmony default export */ const seo = (Seo);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
;// CONCATENATED MODULE: ./pages/articles.js






const ArticlesPage = ({ articles , categories , homepage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
        categories: categories,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo, {
                seo: homepage.attributes.seo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "uk-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "uk-container uk-container-large",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: homepage.attributes.hero.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_articles, {
                            articles: articles
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
        (0,api/* fetchAPI */.I)("/articles", {
            populate: [
                "image",
                "category"
            ]
        }),
        (0,api/* fetchAPI */.I)("/categories", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/homepage", {
            populate: {
                hero: "*",
                seo: {
                    populate: "*"
                }
            }
        })
    ]);
    return {
        props: {
            articles: articlesRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const articles = (ArticlesPage);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,932,676,61,270,723], () => (__webpack_exec__(7865)));
module.exports = __webpack_exports__;

})();