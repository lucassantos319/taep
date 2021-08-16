exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 1122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ boxProjeto; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js
var CardActionArea = __webpack_require__(9738);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(1907);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./public/img/conteudoProjeto.jpg
/* harmony default export */ var conteudoProjeto = ({"src":"/_next/static/image/public/img/conteudoProjeto.70f6f1c73a62715ff139aab134316215.jpg","height":1080,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHP/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAA//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRBCEAEyP/2gAIAQEAAT8AwJciOYx9vipYKtbAG6vn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAgEBPwC4bP/EABcRAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQMBAT8AquT/2Q=="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components-material-ui/molecules/boxProjeto.js














const useStyles = (0,makeStyles/* default */.Z)({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const BoxProjeto = ({
  id,
  imgProjeto = false,
  titulo,
  professor,
  status,
  descricao,
  onClick
}) => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    id: id,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      className: "root",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CardActionArea/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          height: 215,
          width: 345,
          src: imgProjeto == false ? conteudoProjeto : imgProjeto
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
          className: "m-box",
          variant: "body2",
          color: "textSecondary",
          component: "p",
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "Status:"
          }), " ", status[0].toUpperCase() + status.substr(1)]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContent/* default */.Z, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            gutterBottom: true,
            variant: "h5",
            component: "h2",
            children: titulo[0].toUpperCase() + titulo.substr(1)
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
            variant: "body1",
            color: "textSecondary",
            component: "p",
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Professor:"
            }), " ", professor]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
            className: "m-top",
            variant: "body2",
            color: "textSecondary",
            component: "p",
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Descri\xE7\xE3o:"
            }), " ", descricao]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(CardActions/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: onClick,
          variant: "contained",
          color: "primary",
          size: "large",
          children: "Acessar"
        })
      })]
    })
  });
};

/* harmony default export */ var boxProjeto = (BoxProjeto);
const Div = (external_styled_components_default()).div`
    .root{
        border 2px solid #142850;
        border-radius: 12px;
        max-width: 345px;
        box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);
        // background-color: #ededed;

        :hover{
            border 2px solid #27496D;
            box-shadow: 6px 6px 4px rgb(20, 40, 80, 0.8);;
        }

        .m-top{
            margin-top: 24px;
        }

        .m-box{
            margin-left: 16px;
        }

        h2{
            font-size: 36px;
            margin: 0;
        }
    }

    .media{
        height: 140px;
    }
`;

/***/ })

};
;