(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+BDC":function(t,e,r){"use strict";var i=r("G0B5"),n=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let o=class extends i.d{};n([Object(i.c)({type:String,required:!0})],o.prototype,"icon",void 0),n([Object(i.c)({type:String,default:"fab"})],o.prototype,"iconCategory",void 0),n([Object(i.c)({type:String,required:!0})],o.prototype,"href",void 0),n([Object(i.c)({type:String,required:!0})],o.prototype,"title",void 0),o=n([i.a],o),e.a=o},"+qsm":function(t,e,r){"use strict";r.r(e);var i=r("Sh8+"),n=r("bjd2"),o=r("G0B5"),s=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends o.d{};c=s([Object(o.a)({components:{ProjectLink:n.a,DatedElement:i.a},metaInfo:{title:"Publications"}})],c);var l=c,a=r("KHd+"),f=null,p=Object(a.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("Layout",[t("h1",{staticClass:"title is-3"},[this._v("Publications")]),this._l(this.$page.allPublication.edges,(function(e){return t("DatedElement",{key:e.node.id,attrs:{title:e.node.title,"sub-title":e.node.description,date:e.node.displayDate}},[t("ProjectLink",{attrs:{icon:"eye","icon-category":"fas",title:"View",href:e.node.url}})],1)}))],2)}),[],!1,null,"eeb16f74",null);"function"==typeof f&&f(p);e.default=p.exports},"Sh8+":function(t,e,r){"use strict";var i=r("G0B5"),n=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let o=class extends i.d{};n([Object(i.c)({type:String,required:!0})],o.prototype,"title",void 0),n([Object(i.c)({type:String,required:!0})],o.prototype,"subTitle",void 0),n([Object(i.c)({type:String,required:!0})],o.prototype,"date",void 0),n([Object(i.c)({type:String})],o.prototype,"href",void 0),o=n([i.a],o);var s=o,c=r("KHd+"),l=Object(c.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mb-3"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("h2",{staticClass:"title is-4"},[e(t.href?"g-link":"span",{tag:"component",attrs:{to:t.href}},[t._v(t._s(t.title))])],1),e("div",{staticClass:"subtitle"},[t._v(t._s(t.subTitle))]),t._t("default"),t.href?e("g-link",{staticClass:"read",attrs:{to:t.href}},[t._v("Read More...")]):t._e()],2),e("div",{staticClass:"column is-2 has-text-right-desktop"},[e("span",{staticClass:"has-text-primary is-size-5"},[t._v(t._s(t.date))])])]),e("hr")])}),[],!1,null,null,null);e.a=l.exports},bjd2:function(t,e,r){"use strict";var i=r("+BDC"),n=r("G0B5"),o=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let s=class extends(Object(n.b)(i.a)){};s=o([n.a],s);var c=s,l=r("KHd+"),a=Object(l.a)(c,(function(){var t=this._self._c;this._self._setupProxy;return t("a",{staticClass:"button is-link",attrs:{href:this.href,target:"_blank",rel:"noopener"}},[t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{attrs:{icon:[this.iconCategory,this.icon]}})],1),t("span",[this._v(this._s(this.title))])])}),[],!1,null,null,null);e.a=a.exports}}]);