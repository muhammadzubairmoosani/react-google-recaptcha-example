(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return n.isMemo(e)?c:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=c;var u=Object.defineProperty,p=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var o=l(r);o&&o!==h&&e(t,o,n)}var c=p(r);d&&(c=c.concat(d(r)));for(var a=s(t),y=s(r),m=0;m<c.length;++m){var v=c[m];if(!i[v]&&(!n||!n[v])&&(!y||!y[v])&&(!a||!a[v])){var g=f(r,v);try{u(t,v,g)}catch(b){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case p:case d:case i:case a:case c:case l:return e;default:switch(e=e&&e.$$typeof){case u:case f:case m:case y:case s:return e;default:return t}}case o:return t}}}function x(e){return w(e)===d}t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=f,t.Fragment=i,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=a,t.StrictMode=c,t.Suspense=l,t.isAsyncMode=function(e){return x(e)||w(e)===p},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===l},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===a||e===c||e===l||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===g||e.$$typeof===b||e.$$typeof===_||e.$$typeof===v)},t.typeOf=w},1296:function(e,t,r){"use strict";e.exports=r(6103)},1198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(5893),o=r(809),i=r.n(o);function c(e,t,r,n,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void r(u)}a.done?t(s):Promise.resolve(s).then(n,o)}var a=r(5323),s=r.n(a),u=r(7294),p=r(5697),d=r.n(p);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return u.createElement("div",f({},t,{ref:this.handleRecaptchaRef}))},n}(u.Component);h.displayName="ReCAPTCHA",h.propTypes={sitekey:d().string.isRequired,onChange:d().func,grecaptcha:d().object,theme:d().oneOf(["dark","light"]),type:d().oneOf(["image","audio"]),tabindex:d().number,onExpired:d().func,onErrored:d().func,size:d().oneOf(["compact","normal","invisible"]),stoken:d().string,hl:d().string,badge:d().oneOf(["bottomright","bottomleft","inline"])},h.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var y=r(8679),m=r.n(y);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g={},b=0;var _="onloadcallback";var w,x,S=(w=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+_+"&render=explicit"},x=(x={callbackName:_,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+b++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof w?w():w,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=g[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[x.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=x,o=n.globalName,i=n.callbackName,c=n.scriptId;if(o&&"undefined"!==typeof window[o]&&(g[t]={loaded:!0,observers:{}}),g[t]){var a=g[t];return a&&(a.loaded||a.errored)?void this.asyncScriptLoaderHandleLoad(a):void(a.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},g[t]={loaded:!1,observers:s};var u=document.createElement("script");for(var p in u.src=t,u.async=!0,x.attributes)u.setAttribute(p,x.attributes[p]);c&&(u.id=c);var d=function(e){if(g[t]){var r=g[t].observers;for(var n in r)e(r[n])&&delete r[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),u.onload=function(){var e=g[t];e&&(e.loaded=!0,d((function(t){return!i&&(t(e),!0)})))},u.onerror=function(){var e=g[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(u)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===x.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=g[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===x.removeOnUnmount&&delete g[e])},i.render=function(){var t=x.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(o[t]="undefined"!==typeof window[t]?window[t]:void 0),o.ref=n,(0,u.createElement)(e,o)},o}(u.Component),n=(0,u.forwardRef)((function(e,t){return(0,u.createElement)(r,v({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:d().func},m()(n,e)})(h),E=r(4155);function R(){var e=(0,u.useState)(""),t=e[0],r=e[1],o=(0,u.useRef)(),a=function(e){var t=E.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,r="https://www.google.com/recaptcha/api/siteverify?secret=".concat(t,"&response=").concat(e);fetch(r,{method:"POST"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},p=function(){var e,t=(e=i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o.current.executeAsync();case 3:r=e.sent,o.current.reset(),a(r);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){c(i,n,o,a,s,"next",e)}function s(e){c(i,n,o,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsxs)("form",{onSubmit:p,children:[(0,n.jsx)("input",{className:s().input_field,required:!0,placeholder:"Message..."}),(0,n.jsx)("button",{className:"".concat(s().send_btn," ").concat(t?"":s().disabled_send_btn),children:"Send"})]}),(0,n.jsx)(S,{sitekey:E.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,size:"invisible",ref:o,onChange:function(e){return e&&r(e)}})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1198)}])},5323:function(e){e.exports={container:"Home_container__1EcsU",input_field:"Home_input_field__3MGvh",send_btn:"Home_send_btn__1MG2G",disabled_send_btn:"Home_disabled_send_btn__1pa6P",token:"Home_token__QmnBb"}},4155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,s=[],u=!1,p=-1;function d(){u&&a&&(u=!1,a.length?s=a.concat(s):p=-1,s.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=s.length;t;){for(a=s,s=[];++p<t;)a&&a[p].run();p=-1,t=s.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function l(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new l(e,t)),1!==s.length||u||c(f)},l.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);