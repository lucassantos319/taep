(function() {
var exports = {};
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components-material-ui/templates/layout.js + 3 modules
var layout = __webpack_require__(1472);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/atoms/tipografia/paragrafo.js
var paragrafo = __webpack_require__(5195);
;// CONCATENATED MODULE: external "react-tabs"
var external_react_tabs_namespaceObject = require("react-tabs");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/atoms/div/div.js



const Div = ({
  className,
  children,
  id,
  flex,
  padding,
  border,
  borderRadius,
  margin,
  width,
  height,
  textAlign,
  display,
  flexDirection,
  justifyContent,
  position
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div1, {
    className: className,
    id: id,
    padding: padding,
    margin: margin,
    width: width,
    height: height,
    border: border,
    borderRadius: borderRadius,
    position: position,
    textAlign: textAlign,
    display: display,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    flex: flex,
    children: children
  });
};

/* harmony default export */ var div = (Div);
const Div1 = (external_styled_components_default()).div` 
    padding: ${props => props.padding || "12px"};
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    text-align: ${props => props.textAlign};
    position:${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    float: ${props => props.float};

    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`;
// EXTERNAL MODULE: ./components/atoms/div/divElementosCentralizados.js
var divElementosCentralizados = __webpack_require__(1575);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/molecules/cardAvaliacao.js








const CardAvaliacao = ({
  id,
  handleClick,
  selected,
  titulo,
  conteudo,
  date
}) => {
  if (typeof conteudo != 'undefined') if (conteudo.length >= 38) var conteudoProcessado = conteudo.substring(0, 35) + "...";else var conteudoProcessado = conteudo;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonCardMessage, {
    id: id,
    onClick: e => handleClick(e, id),
    className: selected == id ? "ativo" : "",
    children: [/*#__PURE__*/jsx_runtime_.jsx(div, {
      width: "10%",
      height: "100%",
      margin: "0 6px 0 0 ",
      padding: "0px",
      children: /*#__PURE__*/jsx_runtime_.jsx(divElementosCentralizados/* default */.Z, {
        className: "icone icon-font",
        id: id + "-icon",
        margin: "0px",
        width: "100%",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBook */.Mp$, {})
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(div, {
      width: "65%",
      height: "100%",
      margin: "0 6px 0 6px",
      padding: "0px",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(divElementosCentralizados/* default */.Z, {
        display: "block",
        width: "100%" // inputPTextAlign="left" 
        ,
        children: [/*#__PURE__*/jsx_runtime_.jsx(paragrafo/* default */.Z, {
          className: "nome",
          id: id + "-message-sender",
          color: "RGB(33, 34, 35)",
          fontSize: "14px",
          lineHeigth: "20px",
          textAlign: "left",
          children: titulo
        }), /*#__PURE__*/jsx_runtime_.jsx(paragrafo/* default */.Z, {
          color: "RGB(113, 113, 113, 0.8)",
          fontSize: "13px",
          lineHeigth: "20px",
          textAlign: "left",
          children: conteudoProcessado
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(div, {
      width: "25%",
      height: "100%",
      margin: "0 0 0 6px",
      padding: "0px",
      children: /*#__PURE__*/jsx_runtime_.jsx(divElementosCentralizados/* default */.Z, {
        width: "100%",
        children: /*#__PURE__*/jsx_runtime_.jsx(paragrafo/* default */.Z, {
          color: "RGB(144, 145, 145)",
          fontSize: "12px",
          fontWeight: "500",
          children: date
        })
      })
    })]
  });
};

/* harmony default export */ var cardAvaliacao = (CardAvaliacao);
const ButtonCardMessage = (external_styled_components_default()).button`
    width: 415px;
    height: 80px;
    padding: 12px;
    
    cursor: pointer;
    border: 1px solid RGB(151, 151, 151, 0.26);

    display: flex;

    background-color: #FFF;

    .icon-font{
        font-size: 30px;
    }

    &:hover{
        border: 1px solid RGB(151, 151, 151, 0.45);
    }

    &.ativo{
        border-left: 3px solid RGB(255, 71, 0);

        .icone{
            color: RGB(255, 71, 0);
        }
        
        .nome{
            color: RGB(255, 71, 0);
            font-size: 16px;
        }
    }
`;
// EXTERNAL MODULE: external "react-form-builder2"
var external_react_form_builder2_ = __webpack_require__(6253);
;// CONCATENATED MODULE: ./components/molecules/formShower.js



class FormShower extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    if (props.messageData.length > 0) {
      this.state = {
        data: props.messageData
      };
    }

    external_react_form_builder2_.ElementStore.subscribe(state => update(state.data));
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "clearfix",
      style: {
        margin: '10px',
        marginBottom: "20px",
        width: '70%'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_form_builder2_.ReactFormGenerator, {
        download_path: "",
        answer_data: {},
        action_name: "Save",
        form_method: "POST",
        variables: this.props.variables,
        data: this.state.data
      })
    });
  }

}
;// CONCATENATED MODULE: ./components/molecules/cardTexto.js






const CardTexto = ({
  id,
  messagesData,
  className
}) => {
  var messageData;

  if (id != null) {
    messageData = messagesData.find(x => x.atividadeId == id);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DivCardMessage, {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(paragrafo/* default */.Z, {
      inputMargin: "0 0 12px 0",
      inputColor: "RGB(59, 57, 57)",
      inputFontSize: "16px",
      inputFontWeight: "700",
      inputLineHeigth: "17px",
      children: messageData == undefined ? "" : messageData.title
    }), /*#__PURE__*/jsx_runtime_.jsx(paragrafo/* default */.Z, {
      inputMargin: "0 0 6px 0",
      inputColor: "RGB(113, 113, 113)",
      inputFontSize: "14px",
      inputLineHeigth: "15px",
      children: messageData == undefined ? "" : messageData.description
    }), messageData != undefined ? messageData.data.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        marginTop: '20px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(FormShower, {
        messageData: messageData.data
      })
    }) : ""]
  });
};

/* harmony default export */ var cardTexto = (CardTexto);
const DivCardMessage = (external_styled_components_default()).div`
    padding: 6px;
    width: 100%;
    height: 463px;
    background-color: #FFF;

    overflow-y: scroll;
    display: block;
`;
;// CONCATENATED MODULE: ./components/organism/mensagens.js








const Mensagens = ({
  messagesData = []
}) => {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(null);

  const handleClick = (event, id) => {
    event.preventDefault();

    if (id == selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DivBoxMessages, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(div, {
      className: "scroll-y",
      padding: "0px",
      width: "38.65%",
      height: "100%",
      display: "block",
      borderRadius: "12px",
      children: messagesData.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(cardAvaliacao, {
        handleClick: handleClick,
        id: item.atividadeId,
        selected: selected,
        titulo: item.title,
        conteudo: item.description,
        date: item.date
      }, i))
    }), /*#__PURE__*/jsx_runtime_.jsx(div, {
      width: "61.35%",
      height: "100%",
      borderRadius: "12px",
      children: /*#__PURE__*/jsx_runtime_.jsx(cardTexto, {
        id: selected,
        messagesData: messagesData,
        className: selected == null ? "esconde" : ""
      })
    })]
  });
};

