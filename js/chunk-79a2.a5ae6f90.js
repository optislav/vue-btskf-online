(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79a2"],{"0895":function(t,e,n){t.exports=n.p+"img/google.4eac0414.svg"},"0e82":function(t,e,n){"use strict";var s=n("7ca0"),i=n.n(s);i.a},"0fe0":function(t,e,n){t.exports=n.p+"img/deck.1bf529e2.svg"},1778:function(t,e,n){t.exports=n.p+"img/angle-right.54124231.svg"},"23f5":function(t,e,n){"use strict";var s=n("4a44"),i=n.n(s);i.a},2897:function(t,e,n){"use strict";var s=n("b01f"),i=n.n(s);i.a},"316e":function(t,e,n){t.exports=n.p+"img/flag-russia.f5a21e99.svg"},"31e8":function(t,e,n){var s={"./1.svg":"3e23","./add.svg":"eef4","./angle-left.svg":"6fdf","./angle-right.svg":"1778","./cancel.svg":"f687","./cards.svg":"ea39","./close.svg":"bf37","./deck.svg":"0fe0","./edit.svg":"6582","./fb.svg":"a39e","./filter.svg":"5ee4","./flag-russia.svg":"316e","./flag-us.svg":"6bf7","./google.svg":"0895","./logo1.svg":"39fb","./menu.svg":"36be","./pattern.svg":"bd5a","./pattern2.svg":"9c32","./phone-call.svg":"cae0","./portfolio.svg":"8e7c","./settings.svg":"e9b0","./tasks.svg":"7933","./vk.svg":"330c"};function i(t){var e=a(t);return n(e)}function a(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id="31e8"},"330c":function(t,e,n){t.exports=n.p+"img/vk.95d3de32.svg"},"36be":function(t,e,n){t.exports=n.p+"img/menu.24f5f2af.svg"},"39fb":function(t,e,n){t.exports=n.p+"img/logo1.ba2ca509.svg"},"3e23":function(t,e,n){t.exports=n.p+"img/1.fddb34fe.svg"},"40f4":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{ref:"field",staticClass:"input-text",attrs:{placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.emitValue,keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onEnterPress(e)):null}}})},i=[],a=(n("cadf"),n("551c"),n("097d"),{props:{placeholder:{type:String,required:!0},autoExpand:{type:Boolean,default:!1},value:{type:String,default:""},onEnterPress:{type:Function,default:function(){return console.log("Enter pressed")}},focused:{type:Boolean,default:!1}},watch:{value:function(){var t=this;this.$nextTick(function(){return t.expand()})}},data:function(){return{height:""}},methods:{emitValue:function(t){t&&this.$emit("input",t.srcElement.value)},expand:function(){if(this.autoExpand){var t=this.$refs.field;t.style.height=this.height;var e=window.getComputedStyle(t);return t.style.height=this.getCurrentHeight(t,e)+"px",t.style.height}},getCurrentHeight:function(t,e){var n=function(t){return parseInt(e.getPropertyValue(t),10)},s=["border-top-width","border-bottom-width"],i=s.reduce(function(t,e){return t+n(e)},0)+t.scrollHeight;return i},init:function(){this.height=this.expand(),this.focused&&this.$refs.field.focus()}},mounted:function(){this.init()},activated:function(){this.init()},updated:function(){this.focused&&this.$refs.field.focus()}}),r=a,o=(n("0e82"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);c.options.__file="InputText.vue";e["a"]=c.exports},"43ff":function(t,e,n){"use strict";var s=n("5cf1"),i=n.n(s);i.a},"4a44":function(t,e,n){},"4caf":function(t,e,n){"use strict";var s=n("6bb5"),i=n.n(s);i.a},5791:function(t,e,n){"use strict";var s=n("710f"),i=n.n(s);i.a},"5cf1":function(t,e,n){},"5ee4":function(t,e,n){t.exports=n.p+"img/filter.7a6f398b.svg"},6582:function(t,e,n){t.exports=n.p+"img/edit.efe21e43.svg"},"6bb5":function(t,e,n){},"6bf7":function(t,e,n){t.exports=n.p+"img/flag-us.607c4144.svg"},"6e8c":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"header__heading"},[t.status?n("span",{staticClass:"header__status"}):t._e(),t._v("\n    "+t._s(t.heading)+"\n  ")]),n("div",{staticClass:"header__wrapper header__wrapper--left"},[t._t("left")],2),n("div",{staticClass:"header__wrapper header__wrapper--right"},[t._t("right")],2),n("div",{staticClass:"header__wrapper header__wrapper--center-right"},[t._t("center-right")],2)])},i=[],a={props:{heading:{type:String,required:!0},status:{type:String,default:""}}},r=a,o=(n("23f5"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);c.options.__file="HeaderPanel.vue";e["a"]=c.exports},"6fdf":function(t,e,n){t.exports=n.p+"img/angle-left.3c3aa88c.svg"},"710f":function(t,e,n){},7933:function(t,e,n){t.exports=n.p+"img/tasks.66e7a713.svg"},"7ca0":function(t,e,n){},"8e7c":function(t,e,n){t.exports=n.p+"img/portfolio.63732332.svg"},"9c32":function(t,e,n){t.exports=n.p+"img/pattern2.766c7ec7.svg"},a39e:function(t,e,n){t.exports=n.p+"img/fb.b3fb60e0.svg"},a55d:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal__overlay",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.$emit("close")}}},[n("section",{staticClass:"modal"},[t._t("default")],2)])},i=[],a={},r=a,o=(n("43ff"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);c.options.__file="ModalComponent.vue";e["a"]=c.exports},a59f:function(t,e,n){"use strict";var s=n("c78e"),i=n.n(s);i.a},b01f:function(t,e,n){},bd5a:function(t,e,n){t.exports=n.p+"img/pattern.0689ae84.svg"},bf37:function(t,e,n){t.exports=n.p+"img/close.d58bf80d.svg"},c775:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"dialog-items"},t._l(t.dialogItems,function(t){return n("DialogPreview",{key:t.id,attrs:{heading:t.heading,status:t.status,text:t.text,date:t.date}})}))},i=[],a=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dialog-preview",on:{click:t.goToDialog}},[n("div",{staticClass:"dialog-preview__row"},[n("h2",{staticClass:"dialog-preview__heading"},[t._v("\r\n      "+t._s(t.heading)+"\r\n    ")]),"none"!==t.date?n("div",{staticClass:"dialog-preview__button"},[t._v("\r\n      "+t._s(t.date)+"\r\n    ")]):t._e()]),n("div",{staticClass:"dialog-preview__status",class:{"dialog-preview__company":t.text}},[t.text?t._e():n("span",{staticClass:"dialog-preview__status-marker",style:{backgroundColor:t.getStatusColor(t.status)}}),t._v("\r\n    "+t._s(t.text?t.text:t.getStatusText(t.status))+"\r\n  ")])])}),r=[],o={open:{color:"#579136",text:"Открыто"},close:{color:"red",text:"Закрыто"},queue:{color:"darkorange",text:"В очереди"}},c={props:{status:{type:String,default:"open"},heading:{type:String,required:!0},date:{type:String,default:"Вчера"},text:{type:String}},methods:{goToDialog:function(){this.$router.push("dialog")},getStatusColor:function(t){return o[t].color},getStatusText:function(t){return o[t].text}}},u=c,l=(n("a59f"),n("2877")),f=Object(l["a"])(u,a,r,!1,null,null,null);f.options.__file="DialogPreview.vue";var g=f.exports,p={components:{DialogPreview:g},props:{dialogItems:{type:Array,default:function(){return[]}}}},d=p,v=(n("5791"),Object(l["a"])(d,s,i,!1,null,null,null));v.options.__file="DialogItems.vue";e["a"]=v.exports},c78e:function(t,e,n){},cae0:function(t,e,n){t.exports=n.p+"img/phone-call.138dfbfe.svg"},d724:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"send-uis",class:{"send-uis--last":t.isLast}},[t._t("default")],2)},i=[],a={props:{isLast:{type:Boolean,default:!1}}},r=a,o=(n("2897"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);c.options.__file="SendUIs.vue";e["a"]=c.exports},e4c3:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",style:t.style,on:{click:t.onClick}},[t._v("\n  "+t._s(t.text)+"\n")])},i=[],a={data:function(){return{style:{backgroundImage:"url('".concat(this.iconRequire(),"')"),backgroundSize:"".concat(this.iconSize,"%")}}},props:{text:{type:String,default:""},icon:{type:String},iconSize:{type:String,default:"100"},onClick:{type:Function,default:function(){return console.log("Button clicked")}}},methods:{iconRequire:function(){return this.icon?n("31e8")("./"+this.icon+".svg"):""}}},r=a,o=(n("4caf"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);c.options.__file="ButtonComponent.vue";e["a"]=c.exports},e9b0:function(t,e,n){t.exports=n.p+"img/settings.a513bc91.svg"},ea39:function(t,e,n){t.exports=n.p+"img/cards.032979c9.svg"},eef4:function(t,e,n){t.exports=n.p+"img/add.4d3fa0e4.svg"},f687:function(t,e,n){t.exports=n.p+"img/cancel.be5c4586.svg"}}]);
//# sourceMappingURL=chunk-79a2.a5ae6f90.js.map