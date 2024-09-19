(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154,808],{5841:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/with-auth-api/react",function(){return n(7380)}])},5173:function(e,t,n){"use strict";n.d(t,{FI:function(){return s},Qf:function(){return o},T_:function(){return i},ph:function(){return a}});let s={name:"WalletConnectModal Lab",description:"WalletConnectModal Laboratory",url:"lab.web3modal.com",icons:["https://walletconnect.com/_next/static/media/logo_mark.84dd8525.svg"]},a={requiredNamespaces:{eip155:{methods:["eth_sendTransaction","personal_sign"],chains:["eip155:1"],events:["chainChanged","accountsChanged"]}}},i={statement:"Connect to WalletConnectModal Lab"};function o(e,t){return{topic:e,chainId:"eip155:1",request:{method:"personal_sign",params:["0x48656c6c6f20576562334d6f64616c",t]}}}},7380:function(e,t,n){"use strict";let s;n.r(t),n.d(t,{default:function(){return f}});var a=n(4246),i=n(7070),o=n(8574),r=n(7378),l=n(2730);async function c(){return new Promise(e=>{if(s)e(s);else{let t=setInterval(()=>{s&&(clearInterval(t),e(s))},200)}})}let d=(0,r.memo)(function(e){return(0,r.useEffect)(()=>{s=new l.D(e)},[]),null});var u=n(7385),p=n(5173),h=n(8663),m=n(1742);function f(){let{signIn:e}=function(e){let{data:t,error:n,loading:s,setData:a,setError:i,setLoading:o}=function(){let[e,t]=(0,r.useState)(void 0),[n,s]=(0,r.useState)(void 0),[a,i]=(0,r.useState)(!1);return{data:e,error:n,loading:a,setData:t,setError:s,setLoading:i}}();return{signIn:async function(t){try{o(!0),i(void 0);let n=await (await c()).signIn(t??e);return a(n),n}catch(e){throw i(e),e}finally{o(!1)}},data:t,error:n,loading:s}}(p.T_);async function t(){try{let t=await e();u.G.open("Sign In",JSON.stringify(t,null,2))}catch(t){let e=(0,m.e)(t);(0,m.E)(e)}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ZP,{css:{maxWidth:"400px",margin:"100px auto"},variant:"bordered",children:(0,a.jsx)(i.ZP.Body,{css:{justifyContent:"center",alignItems:"center",height:"200px"},children:(0,a.jsx)(o.ZP,{shadow:!0,color:"success",onPress:t,children:"Sign In With Wallet"})})}),(0,a.jsx)(d,{projectId:(0,h.f)(),modalOptions:{themeMode:(0,h.g)()},metadata:p.FI})]})}},1742:function(e,t,n){"use strict";n.d(t,{E:function(){return a},e:function(){return i}});var s=n(4496);function a(e){s.C.error(e,{duration:2e3})}function i(e){return e instanceof Error?e.message:"Something went wrong..."}},8405:function(){},8873:function(){},1586:function(){},5545:function(){},6047:function(){},9592:function(e,t,n){"use strict";n.d(t,{AV:function(){return i},ConfigCtrl:function(){return h},ExplorerCtrl:function(){return D},OptionsCtrl:function(){return u},ThemeCtrl:function(){return H},ToastCtrl:function(){return q},jb:function(){return S},uA:function(){return c},zv:function(){return o}});var s=n(2688);let a=(0,s.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),i={state:a,subscribe:e=>(0,s.Ld)(a,()=>e(a)),push(e,t){e!==a.view&&(a.view=e,t&&(a.data=t),a.history.push(e))},reset(e){a.view=e,a.history=[e]},replace(e){a.history.length>1&&(a.history[a.history.length-1]=e,a.view=e)},goBack(){if(a.history.length>1){a.history.pop();let[e]=a.history.slice(-1);a.view=e}},setData(e){a.data=e}},o={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>!0,isAndroid:()=>o.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return o.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,n){if(o.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=`${s=e.replaceAll("/","").replaceAll(":","")}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);let a=encodeURIComponent(t);return`${s}wc?uri=${a}`},formatUniversalUrl(e,t,n){if(!o.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);let a=encodeURIComponent(t);return`${s}wc?uri=${a}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(o.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(o.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(o.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(o.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=i.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},r="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),l=(0,s.sj)({enabled:r,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:l,subscribe:e=>(0,s.Ld)(l.events,()=>e((0,s.CO)(l.events[l.events.length-1]))),initialize(){l.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){let t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){let t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){let t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},d=(0,s.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),u={state:d,subscribe:e=>(0,s.Ld)(d,()=>e(d)),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},p=(0,s.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),h={state:p,subscribe:e=>(0,s.Ld)(p,()=>e(p)),setConfig(e){var t,n;c.initialize(),u.setChains(e.chains),u.setIsAuth(!!e.enableAuthMode),u.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),u.setIsCustomDesktop(!!(null==(n=e.desktopWallets)?void 0:n.length)),o.setModalVersionInStorage(),Object.assign(p,e)}};var m=Object.defineProperty,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&v(e,n,t[n]);return e};let w="https://explorer-api.walletconnect.com",y="js-2.6.2";async function C(e,t){let n=I({sdkType:"wcm",sdkVersion:y},t),s=new URL(e,w);return s.searchParams.append("projectId",h.state.projectId),Object.entries(n).forEach(([e,t])=>{t&&s.searchParams.append(e,String(t))}),(await fetch(s)).json()}let W={getDesktopListings:async e=>C("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>C("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>C("/w3m/v1/getInjectedListings",e),getAllListings:async e=>C("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${w}/w3m/v1/getWalletImage/${e}?projectId=${h.state.projectId}&sdkType=wcm&sdkVersion=${y}`,getAssetImageUrl:e=>`${w}/w3m/v1/getAssetImage/${e}?projectId=${h.state.projectId}&sdkType=wcm&sdkVersion=${y}`};var L=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&M(e,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&M(e,n,t[n]);return e};let A=o.isMobile(),U=(0,s.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),D={state:U,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=h.state;if("NONE"===e||"ALL"===t&&!e)return U.recomendedWallets;if(o.isArray(e)){let t={recommendedIds:e.join(",")},{listings:n}=await W.getAllListings(t),s=Object.values(n);s.sort((t,n)=>{let s=e.indexOf(t.id),a=e.indexOf(n.id);return s-a}),U.recomendedWallets=s}else{let{chains:e,isAuth:n}=u.state,s=e?.join(","),a=o.isArray(t),i={page:1,sdks:n?"auth_v1":void 0,entries:o.RECOMMENDED_WALLET_AMOUNT,chains:s,version:2,excludedIds:a?t.join(","):void 0},{listings:r}=A?await W.getMobileListings(i):await W.getDesktopListings(i);U.recomendedWallets=Object.values(r)}return U.recomendedWallets},async getWallets(e){let t=k({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=h.state,{recomendedWallets:a}=U;if("ALL"===s)return U.wallets;a.length?t.excludedIds=a.map(e=>e.id).join(","):o.isArray(n)&&(t.excludedIds=n.join(",")),o.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),u.state.isAuth&&(t.sdks="auth_v1");let{page:i,search:r}=e,{listings:l,total:c}=A?await W.getMobileListings(t):await W.getDesktopListings(t),d=Object.values(l),p=r?"search":"wallets";return U[p]={listings:[...U[p].listings,...d],total:c,page:i??1},{listings:d,total:c}},getWalletImageUrl:e=>W.getWalletImageUrl(e),getAssetImageUrl:e=>W.getAssetImageUrl(e),resetSearch(){U.search={listings:[],total:0,page:1}}},_=(0,s.sj)({open:!1}),S={state:_,subscribe:e=>(0,s.Ld)(_,()=>e(_)),open:async e=>new Promise(t=>{let{isUiLoaded:n,isDataLoaded:s}=u.state;if(o.removeWalletConnectDeepLink(),u.setWalletConnectUri(e?.uri),u.setChains(e?.chains),i.reset("ConnectWallet"),n&&s)_.open=!0,t();else{let e=setInterval(()=>{let n=u.state;n.isUiLoaded&&n.isDataLoaded&&(clearInterval(e),_.open=!0,t())},200)}}),close(){_.open=!1}};var N=Object.defineProperty,T=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&$(e,n,t[n]);if(T)for(var n of T(t))x.call(t,n)&&$(e,n,t[n]);return e};let V=(0,s.sj)({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),H={state:V,subscribe:e=>(0,s.Ld)(V,()=>e(V)),setThemeConfig(e){let{themeMode:t,themeVariables:n}=e;t&&(V.themeMode=t),n&&(V.themeVariables=R({},n))}},K=(0,s.sj)({open:!1,message:"",variant:"success"}),q={state:K,subscribe:e=>(0,s.Ld)(K,()=>e(K)),openToast(e,t){K.open=!0,K.message=e,K.variant=t},closeToast(){K.open=!1}}},2730:function(e,t,n){"use strict";n.d(t,{D:function(){return k}});var s,a,i,o,r,l,c,d,u,p,h=n(2281),m=n(6808),f=Object.defineProperty,g=Object.defineProperties,b=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&y(e,n,t[n]);if(v)for(var n of v(t))w.call(t,n)&&y(e,n,t[n]);return e},W=(e,t)=>g(e,b(t)),L=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},E=(e,t,n)=>(L(e,t,"read from private field"),n?n.call(e):t.get(e)),j=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},O=(e,t,n,s)=>(L(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),M=(e,t,n)=>(L(e,t,"access private method"),n);class k{constructor(e){j(this,r),j(this,c),j(this,u),j(this,s,void 0),j(this,a,void 0),j(this,i,void 0),j(this,o,void 0),O(this,s,e),O(this,a,M(this,r,l).call(this)),M(this,c,d).call(this)}async signIn(e){let{chainId:t,statement:n,aud:s,domain:i}=e,r=t??"eip155:1",l=s??location.href,u=i??location.host;return new Promise(async(e,t)=>{E(this,o)||await M(this,c,d).call(this);let s=E(this,a).subscribeModal(e=>{e.open||(s(),t(Error("Modal closed")))});E(this,o).once("auth_response",({params:n})=>{s(),E(this,a).closeModal(),n.result?e({valid:!0,address:n.result.p.iss.split(":")[4],cacao:n.result}):t(Error(n.message))});let{uri:i}=await E(this,o).request({aud:l,domain:u,chainId:r,type:"eip4361",nonce:(0,h.NH)(),statement:n});i&&await E(this,a).openModal({uri:i,chains:[r]})})}}s=new WeakMap,a=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,l=function(){let{modalOptions:e,projectId:t}=E(this,s);return new m.WalletConnectModal(W(C({},e),{enableAuthMode:!0,projectId:t}))},c=new WeakSet,d=async function(){return!E(this,i)&&"u">typeof window&&O(this,i,M(this,u,p).call(this)),E(this,i)},u=new WeakSet,p=async function(){O(this,o,await h.LY.init({metadata:E(this,s).metadata,projectId:E(this,s).projectId}))}},6808:function(e,t,n){"use strict";n.d(t,{WalletConnectModal:function(){return a}});var s=n(9592);class a{constructor(e){this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.ThemeCtrl.setThemeConfig,s.ThemeCtrl.setThemeConfig(e),s.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await Promise.all([n.e(88),n.e(90)]).then(n.bind(n,1090));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),s.OptionsCtrl.setIsUiLoaded(!0)}}}}},function(e){e.O(0,[797,673,64,774,888,179],function(){return e(e.s=5841)}),_N_E=e.O()}]);