/* harmony default export */ var mensagens = (Mensagens);
const DivBoxMessages = (external_styled_components_default()).div` 
    height: 540px;
    width: 100%;
    background-color: #F0F2F5;
    display: flex;

    border: 3px solid RGB(151, 151, 151, 0.33);
    border-radius: 12px;

    .scroll-y{
        overflow-y: scroll;
    }

    .esconde{
        display: none;
    }

    .border-radius-12{
        border-radius: 12px;
    }
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
var Modal_namespaceObject = require("react-bootstrap/Modal");;
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Button"
var Button_namespaceObject = require("react-bootstrap/Button");;
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 39 modules
var TextField = __webpack_require__(8156);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(1907);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./components/molecules/cardUsuario.js








const CardUser = ({
  usuario
}) => {
  var userType;
  if (usuario.user_type == 1) userType = "Professor";else userType = "Aluno";
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      style: {
        marginTop: "20px"
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContent/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "h7",
          gutterBottom: true,
          children: usuario.first_name + " " + usuario.last_name
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          color: "textSecondary",
          children: usuario.email + " - " + userType
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(CardActions/* default */.Z, {})]
    })
  });
};

/* harmony default export */ var cardUsuario = (CardUser);
;// CONCATENATED MODULE: ./components/organism/usuariosProjeto.js





const UsuariosProjetos = ({
  usuarios,
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        style: {
          width: "100%",
          padding: "14px"
        },
        onClick: onClick,
        children: " Vincular usuario "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: usuarios.map(item => /*#__PURE__*/jsx_runtime_.jsx(cardUsuario, {
        usuario: item
      }))
    })]
  });
};

/* harmony default export */ var usuariosProjeto = (UsuariosProjetos);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/organism/tabsProjetoProfessor.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function TabsProjetoProfessor({
  atividadeData,
  usuarios,
  avaliacoes
}) {
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();
  const [cookie, setCookie] = (0,external_react_cookie_.useCookies)(["atividade"]);
  const [cookieUser, setCookieUser] = (0,external_react_cookie_.useCookies)(["user"]);
  const router = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  const {
    0: isOpenAtividade,
    1: setIsOpenAtividade
  } = (0,external_react_.useState)(false);
  const {
    0: isOpenUsuario,
    1: setIsOpenUsuario
  } = (0,external_react_.useState)(false);

  const showModalAtividade = () => {
    setIsOpenAtividade(true);
  };

  const showModalUsuario = () => {
    setIsOpenUsuario(true);
  };

  const hideModalAtividade = () => {
    setIsOpenAtividade(false);
  };

  const hideModalUsuario = () => {
    setIsOpenUsuario(false);
  };

  const pushAtividade = data => {
    const atividade = {
      "titulo": data.title,
      "description": data.description
    };
    setCookie("atividade", JSON.stringify(atividade), {
      path: "/",
      sameSite: true
    });
    router.prefetch("/criacao-atividade");
    router.push("/criacao-atividade");
  };

  const pushUsuario = async data => {
    const url = process.env.SERVER_HOST + "project/" + id + "/linkUsuario";

    if (Object.keys(cookieUser).length !== 0) {
      if (cookieUser.user.login) {
        const x = await external_axios_default().post(url, {
          "userEmail": data.email,
          "userRequestId": cookieUser.user.id
        }).then(response => response.data);
        console.log(x);
      }
    }

    hideModalUsuario();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
      show: isOpenAtividade,
      onHide: hideModalAtividade,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Header, {
        children: /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Title, {
          children: "Criar atividade"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              padding: "20px"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                marginBottom: "30px"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, _objectSpread(_objectSpread({}, register("title")), {}, {
                id: "title",
                style: {
                  width: "100%"
                },
                required: true,
                label: "Titulo",
                variant: "outlined"
              }))
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, _objectSpread(_objectSpread({}, register("description")), {}, {
                required: true,
                id: "description",
                style: {
                  width: "100%"
                },
                label: "Descri\xE7\xE3o",
                variant: "outlined"
              }))
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()).Footer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: handleSubmit(pushAtividade),
          children: "Criar"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: hideModalAtividade,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
      show: isOpenUsuario,
      onHide: hideModalUsuario,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Header, {
        children: /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Title, {
          children: "Vincular usu\xE1rio"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              padding: "20px"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, _objectSpread(_objectSpread({}, register("email")), {}, {
                placeholder: "Insira o email a ser vinculado",
                style: {
                  width: "100%"
                },
                required: true,
                label: "Email",
                variant: "outlined"
              }))
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()).Footer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: handleSubmit(pushUsuario),
          children: "Criar"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          onClick: hideModalUsuario,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoProfessor_Div1, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.Tabs, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.TabList, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
            children: "Descri\xE7\xE3o"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
            children: "Alunos"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
            children: "Atividades"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
            children: "Avalia\xE7\xF5es do Projeto"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
            children: "Avisos"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
          children: /*#__PURE__*/jsx_runtime_.jsx(DivInterna, {
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Any content 1"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
          children: /*#__PURE__*/jsx_runtime_.jsx(DivInterna, {
            children: /*#__PURE__*/jsx_runtime_.jsx(usuariosProjeto, {
              onClick: showModalUsuario,
              usuarios: usuarios
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(DivInterna, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                onClick: showModalAtividade,
                children: "Criar Atividades"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(mensagens, {
              messagesData: atividadeData
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
          children: /*#__PURE__*/jsx_runtime_.jsx(DivInterna, {
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Any content 4"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
          children: /*#__PURE__*/jsx_runtime_.jsx(DivInterna, {
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Any content 5"
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var tabsProjetoProfessor = (TabsProjetoProfessor);
const tabsProjetoProfessor_Div1 = (external_styled_components_default()).div`
padding: 36px;
height: 100%;
width: 80%;

