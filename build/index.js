module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(3)()},function(e,t,n){var r=n(5),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,p="".concat(u," ").concat(s);n[u]=s+1;var l=c(p),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:p,updater:h(f,t),references:1}),r.push(p)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,l=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function b(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=b.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var p=c(n[s]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=i}}}},function(e,t,n){(t=n(7)(!1)).push([e.i,".empirica-chat-container {\n  display: flex;\n}\n.empirica-chat-container .empirica-chat-open {\n  margin-left: 2rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 38rem;\n  max-height: 100%;\n  height: 100%;\n}\n.empirica-chat-container .empirica-chat-open .header {\n  height: 5rem;\n  background-color: #137cbd;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  justify-content: space-between;\n}\n.empirica-chat-container .empirica-chat-open .header .title {\n  color: white;\n  flex-grow: 2;\n  text-align: center;\n  font-weight: bold;\n}\n.empirica-chat-container .empirica-chat-open .header .close-button {\n  font-weight: bold;\n  font-size: 2rem;\n  cursor: pointer;\n}\n.empirica-chat-container .empirica-chat-open .chat {\n  height: 500px;\n  position: relative;\n  padding-top: 0rem;\n  padding-bottom: 4rem;\n  border-radius: 3px;\n  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n  background-color: #ffffff;\n  padding: 20px;\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.empirica-chat-container .empirica-chat-open .chat .messages {\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 2rem;\n}\n.empirica-chat-container .empirica-chat-open .chat .messages .empty {\n  color: grey;\n  text-align: center;\n}\n.empirica-chat-container .empirica-chat-open .chat .messages .message {\n  margin: 0 0 1rem;\n}\n.empirica-chat-container .empirica-chat-open .chat .messages .message .author {\n  font-weight: 700;\n  margin: 0 0.3em 0 0;\n  display: inline-block;\n}\n.empirica-chat-container .empirica-chat-open .chat .messages .message .author img {\n  position: relative;\n  top: 0.2em;\n  width: 1.2em;\n  height: 1.2em;\n  margin-right: 0.3em;\n}\n.empirica-chat-container .empirica-chat-open .chat form {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5rem;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding: 1rem 1rem 0;\n}\n.empirica-chat-container .empirica-chat-open .chat form .chat-footer {\n  transform: translateZ(0);\n  display: flex;\n  align-items: flex-start;\n}\n.empirica-chat-container .empirica-chat-open .chat form .chat-footer .chat-input {\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  background: #ffffff;\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n  font-weight: 400;\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  flex-grow: 2;\n}\n.empirica-chat-container .empirica-chat-open .chat form .chat-footer .chat-button-send {\n  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n  background-color: #137cbd;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n  color: #ffffff;\n  display: inline-block;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0 10px;\n  vertical-align: middle;\n  font-size: 14px;\n  min-width: 30px;\n  min-height: 30px;\n  line-height: 30px;\n}\n.empirica-chat-container .empirica-chat-close {\n  height: 48px;\n  width: 120px;\n  min-width: 120px;\n  background-color: #137cbd;\n  cursor: pointer;\n  border-radius: 20px;\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n}\n.empirica-chat-container .empirica-chat-close .close-text {\n  color: white;\n  font-weight: bold;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return u(this,t),p(this,l(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.player,n=e.self,r=t&&t.id?t.id:t;return r=r.length>10?r.slice(0,10):r,o.a.createElement("div",{className:"author"},t.get&&t.get("avatar")&&o.a.createElement("img",{src:t.get("avatar")}),o.a.createElement("span",{className:"name"},n?"You":r))}}])&&s(n.prototype,r),i&&s(n,i),t}(o.a.Component);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}b.propTypes={player:a.a.object.isRequired,self:a.a.bool};var O=function(e){function t(){return m(this,t),d(this,g(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.message,t=e.text,n=e.subject,r=this.props.self;return o.a.createElement("div",{className:"message"},o.a.createElement(b,{player:n,self:r}),": ",t)}}])&&h(n.prototype,r),i&&h(n,i),t}(o.a.Component);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?E(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}O.propTypes={message:a.a.shape({text:a.a.string.isRequired,subject:a.a.object.isRequired}).isRequired,self:a.a.bool};var k=function(e){function t(){var e,n;w(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return P(E(n=x(this,(e=S(t)).call.apply(e,[this].concat(o)))),"getSelf",(function(e,t,n){return"round"===e?t.subject?n._id===t.subject._id:null:t.subject?n._id===t.subject:null})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.messagesEl.scrollTop=this.messagesEl.scrollHeight}},{key:"componentDidUpdate",value:function(e){e.messages.length<this.props.messages.length&&(this.messagesEl.scrollTop=this.messagesEl.scrollHeight)}},{key:"render",value:function(){var e=this,t=this.props,n=t.messages,r=t.player,i=t.scope;return o.a.createElement("div",{className:"messages",ref:function(t){return e.messagesEl=t}},0===n.length?o.a.createElement("div",{className:"empty"},"No messages yet..."):null,n.map((function(t,n){return o.a.createElement(O,{key:n,message:t,self:e.getSelf(i,t,r)})})))}}])&&_(n.prototype,r),i&&_(n,i),t}(o.a.Component);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.propTypes={scope:a.a.oneOfType(["lobby","round"]).isRequired,messages:a.a.array.isRequired,player:a.a.object};var M=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=N(t).call(this,e),n=!o||"object"!==T(o)&&"function"!=typeof o?q(r):o,L(q(n),"handleSubmit",(function(e){e.preventDefault();var t=n.state.comment.trim();if(""!==t){if("round"===n.props.scope){var r=n.props,o=r.stage,i=r.player;o.append("chat",{text:t,playerId:i._id})}else{var a=n.props,c=a.gameLobby,u=a.player;c.append("chat",{text:t,playerId:u._id})}n.setState({comment:""})}})),L(q(n),"handleChange",(function(e){var t=e.currentTarget;n.setState(L({},t.name,t.value))})),n.state={comment:""},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.state.comment;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"chat-footer"},o.a.createElement("input",{name:"comment",type:"text",className:"chat-input",placeholder:"Enter chat message",value:e,onChange:this.handleChange,autoComplete:"off"}),o.a.createElement("button",{type:"submit",className:"chat-button-send"},"Send")))}}])&&R(n.prototype,r),i&&R(n,i),t}(o.a.Component);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}M.propTypes={scope:a.a.oneOfType(["lobby","round"]).isRequired,player:a.a.object.isRequired,stage:a.a.object,gameLobby:a.a.object};var Y=function(e){function t(){return A(this,t),F(this,W(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.scope,n=e.player,r=e.messages,i={scope:t,player:n};return i=U({},i,"round"===t?{stage:this.props.stage}:{gameLobby:this.props.gameLobby}),o.a.createElement("div",{className:"chat"},o.a.createElement(k,{scope:t,messages:r,player:n}),o.a.createElement(M,i))}}])&&H(n.prototype,r),i&&H(n,i),t}(o.a.Component);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Y.propTypes={scope:a.a.oneOfType(["lobby","round"]).isRequired,messages:a.a.array.isRequired,stage:a.a.object,gameLobby:a.a.object,player:a.a.object.isRequired};var $=function(e){function t(){return Z(this,t),K(this,Q(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.onClickButton,n="round"===e.scope?"Chat":"Chat Lobby";return o.a.createElement("div",{className:"header"},o.a.createElement("span",{className:"title"},n),o.a.createElement("span",{className:"close-button",onClick:t},"×"))}}])&&G(n.prototype,r),i&&G(n,i),t}(o.a.Component);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}$.propTypes={scope:a.a.oneOfType(["lobby","round"]).isRequired,onClickButton:a.a.func.isRequired};var ae=function(e){function t(){return te(this,t),re(this,oe(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.onClickButton,n="round"===e.scope?"Chat":"Chat Lobby";return o.a.createElement("div",{className:"empirica-chat-close",onClick:t},o.a.createElement("span",{className:"close-text"},n))}}])&&ne(n.prototype,r),i&&ne(n,i),t}(o.a.Component);function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t,n){return t&&pe(e.prototype,t),n&&pe(e,n),e}function fe(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?ye(e):t}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ae.propTypes={scope:a.a.oneOfType(["lobby","round"]).isRequired,onClickButton:a.a.func.isRequired},n.d(t,"ChatRound",(function(){return ge})),n.d(t,"ChatLobby",(function(){return ve}));var ge=function(e){function t(e){var n;return se(this,t),de(ye(n=fe(this,be(t).call(this,e))),"onClickButton",(function(){var e=n.state.isChatOpen;n.setState({isChatOpen:!e})})),n.state={isChatOpen:!0},n}return me(t,e),le(t,[{key:"render",value:function(){var e=this.state.isChatOpen,t=this.props,n=t.stage,r=t.game,i=t.player,a=n.get("chat")?n.get("chat").map((function(e){var t=e.text,n=e.playerId;return{text:t,subject:r.players.find((function(e){return e._id===n}))}})):[];return o.a.createElement("div",{className:"empirica-chat-container"},e?o.a.createElement("div",{className:"empirica-chat-open"},o.a.createElement($,{scope:"round",onClickButton:this.onClickButton}),o.a.createElement(Y,{scope:"round",messages:a,stage:n,player:i})):o.a.createElement(ae,{scope:"round",onClickButton:this.onClickButton}))}}]),t}(o.a.Component);ge.propTypes={stage:a.a.object.isRequired,player:a.a.object.isRequired,game:a.a.object.isRequired};var ve=function(e){function t(e){var n;return se(this,t),de(ye(n=fe(this,be(t).call(this,e))),"onClickButton",(function(){var e=n.state.isChatOpen;n.setState({isChatOpen:!e})})),n.state={isChatOpen:!0},n}return me(t,e),le(t,[{key:"render",value:function(){var e=this.state.isChatOpen,t=this.props.gameLobby,n=t.get("chat")?t.get("chat").map((function(e){var n=e.text,r=e.playerId;return{text:n,subject:t.queuedPlayerIds.find((function(e){return e===r}))}})):[];return o.a.createElement("div",{className:"empirica-chat-container",style:{marginTop:"5rem"}},e?o.a.createElement("div",{className:"empirica-chat-open"},o.a.createElement($,{scope:"lobby",onClickButton:this.onClickButton}),o.a.createElement(Y,ue({scope:"lobby",messages:n},this.props))):o.a.createElement(ae,{scope:"lobby",onClickButton:this.onClickButton}))}}]),t}(o.a.Component);ve.propTypes={player:a.a.object.isRequired,gameLobby:a.a.object.isRequired}}]);