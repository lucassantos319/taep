(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{12717:function(e,t){"use strict";t.Z=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},48285:function(e,t){"use strict";t.Z=function(e){function t(e,n,s,u,p){for(var d,h,b,m,w,C=0,A=0,x=0,O=0,S=0,T=0,D=b=d=0,R=0,I=0,F=0,H=0,L=s.length,W=L-1,G="",N="",Z="",U="";R<L;){if(h=s.charCodeAt(R),R===W&&0!==A+O+x+C&&(0!==A&&(h=47===A?10:47),O=x=C=0,L++,W++),0===A+O+x+C){if(R===W&&(0<I&&(G=G.replace(l,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=s.charAt(R)}h=59}switch(h){case 123:for(d=(G=G.trim()).charCodeAt(0),b=1,H=++R;R<L;){switch(h=s.charCodeAt(R)){case 123:b++;break;case 125:b--;break;case 47:switch(h=s.charCodeAt(R+1)){case 42:case 47:e:{for(D=R+1;D<W;++D)switch(s.charCodeAt(D)){case 47:if(42===h&&42===s.charCodeAt(D-1)&&R+2!==D){R=D+1;break e}break;case 10:if(47===h){R=D+1;break e}}R=D}}break;case 91:h++;case 40:h++;case 34:case 39:for(;R++<W&&s.charCodeAt(R)!==h;);}if(0===b)break;R++}switch(b=s.substring(H,R),0===d&&(d=(G=G.replace(f,"").trim()).charCodeAt(0)),d){case 64:switch(0<I&&(G=G.replace(l,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:I=n;break;default:I=_}if(H=(b=t(n,I,b,h,p+1)).length,0<E&&(w=i(3,b,I=r(_,G,F),n,M,$,H,h,p,u),G=I.join(""),void 0!==w&&0===(H=(b=w.trim()).length)&&(h=0,b="")),0<H)switch(h){case 115:G=G.replace(k,c);case 100:case 109:case 45:b=G+"{"+b+"}";break;case 107:b=(G=G.replace(y,"$1 $2"))+"{"+b+"}",b=1===j||2===j&&o("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=G+b,112===u&&(N+=b,b="")}else b="";break;default:b=t(n,r(n,G,F),b,u,p+1)}Z+=b,b=F=I=D=d=0,G="",h=s.charCodeAt(++R);break;case 125:case 59:if(1<(H=(G=(0<I?G.replace(l,""):G).trim()).length))switch(0===D&&(d=G.charCodeAt(0),45===d||96<d&&123>d)&&(H=(G=G.replace(" ",":")).length),0<E&&void 0!==(w=i(1,G,n,e,M,$,N.length,u,p,u))&&0===(H=(G=w.trim()).length)&&(G="\0\0"),d=G.charCodeAt(0),h=G.charCodeAt(1),d){case 0:break;case 64:if(105===h||99===h){U+=G+s.charAt(R);break}default:58!==G.charCodeAt(H-1)&&(N+=a(G,d,h,G.charCodeAt(2)))}F=I=D=d=0,G="",h=s.charCodeAt(++R)}}switch(h){case 13:case 10:47===A?A=0:0===1+d&&107!==u&&0<G.length&&(I=1,G+="\0"),0<E*z&&i(0,G,n,e,M,$,N.length,u,p,u),$=1,M++;break;case 59:case 125:if(0===A+O+x+C){$++;break}default:switch($++,m=s.charAt(R),h){case 9:case 32:if(0===O+C+A)switch(S){case 44:case 58:case 9:case 32:m="";break;default:32!==h&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===O+A+C&&(I=F=1,m="\f"+m);break;case 108:if(0===O+A+C+P&&0<D)switch(R-D){case 2:112===S&&58===s.charCodeAt(R-3)&&(P=S);case 8:111===T&&(P=T)}break;case 58:0===O+A+C&&(D=R);break;case 44:0===A+x+O+C&&(I=1,m+="\r");break;case 34:case 39:0===A&&(O=O===h?0:0===O?h:O);break;case 91:0===O+A+x&&C++;break;case 93:0===O+A+x&&C--;break;case 41:0===O+A+C&&x--;break;case 40:if(0===O+A+C){if(0===d)switch(2*S+3*T){case 533:break;default:d=1}x++}break;case 64:0===A+x+O+C+D+b&&(b=1);break;case 42:case 47:if(!(0<O+C+x))switch(A){case 0:switch(2*h+3*s.charCodeAt(R+1)){case 235:A=47;break;case 220:H=R,A=42}break;case 42:47===h&&42===S&&H+2!==R&&(33===s.charCodeAt(H+2)&&(N+=s.substring(H,R+1)),m="",A=0)}}0===A&&(G+=m)}T=S,S=h,R++}if(0<(H=N.length)){if(I=n,0<E&&(void 0!==(w=i(2,N,I,e,M,$,H,u,p,u))&&0===(N=w).length))return U+N+Z;if(N=I.join(",")+"{"+N+"}",0!==j*P){switch(2!==j||o(N,2)||(P=0),P){case 111:N=N.replace(v,":-moz-$1")+N;break;case 112:N=N.replace(g,"::-webkit-input-$1")+N.replace(g,"::-moz-$1")+N.replace(g,":-ms-input-$1")+N}P=0}}return U+N+Z}function r(e,t,r){var a=t.trim().split(b);t=a;var o=a.length,c=e.length;switch(c){case 0:case 1:var i=0;for(e=0===c?"":e[0]+" ";i<o;++i)t[i]=n(e,t[i],r).trim();break;default:var s=i=0;for(t=[];i<o;++i)for(var u=0;u<c;++u)t[s++]=n(e[u]+" ",a[i],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,r,n){var c=e+";",i=2*t+3*r+4*n;if(944===i){e=c.indexOf(":",9)+1;var s=c.substring(e,c.length-1).trim();return s=c.substring(0,e).trim()+s+";",1===j||2===j&&o(s,1)?"-webkit-"+s+s:s}if(0===j||2===j&&!o(c,1))return c;switch(i){case 1015:return 97===c.charCodeAt(10)?"-webkit-"+c+c:c;case 951:return 116===c.charCodeAt(3)?"-webkit-"+c+c:c;case 963:return 110===c.charCodeAt(5)?"-webkit-"+c+c:c;case 1009:if(100!==c.charCodeAt(4))break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(45===c.charCodeAt(8))return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(S,"$1-webkit-$2")+c;break;case 932:if(45===c.charCodeAt(4))switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(99!==c.charCodeAt(8))break;return"-webkit-box-pack"+(s=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+c+"-ms-flex-pack"+s+c;case 1005:return d.test(c)?c.replace(p,":-webkit-")+c.replace(p,":-moz-")+c:c;case 1e3:switch(t=(s=c.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=c.replace(w,"tb");break;case 232:s=c.replace(w,"tb-rl");break;case 220:s=c.replace(w,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+s+c;case 1017:if(-1===c.indexOf("sticky",9))break;case 975:switch(t=(c=e).length-10,i=(s=(33===c.charCodeAt(t)?c.substring(0,t):c).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:c=c.replace(s,"-webkit-"+s)+";"+c;break;case 207:case 102:c=c.replace(s,"-webkit-"+(102<i?"inline-":"")+"box")+";"+c.replace(s,"-webkit-"+s)+";"+c.replace(s,"-ms-"+s+"box")+";"+c}return c+";";case 938:if(45===c.charCodeAt(5))switch(c.charCodeAt(6)){case 105:return s=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+s+"-ms-flex-"+s+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(A,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(A,"")+c}break;case 973:case 989:if(45!==c.charCodeAt(3)||122===c.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):c.replace(s,"-webkit-"+s)+c.replace(s,"-moz-"+s.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(102===c.charCodeAt(5)?"-ms-"+c:"")+c,211===r+n&&105===c.charCodeAt(13)&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+c}return c}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),D(2!==t?n:n.replace(x,"$1"),r,t)}function c(e,t){var r=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(C," or ($1)").substring(4):"("+t+")"}function i(e,t,r,n,a,o,c,i,s,f){for(var l,p=0,d=t;p<E;++p)switch(l=T[p].call(u,e,d,r,n,a,o,c,i,s,f)){case void 0:case!1:case!0:case null:break;default:d=l}if(d!==t)return d}function s(e){return void 0!==(e=e.prefix)&&(D=null,e?"function"!==typeof e?j=1:(j=2,D=e):j=0),s}function u(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<E){var a=i(-1,r,n,n,M,$,0,0,0,0);void 0!==a&&"string"===typeof a&&(r=a)}var o=t(_,n,r,0,0);return 0<E&&(void 0!==(a=i(-2,o,n,n,M,$,o.length,0,0,0))&&(o=a)),"",P=0,$=M=1,o}var f=/^\0+/g,l=/[\0\r\f]/g,p=/: */g,d=/zoo|gra/,h=/([,: ])(transform)/g,b=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,v=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,A=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,$=1,M=1,P=0,j=1,_=[],T=[],E=0,D=null,z=0;return u.use=function e(t){switch(t){case void 0:case null:E=T.length=0;break;default:if("function"===typeof t)T[E++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else z=0|!!t}return e},u.set=s,void 0!==e&&s(e),u}},40351:function(e,t){"use strict";t.Z={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},8679:function(e,t,r){"use strict";var n=r(59864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||a}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var a=d(r);a&&a!==h&&e(t,a,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var i=s(t),b=s(r),m=0;m<c.length;++m){var y=c[m];if(!o[y]&&(!n||!n[y])&&(!b||!b[y])&&(!i||!i[y])){var g=p(r,y);try{u(t,y,g)}catch(v){}}}}return t}},23398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},76393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=r(23398);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}},92775:function(e,t,r){"use strict";var n=r(61682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(67294)),i=(o=r(73244))&&o.__esModule?o:{default:o},s=r(23398),u=r(41165),f=r(76393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var f=h[s];if(a.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?o=!1:r.add(f);else{var l=a.props[f],p=n[f]||new Set;"name"===f&&c||!p.has(l)?(p.add(l),n[f]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=(0,c.useContext)(s.AmpStateContext),n=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:b,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};t.default=m},73244:function(e,t,r){"use strict";var n=r(83115),a=r(2553),o=r(62012),c=(r(50450),r(9807)),i=r(27690),s=r(99828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(67294),l=function(e){c(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},38164:function(e,t,r){var n=r(54360);e.exports=function(e){if(Array.isArray(e))return n(e)}},61682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},40616:function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}r.d(t,{Z:function(){return n}})},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,r){var n=r(38164),a=r(27381),o=r(73585),c=r(95725);e.exports=function(e){return n(e)||a(e)||o(e)||c()}},34155:function(e){var t,r,n=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var i,s=[],u=!1,f=-1;function l(){u&&i&&(u=!1,i.length?s=i.concat(s):f=-1,s.length&&p())}function p(){if(!u){var e=c(l);u=!0;for(var t=s.length;t;){for(i=s,s=[];++f<t;)i&&i[f].run();f=-1,t=s.length}i=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||u||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},69921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case o:case i:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case b:case s:return e;default:return t}}case a:return t}}}function C(e){return k(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=m,t.Memo=b,t.Portal=a,t.Profiler=i,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||k(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===p},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===m},t.isMemo=function(e){return k(e)===b},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===c},t.isSuspense=function(e){return k(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===l||e===i||e===c||e===d||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=k},59864:function(e,t,r){"use strict";e.exports=r(69921)}}]);