ul{
    margin: 0px;
    li{
        font-weight: 600;
    }
}
`;
const DivInterna = (external_styled_components_default()).div`
padding: 12px;
border-top-color: transparent;
border-top-style: solid;
border-top-width: 1px;
border-right-color: rgb(170, 170, 170);
border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(170, 170, 170);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(170, 170, 170);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    `;
;// CONCATENATED MODULE: ./components/organism/tabsProjetoAluno.js







const TabsProjetoAluno = ({
  idProjeto
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno_Div1, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.Tabs, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.TabList, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
          children: "Descri\xE7\xE3o"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
          children: "Atividades"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
          children: "Avalia\xE7\xF5es do Projeto"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
          children: "Avisos"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
        children: /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno_DivInterna, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Any content 1"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
        children: /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno_DivInterna, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Any content 3"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
        children: /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno_DivInterna, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Any content 4"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
        children: /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno_DivInterna, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Any content 5"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var tabsProjetoAluno = (TabsProjetoAluno);
const tabsProjetoAluno_Div1 = (external_styled_components_default()).div`
    padding: 36px;
    height: 100%;
    width: 80%;

    ul{
        margin: 0px;
        li{
            font-weight: 600;
        }
    }
`;
const tabsProjetoAluno_DivInterna = (external_styled_components_default()).div`
    padding: 12px;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(170, 170, 170);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(170, 170, 170);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(170, 170, 170);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
