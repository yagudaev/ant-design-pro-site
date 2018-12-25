webpackJsonp([8],{1084:function(n,a,s){n.exports={controlled:s(1558),expandable:s(1560),simple:s(1561)}},1340:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=s(1),e=u(p),o=u(s(261)),c=s(36),l=u(s(1559));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var k=c.Tag.CheckableTag,r=function(n){var a=n.children,s=n.checked,t=n.onChange,p=n.value;return e.default.createElement(k,{checked:s,key:p,onChange:function(n){return t(p,n)}},a)};r.isTagSelectOption=!0;var g=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onChange=function(n){var a=s.props.onChange;"value"in s.props||s.setState({value:n}),a&&a(n)},s.onSelectAll=function(n){var a=[];n&&(a=s.getAllTags()),s.onChange(a)},s.handleTagChange=function(n,a){var t=s.state.value,p=[].concat(function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return Array.from(n)}(t)),e=p.indexOf(n);a&&-1===e?p.push(n):!a&&e>-1&&p.splice(e,1),s.onChange(p)},s.handleExpand=function(){var n=s.state.expand;s.setState({expand:!n})},s.isTagSelectOption=function(n){return n&&n.type&&(n.type.isTagSelectOption||"TagSelectOption"===n.type.displayName)},s.state={expand:!1,value:n.value||n.defaultValue||[]},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.Component),t(a,[{key:"getAllTags",value:function(){var n=this,a=this.props.children;return(a=e.default.Children.toArray(a)).filter(function(a){return n.isTagSelectOption(a)}).map(function(n){return n.props.value})||[]}},{key:"render",value:function(){var n,a=this,s=this.state,t=s.value,p=s.expand,u=this.props,r=u.children,g=u.hideCheckAll,d=u.className,f=u.style,v=u.expandable,m=this.getAllTags().length===t.length,h=(0,o.default)(l.default.tagSelect,d,(i(n={},l.default.hasExpandTag,v),i(n,l.default.expanded,p),n));return e.default.createElement("div",{className:h,style:f},g?null:e.default.createElement(k,{checked:m,key:"tag-select-__all__",onChange:this.onSelectAll},"\u5168\u90e8"),t&&e.default.Children.map(r,function(n){return a.isTagSelectOption(n)?e.default.cloneElement(n,{key:"tag-select-"+n.props.value,value:n.props.value,checked:t.indexOf(n.props.value)>-1,onChange:a.handleTagChange}):n}),v&&e.default.createElement("a",{className:l.default.trigger,onClick:this.handleExpand},p?"\u6536\u8d77":"\u5c55\u5f00"," ",e.default.createElement(c.Icon,{type:p?"up":"down"})))}}],[{key:"getDerivedStateFromProps",value:function(n){return"value"in n?{value:n.value||[]}:null}}]),a}();g.defaultProps={hideCheckAll:!1},g.Option=r,a.default=g},1558:function(n,a,s){n.exports={content:[["p","\u7ed3\u5408 ",["code","Tag"]," \u7684 ",["code","TagSelect"]," \u7ec4\u4ef6\uff0c\u65b9\u4fbf\u7684\u5e94\u7528\u4e8e\u7b5b\u9009\u7c7b\u76ee\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002"]],meta:{order:3,title:"\u53d7\u63a7\u6a21\u5f0f",filename:"scaffold/src/components/TagSelect/demo/controlled.md",id:"scaffold-src-components-TagSelect-demo-controlled"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TagSelect <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/TagSelect\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'cat1\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  handleFormSubmit <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  checkAll <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'cat1\'</span><span class="token punctuation">,</span> <span class="token string">\'cat2\'</span><span class="token punctuation">,</span> <span class="token string">\'cat3\'</span><span class="token punctuation">,</span> <span class="token string">\'cat4\'</span><span class="token punctuation">,</span> <span class="token string">\'cat5\'</span><span class="token punctuation">,</span> <span class="token string">\'cat6\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>checkAll<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5168\u90e8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            padding<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect</span> <span class="token attr-name">hideCheckAll</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleFormSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u56db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e94<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u516d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(13),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(36),p=function(n){return n&&n.__esModule?n:{default:n}}(s(1340));function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var o=function(s){function o(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,p=Array(t),c=0;c<t;c++)p[c]=arguments[c];return a=s=e(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(p))),s.state={value:["cat1"]},s.handleFormSubmit=function(n){s.setState({value:n})},s.checkAll=function(){s.setState({value:["cat1","cat2","cat3","cat4","cat5","cat6"]})},e(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),a(o,[{key:"render",value:function(){return n.createElement("div",null,n.createElement(t.Button,{onClick:this.checkAll},"\u5168\u90e8"),n.createElement("div",{style:{padding:16}},n.createElement(p.default,{hideCheckAll:!0,value:this.state.value,onChange:this.handleFormSubmit},n.createElement(p.default.Option,{value:"cat1"},"\u7c7b\u76ee\u4e00"),n.createElement(p.default.Option,{value:"cat2"},"\u7c7b\u76ee\u4e8c"),n.createElement(p.default.Option,{value:"cat3"},"\u7c7b\u76ee\u4e09"),n.createElement(p.default.Option,{value:"cat4"},"\u7c7b\u76ee\u56db"),n.createElement(p.default.Option,{value:"cat5"},"\u7c7b\u76ee\u4e94"),n.createElement(p.default.Option,{value:"cat6"},"\u7c7b\u76ee\u516d"))))}}]),o}();return n.createElement(o,null)}}},1559:function(n,a){n.exports={tagSelect:"tagSelect___3qQYf",expanded:"expanded___1XKNK",trigger:"trigger___32Djx",hasExpandTag:"hasExpandTag___J_kxT"}},1560:function(n,a,s){n.exports={content:[["p","\u4f7f\u7528 ",["code","expandable"]," \u5c5e\u6027\uff0c\u8ba9\u6807\u7b7e\u7ec4\u53ef\u4ee5\u6536\u8d77\uff0c\u907f\u514d\u8fc7\u9ad8\u3002"]],meta:{order:1,title:"\u53ef\u5c55\u5f00\u548c\u6536\u8d77",filename:"scaffold/src/components/TagSelect/demo/expandable.md",id:"scaffold-src-components-TagSelect-demo-expandable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> TagSelect <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/TagSelect\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleFormSubmit</span><span class="token punctuation">(</span>checkedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checkedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleFormSubmit<span class="token punctuation">}</span></span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u56db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e94<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u516d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u516b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e5d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u5341<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat11<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u5341\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u5341\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(13),function(n){return n&&n.__esModule?n:{default:n}}(s(1340)));return n.createElement(a.default,{onChange:function(n){console.log(n)},expandable:!0},n.createElement(a.default.Option,{value:"cat1"},"\u7c7b\u76ee\u4e00"),n.createElement(a.default.Option,{value:"cat2"},"\u7c7b\u76ee\u4e8c"),n.createElement(a.default.Option,{value:"cat3"},"\u7c7b\u76ee\u4e09"),n.createElement(a.default.Option,{value:"cat4"},"\u7c7b\u76ee\u56db"),n.createElement(a.default.Option,{value:"cat5"},"\u7c7b\u76ee\u4e94"),n.createElement(a.default.Option,{value:"cat6"},"\u7c7b\u76ee\u516d"),n.createElement(a.default.Option,{value:"cat7"},"\u7c7b\u76ee\u4e03"),n.createElement(a.default.Option,{value:"cat8"},"\u7c7b\u76ee\u516b"),n.createElement(a.default.Option,{value:"cat9"},"\u7c7b\u76ee\u4e5d"),n.createElement(a.default.Option,{value:"cat10"},"\u7c7b\u76ee\u5341"),n.createElement(a.default.Option,{value:"cat11"},"\u7c7b\u76ee\u5341\u4e00"),n.createElement(a.default.Option,{value:"cat12"},"\u7c7b\u76ee\u5341\u4e8c"))}}},1561:function(n,a,s){n.exports={content:[["p","\u7ed3\u5408 ",["code","Tag"]," \u7684 ",["code","TagSelect"]," \u7ec4\u4ef6\uff0c\u65b9\u4fbf\u7684\u5e94\u7528\u4e8e\u7b5b\u9009\u7c7b\u76ee\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002"]],meta:{order:0,title:"\u57fa\u7840\u6837\u4f8b",filename:"scaffold/src/components/TagSelect/demo/simple.md",id:"scaffold-src-components-TagSelect-demo-simple"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> TagSelect <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/TagSelect\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleFormSubmit</span><span class="token punctuation">(</span>checkedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checkedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleFormSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u56db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u4e94<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagSelect.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7c7b\u76ee\u516d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect.Option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagSelect</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(13),function(n){return n&&n.__esModule?n:{default:n}}(s(1340)));return n.createElement(a.default,{onChange:function(n){console.log(n)}},n.createElement(a.default.Option,{value:"cat1"},"\u7c7b\u76ee\u4e00"),n.createElement(a.default.Option,{value:"cat2"},"\u7c7b\u76ee\u4e8c"),n.createElement(a.default.Option,{value:"cat3"},"\u7c7b\u76ee\u4e09"),n.createElement(a.default.Option,{value:"cat4"},"\u7c7b\u76ee\u56db"),n.createElement(a.default.Option,{value:"cat5"},"\u7c7b\u76ee\u4e94"),n.createElement(a.default.Option,{value:"cat6"},"\u7c7b\u76ee\u516d"))}}}});