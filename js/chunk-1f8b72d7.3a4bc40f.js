(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8b72d7"],{"04f8":function(e,t,r){"use strict";var n=r("2d00"),i=r("d039"),o=r("da84"),a=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"06cf":function(e,t,r){"use strict";var n=r("83ab"),i=r("c65b"),o=r("d1e7"),a=r("5c6c"),s=r("fc6a"),u=r("a04b"),c=r("1a2d"),f=r("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=n?l:function(e,t){if(e=s(e),t=u(t),f)try{return l(e,t)}catch(r){}if(c(e,t))return a(!i(o.f,e,t),e[t])}},"07fa":function(e,t,r){"use strict";var n=r("50c4");e.exports=function(e){return n(e.length)}},"0cfb":function(e,t,r){"use strict";var n=r("83ab"),i=r("d039"),o=r("cc12");e.exports=!n&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,r){"use strict";var n=String;e.exports=function(e){try{return n(e)}catch(t){return"Object"}}},"13d2":function(e,t,r){"use strict";var n=r("e330"),i=r("d039"),o=r("1626"),a=r("1a2d"),s=r("83ab"),u=r("5e77").CONFIGURABLE,c=r("8925"),f=r("69f3"),l=f.enforce,d=f.get,h=String,p=Object.defineProperty,b=n("".slice),y=n("".replace),v=n([].join),m=s&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),g=String(String).split("String"),w=e.exports=function(e,t,r){"Symbol("===b(h(t),0,7)&&(t="["+y(h(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!a(e,"name")||u&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),m&&r&&a(r,"arity")&&e.length!==r.arity&&p(e,"length",{value:r.arity});try{r&&a(r,"constructor")&&r.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var n=l(e);return a(n,"source")||(n.source=v(g,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&d(this).source||c(this)}),"toString")},"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,o=r("a640"),a=r("2d00"),s=r("605d"),u=!s&&a>79&&a<83,c=u||!o("reduce");n({target:"Array",proto:!0,forced:c},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},"14d9":function(e,t,r){"use strict";var n=r("23e7"),i=r("7b0b"),o=r("07fa"),a=r("3a34"),s=r("3511"),u=r("d039"),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},l=c||!f();n({target:"Array",proto:!0,arity:1,forced:l},{push:function(e){var t=i(this),r=o(t),n=arguments.length;s(r+n);for(var u=0;u<n;u++)t[r]=arguments[u],r++;return a(t,r),r}})},1626:function(e,t,r){"use strict";var n=r("8ea1"),i=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},"1a2d":function(e,t,r){"use strict";var n=r("e330"),i=r("7b0b"),o=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1d80":function(e,t,r){"use strict";var n=r("7234"),i=TypeError;e.exports=function(e){if(n(e))throw i("Can't call method on "+e);return e}},"23cb":function(e,t,r){"use strict";var n=r("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var r=n(e);return r<0?i(r+t,0):o(r,t)}},"23e7":function(e,t,r){"use strict";var n=r("da84"),i=r("06cf").f,o=r("9112"),a=r("cb2d"),s=r("6374"),u=r("e893"),c=r("94ca");e.exports=function(e,t){var r,f,l,d,h,p,b=e.target,y=e.global,v=e.stat;if(f=y?n:v?n[b]||s(b,{}):(n[b]||{}).prototype,f)for(l in t){if(h=t[l],e.dontCallGetSet?(p=i(f,l),d=p&&p.value):d=f[l],r=c(y?l:b+(v?".":"#")+l,e.forced),!r&&void 0!==d){if(typeof h==typeof d)continue;u(h,d)}(e.sham||d&&d.sham)&&o(h,"sham",!0),a(f,l,h,e)}}},"241c":function(e,t,r){"use strict";var n=r("ca84"),i=r("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},"2d00":function(e,t,r){"use strict";var n,i,o=r("da84"),a=r("342f"),s=o.process,u=o.Deno,c=s&&s.versions||u&&u.version,f=c&&c.v8;f&&(n=f.split("."),i=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(i=+n[1]))),e.exports=i},"342f":function(e,t,r){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3511:function(e,t,r){"use strict";var n=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw n("Maximum allowed index exceeded");return e}},"3a34":function(e,t,r){"use strict";var n=r("83ab"),i=r("e8b5"),o=TypeError,a=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(i(e)&&!a(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"3a9b":function(e,t,r){"use strict";var n=r("e330");e.exports=n({}.isPrototypeOf)},"40d5":function(e,t,r){"use strict";var n=r("d039");e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"44ad":function(e,t,r){"use strict";var n=r("e330"),i=r("d039"),o=r("c6b6"),a=Object,s=n("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?s(e,""):a(e)}:a},4661:function(e,t,r){"use strict";r("7755")},"485a":function(e,t,r){"use strict";var n=r("c65b"),i=r("1626"),o=r("861d"),a=TypeError;e.exports=function(e,t){var r,s;if("string"===t&&i(r=e.toString)&&!o(s=n(r,e)))return s;if(i(r=e.valueOf)&&!o(s=n(r,e)))return s;if("string"!==t&&i(r=e.toString)&&!o(s=n(r,e)))return s;throw a("Can't convert object to primitive value")}},"4d64":function(e,t,r){"use strict";var n=r("fc6a"),i=r("23cb"),o=r("07fa"),a=function(e){return function(t,r,a){var s,u=n(t),c=o(u),f=i(a,c);if(e&&r!==r){while(c>f)if(s=u[f++],s!==s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(e,t,r){"use strict";var n=r("5926"),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},5692:function(e,t,r){"use strict";var n=r("c430"),i=r("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,r){"use strict";var n=r("d066"),i=r("e330"),o=r("241c"),a=r("7418"),s=r("825ae"),u=i([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(s(e)),r=a.f;return r?u(t,r(e)):t}},5926:function(e,t,r){"use strict";var n=r("b42e");e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},"59ed":function(e,t,r){"use strict";var n=r("1626"),i=r("0d51"),o=TypeError;e.exports=function(e){if(n(e))return e;throw o(i(e)+" is not a function")}},"5c6c":function(e,t,r){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,r){"use strict";var n=r("83ab"),i=r("1a2d"),o=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,s=i(o,"name"),u=s&&"something"===function(){}.name,c=s&&(!n||n&&a(o,"name").configurable);e.exports={EXISTS:s,PROPER:u,CONFIGURABLE:c}},"605d":function(e,t,r){"use strict";var n=r("da84"),i=r("c6b6");e.exports="process"===i(n.process)},6374:function(e,t,r){"use strict";var n=r("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},"69f3":function(e,t,r){"use strict";var n,i,o,a=r("cdce"),s=r("da84"),u=r("861d"),c=r("9112"),f=r("1a2d"),l=r("c6cd"),d=r("f772"),h=r("d012"),p="Object already initialized",b=s.TypeError,y=s.WeakMap,v=function(e){return o(e)?i(e):n(e,{})},m=function(e){return function(t){var r;if(!u(t)||(r=i(t)).type!==e)throw b("Incompatible receiver, "+e+" required");return r}};if(a||l.state){var g=l.state||(l.state=new y);g.get=g.get,g.has=g.has,g.set=g.set,n=function(e,t){if(g.has(e))throw b(p);return t.facade=e,g.set(e,t),t},i=function(e){return g.get(e)||{}},o=function(e){return g.has(e)}}else{var w=d("state");h[w]=!0,n=function(e,t){if(f(e,w))throw b(p);return t.facade=e,c(e,w,t),t},i=function(e){return f(e,w)?e[w]:{}},o=function(e){return f(e,w)}}e.exports={set:n,get:i,has:o,enforce:v,getterFor:m}},"6e9e":function(e,t,r){"use strict";r("14d9"),r("13d5");const n=1,i={async getBlockAverageTime(e,t){const r=[],n=await e.eth.getBlockNumber(),i=await e.eth.getBlock(n-t);let o=i.timestamp;for(let a=n-t+1;a<=n;a++){const t=await e.eth.getBlock(a);let n=t.timestamp-o;o=t.timestamp,r.push(n)}return Math.round(r.reduce((e,t)=>e+t)/r.length)},network(){return{method:"wallet_switchEthereumChain",params:[{chainId:"0x"+Number(n).toString(16)}]}},masterNetId(){return n},chainName(e){return 1===e?"Mainnet":3===e?"Ropsten":4===e?"Rinkeby":5===e?"Goerli":10===e?"Optimism":42===e?"Kovan":56===e?"Binance Smart Chain":61===e?"Ethereum Classic":62===e?"Morden":137===e?"Polygon":"Unknown"},switchNetwork(){return new Promise((e,t)=>{window.ethereum.request(this.network()).then(()=>{e(this.masterNetId())}).catch(e=>t(e))})},signMessage(e,t,r){return new Promise((n,i)=>{window.ethereum.request({method:"personal_sign",params:[e,t,r]}).then(e=>{n(e)}).catch(e=>i(e))})}};t["a"]=i},7234:function(e,t,r){"use strict";e.exports=function(e){return null===e||void 0===e}},7418:function(e,t,r){"use strict";t.f=Object.getOwnPropertySymbols},7755:function(e,t,r){},7839:function(e,t,r){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,t,r){"use strict";var n=r("1d80"),i=Object;e.exports=function(e){return i(n(e))}},"825ae":function(e,t,r){"use strict";var n=r("861d"),i=String,o=TypeError;e.exports=function(e){if(n(e))return e;throw o(i(e)+" is not an object")}},"83ab":function(e,t,r){"use strict";var n=r("d039");e.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,r){"use strict";var n=r("1626"),i=r("8ea1"),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===o}:function(e){return"object"==typeof e?null!==e:n(e)}},8925:function(e,t,r){"use strict";var n=r("e330"),i=r("1626"),o=r("c6cd"),a=n(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return a(e)}),e.exports=o.inspectSource},"8ea1":function(e,t,r){"use strict";var n="object"==typeof document&&document.all,i="undefined"==typeof n&&void 0!==n;e.exports={all:n,IS_HTMLDDA:i}},"90e3":function(e,t,r){"use strict";var n=r("e330"),i=0,o=Math.random(),a=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++i+o,36)}},9112:function(e,t,r){"use strict";var n=r("83ab"),i=r("9bf2"),o=r("5c6c");e.exports=n?function(e,t,r){return i.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},"94ca":function(e,t,r){"use strict";var n=r("d039"),i=r("1626"),o=/#|\.prototype\./,a=function(e,t){var r=u[s(e)];return r===f||r!==c&&(i(t)?n(t):!!t)},s=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",f=a.POLYFILL="P";e.exports=a},"9bf2":function(e,t,r){"use strict";var n=r("83ab"),i=r("0cfb"),o=r("aed9"),a=r("825ae"),s=r("a04b"),u=TypeError,c=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",d="configurable",h="writable";t.f=n?o?function(e,t,r){if(a(e),t=s(t),a(r),"function"===typeof e&&"prototype"===t&&"value"in r&&h in r&&!r[h]){var n=f(e,t);n&&n[h]&&(e[t]=r.value,r={configurable:d in r?r[d]:n[d],enumerable:l in r?r[l]:n[l],writable:!1})}return c(e,t,r)}:c:function(e,t,r){if(a(e),t=s(t),a(r),i)try{return c(e,t,r)}catch(n){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},"9d8d":function(e,t,r){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",[t("header",{staticClass:"defaultscroll sticky",class:{"bg-white":!0===e.isWhiteNavbar},attrs:{id:"topnav"}},[t("div",{staticClass:"container"},[t("div",[!0!==e.navLight?t("router-link",{staticClass:"logo",attrs:{to:"/"}},[t("img",{attrs:{src:"images/logo-light.png",height:"24",alt:""}})]):t("router-link",{staticClass:"logo",attrs:{to:"/"}},[t("img",{staticClass:"l-dark mb-1",attrs:{src:"images/logo-dark.png",height:"72",alt:""}}),e._v(" "),t("font",{staticClass:"l-dark",attrs:{color:"black"}}),t("img",{staticClass:"l-light mb-1",attrs:{src:"images/logo-light.png",height:"72",alt:""}}),e._v(" "),t("font",{staticClass:"l-light",attrs:{color:"white"}})],1)],1),!0===e.isIcons?t("ul",{staticClass:"buy-button list-inline mb-0"},[t("li",{staticClass:"list-inline-item mb-0 developer-icon"},[t("b-dropdown",{attrs:{right:"",variant:"link","toggle-class":"text-decoration-none p-0 pr-2","menu-class":"dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("i",{staticClass:"mdi mdi-magnify h4 text-muted"})]},proxy:!0}],null,!1,3053606442)},[t("div",{staticStyle:{width:"300px"}},[t("form",[t("input",{staticClass:"form-control border bg-white",attrs:{type:"text",id:"text",name:"name",placeholder:"Search..."}})])])])],1),e._m(0),e._m(1),e._m(2)]):e._e(),t("div",{staticClass:"menu-extras"},[t("div",{staticClass:"menu-item"},[t("a",{staticClass:"navbar-toggle",class:{open:!0===e.isCondensed},on:{click:function(t){return e.toggleMenu()}}},[e._m(3)])])])])]),e.isConneting?t("div",[t("vue-metamask",{attrs:{userMessage:"msg"},on:{onComplete:e.setWallet}})],1):e._e()])},i=[function(){var e=this,t=e._self._c;return t("li",{staticClass:"list-inline-item mb-0 pr-2"},[t("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"#"}},[t("i",{staticClass:"mdi mdi-github mdi-18px icons"})])])},function(){var e=this,t=e._self._c;return t("li",{staticClass:"list-inline-item mb-0 pr-2"},[t("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"#"}},[t("i",{staticClass:"mdi mdi-stack-overflow mdi-18px icons"})])])},function(){var e=this,t=e._self._c;return t("li",{staticClass:"list-inline-item mb-0"},[t("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"javascript:void(0)","data-toggle":"modal","data-target":"#productview"}},[t("i",{staticClass:"mdi mdi-account-outline mdi-18px icons"})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"lines"},[t("span"),t("span"),t("span")])}],o=r("f6df"),a=r("6e9e"),s={data(){return{wallet:{message:"",metaMaskAddress:"",netID:-1,type:"",web3:null},isConneting:!1,isCondensed:!1}},props:{isWhiteNavbar:{type:Boolean},navLight:{type:Boolean},isIcons:{type:Boolean}},components:{VueMetamask:o["a"]},mounted:()=>{function e(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky"),document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("back-to-top").style.display="inline":document.getElementById("back-to-top").style.display="none"}window.onscroll=function(){e()};for(var t=document.getElementsByClassName("side-nav-link-ref"),r=null,n=0;n<t.length;n++)if(window.location.pathname===t[n].pathname){r=t[n];break}if(r){r.classList.add("active");var i=r.parentElement;if(i){i.classList.add("active");const e=i.parentElement;if(e){e.classList.add("active");const t=e.parentElement;if(t){t.classList.add("active");const e=t.parentElement;if(e){const t=e.parentElement;t.classList.add("active")}}}}}},methods:{switchNetwork(){a["a"].switchNetwork()},shortAddress(e){return void 0===e||""===e?"":e.slice(0,5)+"..."+e.slice(e.length-5,e.length)},connectWallet(){this.isConneting=!0},async setWallet(e){console.log("wallet::",e),this.wallet=e,await this.switchNetwork(),localStorage.setItem("WALLET_ADDRESS",e.metaMaskAddress),localStorage.setItem("WALLET_CHAINID",e.netID),this.isConnecting=!1},toggleMenu(){this.isCondensed=!this.isCondensed,this.isCondensed?document.getElementById("navigation").style.display="block":document.getElementById("navigation").style.display="none"},onMenuClick(e){e.preventDefault();const t=e.target.nextSibling.nextSibling;if(t&&!t.classList.contains("open")){const r=e.target.parentNode;r&&r.classList.remove("open"),t.classList.add("open")}else t&&t.classList.remove("open");return!1}}},u=s,c=r("0c7c"),f=Object(c["a"])(u,n,i,!1,null,null,null);t["a"]=f.exports},a04b:function(e,t,r){"use strict";var n=r("c04e"),i=r("d9b5");e.exports=function(e){var t=n(e,"string");return i(t)?t:t+""}},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){return 1},1)}))}},aed9:function(e,t,r){"use strict";var n=r("83ab"),i=r("d039");e.exports=n&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(e,t,r){"use strict";var n=Math.ceil,i=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?i:n)(t)}},b622:function(e,t,r){"use strict";var n=r("da84"),i=r("5692"),o=r("1a2d"),a=r("90e3"),s=r("04f8"),u=r("fdbf"),c=n.Symbol,f=i("wks"),l=u?c["for"]||c:c&&c.withoutSetter||a;e.exports=function(e){return o(f,e)||(f[e]=s&&o(c,e)?c[e]:l("Symbol."+e)),f[e]}},c04e:function(e,t,r){"use strict";var n=r("c65b"),i=r("861d"),o=r("d9b5"),a=r("dc4a"),s=r("485a"),u=r("b622"),c=TypeError,f=u("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var r,u=a(e,f);if(u){if(void 0===t&&(t="default"),r=n(u,e,t),!i(r)||o(r))return r;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},c0d8:function(e,t,r){
/*! For license information please see web3.min.js.LICENSE.txt */
//# sourceMappingURL=chunk-1f8b72d7.3a4bc40f.js.map