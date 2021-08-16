exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 1575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const DivElementosCentralizados = ({
  className,
  top,
  left,
  children,
  id,
  margin,
  padding,
  width,
  height,
  border,
  textAlign,
  borderRadius,
  backgroundColor,
  display,
  flexDirection,
  justifyContent,
  boxShadow
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Div, {
    className: className,
    id: id,
    margin: margin,
    padding: padding,
    width: width,
    height: height,
    border: border,
    textAlign: textAlign,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    boxShadow: boxShadow,
    display: display,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    top: top,
    left: top,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DivElementosCentralizados);
const Div = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)` 
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    box-shadow: ${props => props.boxShadow};
    text-align: ${props => props.textAlign || "center"};
    background-color: ${props => props.backgroundColor};
    top: ${props => props.top};
    left: ${props => props.left}

    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    justify-content: ${props => props.justifyContent || "center"};
`;

/***/ }),

/***/ 5195:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const Paragrafo = ({
  id,
  className,
  children,
  margin,
  color,
  fontSize,
  lineHeigth,
  fontWeight,
  textAlign
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Parag, {
    id: id,
    className: className,
    margin: margin,
    color: color,
    fontSize: fontSize,
    lineHeigth: lineHeigth,
    fontWeight: fontWeight,
    textAlign: textAlign,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Paragrafo);
const Parag = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().p)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    font-family: "Poppins", sans-serif;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    color: ${props => props.color || "#000"};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeigth};
    font-weight: ${props => props.fontWeight || "600"};
    text-align: ${props => props.textAlign}
`;

/***/ })

};
;