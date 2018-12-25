webpackJsonp([11],{1077:function(e,n,t){e.exports={basic:t(1546)}},1182:function(e,n,t){var a,r;!function(o,s){void 0===(r="function"==typeof(a=s)?a.call(n,t,n,e):a)||(e.exports=r)}(0,function(){var e,n,t={},a={},r={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={currentLocale:r.currentLocale,zeroFormat:r.zeroFormat,nullFormat:r.nullFormat,defaultFormat:r.defaultFormat,scalePercentBy100:r.scalePercentBy100};function s(e,n){this._input=e,this._value=n}return(e=function(a){var r,l,i,u;if(e.isNumeral(a))r=a.value();else if(0===a||void 0===a)r=0;else if(null===a||n.isNaN(a))r=null;else if("string"==typeof a)if(o.zeroFormat&&a===o.zeroFormat)r=0;else if(o.nullFormat&&a===o.nullFormat||!a.replace(/[^0-9]+/g,"").length)r=null;else{for(l in t)if((u="function"==typeof t[l].regexps.unformat?t[l].regexps.unformat():t[l].regexps.unformat)&&a.match(u)){i=t[l].unformat;break}r=(i=i||e._.stringToNumber)(a)}else r=Number(a)||null;return new s(a,r)}).version="2.0.6",e.isNumeral=function(e){return e instanceof s},e._=n={numberToFormat:function(n,t,r){var o,s,l,i,u,c,f,p,m=a[e.options.currentLocale],d=!1,b=!1,h="",g="",_=!1;if(n=n||0,l=Math.abs(n),e._.includes(t,"(")?(d=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(c=e._.includes(t,"+")?t.indexOf("+"):n<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),e._.includes(t,"a")&&(s=!!(s=t.match(/a(k|m|b|t)?/))&&s[1],e._.includes(t," a")&&(h=" "),t=t.replace(new RegExp(h+"a[kmbt]?"),""),l>=1e12&&!s||"t"===s?(h+=m.abbreviations.trillion,n/=1e12):l<1e12&&l>=1e9&&!s||"b"===s?(h+=m.abbreviations.billion,n/=1e9):l<1e9&&l>=1e6&&!s||"m"===s?(h+=m.abbreviations.million,n/=1e6):(l<1e6&&l>=1e3&&!s||"k"===s)&&(h+=m.abbreviations.thousand,n/=1e3)),e._.includes(t,"[.]")&&(b=!0,t=t.replace("[.]",".")),i=n.toString().split(".")[0],u=t.split(".")[1],f=t.indexOf(","),o=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),g=e._.toFixed(n,u[0].length+u[1].length,r,u[1].length)):g=e._.toFixed(n,u.length,r),i=g.split(".")[0],g=e._.includes(g,".")?m.delimiters.decimal+g.split(".")[1]:"",b&&0===Number(g.slice(1))&&(g="")):i=e._.toFixed(n,0,r),h&&!s&&Number(i)>=1e3&&h!==m.abbreviations.trillion)switch(i=String(Number(i)/1e3),h){case m.abbreviations.thousand:h=m.abbreviations.million;break;case m.abbreviations.million:h=m.abbreviations.billion;break;case m.abbreviations.billion:h=m.abbreviations.trillion}if(e._.includes(i,"-")&&(i=i.slice(1),_=!0),i.length<o)for(var v=o-i.length;v>0;v--)i="0"+i;return f>-1&&(i=i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===t.indexOf(".")&&(i=""),p=i+g+(h||""),d?p=(d&&_?"(":"")+p+(d&&_?")":""):c>=0?p=0===c?(_?"-":"+")+p:p+(_?"-":"+"):_&&(p="-"+p),p},stringToNumber:function(e){var n,t,r,s=a[o.currentLocale],l=e,i={thousand:3,million:6,billion:9,trillion:12};if(o.zeroFormat&&e===o.zeroFormat)t=0;else if(o.nullFormat&&e===o.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(n in t=1,"."!==s.delimiters.decimal&&(e=e.replace(/\./g,"").replace(s.delimiters.decimal,".")),i)if(r=new RegExp("[^a-zA-Z]"+s.abbreviations[n]+"(?:\\)|(\\"+s.currency.symbol+")?(?:\\))?)?$"),l.match(r)){t*=Math.pow(10,i[n]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,n){return-1!==e.indexOf(n)},insert:function(e,n,t){return e.slice(0,t)+n+e.slice(t)},reduce:function(e,n){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof n)throw new TypeError(n+" is not a function");var t,a=Object(e),r=a.length>>>0,o=0;if(3===arguments.length)t=arguments[2];else{for(;o<r&&!(o in a);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");t=a[o++]}for(;o<r;o++)o in a&&(t=n(t,a[o],o,a));return t},multiplier:function(e){var n=e.toString().split(".");return n.length<2?1:Math.pow(10,n[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,t){var a=n.multiplier(t);return e>a?e:a},1)},toFixed:function(e,n,t,a){var r,o,s,l,i=e.toString().split("."),u=n-(a||0);return r=2===i.length?Math.min(Math.max(i[1].length,u),n):u,s=Math.pow(10,r),l=(t(e+"e+"+r)/s).toFixed(r),a>n-r&&(o=new RegExp("\\.?0{1,"+(a-(n-r))+"}$"),l=l.replace(o,"")),l}},e.options=o,e.formats=t,e.locales=a,e.locale=function(e){return e&&(o.currentLocale=e.toLowerCase()),o.currentLocale},e.localeData=function(e){if(!e)return a[o.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in r)o[e]=r[e]},e.zeroFormat=function(e){o.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){o.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){o.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,n,t){if(n=n.toLowerCase(),this[e+"s"][n])throw new TypeError(n+" "+e+" already registered.");return this[e+"s"][n]=t,t},e.validate=function(n,t){var a,r,o,s,l,i,u,c;if("string"!=typeof n&&(n+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",n)),(n=n.trim()).match(/^\d+$/))return!0;if(""===n)return!1;try{u=e.localeData(t)}catch(n){u=e.localeData(e.locale())}return o=u.currency.symbol,l=u.abbreviations,a=u.delimiters.decimal,r="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(c=n.match(/^[^\d]+/))||(n=n.substr(1),c[0]===o))&&((null===(c=n.match(/[^\d]+$/))||(n=n.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(i=new RegExp(r+"{2}"),!n.match(/[^\d.,]/g)&&(!((s=n.split(a)).length>2)&&(s.length<2?!!s[0].match(/^\d+.*\d$/)&&!s[0].match(i):1===s[0].length?!!s[0].match(/^\d+$/)&&!s[0].match(i)&&!!s[1].match(/^\d+$/):!!s[0].match(/^\d+.*\d$/)&&!s[0].match(i)&&!!s[1].match(/^\d+$/)))))},e.fn=s.prototype={clone:function(){return e(this)},format:function(n,a){var r,s,l,i=this._value,u=n||o.defaultFormat;if(a=a||Math.round,0===i&&null!==o.zeroFormat)s=o.zeroFormat;else if(null===i&&null!==o.nullFormat)s=o.nullFormat;else{for(r in t)if(u.match(t[r].regexps.format)){l=t[r].format;break}s=(l=l||e._.numberToFormat)(i,u,a)}return s},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=n.correctionFactor.call(null,this._value,e);return this._value=n.reduce([this._value,e],function(e,n,a,r){return e+Math.round(t*n)},0)/t,this},subtract:function(e){var t=n.correctionFactor.call(null,this._value,e);return this._value=n.reduce([e],function(e,n,a,r){return e-Math.round(t*n)},Math.round(this._value*t))/t,this},multiply:function(e){return this._value=n.reduce([this._value,e],function(e,t,a,r){var o=n.correctionFactor(e,t);return Math.round(e*o)*Math.round(t*o)/Math.round(o*o)},1),this},divide:function(e){return this._value=n.reduce([this._value,e],function(e,t,a,r){var o=n.correctionFactor(e,t);return Math.round(e*o)/Math.round(t*o)}),this},difference:function(n){return Math.abs(e(this._value).subtract(n).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var n=e%10;return 1==~~(e%100/10)?"th":1===n?"st":2===n?"nd":3===n?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(n,t,a){var r,o=e._.includes(t," BPS")?" ":"";return n*=1e4,t=t.replace(/\s?BPS/,""),r=e._.numberToFormat(n,t,a),e._.includes(r,")")?((r=r.split("")).splice(-1,0,o+"BPS"),r=r.join("")):r=r+o+"BPS",r},unformat:function(n){return+(1e-4*e._.stringToNumber(n)).toFixed(15)}}),function(){var n={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},a=n.suffixes.concat(t.suffixes.filter(function(e){return n.suffixes.indexOf(e)<0})).join("|");a="("+a.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(a,r,o){var s,l,i,u=e._.includes(r,"ib")?t:n,c=e._.includes(r," b")||e._.includes(r," ib")?" ":"";for(r=r.replace(/\s?i?b/,""),s=0;s<=u.suffixes.length;s++)if(l=Math.pow(u.base,s),i=Math.pow(u.base,s+1),null===a||0===a||a>=l&&a<i){c+=u.suffixes[s],l>0&&(a/=l);break}return e._.numberToFormat(a,r,o)+c},unformat:function(a){var r,o,s=e._.stringToNumber(a);if(s){for(r=n.suffixes.length-1;r>=0;r--){if(e._.includes(a,n.suffixes[r])){o=Math.pow(n.base,r);break}if(e._.includes(a,t.suffixes[r])){o=Math.pow(t.base,r);break}}s*=o||1}return s}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(n,t,a){var r,o,s=e.locales[e.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),r=e._.numberToFormat(n,t,a),n>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):n<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":r=e._.insert(r,s.currency.symbol,o);break;case" ":r=e._.insert(r," ",o+s.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":r=o===l.after.length-1?r+s.currency.symbol:e._.insert(r,s.currency.symbol,-(l.after.length-(1+o)));break;case" ":r=o===l.after.length-1?r+" ":e._.insert(r," ",-(l.after.length-(1+o)+s.currency.symbol.length-1))}return r}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(n,t,a){var r=("number"!=typeof n||e._.isNaN(n)?"0e+0":n.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(r[0]),t,a)+"e"+r[1]},unformat:function(n){var t=e._.includes(n,"e+")?n.split("e+"):n.split("e-"),a=Number(t[0]),r=Number(t[1]);return r=e._.includes(n,"e-")?r*=-1:r,e._.reduce([a,Math.pow(10,r)],function(n,t,a,r){var o=e._.correctionFactor(n,t);return n*o*(t*o)/(o*o)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(n,t,a){var r=e.locales[e.options.currentLocale],o=e._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),o+=r.ordinal(n),e._.numberToFormat(n,t,a)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(n,t,a){var r,o=e._.includes(t," %")?" ":"";return e.options.scalePercentBy100&&(n*=100),t=t.replace(/\s?\%/,""),r=e._.numberToFormat(n,t,a),e._.includes(r,")")?((r=r.split("")).splice(-1,0,o+"%"),r=r.join("")):r=r+o+"%",r},unformat:function(n){var t=e._.stringToNumber(n);return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,n,t){var a=Math.floor(e/60/60),r=Math.floor((e-60*a*60)/60),o=Math.round(e-60*a*60-60*r);return a+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)},unformat:function(e){var n=e.split(":"),t=0;return 3===n.length?(t+=60*Number(n[0])*60,t+=60*Number(n[1]),t+=Number(n[2])):2===n.length&&(t+=60*Number(n[0]),t+=Number(n[1])),Number(t)}}),e})},1327:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=i(t(1)),o=t(36),s=i(t(261)),l=i(t(1328));function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){var n=e.theme,t=e.title,i=e.subTitle,u=e.total,c=e.subTotal,f=e.status,p=e.suffix,m=e.gap,d=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(e,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return r.default.createElement("div",a({className:(0,s.default)(l.default.numberInfo,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},l.default["numberInfo"+n],n))},d),t&&r.default.createElement("div",{className:l.default.numberInfoTitle,title:"string"==typeof t?t:""},t),i&&r.default.createElement("div",{className:l.default.numberInfoSubTitle,title:"string"==typeof i?i:""},i),r.default.createElement("div",{className:l.default.numberInfoValue,style:m?{marginTop:m}:null},r.default.createElement("span",null,u,p&&r.default.createElement("em",{className:l.default.suffix},p)),(f||c)&&r.default.createElement("span",{className:l.default.subTotal},c,f&&r.default.createElement(o.Icon,{type:"caret-"+f}))))}},1328:function(e,n){e.exports={numberInfo:"numberInfo___14j3o",suffix:"suffix___1Xf2o",numberInfoTitle:"numberInfoTitle___2yoGM",numberInfoSubTitle:"numberInfoSubTitle___2WiCC",numberInfoValue:"numberInfoValue___1KSI4",subTotal:"subTotal___elKrY",numberInfolight:"numberInfolight___1N38e"}},1546:function(e,n,t){e.exports={content:{"zh-CN":[["p","\u5404\u79cd\u6570\u636e\u6587\u6848\u7684\u5c55\u73b0\u65b9\u5f0f\u3002"]],"en-US":[["p","Used for presenting various numerical data."]]},meta:{order:0,title:{"zh-CN":"\u6f14\u793a","en-US":"Demo"},filename:"scaffold/src/components/NumberInfo/demo/basic.md",id:"scaffold-src-components-NumberInfo-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> NumberInfo <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/NumberInfo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> numeral <span class="token keyword">from</span> <span class="token string">\'numeral\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInfo</span>\n      <span class="token attr-name">subTitle={&lt;span</span><span class="token punctuation">></span></span>Visits <span class="token keyword">this</span> week<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      total<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">numeral</span><span class="token punctuation">(</span><span class="token number">12321</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'0,0\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      status<span class="token operator">=</span><span class="token string">"up"</span>\n      subTotal<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">17.1</span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var e=t(1),n=(t(13),r(t(1327))),a=r(t(1182));function r(e){return e&&e.__esModule?e:{default:e}}return e.createElement("div",null,e.createElement(n.default,{subTitle:e.createElement("span",null,"Visits this week"),total:(0,a.default)(12321).format("0,0"),status:"up",subTotal:17.1}))}}}});