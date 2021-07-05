import{d as e,s as t,r,v as n,i as o,o as a,c as s,a as i,t as u,F as c}from"./vendor.53ba71ca.js";var f={exports:{}},p=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},l=p,d=Object.prototype.toString;function h(e){return"[object Array]"===d.call(e)}function m(e){return void 0===e}function g(e){return null!==e&&"object"==typeof e}function y(e){if("[object Object]"!==d.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function v(e){return"[object Function]"===d.call(e)}function w(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),h(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var b={isArray:h,isArrayBuffer:function(e){return"[object ArrayBuffer]"===d.call(e)},isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:g,isPlainObject:y,isUndefined:m,isDate:function(e){return"[object Date]"===d.call(e)},isFile:function(e){return"[object File]"===d.call(e)},isBlob:function(e){return"[object Blob]"===d.call(e)},isFunction:v,isStream:function(e){return g(e)&&v(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:w,merge:function e(){var t={};function r(r,n){y(t[n])&&y(r)?t[n]=e(t[n],r):y(r)?t[n]=e({},r):h(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)w(arguments[n],r);return t},extend:function(e,t,r){return w(t,(function(t,n){e[n]=r&&"function"==typeof t?l(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},x=b;function E(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var S=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(x.isURLSearchParams(t))n=t.toString();else{var o=[];x.forEach(t,(function(e,t){null!=e&&(x.isArray(e)?t+="[]":e=[e],x.forEach(e,(function(e){x.isDate(e)?e=e.toISOString():x.isObject(e)&&(e=JSON.stringify(e)),o.push(E(t)+"="+E(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},j=b;function C(){this.handlers=[]}C.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},C.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},C.prototype.forEach=function(e){j.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var R=C,A=b,O=function(e){return!(!e||!e.__CANCEL__)},N=b,U=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},B=function(e,t,r,n,o){var a=new Error(e);return U(a,t,r,n,o)},T=B,P=b,L=P.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),P.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),P.isString(n)&&s.push("path="+n),P.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},q=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},k=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},D=b,F=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],I=b,H=I.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=I.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},z=b,_=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(T("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},M=L,X=S,$=function(e,t){return e&&!q(t)?k(e,t):t},J=function(e){var t,r,n,o={};return e?(D.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=D.trim(e.substr(0,n)).toLowerCase(),r=D.trim(e.substr(n+1)),t){if(o[t]&&F.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},V=H,K=B,G=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;z.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var u=$(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),X(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?J(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};_(t,r,o),a=null}},a.onabort=function(){a&&(r(K("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(K("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(K(t,e,"ECONNABORTED",a)),a=null},z.isStandardBrowserEnv()){var c=(e.withCredentials||V(u))&&e.xsrfCookieName?M.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in a&&z.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),z.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},Q=b,W=function(e,t){N.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},Y={"Content-Type":"application/x-www-form-urlencoded"};function Z(e,t){!Q.isUndefined(e)&&Q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ee,te={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ee=G),ee),transformRequest:[function(e,t){return W(t,"Accept"),W(t,"Content-Type"),Q.isFormData(e)||Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)?e:Q.isArrayBufferView(e)?e.buffer:Q.isURLSearchParams(e)?(Z(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Q.isObject(e)?(Z(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};te.headers={common:{Accept:"application/json, text/plain, */*"}},Q.forEach(["delete","get","head"],(function(e){te.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){te.headers[e]=Q.merge(Y)}));var re=te,ne=b,oe=function(e,t,r){return A.forEach(r,(function(r){e=r(e,t)})),e},ae=O,se=re;function ie(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ue=b,ce=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return ue.isPlainObject(e)&&ue.isPlainObject(t)?ue.merge(e,t):ue.isPlainObject(t)?ue.merge({},t):ue.isArray(t)?t.slice():t}function u(n){ue.isUndefined(t[n])?ue.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}ue.forEach(n,(function(e){ue.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),ue.forEach(o,u),ue.forEach(a,(function(n){ue.isUndefined(t[n])?ue.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),ue.forEach(s,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return ue.forEach(f,u),r},fe=b,pe=S,le=R,de=function(e){return ie(e),e.headers=e.headers||{},e.data=oe(e.data,e.headers,e.transformRequest),e.headers=ne.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ne.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||se.adapter)(e).then((function(t){return ie(e),t.data=oe(t.data,t.headers,e.transformResponse),t}),(function(t){return ae(t)||(ie(e),t&&t.response&&(t.response.data=oe(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},he=ce;function me(e){this.defaults=e,this.interceptors={request:new le,response:new le}}me.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=he(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[de,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},me.prototype.getUri=function(e){return e=he(this.defaults,e),pe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},fe.forEach(["delete","get","head","options"],(function(e){me.prototype[e]=function(t,r){return this.request(he(r||{},{method:e,url:t,data:(r||{}).data}))}})),fe.forEach(["post","put","patch"],(function(e){me.prototype[e]=function(t,r,n){return this.request(he(n||{},{method:e,url:t,data:r}))}}));var ge=me;function ye(e){this.message=e}ye.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ye.prototype.__CANCEL__=!0;var ve=ye,we=ve;function be(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new we(e),t(r.reason))}))}be.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},be.source=function(){var e;return{token:new be((function(t){e=t})),cancel:e}};var xe=be,Ee=b,Se=p,je=ge,Ce=ce;function Re(e){var t=new je(e),r=Se(je.prototype.request,t);return Ee.extend(r,je.prototype,t),Ee.extend(r,t),r}var Ae=Re(re);Ae.Axios=je,Ae.create=function(e){return Re(Ce(Ae.defaults,e))},Ae.Cancel=ve,Ae.CancelToken=xe,Ae.isCancel=O,Ae.all=function(e){return Promise.all(e)},Ae.spread=function(e){return function(t){return e.apply(null,t)}},Ae.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},f.exports=Ae,f.exports.default=Ae;var Oe=f.exports;console.log({}.xx),console.log("development");const Ne=Oe.create({baseURL:"/",timeout:1e4});Ne.interceptors.request.use((e=>e),(e=>Promise.reject(e))),Ne.interceptors.response.use((e=>200===e.status?e.data:Promise.reject(e)),(e=>(console.log("网络异常"),Promise.reject(e))));var Ue={get:(e,t,r)=>Ne.get(e,{params:t,options:r})};var Be=e({name:"axios",components:{InputSearch:t},setup(){const e=r("tang"),t=r({}),o=async()=>{try{t.value=await(e=>Ue.get(`githubApi/users/${e}`,{a:1,b:2},{}))(e.value)}catch(r){console.error(r)}};return n((()=>{o()})),{userName:e,onSearch:()=>{o()},userInfo:t}}});Be.render=function(e,t,r,n,f,p){const l=o("InputSearch");return a(),s(c,null,[i(l,{value:e.userName,"onUpdate:value":t[1]||(t[1]=t=>e.userName=t),placeholder:"输入github名称","enter-button":"Search",onSearch:e.onSearch,style:{width:"500px"}},null,8,["value","onSearch"]),i("pre",null,u(e.userInfo),1)],64)};export default Be;
