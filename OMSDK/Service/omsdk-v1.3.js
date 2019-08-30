;(function(omidGlobal) {
  'use strict';var k,aa='function'==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l='undefined'!=typeof window&&window===this?this:'undefined'!=typeof global&&global?global:this;function ba(){ba=function(){};l.Symbol||(l.Symbol=ca)}var da=0;function ca(a){return'jscomp_symbol_'+(a||'')+da++}
function m(){ba();var a=l.Symbol.iterator;a||(a=l.Symbol.iterator=l.Symbol('iterator'));'function'!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});m=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){m();a={next:a};a[l.Symbol.iterator]=function(){return this};return a}function p(a){m();ba();m();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function q(a,b){function c(){}c.prototype=b.prototype;a.va=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if('prototype'!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function r(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function t(a,b){if(b){var c=l;a=a.split('.');for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}t('Object.assign',function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(a[f]=e[f])}return a}});
t('Object.values',function(a){return a?a:function(a){var b=[],d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.push(a[d]);return b}});t('Object.is',function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});t('Array.prototype.includes',function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length;for(c=c||0;c<e;c++)if(b[c]==a||Object.is(b[c],a))return!0;return!1}});function ha(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)}
function ia(a){a=a.split('-')[0].split('.');for(var b=['1','0','3'],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}return!0};function ja(a,b){return ha(a)&&ia(a)?b?b:[]:b&&'string'===typeof b?JSON.parse(b):[]};var u={ja:'loaded',qa:'start',da:'firstQuartile',la:'midpoint',ra:'thirdQuartile',ca:'complete',ma:'pause',oa:'resume',ba:'bufferStart',aa:'bufferFinish',pa:'skipped',ta:'volumeChange',na:'playerStateChange',Y:'adUserInteraction'},ka={ga:'generic',sa:'video',ka:'media'},la={K:'native',ha:'html',J:'javascript'},ma={K:'native',J:'javascript',NONE:'none'},na={fa:'full',ia:'limited'},oa={$:'backgrounded',ea:'foregrounded'},pa={Z:'app',ua:'web'};function v(a,b,c,d){this.b=a;this.method=b;this.version=c;this.a=d}function qa(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&'string'===typeof a.omid_message_guid&&'string'===typeof a.omid_message_method&&'string'===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)}function ra(a){return new v(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)}
function sa(a){var b={};b=(b.omid_message_guid=a.b,b.omid_message_method=a.method,b.omid_message_version=a.version,b);void 0!==a.a&&(b.omid_message_args=a.a);return b};function ua(a){this.b=a};function va(a){var b=a.document.createElement('iframe');b.id='omid_v1_present';b.name='omid_v1_present';b.style.display='none';a.document.body.appendChild(b)}function wa(){var a=x,b=new MutationObserver(function(c){c.forEach(function(c){'BODY'===c.addedNodes[0].nodeName&&(va(a),b.disconnect())})});b.observe(a.document.documentElement,{childList:!0})};function y(a){this.b=a;this.handleExportedMessage=y.prototype.c.bind(this)}q(y,ua);y.prototype.sendMessage=function(a,b){b=void 0===b?this.b:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.handleExportedMessage(sa(a),this)};y.prototype.c=function(a,b){qa(a)&&this.a&&this.a(ra(a),b)};function xa(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=16*Math.random()|0;return'y'===a?(b&3|8).toString(16):b.toString(16)})};function A(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];ya(function(){throw new (Function.prototype.bind.apply(Error,[null].concat(['Could not complete the test successfully - '],r(b))));},function(){return console.error.apply(console,[].concat(r(b)))})}function za(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];ya(function(){},function(){return console.error.apply(console,[].concat(r(b)))})}
function ya(a,b){'undefined'!==typeof jasmine&&jasmine?a():'undefined'!==typeof console&&console&&console.error&&b()};var Aa=eval('this'),x=function(){if('undefined'!==typeof omidGlobal&&omidGlobal)return omidGlobal;if('undefined'!==typeof global&&global)return global;if('undefined'!==typeof window&&window)return window;if('undefined'!==typeof Aa&&Aa)return Aa;throw Error('Could not determine global object context.');}();function B(a,b){this.b=b=b?b:x;var c=this;a.addEventListener('message',function(a){if('object'===typeof a.data){var b=a.data;qa(b)&&a.source&&c.a&&c.a(ra(b),a.source)}})}q(B,ua);B.prototype.sendMessage=function(a,b){b=b?b:this.b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.postMessage(sa(a),'*')};function Ba(a,b){this.y=this.x=0;this.width=a;this.height=b};function C(a,b){this.x=null!=a.x?a.x:a.left;this.y=null!=a.y?a.y:a.top;this.width=a.width;this.height=a.height;this.endX=this.x+this.width;this.endY=this.y+this.height;this.adSessionId=a.adSessionId||void 0;this.isFriendlyObstructionFor=a.isFriendlyObstructionFor||[];this.clipsToBounds=void 0!==a.clipsToBounds?!0===a.clipsToBounds:!0;this.childViews=a.childViews||[];this.isCreative=a.isCreative||!1;this.a=b}function Ca(a){var b={};return b.width=a.width,b.height=a.height,b}
function E(a){var b={};return Object.assign({},Ca(a),(b.x=a.x,b.y=a.y,b))}function F(a){var b=E(a),c={};return Object.assign({},b,(c.endX=a.endX,c.endY=a.endY,c))}function Da(a,b,c){a.x+=b;a.y+=c;a.endX+=b;a.endY+=c}C.prototype.A=function(a){if(!a)return!1;a=E(a);var b=a.y,c=a.width,d=a.height;return this.x===a.x&&this.y===b&&this.width===c&&this.height===d};function Ea(a){return a.width*a.height};function Fa(a,b){a=E(a);for(var c=[],d=[],e=0;e<b.length;e++){var f=E(b[e]),h=Math.max(a.y,f.y),g=Math.min(a.x+a.width,f.x+f.width),n=Math.min(a.y+a.height,f.y+f.height);G(c,Math.max(a.x,f.x));G(c,g);G(d,h);G(d,n)}c=c.sort(function(a,b){return a-b});d=d.sort(function(a,b){return a-b});return{W:c,X:d}}function G(a,b){-1===a.indexOf(b)&&a.push(b)};function Ga(){this.a=this.b=this.l=this.j=this.c=this.i=void 0;this.o=this.m=0;this.g=[];this.f=[];this.h=[]}Ga.prototype.A=function(a){return a?JSON.stringify(H(this))===JSON.stringify(H(a)):!1};
function H(a){var b=[],c={viewport:a.i,adView:{percentageInView:a.m,reasons:a.h}};if(a.b){c.adView.geometry=E(a.b);c.adView.geometry.pixels=Ea(a.b);c.adView.onScreenGeometry=E(a.a);c.adView.onScreenGeometry.pixels=a.o;for(var d=0;d<a.f.length;d++)b.push(E(a.f[d]));c.adView.onScreenGeometry.obstructions=b;a.j&&a.l&&(c.adView.containerGeometry=E(a.j),c.adView.onScreenContainerGeometry=E(a.l),c.adView.measuringElement=!0)}return c}
function Ha(a,b){b=Ca(b);a.i={};a.i.width=b.width;a.i.height=b.height;a.c={};a.c.x=0;a.c.y=0;a.c.width=b.width;a.c.height=b.height;a.c.endX=b.width;a.c.endY=b.height}function Ia(a,b){var c={};c.x=Math.max(a.x,b.x);c.y=Math.max(a.y,b.y);c.endX=Math.min(a.endX,b.endX);c.endY=Math.min(a.endY,b.endY);c.width=Math.max(0,c.endX-c.x);c.height=Math.max(0,c.endY-c.y);return c}function Ja(a,b){return a.width<b.width||a.height<b.height}
function Ka(a){var b=Ea(a.b);if(b){var c=Ea(a.a);var d=a.f,e=0;if(0<d.length){var f=Fa(a.a,d),h=f.W;f=f.X;for(var g=0;g<h.length-1;g++)for(var n=(h[g]+(h[g]+1))/2,J=h[g+1]-h[g],z=0;z<f.length-1;z++){for(var L=(f[z]+(f[z]+1))/2,ta=f[z+1]-f[z],W=!1,M=0;M<d.length;M++){var w=E(d[M]);if(w.x<n&&w.x+w.width>n&&w.y<L&&w.y+w.height>L){W=!0;break}}W&&(e+=Math.round(J)*Math.round(ta))}}c-=e;b=Math.round(c/b*100);a.m=Math.max(b,0);a.o=Math.max(c,0)}}
function I(a,b){for(var c=!1,d=0;d<a.h.length;d++)a.h[d]===b&&(c=!0);c||a.h.push(b)};function La(){}function Ma(a,b,c,d){var e=new Ga(0);b=new C(b,!1);Ha(e,b);Na(a,b,e,d);if('backgrounded'===c)I(e,'backgrounded');else if(e.b){for(a=0;a<e.g.length;a++){c=e.g[a];if(0!==c.width&&0!==c.height&&e.a){d=F(e.a);b=d.y;var f=d.endX,h=d.endY;c=!(c.endX<=d.x||c.x>=f||c.endY<=b||c.y>=h)}else c=!1;if(c){a:{c=e.g[a];for(d=0;d<e.f.length;d++)if(e.f[d].A(c)){c=!0;break a}c=!1}c=!c}c&&(I(e,'obstructed'),e.f.push(e.g[a]))}Ka(e)}else I(e,'notFound');return e}
function Na(a,b,c,d){var e=b.isCreative?!0:b.adSessionId===d;if(e){c.b=b;var f=F(c.b);a=Ia(c.c,f);Ja(a,f)&&I(c,'clipped');c.a=new C(a,!1)}else if(f=!0,b.a&&(f=-1!==b.isFriendlyObstructionFor.indexOf(d)?!1:!1===b.clipsToBounds),f)for(var h=b.childViews,g=0;g<h.length;g++)f=!!c.b,Na(a,new C(h[g],f),c,d);!e&&c.b&&(b.a?-1!==b.isFriendlyObstructionFor.indexOf(d)||c.g.push(b):(e=F(b),d=F(c.a),E(c.a),a=c.a,0!==a.width&&0!==a.height&&b.clipsToBounds&&(b=Ia(d,e),Ja(b,d)&&(I(c,'clipped'),c.a=new C(b,!1)))))}
;function Oa(){return{apiVersion:'1.0',accessMode:'limited',environment:'app',omidJsInfo:{omidImplementer:'omsdk',serviceVersion:'1.2.17-dev'}}}function Pa(){this.adSessionId=null;this.g=Oa();this.C=null;this.u='foregrounded';this.f=this.a='none';this.h=this.l=this.j=this.i=this.c=this.b=this.F=this.v=null;this.w=!0}var K;function N(){K||(K=new Pa);return K};function Qa(a,b){this.a=a;this.b=b}l.Object.defineProperties(Qa.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.a}},origin:{configurable:!0,enumerable:!0,get:function(){return this.b}}});function Ra(){this.g=[];this.b=[];this.f=[];this.h=[];this.c={};this.a=N()}function Sa(a){a.g=[];a.b=[];a.f=[];a.h=[];a.c={};K.adSessionId=null;K.g=Oa();K.C=null;K.B=void 0;K.D=void 0;K.m=null;K.G=null;K.o=null;K.u='foregrounded';K.a='none';K.f='none';K.v=null;K.F=null;K.b=null;K.c=null;K.i=null;K.j=null;K.l=null;K.h=null;K.w=!0}function Ta(a,b){a.a&&a.a.adSessionId&&!1!==Ua(b)&&a.f.filter(function(a){return a.type===b.event.type}).forEach(function(c){return a.i(c.s,b.event)})}
function O(a,b){a.g.push(b);Ta(a,b)}function Va(a,b,c){a.a&&a.a.adSessionId&&a.g.filter(function(a){return a.event.type===b&&Ua(a)}).map(function(a){return a.event}).forEach(c)}function Ua(a){var b=a.event.type,c=-1!==Object.values(u).indexOf(b)&&'volumeChange'!==b;return'impression'===b?a.origin===N().f:c?a.origin===N().a:!0}function Wa(a,b,c){'media'===b?Xa(a,c):(a.f.push({type:b,s:c}),Va(a,b,c))}function Xa(a,b){Object.keys(u).forEach(function(c){c=u[c];a.f.push({type:c,s:b});Va(a,c,b)})}
function Ya(a,b,c){a.h.push({V:c,s:b});a.b.forEach(function(d){var e=Za(d);'sessionStart'===d.event.type&&(e.data.verificationParameters=c&&a.c[c]);a.i(b,e)})}function $a(a){return a.g.some(function(a){return'impression'===a.event.type})||a.b.some(function(a){return'impression'===a.event.type})}function P(a,b,c){var d=Q(a,'sessionError','native',{errorType:b,message:c});a.b.push(d);a.h.forEach(function(b){a.i(b.s,d.event)})}
function ab(a,b){a.c=Object.assign(a.c,b);if(b=a.a.g){b=Object.assign({},R(a,bb(a,{context:b}),!0),{supportsLoadedEvent:'display'!==a.a.b});var c=Q(a,'sessionStart','native',b);a.b.push(c);a.h.forEach(function(b){var d=b.s,f=Za(c);b=b.V;f.data.verificationParameters=b&&a.c[b];a.i(d,f)},a);cb(a)}}function db(a){var b=a.h,c=Q(a,'sessionFinish','native');a.b.push(c);Sa(a);b.forEach(function(b){return a.i(b.s,c.event)})}
Ra.prototype.i=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,[].concat(r(c)))}catch(e){za(e)}};function eb(a,b){var c=(c=N().o)?H(c).viewport:void 0;var d=(d=N().o)?H(d).adView:void 0;c=R(a,bb(a,{viewport:c,adView:d}));O(a,Q(a,'impression',b,c))}function fb(a,b,c){if(a.a.c||'display'!=a.a.b)b=Q(a,'loaded',b,R(a,void 0===c?null:c)),O(a,b)}
function gb(a,b,c,d){'start'!==b&&'volumeChange'!==b||null!=(d&&d.deviceVolume)||(d.deviceVolume=a.a.v);'start'!==b&&'volumeChange'!==b||null==(d&&d.videoPlayerVolume)||(a.a.F=d.videoPlayerVolume);O(a,Q(a,b,c,d))}function hb(a,b,c){$a(a)?A('Impression event has occcured before the event owners have been registered.'):(a.a.f!==b&&'none'===a.a.f&&(a.a.f=b),a.a.a!==c&&'none'===a.a.a&&(a.a.a=c))}
function cb(a){var b=a.a.a,c=a.g.filter(function(a){return Object.values(u).includes(a.event.type)&&a.origin===b}).map(function(a){return a.event}),d=a.a.adSessionId||'',e={};c=p(c);for(var f=c.next();!f.done;e={event:e.event},f=c.next()){e.event=f.value;e.event.adSessionId||(e.event.adSessionId=d);if('loaded'==e.event.type){if(!a.a.c&&'display'==a.a.b)continue;e.event.data=R(a,e.event.data)}a.f.filter(function(a){return function(b){return b.type===a.event.type}}(e)).forEach(function(a){return function(b){return b.s(a.event)}}(e))}}
function ib(a,b){return'none'!==a.a.f&&a.a.f!==b?(A('Impression event is owned by '+(a.a.f+', not '+b+'.')),!1):!0}function jb(a,b){return'none'!==a.a.a&&a.a.a!==b?(A('Media events are owned by '+(a.a.a+', not '+b+'.')),!1):!0}function R(a,b,c){c=void 0===c?!1:c;b=Object.assign({},b);a.a.b&&Object.assign(b,{mediaType:a.a.b});a.a.c&&(c||'definedByJavaScript'!==a.a.c)&&Object.assign(b,{creativeType:a.a.c});return b}
function bb(a,b){return a.a.i&&'definedByJavaScript'!==a.a.i?Object.assign({},b,{impressionType:a.a.i}):b}function Q(a,b,c,d){return new Qa({adSessionId:a.a.adSessionId||'',timestamp:(new Date).getTime(),type:b,data:d},c)}function Za(a){a=a.event;return{adSessionId:a.adSessionId,timestamp:a.timestamp,type:a.type,data:a.data}};function kb(a,b,c){'container'===b&&void 0!==a.a.B&&a.a&&null!=a.a.adSessionId&&(a.a.m=Ma(a.b,a.a.B,a.a.u,a.a.adSessionId));'creative'===b&&a.a.D&&(a.a.G=Ma(a.b,a.a.D,a.a.u,a.a.adSessionId));if(a.a.m)if(a.a.G){b=new Ga(0);var d=a.a.m,e=a.a.G,f=d.i,h=d.b,g=d.a,n=e.b;e=e.a;f&&h&&g&&n&&e&&(Ha(b,f),b.j=new C(h,!1),b.l=new C(g,!1),b.g=Object.assign([],d.g),b.f=Object.assign([],d.f),b.h=Object.assign([],d.h),d=b.j.x,f=b.j.y,n=new C(n,!1),e=new C(e,!1),Da(n,d,f),Da(e,d,f),b.b=n,b.a=Ia(e,g),-1===b.h.indexOf('backgrounded')&&
Ka(b))}else b=a.a.m;else b=null;g=a.a.o;if(b&&!b.A(g)||c)g=H(b),c&&(g.adView.reasons=g.adView.reasons||[c]),c=a.c,O(c,Q(c,'geometryChange','native',{viewport:g.viewport,adView:g.adView})),a.a.o=b};function lb(a,b,c){this.g=a;this.w=b;this.u=c;this.c=N();this.a=null;this.b=this.h=void 0;this.v=!0;S(this)}function S(a){if(!a.a){var b;a:{if((b=a.g.document)&&b.getElementsByClassName&&(b=b.getElementsByClassName('omid-element'))){if(1==b.length){b=b[0];break a}1<b.length&&a.v&&(P(a.u,'generic',"More than one element with 'omid-element' class name."),a.v=!1)}b=null}b&&(b.tagName&&'video'===b.tagName.toLowerCase()?a.c.l=b:a.c.j=b,mb(a))}}
function mb(a){a.c.l?(a.a=a.c.l,a.m()):a.c.j&&(a.a=a.c.j,'iframe'===a.a.tagName.toLowerCase()?a.c.h&&a.m():a.m())}function nb(a){a.b&&a.h&&(a.a.tagName&&'iframe'===a.a.tagName.toLowerCase()?a.c.h&&(a.b.isCreative=!1,ob(a),pb(a)):(a.c.h?(a.b.isCreative=!1,ob(a)):a.b.isCreative=!0,pb(a)))}function pb(a){a.c.D=a.h;kb(a.w,'creative')}
function ob(a){if(a.c.h){var b=new C(a.c.h,!1);Da(b,a.b.x,a.b.y);b.clipsToBounds=!0;b.isCreative=!0;for(var c=0;c<a.b.childViews.length;c++)if(a.b.childViews[c].isCreative){a.b.childViews[c]=b;return}a.b.childViews.push(b)}};function qb(a,b,c){return rb(a,'setInterval')(b,c)}function sb(a,b){rb(a,'clearInterval')(b)}function tb(a,b){rb(a,'clearTimeout')(b)}function rb(a,b){return a.a&&a.a[b]?a.a[b]:ub(a,b)}
function vb(a,b,c,d){if(a.a.document&&a.a.document.body){var e=a.a.document.createElement('img');e.width=1;e.height=1;e.style.display='none';e.src=b;c&&e.addEventListener('load',function(){return c()});d&&e.addEventListener('error',function(){return d()});a.a.document.body.appendChild(e)}else ub(a,'sendUrl')(b,c,d)}function ub(a,b){if(a.a&&a.a.omidNative&&a.a.omidNative[b])return a.a.omidNative[b].bind(a.a.omidNative);throw Error('Native interface method "'+b+'" not found.');};function wb(a,b,c,d){lb.call(this,a,b,d);this.f=void 0;this.i=c}q(wb,lb);wb.prototype.o=function(){void 0!==this.f&&(sb(this.i,this.f),this.f=void 0)};wb.prototype.m=function(){var a=this;this.a?void 0===this.f&&(this.f=qb(this.i,function(){return xb(a)},200),xb(this)):this.f=void 0};
function xb(a){if(void 0!==a.f){var b=new C(new Ba(a.g.innerWidth,a.g.innerHeight),!1),c=a.a.getBoundingClientRect();if(null==c.x||isNaN(c.x))c.x=c.left;if(null==c.y||isNaN(c.y))c.y=c.top;c=new C(c,!1);b.A(a.h)&&c.A(a.b)||(a.b=c,a.b.clipsToBounds=!0,a.h=b,a.h.childViews.push(a.b),nb(a))}};function yb(a,b,c){lb.call(this,a,b,c);this.l=this.i=this.j=this.f=void 0}q(yb,lb);yb.prototype.o=function(){this.f&&this.f.disconnect();zb(this)};yb.prototype.m=function(){this.a&&(this.f||(this.f=Ab(this),this.f.observe(this.a)),Bb(this.a)&&Cb(this))};function zb(a){a.j&&(a.j.disconnect(),a.j=void 0);a.i&&(a.i.disconnect(),a.i=void 0);a.l&&((0,a.g.removeEventListener)('resize',a.l),a.l=void 0)}function Bb(a){a=a.getBoundingClientRect();return!a.width||!a.height}
function Ab(a){return new a.g.IntersectionObserver(function(b){try{if(b.length){for(var c=b[0],d=1;d<b.length;d++)b[d].time>c.time&&(c=b[d]);b=c;a.h=new C(b.rootBounds,!1);a.b=new C(b.boundingClientRect,!1);a.b.clipsToBounds=!0;a.h.childViews.push(a.b);nb(a)}}catch(e){a.o(),P(a.u,'generic','Problem handling IntersectionObserver callback: '+e.message)}},{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}
function Cb(a){a.g.ResizeObserver?a.j||(a.j=Db(a,function(){return Eb(a)}),a.j.observe(a.a)):(a.l||(a.l=function(){return Eb(a)},(0,a.g.addEventListener)('resize',a.l)),a.i||(a.i=new MutationObserver(function(){return Eb(a)}),a.i.observe(a.a,{childList:!1,attributes:!0,subtree:!1})))}function Eb(a){a.a&&!Bb(a.a)&&(a.f&&a.a&&(a.f.unobserve(a.a),a.f.observe(a.a)),zb(a))}function Db(a,b){return new a.g.ResizeObserver(b)};function T(a){return'object'===typeof a}function Fb(a){return'number'===typeof a&&!isNaN(a)&&0<=a}function U(a){return'string'===typeof a}function V(a,b){return U(a)&&-1!==Object.values(b).indexOf(a)};function Gb(a){if(!a.b||!a.b.document)throw Error('OMID Service Script is not running within a window.');var b=a.a;a.a=[];for(var c=0;c<b.length;c++){var d=a,e=b[c],f=c,h=e,g=N().w;h=h.accessMode;V(h,na)&&(g='limited'==h);var n=f,J=e.resourceUrl;f=d.b.document;h=f.createElement('iframe');g&&(h.sandbox='allow-scripts');h.id='omid-verification-script-frame-'+n;h.style.display='none';g=J.replace(/"/g,'&quot;');h.srcdoc='<html><head>\n<script type="text/javascript" src="'+g+'">\x3c/script>\n</head><body></body></html>';
f.body.appendChild(h);g=e.vendorKey;e=e.verificationParameters;g=void 0===g?'':g;e=void 0===e?'':e;g&&'string'===typeof g&&''!==g&&e&&'string'===typeof e&&''!==e&&(d.c.c[g]=e)}};function Hb(a,b,c){var d=this;this.c=a;this.a=b;this.b=N();this.g=c;this.f=!1;this.registerSessionObserver(function(a){return Ib(d,a)})}Hb.prototype.registerSessionObserver=function(a){Ya(this.c,a)};Hb.prototype.error=function(a,b){P(this.c,a,b)};
function X(a,b,c){'impression'==b?ib(a.c,'javascript')&&(eb(a.c,'javascript'),a.a&&S(a.a)):('loaded'==b?(c=void 0===c?null:c,jb(a.c,'javascript')&&fb(a.c,'javascript',c)):'javascript'===a.b.a&&gb(a.c,b,'javascript',c),['loaded','start'].includes(b)&&a.a&&S(a.a))}function Jb(a,b){a.b.c=b;if('video'==b||'audio'==b)a.b.b='video';else if('htmlDisplay'==b||'nativeDisplay'==b)a.b.b='display'}
function Ib(a,b){if('sessionStart'===b.type){a.f=!0;try{Gb(a.g)}catch(c){A(c.message)}}'sessionFinish'===b.type&&(a.f=!1,a.registerSessionObserver(function(b){return Ib(a,b)}))}Hb.prototype.setClientInfo=function(a,b,c){var d=this.b.g||{};d.omidJsInfo=Object.assign({},d.omidJsInfo,{sessionClientVersion:a,partnerName:b,partnerVersion:c});this.b.g=d;return this.b.g.omidJsInfo.serviceVersion};function Kb(a,b){b=b?b:omidGlobal;this.a=a;this.f=b;this.b=new y;this.f.omid=this.f.omid||{};this.f.omid.v1_SessionServiceCommunication=this.b;this.c=b&&b.addEventListener&&b.postMessage?new B(b):null;this.b.a=this.g.bind(this);this.c&&(this.c.a=this.h.bind(this))}Kb.prototype.g=function(a,b){Lb(this,a,b,this.b)};Kb.prototype.h=function(a,b){Lb(this,a,b,this.c)};
function Lb(a,b,c,d){function e(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];b=new v(f,'response',g,ha(g)&&ia(g)?b:JSON.stringify(b));d.sendMessage(b,c)}var f=b.b,h=b.method,g=b.version;b=ja(g,b.a);try{Mb(a,h,e,b)}catch(n){d.sendMessage(new v(f,'error',g,'\n        name: '+n.name+'\n        message: '+n.message+'\n        filename: '+n.filename+'\n        lineNumber: '+n.lineNumber+'\n        columnNumber: '+n.columnNumber+'\n        stack: '+n.stack+'\n        toString(): '+n.toString()),
c)}}
function Mb(a,b,c,d){switch(b){case 'SessionService.registerAdEvents':ib(a.a.c,'javascript');break;case 'SessionService.registerMediaEvents':jb(a.a.c,'javascript');break;case 'SessionService.registerSessionObserver':a.a.registerSessionObserver(c);break;case 'SessionService.setSlotElement':c=p(d).next().value;a=a.a;a.b.j=c;a.a&&mb(a.a);break;case 'SessionService.setVideoElement':c=p(d).next().value;a=a.a;a.b.l=c;a.a&&mb(a.a);break;case 'SessionService.setElementBounds':c=p(d).next().value;a=a.a;a.b.h=
c;a.a&&mb(a.a);a.a&&nb(a.a);break;case 'SessionService.startSession':A('Session start from JS is not supported in mobile app.');break;case 'SessionService.finishSession':A('Session finish from JS is not supported in mobile app.');break;case 'SessionService.impressionOccurred':X(a.a,'impression');break;case 'SessionService.loaded':(c=p(d).next().value)?(b={skippable:c.isSkippable,autoPlay:c.isAutoPlay,position:c.position},c.isSkippable&&(b.skipOffset=c.skipOffset),X(a.a,'loaded',b)):X(a.a,'loaded');
break;case 'SessionService.start':b=p(d);c=b.next().value;b=b.next().value;X(a.a,'start',{duration:c,videoPlayerVolume:b});break;case 'SessionService.firstQuartile':X(a.a,'firstQuartile');break;case 'SessionService.midpoint':X(a.a,'midpoint');break;case 'SessionService.thirdQuartile':X(a.a,'thirdQuartile');break;case 'SessionService.complete':X(a.a,'complete');break;case 'SessionService.pause':X(a.a,'pause');break;case 'SessionService.resume':X(a.a,'resume');break;case 'SessionService.bufferStart':X(a.a,
'bufferStart');break;case 'SessionService.bufferFinish':X(a.a,'bufferFinish');break;case 'SessionService.skipped':X(a.a,'skipped');break;case 'SessionService.volumeChange':c={videoPlayerVolume:p(d).next().value};X(a.a,'volumeChange',c);break;case 'SessionService.playerStateChange':c={state:p(d).next().value};X(a.a,'playerStateChange',c);break;case 'SessionService.adUserInteraction':c={interactionType:p(d).next().value};X(a.a,'adUserInteraction',c);break;case 'SessionService.setClientInfo':var e=p(d);
b=e.next().value;d=e.next().value;e=e.next().value;a=a.a.setClientInfo(b,d,e);c(a);break;case 'SessionService.injectVerificationScriptResources':c=p(d).next().value;a=a.a;b=a.g;b.a.push.apply(b.a,[].concat(r(c)));if(a.f)try{Gb(a.g)}catch(f){A(f.message)}break;case 'SessionService.setCreativeType':c=p(d).next().value;Jb(a.a,c);break;case 'SessionService.setImpressionType':c=p(d).next().value;a.a.b.i=c;break;case 'SessionService.setContentUrl':c=p(d).next().value;a.a.b.C=c;break;case 'SessionService.sessionError':b=
p(d),c=b.next().value,b=b.next().value,a.a.error(c,b)}};function Y(a,b,c,d,e,f){this.f=a;this.a=b;this.c=c;this.h=d;this.g=f;this.b=N()}k=Y.prototype;
k.L=function(a){if(!(!(a&&T(a)&&V(a.impressionOwner,ma))||'videoEventsOwner'in a&&null!=a.videoEventsOwner&&!V(a.videoEventsOwner,ma)||'mediaEventsOwner'in a&&null!=a.mediaEventsOwner&&!V(a.mediaEventsOwner,ma))){if(a.creativeType&&a.impressionType)null==this.b.c&&Jb(this.f,a.creativeType),null==this.b.i&&(this.b.i=a.impressionType),hb(this.a,a.impressionOwner,a.mediaEventsOwner);else{var b=a.videoEventsOwner;this.b.b=null==b||'none'===b?'display':'video';hb(this.a,a.impressionOwner,a.videoEventsOwner)}a&&
null!=a.isolateVerificationScripts&&'boolean'===typeof a.isolateVerificationScripts&&(this.b.w=a.isolateVerificationScripts)}};
k.O=function(a,b,c){var d;if(d=T(b)){if(d=V(b.environment,pa)&&V(b.adSessionType,la))d=b.omidNativeInfo,d=T(d)?U(d.partnerName)&&U(d.partnerVersion):!1;d&&(d=b.app,d=T(d)?U(d.libraryVersion)&&U(d.appId):!1)}if(d){d=this.f;c=void 0===c?null:c;null==a&&(a=xa());d.b.adSessionId=a;a=d.b;var e=a.g||{};b.omidJsInfo=Object.assign({},e.omidJsInfo||{},b.omidJsInfo||{});e=b=Object.assign({},e,b);a.w||(a.l?(e.videoElement=a.l,e.accessMode='full'):a.j&&(e.slotElement=a.j,e.accessMode='full'));a.g=b;void 0!==
b.contentUrl&&(a.C=b.contentUrl);ab(d.c,c);d.a&&S(d.a)}};k.M=function(){var a=this.f;db(a.c);a.a.o()};k.T=function(a){T(a)&&Fb(a.x)&&Fb(a.y)&&Fb(a.width)&&Fb(a.height)&&(this.b.B=a,kb(this.c,'container'))};k.U=function(a){V(a,oa)&&(this.b.u=a,'backgrounded'===a?kb(this.c,'container','backgrounded'):kb(this.c,'container'))};k.P=function(a){'impression'===a&&(this.H(),this.g&&S(this.g))};k.H=function(){ib(this.a,'native')&&eb(this.a,'native')};
k.N=function(a){a=void 0===a?null:a;jb(this.a,'native')&&fb(this.a,'native',a)};k.error=function(a,b){V(a,ka)&&P(this.a,a,b)};k.R=function(a,b){this.I(a,b)};k.I=function(a,b){jb(this.a,'native')&&V(a,u)&&(void 0===b||T(b))&&('loaded'==a?fb(this.a,'native',b):gb(this.a,a,'native',b))};k.S=function(a){if('none'!==this.a.a.a&&'number'===typeof a&&!isNaN(a)){this.b.v=a;a=this.h;var b=a.a.F;null!=b&&gb(a.b,'volumeChange','native',{videoPlayerVolume:b,deviceVolume:a.a.v})}};Y.prototype.startSession=Y.prototype.O;
Y.prototype.error=Y.prototype.error;Y.prototype.finishSession=Y.prototype.M;Y.prototype.publishAdEvent=Y.prototype.P;Y.prototype.publishImpressionEvent=Y.prototype.H;Y.prototype.publishVideoEvent=Y.prototype.R;Y.prototype.publishMediaEvent=Y.prototype.I;Y.prototype.publishLoadedEvent=Y.prototype.N;Y.prototype.setNativeViewHierarchy=Y.prototype.T;Y.prototype.setState=Y.prototype.U;Y.prototype.setDeviceVolume=Y.prototype.S;Y.prototype.init=Y.prototype.L;function Nb(a,b,c){c=c?c:x;this.g=a;this.a=b;this.h={};this.f={};this.c=new y;c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.c;this.b=null;c&&c.addEventListener&&c.postMessage&&(this.b=new B(c));this.c.a=this.i.bind(this);this.b&&(this.b.a=this.j.bind(this))}function Ob(a,b,c,d){vb(a.a,b,c,d)}function Pb(a,b,c,d){ub(a.a,'downloadJavaScriptResource')(b,c,d)}Nb.prototype.j=function(a,b){this.b&&Qb(this,a,b,this.b)};Nb.prototype.i=function(a,b){Qb(this,a,b,this.c)};
function Qb(a,b,c,d){function e(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];b=new v(f,'response',g,ha(g)&&ia(g)?b:JSON.stringify(b));d.sendMessage(b,c)}var f=b.b,h=b.method,g=b.version;b=ja(g,b.a);try{switch(h){case 'VerificationService.addEventListener':var n=p(b).next().value;Wa(a.g,n,e);break;case 'VerificationService.addSessionListener':var J=p(b).next().value;Ya(a.g,e,J);break;case 'VerificationService.sendUrl':var z=p(b).next().value;Ob(a,z,function(){return e(!0)},function(){return e(!1)});
break;case 'VerificationService.setTimeout':var L=p(b),ta=L.next().value,W=L.next().value;a.h[ta]=rb(a.a,'setTimeout')(e,W);break;case 'VerificationService.clearTimeout':var M=p(b).next().value;tb(a.a,a.h[M]);break;case 'VerificationService.setInterval':var w=p(b),Yb=w.next().value,Zb=w.next().value;a.f[Yb]=qb(a.a,e,Zb);break;case 'VerificationService.clearInterval':var $b=p(b).next().value;sb(a.a,a.f[$b]);break;case 'VerificationService.injectJavaScriptResource':var ac=p(b).next().value;Pb(a,ac,
function(a){return e(!0,a)},function(){return e(!1)});break;case 'VerificationService.getVersion':p(b).next();var bc=N().g.omidJsInfo;e(bc.serviceVersion)}}catch(D){d.sendMessage(new v(f,'error',g,'\n              name: '+D.name+'\n              message: '+D.message+'\n              filename: '+D.filename+'\n              lineNumber: '+D.lineNumber+'\n              columnNumber: '+D.columnNumber+'\n              stack: '+D.stack+'\n              toString(): '+D.toString()+'\n          '),c)}};var Z=new Ra,Rb=new function(){var a;this.a=a=void 0===a?omidGlobal:a};new Nb(Z,Rb);var Sb=new function(){var a=new La;this.c=Z;this.b=a;this.a=N()},Tb;if(x){var Ub=x;Tb=Ub.IntersectionObserver&&(Ub.MutationObserver||Ub.ResizeObserver)?new yb(x,Sb,Z):new wb(x,Sb,Rb,Z)}else Tb=null;var Vb=Tb,Wb=new Hb(Z,Vb,new function(){var a=a?a:x;this.c=Z;this.b=a;this.a=[]});x.omidBridge=new Y(Wb,Z,Sb,new function(){var a=N();this.b=Z;this.a=a},0,Vb);new Kb(Wb);
if(x.frames&&x.document&&!('omid_v1_present'in x.frames)){var Xb;if(Xb=!x.document.body)Xb='MutationObserver'in x;Xb?wa():x.document.body?va(x):x.document.write('<iframe style="display:none" id="omid_v1_present" name="omid_v1_present"></iframe>')};
}).call(this, this);
