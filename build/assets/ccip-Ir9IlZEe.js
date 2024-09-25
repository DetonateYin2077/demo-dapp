import{bn as h,bo as m,bp as p,bq as y,br as b,bs as L,bt as E,bu as x,bv as O,bw as w,bx as M}from"./index-CRWQR6Yy.js";function R(s,e){if(!h(s,{strict:!1}))throw new m({address:s});if(!h(e,{strict:!1}))throw new m({address:e});return s.toLowerCase()===e.toLowerCase()}class $ extends p{constructor({callbackSelector:e,cause:a,data:n,extraData:c,sender:d,urls:t}){var i;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(i=a.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(f=>`    ${y(f)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat(),name:"OffchainLookupError"})}}class S extends p{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${y(a)}`,`Response: ${b(e)}`],name:"OffchainLookupResponseMalformedError"})}}class q extends p{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`],name:"OffchainLookupSenderMismatchError"})}}const T="0x556f1830",A={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function v(s,{blockNumber:e,blockTag:a,data:n,to:c}){const{args:d}=L({data:n,abi:[A]}),[t,i,f,r,o]=d,{ccipRead:u}=s,g=u&&typeof(u==null?void 0:u.request)=="function"?u.request:C;try{if(!R(c,t))throw new q({sender:t,to:c});const l=await g({data:f,sender:t,urls:i}),{data:k}=await E(s,{blockNumber:e,blockTag:a,data:x([r,O([{type:"bytes"},{type:"bytes"}],[l,o])]),to:c});return k}catch(l){throw new $({callbackSelector:r,cause:l,data:n,extraData:o,sender:t,urls:i})}}async function C({data:s,sender:e,urls:a}){var c;let n=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const t=a[d],i=t.includes("{data}")?"GET":"POST",f=i==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(t.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(f),method:i});let o;if((c=r.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?o=(await r.json()).data:o=await r.text(),!r.ok){n=new w({body:f,details:o!=null&&o.error?b(o.error):r.statusText,headers:r.headers,status:r.status,url:t});continue}if(!M(o)){n=new S({result:o,url:t});continue}return o}catch(r){n=new w({body:f,details:r.message,url:t})}}throw n}export{C as ccipRequest,v as offchainLookup,A as offchainLookupAbiItem,T as offchainLookupSignature};
