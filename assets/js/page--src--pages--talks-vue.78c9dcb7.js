(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+BDC":function(t,e,r){"use strict";var n=r("G0B5"),c=function(t,e,r,n){var c,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let i=class extends n.d{};c([Object(n.c)({type:String,required:!0})],i.prototype,"icon",void 0),c([Object(n.c)({type:String,default:"fab"})],i.prototype,"iconCategory",void 0),c([Object(n.c)({type:String,required:!0})],i.prototype,"href",void 0),c([Object(n.c)({type:String,required:!0})],i.prototype,"title",void 0),i=c([n.a],i),e.a=i},RerK:function(t,e,r){"use strict";r.r(e);var n=r("Sh8+"),c=r("bjd2"),i=r("V9Hk"),o=r("G0B5"),a=function(t,e,r,n){var c,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let l=class extends o.d{};l=a([Object(o.a)({components:{Talk:i.a,ProjectLink:c.a,DatedElement:n.a},metaInfo:{title:"Talks"}})],l);var s=l,f=r("KHd+"),d=null,p=Object(f.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",{staticClass:"title is-3"},[this._v("Talks")]),this._l(this.$page.allTalk.edges,(function(t){return e("Talk",{key:t.node.id,attrs:{talk:t.node}})}))],2)}),[],!1,null,"1e58157d",null);"function"==typeof d&&d(p);e.default=p.exports},"Sh8+":function(t,e,r){"use strict";var n=r("G0B5"),c=function(t,e,r,n){var c,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let i=class extends n.d{};c([Object(n.c)({type:String,required:!0})],i.prototype,"title",void 0),c([Object(n.c)({type:String,required:!0})],i.prototype,"subTitle",void 0),c([Object(n.c)({type:String,required:!0})],i.prototype,"date",void 0),c([Object(n.c)({type:String})],i.prototype,"href",void 0),i=c([n.a],i);var o=i,a=r("KHd+"),l=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("h2",{staticClass:"title is-4"},[r(t.href?"g-link":"span",{tag:"component",attrs:{to:t.href}},[t._v(t._s(t.title))])],1),r("div",{staticClass:"subtitle"},[t._v(t._s(t.subTitle))]),t._t("default"),t.href?r("g-link",{staticClass:"read",attrs:{to:t.href}},[t._v("Read More...")]):t._e()],2),r("div",{staticClass:"column is-2 has-text-right-desktop"},[r("span",{staticClass:"has-text-primary is-size-5"},[t._v(t._s(t.date))])])]),r("hr")])}),[],!1,null,null,null);e.a=l.exports},V9Hk:function(t,e,r){"use strict";var n=r("Sh8+"),c=r("bjd2"),i=r("G0B5"),o=function(t,e,r,n){var c,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let a=class extends i.d{};o([Object(i.c)({type:Object,required:!0})],a.prototype,"talk",void 0),a=o([Object(i.a)({components:{ProjectLink:c.a,DatedElement:n.a}})],a);var l=a,s=r("KHd+"),f=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("DatedElement",{attrs:{title:t.talk.title,"sub-title":t.talk.where,date:t.talk.date}},[r("div",{staticClass:"buttons"},[t.talk.page?r("ProjectLink",{attrs:{icon:"eye","icon-category":"fas",title:"Page",href:t.talk.page}}):t._e(),t.talk.slides?r("ProjectLink",{attrs:{icon:"file-pdf","icon-category":"fas",title:"Slides",href:t.talk.slides}}):t._e(),t.talk.recording?r("ProjectLink",{attrs:{icon:"video","icon-category":"fas",title:"Recording",href:t.talk.recording}}):t._e()],1)])}),[],!1,null,null,null);e.a=f.exports},bjd2:function(t,e,r){"use strict";var n=r("+BDC"),c=r("G0B5"),i=function(t,e,r,n){var c,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let o=class extends(Object(c.b)(n.a)){};o=i([c.a],o);var a=o,l=r("KHd+"),s=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button is-link",attrs:{href:this.href,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:[this.iconCategory,this.icon]}})],1),e("span",[this._v(this._s(this.title))])])}),[],!1,null,null,null);e.a=s.exports}}]);