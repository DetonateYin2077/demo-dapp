(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3692],{30694:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/verify-valid",function(){return i(48132)}])},96551:function(n,e,i){"use strict";i.d(e,{K:function(){return x}});var t=i(97458);i(52983);var r=i(89192),s=i(52876),c=i(25341),d=i(72365),l=i(74631),o=i(44584),a=i(5451),u=i(11098);function x(n){let{address:e,chainId:i,clientId:x}=n;return(0,t.jsxs)(r.Z,{marginTop:10,marginBottom:10,children:[(0,t.jsx)(s.O,{children:(0,t.jsx)(c.X,{size:"md",children:"Account Information"})}),(0,t.jsx)(d.e,{children:(0,t.jsxs)(l.K,{divider:(0,t.jsx)(o.c,{}),spacing:"4",children:[(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Address"}),(0,t.jsx)(u.x,{"data-testid":"w3m-address",children:e})]}),(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Chain Id"}),(0,t.jsx)(u.x,{"data-testid":"w3m-chain-id",children:i})]}),x&&(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(c.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Relay Client ID"}),(0,t.jsx)(u.x,{"data-testid":"w3m-chain-id",children:x})]})]})})]})}},64460:function(n,e,i){"use strict";i.d(e,{P:function(){return l}});var t=i(97458),r=i(52983),s=i(88944),c=i(96551),d=i(36346);function l(){let{address:n,isConnected:e}=(0,d.Tj)(),{chainId:i,connector:l}=(0,s.m)(),[o,a]=r.useState(null);async function u(){if((null==l?void 0:l.type)==="walletConnect"){var n,e,i,t;let r=await (null==l?void 0:null===(n=l.getProvider)||void 0===n?void 0:n.call(l));return null==r?void 0:null===(t=r.client)||void 0===t?void 0:null===(i=t.core)||void 0===i?void 0:null===(e=i.crypto)||void 0===e?void 0:e.getClientId()}return null}return r.useEffect(()=>{u().then(a)},[l]),e?(0,t.jsx)(c.K,{address:n,chainId:i,clientId:o||void 0}):null}},48132:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var t=i(97458),r=i(36346),s=i(12467),c=i(86256),d=i(31213),l=i(53840),o=i(47919),a=i(49636),u=i(64460),x=i(34343),h=i(26913);let f="e4eae1aad4503db9966a04fd045a7e4d",p=new s.S,v=[h.RJ,h.v4,h.yu,h.jM,h.yX,h.Fo],j=new x.Ks({ssr:!0,networks:v,projectId:f}),m=(0,r.cz)({adapters:[j],networks:v,projectId:f,metadata:{name:"AppKit",description:"AppKit Laboratory",url:"http://localhost:3000",icons:["https://avatars.githubusercontent.com/u/37784886"],verifyUrl:""},termsConditionsUrl:"https://reown.com/terms-of-service",privacyPolicyUrl:"https://reown.com/privacy-policy"});function w(){return(0,t.jsx)(d.F,{config:j.wagmiConfig,children:(0,t.jsxs)(c.aH,{client:p,children:[(0,t.jsx)(l.v,{}),(0,t.jsx)(u.P,{}),(0,t.jsx)(o.r,{})]})})}a.i.setModal(m)}},function(n){n.O(0,[2361,4720,3669,580,7677,5021,4953,2759,7919,2888,9774,179],function(){return n(n.s=30694)}),_N_E=n.O()}]);