"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3980],{47229:function(t,e,r){r.d(e,{L:function(){return u},z:function(){return c}});var n=r(97458),i=r(52983),a=r(41211),s=r(29290);function o(){console.warn("WagmiPermissionsAsyncContext used outside of provider")}let c=(0,i.createContext)({projectId:"",grantedPermissions:void 0,wcCosignerData:void 0,setGrantedPermissions:o,setWCCosignerData:o,clearGrantedPermissions:o});function u(t){let{children:e}=t,r="64e7c5b2b4a153d04239bcd12d94ffca";if(!r)throw Error("NEXT_PUBLIC_PROJECT_ID is not set");let[i,o]=(0,s.R)(a.VV,void 0),[u,d]=(0,s.R)(a.AK,void 0);return(0,n.jsx)(c.Provider,{value:{projectId:r,grantedPermissions:i,wcCosignerData:u,clearGrantedPermissions:function(){(0,a.e8)(a.VV),o(void 0)},setGrantedPermissions:o,setWCCosignerData:d},children:e})}},75223:function(t,e,r){r.d(e,{S:function(){return o}});var n=r(52983),i=r(47229),a=r(91895),s=r(85627);function o(){let t=(0,n.useContext)(i.z);if(void 0===t)throw Error("useERC7715Permissions must be used within a ERC7715PermissionsProvider");let{grantedPermissions:e,wcCosignerData:r,setWCCosignerData:o,setGrantedPermissions:c,clearGrantedPermissions:u}=t;async function d(t,e){var r,n;let{permissions:i,signerKey:u}=e,d=null===(r=t.account)||void 0===r?void 0:r.address;if(!d)throw Error("Account address not available");let l=t.chain;if(!l)throw Error("Chain not available");if(!u)throw Error("Invalid signer data");let p=(0,a.WJ)(u.key,u.type),f="eip155:".concat(l.id,":").concat(d),h=new s.P,m=await h.addPermission(f,{permissionType:"donut-purchase",data:"",onChainValidated:!1,required:!0});o(m);let y=(0,a.IB)(m.key),w=(0,a.WJ)(y,a.yu.secp256k1);i.signer={type:"keys",data:{ids:[w,p]}};let g=await t.grantPermissions(i);return await h.updatePermissionsContext(f,{pci:m.pci,context:{expiry:g.expiry,signer:{type:"donut-purchase",data:{ids:[m.key,(0,a.sY)(u.key)]}},signerData:{userOpBuilder:(null===(n=g.signerData)||void 0===n?void 0:n.userOpBuilder)||""},permissionsContext:g.permissionsContext,factory:g.factory||"",factoryData:g.factoryData||""}}),c(g),{approvedPermissions:g}}return{grantedPermissions:e,pci:null==r?void 0:r.pci,clearGrantedPermissions:u,grantPermissions:d}}},29290:function(t,e,r){r.d(e,{R:function(){return a}});var n=r(52983),i=r(41211);function a(t,e){let[r,a]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let e=(0,i.le)(t);if(e&&"undefined"!==e&&"null"!==e)try{a(JSON.parse(e))}catch(t){a(e)}},[t]),(0,n.useEffect)(()=>{r&&(0,i.D$)(t,r)},[t,r]),[r,a]}},43939:function(t,e,r){r.d(e,{wu:function(){return P},Vp:function(){return I},tp:function(){return y}});var n=r(50554),i=r(3766),a=r(53347),s=r(92805),o=r(85627),c=r(77412),u=r(90398),d=r(62352);class l extends Error{constructor(t,e){super(e),this.status=t,this.name="UserOpBuilderApiError"}}async function p(t){let{url:e,data:r,queryParams:n,headers:i,transformRequest:a}=t,s=a?a(r):r;try{let t=await c.Z.post(e,s,{params:n,headers:i});if("error"in t.data)throw Error(t.data.error);return t.data}catch(t){if(c.Z.isAxiosError(t)){if(t.response)throw new l(t.response.status,JSON.stringify(t.response.data));throw new l(500,"Network error")}throw t}}async function f(t){return await p({url:"".concat(d.L4,"/build"),data:t,headers:{"Content-Type":"application/json"},transformRequest:t=>JSON.stringify(t,u.d)})}var h=r(68654),m=r(76419);function y(){return{expiry:Date.now()+86400,permissions:[{type:{custom:"donut-purchase"},data:{target:n.L,abi:n.M,valueLimit:(0,i.f)("10").toString(),functionName:"function purchase()"},policies:[]}]}}async function w(t){let{actions:e,chain:r,permissions:n}=t;if(!n)throw Error("No permissions available");let{signerData:i,permissionsContext:a}=n;if(!(null==i?void 0:i.userOpBuilder)||!i.submitToAddress||!a)throw Error("Invalid permissions ".concat(JSON.stringify(n,u.d)));return await f({account:i.submitToAddress,chainId:r.id,calls:e,capabilities:{permissions:{context:a}}})}async function g(t){let{userOpHash:e,passkeyId:r}=t,n=(0,a.r)({raw:e}),i=await (0,m.Xx)({credentialId:r,hash:n}),o=i.webauthn.authenticatorData,c=i.webauthn.clientDataJSON,u=i.webauthn.typeIndex,d=i.signature.r,l=i.signature.s;return(0,s.E)([{type:"bytes"},{type:"string"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"bool"}],[o,c,u,d,l,!1])}async function v(t){let{ecdsaPrivateKey:e,userOpHash:r}=t;return await (0,h.l)({privateKey:e,message:{raw:r}})}async function I(t){var e;let{actions:r,passkeyId:n,chain:i,permissions:a,pci:s}=t,c=null==a?void 0:null===(e=a.signerData)||void 0===e?void 0:e.submitToAddress;if(!c)throw Error("Unable to get account details from granted permission");if(!s)throw Error("No WC_COSIGNER PCI data available");let u="eip155:".concat(null==i?void 0:i.id,":").concat(c),d=await w({actions:r,chain:i,permissions:a}),l=d.userOp,p=await g({passkeyId:n,userOpHash:d.hash});l.signature=p;let f=new o.P;return(await f.coSignUserOperation(u,{pci:s,userOp:{...l,callData:l.callData,callGasLimit:BigInt(l.callGasLimit),nonce:BigInt(l.nonce),preVerificationGas:BigInt(l.preVerificationGas),verificationGasLimit:BigInt(l.verificationGasLimit),sender:l.sender,signature:l.signature,maxFeePerGas:BigInt(l.maxFeePerGas),maxPriorityFeePerGas:BigInt(l.maxPriorityFeePerGas)}})).receipt}async function P(t){var e;let{ecdsaPrivateKey:r,actions:n,chain:i,permissions:a,pci:s}=t,c=null==a?void 0:null===(e=a.signerData)||void 0===e?void 0:e.submitToAddress;if(!c)throw Error("Unable to get account details from granted permission");if(!s)throw Error("No WC_COSIGNER PCI data available");let u="eip155:".concat(null==i?void 0:i.id,":").concat(c),d=await w({actions:n,chain:i,permissions:a}),l=d.userOp,p=await v({ecdsaPrivateKey:r,userOpHash:d.hash});l.signature=p;let f=new o.P;return(await f.coSignUserOperation(u,{pci:s,userOp:{...l,callData:l.callData,callGasLimit:BigInt(l.callGasLimit),nonce:BigInt(l.nonce),preVerificationGas:BigInt(l.preVerificationGas),verificationGasLimit:BigInt(l.verificationGasLimit),sender:l.sender,signature:l.signature,maxFeePerGas:BigInt(l.maxFeePerGas),maxPriorityFeePerGas:BigInt(l.maxPriorityFeePerGas)}})).receipt}},91895:function(t,e,r){r.d(e,{IB:function(){return c},WJ:function(){return o},sY:function(){return u},yu:function(){return i}});var n,i,a=r(52206),s=r(15313).Buffer;function o(t,e){let r={secp256k1:"did:key:zQ3s",secp256r1:"did:key:zDn"};if(!(e in r))throw Error("Unsupported key type.");let n=t.startsWith("0x")?t.slice(2):t,i=s.from(n,"hex"),o=a.Z.encode(i),c=r[e];return"".concat(c).concat(o)}function c(t){let e=s.from(t,"base64");if(65!==e.length)throw Error("Invalid uncompressed public key length");if(4!==e[0])throw Error("Invalid uncompressed public key header");let r=e.toString("hex");return"0x".concat(r)}function u(t){let e=t.replace(/^0x/u,"");return s.from(e,"hex").toString("base64")}(n=i||(i={})).secp256k1="secp256k1",n.secp256r1="secp256r1"},85627:function(t,e,r){r.d(e,{P:function(){return c}});var n=r(77412),i=r(90398),a=r(62352);class s extends Error{constructor(t,e){super(e),this.status=t,this.name="CoSignerApiError"}}async function o(t){let{url:e,data:r,queryParams:i={},headers:a,transformRequest:o}=t,c=o?o(r):r;try{return(await n.Z.post(e,c,{params:i,headers:a})).data}catch(t){if(n.Z.isAxiosError(t)){if(t.response)throw new s(t.response.status,JSON.stringify(t.response.data));throw new s(500,"Network error")}throw t}}class c{async addPermission(t,e){let r="".concat(this.baseUrl,"/").concat(encodeURIComponent(t));return await o({url:r,data:{permission:e},queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}})}async updatePermissionsContext(t,e){let r="".concat(this.baseUrl,"/").concat(encodeURIComponent(t),"/context");await o({url:r,data:e,queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}})}async revokePermission(t,e){let r="".concat(this.baseUrl,"/").concat(encodeURIComponent(t),"/revoke");await o({url:r,data:e,queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}})}async coSignUserOperation(t,e){let r="".concat(this.baseUrl,"/").concat(encodeURIComponent(t),"/sign");return await o({url:r,data:e,queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"},transformRequest:t=>JSON.stringify(t,i.d)})}constructor(){this.baseUrl=a.fU;let t="64e7c5b2b4a153d04239bcd12d94ffca";if(!t)throw Error("NEXT_PUBLIC_PROJECT_ID is not set");this.projectId=t}}}}]);