"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444,31],{2069:function(e,t,n){n.d(t,{AV:function(){return i},ConfigCtrl:function(){return p},ExplorerCtrl:function(){return k},OptionsCtrl:function(){return f},ThemeCtrl:function(){return H},ToastCtrl:function(){return q},jb:function(){return T},uA:function(){return c},zv:function(){return a}});var r=n(412);let o=(0,r.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),i={state:o,subscribe:e=>(0,r.Ld)(o,()=>e(o)),push(e,t){e!==o.view&&(o.view=e,t&&(o.data=t),o.history.push(e))},reset(e){o.view=e,o.history=[e]},replace(e){o.history.length>1&&(o.history[o.history.length-1]=e,o.view=e)},goBack(){if(o.history.length>1){o.history.pop();let[e]=o.history.slice(-1);o.view=e}},setData(e){o.data=e}},a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>a.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,n){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let r=e;r.includes("://")||(r=`${r=e.replaceAll("/","").replaceAll(":","")}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,n);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},formatUniversalUrl(e,t,n){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,n);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(a.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=i.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},s="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),l=(0,r.sj)({enabled:s,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:l,subscribe:e=>(0,r.Ld)(l.events,()=>e((0,r.CO)(l.events[l.events.length-1]))),initialize(){l.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){let t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){let t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){let t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},u=(0,r.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),f={state:u,subscribe:e=>(0,r.Ld)(u,()=>e(u)),setChains(e){u.chains=e},setWalletConnectUri(e){u.walletConnectUri=e},setIsCustomDesktop(e){u.isCustomDesktop=e},setIsCustomMobile(e){u.isCustomMobile=e},setIsDataLoaded(e){u.isDataLoaded=e},setIsUiLoaded(e){u.isUiLoaded=e},setIsAuth(e){u.isAuth=e}},d=(0,r.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),p={state:d,subscribe:e=>(0,r.Ld)(d,()=>e(d)),setConfig(e){var t,n;c.initialize(),f.setChains(e.chains),f.setIsAuth(!!e.enableAuthMode),f.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),f.setIsCustomDesktop(!!(null==(n=e.desktopWallets)?void 0:n.length)),a.setModalVersionInStorage(),Object.assign(d,e)}};var h=Object.defineProperty,y=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(y)for(var n of y(t))b.call(t,n)&&v(e,n,t[n]);return e};let w="https://explorer-api.walletconnect.com",O="js-2.6.2";async function _(e,t){let n=g({sdkType:"wcm",sdkVersion:O},t),r=new URL(e,w);return r.searchParams.append("projectId",p.state.projectId),Object.entries(n).forEach(([e,t])=>{t&&r.searchParams.append(e,String(t))}),(await fetch(r)).json()}let I={getDesktopListings:async e=>_("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>_("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>_("/w3m/v1/getInjectedListings",e),getAllListings:async e=>_("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${w}/w3m/v1/getWalletImage/${e}?projectId=${p.state.projectId}&sdkType=wcm&sdkVersion=${O}`,getAssetImageUrl:e=>`${w}/w3m/v1/getAssetImage/${e}?projectId=${p.state.projectId}&sdkType=wcm&sdkVersion=${O}`};var j=Object.defineProperty,E=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&L(e,n,t[n]);if(E)for(var n of E(t))S.call(t,n)&&L(e,n,t[n]);return e};let W=a.isMobile(),A=(0,r.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),k={state:A,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=p.state;if("NONE"===e||"ALL"===t&&!e)return A.recomendedWallets;if(a.isArray(e)){let t={recommendedIds:e.join(",")},{listings:n}=await I.getAllListings(t),r=Object.values(n);r.sort((t,n)=>{let r=e.indexOf(t.id),o=e.indexOf(n.id);return r-o}),A.recomendedWallets=r}else{let{chains:e,isAuth:n}=f.state,r=e?.join(","),o=a.isArray(t),i={page:1,sdks:n?"auth_v1":void 0,entries:a.RECOMMENDED_WALLET_AMOUNT,chains:r,version:2,excludedIds:o?t.join(","):void 0},{listings:s}=W?await I.getMobileListings(i):await I.getDesktopListings(i);A.recomendedWallets=Object.values(s)}return A.recomendedWallets},async getWallets(e){let t=P({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:r}=p.state,{recomendedWallets:o}=A;if("ALL"===r)return A.wallets;o.length?t.excludedIds=o.map(e=>e.id).join(","):a.isArray(n)&&(t.excludedIds=n.join(",")),a.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),f.state.isAuth&&(t.sdks="auth_v1");let{page:i,search:s}=e,{listings:l,total:c}=W?await I.getMobileListings(t):await I.getDesktopListings(t),u=Object.values(l),d=s?"search":"wallets";return A[d]={listings:[...A[d].listings,...u],total:c,page:i??1},{listings:u,total:c}},getWalletImageUrl:e=>I.getWalletImageUrl(e),getAssetImageUrl:e=>I.getAssetImageUrl(e),resetSearch(){A.search={listings:[],total:0,page:1}}},D=(0,r.sj)({open:!1}),T={state:D,subscribe:e=>(0,r.Ld)(D,()=>e(D)),open:async e=>new Promise(t=>{let{isUiLoaded:n,isDataLoaded:r}=f.state;if(a.removeWalletConnectDeepLink(),f.setWalletConnectUri(e?.uri),f.setChains(e?.chains),i.reset("ConnectWallet"),n&&r)D.open=!0,t();else{let e=setInterval(()=>{let n=f.state;n.isUiLoaded&&n.isDataLoaded&&(clearInterval(e),D.open=!0,t())},200)}}),close(){D.open=!1}};var M=Object.defineProperty,U=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&R(e,n,t[n]);if(U)for(var n of U(t))N.call(t,n)&&R(e,n,t[n]);return e};let V=(0,r.sj)({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),H={state:V,subscribe:e=>(0,r.Ld)(V,()=>e(V)),setThemeConfig(e){let{themeMode:t,themeVariables:n}=e;t&&(V.themeMode=t),n&&(V.themeVariables=$({},n))}},K=(0,r.sj)({open:!1,message:"",variant:"success"}),q={state:K,subscribe:e=>(0,r.Ld)(K,()=>e(K)),openToast(e,t){K.open=!0,K.message=e,K.variant=t},closeToast(){K.open=!1}}},540:function(e,t,n){n.d(t,{g:function(){return P}});var r,o,i,a,s,l,c,u,f,d,p=n(4031),h=n(8130),y=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&O(e,n,t[n]);if(v)for(var n of v(t))w.call(t,n)&&O(e,n,t[n]);return e},I=(e,t)=>m(e,b(t)),j=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},E=(e,t,n)=>(j(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},S=(e,t,n,r)=>(j(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),L=(e,t,n)=>(j(e,t,"access private method"),n);class P{constructor(e){C(this,s),C(this,c),C(this,f),C(this,r,void 0),C(this,o,void 0),C(this,i,void 0),C(this,a,void 0),S(this,r,e),S(this,o,L(this,s,l).call(this)),L(this,c,u).call(this)}async connect(e){let{requiredNamespaces:t,optionalNamespaces:n}=e;return new Promise(async(r,i)=>{await L(this,c,u).call(this);let s=E(this,o).subscribeModal(e=>{e.open||(s(),i(Error("Modal closed")))}),{uri:l,approval:f}=await E(this,a).connect(e);if(l){let e=new Set;t&&Object.values(t).forEach(({chains:t})=>{t&&t.forEach(t=>e.add(t))}),n&&Object.values(n).forEach(({chains:t})=>{t&&t.forEach(t=>e.add(t))}),await E(this,o).openModal({uri:l,chains:Array.from(e)})}try{let e=await f();r(e)}catch(e){i(e)}finally{s(),E(this,o).closeModal()}})}async disconnect(e){await L(this,c,u).call(this),await E(this,a).disconnect(e)}async request(e){return await L(this,c,u).call(this),await E(this,a).request(e)}async getSessions(){return await L(this,c,u).call(this),E(this,a).session.getAll()}async getSession(){return await L(this,c,u).call(this),E(this,a).session.getAll().at(-1)}async onSessionEvent(e){await L(this,c,u).call(this),E(this,a).on("session_event",e)}async offSessionEvent(e){await L(this,c,u).call(this),E(this,a).off("session_event",e)}async onSessionUpdate(e){await L(this,c,u).call(this),E(this,a).on("session_update",e)}async offSessionUpdate(e){await L(this,c,u).call(this),E(this,a).off("session_update",e)}async onSessionDelete(e){await L(this,c,u).call(this),E(this,a).on("session_delete",e)}async offSessionDelete(e){await L(this,c,u).call(this),E(this,a).off("session_delete",e)}async onSessionExpire(e){await L(this,c,u).call(this),E(this,a).on("session_expire",e)}async offSessionExpire(e){await L(this,c,u).call(this),E(this,a).off("session_expire",e)}}r=new WeakMap,o=new WeakMap,i=new WeakMap,a=new WeakMap,s=new WeakSet,l=function(){let{modalOptions:e,projectId:t}=E(this,r);return new p.WalletConnectModal(I(_({},e),{projectId:t}))},c=new WeakSet,u=async function(){return!!E(this,a)||(!E(this,i)&&"u">typeof window&&S(this,i,L(this,f,d).call(this)),E(this,i))},f=new WeakSet,d=async function(){S(this,a,await h.ZP.init({metadata:E(this,r).metadata,projectId:E(this,r).projectId,relayUrl:E(this,r).relayUrl}));let e=await E(this,a).core.crypto.getClientId();try{localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID",e)}catch{console.info("Unable to set client id")}}},4412:function(e,t,n){let r;n.d(t,{gQ:function(){return c},$4:function(){return f},qL:function(){return d},QT:function(){return p},kP:function(){return I}});var o,i=n(2363),a=n(540);let s={all:o=o||new Map,on:function(e,t){var n=o.get(e);n?n.push(t):o.set(e,[t])},off:function(e,t){var n=o.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):o.set(e,[]))},emit:function(e,t){var n=o.get(e);n&&n.slice().map(function(e){e(t)}),(n=o.get("*"))&&n.slice().map(function(n){n(e,t)})}};async function l(){return new Promise(e=>{if(r)e(r);else{let t=setInterval(()=>{r&&(clearInterval(t),e(r))},200)}})}let c=(0,i.memo)(function(e){return(0,i.useEffect)(()=>{r=new a.g(e)},[]),null});function u(){let[e,t]=(0,i.useState)(void 0),[n,r]=(0,i.useState)(void 0),[o,a]=(0,i.useState)(!1);return{data:e,error:n,loading:o,setData:t,setError:r,setLoading:a}}function f(e){let{data:t,error:n,loading:r,setData:o,setError:i,setLoading:a}=u();return{data:t,error:n,loading:r,connect:async function(t){try{a(!0),i(void 0);let n=await (await l()).connect(t??e);return o(n),s.emit("session_change"),n}catch(e){throw i(e),e}finally{a(!1)}}}}function d(e){let{error:t,loading:n,setError:r,setLoading:o}=u();return{error:t,loading:n,disconnect:async function(t){try{o(!0),r(void 0),await (await l()).disconnect(t??e),s.emit("session_change")}catch(e){throw r(e),e}finally{o(!1)}}}}function p(e){let{data:t,error:n,loading:r,setData:o,setError:i,setLoading:a}=u();return{data:t,error:n,loading:r,request:async function(t){try{a(!0),i(void 0);let n=await (await l()).request(t??e);return o(n),n}catch(e){throw i(e),e}finally{a(!1)}}}}var h=Object.defineProperty,y=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&w(e,n,t[n]);if(b)for(var n of b(t))g.call(t,n)&&w(e,n,t[n]);return e},_=(e,t)=>y(e,m(t));function I(){var e,t,n;let[r,o]=(0,i.useState)(void 0);return e=e=>{e.topic===r?.topic&&o(void 0)},(0,i.useEffect)(()=>(l().then(t=>{t.onSessionDelete(e)}),()=>{l().then(t=>{t.offSessionDelete(e)})}),[e]),t=e=>{if(r&&e.topic===r?.topic){let{namespaces:t}=e.params,n=_(O({},r),{namespaces:t});o(n)}},(0,i.useEffect)(()=>(l().then(e=>{e.onSessionUpdate(t)}),()=>{l().then(e=>{e.offSessionUpdate(t)})}),[t]),n=e=>{r&&e.topic===r?.topic&&o(void 0)},(0,i.useEffect)(()=>(l().then(e=>{e.onSessionExpire(n)}),()=>{l().then(e=>{e.offSessionExpire(n)})}),[n]),(0,i.useEffect)(()=>{async function e(){let e=await (await l()).getSession();o(e)}return e(),s.on("session_change",e),()=>{s.off("session_change",e)}},[]),r}},4031:function(e,t,n){n.d(t,{WalletConnectModal:function(){return o}});var r=n(2069);class o{constructor(e){this.openModal=r.jb.open,this.closeModal=r.jb.close,this.subscribeModal=r.jb.subscribe,this.setTheme=r.ThemeCtrl.setThemeConfig,r.ThemeCtrl.setThemeConfig(e),r.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await n.e(527).then(n.bind(n,4527));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),r.OptionsCtrl.setIsUiLoaded(!0)}}}},443:function(e,t,n){n.r(t),n.d(t,{__addDisposableResource:function(){return T},__assign:function(){return i},__asyncDelegator:function(){return E},__asyncGenerator:function(){return j},__asyncValues:function(){return C},__await:function(){return I},__awaiter:function(){return h},__classPrivateFieldGet:function(){return A},__classPrivateFieldIn:function(){return D},__classPrivateFieldSet:function(){return k},__createBinding:function(){return m},__decorate:function(){return s},__disposeResources:function(){return U},__esDecorate:function(){return c},__exportStar:function(){return b},__extends:function(){return o},__generator:function(){return y},__importDefault:function(){return W},__importStar:function(){return P},__makeTemplateObject:function(){return S},__metadata:function(){return p},__param:function(){return l},__propKey:function(){return f},__read:function(){return g},__rest:function(){return a},__runInitializers:function(){return u},__setFunctionName:function(){return d},__spread:function(){return w},__spreadArray:function(){return _},__spreadArrays:function(){return O},__values:function(){return v}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t,n,r,o,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?r.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var h={};for(var y in r)h[y]="access"===y?{}:r[y];for(var y in r.access)h.access[y]=r.access[y];h.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var m=(0,n[p])("accessor"===l?{get:f.get,set:f.set}:f[c],h);if("accessor"===l){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw TypeError("Object expected");(s=a(m.get))&&(f.get=s),(s=a(m.set))&&(f.set=s),(s=a(m.init))&&o.unshift(s)}else(s=a(m))&&("field"===l?o.unshift(s):f[c]=s)}u&&Object.defineProperty(u,r.name,f),d=!0}function u(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function h(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}l((r=r.apply(e,t||[])).next())})}function y(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}var m=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function b(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||m(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function O(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function _(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function I(e){return this instanceof I?(this.v=e,this):new I(e)}function j(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,c)}}),r[Symbol.asyncIterator]=function(){return this},r;function a(e,t){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||s(e,t)})},t&&(r[e]=t(r[e])))}function s(e,t){try{var n;(n=o[e](t)).value instanceof I?Promise.resolve(n.value.v).then(l,c):u(i[0][2],n)}catch(e){u(i[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:I(e[r](t)),done:!1}:o?o(t):t}:o}}function C(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,o,(t=e[n](t)).done,t.value)})}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var L=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&m(t,e,n);return L(t,e),t}function W(e){return e&&e.__esModule?e:{default:e}}function A(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function k(e,t,n,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function D(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function T(e,t,n){if(null!=t){var r,o;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(n){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose],n&&(o=r)}if("function"!=typeof r)throw TypeError("Object not disposable.");o&&(r=function(){try{o.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var M="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function U(e){function t(t){e.error=e.hasError?new M(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var n,r=0;return function o(){for(;n=e.stack.pop();)try{if(!n.async&&1===r)return r=0,e.stack.push(n),Promise.resolve().then(o);if(n.dispose){var i=n.dispose.call(n.value);if(n.async)return r|=2,Promise.resolve(i).then(o,function(e){return t(e),o()})}else r|=1}catch(e){t(e)}if(1===r)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}t.default={__extends:o,__assign:i,__rest:a,__decorate:s,__param:l,__metadata:p,__awaiter:h,__generator:y,__createBinding:m,__exportStar:b,__values:v,__read:g,__spread:w,__spreadArrays:O,__spreadArray:_,__await:I,__asyncGenerator:j,__asyncDelegator:E,__asyncValues:C,__makeTemplateObject:S,__importStar:P,__importDefault:W,__classPrivateFieldGet:A,__classPrivateFieldSet:k,__classPrivateFieldIn:D,__addDisposableResource:T,__disposeResources:U}}}]);