(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8083],{51174:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/wagmi-all",function(){return i(81303)}])},96551:function(n,e,i){"use strict";i.d(e,{K:function(){return x}});var t=i(97458);i(52983);var r=i(89192),s=i(52876),d=i(25341),c=i(72365),l=i(74631),u=i(44584),o=i(5451),a=i(11098);function x(n){let{address:e,chainId:i,clientId:x}=n;return(0,t.jsxs)(r.Z,{marginTop:10,marginBottom:10,children:[(0,t.jsx)(s.O,{children:(0,t.jsx)(d.X,{size:"md",children:"Account Information"})}),(0,t.jsx)(c.e,{children:(0,t.jsxs)(l.K,{divider:(0,t.jsx)(u.c,{}),spacing:"4",children:[(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(d.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Address"}),(0,t.jsx)(a.x,{"data-testid":"w3m-address",children:e})]}),(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(d.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Chain Id"}),(0,t.jsx)(a.x,{"data-testid":"w3m-chain-id",children:i})]}),x&&(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(d.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Relay Client ID"}),(0,t.jsx)(a.x,{"data-testid":"w3m-chain-id",children:x})]})]})})]})}},64460:function(n,e,i){"use strict";i.d(e,{P:function(){return l}});var t=i(97458),r=i(52983),s=i(88944),d=i(96551),c=i(36346);function l(){let{address:n,isConnected:e}=(0,c.Tj)(),{chainId:i,connector:l}=(0,s.m)(),[u,o]=r.useState(null);async function a(){if((null==l?void 0:l.type)==="walletConnect"){var n,e,i,t;let r=await (null==l?void 0:null===(n=l.getProvider)||void 0===n?void 0:n.call(l));return null==r?void 0:null===(t=r.client)||void 0===t?void 0:null===(i=t.core)||void 0===i?void 0:null===(e=i.crypto)||void 0===e?void 0:e.getClientId()}return null}return r.useEffect(()=>{a().then(o)},[l]),e?(0,t.jsx)(d.K,{address:n,chainId:i,clientId:u||void 0}):null}},81303:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return g}});var t=i(97458),r=i(36346),s=i(12467),d=i(86256),c=i(31213),l=i(53840),u=i(47919),o=i(49636),a=i(62352),x=i(82463),f=i(39009),j=i(64460),h=i(34343),v=i(26913);let p=new s.S,w=[v.RJ,v.v4,v.yu,v.jM,v.yX,v.Fo],m=new h.Ks({ssr:!0,networks:w,projectId:a.bq.ProjectId}),_=(0,r.cz)({adapters:[m],networks:w,defaultNetwork:v.RJ,projectId:a.bq.ProjectId,features:{analytics:!0},siweConfig:f.s});function g(){return(0,t.jsx)(c.F,{config:m.wagmiConfig,children:(0,t.jsxs)(d.aH,{client:p,children:[(0,t.jsx)(l.v,{}),(0,t.jsx)(j.P,{}),(0,t.jsx)(x.Y,{}),(0,t.jsx)(u.r,{})]})})}o.i.setModal(_)}},function(n){n.O(0,[2361,4720,3669,580,7677,5021,4953,2759,5045,7919,2888,9774,179],function(){return n(n.s=51174)}),_N_E=n.O()}]);