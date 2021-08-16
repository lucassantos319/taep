exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 7471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_boxProjeto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1122);









const TelaMeusProjetos = ({
  projects,
  usuario
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tela, {
    children: [usuario == 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxWidth: "lg",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "criar-projeto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Div, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "contained",
            color: "primary",
            size: "large",
            children: "Criar novo projeto"
          })
        })
      })
    }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxWidth: "lg",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        container: true,
        spacing: 4,
        children: projects.map((item, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          item: true,
          xs: 12,
          sm: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_boxProjeto__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
            id: item.id // imgProjeto = {img1}
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

/* harmony default export */ __webpack_exports__["Z"] = (TelaMeusProjetos);
const Tela = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
padding: 12px;

@media screen and (min-width : 0px) and (max-width : 767px){
}
`;
const Div = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
`;

/***/ })

};
;