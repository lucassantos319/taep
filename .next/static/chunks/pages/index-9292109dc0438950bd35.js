(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{61139:function(n,e,r){"use strict";r.d(e,{Z:function(){return C}});var t=r(27261),i=r(85893),a=r(40616),o=r(33434),c=r(26265),u=r(809),s=r.n(u),l=r(92447),d=r(39227),f=r(42283),p=r(9669),m=r.n(p),h=r(11163),g=r(6645),x=r(41664),b=r(43832),v=r(49598),y=r(41749),j=r(282),w=r(34155);function A(){var n=(0,t.Z)(["\n    .centraliza{\n        display: flex;\n        justify-content: center;\n    }\n    .centraliza-texto{\n        text-align: center;\n    }\n\n    .m-12{\n        margin-top: 12px;\n    }\n"]);return A=function(){return n},n}function Z(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function O(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){(0,c.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var k=function(n){(0,a.Z)(n);var e=(0,h.useRouter)(),r=(0,f.cI)(),t=r.register,o=r.handleSubmit,c=(0,g.Z)(["user"]),u=(0,d.Z)(c,2),p=(u[0],u[1]),A=function(){var n=(0,l.Z)(s().mark((function n(r){var t,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=w.env.SERVER_HOST+"login",n.next=4,m().post(t,{email:r.email,password:r.password}).then((function(n){return n.data}));case 4:(i=n.sent).login&&(p("user",JSON.stringify(i),{path:"/",maxAge:3600,sameSite:!0}),e.prefetch("/home"),e.push("/home")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,i.jsx)(E,{children:(0,i.jsx)(b.Z,{maxWidth:"sm",children:(0,i.jsxs)("form",{onSubmit:o(A),children:[(0,i.jsx)(v.Z,O({id:"login-email",label:"Email",type:"email",required:!0,fullWidth:!0,margin:"normal"},t("email"))),(0,i.jsx)(v.Z,O({id:"login-senha",label:"Senha",type:"password",required:!0,fullWidth:!0,margin:"normal"},t("password"))),(0,i.jsxs)(y.Z,{container:!0,xs:12,children:[(0,i.jsx)(y.Z,{item:!0,xs:12,className:"centraliza",children:(0,i.jsx)(j.Z,{className:"m-12",variant:"contained",color:"primary",type:"submit",size:"large",children:"Entrar"})}),(0,i.jsx)(y.Z,{item:!0,xs:12,className:"centraliza-texto",children:(0,i.jsx)(x.default,{className:"centraliza",href:"cadastrar-professor",children:(0,i.jsx)(j.Z,{color:"primary",children:"Professor, fa\xe7a o seu cadastro"})})})]})]})})})},E=o.ZP.div(A()),P=r(25675),z={src:"/_next/static/image/public/img/logo-taep.db3e4ea40e479100b4f2532f4d8f1db0.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mMQUjHKlDbzvCzmGvdDwiPpP6NLwn9R17jfDHqetxiEjTMZQMBCmkHN1Snov5d/2r+YuIL//qFZn6IDNYsq8kxUGKBAcktB4N/jM5r/n29L+H+0LOh1S6X9nOm9/r5g2YqYkNJLy+f8/3Hj1J/nx3f9ObF81v+K+LhiBhgojAgqebZ9zf9f147//3v77P/nR3f8L4wKKgFL/r9+nIkBCLZ3VmTe3LL81519678fWzk9CSz39RFYDgzcMid2tzX0/m5r6PvtnzWxiwEZmFgyiCxcuet/XGTd/1ggXrZ2z39/LwYRBgYGBgB+/WpkWPgzdwAAAABJRU5ErkJggg=="};function S(){var n=(0,t.Z)(["\n    background-color: ;\n    max-width: 500px;\n    max-height: 600px;\n    padding: 36px;\n    background-color: #FFF;\n\n    border-radius: 12px;\n    box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);\n\n    //pra centralizar verticalmente\n    position: absolute;\n    top: 35%;\n    transform: translateY(-50%);\n\n    .h1{\n        margin: 12px 0 12px 0;\n        text-align: center;\n    }\n    \n    .centraliza{\n        display: flex;\n        justify-content: center;\n    }\n\n    @media screen and (min-width : 0px) and (max-width : 767px){\n        max-width: 300px;\n        max-height: 600px;\n        top: 50%;\n    }\n"]);return S=function(){return n},n}function N(){var n=(0,t.Z)(["\n    height: 100vh;\n    position: relative;\n\n    display: flex;\n    justify-content: center;\n\n    //cria\xe7\xe3o do backgournd gradiente (animado????)\n    background: linear-gradient(45deg, #142850, #27496D, #0C7B93, #00A8CC);\n    background-size: 300% 300%;\n    animation: "," 10s ease infinite;\n"]);return N=function(){return n},n}function L(){var n=(0,t.Z)(["\n    0%{\n        background-position 0% 50%;\n    }\n    \n    50%{\n        background-position 100% 50%;\n    }\n\n    100%{\n        background-position 0% 50%;\n    }\n"]);return L=function(){return n},n}var C=function(n){return(0,a.Z)(n),(0,i.jsx)(D,{children:(0,i.jsxs)(R,{children:[(0,i.jsx)("div",{className:"centraliza",children:(0,i.jsx)(P.default,{height:120,width:120,src:z})}),(0,i.jsx)("h1",{className:"h1",children:"Bem-vindo ao TAEP 4.0"}),(0,i.jsx)(k,{})]})})},_=(0,o.F4)(L()),D=o.ZP.div(N(),_),R=o.ZP.div(S())},56124:function(n,e,r){"use strict";r.r(e);var t=r(85893),i=r(39227),a=r(40616),o=r(11163),c=r(6645),u=r(61139);e.default=function(n){(0,a.Z)(n);var e=(0,c.Z)(["user"]),r=(0,i.Z)(e,2),s=r[0],l=(r[1],(0,o.useRouter)());return 0!==Object.keys(s).length?(l.prefetch("/home"),l.push("/home"),(0,t.jsx)(t.Fragment,{})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("main",{children:(0,t.jsx)(u.Z,{})})})}},78581:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(56124)}])},39227:function(n,e,r){"use strict";function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var r=[],t=!0,i=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);t=!0);}catch(u){i=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}return r}}(n,e)||function(n,e){if(n){if("string"===typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return i}})},6645:function(n,e,r){"use strict";r.d(e,{Z:function(){return a}});var t=r(67294),i=r(3748);function a(n){var e=(0,t.useContext)(i.ZP);if(!e)throw new Error("Missing <CookiesProvider>");var r=e.getAll(),a=(0,t.useState)(r),o=a[0],c=a[1],u=(0,t.useRef)(o);return"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement&&(0,t.useLayoutEffect)((function(){function r(){var r=e.getAll();(function(n,e,r){if(!n)return!0;for(var t=0,i=n;t<i.length;t++){var a=i[t];if(e[a]!==r[a])return!0}return!1})(n||null,r,u.current)&&c(r),u.current=r}return e.addChangeListener(r),function(){e.removeChangeListener(r)}}),[e]),[o,(0,t.useMemo)((function(){return e.set.bind(e)}),[e]),(0,t.useMemo)((function(){return e.remove.bind(e)}),[e])]}}},function(n){n.O(0,[774,168,195,176,94,598,873,692,888,179],(function(){return e=78581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);