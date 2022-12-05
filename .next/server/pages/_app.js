(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 92:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Manrope_a657a6', '__Manrope_Fallback_a657a6'","fontStyle":"normal"},
	"className": "__className_a657a6"
};


/***/ }),

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Manrope","arguments":[{"subsets":["latin"]}],"variableName":"manrope"}
var _app_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_ = __webpack_require__(92);
var _app_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(716);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx






const title = "Rahul Rajkumar";
const description = "Personal Website";
const siteUrl = "https://rahulrajkumar.me";
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (_app_tsx_import_Manrope_arguments_subsets_latin_variableName_manrope_default()).className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: title,
                description: description,
                openGraph: {
                    type: "website",
                    url: siteUrl,
                    title,
                    description: description + ".",
                    images: [
                        {
                            url: `${siteUrl}/og.png`,
                            alt: title
                        }
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
                disableTransitionOnChange: true,
                attribute: "class",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 716:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(126));
module.exports = __webpack_exports__;

})();