`;
;// CONCATENATED MODULE: ./pages/meus-projetos/[id]/index.js










const ProjetoPageDefault = ({
  messagesData,
  usuarios
}) => {
  const router = (0,router_.useRouter)();
  const [userCookie, setCookie] = (0,external_react_cookie_.useCookies)(['user']);
  const {
    id
  } = router.query;
  console.log(messagesData);

  if (Object.keys(userCookie).length !== 0) {
    const userInfoLogin = userCookie.user.login;

    if (userInfoLogin) {
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
          children: userCookie.user.user_type == 1 ? /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoProfessor, {
            atividadeData: messagesData,
            usuarios: usuarios,
            idProjeto: id
          }) : /*#__PURE__*/jsx_runtime_.jsx(tabsProjetoAluno, {
            idProjeto: id
          })
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
  // const parsedCookies = cookie.parse(context.req.headers.cookie);
  // // console.log(parsedCookies);
  // const user = JSON.parse(parsedCookies.user);
  const {
    id
  } = context.query;
  const atividadesUrl = process.env.SERVER_HOST + "project/" + id + "/atividades";
  const usuariosUrl = process.env.SERVER_HOST + "project/" + id + "/usuarios";
  const messagesData = await external_axios_default().get(atividadesUrl).then(response => response.data);
  const usuarios = await external_axios_default().get(usuariosUrl).then(response => response.data);
  return {
    props: {
      messagesData,
      usuarios
    }
  };
}
/* harmony default export */ var _id_ = (ProjetoPageDefault);

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

/***/ 6253:
/***/ (function(module) {

"use strict";
module.exports = require("react-form-builder2");;

/***/ }),

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 3857:
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,583,150,138,209,268,156,84,197], function() { return __webpack_exec__(631); });
module.exports = __webpack_exports__;

})();