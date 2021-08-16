exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 1139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ telaLogin; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
;// CONCATENATED MODULE: ./components-material-ui/organism/formularioLogin.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FormularioLogin = ({}) => {
  const router = (0,router_.useRouter)();
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();
  const [cookie, setCookie] = (0,external_react_cookie_.useCookies)(["user"]);

  const OnSubmitFunctionForm = async data => {
    try {
      const url = process.env.SERVER_HOST + "login";
      const userData = await external_axios_default().post(url, {
        "email": data.email,
        "password": data.password
      }).then(response => response.data);

      if (userData.login) {
        setCookie("user", JSON.stringify(userData), {
          path: "/",
          maxAge: 3600,
          // Expires after 1hr
          sameSite: true
        });
        router.prefetch("/home");
        router.push("/home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
      maxWidth: "sm",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit(OnSubmitFunctionForm),
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, _objectSpread({
          id: "login-email",
          label: "Email",
          type: "email",
          required: true,
          fullWidth: true,
          margin: "normal"
        }, register("email"))), /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, _objectSpread({
          id: "login-senha",
          label: "Senha",
          type: "password",
          required: true,
          fullWidth: true,
          margin: "normal"
        }, register("password"))), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          container: true,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            xs: 12,
            className: "centraliza",
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              className: "m-12",
              variant: "contained",
              color: "primary",
              type: "submit",
              size: "large",
              children: "Entrar"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            xs: 12,
            className: "centraliza-texto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              className: "centraliza",
              href: "cadastrar-professor",
              children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
                color: "primary",
                children: "Professor, fa\xE7a o seu cadastro"
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var formularioLogin = (FormularioLogin);
const Div = (external_styled_components_default()).div`
    .centraliza{
        display: flex;
        justify-content: center;
    }
    .centraliza-texto{
        text-align: center;
    }

    .m-12{
        margin-top: 12px;
    }
`;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/img/logo-taep.png
/* harmony default export */ var logo_taep = ({"src":"/_next/static/image/public/img/logo-taep.db3e4ea40e479100b4f2532f4d8f1db0.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mMQUjHKlDbzvCzmGvdDwiPpP6NLwn9R17jfDHqetxiEjTMZQMBCmkHN1Snov5d/2r+YuIL//qFZn6IDNYsq8kxUGKBAcktB4N/jM5r/n29L+H+0LOh1S6X9nOm9/r5g2YqYkNJLy+f8/3Hj1J/nx3f9ObF81v+K+LhiBhgojAgqebZ9zf9f147//3v77P/nR3f8L4wKKgFL/r9+nIkBCLZ3VmTe3LL81519678fWzk9CSz39RFYDgzcMid2tzX0/m5r6PvtnzWxiwEZmFgyiCxcuet/XGTd/1ggXrZ2z39/LwYRBgYGBgB+/WpkWPgzdwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components-material-ui/templates/telaLogin.js







const TelaLogin = ({}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Tela, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoxInputLogin, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "centraliza",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          height: 120,
          width: 120,
          src: logo_taep
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "h1",
        children: "Bem-vindo ao TAEP 4.0"
      }), /*#__PURE__*/jsx_runtime_.jsx(formularioLogin, {})]
    })
  });
};

/* harmony default export */ var telaLogin = (TelaLogin);
const colors = external_styled_components_.keyframes`
    0%{
        background-position 0% 50%;
    }
    
    50%{
        background-position 100% 50%;
    }

    100%{
        background-position 0% 50%;
    }
`;
const Tela = (external_styled_components_default()).div`
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;

    //criação do backgournd gradiente (animado????)
    background: linear-gradient(45deg, #142850, #27496D, #0C7B93, #00A8CC);
    background-size: 300% 300%;
    animation: ${colors} 10s ease infinite;
`;
const BoxInputLogin = (external_styled_components_default()).div`
    background-color: ;
    max-width: 500px;
    max-height: 600px;
    padding: 36px;
    background-color: #FFF;

    border-radius: 12px;
    box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);

    //pra centralizar verticalmente
    position: absolute;
    top: 35%;
    transform: translateY(-50%);

    .h1{
        margin: 12px 0 12px 0;
        text-align: center;
    }
    
    .centraliza{
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width : 0px) and (max-width : 767px){
        max-width: 300px;
        max-height: 600px;
        top: 50%;
    }
`;

/***/ })

};
;