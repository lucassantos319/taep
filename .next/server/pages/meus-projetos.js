(function() {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 7521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ meus_projetos; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components-material-ui/templates/layout.js + 3 modules
var layout = __webpack_require__(1472);
// EXTERNAL MODULE: ./components-material-ui/templates/telaMeusProjetos.js
var telaMeusProjetos = __webpack_require__(7471);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
;// CONCATENATED MODULE: external "cookie"
var external_cookie_namespaceObject = require("cookie");;
;// CONCATENATED MODULE: ./pages/meus-projetos/index.js








 // export async function getStaticProps() {
// 	const url = process.env.SERVER_HOST+"project/1";
// 	const projects = await axios.get(url).then(response=>response.data);
// 	return { props: { projects } }
// }

const MeusProjetos = props => {
  const router = (0,router_.useRouter)();
  const [userCookie, setCookie] = (0,external_react_cookie_.useCookies)(["user"]);

  if (Object.keys(userCookie).length !== 0) {
    const userInfoLogin = userCookie.user.login;

    if (userInfoLogin) {
      //          
      return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
        tipo: userCookie.user.user_type,
        children: /*#__PURE__*/jsx_runtime_.jsx(telaMeusProjetos/* default */.Z, {
          projects: props.projects,
          usuario: userCookie.user.user_type
        })
      });
    } else return /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: " problema com o login"
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "problema com o cookie"
    })
  });
};

async function getServerSideProps(context) {
  const parsedCookies = external_cookie_namespaceObject.parse(context.req.headers.cookie); // console.log(parsedCookies);

  const user = JSON.parse(parsedCookies.user);
  const url = process.env.SERVER_HOST + "project/" + user.id;
  const projects = await external_axios_default().get(url).then(response => response.data);
  return {
    props: {
      projects
    }
  };
}
/* harmony default export */ var meus_projetos = (MeusProjetos);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,583,150,745,675,138,236,84,122,471], function() { return __webpack_exec__(7521); });
module.exports = __webpack_exports__;

})();