import{g as B,S as G,f as J,h as Q,P as X,b as y,T as U,V as M}from"./index-CFCn-O9L.js";var z={exports:{}},R;function Y(){return R||(R=1,function(i){var n=Object.prototype.hasOwnProperty,e="~";function t(){}Object.create&&(t.prototype=Object.create(null),new t().__proto__||(e=!1));function s(h,a,r){this.fn=h,this.context=a,this.once=r||!1}function o(h,a,r,c,v){if(typeof r!="function")throw new TypeError("The listener must be a function");var p=new s(r,c||h,v),f=e?e+a:a;return h._events[f]?h._events[f].fn?h._events[f]=[h._events[f],p]:h._events[f].push(p):(h._events[f]=p,h._eventsCount++),h}function l(h,a){--h._eventsCount===0?h._events=new t:delete h._events[a]}function u(){this._events=new t,this._eventsCount=0}u.prototype.eventNames=function(){var a=[],r,c;if(this._eventsCount===0)return a;for(c in r=this._events)n.call(r,c)&&a.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(r)):a},u.prototype.listeners=function(a){var r=e?e+a:a,c=this._events[r];if(!c)return[];if(c.fn)return[c.fn];for(var v=0,p=c.length,f=new Array(p);v<p;v++)f[v]=c[v].fn;return f},u.prototype.listenerCount=function(a){var r=e?e+a:a,c=this._events[r];return c?c.fn?1:c.length:0},u.prototype.emit=function(a,r,c,v,p,f){var w=e?e+a:a;if(!this._events[w])return!1;var d=this._events[w],b=arguments.length,E,_;if(d.fn){switch(d.once&&this.removeListener(a,d.fn,void 0,!0),b){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,r),!0;case 3:return d.fn.call(d.context,r,c),!0;case 4:return d.fn.call(d.context,r,c,v),!0;case 5:return d.fn.call(d.context,r,c,v,p),!0;case 6:return d.fn.call(d.context,r,c,v,p,f),!0}for(_=1,E=new Array(b-1);_<b;_++)E[_-1]=arguments[_];d.fn.apply(d.context,E)}else{var q=d.length,x;for(_=0;_<q;_++)switch(d[_].once&&this.removeListener(a,d[_].fn,void 0,!0),b){case 1:d[_].fn.call(d[_].context);break;case 2:d[_].fn.call(d[_].context,r);break;case 3:d[_].fn.call(d[_].context,r,c);break;case 4:d[_].fn.call(d[_].context,r,c,v);break;default:if(!E)for(x=1,E=new Array(b-1);x<b;x++)E[x-1]=arguments[x];d[_].fn.apply(d[_].context,E)}}return!0},u.prototype.on=function(a,r,c){return o(this,a,r,c,!1)},u.prototype.once=function(a,r,c){return o(this,a,r,c,!0)},u.prototype.removeListener=function(a,r,c,v){var p=e?e+a:a;if(!this._events[p])return this;if(!r)return l(this,p),this;var f=this._events[p];if(f.fn)f.fn===r&&(!v||f.once)&&(!c||f.context===c)&&l(this,p);else{for(var w=0,d=[],b=f.length;w<b;w++)(f[w].fn!==r||v&&!f[w].once||c&&f[w].context!==c)&&d.push(f[w]);d.length?this._events[p]=d.length===1?d[0]:d:l(this,p)}return this},u.prototype.removeAllListeners=function(a){var r;return a?(r=e?e+a:a,this._events[r]&&l(this,r)):(this._events=new t,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=e,u.EventEmitter=u,i.exports=u}(z)),z.exports}var Z=Y();const ee=B(Z);let T;const te=new Uint8Array(16);function ne(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(te)}const m=[];for(let i=0;i<256;++i)m.push((i+256).toString(16).slice(1));function ie(i,n=0){return m[i[n+0]]+m[i[n+1]]+m[i[n+2]]+m[i[n+3]]+"-"+m[i[n+4]]+m[i[n+5]]+"-"+m[i[n+6]]+m[i[n+7]]+"-"+m[i[n+8]]+m[i[n+9]]+"-"+m[i[n+10]]+m[i[n+11]]+m[i[n+12]]+m[i[n+13]]+m[i[n+14]]+m[i[n+15]]}const se=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),D={randomUUID:se};function re(i,n,e){if(D.randomUUID&&!n&&!i)return D.randomUUID();i=i||{};const t=i.random||(i.rng||ne)();return t[6]=t[6]&15|64,t[8]=t[8]&63|128,ie(t)}function W(i){return i.version===void 0}function L(i){return W(i)?i.serialize({verifySignatures:!1,requireAllSignatures:!1}):i.serialize()}var $=function(i,n,e,t){function s(o){return o instanceof e?o:new e(function(l){l(o)})}return new(e||(e=Promise))(function(o,l){function u(r){try{a(t.next(r))}catch(c){l(c)}}function h(r){try{a(t.throw(r))}catch(c){l(c)}}function a(r){r.done?o(r.value):s(r.value).then(u,h)}a((t=t.apply(i,n||[])).next())})};function j(i){return $(this,void 0,void 0,function*(){try{return yield i.request({method:"wallet_getSnaps"}),!0}catch{return!1}})}function oe(){return $(this,void 0,void 0,function*(){try{const i=window.ethereum;if(!i)return null;if(i.providers&&Array.isArray(i.providers)){const n=i.providers;for(const e of n)if(yield j(e))return e}if(i.detected&&Array.isArray(i.detected)){const n=i.detected;for(const e of n)if(yield j(e))return e}return(yield j(i))?i:null}catch(i){return console.error(i),null}})}const ae="solana:mainnet",ce="solana:devnet",le="solana:testnet",de="solana:localnet",V=[ae,ce,le,de];function P(i){return V.includes(i)}var S=function(i,n,e,t){if(e==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?i!==n||!t:!n.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?t:e==="a"?t.call(i):t?t.value:n.get(i)},A=function(i,n,e,t,s){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?i!==n||!s:!n.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?s.call(i,e):s?s.value=e:n.set(i,e),e},C,I,K,H,O,k;const he=V,ue=[G,J,Q];class N{get address(){return S(this,C,"f")}get publicKey(){return S(this,I,"f").slice()}get chains(){return S(this,K,"f").slice()}get features(){return S(this,H,"f").slice()}get label(){return S(this,O,"f")}get icon(){return S(this,k,"f")}constructor({address:n,publicKey:e,label:t,icon:s}){C.set(this,void 0),I.set(this,void 0),K.set(this,void 0),H.set(this,void 0),O.set(this,void 0),k.set(this,void 0),new.target===N&&Object.freeze(this),A(this,C,n,"f"),A(this,I,e,"f"),A(this,K,he,"f"),A(this,H,ue,"f"),A(this,O,t,"f"),A(this,k,s,"f")}}C=new WeakMap,I=new WeakMap,K=new WeakMap,H=new WeakMap,O=new WeakMap,k=new WeakMap;var g=function(i,n,e,t){function s(o){return o instanceof e?o:new e(function(l){l(o)})}return new(e||(e=Promise))(function(o,l){function u(r){try{a(t.next(r))}catch(c){l(c)}}function h(r){try{a(t.throw(r))}catch(c){l(c)}}function a(r){r.done?o(r.value):s(r.value).then(u,h)}a((t=t.apply(i,n||[])).next())})};class F extends ee{constructor(n){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,s;switch(e.type){case"connect":{this._collapseIframe(),!((t=e.data)===null||t===void 0)&&t.publicKey?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return}case"disconnect":{this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return}case"accountChanged":{!((s=e.data)===null||s===void 0)&&s.publicKey?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return}default:return}},this._handleResize=e=>{e.resizeMode==="full"?e.params.mode==="fullscreen"?this._expandIframe():e.params.mode==="hide"&&this._collapseIframe():e.resizeMode==="coordinates"&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if(((t=e.data)===null||t===void 0?void 0:t.channel)!=="solflareIframeToWalletAdapter")return;const s=e.data.data||{};if(s.type==="event")this._handleEvent(s.event);else if(s.type==="resize")this._handleResize(s);else if(s.type==="response"&&this._messageHandlers[s.id]){const{resolve:o,reject:l}=this._messageHandlers[s.id];delete this._messageHandlers[s.id],s.error?l(s.error):o(s.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const t of e)t.parentElement&&t.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map(o=>`${o}=${encodeURIComponent(e[o])}`).join("&"),s=`${F.IFRAME_URL}?${t}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${s}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise((t,s)=>{var o,l;const u=re();this._messageHandlers[u]={resolve:t,reject:s},(l=(o=this._iframe)===null||o===void 0?void 0:o.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:u},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();(!this._account||this._account.address!==e)&&(this._account=new N({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},n!=null&&n.network&&(this._network=n==null?void 0:n.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),n!=null&&n.params&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),n==null?void 0:n.params))}get publicKey(){return this._publicKey?new X(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return g(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((n,e)=>{this._connectHandler={resolve:n,reject:e}}))})}disconnect(){return g(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(n){var e;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=L(n),s=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:y.encode(t)}}),{transaction:o}=s;return W(n)?U.from(y.decode(o)):M.deserialize(y.decode(o))}catch(t){throw new Error(((e=t==null?void 0:t.toString)===null||e===void 0?void 0:e.call(t))||"Failed to sign transaction")}})}signAllTransactions(n){var e;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=n.map(o=>L(o)),{transactions:s}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:t.map(o=>y.encode(o))}});return s.map((o,l)=>W(n[l])?U.from(y.decode(o)):M.deserialize(y.decode(o)))}catch(t){throw new Error(((e=t==null?void 0:t.toString)===null||e===void 0?void 0:e.call(t))||"Failed to sign transactions")}})}signAndSendTransaction(n,e){var t;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const s=L(n),{signature:o}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:y.encode(s),options:e}});return o}catch(s){throw new Error(((t=s==null?void 0:s.toString)===null||t===void 0?void 0:t.call(s))||"Failed to sign and send transaction")}})}signMessage(n,e="utf8"){var t;return g(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:s}=yield this._sendIframeMessage({method:"signMessage",params:{data:y.encode(n),display:e}});return Uint8Array.from(y.decode(s))}catch(s){throw new Error(((t=s==null?void 0:s.toString)===null||t===void 0?void 0:t.call(s))||"Failed to sign message")}})}sign(n,e="utf8"){return g(this,void 0,void 0,function*(){return yield this.signMessage(n,e)})}static isSupported(){return g(this,void 0,void 0,function*(){return!!(yield oe())})}standardSignAndSendTransaction(...n){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{transaction:t,account:s,chain:o,options:l}=n[0],{minContextSlot:u,preflightCommitment:h,skipPreflight:a,maxRetries:r}=l||{};if(s!==this._account)throw new Error("invalid account");if(!P(o))throw new Error("invalid chain");const c=yield this.signAndSendTransaction(M.deserialize(t),{preflightCommitment:h,minContextSlot:u,maxRetries:r,skipPreflight:a});e.push({signature:y.decode(c)})}else if(n.length>1)for(const t of n)e.push(...yield this.standardSignAndSendTransaction(t));return e})}standardSignTransaction(...n){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{transaction:t,account:s,chain:o}=n[0];if(s!==this._account)throw new Error("invalid account");if(o&&!P(o))throw new Error("invalid chain");const l=yield this.signTransaction(M.deserialize(t));e.push({signedTransaction:l.serialize()})}else if(n.length>1){let t;for(const l of n){if(l.account!==this._account)throw new Error("invalid account");if(l.chain){if(!P(l.chain))throw new Error("invalid chain");if(t){if(l.chain!==t)throw new Error("conflicting chain")}else t=l.chain}}const s=n.map(({transaction:l})=>M.deserialize(l)),o=yield this.signAllTransactions(s);e.push(...o.map(l=>({signedTransaction:l.serialize()})))}return e})}standardSignMessage(...n){return g(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{message:t,account:s}=n[0];if(s!==this._account)throw new Error("invalid account");const o=yield this.signMessage(t);e.push({signedMessage:t,signature:o})}else if(n.length>1)for(const t of n)e.push(...yield this.standardSignMessage(t));return e})}}F.IFRAME_URL="https://widget.solflare.com/";export{N as StandardSolflareMetaMaskWalletAccount,F as default};
