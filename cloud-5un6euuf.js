const rs=()=>{};var mn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ss=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],u=n[e++],p=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},sr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,u=o?n[s+1]:0,p=s+2<n.length,g=p?n[s+2]:0,y=i>>2,b=(i&3)<<4|u>>4;let A=(u&15)<<2|g>>6,V=g&63;p||(V=64,o||(A=64)),r.push(e[y],e[b],e[A],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(rr(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ss(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const b=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||u==null||g==null||b==null)throw new is;const A=i<<2|u>>4;if(r.push(A),g!==64){const V=u<<4&240|g>>2;if(r.push(V),b!==64){const S=g<<6&192|b;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class is extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const os=function(n){const t=rr(n);return sr.encodeByteArray(t,!0)},ee=function(n){return os(n).replace(/\./g,"")},as=function(n){try{return sr.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=()=>cs().__FIREBASE_DEFAULTS__,us=()=>{if(typeof process>"u"||typeof mn>"u")return;const n=mn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&as(n[1]);return t&&JSON.parse(t)},ir=()=>{try{return rs()||ls()||us()||fs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hs=n=>{var t,e;return(e=(t=ir())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},ds=n=>{const t=hs(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},or=()=>{var n;return(n=ir())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ee(JSON.stringify(e)),ee(JSON.stringify(o)),""].join(".")}function gs(){try{return typeof indexedDB=="object"}catch{return!1}}function ys(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="FirebaseError";class Nt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=_s,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?bs(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,u,r)}}function bs(n,t){try{let e=0,r="";for(;e<n.length;){const s=n.indexOf("{$",e);if(s===-1){r+=n.substring(e);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(e);break}const o=n.substring(s+2,i),u=t[o];r+=n.substring(e,s)+(u!=null?String(u):`<${o}?>`),e=i+1}return r}catch{return n}}function ne(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(gn(i)&&gn(o)){if(!ne(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function gn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Es(n){return(await fetch(n,{credentials:"include"})).ok}class Ot{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ps;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(As(t))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=pt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pt){return this.instances.has(t)}getOptions(t=pt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ws(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pt){return this.component?this.component.multipleInstances?t:pt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ws(n){return n===pt?void 0:n}function As(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Is(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const vs={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Vs=N.INFO,Ns={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ss=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ns[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lr{constructor(t){this.name=t,this._logLevel=Vs,this._logHandler=Ss,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const xs=(n,t)=>t.some(e=>n instanceof e);let yn,_n;function Rs(){return yn||(yn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ds(){return _n||(_n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ur=new WeakMap,Fe=new WeakMap,fr=new WeakMap,Se=new WeakMap,He=new WeakMap;function Ps(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(ct(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&ur.set(e,n)}).catch(()=>{}),He.set(t,n),t}function Cs(n){if(Fe.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Fe.set(n,t)}let ke={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fe.get(n);if(t==="objectStoreNames")return n.objectStoreNames||fr.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ct(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Os(n){ke=n(ke)}function Fs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(xe(this),t,...e);return fr.set(r,t.sort?t.sort():[t]),ct(r)}:Ds().includes(n)?function(...t){return n.apply(xe(this),t),ct(ur.get(this))}:function(...t){return ct(n.apply(xe(this),t))}}function ks(n){return typeof n=="function"?Fs(n):(n instanceof IDBTransaction&&Cs(n),xs(n,Rs())?new Proxy(n,ke):n)}function ct(n){if(n instanceof IDBRequest)return Ps(n);if(Se.has(n))return Se.get(n);const t=ks(n);return t!==n&&(Se.set(n,t),He.set(t,n)),t}const xe=n=>He.get(n);function Ms(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),u=ct(o);return r&&o.addEventListener("upgradeneeded",p=>{r(ct(o.result),p.oldVersion,p.newVersion,ct(o.transaction),p)}),e&&o.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),u.then(p=>{i&&p.addEventListener("close",()=>i()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const Ls=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],Re=new Map;function bn(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Re.get(t))return Re.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Us.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ls.includes(e)))return;const i=async function(o,...u){const p=this.transaction(o,s?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(u.shift())),(await Promise.all([g[e](...u),s&&p.done]))[0]};return Re.set(t,i),i}Os(n=>({...n,get:(t,e,r)=>bn(t,e)||n.get(t,e,r),has:(t,e)=>!!bn(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bs(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bs(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Me="@firebase/app",En="0.16.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new lr("@firebase/app"),js="@firebase/app-compat",qs="@firebase/analytics-compat",zs="@firebase/analytics",Gs="@firebase/app-check-compat",Hs="@firebase/app-check",Ws="@firebase/auth",Ks="@firebase/auth-compat",Js="@firebase/crashlytics",Ys="@firebase/database",Xs="@firebase/data-connect",Zs="@firebase/database-compat",Qs="@firebase/functions",ti="@firebase/functions-compat",ei="@firebase/installations",ni="@firebase/installations-compat",ri="@firebase/messaging",si="@firebase/messaging-compat",ii="@firebase/performance",oi="@firebase/performance-compat",ai="@firebase/remote-config",ci="@firebase/remote-config-compat",li="@firebase/storage",ui="@firebase/storage-compat",fi="@firebase/firestore",hi="@firebase/ai",di="@firebase/firestore-compat",pi="firebase",mi="13.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="[DEFAULT]",gi={[Me]:"fire-core",[js]:"fire-core-compat",[zs]:"fire-analytics",[qs]:"fire-analytics-compat",[Hs]:"fire-app-check",[Gs]:"fire-app-check-compat",[Ws]:"fire-auth",[Ks]:"fire-auth-compat",[Js]:"fire-cls",[Ys]:"fire-rtdb",[Xs]:"fire-data-connect",[Zs]:"fire-rtdb-compat",[Qs]:"fire-fn",[ti]:"fire-fn-compat",[ei]:"fire-iid",[ni]:"fire-iid-compat",[ri]:"fire-fcm",[si]:"fire-fcm-compat",[ii]:"fire-perf",[oi]:"fire-perf-compat",[ai]:"fire-rc",[ci]:"fire-rc-compat",[li]:"fire-gcs",[ui]:"fire-gcs-compat",[fi]:"fire-fst",[di]:"fire-fst-compat",[hi]:"fire-vertex","fire-js":"fire-js",[pi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map,yi=new Map,Ue=new Map;function In(n,t){try{n.container.addComponent(t)}catch(e){st.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function se(n){const t=n.name;if(Ue.has(t))return st.debug(`There were multiple attempts to register component ${t}.`),!1;Ue.set(t,n);for(const e of re.values())In(e,n);for(const e of yi.values())In(e,n);return!0}function _i(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function bi(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},et=new ar("app","Firebase",Ei);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=mi;function hr(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Le,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw et.create("bad-app-name",{appName:String(s)});if(e||(e=or()),!e)throw et.create("no-options");const i=re.get(s);if(i)if(ne(e,i.options)){if(ne(r,i.config))return i;throw et.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw et.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(e)});const o=new Ts(s);for(const p of Ue.values())o.addComponent(p);const u=new Ii(e,r,o);return re.set(s,u),u}function Ai(n=Le){const t=re.get(n);if(!t&&n===Le&&or())return hr();if(!t)throw et.create("no-app",{appName:n});return t}function At(n,t,e){let r=gi[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),st.warn(o.join(" "));return}se(new Ot(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="firebase-heartbeat-database",vi=1,Ft="firebase-heartbeat-store";let De=null;function dr(){return De||(De=Ms(Ti,vi,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ft)}catch(e){console.warn(e)}}}}).catch(n=>{throw et.create("idb-open",{originalErrorMessage:n.message})})),De}async function Vi(n){try{const e=(await dr()).transaction(Ft),r=await e.objectStore(Ft).get(pr(n));return await e.done,r}catch(t){if(t instanceof Nt)st.warn(t.message);else{const e=et.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});st.warn(e.message)}}}async function wn(n,t){try{const r=(await dr()).transaction(Ft,"readwrite");await r.objectStore(Ft).put(t,pr(n)),await r.done}catch(e){if(e instanceof Nt)st.warn(e.message);else{const r=et.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});st.warn(r.message)}}}function pr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=1024,Si=30;class xi{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Di(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=An();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Si){const o=Pi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){st.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=An(),{heartbeatsToSend:r,unsentEntries:s}=Ri(this._heartbeatsCache.heartbeats),i=ee(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return st.warn(e),""}}}function An(){return new Date().toISOString().substring(0,10)}function Ri(n,t=Ni){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tn(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Tn(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Di{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gs()?ys().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vi(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return wn(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return wn(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Tn(n){return ee(JSON.stringify({version:2,heartbeats:n})).length}function Pi(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){se(new Ot("platform-logger",t=>new $s(t),"PRIVATE")),se(new Ot("heartbeat",t=>new xi(t),"PRIVATE")),At(Me,En,n),At(Me,En,"esm2020"),At("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci("");var Oi="firebase",Fi="13.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Oi,Fi,"app");var vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(f,a){function l(){}l.prototype=a.prototype,f.F=a.prototype,f.prototype=new l,f.prototype.constructor=f,f.D=function(d,h,m){for(var c=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)c[dt-2]=arguments[dt];return a.prototype[h].apply(d,c)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(f,a,l){l||(l=0);const d=Array(16);if(typeof a=="string")for(var h=0;h<16;++h)d[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;else for(h=0;h<16;++h)d[h]=a[l++]|a[l++]<<8|a[l++]<<16|a[l++]<<24;a=f.g[0],l=f.g[1],h=f.g[2];let m=f.g[3],c;c=a+(m^l&(h^m))+d[0]+3614090360&4294967295,a=l+(c<<7&4294967295|c>>>25),c=m+(h^a&(l^h))+d[1]+3905402710&4294967295,m=a+(c<<12&4294967295|c>>>20),c=h+(l^m&(a^l))+d[2]+606105819&4294967295,h=m+(c<<17&4294967295|c>>>15),c=l+(a^h&(m^a))+d[3]+3250441966&4294967295,l=h+(c<<22&4294967295|c>>>10),c=a+(m^l&(h^m))+d[4]+4118548399&4294967295,a=l+(c<<7&4294967295|c>>>25),c=m+(h^a&(l^h))+d[5]+1200080426&4294967295,m=a+(c<<12&4294967295|c>>>20),c=h+(l^m&(a^l))+d[6]+2821735955&4294967295,h=m+(c<<17&4294967295|c>>>15),c=l+(a^h&(m^a))+d[7]+4249261313&4294967295,l=h+(c<<22&4294967295|c>>>10),c=a+(m^l&(h^m))+d[8]+1770035416&4294967295,a=l+(c<<7&4294967295|c>>>25),c=m+(h^a&(l^h))+d[9]+2336552879&4294967295,m=a+(c<<12&4294967295|c>>>20),c=h+(l^m&(a^l))+d[10]+4294925233&4294967295,h=m+(c<<17&4294967295|c>>>15),c=l+(a^h&(m^a))+d[11]+2304563134&4294967295,l=h+(c<<22&4294967295|c>>>10),c=a+(m^l&(h^m))+d[12]+1804603682&4294967295,a=l+(c<<7&4294967295|c>>>25),c=m+(h^a&(l^h))+d[13]+4254626195&4294967295,m=a+(c<<12&4294967295|c>>>20),c=h+(l^m&(a^l))+d[14]+2792965006&4294967295,h=m+(c<<17&4294967295|c>>>15),c=l+(a^h&(m^a))+d[15]+1236535329&4294967295,l=h+(c<<22&4294967295|c>>>10),c=a+(h^m&(l^h))+d[1]+4129170786&4294967295,a=l+(c<<5&4294967295|c>>>27),c=m+(l^h&(a^l))+d[6]+3225465664&4294967295,m=a+(c<<9&4294967295|c>>>23),c=h+(a^l&(m^a))+d[11]+643717713&4294967295,h=m+(c<<14&4294967295|c>>>18),c=l+(m^a&(h^m))+d[0]+3921069994&4294967295,l=h+(c<<20&4294967295|c>>>12),c=a+(h^m&(l^h))+d[5]+3593408605&4294967295,a=l+(c<<5&4294967295|c>>>27),c=m+(l^h&(a^l))+d[10]+38016083&4294967295,m=a+(c<<9&4294967295|c>>>23),c=h+(a^l&(m^a))+d[15]+3634488961&4294967295,h=m+(c<<14&4294967295|c>>>18),c=l+(m^a&(h^m))+d[4]+3889429448&4294967295,l=h+(c<<20&4294967295|c>>>12),c=a+(h^m&(l^h))+d[9]+568446438&4294967295,a=l+(c<<5&4294967295|c>>>27),c=m+(l^h&(a^l))+d[14]+3275163606&4294967295,m=a+(c<<9&4294967295|c>>>23),c=h+(a^l&(m^a))+d[3]+4107603335&4294967295,h=m+(c<<14&4294967295|c>>>18),c=l+(m^a&(h^m))+d[8]+1163531501&4294967295,l=h+(c<<20&4294967295|c>>>12),c=a+(h^m&(l^h))+d[13]+2850285829&4294967295,a=l+(c<<5&4294967295|c>>>27),c=m+(l^h&(a^l))+d[2]+4243563512&4294967295,m=a+(c<<9&4294967295|c>>>23),c=h+(a^l&(m^a))+d[7]+1735328473&4294967295,h=m+(c<<14&4294967295|c>>>18),c=l+(m^a&(h^m))+d[12]+2368359562&4294967295,l=h+(c<<20&4294967295|c>>>12),c=a+(l^h^m)+d[5]+4294588738&4294967295,a=l+(c<<4&4294967295|c>>>28),c=m+(a^l^h)+d[8]+2272392833&4294967295,m=a+(c<<11&4294967295|c>>>21),c=h+(m^a^l)+d[11]+1839030562&4294967295,h=m+(c<<16&4294967295|c>>>16),c=l+(h^m^a)+d[14]+4259657740&4294967295,l=h+(c<<23&4294967295|c>>>9),c=a+(l^h^m)+d[1]+2763975236&4294967295,a=l+(c<<4&4294967295|c>>>28),c=m+(a^l^h)+d[4]+1272893353&4294967295,m=a+(c<<11&4294967295|c>>>21),c=h+(m^a^l)+d[7]+4139469664&4294967295,h=m+(c<<16&4294967295|c>>>16),c=l+(h^m^a)+d[10]+3200236656&4294967295,l=h+(c<<23&4294967295|c>>>9),c=a+(l^h^m)+d[13]+681279174&4294967295,a=l+(c<<4&4294967295|c>>>28),c=m+(a^l^h)+d[0]+3936430074&4294967295,m=a+(c<<11&4294967295|c>>>21),c=h+(m^a^l)+d[3]+3572445317&4294967295,h=m+(c<<16&4294967295|c>>>16),c=l+(h^m^a)+d[6]+76029189&4294967295,l=h+(c<<23&4294967295|c>>>9),c=a+(l^h^m)+d[9]+3654602809&4294967295,a=l+(c<<4&4294967295|c>>>28),c=m+(a^l^h)+d[12]+3873151461&4294967295,m=a+(c<<11&4294967295|c>>>21),c=h+(m^a^l)+d[15]+530742520&4294967295,h=m+(c<<16&4294967295|c>>>16),c=l+(h^m^a)+d[2]+3299628645&4294967295,l=h+(c<<23&4294967295|c>>>9),c=a+(h^(l|~m))+d[0]+4096336452&4294967295,a=l+(c<<6&4294967295|c>>>26),c=m+(l^(a|~h))+d[7]+1126891415&4294967295,m=a+(c<<10&4294967295|c>>>22),c=h+(a^(m|~l))+d[14]+2878612391&4294967295,h=m+(c<<15&4294967295|c>>>17),c=l+(m^(h|~a))+d[5]+4237533241&4294967295,l=h+(c<<21&4294967295|c>>>11),c=a+(h^(l|~m))+d[12]+1700485571&4294967295,a=l+(c<<6&4294967295|c>>>26),c=m+(l^(a|~h))+d[3]+2399980690&4294967295,m=a+(c<<10&4294967295|c>>>22),c=h+(a^(m|~l))+d[10]+4293915773&4294967295,h=m+(c<<15&4294967295|c>>>17),c=l+(m^(h|~a))+d[1]+2240044497&4294967295,l=h+(c<<21&4294967295|c>>>11),c=a+(h^(l|~m))+d[8]+1873313359&4294967295,a=l+(c<<6&4294967295|c>>>26),c=m+(l^(a|~h))+d[15]+4264355552&4294967295,m=a+(c<<10&4294967295|c>>>22),c=h+(a^(m|~l))+d[6]+2734768916&4294967295,h=m+(c<<15&4294967295|c>>>17),c=l+(m^(h|~a))+d[13]+1309151649&4294967295,l=h+(c<<21&4294967295|c>>>11),c=a+(h^(l|~m))+d[4]+4149444226&4294967295,a=l+(c<<6&4294967295|c>>>26),c=m+(l^(a|~h))+d[11]+3174756917&4294967295,m=a+(c<<10&4294967295|c>>>22),c=h+(a^(m|~l))+d[2]+718787259&4294967295,h=m+(c<<15&4294967295|c>>>17),c=l+(m^(h|~a))+d[9]+3951481745&4294967295,f.g[0]=f.g[0]+a&4294967295,f.g[1]=f.g[1]+(h+(c<<21&4294967295|c>>>11))&4294967295,f.g[2]=f.g[2]+h&4294967295,f.g[3]=f.g[3]+m&4294967295}r.prototype.v=function(f,a){a===void 0&&(a=f.length);const l=a-this.blockSize,d=this.C;let h=this.h,m=0;for(;m<a;){if(h==0)for(;m<=l;)s(this,f,m),m+=this.blockSize;if(typeof f=="string"){for(;m<a;)if(d[h++]=f.charCodeAt(m++),h==this.blockSize){s(this,d),h=0;break}}else for(;m<a;)if(d[h++]=f[m++],h==this.blockSize){s(this,d),h=0;break}}this.h=h,this.o+=a},r.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var a=1;a<f.length-8;++a)f[a]=0;a=this.o*8;for(var l=f.length-8;l<f.length;++l)f[l]=a&255,a/=256;for(this.v(f),f=Array(16),a=0,l=0;l<4;++l)for(let d=0;d<32;d+=8)f[a++]=this.g[l]>>>d&255;return f};function i(f,a){var l=u;return Object.prototype.hasOwnProperty.call(l,f)?l[f]:l[f]=a(f)}function o(f,a){this.h=a;const l=[];let d=!0;for(let h=f.length-1;h>=0;h--){const m=f[h]|0;d&&m==a||(l[h]=m,d=!1)}this.g=l}var u={};function p(f){return-128<=f&&f<128?i(f,function(a){return new o([a|0],a<0?-1:0)}):new o([f|0],f<0?-1:0)}function g(f){if(isNaN(f)||!isFinite(f))return b;if(f<0)return v(g(-f));const a=[];let l=1;for(let d=0;f>=l;d++)a[d]=f/l|0,l*=4294967296;return new o(a,0)}function y(f,a){if(f.length==0)throw Error("number format error: empty string");if(a=a||10,a<2||36<a)throw Error("radix out of range: "+a);if(f.charAt(0)=="-")return v(y(f.substring(1),a));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');const l=g(Math.pow(a,8));let d=b;for(let m=0;m<f.length;m+=8){var h=Math.min(8,f.length-m);const c=parseInt(f.substring(m,m+h),a);h<8?(h=g(Math.pow(a,h)),d=d.j(h).add(g(c))):(d=d.j(l),d=d.add(g(c)))}return d}var b=p(0),A=p(1),V=p(16777216);n=o.prototype,n.m=function(){if(x(this))return-v(this).m();let f=0,a=1;for(let l=0;l<this.g.length;l++){const d=this.i(l);f+=(d>=0?d:4294967296+d)*a,a*=4294967296}return f},n.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(S(this))return"0";if(x(this))return"-"+v(this).toString(f);const a=g(Math.pow(f,6));var l=this;let d="";for(;;){const h=ht(l,a).g;l=J(l,h.j(a));let m=((l.g.length>0?l.g[0]:l.h)>>>0).toString(f);if(l=h,S(l))return m+d;for(;m.length<6;)m="0"+m;d=m+d}},n.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function S(f){if(f.h!=0)return!1;for(let a=0;a<f.g.length;a++)if(f.g[a]!=0)return!1;return!0}function x(f){return f.h==-1}n.l=function(f){return f=J(this,f),x(f)?-1:S(f)?0:1};function v(f){const a=f.g.length,l=[];for(let d=0;d<a;d++)l[d]=~f.g[d];return new o(l,~f.h).add(A)}n.abs=function(){return x(this)?v(this):this},n.add=function(f){const a=Math.max(this.g.length,f.g.length),l=[];let d=0;for(let h=0;h<=a;h++){let m=d+(this.i(h)&65535)+(f.i(h)&65535),c=(m>>>16)+(this.i(h)>>>16)+(f.i(h)>>>16);d=c>>>16,m&=65535,c&=65535,l[h]=c<<16|m}return new o(l,l[l.length-1]&-2147483648?-1:0)};function J(f,a){return f.add(v(a))}n.j=function(f){if(S(this)||S(f))return b;if(x(this))return x(f)?v(this).j(v(f)):v(v(this).j(f));if(x(f))return v(this.j(v(f)));if(this.l(V)<0&&f.l(V)<0)return g(this.m()*f.m());const a=this.g.length+f.g.length,l=[];for(var d=0;d<2*a;d++)l[d]=0;for(d=0;d<this.g.length;d++)for(let h=0;h<f.g.length;h++){const m=this.i(d)>>>16,c=this.i(d)&65535,dt=f.i(h)>>>16,pn=f.i(h)&65535;l[2*d+2*h]+=c*pn,Y(l,2*d+2*h),l[2*d+2*h+1]+=m*pn,Y(l,2*d+2*h+1),l[2*d+2*h+1]+=c*dt,Y(l,2*d+2*h+1),l[2*d+2*h+2]+=m*dt,Y(l,2*d+2*h+2)}for(f=0;f<a;f++)l[f]=l[2*f+1]<<16|l[2*f];for(f=a;f<2*a;f++)l[f]=0;return new o(l,0)};function Y(f,a){for(;(f[a]&65535)!=f[a];)f[a+1]+=f[a]>>>16,f[a]&=65535,a++}function it(f,a){this.g=f,this.h=a}function ht(f,a){if(S(a))throw Error("division by zero");if(S(f))return new it(b,b);if(x(f))return a=ht(v(f),a),new it(v(a.g),v(a.h));if(x(a))return a=ht(f,v(a)),new it(v(a.g),a.h);if(f.g.length>30){if(x(f)||x(a))throw Error("slowDivide_ only works with positive integers.");for(var l=A,d=a;d.l(f)<=0;)l=xt(l),d=xt(d);var h=tt(l,1),m=tt(d,1);for(d=tt(d,2),l=tt(l,2);!S(d);){var c=m.add(d);c.l(f)<=0&&(h=h.add(l),m=c),d=tt(d,1),l=tt(l,1)}return a=J(f,h.j(a)),new it(h,a)}for(h=b;f.l(a)>=0;){for(l=Math.max(1,Math.floor(f.m()/a.m())),d=Math.ceil(Math.log(l)/Math.LN2),d=d<=48?1:Math.pow(2,d-48),m=g(l),c=m.j(a);x(c)||c.l(f)>0;)l-=d,m=g(l),c=m.j(a);S(m)&&(m=A),h=h.add(m),f=J(f,c)}return new it(h,f)}n.B=function(f){return ht(this,f).h},n.and=function(f){const a=Math.max(this.g.length,f.g.length),l=[];for(let d=0;d<a;d++)l[d]=this.i(d)&f.i(d);return new o(l,this.h&f.h)},n.or=function(f){const a=Math.max(this.g.length,f.g.length),l=[];for(let d=0;d<a;d++)l[d]=this.i(d)|f.i(d);return new o(l,this.h|f.h)},n.xor=function(f){const a=Math.max(this.g.length,f.g.length),l=[];for(let d=0;d<a;d++)l[d]=this.i(d)^f.i(d);return new o(l,this.h^f.h)};function xt(f){const a=f.g.length+1,l=[];for(let d=0;d<a;d++)l[d]=f.i(d)<<1|f.i(d-1)>>>31;return new o(l,f.h)}function tt(f,a){const l=a>>5;a%=32;const d=f.g.length-l,h=[];for(let m=0;m<d;m++)h[m]=a>0?f.i(m+l)>>>a|f.i(m+l+1)<<32-a:f.i(m+l);return new o(h,f.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=g,o.fromString=y,mr=o}).apply(typeof vn<"u"?vn:typeof self<"u"?self:typeof window<"u"?window:{});function L(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St="13.3.0";function ki(n){St=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new lr("@firebase/firestore");function ie(n,...t){if(vt.logLevel<=N.DEBUG){const e=t.map(Ke);vt.debug(`Firestore (${St}): ${n}`,...e)}}function We(n,...t){if(vt.logLevel<=N.ERROR){const e=t.map(Ke);vt.error(`Firestore (${St}): ${n}`,...e)}}function gr(n,...t){if(vt.logLevel<=N.WARN){const e=t.map(Ke);vt.warn(`Firestore (${St}): ${n}`,...e)}}function Ke(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,yr(n,r,e)}function yr(n,t,e){let r=`FIRESTORE (${St}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw We(r),new Error(r)}function ft(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||yr(t,s,r)}function be(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class E extends Nt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(j.UNAUTHENTICATED))}shutdown(){}}class Li{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ui{constructor(t){this.auth=null,t.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(ft(typeof t.accessToken=="string",42297,{Z:t}),new _r(t.accessToken,new j(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class $i{constructor(t,e,r){this.ee=t,this.te=e,this.re=r,this.type="FirstParty",this.user=j.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Bi{constructor(t,e,r){this.ee=t,this.te=e,this.re=r}getToken(){return Promise.resolve(new $i(this.ee,this.te,this.re))}start(t,e){t.enqueueRetryable(()=>e(j.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ji{constructor(t,e){this.se=e,this.appCheck=null,this.oe=null,bi(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),e.onInit(r=>{this.appCheck=r})}getToken(){return this.oe?Promise.resolve(new Vn(this.oe)):this.appCheck?this.appCheck.getToken().then(t=>t?(ft(typeof t.token=="string",3470,{tokenResult:t}),new Vn(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,r,s,i,o,u,p,g,y,b,A,V){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=b,this._customHeaders=A,this.grpcFlowControlWindow=V}}const $e="(default)";class kt{constructor(t,e){this.projectId=t,this.database=e||$e}static empty(){return new kt("","")}get isDefaultDatabase(){return this.database===$e}isEqual(t){return t instanceof kt&&t.projectId===this.projectId&&t.database===this.database}}function zi(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kt(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Gi(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function P(n,t){return n<t?-1:n>t?1:0}function Mt(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Pe(s)===Pe(i)?P(s,i):Pe(s)?1:-1}return P(n.length,t.length)}const Wi=55296,Ki=57343;function Pe(n){const t=n.charCodeAt(0);return t>=Wi&&t<=Ki}function br(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="__name__";class X{constructor(t,e,r){e===void 0?e=0:e>t.length&&C(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&C(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return X.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof X?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=X.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return P(t.length,e.length)}static compareSegments(t,e){const r=X.isNumericId(t),s=X.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?X.extractNumericId(t).compare(X.extractNumericId(e)):Mt(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return mr.fromString(t.substring(4,t.length-2))}}class O extends X{construct(t,e,r){return new O(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new O(e)}static emptyPath(){return new O([])}}const Ji=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let lt=class Et extends X{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return Ji.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nn}static keyField(){return new Et([Nn])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(O.fromString(t))}static fromName(t){return new M(O.fromString(t).popFirst(5))}static empty(){return new M(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return O.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new O(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,t,e){if(!e)throw new E(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sn(n){if(!M.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xn(n){if(M.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ir(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ee(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":C(12329,{type:typeof n})}function Je(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ee(n);throw new E(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt=null;function Yi(){return Kt===null?Kt=function(){return 268435456+Math.round(2147483648*Math.random())}():Kt++,"0x"+Kt.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){return n==null}function oe(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="RestConnection",Zi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Qi{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=e+"://"+t.host,this._e=`projects/${r}/databases/${s}`,this.ce=this.databaseId.database===$e?`project_id=${r}`:`project_id=${r}&database_id=${s}`}le(t,e,r,s,i){const o=Yi(),u=this.fe(t,e.toUriEncodedString());ie(Ce,`Sending RPC '${t}' ${o}:`,u,r);const p={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(p,s,i);const{host:g}=new URL(u),y=cr(g);return this.de(t,u,p,r,y).then(b=>(ie(Ce,`Received RPC '${t}' ${o}: `,b),b),b=>{throw gr(Ce,`RPC '${t}' ${o} failed with error: `,b,"url: ",u,"request:",r),b})}me(t,e,r,s,i,o){return this.le(t,e,r,s,i)}he(t,e,r){if(t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+St}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}fe(t,e){const r=Zi[t];let s=`${this.ue}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn,T,k,wt,Be,Xt,Zt,Rt;function Dn(n){if(n===void 0)return We("RPC_ERROR","HTTP error has no status"),_.UNKNOWN;switch(n){case 200:return _.OK;case 400:return _.FAILED_PRECONDITION;case 401:return _.UNAUTHENTICATED;case 403:return _.PERMISSION_DENIED;case 404:return _.NOT_FOUND;case 409:return _.ABORTED;case 416:return _.OUT_OF_RANGE;case 429:return _.RESOURCE_EXHAUSTED;case 499:return _.CANCELLED;case 500:return _.UNKNOWN;case 501:return _.UNIMPLEMENTED;case 503:return _.UNAVAILABLE;case 504:return _.DEADLINE_EXCEEDED;default:return n>=200&&n<300?_.OK:n>=400&&n<500?_.FAILED_PRECONDITION:n>=500&&n<600?_.INTERNAL:_.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(T=Rn||(Rn={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";class to extends Qi{Ee(t,e){throw new Error("Not supported by FetchConnection")}async de(t,e,r,s,i){var p;const o=JSON.stringify(s);let u;try{const g={method:"POST",headers:r,body:o};i&&(g.credentials="include"),u=await fetch(e,g)}catch(g){const y=g,b=y==null?void 0:y.message,A=y!=null&&y.cause?String(y.cause):void 0,V=(b&&A?`${b} (${A})`:b??A)??(y==null?void 0:y.statusText)??String(g);throw new E(Dn(y==null?void 0:y.status),`Request failed with error: ${V}`)}if(!u.ok){let g=await u.json();Array.isArray(g)&&(g=g[0]);const y=(p=g==null?void 0:g.error)==null?void 0:p.message;throw new E(Dn(u.status),`Request failed with error: ${y??u.statusText}`)}return u.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new eo("Invalid base64 string: "+i):i}}(t);return new H(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new H(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}function Lt(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}H.EMPTY_BYTE_STRING=new H("");/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(t,e){let r=new w;return r.parse(t,e),r}parse(t,e){e+=t.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let r=this.Pe,s=this.be(t,r);if(s==0&&this.isEmpty(r)||(e+=s)<w.we)return;if(e>w.ge)return void(this.exponent=Number(w.Fe));let i=this.ve(e,r);this.xe(e,i,r)}be(t,e){for(let i=0;i<6;i++)e[i]=0n;let r=0;for(;r<t.length&&t[r]==0;)r+=1;if(r==t.length)return 0;let s=-r;if(t.length-r>w.De){let i=t[w.De]>=5,o=new Array(w.De).fill(0);for(let u=0;u<w.De;u++)o[u]=t[u+r];i&&(s+=this.Ne(o)),t=o,r=0}for(let i=t.length-1;i>=r;i--)e[0]|=BigInt(t[i])<<32n,this.Se(e);return s}Se(t){let e=t.length;for(let r=0;r<e;r++){let s=t[r]%10n;t[r]=t[r]/10n,r+1<e&&(t[r+1]+=s<<32n)}}isEmpty(t){for(let e=0;e<t.length;e++)if(t[e]!=0n)return!1;return!0}Ne(t){for(let e=t.length-1;e>=0;e--){if(t[e]!=9)return t[e]=t[e]+1,0;t[e]=0}return t[0]=1,1}ve(t,e){let r=e[0]<<31n|e[1]>>1n,s=Number(r)/w.Ce;return Math.floor(Number(t)*w.Be+this.log2(s))}log2(t){return w.Qe*Math.log(t)}xe(t,e,r){let s=this.Ie;this.Oe(-e,s);let i=this.pe;this.Me(r,s,i),this.qe(i),BigInt(s[0])!=BigInt(-t)&&this.qe(i),e+=this.Le(i),(e+=w.Ue)<=0||(e+=this.$e(i),BigInt(e)>=w.Fe?this.exponent=Number(w.Fe):(this.exponent=Number(e),this.Ve=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.Te=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}Oe(t,e){if(t==0)return void this.ke(w.je[0],e);let r=w.je;t<0&&(t=-t,r=w.Ke);let s=w.ze,i=32,o=!0;for(;t>0;)t>=s&&(o?(this.ke(r[i],e),o=!1):this.We(e,r[i],e),t-=s),i-=1,s*=.5}ke(t,e){for(let r=0;r<e.length;r++)e[r]=t[r]}We(t,e,r){this.Ge(t,e,this.pe);let s=this.Je(this.pe);this.He(this.pe,r),r[0]=t[0]+e[0]+BigInt(s)}Ge(t,e,r){for(let s=0;s<r.length;s++)r[s]=0n;this.Ye(t,this.Ae),this.Ye(e,this.Re);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let o=this.Ae[s]*this.Re[i];r[i+s+1]=r[i+s+1]+(o&w.Xe)&0xffffffffffffffffn,r[i+s]=r[i+s]+(o>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)r[s-1]=r[s-1]+(r[s]>>32n)&0xffffffffffffffffn,r[s]&=w.Xe}Je(t){let e=0;for(;this.Ze(t);)this.qe(t),e-=1;return e}Ze(t){if(t[0]<0x19999999n)return!0;if(t[0]>0x19999999n)return!1;for(let e=1;e<t.length;e++){if(t[e]<0x99999999n)return!0;if(t[e]>0x99999999n)return!1}return!1}Me(t,e,r){for(let o=0;o<r.length;o++)r[o]=0n;let s=this.Re;this.Ye(e,s);let i=t.length;for(let o=i-1;o>=0;o--)for(let u=i-1;u>=0;u--){let p=t[o]*s[u];r[u+o+1]=r[u+o+1]+(p&w.Xe)&0xffffffffffffffffn,r[u+o]=r[u+o]+(p>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)r[o-1]=r[o-1]+(r[o]>>32n)&0xffffffffffffffffn,r[o]&=w.Xe}qe(t){let e=t.length-1;t[0]&=w.Xe,t[e]*=10n;for(let r=e-1;r>=0;r--)t[r]=10n*t[r]+(t[r+1]>>32n)&0xffffffffffffffffn,t[r+1]&=w.Xe}Le(t){let e=31-w.et(t[0]);return e!=0&&this.tt(t,e),e}$e(t){return this.rt(t,5,100n),this.rt(t,4,0x80000000n),(t[0]&w.nt<<1n)!=0n?(this.tt(t,1),1):0}He(t,e){e[1]=(t[0]<<32n)+t[1],e[2]=(t[2]<<32n)+t[3],e[3]=(t[4]<<32n)+t[5]}Ye(t,e){e[0]=t[1]>>32n,e[1]=t[1]&w.Xe,e[2]=t[2]>>32n,e[3]=t[2]&w.Xe,e[4]=t[3]>>32n,e[5]=t[3]&w.Xe}tt(t,e){let r=t.length-1,s=BigInt(32-Math.abs(e));if(e>0){let i=BigInt(e);for(let o=r+1-1;o>=1;o--)t[o]=t[o]>>i|t[o-1]<<s&w.Xe;t[0]=t[0]>>i}else if(e<0){let i=BigInt(-e);t[0]=0xffffffffffffffffn&(t[0]<<i|t[1]>>s);for(let o=1;o<r;o++)t[o]=0xffffffffffffffffn&(t[o]<<i&w.Xe|t[o+1]>>s);t[r]=t[r]<<i&w.Xe}}rt(t,e,r){let s=e;t[s]=t[s]+r&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(t[i]&w.nt)!=0n;i--)t[i]&=w.Xe,t[i-1]+=1n}static et(t){let e=Number(t>>32n);return e==0?32+Math.clz32(Number(BigInt.asUintN(32,t))):Math.clz32(e)}}w.De=59,w.ge=646456993,w.we=-646457032,w.Ce=0xccccccccccccd00,w.it=0x8000000000000000n,w.ze=2147483648,w.Xe=0x00000000ffffffffn,w.nt=0xffffffff00000000n,w.Be=Math.log(10)/Math.log(2),w.Qe=1/Math.log(2),w.Ue=2147483647,w.Fe=0xffffffffn,w.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],w.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class I{constructor(t,e,r,s){this.negative=t,this.st=e,this.Ve=r,this.Te=s}exponent(){return this.st-w.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===L(I,k,"f",wt)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===L(I,k,"f",wt)&&!(this.Ve===0n&&this.Te===0n)}compareTo(t){if(this.isNaN())return t.isNaN()?0:1;if(t.isNaN())return-1;let e,r;if(this.negative){if(!t.negative)return-1;e=1,r=-1}else{if(t.negative)return 1;e=-1,r=1}return this.st<t.st?e:this.st>t.st?r:this.Ve<t.Ve?e:this.Ve>t.Ve?r:this.Te<t.Te?e:this.Te>t.Te?r:0}debug(){return(this.negative?"+":"-")+L(I,k,"m",Be).call(I,this.Ve)+L(I,k,"m",Be).call(I,this.Te)+"*2^"+this.exponent()}static fromNumber(t){if(isNaN(t))return I.NaN;if(!isFinite(t))return t<0?I._t:I.ct;if(t===0)return Math.sign(1/t)>0?I.lt:I.ft;const e=new DataView(new ArrayBuffer(8));e.setFloat64(0,t);const r=e.getBigUint64(0);let s=BigInt.asUintN(64,r<<12n),i=2047&Number(r>>52n);if(i===0){const o=w.et(s);s=o<63?s<<BigInt(o+1):0n,i=-o}return new I(t<0,L(I,k,"m",Rt).call(I,i-1023),s,0n)}static fromString(t){if(t==="NaN")return I.NaN;if(t==="-Infinity")return I._t;if(t==="Infinity"||t==="+Infinity")return I.ct;const e=new Array(t.length).fill(0);let r=0,s=0,i=0,o=!1;for(t[r]==="-"?(o=!0,r++):t[r]==="+"&&r++;L(I,k,"m",Xt).call(I,t,r);)e[s++]=L(I,k,"m",Zt).call(I,t,r++);if(t[r]==="."){const p=++r;for(;L(I,k,"m",Xt).call(I,t,r);)e[s++]=L(I,k,"m",Zt).call(I,t,r++);i=p-r}if(t[r]==="e"||t[r]==="E"){let p=0;r++;let g=1;t[r]==="-"?(g=-1,r++):t[r]==="+"&&r++;const y=r;for(;L(I,k,"m",Xt).call(I,t,r);)if(p=10*p+L(I,k,"m",Zt).call(I,t,r++),r-y>9)throw new Error("Exponent too large "+t);if(r===y)throw new Error("Invalid number "+t);i+=p*g}if(s===0||r!==t.length)throw new Error("Invalid number "+t);const u=w.ye(e.slice(0,s),i);return new I(o,u.exponent,u.Ve,u.Te)}}k=I,Be=function(t){return t.toString(16).padStart(16,"0")},Xt=function(t,e){const r=t.codePointAt(e);return r!==void 0&&r>=48&&r<=57},Zt=function(t,e){return t.codePointAt(e)-48},Rt=function(t){return t+w.Ue},wt={value:Number(w.Fe)},I.lt=new I(!1,0,0n,0n),I.ft=new I(!0,0,0n,0n),I.NaN=new I(!1,L(I,k,"f",wt),1n<<63n,0n),I._t=new I(!0,L(I,k,"f",wt),0n,0n),I.ct=new I(!1,L(I,k,"f",wt),0n,0n),new I(!0,L(I,k,"m",Rt).call(I,63),0n,0n),new I(!1,L(I,k,"m",Rt).call(I,0),0n,0n),new I(!0,L(I,k,"m",Rt).call(I,0),0n,0n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(n){if(ft(!!n,39018),typeof n=="string"){let t=0;const e=no.exec(n);if(ft(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ae(n){return typeof n=="string"?H.fromBase64String(n):H.fromUint8Array(n)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,t){const e={typeString:n};return t&&(e.value=t),e}function Gt(n,t){if(!Ir(n))throw new E(_.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0,o=t[r].optional;if(!(r in n)){if(o)continue;e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&u!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new E(_.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=-62135596800,Cn=1e6;class D{static now(){return D.fromMillis(Date.now())}static fromDate(t){return D.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Cn);return new D(e,r)}static fromInstant(t){if(!t||typeof t.ht!="bigint")throw new E(_.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return D._fromEpochNanoseconds(t.ht)}static _fromEpochNanoseconds(t){let e,r;if(t>=0n)e=Number(t/1000000000n),r=Number(t%1000000000n);else{const s=t%1000000000n;s===0n?(e=Number(t/1000000000n),r=0):(e=Number(t/1000000000n-1n),r=Number(s+1000000000n))}return new D(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Pn)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cn}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(_.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:D._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Gt(t,D._jsonSchema))return new D(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Pn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}D._jsonSchemaVersion="firestore/timestamp/1.0",D._jsonSchema={type:z("string",D._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function ro(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{}).__type__)==null?void 0:r.stringValue)==="server_timestamp"}function Ar(n){const t=n.mapValue.fields.__previous_value__;return ro(t)?Ar(t):t}function Ut(n){const t=gt(n.mapValue.fields.__local_write_time__.timestampValue);return new D(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__type__",vr="__vector__",ce="value",so="server_timestamp",Vr="__min__",Ye="__max__",at="__regex__",le="pattern",ue="options",$t="__oid__",Ht="__int__",Vt="__decimal128__",mt="__request_timestamp__",fe="seconds",he="increment",we="__binary__",Jt={};var R,G;(G=R||(R={})).dt="regexValue",G.Et="bsonObjectIdValue",G.Vt="int32Value",G.Tt="decimal128Value",G.It="bsonTimestampValue",G.At="bsonBinaryValue",G.Rt="minKeyValue",G.Pt="maxKeyValue",G.yt="maxValue",G.bt="vectorValue",G.wt="serverTimestampValue",G.gt="regularMapValue";const On={[vr]:R.bt,[Ye]:R.yt,[so]:R.wt},Nr={[at]:R.dt,[$t]:R.Et,[Ht]:R.Vt,[Vt]:R.Tt,[mt]:R.It,[we]:R.At,[Vr]:R.Rt,[Ye]:R.Pt};function yt(n){if("nullValue"in n)return 0;if("booleanValue"in n)return 2;if("integerValue"in n||"doubleValue"in n)return 3;if("timestampValue"in n)return 4;if("stringValue"in n)return 7;if("bytesValue"in n)return 8;if("referenceValue"in n)return 9;if("geoPointValue"in n)return 11;if("arrayValue"in n)return 13;if(!("mapValue"in n))return C(28295,{value:n});switch(function(r){var o,u;if(!((o=r.mapValue)!=null&&o.fields))return R.gt;const s=r.mapValue.fields,i=(u=s[Tr])==null?void 0:u.stringValue;if(i&&On[i])return On[i];if(Lt(s)===1){const p=Object.keys(s);return Nr[p[0]]??R.gt}return R.gt}(n)){case R.wt:return 6;case R.yt:return 9007199254740991;case R.bt:return 14;case R.dt:return 12;case R.Et:return 10;case R.Vt:case R.Tt:return 3;case R.It:return 5;case R.At:return 8;case R.Rt:return 1;case R.Pt:return 16;default:return 15}}function de(n,t,e){if(n===t)return!0;const r=yt(n);if(r!==yt(t))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return n.booleanValue===t.booleanValue;case 6:return Ut(n).isEqual(Ut(t));case 4:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=gt(i.timestampValue),p=gt(o.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos}(n,t);case 7:return n.stringValue===t.stringValue;case 8:return function(i,o){return Dr(i,o)===0}(n,t);case 9:return n.referenceValue===t.referenceValue;case 11:return function(i,o){return $(i.geoPointValue.latitude)===$(o.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(o.geoPointValue.longitude)}(n,t);case 3:return function(i,o,u){if(_t(i)&&_t(o))return xr(i,o)===0;if("integerValue"in i&&"integerValue"in o||me(i)&&me(o))return jt(i)===jt(o);let p,g;return!("doubleValue"in i)||!("doubleValue"in o)?!1:(p=$(i.doubleValue),g=$(o.doubleValue),p===g?oe(p)===oe(g):!!(u===void 0||u.vt)&&isNaN(p)&&isNaN(g))}(n,t,e);case 13:return br(n.arrayValue.values||[],t.arrayValue.values||[],(s,i)=>de(s,i,e));case 14:case 15:return function(i,o,u){const p=i.mapValue.fields||{},g=o.mapValue.fields||{};if(Lt(p)!==Lt(g))return!1;for(const y in p)if(p.hasOwnProperty(y)&&(g[y]===void 0||!de(p[y],g[y],u)))return!1;return!0}(n,t,e);case 5:return Rr(n,t)===0;case 12:return Pr(n,t)===0;case 10:return Cr(n,t)===0;default:return C(52216,{left:n})}}function Bt(n,t){return(n.values||[]).find(e=>de(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=yt(n),r=yt(t);if(e!==r)return P(e,r);switch(e){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return P(n.booleanValue,t.booleanValue);case 3:return je(n,t);case 4:return kn(n.timestampValue,t.timestampValue);case 6:return kn(Ut(n),Ut(t));case 7:return Mt(n.stringValue,t.stringValue);case 8:return Dr(n,t);case 9:return function(i,o){const u=i.split("/"),p=o.split("/");for(let g=0;g<u.length&&g<p.length;g++){const y=P(u[g],p[g]);if(y!==0)return y}return P(u.length,p.length)}(n.referenceValue,t.referenceValue);case 11:return function(i,o){const u=P($(i.latitude),$(o.latitude));return u!==0?u:P($(i.longitude),$(o.longitude))}(n.geoPointValue,t.geoPointValue);case 13:return Mn(n.arrayValue,t.arrayValue);case 14:return function(i,o){var A,V,S,x;const u=i.fields||{},p=o.fields||{},g=(A=u[ce])==null?void 0:A.arrayValue,y=(V=p[ce])==null?void 0:V.arrayValue,b=P(((S=g==null?void 0:g.values)==null?void 0:S.length)||0,((x=y==null?void 0:y.values)==null?void 0:x.length)||0);return b!==0?b:Mn(g,y)}(n.mapValue,t.mapValue);case 15:return function(i,o){if(i===Jt&&o===Jt)return 0;if(i===Jt)return 1;if(o===Jt)return-1;const u=i.fields||{},p=Object.keys(u),g=o.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let b=0;b<p.length&&b<y.length;++b){const A=Mt(p[b],y[b]);if(A!==0)return A;const V=pe(u[p[b]],g[y[b]]);if(V!==0)return V}return P(p.length,y.length)}(n.mapValue,t.mapValue);case 5:return Rr(n,t);case 12:return Pr(n,t);case 10:return Cr(n,t);default:throw C(23264,{xt:e})}}function jt(n){let t;return t=me(n)?n.mapValue.fields[Ht].integerValue:n.integerValue||n.doubleValue,$(t)}function Sr(n){return n.mapValue.fields[Vt].stringValue}function je(n,t){if(_t(n)||_t(t))return xr(n,t);const e=jt(n),r=jt(t);return isNaN(e)?isNaN(r)?0:-1:isNaN(r)?1:P(e,r)}function xr(n,t){const e=Fn(n),r=Fn(t);return e.ot()&&r.ot()?0:e.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:e.compareTo(r)}function Fn(n){return _t(n)?I.fromString(Sr(n)):I.fromNumber(jt(n))}function kn(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return P(n,t);const e=gt(n),r=gt(t),s=P(e.seconds,r.seconds);return s!==0?s:P(e.nanos,r.nanos)}function Mn(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=pe(e[s],r[s]);if(i!==void 0&&i!==0)return i}return P(e.length,r.length)}function Rr(n,t){var u,p,g,y,b,A,V,S,x,v,J,Y;const e=(g=(p=(u=n.mapValue.fields)==null?void 0:u[mt].mapValue)==null?void 0:p.fields)==null?void 0:g[fe],r=(A=(b=(y=t.mapValue.fields)==null?void 0:y[mt].mapValue)==null?void 0:b.fields)==null?void 0:A[fe],s=(x=(S=(V=n.mapValue.fields)==null?void 0:V[mt].mapValue)==null?void 0:S.fields)==null?void 0:x[he],i=(Y=(J=(v=t.mapValue.fields)==null?void 0:v[mt].mapValue)==null?void 0:J.fields)==null?void 0:Y[he],o=je(e,r);return o!==0?o:je(s,i)}function Ln(n){var u;if("bytesValue"in n)return{subtype:0,bytes:ae(n.bytesValue)};const t=(u=n.mapValue)==null?void 0:u.fields,e=t==null?void 0:t[we],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");const s=ae(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],o=s.slice(1);return{subtype:i,bytes:H.fromUint8Array(o)}}function Dr(n,t){const e=Ln(n),r=Ln(t);return e.subtype!==r.subtype?e.subtype<r.subtype?-1:1:e.bytes.compareTo(r.bytes)}function Pr(n,t){var g,y,b,A,V,S,x,v,J,Y,it,ht,xt,tt,f,a;const e=n.mapValue.fields,r=((A=(b=(y=(g=e==null?void 0:e[at])==null?void 0:g.mapValue)==null?void 0:y.fields)==null?void 0:b[le])==null?void 0:A.stringValue)??"",s=((v=(x=(S=(V=e==null?void 0:e[at])==null?void 0:V.mapValue)==null?void 0:S.fields)==null?void 0:x[ue])==null?void 0:v.stringValue)??"",i=t.mapValue.fields,o=((ht=(it=(Y=(J=i==null?void 0:i[at])==null?void 0:J.mapValue)==null?void 0:Y.fields)==null?void 0:it[le])==null?void 0:ht.stringValue)??"",u=((a=(f=(tt=(xt=i==null?void 0:i[at])==null?void 0:xt.mapValue)==null?void 0:tt.fields)==null?void 0:f[ue])==null?void 0:a.stringValue)??"",p=Mt(r,o);return p!==0?p:P(s,u)}function Cr(n,t){var e,r,s,i;return Mt(((r=(e=n.mapValue.fields)==null?void 0:e[$t])==null?void 0:r.stringValue)??"",((i=(s=t.mapValue.fields)==null?void 0:s[$t])==null?void 0:i.stringValue)??"")}function Un(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function _t(n){var e;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return Lt(t)===1&&t[Vt]&&!!t[Vt].stringValue}function me(n){var e,r;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return Lt(t)===1&&((r=t[Ht])==null?void 0:r.integerValue)!==void 0}function Or(n){return!!n&&"arrayValue"in n}function $n(n){return!!n&&"nullValue"in n}function Bn(n){return!(!function(e){return!!e&&"doubleValue"in e}(n)||!isNaN(Number(n.doubleValue)))||!(!_t(n)||Sr(n)!=="NaN")}function Oe(n){return!!n&&"mapValue"in n}function Dt(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Dt(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Dt(n.arrayValue.values[e]);return t}return{...n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Set(Object.values(Nr));class jn{constructor(t,e){this.position=t,this.inclusive=e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{}class K extends Fr{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new io(t,e,r):e==="array-contains"?new co(t,r):e==="in"?new lo(t,r):e==="not-in"?new uo(t,r):e==="array-contains-any"?new fo(t,r):new K(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new oo(t,r):new ao(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(pe(e,this.value)):e!==null&&yt(this.value)===yt(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Fr{constructor(t,e){super(),this.filters=t,this.op=e,this.Dt=null}static create(t,e){return new Wt(t,e)}matches(t){return function(r){return r.op==="and"}(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Dt!==null||(this.Dt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Dt}getFilters(){return Object.assign([],this.filters)}}class io extends K{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class oo extends K{constructor(t,e){super(t,"in",e),this.keys=kr("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ao extends K{constructor(t,e){super(t,"not-in",e),this.keys=kr("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kr(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class co extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Or(e)&&Bt(e.arrayValue,this.value)}}class lo extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Bt(this.value.arrayValue,e)}}class uo extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(Bt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Bt(this.value.arrayValue,e)}}class fo extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Or(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Bt(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new D(0,0))}static max(){return new B(new D(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e){this.comparator=t,this.root=e||U.EMPTY}insert(t,e){return new ye(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new ye(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yt(this.root,t,this.comparator,!0)}}class Yt{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??U.RED,this.left=s??U.EMPTY,this.right=i??U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new U(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return U.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw C(27949);return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new U(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.comparator=t,this.data=new ye(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qn(this.data.getIterator())}getIteratorFrom(t){return new qn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class qn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new zt([])}unionWith(t){let e=new qt(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return br(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.value=t}static empty(){return new Z({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Oe(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dt(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((o,u)=>{if(!e.isImmediateParentOf(u)){const p=this.getFieldsMap(e);this.applyChanges(p,r,s),r={},s=[],e=u.popLast()}o?r[u.lastSegment()]=Dt(o):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Oe(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return de(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Oe(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ie(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Z(Dt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e,r,s,i,o,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(t){return new ot(t,0,B.min(),B.min(),B.min(),Z.empty(),0)}static newFoundDocument(t,e,r,s){return new ot(t,1,e,B.min(),r,s,0)}static newNoDocument(t,e){return new ot(t,2,e,B.min(),B.min(),Z.empty(),0)}static newUnknownDocument(t,e){return new ot(t,3,e,B.min(),B.min(),Z.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Z.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Z.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e=null,r=[],s=[],i=null,o=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Nt=null}}function zn(n,t=null,e=[],r=[],s=null,i=null,o=null){return new ho(n,t,e,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e=null,r=[],s=[],i=null,o="F",u=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=p,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}function po(n){return n.collectionGroup!==null}function mo(n){const t=be(n);if(t.St===null){t.St=[];const e=new Set;for(const i of t.explicitOrderBy)t.St.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new qt(lt.comparator);return o.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(u=u.add(g.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.St.push(new ge(i,r))}),e.has(lt.keyField().canonicalString())||t.St.push(new ge(lt.keyField(),r))}return t.St}function go(n){const t=be(n);return t.Ct||(t.Ct=yo(t,mo(n))),t.Ct}function yo(n,t){if(n.limitType==="F")return zn(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ge(s.field,i)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return zn(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function qe(n,t){const e=n.filters.concat([t]);return new Xe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oe(t)?"-0":t}}function Qt(n){return{integerValue:""+n}}function _o(n,t,e){return function(s){return typeof s=="number"&&Number.isInteger(s)&&!oe(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}(t)?Qt(t):Mr(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this._=void 0}}class Lr extends Ae{}class bo extends Ae{constructor(t){super(),this.elements=t}}class Eo extends Ae{constructor(t){super(),this.elements=t}}class Ze extends Ae{constructor(t,e){super(),this.serializer=t,this.Qt=e}}class Io extends Ze{}class wo extends Ze{}class Ao extends Ze{}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e){this.field=t,this.transform=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Te{}class Ur extends Te{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends Te{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class vo extends Te{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vo extends Te{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No={asc:"ASCENDING",desc:"DESCENDING"},So={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xo={and:"AND",or:"OR"};class Ro{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function te(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gn(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Do(n,t){return te(n,t.toTimestamp())}function Hn(n){return ft(!!n,49232),B.fromTimestamp(function(e){const r=gt(e);return new D(r.seconds,r.nanos)}(n))}function Qe(n,t){return ze(n,t).canonicalString()}function ze(n,t){const e=function(s){return new O(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ge(n,t){return Qe(n.databaseId,t.path)}function Po(n,t){const e=function(s){const i=O.fromString(s);return ft(jr(i),10190,{key:i.toString()}),i}(t);if(e.get(1)!==n.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(function(s){return ft(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}(e))}function Wn(n,t,e){return{name:Ge(n,t),fields:e.value.mapValue.fields}}function Co(n,t){let e;if(t instanceof Ur)e={update:Wn(n,t.key,t.value)};else if(t instanceof vo)e={delete:Ge(n,t.key)};else if(t instanceof $r)e={update:Wn(n,t.key,t.data),updateMask:Lo(t.fieldMask)};else{if(!(t instanceof Vo))return C(16599,{Ot:t.type});e={verify:Ge(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof Lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Io)return{fieldPath:o.field.canonicalString(),increment:u.Qt};if(u instanceof wo)return{fieldPath:o.field.canonicalString(),minimum:u.Qt};if(u instanceof Ao)return{fieldPath:o.field.canonicalString(),maximum:u.Qt};throw C(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Do(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:C(27497)}(n,t.precondition)),e}function Oo(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=function(g,y){return Qe(g.databaseId,y)}(n,s);const i=function(g){if(g.length!==0)return Br(Wt.create(g,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(g){if(g.length!==0)return g.map(y=>function(A){return{field:It(A.field),direction:Fo(A.dir)}}(y))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const u=function(g,y){return g.useProto3Json||Xi(y)?y:{value:y}}(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{Mt:e,parent:s}}function Fo(n){return No[n]}function ko(n){return So[n]}function Mo(n){return xo[n]}function It(n){return{fieldPath:n.canonicalString()}}function Br(n){return n instanceof K?function(e){if(e.op==="=="){if(Bn(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NAN"}};if($n(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bn(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NOT_NAN"}};if($n(e.value))return{unaryFilter:{field:It(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:It(e.field),op:ko(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(s=>Br(s));return r.length===1?r[0]:{compositeFilter:{op:Mo(e.op),filters:r}}}(n):C(54877,{filter:n})}function Lo(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function jr(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function qr(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){return new Ro(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{}class $o extends Uo{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.qt=!1}Lt(){if(this.qt)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,e,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.le(t,ze(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(_.UNKNOWN,i.toString())})}me(t,e,r,s,i){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.me(t,ze(e,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(_.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}}async function Bo(n,t){const e=be(n),r={writes:t.map(s=>Co(e.serializer,s))};await e.le("Commit",e.serializer.databaseId,O.emptyPath(),r)}async function jo(n,t){const e=be(n),{Mt:r,parent:s}=Oo(e.serializer,go(t));return(await e.me("RunQuery",e.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(u,p,g){const y=Po(u,p.name),b=Hn(p.updateTime),A=p.createTime?Hn(p.createTime):B.min(),V=new Z({mapValue:{fields:p.fields}}),S=ot.newFoundDocument(y,b,A,V);return g?S.setHasCommittedMutations():S}(e.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="ComponentProvider",Ct=new Map;function Gr(n){if(n._terminated)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.");if(!Ct.has(n)){ie(zr,"Initializing Datastore");const t=function(i){return new to(i)}(function(i,o,u,p,g){return new qi(i,o,u,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,wr(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator,p,g._customHeaders,g.grpcFlowControlWindow)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n.app.options.apiKey,n._freezeSettings())),e=tn(n._databaseId),r=function(i,o,u,p){return new $o(i,o,u,p)}(n._authCredentials,n._appCheckCredentials,t,e);Ct.set(n,r)}return Ct.get(n)}const qo=1048576,Hr="firestore.googleapis.com",Kn=!0;class Jn{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hr,this.ssl=Kn}else this.host=t.host,this.ssl=t.ssl??Kn;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<qo)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if(function(r,s,i,o){if(s===!0&&o===!0)throw new E(_.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wr(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new E(_.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const u of i)if(r[u]!==s[u])return!1;return!0}(this._customHeaders,t._customHeaders)}}class ve{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jn({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jn(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mi;switch(r.type){case"firstParty":return new Bi(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ct.get(e);r&&(ie(zr,"Removing Datastore"),Ct.delete(e),r.terminate())}(this),Promise.resolve()}}function zo(n,t){const e=typeof n=="object"?n:Ai(),r=typeof n=="string"?n:"(default)",s=_i(e,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=ds("firestore");i&&Go(s,...i)}return s}function Go(n,t,e,r={}){var g;n=Je(n,ve);const s=cr(t),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&Es(`https://${u}`),i.host!==Hr&&i.host!==u&&gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...i,host:u,ssl:s,emulatorOptions:r};if(!ne(p,o)&&(n._setSettings(p),r.mockUserToken)){let y,b;if(typeof r.mockUserToken=="string")y=r.mockUserToken,b=j.MOCK_USER;else{y=ms(r.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new j(A)}n._authCredentials=new Li(new _r(y,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new bt(this.firestore,t,this._query)}}class F{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new F(this.firestore,t,this._key)}toJSON(){return{type:F._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Gt(e,F._jsonSchema))return new F(t,r||null,new M(O.fromString(e.referencePath)))}}F._jsonSchemaVersion="firestore/documentReference/1.0",F._jsonSchema={type:z("string",F._jsonSchemaVersion),referencePath:z("string")};class ut extends bt{constructor(t,e,r){super(t,e,function(i){return new Xe(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new F(this.firestore,null,new M(t))}withConverter(t){return new ut(this.firestore,t,this._path)}}function Ho(n,t,...e){if(n=Tt(n),Er("collection","path",t),n instanceof ve){const r=O.fromString(t,...e);return xn(r),new ut(n,null,r)}{if(!(n instanceof F||n instanceof ut))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return xn(r),new ut(n.firestore,null,r)}}function Yn(n,t,...e){if(n=Tt(n),arguments.length===1&&(t=Hi.newId()),Er("doc","path",t),n instanceof ve){const r=O.fromString(t,...e);return Sn(r),new F(n,null,new M(r))}{if(!(n instanceof F||n instanceof ut))throw new E(_.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return Sn(r),new F(n.firestore,n instanceof ut?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e=0){if(this.subtype=e,!Number.isInteger(e)||e<0||e>255)throw new E(_.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=t}static fromBase64String(t,e=0){try{return new q(H.fromBase64String(t),e)}catch(r){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t,e=0){return new q(H.fromUint8Array(t),e)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(t){return this.subtype===t.subtype&&this._byteString.isEqual(t._byteString)}toJSON(){const t={type:q._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(t.subtype=this.subtype),t}static fromJSON(t){if(Gt(t,q._jsonSchema)){const e=t.subtype??0;return q.fromBase64String(t.bytes,e)}}}q._jsonSchemaVersion="firestore/bytes/1.0",q._jsonSchema={type:z("string",q._jsonSchemaVersion),bytes:z("string"),subtype:{...z("number"),optional:!0}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){if(this.seconds=t,this.increment=e,!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(t){return this.seconds===t.seconds&&this.increment===t.increment}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.stringValue=t,this.value=I.fromString(t)}isEqual(t){return!(!this.value.ot()||!t.value.ot())||this.value.compareTo(t.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Q._jsonSchemaVersion}}static fromJSON(t){if(Gt(t,Q._jsonSchema))return new Q(t.latitude,t.longitude)}}Q._jsonSchemaVersion="firestore/geoPoint/1.0",Q._jsonSchema={type:z("string",Q._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.type="MaxKey"}static instance(){return nt.MAX_KEY_VALUE_INSTANCE||(nt.MAX_KEY_VALUE_INSTANCE=new nt),nt.MAX_KEY_VALUE_INSTANCE}}nt.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.type="MinKey"}static instance(){return rt.MIN_KEY_VALUE_INSTANCE||(rt.MIN_KEY_VALUE_INSTANCE=new rt),rt.MIN_KEY_VALUE_INSTANCE}}rt.MIN_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e){this.pattern=t,this.options=e}isEqual(t){return this.pattern===t.pattern&&this.options===t.options}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:W._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Gt(t,W._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new W(t.vectorValues);throw new E(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}W._jsonSchemaVersion="firestore/vectorValue/1.0",W._jsonSchema={type:z("string",W._jsonSchemaVersion),vectorValues:z("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=/^__.*__$/;class Ko{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new $r(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ur(t,this.data,e,this.fieldTransforms)}}function Kr(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{dataSource:n})}}class cn{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new cn({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return _e(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Kr(this.dataSource)&&Wo.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Jo{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||tn(t)}createContext(t,e,r,s=!1){return new cn({dataSource:t,methodName:e,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jr(n){const t=n._freezeSettings(),e=tn(n._databaseId);return new Jo(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yo(n,t,e,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,t,e,s);Qr("Data must be an object, but it was:",o,r);const u=Yr(r,o);let p,g;if(i.merge)p=new zt(o.fieldMask),g=o.fieldTransforms;else if(i.mergeFields){const y=[];for(const b of i.mergeFields){const A=Ve(t,b,e);if(!o.contains(A))throw new E(_.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);ta(y,A)||y.push(A)}p=new zt(y),g=o.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=o.fieldTransforms;return new Ko(new Z(u),p,g)}class ln extends sn{_toFieldTransform(t){return new To(t.path,new Lr)}isEqual(t){return t instanceof ln}}function Xo(n,t,e,r=!1){return un(e,n.createContext(r?4:3,t))}function un(n,t,e){if(Zr(n=Tt(n)))return Qr("Unsupported field value:",t,n),Yr(n,t);if(n instanceof sn)return function(s,i){if(!Kr(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(s,i){const o=[];let u=0;for(const p of s){let g=un(p,i.childContextForArray(u));g==null&&(g={nullValue:"NULL_VALUE"}),o.push(g),u++}return{arrayValue:{values:o}}}(n,t)}return function(s,i,o){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return _o(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=D.fromDate(s);return{timestampValue:te(i.serializer,u)}}if(s instanceof D){const u=new D(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:te(i.serializer,u)}}if(Xr(s)){const u=D.fromInstant(s),p=new D(u.seconds,1e3*Math.floor(u.nanoseconds/1e3));return{timestampValue:te(i.serializer,p)}}if(s instanceof Q)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof q)return s.subtype===0?{bytesValue:Gn(i.serializer,s._byteString)}:function(p,g){const y=g.toUint8Array(),b=new Uint8Array(y.length+1);return b[0]=g.subtype,b.set(y,1),{mapValue:{fields:{[we]:{bytesValue:Gn(p,H.fromUint8Array(b))}}}}}(i.serializer,s);if(s instanceof F){const u=i.databaseId,p=s.firestore._databaseId;if(!p.isEqual(u))throw i.createError(`Document reference is for database ${p.projectId}/${p.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Qe(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof W)return function(p,g){const y=p instanceof W?p.toArray():p;return{mapValue:{fields:{[Tr]:{stringValue:vr},[ce]:{arrayValue:{values:y.map(A=>{if(typeof A!="number")throw g.createError("VectorValues must only contain numeric values.");return Mr(g.serializer,A)})}}}}}}(s,i);if(s instanceof an)return function(p){return{mapValue:{fields:{[at]:{mapValue:{fields:{[le]:{stringValue:p.pattern},[ue]:{stringValue:p.options}}}}}}}}(s);if(s instanceof en)return function(p){return{mapValue:{fields:{[$t]:{stringValue:p.value}}}}}(s);if(s instanceof on)return function(p){return{mapValue:{fields:{[Ht]:Qt(p.value)}}}}(s);if(s instanceof rn)return function(p){return{mapValue:{fields:{[Vt]:{stringValue:p.stringValue}}}}}(s);if(s instanceof nn)return function(p){return{mapValue:{fields:{[mt]:{mapValue:{fields:{[fe]:Qt(p.seconds),[he]:Qt(p.increment)}}}}}}}(s);if(s instanceof rt)return function(){return{mapValue:{fields:{[Vr]:{nullValue:"NULL_VALUE"}}}}}();if(s instanceof nt)return function(){return{mapValue:{fields:{[Ye]:{nullValue:"NULL_VALUE"}}}}}();if(qr(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Ee(s)}`)}(n,t)}function Yr(n,t){const e={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(r,s)=>{const i=un(s,t.childContextForField(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Xr(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const t=n;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.ht=="bigint"}function Zr(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof D||n instanceof Q||n instanceof q||n instanceof F||n instanceof sn||n instanceof W||n instanceof rt||n instanceof nt||n instanceof on||n instanceof rn||n instanceof an||n instanceof en||n instanceof nn||Xr(n)||qr(n))}function Qr(n,t,e){if(!Zr(e)||!Ir(e)){const r=Ee(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Ve(n,t,e){if((t=Tt(t))instanceof Wr)return t._internalPath;if(typeof t=="string")return Qo(n,t);throw _e("Field path arguments must be of type string or ",n,!1,void 0,e)}const Zo=new RegExp("[~\\*/\\[\\]]");function Qo(n,t,e){if(t.search(Zo)>=0)throw _e(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Wr(...t.split("."))._internalPath}catch{throw _e(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _e(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let p="";return(i||o)&&(p+=" (found",i&&(p+=` in field ${r}`),o&&(p+=` in document ${s}`),p+=")"),new E(_.INVALID_ARGUMENT,u+n+p)}function ta(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new F(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ts(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Ve("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ts extends ea{data(){return super.data()}}class na{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{}class es extends fn{}function ra(n,t,...e){let r=[];t instanceof fn&&r.push(t),r=r.concat(e),function(i){const o=i.filter(p=>p instanceof hn).length,u=i.filter(p=>p instanceof Ne).length;if(o>1||o>0&&u>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ne extends es{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ne(t,e,r)}_apply(t){const e=this._parse(t);return ns(t._query,e),new bt(t.firestore,t.converter,qe(t._query,e))}_parse(t){const e=Jr(t.firestore);return function(i,o,u,p,g,y,b){let A;if(function(x,v){if(typeof x=="number"&&isNaN(x)&&v!=="=="&&v!=="!="&&v!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(x===null&&v!=="=="&&v!=="!="&&v!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")}(b,y),g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Zn(b,y);const S=[];for(const x of b)S.push(Xn(p,i,x));A={arrayValue:{values:S}}}else A=Xn(p,i,b)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Zn(b,y),A=Xo(u,o,b,y==="in"||y==="not-in");return K.create(g,y,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function sa(n,t,e){const r=t,s=Ve("where",n);return Ne._create(s,r,e)}class hn extends fn{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hn(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Wt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let o=s;const u=i.getFlattenedFilters();for(const p of u)ns(o,p),o=qe(o,p)}(t._query,e),new bt(t.firestore,t.converter,qe(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dn extends es{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new dn(t,e)}_apply(t){const e=function(s,i,o){if(s.startAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ge(i,o)}(t._query,this._field,this._direction);return new bt(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Xe(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function ia(n,t="asc"){const e=t,r=Ve("orderBy",n);return dn._create(r,e)}function Xn(n,t,e){if(typeof(e=Tt(e))=="string"){if(e==="")throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!po(t)&&e.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(O.fromString(e));if(!M.isDocumentKey(r))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Un(n,new M(r))}if(e instanceof F)return Un(n,e._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ee(e)}.`)}function Zn(n,t){if(!Array.isArray(n)||n.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ns(n,t){const e=function(s,i){for(const o of s)for(const u of o.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class oa{convertValue(t,e="none"){switch(yt(t)){case 0:return null;case 2:return t.booleanValue;case 3:if("mapValue"in t){if(me(t))return this.convertToInt32Value(t.mapValue);if(_t(t))return this.convertToDecimal128Value(t.mapValue)}return $(t.integerValue||t.doubleValue);case 4:return this.convertTimestamp(t.timestampValue);case 6:return this.convertServerTimestamp(t,e);case 7:return t.stringValue;case 8:return"bytesValue"in t?this.convertBytes(ae(t.bytesValue)):this.convertToBytesWithSubtype(t.mapValue);case 9:return this.convertReference(t.referenceValue);case 11:return this.convertGeoPoint(t.geoPointValue);case 13:return this.convertArray(t.arrayValue,e);case 15:return this.convertObject(t.mapValue,e);case 14:return this.convertVectorValue(t.mapValue);case 12:return this.convertToRegexValue(t.mapValue);case 10:return this.convertToBsonObjectId(t.mapValue);case 5:return this.convertToBsonTimestamp(t.mapValue);case 16:return nt.instance();case 1:return rt.instance();default:throw C(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ie(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[ce].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>$(o.doubleValue));return new W(e)}convertToBsonObjectId(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[$t])==null?void 0:s.stringValue)??"";return new en(e)}convertToBytesWithSubtype(t){var u;const e=(u=t.fields)==null?void 0:u[we],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=ae(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=s[0],o=s.slice(1);return new q(H.fromUint8Array(o),i)}convertToBsonTimestamp(t){var i,o,u,p,g,y,b;const e=(i=t.fields)==null?void 0:i[mt],r=Number((p=(u=(o=e==null?void 0:e.mapValue)==null?void 0:o.fields)==null?void 0:u[fe])==null?void 0:p.integerValue),s=Number((b=(y=(g=e==null?void 0:e.mapValue)==null?void 0:g.fields)==null?void 0:y[he])==null?void 0:b.integerValue);return new nn(r,s)}convertToRegexValue(t){var s,i,o,u,p,g,y,b,A,V;const e=((p=(u=(o=(i=(s=t.fields)==null?void 0:s[at])==null?void 0:i.mapValue)==null?void 0:o.fields)==null?void 0:u[le])==null?void 0:p.stringValue)??"",r=((V=(A=(b=(y=(g=t.fields)==null?void 0:g[at])==null?void 0:y.mapValue)==null?void 0:b.fields)==null?void 0:A[ue])==null?void 0:V.stringValue)??"";return new an(e,r)}convertToInt32Value(t){var r,s;const e=Number((s=(r=t.fields)==null?void 0:r[Ht])==null?void 0:s.integerValue);return new on(e)}convertToDecimal128Value(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[Vt])==null?void 0:s.stringValue)??"";return new rn(e)}convertGeoPoint(t){return new Q($(t.latitude),$(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ut(t));default:return null}}convertTimestamp(t){const e=gt(t);return new D(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=O.fromString(t);ft(jr(r),9688,{name:t});const s=new kt(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(e)||We(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class ca extends oa{constructor(t){super(),this.firestore=t}convertBytes(t){return new q(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new F(this.firestore,null,e)}}function la(n){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Je(n,bt))._query);const t=Gr(n.firestore),e=new ca(n.firestore);return jo(t,n._query).then(r=>{const s=r.map(i=>new ts(n.firestore,e,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new na(n,s)})}function Qn(n,t,e){const r=aa((n=Je(n,F)).converter,t),s=Yo(Jr(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return Bo(Gr(n.firestore),[s.toMutation(n._key,Pt.none())])}function tr(){return new ln("serverTimestamp")}const er="4.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){ki(`${wi}_lite`),se(new Ot("firestore/lite",(t,{instanceIdentifier:e,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new ve(new Ui(t.getProvider("auth-internal")),new ji(s,t.getProvider("app-check-internal")),zi(s,e),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),At("firestore-lite",er,""),At("firestore-lite",er,"esm2020")})();const nr={p:"profiles",r:"rounds",c:"courses"};function fa(n){const t=zo(hr(n));return{async push(e,r,s){await Qn(Yn(t,nr[e],r),{...s,syncedAt:tr()})},async pull(e,r){return(await la(ra(Ho(t,nr[e]),sa("syncedAt",">",D.fromMillis(r)),ia("syncedAt")))).docs.map(i=>{var u;const o=i.data();return{id:i.id,data:o,syncedAt:((u=o.syncedAt)==null?void 0:u.toMillis())??r}})},async join(e,r){await Qn(Yn(t,"gate",e,"joins",r),{at:tr()})}}}export{fa as connect};
