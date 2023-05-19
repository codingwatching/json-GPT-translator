import{g as xe,t as Se,u as Ne}from"./configure-8eb5ad78.js";import{m as se}from"./message-1ac97765.js";import{j as je,v as Te,k as Oe,l as Pe,d as De,a as _e,r as fe,o as Le,b as w,c as Ce,f as a,w as c,g as he,e as d,h as y,u as re,m as Be,n as we,t as Ae,E as Ee,q as Ie,s as Me,p as Ue,i as Fe,_ as ze}from"./index-07f16b63.js";const ce={width:1024,height:1024,body:'<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296c-44.096 0-108.992 44.736-148.48 101.504c0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04c67.84 0 107.904-43.648 147.456-100.416z"/>'};var ke={exports:{}};const Ke=je(Te);(function(Y,ue){(function(G,P){Y.exports=P(Ke)})(Oe,function(G){return function(){var P={789:function(g){g.exports=G}},p={};function B(g){var N=p[g];if(N!==void 0)return N.exports;var S=p[g]={exports:{}};return P[g](S,S.exports,B),S.exports}B.d=function(g,N){for(var S in N)B.o(N,S)&&!B.o(g,S)&&Object.defineProperty(g,S,{enumerable:!0,get:N[S]})},B.o=function(g,N){return Object.prototype.hasOwnProperty.call(g,N)},B.r=function(g){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})};var X={};return function(){function g(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function N(e,t){if(e){if(typeof e=="string")return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function S(e){return function(t){if(Array.isArray(t))return g(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||N(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}B.r(X),B.d(X,{default:function(){return ne}});var l=B(789),j=(0,l.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,l.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),u=(0,l.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,l.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,l.computed)({get:function(){return e.checked},set:function(s){return n("update:modelValue",s)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,l.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(s){return s.stopPropagation()}},[(0,l.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,l.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),D=(0,l.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n=e==="objectStart"||e==="arrayStart";return n||e==="objectCollapsed"||e==="arrayCollapsed"?(0,l.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,l.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,l.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function z(e){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function T(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function v(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0,r=s||{},x=r.key,H=r.index,b=r.type,A=b===void 0?"content":b,O=r.showComma,R=O!==void 0&&O,I=r.length,Q=I===void 0?1:I,W=T(e);if(W==="array"){var oe=E(e.map(function(L,f,o){return v(L,"".concat(t,"[").concat(f,"]"),n+1,{index:f,showComma:f!==o.length-1,length:Q,type:A})}));return[v("[",t,n,{showComma:!1,key:x,length:e.length,type:"arrayStart"})[0]].concat(oe,v("]",t,n,{showComma:R,length:e.length,type:"arrayEnd"})[0])}if(W==="object"){var q=Object.keys(e),ae=E(q.map(function(L,f,o){return v(e[L],/^[a-zA-Z_]\w*$/.test(L)?"".concat(t,".").concat(L):"".concat(t,'["').concat(L,'"]'),n+1,{key:L,showComma:f!==o.length-1,length:Q,type:A})}));return[v("{",t,n,{showComma:!1,key:x,index:H,length:q.length,type:"objectStart"})[0]].concat(ae,v("}",t,n,{showComma:R,length:q.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:x,index:H,path:t,showComma:R,length:Q,type:A}]}function E(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=S(e),n=[];t.length;){var s=t.shift();Array.isArray(s)?t.unshift.apply(t,S(s)):n.push(s)}return n}function K(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(z(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map(function(x){return K(x,t)});return t.set(e,n),n}var s={};for(var r in e)s[r]=K(e[r],t);return t.set(e,s),s}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(s){F(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}var ee={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},de=(0,l.defineComponent)({name:"TreeNode",props:J(J({},ee),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,s=(0,l.computed)(function(){return T(e.node.content)}),r=(0,l.computed)(function(){return"vjs-value vjs-value-".concat(s.value)}),x=(0,l.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),H=(0,l.computed)(function(){return e.selectableType==="multiple"}),b=(0,l.computed)(function(){return e.selectableType==="single"}),A=(0,l.computed)(function(){return e.nodeSelectable(e.node)&&(H.value||b.value)}),O=(0,l.reactive)({editing:!1}),R=function(f){var o,i,m=(i=(o=f.target)===null||o===void 0?void 0:o.value)==="null"?null:i==="undefined"?void 0:i==="true"||i!=="false"&&(i[0]+i[i.length-1]==='""'||i[0]+i[i.length-1]==="''"?i.slice(1,-1):typeof Number(i)=="number"&&!isNaN(Number(i))||i==="NaN"?Number(i):i);n("valueChange",m,e.node.path)},I=(0,l.computed)(function(){var f,o=(f=e.node)===null||f===void 0?void 0:f.content;return o===null?o="null":o===void 0&&(o="undefined"),s.value==="string"?'"'.concat(o,'"'):o+""}),Q=function(){var f=e.renderNodeValue;return f?f({node:e.node,defaultValue:I.value}):I.value},W=function(){n("bracketsClick",!e.collapsed,e.node.path)},oe=function(){n("iconClick",!e.collapsed,e.node.path)},q=function(){n("selectedChange",e.node)},ae=function(){n("nodeClick",e.node),A.value&&e.selectOnClickNode&&n("selectedChange",e.node)},L=function(f){if(e.editable&&!O.editing){O.editing=!0;var o=function i(m){var h;m.target!==f.target&&((h=m.target)===null||h===void 0?void 0:h.parentElement)!==f.target&&(O.editing=!1,document.removeEventListener("click",i))};document.removeEventListener("click",o),document.addEventListener("click",o)}};return function(){var f,o=e.node;return(0,l.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:ae,style:e.style},[e.showLineNumber&&(0,l.createVNode)("span",{class:"vjs-node-index"},[o.id+1]),e.showSelectController&&A.value&&o.type!=="objectEnd"&&o.type!=="arrayEnd"&&(0,l.createVNode)(u,{isMultiple:H.value,checked:e.checked,onChange:q},null),(0,l.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(o.level)).map(function(i,m){return(0,l.createVNode)("div",{key:m,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,l.createVNode)(D,{nodeType:o.type,onClick:oe},null)]),o.key&&(0,l.createVNode)("span",{class:"vjs-key"},[(f=e.renderNodeKey,f?f({node:e.node,defaultKey:x.value||""}):x.value),(0,l.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,l.createVNode)("span",null,[o.type!=="content"&&o.content?(0,l.createVNode)(j,{data:o.content.toString(),onClick:W},null):(0,l.createVNode)("span",{class:r.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:L,onDblclick:e.editable&&e.editableTrigger==="dblclick"?L:void 0},[e.editable&&O.editing?(0,l.createVNode)("input",{value:I.value,onChange:R,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):Q()]),o.showComma&&(0,l.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,l.createVNode)("span",{class:"vjs-comment"},[(0,l.createTextVNode)(" // "),o.length,(0,l.createTextVNode)(" items ")])])])}}});function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(s){F(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}var ne=(0,l.defineComponent)({name:"Tree",props:V(V({},ee),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,s=t.slots,r=(0,l.ref)(),x=(0,l.computed)(function(){return v(e.data,e.rootPath)}),H=function(o){return x.value.reduce(function(i,m){var h,_=m.level>=o,C=(h=e.pathCollapsible)===null||h===void 0?void 0:h.call(e,m);return m.type!=="objectStart"&&m.type!=="arrayStart"||!_&&!C?i:V(V({},i),{},F({},m.path,1))},{})},b=(0,l.reactive)({translateY:0,visibleData:null,hiddenPaths:H(e.deep)}),A=(0,l.computed)(function(){for(var o=null,i=[],m=x.value.length,h=0;h<m;h++){var _=V(V({},x.value[h]),{},{id:h}),C=b.hiddenPaths[_.path];if(o&&o.path===_.path){var M=o.type==="objectStart",ie=V(V(V({},_),o),{},{showComma:_.showComma,content:M?"{...}":"[...]",type:M?"objectCollapsed":"arrayCollapsed"});o=null,i.push(ie)}else{if(C&&!o){o=_;continue}if(o)continue;i.push(_)}}return i}),O=(0,l.computed)(function(){var o=e.selectedValue;return o&&e.selectableType==="multiple"&&Array.isArray(o)?o:[o]}),R=(0,l.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),I=function(){var o=A.value;if(e.virtual){var i,m=e.height/e.itemHeight,h=((i=r.value)===null||i===void 0?void 0:i.scrollTop)||0,_=Math.floor(h/e.itemHeight),C=_<0?0:_+m>o.length?o.length-m:_;C<0&&(C=0);var M=C+m;b.translateY=C*e.itemHeight,b.visibleData=o.filter(function(ie,le){return le>=C&&le<M})}else b.visibleData=o},Q=function(){I()},W=function(o){var i,m,h=o.path,_=e.selectableType;if(_==="multiple"){var C=O.value.findIndex(function(U){return U===h}),M=S(O.value);C!==-1?M.splice(C,1):M.push(h),n("update:selectedValue",M),n("selectedChange",M,S(O.value))}else if(_==="single"&&O.value[0]!==h){var ie=(i=O.value,m=1,function(U){if(Array.isArray(U))return U}(i)||function(U,ye){var Z=U==null?null:typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"];if(Z!=null){var ge,ve,pe=[],me=!0,be=!1;try{for(Z=Z.call(U);!(me=(ge=Z.next()).done)&&(pe.push(ge.value),!ye||pe.length!==ye);me=!0);}catch(Ve){be=!0,ve=Ve}finally{try{me||Z.return==null||Z.return()}finally{if(be)throw ve}}return pe}}(i,m)||N(i,m)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],le=h;n("update:selectedValue",le),n("selectedChange",le,ie)}},oe=function(o){n("nodeClick",o)},q=function(o,i){if(o)b.hiddenPaths=V(V({},b.hiddenPaths),{},F({},i,1));else{var m=V({},b.hiddenPaths);delete m[i],b.hiddenPaths=m}},ae=function(o,i){e.collapsedOnClickBrackets&&q(o,i),n("bracketsClick",o)},L=function(o,i){q(o,i),n("iconClick",o)},f=function(o,i){var m=K(e.data),h=e.rootPath;new Function("data","val","data".concat(i.slice(h.length),"=val"))(m,o),n("update:data",m)};return(0,l.watchEffect)(function(){R.value&&function(o){throw new Error("[VueJSONPretty] ".concat(o))}(R.value)}),(0,l.watchEffect)(function(){A.value&&I()}),(0,l.watch)(function(){return e.deep},function(o){o&&(b.hiddenPaths=H(o))}),function(){var o,i,m=(o=e.renderNodeKey)!==null&&o!==void 0?o:s.renderNodeKey,h=(i=e.renderNodeValue)!==null&&i!==void 0?i:s.renderNodeValue,_=b.visibleData&&b.visibleData.map(function(C){return(0,l.createVNode)(de,{key:C.id,node:C,collapsed:!!b.hiddenPaths[C.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:O.value.includes(C.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:m,renderNodeValue:h,onNodeClick:oe,onBracketsClick:ae,onIconClick:L,onSelectedChange:W,onValueChange:f,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,l.createVNode)("div",{ref:r,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?Q:void 0,style:e.showLineNumber?V({paddingLeft:"".concat(12*Number(x.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,l.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,l.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(A.value.length*e.itemHeight,"px")}},[(0,l.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(b.translateY,"px)")}},[_])])]):_])}}})}(),X}()})})(ke);var He=ke.exports;const Re=Pe(He);const k=Y=>(Ue("data-v-da540f73"),Y=Y(),Fe(),Y),qe={class:"file-import-export"},Ge=k(()=>d("h4",null,"核心配置:",-1)),$e={class:"core-configuration-form"},Je={style:{"padding-right":"20px"}},Qe=k(()=>d("br",null,null,-1)),Ye=k(()=>d("br",null,null,-1)),We={class:"core-configuration-form"},Ze={style:{"padding-right":"20px"}},Xe=k(()=>d("br",null,null,-1)),et=k(()=>d("br",null,null,-1)),tt={class:"core-configuration-form"},nt={style:{"padding-right":"20px"}},ot=k(()=>d("br",null,null,-1)),at=k(()=>d("br",null,null,-1)),lt={class:"core-configuration-form"},rt=k(()=>d("br",null,null,-1)),it=k(()=>d("br",null,null,-1)),st=k(()=>d("br",null,null,-1)),ct=k(()=>d("h4",null,"代理配置:",-1)),ut=k(()=>d("h5",null,"多行翻译测试数据: ",-1)),dt={class:"file-import-export"},pt={style:{"margin-top":"20px"}},mt=k(()=>d("h5",null,"单行测试数据: ",-1)),ft=k(()=>d("br",null,null,-1)),ht={key:0,style:{"margin-top":"40px"}},yt=k(()=>d("span",null,"测试结果:",-1)),gt=k(()=>d("div",{style:{"font-size":"15px","margin-bottom":"20px"}},"多行翻译结果:",-1)),vt=k(()=>d("div",{style:{"font-size":"15px","margin-bottom":"20px"}},"单行翻译结果:",-1)),bt={class:"file-import-export",style:{"margin-top":"40px"}},_t=De({__name:"index",setup(Y){const ue=_e(!1),G=fe({}),P=fe({data:{translationDataList:[{id:0,originalText:`武器戦技を継承する
`},{id:1,originalText:`アステルが目を開けて、光になって天に昇って行く二人を見送る
`},{id:2,originalText:"performMiss"}],translationData:{id:0,originalText:"もし、今の状況が自分らしくないことの連続で、好きになれないなら、どうすれば、変えられるかを真剣に考えてみよう。そしないと問題はちっとも解決しない。"}}}),p=fe({data:{promptSingleTranslations:"",promptMultipleTranslations:"",topP:0,temperature:0,presencePenalty:0,frequencyPenalty:0,proxyUlr:"",proxyPort:0,proxyType:""}}),B=()=>{const j=Ee.service({lock:!0,text:"请耐心等待测试完成",background:"rgba(0, 0, 0, 0.7)"});Se({...P.data,...p.data}).then(u=>{u.code===0?(se("测试成功",{type:"success"}),ue.value=!0,G.data=u.data):se(u.msg,{type:"error"}),j.close()})},X=j=>{P.data.translationDataList=P.data.translationDataList.filter(u=>u.id!==j)},g=()=>{P.data.translationDataList.push({id:P.data.translationDataList.length,originalText:""})},N=()=>{Ne(p.data).then(j=>{j.code===0?se("修改配置成功",{type:"success"}):se(j.msg,{type:"error"}),F()})},S=()=>{Ie.get("/api/openai-properties/chat-gpt-export",{responseType:"blob"}).then(j=>{var z;let u=j.headers["content-disposition"],D="config.json";if(u){let T=(z=u.split("filename=")[1])==null?void 0:z.trim();T&&(D=T)}Me(j.data,D)})},F=()=>{xe().then(j=>{p.data=j.data})};Le(()=>{F()});const l=_e("chagpt");return(j,u)=>{const D=w("el-button"),z=w("el-upload"),T=w("el-input"),v=w("el-form-item"),E=w("el-divider"),K=w("el-slider"),$=w("IconifyIconOffline"),J=w("el-tooltip"),ee=w("el-radio"),de=w("el-radio-group"),te=w("el-form"),V=w("el-tab-pane"),ne=w("el-table-column"),e=w("el-table"),t=w("el-tag"),n=w("el-card"),s=w("el-tabs");return he(),Ce("div",null,[a(n,null,{default:c(()=>[a(s,{modelValue:l.value,"onUpdate:modelValue":u[12]||(u[12]=r=>l.value=r),class:"demo-tabs"},{default:c(()=>[a(V,{label:"chagpt配置",name:"chagpt"},{default:c(()=>[a(te,{model:p.data,"label-width":"150px"},{default:c(()=>[d("div",qe,[a(D,{type:"success",onClick:N},{default:c(()=>[y("保存")]),_:1}),a(z,{class:"item",action:"/api/openai-properties/chat-gpt-import","on-success":F,"show-file-list":!1,limit:1},{trigger:c(()=>[a(D,{type:"danger"},{default:c(()=>[y("导入")]),_:1})]),_:1}),a(D,{class:"item",type:"primary",onClick:S},{default:c(()=>[y("导出")]),_:1})]),a(v,{label:"多行翻译prompt:"},{default:c(()=>[a(T,{modelValue:p.data.promptMultipleTranslations,"onUpdate:modelValue":u[0]||(u[0]=r=>p.data.promptMultipleTranslations=r),autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(v,{label:"单条翻译prompt:"},{default:c(()=>[a(T,{modelValue:p.data.promptSingleTranslations,"onUpdate:modelValue":u[1]||(u[1]=r=>p.data.promptSingleTranslations=r),autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(E),Ge,a(v,{label:"topP"},{default:c(()=>[d("div",$e,[a(K,{modelValue:p.data.topP,"onUpdate:modelValue":u[2]||(u[2]=r=>p.data.topP=r),"show-input":"",min:0,max:1,step:.01,class:"item"},null,8,["modelValue","step"])]),d("div",Je,[a(J,{placement:"top"},{content:c(()=>[y(" 使用温度采样的替代方法称为核心采样， "),Qe,y("其中模型考虑具有top_p概率质量的令牌的结果。 "),Ye,y("因此，0.1 意味着只考虑包含前 10% 概率质量的代币。 ")]),default:c(()=>[a($,{icon:re(ce)},null,8,["icon"])]),_:1})])]),_:1}),a(v,{label:"temperature"},{default:c(()=>[d("div",We,[a(K,{modelValue:p.data.temperature,"onUpdate:modelValue":u[3]||(u[3]=r=>p.data.temperature=r),"show-input":"",min:0,max:2,step:.01,class:"item"},null,8,["modelValue","step"])]),d("div",Ze,[a(J,{placement:"top"},{content:c(()=>[y(" 使用什么取样温度，0到2之间。 "),Xe,y("较高的值(如0.8)将使输出更加随机， "),et,y("而较低的值(如0.2)将使输出更加集中和确定。 ")]),default:c(()=>[a($,{icon:re(ce)},null,8,["icon"])]),_:1})])]),_:1}),a(v,{label:"presencePenalty"},{default:c(()=>[d("div",tt,[a(K,{modelValue:p.data.presencePenalty,"onUpdate:modelValue":u[4]||(u[4]=r=>p.data.presencePenalty=r),"show-input":"",min:0,max:2,step:.01,class:"item"},null,8,["modelValue","step"])]),d("div",nt,[a(J,{placement:"top"},{content:c(()=>[y(" 根据新词是否出现在文本中， "),ot,y("惩罚多少。增加模型讨论新主题的可能性。 "),at,y("0到2之间的值。 ")]),default:c(()=>[a($,{icon:re(ce)},null,8,["icon"])]),_:1})])]),_:1}),a(v,{label:"frequencyPenalty"},{default:c(()=>[d("div",lt,[a(K,{modelValue:p.data.frequencyPenalty,"onUpdate:modelValue":u[5]||(u[5]=r=>p.data.frequencyPenalty=r),"show-input":"",min:0,max:2,step:.01,class:"item"},null,8,["modelValue","step"])]),d("div",null,[a(J,{placement:"top"},{content:c(()=>[y(" 到目前为止，根据新标记在文本中的现有频率， "),rt,y("应该惩罚多少个新标记。 "),it,y("降低模型逐字重复同一行的可能性。 "),st,y("0到2之间的值。 ")]),default:c(()=>[a($,{icon:re(ce)},null,8,["icon"])]),_:1})])]),_:1}),a(E),ct,a(v,{label:"代理类型: "},{default:c(()=>[a(de,{modelValue:p.data.proxyType,"onUpdate:modelValue":u[6]||(u[6]=r=>p.data.proxyType=r),class:"ml-4"},{default:c(()=>[a(ee,{label:"SOCKS",size:"large"},{default:c(()=>[y("SOCKS")]),_:1}),a(ee,{label:"HTTP",size:"large"},{default:c(()=>[y("HTTP")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(v,{label:"地址:",style:{width:"40%"}},{default:c(()=>[a(T,{modelValue:p.data.proxyUlr,"onUpdate:modelValue":u[7]||(u[7]=r=>p.data.proxyUlr=r)},null,8,["modelValue"])]),_:1}),a(v,{label:"端口:",style:{width:"30%"}},{default:c(()=>[a(T,{modelValue:p.data.proxyPort,"onUpdate:modelValue":u[8]||(u[8]=r=>p.data.proxyPort=r),type:"number"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(V,{label:"测试",name:"text"},{default:c(()=>[a(te,{model:p.data,"label-width":"150px"},{default:c(()=>[a(v,{label:"多行翻译prompt:"},{default:c(()=>[a(T,{modelValue:p.data.promptMultipleTranslations,"onUpdate:modelValue":u[9]||(u[9]=r=>p.data.promptMultipleTranslations=r),autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(v,{label:"单条翻译prompt:"},{default:c(()=>[a(T,{modelValue:p.data.promptSingleTranslations,"onUpdate:modelValue":u[10]||(u[10]=r=>p.data.promptSingleTranslations=r),autosize:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),a(E),ut,d("div",dt,[a(D,{onClick:g,type:"primary",link:""},{default:c(()=>[y("新增翻译数据")]),_:1})]),a(e,{data:P.data.translationDataList,style:{width:"100%"},"max-height":"300"},{default:c(()=>[a(ne,{prop:"id",label:"id",width:"100"}),a(ne,{prop:"originalText",label:"原文"},{default:c(r=>[a(T,{autosize:{minRows:2,maxRows:4},modelValue:r.row.originalText,"onUpdate:modelValue":x=>r.row.originalText=x,type:"textarea",placeholder:"指定翻译原文"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(ne,{label:"操作",width:"100"},{default:c(r=>[a(D,{type:"danger",size:"small",onClick:x=>X(r.row.id)},{default:c(()=>[y("删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(E),d("div",pt,[mt,ft,a(T,{autosize:{minRows:2,maxRows:4},modelValue:P.data.translationData.originalText,"onUpdate:modelValue":u[11]||(u[11]=r=>P.data.translationData.originalText=r),type:"textarea",placeholder:"指定翻译原文"},null,8,["modelValue"])]),a(E),ue.value?(he(),Ce("div",ht,[a(n,null,{header:c(()=>[yt]),default:c(()=>[d("div",null,[gt,a(re(Re),{data:G.data.promptMultipleTranslationsResult},null,8,["data"]),G.data.promptMultipleTranslationsSuccess?we("",!0):(he(),Be(t,{key:0,type:"danger"},{default:c(()=>[y(" 多行翻译结果不通过,结果不符合Json格式 ")]),_:1})),a(E),vt,d("div",null,Ae(G.data.promptSingleTranslationsResult),1)])]),_:1})])):we("",!0),d("div",bt,[a(D,{type:"success",onClick:N},{default:c(()=>[y("保存配置文件")]),_:1}),a(D,{onClick:B,type:"primary"},{default:c(()=>[y("翻译测试")]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});const Vt=ze(_t,[["__scopeId","data-v-da540f73"]]);export{Vt as default};
