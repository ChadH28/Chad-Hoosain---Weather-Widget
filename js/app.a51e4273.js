(function(e){function t(t){for(var a,d,o=t[0],i=t[1],n=t[2],j=0,b=[];j<o.length;j++)d=o[j],Object.prototype.hasOwnProperty.call(s,d)&&s[d]&&b.push(s[d][0]),s[d]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,n||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,o=1;o<c.length;o++){var i=c[o];0!==s[i]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=c[0]))}return e}var a={},s={app:0},r=[];function d(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.m=e,d.c=a,d.d=function(e,t,c){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(c,a,function(t){return e[t]}.bind(null,a));return c},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/Weather-Widget/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var n=0;n<o.length;n++)t(o[n]);var l=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},4678:function(e,t,c){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return c(t)}function r(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function s(e,t,c,s,r,d){var o=Object(a["u"])("router-view");return Object(a["o"])(),Object(a["c"])(o)}var r={name:"App",components:{}},d=(c("c6a1"),c("6b0d")),o=c.n(d);const i=o()(r,[["render",s]]);var n=i,l=c("936e"),j=(c("b0c0"),c("a4d3"),c("e01a"),function(e){return Object(a["r"])("data-v-bfeb2e18"),e=e(),Object(a["p"])(),e}),b={class:"container app-container"},f=j((function(){return Object(a["e"])("h3",null,"Weather Widget",-1)})),u={class:"row card-container"},h={class:"col-sm-12"},m={class:"card weather-card"},p={class:"row"},O={class:"col-sm-6"},y={class:"card-title main-temp"},w={class:"card-title"},g={class:"hi-temp"},v=Object(a["f"])(" / "),M={class:"lo-temp"},q={class:"col-sm-6"},C={class:"card-title weather-desc"},k=["src"],_={class:"row"},x={class:"col-sm-4"},z={class:"card-title"},D={class:"card-value"},Y=Object(a["f"])(" Precipitation"),W={class:"col-sm-4"},P={class:"card-title"},S={class:"card-value"},E=Object(a["f"])(" Humidity"),N={class:"col-sm-4"},Q={class:"card-title"},T={class:"card-value"},I=Object(a["f"])(" Winds"),A={class:"col-sm-6 col-md-6 col-lg-2"},H={class:"card weather-card"},J={class:"card-header"},U={class:"card-title"},F={class:"card-title"},K={class:"card-body"},L=["src"],B={class:"card-footer"},G={class:"footer-hi-temp"},R={class:"footer-lo-temp"},V={class:"col-sm-6 col-md-6 col-lg-2"},X={class:"card weather-card"},Z={class:"card-header"},$={class:"card-title"},ee={class:"card-title"},te={class:"card-body"},ce=["src"],ae={class:"card-footer"},se={class:"footer-hi-temp"},re={class:"footer-lo-temp"},de={class:"col-sm-6 col-md-6 col-lg-2"},oe={class:"card weather-card"},ie={class:"card-header"},ne={class:"card-title"},le={class:"card-title"},je={class:"card-body"},be=["src"],fe={class:"card-footer"},ue={class:"footer-hi-temp"},he={class:"footer-lo-temp"},me={class:"col-sm-6 col-md-6 col-lg-2"},pe={class:"card weather-card"},Oe={class:"card-header"},ye={class:"card-title"},we={class:"card-title"},ge={class:"card-body"},ve=["src"],Me={class:"card-footer"},qe={class:"footer-hi-temp"},Ce={class:"footer-lo-temp"},ke={class:"col-sm-6 col-md-6 col-lg-2"},_e={class:"card weather-card"},xe={class:"card-header"},ze={class:"card-title"},De={class:"card-title"},Ye={class:"card-body"},We=["src"],Pe={class:"card-footer"},Se={class:"footer-hi-temp"},Ee={class:"footer-lo-temp"},Ne={class:"col-sm-6 col-md-6 col-lg-2"},Qe={class:"card weather-card"},Te={class:"card-header"},Ie={class:"card-title"},Ae={class:"card-title"},He={class:"card-body"},Je=["src"],Ue={class:"card-footer"},Fe={class:"footer-hi-temp"},Ke={class:"footer-lo-temp"};function Le(e,t,c,s,r,d){return Object(a["o"])(),Object(a["d"])("div",b,[f,Object(a["e"])("h4",null,Object(a["w"])(r.searchQuery.city.name)+", "+Object(a["w"])(r.searchQuery.city.country),1),Object(a["e"])("div",u,[Object(a["e"])("div",h,[Object(a["e"])("div",m,[Object(a["e"])("div",p,[Object(a["e"])("div",O,[Object(a["f"])(Object(a["w"])(r.today)+" ",1),Object(a["e"])("h1",y,Object(a["w"])(Math.round(r.searchQuery.list[0].main.temp))+"℃",1),Object(a["e"])("h5",w,[Object(a["e"])("span",g,Object(a["w"])(Math.round(r.queriedCity[0].temp.max))+"℃",1),v,Object(a["e"])("span",M,Object(a["w"])(Math.round(r.queriedCity[0].temp.min))+"℃",1)])]),Object(a["e"])("div",q,[Object(a["e"])("h5",C,Object(a["w"])(r.queriedCity[0].weather[0].description),1),Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[0].weather[0].icon+".png",class:"card-img img-fluid weather-img",alt:"..."},null,8,k),Object(a["e"])("div",_,[Object(a["e"])("div",x,[Object(a["e"])("h6",z,[Object(a["e"])("span",D,Object(a["w"])(100*r.queriedCity[0].pop)+"%",1),Y])]),Object(a["e"])("div",W,[Object(a["e"])("h6",P,[Object(a["e"])("span",S,Object(a["w"])(r.queriedCity[0].humidity)+"%",1),E])]),Object(a["e"])("div",N,[Object(a["e"])("h6",Q,[Object(a["e"])("span",T,Object(a["w"])(Math.round(3.6*r.queriedCity[0].wind_speed))+"KM/H "+Object(a["w"])(r.position),1),I])])])])])])]),Object(a["e"])("div",A,[Object(a["e"])("div",H,[Object(a["e"])("div",J,[Object(a["e"])("h5",U,Object(a["w"])(r.tomorrow),1),Object(a["e"])("h6",F,Object(a["w"])(r.queriedCity[1].weather[0].description),1)]),Object(a["e"])("div",K,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[1].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,L)]),Object(a["e"])("div",B,[Object(a["e"])("h5",G,Object(a["w"])(Math.round(r.queriedCity[1].temp.max))+"℃",1),Object(a["e"])("h6",R,Object(a["w"])(Math.round(r.queriedCity[1].temp.min))+"℃",1)])])]),Object(a["e"])("div",V,[Object(a["e"])("div",X,[Object(a["e"])("div",Z,[Object(a["e"])("h5",$,Object(a["w"])(e.two_days),1),Object(a["e"])("h6",ee,Object(a["w"])(r.queriedCity[2].weather[0].description),1)]),Object(a["e"])("div",te,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[2].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,ce)]),Object(a["e"])("div",ae,[Object(a["e"])("h5",se,Object(a["w"])(Math.round(r.queriedCity[2].temp.max))+"℃",1),Object(a["e"])("h6",re,Object(a["w"])(Math.round(r.queriedCity[2].temp.min))+"℃",1)])])]),Object(a["e"])("div",de,[Object(a["e"])("div",oe,[Object(a["e"])("div",ie,[Object(a["e"])("h5",ne,Object(a["w"])(e.three_days),1),Object(a["e"])("h6",le,Object(a["w"])(r.queriedCity[3].weather[0].description),1)]),Object(a["e"])("div",je,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[3].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,be)]),Object(a["e"])("div",fe,[Object(a["e"])("h5",ue,Object(a["w"])(Math.round(r.queriedCity[3].temp.max))+"℃",1),Object(a["e"])("h6",he,Object(a["w"])(Math.round(r.queriedCity[3].temp.min))+"℃",1)])])]),Object(a["e"])("div",me,[Object(a["e"])("div",pe,[Object(a["e"])("div",Oe,[Object(a["e"])("h5",ye,Object(a["w"])(e.four_days),1),Object(a["e"])("h6",we,Object(a["w"])(r.queriedCity[4].weather[0].description),1)]),Object(a["e"])("div",ge,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[4].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,ve)]),Object(a["e"])("div",Me,[Object(a["e"])("h5",qe,Object(a["w"])(Math.round(r.queriedCity[4].temp.max))+"℃",1),Object(a["e"])("h6",Ce,Object(a["w"])(Math.round(r.queriedCity[4].temp.min))+"℃",1)])])]),Object(a["e"])("div",ke,[Object(a["e"])("div",_e,[Object(a["e"])("div",xe,[Object(a["e"])("h5",ze,Object(a["w"])(e.five_days),1),Object(a["e"])("h6",De,Object(a["w"])(r.queriedCity[5].weather[0].description),1)]),Object(a["e"])("div",Ye,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[5].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,We)]),Object(a["e"])("div",Pe,[Object(a["e"])("h5",Se,Object(a["w"])(Math.round(r.queriedCity[5].temp.max))+"℃",1),Object(a["e"])("h6",Ee,Object(a["w"])(Math.round(r.queriedCity[5].temp.min))+"℃",1)])])]),Object(a["e"])("div",Ne,[Object(a["e"])("div",Qe,[Object(a["e"])("div",Te,[Object(a["e"])("h5",Ie,Object(a["w"])(e.six_days),1),Object(a["e"])("h6",Ae,Object(a["w"])(r.queriedCity[6].weather[0].description),1)]),Object(a["e"])("div",He,[Object(a["e"])("img",{src:"http://openweathermap.org/img/wn/"+r.queriedCity[6].weather[0].icon+".png",class:"card-img",alt:"..."},null,8,Je)]),Object(a["e"])("div",Ue,[Object(a["e"])("h5",Fe,Object(a["w"])(Math.round(r.queriedCity[6].temp.max))+"℃",1),Object(a["e"])("h6",Ke,Object(a["w"])(Math.round(r.queriedCity[6].temp.min))+"℃",1)])])])])])}c("d3b7"),c("99af");var Be=c("c1df"),Ge=c.n(Be),Re={name:"Widget",props:{},data:function(){return{searchQuery:[""],queriedCity:[""],position:null,today:null,tomorrow:null}},created:function(){this.getWeather()},methods:{getWeather:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/forecast?q=Cape Town&units=metric&APPID=f72987eddba8e99555da0940af6a7163").then((function(e){return e.json()})).then((function(t){e.searchQuery=t;var c=t.city.coord.lat,a=t.city.coord.lon;fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c,"&lon=").concat(a,"&units=metric&exclude=minutely,hourly,current&appid=f72987eddba8e99555da0940af6a7163")).then((function(e){return e.json()})).then((function(t){e.queriedCity=t.daily,e.today=Ge()(new Date).format("MMMM Do YYYY, h:mm:ss a"),e.tomorrow=Ge()(new Date).add(1,"days").format("dddd"),e.two_days=Ge()(new Date).add(2,"days").format("dddd"),e.three_days=Ge()(new Date).add(3,"days").format("dddd"),e.four_days=Ge()(new Date).add(4,"days").format("dddd"),e.five_days=Ge()(new Date).add(5,"days").format("dddd"),e.six_days=Ge()(new Date).add(6,"days").format("dddd"),e.degrees=t.daily[0].wind_deg,e.position="",e.degrees<90&&(e.position="NE"),e.degrees>90&&e.degrees<180&&(e.position="SE"),e.degrees>180&&e.degrees<270&&(e.position="SW"),e.degrees>270&&e.degrees<360&&(e.position="NW"),0==e.degrees&&360==e.degrees&&(e.position="N"),90==e.degrees&&(e.position="E"),180==e.degrees&&(e.position="S"),270==e.degrees&&(e.position="W"),console.log(t.daily[1].dt_txt),console.log(t.daily[2].dt),console.log(t.daily[3].dt),console.log(Ge()(t.daily[1].dt_txt).format("MMM Do YY")),console.log(Ge()(t.daily[2].dt_txt).format("MMM Do YY")),console.log(Ge()(t.daily[3].dt_txt).format("MMM Do YY")),console.log(Ge()(t.daily[4].dt_txt).format("MMM Do YY")),console.log(Ge()(t.daily[5].dt_txt).format("MMM Do YY"))}))})).catch((function(e){return alert(e,"Invalid information passed in!")}))}}};c("6b76");const Ve=o()(Re,[["render",Le],["__scopeId","data-v-bfeb2e18"]]);var Xe=Ve,Ze=[{path:"/",name:"Widget",component:Xe}],$e=Object(l["a"])({history:Object(l["b"])(),routes:Ze}),et=$e;Object(a["b"])(n).use(et).mount("#app")},"6b76":function(e,t,c){"use strict";c("8696")},8696:function(e,t,c){},c6a1:function(e,t,c){"use strict";c("ca01")},ca01:function(e,t,c){}});
//# sourceMappingURL=app.a51e4273.js.map