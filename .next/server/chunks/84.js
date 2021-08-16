exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 1472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components-material-ui/molecules/navbarProfessor.js









const NavbarProfessor = ({}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.List, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "home",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaHome */.xng, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Home"
          })]
        }, 'home')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/perfil",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaUser */.Xws, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Perfil"
          })]
        }, 'perfil')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/meus-projetos",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaTasks */.qGN, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Meus Projetos"
          })]
        }, 'meus-projetos')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/projetos",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaProjectDiagram */.YAH, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Projetos"
          })]
        }, 'projetos')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "cadastrar-aluno",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaCog */.p4t, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Cadastrar Aluno"
          })]
        }, 'cadastrar-aluno')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "sair",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          button: true,
          className: "hover-item-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaSignOutAlt */.fHX, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Sair"
          })]
        }, 'sair')
      })]
    })
  });
};

/* harmony default export */ var navbarProfessor = (NavbarProfessor);
const Div = (external_styled_components_default()).div`
    .text-nav{
        font-size: 24px;
        color: #FFF;
    }
    .hover-item-nav:hover{
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
;// CONCATENATED MODULE: ./components-material-ui/molecules/navbarAluno.js









const NavbarAluno = ({}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(navbarAluno_Div, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.List, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/home",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          className: "hover-item-nav",
          button: "true",
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaHome */.xng, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Home"
          })]
        }, 'home')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/perfil",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          className: "hover-item-nav",
          button: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaUser */.Xws, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Perfil"
          })]
        }, 'perfil')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/meus-projetos",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          className: "hover-item-nav",
          button: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaTasks */.qGN, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Meus Projetos"
          })]
        }, 'meus-projetos')
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/sair",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ListItem, {
          className: "hover-item-nav",
          button: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaSignOutAlt */.fHX, {
              className: "text-nav"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            className: "text-nav",
            primary: "Sair"
          })]
        }, 'sair')
      })]
    })
  });
};

/* harmony default export */ var navbarAluno = (NavbarAluno);
const navbarAluno_Div = (external_styled_components_default()).div`
    .text-nav{
        font-size: 24px;
        color: #FFF;
    }

    .hover-item-nav:hover{
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
;// CONCATENATED MODULE: ./components-material-ui/organism/navbar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const drawerWidth = 240;
const useStyles = (0,core_.makeStyles)(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  corBackground: {
    background: 'linear-gradient(90deg, #142850, #27496D)',
    backgroundSize: '300% 300%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    // background: 'linear-gradient(0deg, #142850, #27496D)',
    background: 'linear-gradient(135deg, #142850, #27496D)',
    backgroundSize: '150% 150%'
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: 'flex-end'
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    padding: '0'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  branco: {
    color: '#FFF'
  }
}));

const Navbar = ({
  children,
  tipo,
  aberto = true
}) => {
  const classes = useStyles();
  const theme = (0,core_.useTheme)();
  const [open, setOpen] = external_react_default().useState(aberto);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.CssBaseline, {}), /*#__PURE__*/jsx_runtime_.jsx(core_.AppBar, {
      position: "fixed",
      className: external_clsx_default()(classes.appBar, {
        [classes.appBarShift]: open
      }),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Toolbar, {
        className: classes.corBackground,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          className: external_clsx_default()(classes.menuButton, open && classes.hide),
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBars */.Fm7, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h6",
          noWrap: true,
          children: "HELLO WORLD"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Drawer, {
      className: classes.drawer,
      variant: "persistent",
      anchor: "left",
      open: open,
      classes: {
        paper: classes.drawerPaper
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.drawerHeader,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          onClick: handleDrawerClose,
          children: theme.direction === 'ltr' ? /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaArrowLeft */.x_l, {
            className: classes.branco
          }) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaArrowRight */.Z1Y, {
            className: classes.branco
          })
        })
      }), tipo == 2 ? /*#__PURE__*/jsx_runtime_.jsx(navbarAluno, {}) : /*#__PURE__*/jsx_runtime_.jsx(navbarProfessor, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_clsx_default()(classes.content, {
        [classes.contentShift]: open
      }),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.drawerHeader
      }), children]
    })]
  });
};

/* harmony default export */ var navbar = (Navbar);
const navbar_Div = (external_styled_components_default()).div`

`;
;// CONCATENATED MODULE: ./components-material-ui/templates/layout.js






const Layout = ({
  tipo,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: /*#__PURE__*/jsx_runtime_.jsx(navbar, {
        tipo: tipo,
        children: children
      })
    })
  });
};

/* harmony default export */ var layout = (Layout);
const Main = (external_styled_components_default()).main`

`;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;