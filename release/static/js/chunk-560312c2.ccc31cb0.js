(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-560312c2"],{"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),a=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},2762:function(t,e,n){},"549b":function(t,e,n){"use strict";var r=n("d864"),a=n("63b6"),i=n("241e"),o=n("b0dc"),s=n("3702"),c=n("b447"),u=n("20fd"),f=n("7cd6");a(a.S+a.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,l,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,m=void 0!==b,g=0,h=f(d);if(m&&(b=r(b,v>2?arguments[2]:void 0,2)),void 0==h||p==Array&&s(h))for(e=c(d.length),n=new p(e);e>g;g++)u(n,g,m?b(d[g],g):d[g]);else for(l=h.call(d),n=new p;!(a=l.next()).done;g++)u(n,g,m?o(l,b,[a.value,g],!0):a.value);return n.length=g,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},6511:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center page-title"},[t._v("魔方密室 v0.0.1")]),n("Row",{staticClass:"row"},[0===t.games.length?n("div",{staticClass:"col"},[n("h3",{staticClass:"card-title text-danger mt-5"},[t._v("对不起,系统没有获取到任何游戏，请检查一下服务端链接是否正常")])]):t._e(),t._l(t.games,function(e,r){return n("Col",{key:r,staticClass:"game-item",attrs:{md:6}},[n("Card",{staticClass:"card"},[n("h4",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v(t._s(e.note||"暂无游戏描述"))]),n("div",{staticClass:"action"},[e.enable?n("router-link",{attrs:{to:"/game/"+e.id,target:"_blank"}},[n("i-button",{attrs:{type:"primary"}},[t._v("查看游戏")])],1):t._e(),e.enable?t._e():n("i-button",{attrs:{disabled:"",type:"primary"}},[t._v("已关闭")])],1)])])],1)})],2)],1)},a=[],i=n("75fc"),o=(n("96cf"),n("3b8d")),s=(n("cadf"),n("551c"),n("097d"),n("7424")),c={name:"home",components:{},data:function(){return{games:[]}},computed:{},methods:{getGames:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].get("/game/config");case 2:if(e=t.sent,e.ok){t.next=5;break}return t.abrupt("return",!1);case 5:n=e.data.data,this.games=Object(i["a"])(n.games);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getGames()}},u=c,f=(n("679e"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"44ec85e2",null);l.options.__file="home.vue";e["default"]=l.exports},"679e":function(t,e,n){"use strict";var r=n("2762"),a=n.n(r);a.a},"75fc":function(t,e,n){"use strict";var r=n("a745"),a=n.n(r);function i(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("774e"),s=n.n(o),c=n("c8bb"),u=n.n(c);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return i(t)||f(t)||l()}n.d(e,"a",function(){return d})},"774e":function(t,e,n){t.exports=n("d2d5")},"95d5":function(t,e,n){var r=n("40c3"),a=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(r(e))}},a745:function(t,e,n){t.exports=n("f410")},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-560312c2.ccc31cb0.js.map