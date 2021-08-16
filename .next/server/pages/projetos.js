(function() {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 4979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ projetos; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components-material-ui/templates/layout.js + 3 modules
var layout = __webpack_require__(1472);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components-material-ui/molecules/boxProjeto.js + 1 modules
var boxProjeto = __webpack_require__(1122);
;// CONCATENATED MODULE: ./components-material-ui/templates/telaTodosProjetos.js








const TelaTodosProjetos = ({
  projects,
  usuario
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tela, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "TODOS OS PROJETOSSSSSSSSSSSSSSSSSSSSS"
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      maxWidth: "lg",
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        container: true,
        spacing: 4,
        children: projects.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(boxProjeto/* default */.Z, {
            id: "teste" // imgProjeto = {img1}
            ,
            titulo: item.titulo,
            professor: item.userCreator.first_name + ' ' + item.userCreator.last_name // imagemConteudoProjeto = {conteudoProjeto}
            ,
            status: item.status,
            descricao: item.descricao.lenght > 35 ? item.descricao.substring(0, 32) + '...' : item.descricao,
            onClick: () => {
              router.push('/meus-projetos/' + item.id);
            }
          })
        }))
      })
    })]
  });
};

/* harmony default export */ var telaTodosProjetos = (TelaTodosProjetos);
const Tela = (external_styled_components_default()).div`
padding: 12px;

@media screen and (min-width : 0px) and (max-width : 767px){
}
`;
const Div = (external_styled_components_default()).div`
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
`;
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
;// CONCATENATED MODULE: ./pages/projetos.js








async function getServerSideProps() {
  const url = process.env.SERVER_HOST + "project/getAll";
  const projects = await external_axios_default().get(url).then(response => response.data);
  return {
    props: {
      projects
    }
  };
}

const Projetos = props => {
  const router = (0,router_.useRouter)();
  const [userCookie, setCookie] = (0,external_react_cookie_.useCookies)(["user"]);

  if (Object.keys(userCookie).length !== 0) {
    const userInfoLogin = userCookie.user.login;

    if (userInfoLogin) {
      //          
      return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
        tipo: userCookie.user.user_type,
        children: /*#__PURE__*/jsx_runtime_.jsx(telaTodosProjetos, {
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

/* harmony default export */ var projetos = (Projetos);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,583,150,745,675,138,236,84,122], function() { return __webpack_exec__(4979); });
module.exports = __webpack_exports__;

})();