"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{96378:function(e,t,i){i.d(t,{p:function(){return o}});var s=i(97458),a=i(52983),n=i(36346),r=i(96551);function o(){let[e,t]=a.useState(!1),[i,o]=a.useState(void 0),{isConnected:c,address:h}=(0,n.Tj)(),{chainId:p}=(0,n.U_)(),{walletProvider:d,walletProviderType:l}=(0,n.cB)("eip155");async function C(){if("walletConnect"===l){var e,t,i;return await (null==d?void 0:null===(i=d.client)||void 0===i?void 0:null===(t=i.core)||void 0===t?void 0:null===(e=t.crypto)||void 0===e?void 0:e.getClientId())}}return a.useEffect(()=>{C().then(o)},[d]),a.useEffect(()=>{t(!0)},[]),e&&c&&p?(0,s.jsx)(r.K,{address:h,chainId:p,clientId:i}):null}},15860:function(e,t,i){i.d(t,{v:function(){return I}});var s=i(97458),a=i(52983),n=i(36346),r=i(90048),o=i(59552),c=i(89192),h=i(52876),p=i(25341),d=i(72365),l=i(74631),C=i(44584),N=i(5451),u=i(57930),m=i(81977),E=i(53957),w=i(33263),f=i(45572);function I(){let[e,t]=a.useState(!1),{isConnected:i}=(0,n.Tj)();return(a.useEffect(()=>{t(!0)},[]),e&&i)?(0,s.jsxs)(c.Z,{marginTop:10,marginBottom:10,children:[(0,s.jsx)(h.O,{children:(0,s.jsx)(p.X,{size:"md",children:"Test Interactions"})}),(0,s.jsx)(d.e,{children:(0,s.jsxs)(l.K,{divider:(0,s.jsx)(C.c,{}),spacing:"4",children:[(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Sign Message"}),(0,s.jsx)(r.f,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Sign Typed Data"}),(0,s.jsx)(o._,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Sign Transaction"}),(0,s.jsx)(u.P,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Contract Write"}),(0,s.jsx)(m.r,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Send Calls (Atomic Batch)"}),(0,s.jsx)(E.f,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Get Calls Status"}),(0,s.jsx)(w.Z,{})]}),(0,s.jsxs)(N.xu,{children:[(0,s.jsx)(p.X,{size:"xs",textTransform:"uppercase",pb:"2",children:"Send Calls (Paymaster Service)"}),(0,s.jsx)(f.B,{})]})]})})]}):null}},81109:function(e,t,i){i.d(t,{w6:function(){return I}}),i(34165);var s=i(74652),a=i(30817),n=i(96496),r=i(2825),o=i(35371);i(36203);var c=i(24523),h=i(20806),p=i(15180),d=i(27663),l=i(87241),C=i(68857),N=i(70023),u=i(48799);let m={signMessage:async(e,t,i)=>{if(!t)throw Error("signMessage - provider is undefined");let s=(0,h.A7)(e)?e:(0,h.Dv)((0,p.Y0)(e));return await t.request({method:"personal_sign",params:[s,i]})},estimateGas:async(e,t,i,s)=>{if(!t)throw Error("estimateGas - provider is undefined");if(!i)throw Error("estimateGas - address is undefined");if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error("estimateGas - chainNamespace is not eip155");let a={from:e.address,to:e.to,data:e.data,type:0},n=new d.Q(t,s),r=new l.C1(n,i);return await r.estimateGas(a)},sendTransaction:async(e,t,i,s)=>{if(!t)throw Error("sendTransaction - provider is undefined");if(!i)throw Error("sendTransaction - address is undefined");if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error("sendTransaction - chainNamespace is not eip155");let a={to:e.to,value:e.value,gasLimit:e.gas,gasPrice:e.gasPrice,data:e.data,type:0},n=new d.Q(t,s),r=new l.C1(n,i),o=await r.sendTransaction(a),c=await o.wait();return c?.hash||null},writeContract:async(e,t,i,s)=>{if(!t)throw Error("writeContract - provider is undefined");if(!i)throw Error("writeContract - address is undefined");let a=new d.Q(t,s),n=new l.C1(a,i),r=new C.CH(e.tokenAddress,e.abi,n);if(!r||!e.method)throw Error("Contract method is undefined");let o=r[e.method];if(o)return await o(e.receiverAddress,e.tokenAmount);throw Error("Contract method is undefined")},getEnsAddress:async(e,t)=>{try{let i=Number(t.getCaipNetwork()?.id),a=null,n=!1;if((0,s.oL)(e)&&(n=await t?.resolveReownName(e)||!1),1===i){let t=new N.J("mainnet");a=await t.resolveName(e)}return a||n||!1}catch{return!1}},getEnsAvatar:async(e,t)=>{if(1===t){let t=new N.J("mainnet");return await t.getAvatar(e)||!1}return!1},parseUnits:u.vz,formatUnits:u.bM};var E=i(76394),w=i(29071),f=i(11594);class I{createEthersConfig(e){let t,i;if(!e.metadata)return;let s={metadata:e.metadata};return!1!==e.enableInjected&&(s.injected=t||("undefined"!=typeof window&&window.ethereum?t=window.ethereum:void 0)),!1!==e.enableCoinbase&&(s.coinbase=i||("undefined"!=typeof window?i=new w.jp({appName:e?.metadata?.name,appLogoUrl:e?.metadata?.icons[0],appChainIds:e.networks?.map(e=>e.chainId)||[1,84532]}).makeWeb3Provider({options:e.coinbasePreference??"all"}):void 0)),s.EIP6963=!1!==e.enableEIP6963,s}constructor(){this.appKit=void 0,this.EIP6963Providers=[],this.options=void 0,this.caipNetworks=[],this.chainNamespace=s.bq.CHAIN.EVM,this.siweControllerClient=this.options?.siweConfig,this.tokens=o.gk.getCaipTokens(this.options?.tokens),this.defaultCaipNetwork=void 0,this.adapterType="ethers",this.providerHandlers=null,a.RY.subscribeKey("activeCaipNetwork",e=>{let t=this.appKit?.getCaipAddress(this.chainNamespace),i=t?.startsWith("eip155:"),s=e?.chainNamespace===this.chainNamespace;i&&s&&t&&(this.syncBalance(a.j1.getPlainAddress(t),e),this.syncAccount({address:a.j1.getPlainAddress(t),caipNetwork:e}))}),a.RY.subscribeKey("activeCaipAddress",e=>{let t=e?.startsWith("eip155:"),i=a.RY.state.activeCaipNetwork,s=i?.chainNamespace===this.chainNamespace;t&&(s&&this.syncBalance(a.j1.getPlainAddress(e),i),this.syncAccount({address:a.j1.getPlainAddress(e)}))}),a.AccountController.subscribeKey("shouldUpdateToAddress",e=>{e?.startsWith("0x")&&this.syncAccount({address:e})},this.chainNamespace)}construct(e,t){if(!t.projectId)throw Error("appkit:ethers-client:initialize - projectId is undefined");this.appKit=e,this.options=t,this.caipNetworks=t.networks,this.defaultCaipNetwork=t.defaultNetwork||t.networks[0],this.tokens=o.gk.getCaipTokens(t.tokens),this.ethersConfig=this.createEthersConfig(t),this.networkControllerClient={switchCaipNetwork:async e=>{if(e?.chainId)try{await this.switchNetwork(e)}catch(e){throw Error("networkControllerClient:switchCaipNetwork - unable to switch chain")}},getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},this.connectionControllerClient={connectWalletConnect:async e=>{await this.appKit?.universalAdapter?.connectionControllerClient?.connectWalletConnect?.(e)},connectExternal:async({id:e,info:t,provider:i})=>{this.appKit?.setClientId(null);let s={[o.bq.INJECTED_CONNECTOR_ID]:{getProvider:()=>this.ethersConfig?.injected,providerType:"injected"},[o.bq.EIP6963_CONNECTOR_ID]:{getProvider:()=>i,providerType:"eip6963"},[o.bq.COINBASE_SDK_CONNECTOR_ID]:{getProvider:()=>this.ethersConfig?.coinbase,providerType:"coinbase"},[o.bq.AUTH_CONNECTOR_ID]:{getProvider:()=>this.authProvider,providerType:"w3mAuth"}}[e];if(!s)throw Error(`Unsupported connector ID: ${e}`);let a=s.getProvider();if(!a)throw Error(`Provider for connector ${e} is undefined`);try{a&&e!==o.bq.AUTH_CONNECTOR_ID&&await a.request({method:"eth_requestAccounts"}),await this.setProvider(a,s.providerType,t?.name)}catch(t){if(e===o.bq.COINBASE_SDK_CONNECTOR_ID)throw Error(t.message)}},checkInstalled:e=>e?(!this.ethersConfig?.injected||!!window?.ethereum)&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum,disconnect:async()=>{let e=E.h.getProvider("eip155"),t=E.h.state.providerIds.eip155;if(this.appKit?.setClientId(null),this.options?.siweConfig?.options?.signOutOnDisconnect){let{SIWEController:e}=await i.e(368).then(i.bind(i,50368));await e.signOut()}let a={[o.bq.WALLET_CONNECT_CONNECTOR_ID]:async()=>await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),coinbaseWalletSDK:async()=>await this.appKit?.universalAdapter?.connectionControllerClient?.disconnect(),[o.bq.AUTH_CONNECTOR_ID]:async()=>{await this.authProvider?.disconnect()},[o.bq.EIP6963_CONNECTOR_ID]:async()=>{e&&await this.revokeProviderPermissions(e)},[o.bq.INJECTED_CONNECTOR_ID]:async()=>{e&&(e.emit("disconnect"),await this.revokeProviderPermissions(e))}}[t];a?await a():console.warn(`No disconnect function found for provider type: ${t}`),s.mr.removeItem(s.uJ.WALLET_ID),this.appKit?.resetAccount(this.chainNamespace)},signMessage:async e=>{let t=E.h.getProvider(this.chainNamespace),i=a.RY.state.activeCaipAddress,s=a.j1.getPlainAddress(i);if(!s)throw Error("Address is undefined");if(!t)throw Error("Provider is undefined");return await m.signMessage(e,t,s)},parseUnits:m.parseUnits,formatUnits:m.formatUnits,estimateGas:async e=>{if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error(`Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`);let t=E.h.getProvider("eip155"),i=a.RY.state.activeCaipAddress,s=a.j1.getPlainAddress(i),n=this.appKit?.getCaipNetwork();if(!s)throw Error("Address is undefined");if(!t)throw Error("Provider is undefined");return await m.estimateGas(e,t,s,Number(n?.chainId))},sendTransaction:async e=>{if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error(`Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`);let t=E.h.getProvider("eip155"),i=a.RY.state.activeCaipAddress,s=a.j1.getPlainAddress(i),n=this.appKit?.getCaipNetwork();if(!s)throw Error("Address is undefined");if(!t)throw Error("Provider is undefined");return await m.sendTransaction(e,t,s,Number(n?.chainId))},writeContract:async e=>{let t=E.h.getProvider("eip155"),i=a.RY.state.activeCaipAddress,s=a.j1.getPlainAddress(i),n=this.appKit?.getCaipNetwork();if(!s)throw Error("Address is undefined");if(!t)throw Error("Provider is undefined");return await m.writeContract(e,t,s,Number(n?.chainId))},getEnsAddress:async e=>!!this.appKit&&await m.getEnsAddress(e,this.appKit),getEnsAvatar:async e=>{let t=this.appKit?.getCaipNetwork();return await m.getEnsAvatar(e,Number(t?.chainId))}},a.RY.state.chains.set(this.chainNamespace,{chainNamespace:this.chainNamespace,connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient,adapterType:this.adapterType,caipNetworks:this.caipNetworks}),this.ethersConfig&&this.syncConnectors(this.ethersConfig),"undefined"!=typeof window&&this.listenConnectors(!0),this.appKit?.setEIP6963Enabled(this.ethersConfig?.EIP6963);let n=t.features?.email===void 0?a.bq.DEFAULT_FEATURES.email:t.features?.email,r=t.features?.socials?t.features?.socials?.length>0:a.bq.DEFAULT_FEATURES.socials;(n||r)&&this.syncAuthConnector(this.options.projectId),this.ethersConfig&&this.checkActiveProviders(this.ethersConfig),this.syncRequestedNetworks(this.caipNetworks)}subscribeState(e){return this.appKit?.subscribeState(t=>e(t))}async disconnect(){await this.connectionControllerClient?.disconnect()}async revokeProviderPermissions(e){try{(await e.request({method:"wallet_getPermissions"})).find(e=>"eth_accounts"===e.parentCapability)&&await e.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})}catch(e){console.info("Could not revoke permissions from wallet. Disconnecting...",e)}}getApprovedCaipNetworksData(){return new Promise(e=>{let t=s.mr.getItem(s.uJ.WALLET_ID);if(!t)throw Error("No wallet id found to get approved networks data");e({[o.bq.AUTH_CONNECTOR_ID]:{supportsAllNetworks:!0,approvedCaipNetworkIds:o.CK.WalletConnectRpcChainIds.map(e=>`${o.bq.EIP155}:${e}`)}}[t]||{supportsAllNetworks:!0,approvedCaipNetworkIds:[]})})}checkActiveProviders(e){let t=s.mr.getItem(s.uJ.WALLET_ID),i=s.mr.getItem(s.uJ.WALLET_NAME);if(!t)return;let a={[o.bq.INJECTED_CONNECTOR_ID]:{provider:e.injected},[o.bq.COINBASE_SDK_CONNECTOR_ID]:{provider:e.coinbase},[o.bq.EIP6963_CONNECTOR_ID]:{provider:this.EIP6963Providers.find(e=>e.info.name===i)?.provider}}[t];a?.provider&&(this.setProvider(a.provider,t),this.setupProviderListeners(a.provider,t))}async setProvider(e,t,i){if("w3mAuth"===t)this.setAuthProvider();else if(s.mr.setItem(s.uJ.WALLET_ID,t),i&&s.mr.setItem(s.uJ.WALLET_NAME,i),e){let{addresses:i,chainId:s}=await n.s.getUserInfo(e),a=i?.[0],r=`${this.chainNamespace}:${s}:${a}`;a&&s&&(this.appKit?.setCaipAddress(r,this.chainNamespace),E.h.setProviderId("eip155",t),E.h.setProvider("eip155",e),this.appKit?.setStatus("connected",this.chainNamespace),this.appKit?.setAllAccounts(i.map(e=>({address:e,type:"eoa"})),this.chainNamespace))}}async setAuthProvider(){if(s.mr.setItem(s.uJ.WALLET_ID,o.bq.AUTH_CONNECTOR_ID),this.authProvider){this.appKit?.setLoading(!0);let{address:e,chainId:t,smartAccountDeployed:i,preferredAccountType:a,accounts:n=[]}=await this.authProvider.connect({chainId:Number(s.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id)??this.caipNetworks[0]?.chainId)}),{smartAccountEnabledNetworks:r}=await this.authProvider.getSmartAccountEnabledNetworks();this.appKit?.setSmartAccountEnabledNetworks(r,this.chainNamespace),e&&t&&(this.appKit?.setAllAccounts(n.length>0?n:[{address:e,type:a}],this.chainNamespace),this.appKit?.setStatus("connected",this.chainNamespace),this.appKit?.setCaipAddress(`${this.chainNamespace}:${t}:${e}`,this.chainNamespace),this.appKit?.setPreferredAccountType(a,this.chainNamespace),this.appKit?.setSmartAccountDeployed(!!i,this.chainNamespace),E.h.setProvider("eip155",this.authProvider),E.h.setProviderId("eip155",o.bq.AUTH_CONNECTOR_ID),this.setupProviderListeners(this.authProvider,"w3mAuth"),this.watchModal()),this.appKit?.setLoading(!1)}}watchModal(){this.authProvider&&this.subscribeState(e=>{e.open||this.authProvider?.rejectRpcRequests()})}setupProviderListeners(e,t){let i=()=>{s.mr.removeItem(s.uJ.WALLET_ID),this.removeListeners(e)},a=e=>{let i=e?.[0];i?(this.appKit?.setCaipAddress(i,this.chainNamespace),t===o.bq.EIP6963_CONNECTOR_ID&&this.appKit?.setAllAccounts(e.map(e=>({address:e,type:"eoa"})),this.chainNamespace)):(t===o.bq.EIP6963_CONNECTOR_ID&&this.appKit?.setAllAccounts([],this.chainNamespace),s.mr.removeItem(s.uJ.WALLET_ID),this.appKit?.resetAccount(this.chainNamespace))},r=e=>{let t="string"==typeof e?n.s.hexStringToNumber(e):Number(e),i=this.caipNetworks.find(e=>e.chainId===t),s=this.appKit?.getCaipNetwork();s&&s?.id===i?.id||this.appKit?.setCaipNetwork(i)};t===o.bq.AUTH_CONNECTOR_ID?this.setupAuthListeners(e):(e.on("disconnect",i),e.on("accountsChanged",a),e.on("chainChanged",r)),this.providerHandlers={disconnect:i,accountsChanged:a,chainChanged:r}}removeListeners(e){this.providerHandlers&&(e.removeListener("disconnect",this.providerHandlers.disconnect),e.removeListener("accountsChanged",this.providerHandlers.accountsChanged),e.removeListener("chainChanged",this.providerHandlers.chainChanged),this.providerHandlers=null)}setupAuthListeners(e){e.onRpcRequest(e=>{r.$D.checkIfRequestExists(e)?r.$D.checkIfRequestIsSafe(e)||this.appKit?.handleUnsafeRPCRequest():this.handleInvalidAuthRequest()}),e.onRpcError(()=>this.handleAuthRpcError()),e.onRpcSuccess((e,t)=>this.handleAuthRpcSuccess(e,t)),e.onNotConnected(()=>this.handleAuthNotConnected()),e.onConnect(({preferredAccountType:e})=>this.handleAuthIsConnected(e)),e.onSetPreferredAccount(({address:e,type:t})=>{e&&this.handleAuthSetPreferredAccount(e,t)})}handleInvalidAuthRequest(){this.appKit?.open(),setTimeout(()=>{this.appKit?.showErrorMessage(r.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300)}handleAuthRpcError(){this.appKit?.isOpen()&&(this.appKit?.isTransactionStackEmpty()?this.appKit?.close():this.appKit?.popTransactionStack(!0))}handleAuthRpcSuccess(e,t){r.$D.checkIfRequestIsSafe(t)||(this.appKit?.isTransactionStackEmpty()?this.appKit?.close():this.appKit?.popTransactionStack())}handleAuthNotConnected(){this.appKit?.setCaipAddress(void 0,this.chainNamespace)}handleAuthIsConnected(e){this.appKit?.getActiveChainNamespace()===this.chainNamespace&&this.appKit?.setPreferredAccountType(e,this.chainNamespace)}handleAuthSetPreferredAccount(e,t){if(!e)return;this.appKit?.setLoading(!0);let i=s.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id);this.appKit?.setCaipAddress(`eip155:${i}:${e}`,this.chainNamespace),this.appKit?.setStatus("connected",this.chainNamespace),this.appKit?.setPreferredAccountType(t,this.chainNamespace),this.syncAccount({address:e}).then(()=>this.appKit?.setLoading(!1)),this.appKit?.setLoading(!1)}async syncReownName(e){try{let t=await this.appKit?.getReownName(e);if(t?.[0]){let e=t[0];this.appKit?.setProfileName(e.name,this.chainNamespace)}else this.appKit?.setProfileName(null,this.chainNamespace)}catch{this.appKit?.setProfileName(null,this.chainNamespace)}}async syncAccount({address:e,caipNetwork:t}){let i=t||this.appKit?.getCaipNetwork(),a=this.appKit?.getPreferredAccountType(),n=i?.chainNamespace===s.bq.CHAIN.EVM;e?n&&(this.appKit?.setPreferredAccountType(a,this.chainNamespace),this.syncConnectedWalletInfo(),this.ethersConfig&&this.checkActiveProviders(this.ethersConfig),i?.explorerUrl&&this.appKit?.setAddressExplorerUrl(`${i.explorerUrl}/address/${e}`,this.chainNamespace),await Promise.all([this.syncProfile(e),this.appKit?.setApprovedCaipNetworksData(this.chainNamespace)])):(this.appKit?.resetWcConnection(),this.appKit?.resetNetwork(),this.appKit?.setAllAccounts([],this.chainNamespace))}async syncProfile(e){let t=this.appKit?.getCaipNetwork();try{let t=await this.appKit?.fetchIdentity({address:e}),i=t?.name,s=t?.avatar;this.appKit?.setProfileName(i,this.chainNamespace),this.appKit?.setProfileImage(s,this.chainNamespace),i||await this.syncReownName(e)}catch{if(t?.chainId===1){let t=new N.J("mainnet"),i=await t.lookupAddress(e),s=await t.getAvatar(e);i?this.appKit?.setProfileName(i,this.chainNamespace):await this.syncReownName(e),s&&this.appKit?.setProfileImage(s,this.chainNamespace)}else await this.syncReownName(e),this.appKit?.setProfileImage(null,this.chainNamespace)}}async syncBalance(e,t){let i=this.appKit?.getCaipNetworks().find(e=>e.id===t.id),a=t.chainNamespace===s.bq.CHAIN.EVM;if(t&&i&&a){let i=new l.r6(t.rpcUrl,{chainId:t.chainId,name:t.name});if(i){let s=await i.getBalance(e),a=(0,u.dF)(s);this.appKit?.setBalance(a,t.currency,this.chainNamespace)}}}syncConnectedWalletInfo(){let e=s.mr.getItem(s.uJ.WALLET_ID),t=E.h.state.providerIds.eip155;if(t===o.bq.EIP6963_CONNECTOR_ID){if(e){let t=this.EIP6963Providers.find(t=>t.info.name===e);t&&this.appKit?.setConnectedWalletInfo({...t.info},this.chainNamespace)}}else if(t===o.bq.WALLET_CONNECT_CONNECTOR_ID){let e=E.h.getProvider("eip155");e?.session&&this.appKit?.setConnectedWalletInfo({...e.session.peer.metadata,name:e.session.peer.metadata.name,icon:e.session.peer.metadata.icons?.[0]},this.chainNamespace)}else if(t===o.bq.COINBASE_SDK_CONNECTOR_ID){let e=this.appKit?.getConnectors().find(e=>e.id===o.bq.COINBASE_SDK_CONNECTOR_ID);this.appKit?.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.appKit?.getConnectorImage(e)},this.chainNamespace)}else e&&this.appKit?.setConnectedWalletInfo({name:e},this.chainNamespace)}syncRequestedNetworks(e){[...new Set(e.map(e=>e.chainNamespace))].forEach(t=>{this.appKit?.setRequestedCaipNetworks(e.filter(e=>e.chainNamespace===t),t)})}async switchNetwork(e){async function t(t){try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n.s.numberToHexString(e.chainId)}]})}catch(i){if(i.code===c.Tz.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||i.code===c.Tz.ERROR_CODE_DEFAULT||i?.data?.originalError?.code===c.Tz.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)await n.s.addEthereumChain(t,e);else throw Error("Chain is not supported")}}let i=E.h.getProvider("eip155"),s=E.h.state.providerIds.eip155;if(i)switch(s){case o.bq.WALLET_CONNECT_CONNECTOR_ID:this.appKit?.universalAdapter?.networkControllerClient.switchCaipNetwork(e);break;case o.bq.INJECTED_CONNECTOR_ID:case o.bq.EIP6963_CONNECTOR_ID:case o.bq.COINBASE_SDK_CONNECTOR_ID:i&&await t(i);break;case o.bq.AUTH_CONNECTOR_ID:if(this.authProvider)try{this.appKit?.setLoading(!0);let{chainId:t}=await this.authProvider.switchNetwork(e.chainId),{address:i,preferredAccountType:s}=await this.authProvider.connect({chainId:e.chainId}),a=`${this.chainNamespace}:${t}:${i}`;this.appKit?.setCaipNetwork(e),this.appKit?.setCaipAddress(a,this.chainNamespace),this.appKit?.setPreferredAccountType(s,this.chainNamespace),await this.syncAccount({address:i}),this.appKit?.setLoading(!1)}catch{throw Error("Switching chain failed")}finally{this.appKit?.setLoading(!1)}break;default:throw Error("Unsupported provider type")}}syncConnectors(e){let t=[];if(e.injected){let e=o.CK.ConnectorTypesMap[o.bq.INJECTED_CONNECTOR_ID];e&&t.push({id:o.bq.INJECTED_CONNECTOR_ID,explorerId:o.CK.ConnectorExplorerIds[o.bq.INJECTED_CONNECTOR_ID],imageId:o.CK.ConnectorImageIds[o.bq.INJECTED_CONNECTOR_ID],imageUrl:this.options?.connectorImages?.[o.bq.INJECTED_CONNECTOR_ID],name:o.CK.ConnectorNamesMap[o.bq.INJECTED_CONNECTOR_ID],type:e,chain:this.chainNamespace})}e.coinbase&&t.push({id:o.bq.COINBASE_SDK_CONNECTOR_ID,explorerId:o.CK.ConnectorExplorerIds[o.bq.COINBASE_SDK_CONNECTOR_ID],imageId:o.CK.ConnectorImageIds[o.bq.COINBASE_SDK_CONNECTOR_ID],imageUrl:this.options?.connectorImages?.[o.bq.COINBASE_SDK_CONNECTOR_ID],name:o.CK.ConnectorNamesMap[o.bq.COINBASE_SDK_CONNECTOR_ID],type:"EXTERNAL",chain:this.chainNamespace}),this.appKit?.setConnectors(t)}async syncAuthConnector(e,t=!1){if(t||"undefined"!=typeof window){this.authProvider=f.D.getInstance(e),this.appKit?.addConnector({id:o.bq.AUTH_CONNECTOR_ID,type:"AUTH",name:"Auth",provider:this.authProvider,chain:this.chainNamespace}),this.appKit?.setLoading(!0);let t=this.authProvider.getLoginEmailUsed();this.appKit?.setLoading(t);let{isConnected:i}=await this.authProvider.isConnected();i?await this.setAuthProvider():this.appKit?.setLoading(!1)}}eip6963EventHandler(e){if(e.detail){let{info:t,provider:i}=e.detail,s=this.appKit?.getConnectors(),a=s?.find(e=>e.name===t.name),n=s?.find(e=>e.id===o.bq.COINBASE_SDK_CONNECTOR_ID)&&e.detail.info.rdns===o.bq.CONNECTOR_RDNS_MAP[o.bq.COINBASE_SDK_CONNECTOR_ID];if(!a&&!n){let e=o.CK.ConnectorTypesMap[o.bq.EIP6963_CONNECTOR_ID];e&&(this.appKit?.addConnector({id:o.bq.EIP6963_CONNECTOR_ID,type:e,imageUrl:t.icon??this.options?.connectorImages?.[o.bq.EIP6963_CONNECTOR_ID],name:t.name,provider:i,info:t,chain:this.chainNamespace}),this.EIP6963Providers.push({provider:i,info:t}))}}}listenConnectors(e){if("undefined"!=typeof window&&e){let e=this.eip6963EventHandler.bind(this);window.addEventListener(o.bq.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(o.bq.EIP6963_REQUEST_EVENT))}}}}}]);