(self["webpackChunkqs_blog"]=self["webpackChunkqs_blog"]||[]).push([[298],{4298:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"articleld"},[e("div",{staticClass:"scrollbar",style:{width:t.postProgress}}),e("header",[e("div",{staticClass:"header"},[t._m(0),t._m(1),e("div",{staticClass:"right"},[e("i",{staticClass:"iconfont"},[t._v("")]),e("img",{attrs:{src:n(3756),alt:"作者简介"},on:{click:t.goToAbout}})])])]),t._m(2),e("footer",{class:{show:t.scroll_current>=100}},[e("div",{staticClass:"foot-box"},[e("h2",[t._v("川西报团的开始、愿你自由一生")]),e("ul",{staticClass:"options"},t._l(t.options,(function(n,o){return e("li",{key:o},[e("span",{staticClass:"iconfont",domProps:{innerHTML:t._s(n.icon)},on:{click:function(e){return t.operation(n.type)}}}),e("span",{class:{skin:"skin"==n.type}},[t._v(t._s(n.num))])])})),0)])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("span",[t._v("山")]),e("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("p",[t._v("川西报团的开始、愿你自由一生")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v("千山空间简介")]),e("div",{staticClass:"timer stuff"},[e("span",[t._v("七月 29, 2022")]),e("span",[t._v("阅读 318")]),e("span",[t._v("字数 2412")]),e("span",[t._v("评论 22")]),e("span",[t._v("喜欢 100")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"bolck",staticStyle:{height:"1000px"}}),t._v(" 01 在康定住一周了，准备前往下一站，发现新都桥住宿不好且贵，附近的景点也比较难走，鱼子西没有小巴车到达！ 看到美团的两天一夜游，不贵，刚好体验一下报团的生活方式，应该会是一场收获不菲的体验。 早上九点，下楼跟可爱的阿姨说放一下行李箱，我出去逛一圈，明天再回来，随后坐了出租车前往成名饭店。 在成名饭店等旅游车时，被冻直哆嗦，没想到这么冷，出门时还不以为然，现在被冻得想回去拿个棉衣服，可惜时间来不及了。 来了一辆又一辆的大巴旅游车，但不是来接我的。 再过了十多分钟到了，导游跟我说：“先把行李放我位置，一起去吃饭，待会没位置的话，你坐我位置。” 还是挺暖心的，走去吃饭路上跑出个哥们，让我坐他旁边，晚上一起拼房。 我好奇，这哥们是看上我的装备了吧，哈哈哈哈！ ")])])}],i=function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"header-content",class:[t.qrccode,t.changeClass]},[t.like?e("canvas",{attrs:{id:"qrccode"}}):t._e(),e("div",{staticClass:"l icon"},[e("div",{staticClass:"logo-img",on:{click:function(e){return t.toPage("/")}}},[e("img",{attrs:{src:"/image/logo/logo3.png"}})]),e("span",{staticClass:"iconfont",class:[t.palyStatus],on:{click:t.changeMusic}})]),e("div",{staticClass:"title",class:{active:t.scroll_current>=100}},[t._v(t._s(t.title))]),e("div",{staticClass:"r icon"},[t.like?[e("span",{staticClass:"iconfont icon-wechat"}),e("span",{staticClass:"iconfont icon-like",class:{like:t.isLike},on:{click:t.onLike}})]:t._e(),e("span",{staticClass:"myself",on:{click:function(e){return t.toPage("/about")}}},[e("img",{attrs:{src:t.$store.state.data.base.adminAvatar}})])],2),t.like?e("div",{staticClass:"like-hint-box",class:{likeHint:t.likeHint}},[e("div",{staticClass:"like-hint"},[t._v("只能点赞一次哦！")]),e("span"),e("span")]):t._e(),e("div",{staticClass:"musicBar",style:{width:t.progressLength}})]),e("div",{staticClass:"music-btn",class:[t.mobileMusic],on:{click:t.changeMusic}},[e("svg",{staticClass:"progress-circle",attrs:{viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"progress-background",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent"}}),e("circle",{staticClass:"progress-bar",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent","stroke-dasharray":t.dashArray,"stroke-dashoffset":t.dashOffset}})]),e("span",{staticClass:"iconfont",class:[t.palyStatus]})]),e("audio",{attrs:{id:"music",loop:"",preload:"auto"}},[e("source",{attrs:{type:"audio/mpeg",src:t.music}})])])},s=[],a=(n(7658),n(8385)),c={props:{music:{type:String,default:""},title:{type:String,default:""},like:{type:String,default:""},sticky:{type:Boolean,default:!1},articlePage:{type:Boolean,default:!1},playMusic:{type:Boolean,default:!1}},data(){return{palyStatus:"icon-play",progressLength:0,percent:0,mobileMusic:"",dashArray:100*Math.PI,isLike:!1,qrccode:!1,changeClass:"",likeTime:null,likeHint:!1,played:!1,ss:""}},mounted(){const t={articlePage:()=>{this.$nextTick((()=>{const t=document.getElementById("qrccode");a.toCanvas(t,window.location.href)})),this.isLike=!!localStorage.getItem(`like-${this.like}`)},sticky:()=>{this.$watch("scroll_current",this.scrollStatus,{immediate:!0})},playMusic:()=>{try{document.createEvent("TouchEvent"),this.platform="touchstart"}catch(t){this.platform="click"}document.addEventListener(this.platform,this.touch)}};for(let e in t)this[e]&&t[e]()},beforeDestroy(){this.playMusic&&window.removeEventListener(this.platform,this.touch)},computed:{dashOffset(){return(1-this.percent)*this.dashArray}},methods:{scrollStatus(t,e){console.log(e),this.scroll_current>=100?"top"===this.scroll_direction?this.changeClass="show":"show"==this.changeClass&&(this.changeClass="exit"):this.changeClass=""},async changeMusic(){this.played=!0;let t,e=document.getElementById("music"),n=e.duration;if(this.palyStatus="icon-play"==this.palyStatus?"icon-pause":"icon-play","icon-pause"==this.palyStatus){e.ondurationchange||(e.load(),n=await new Promise(((t,n)=>{e.ondurationchange=()=>{t(e.duration)}})));try{await e.play()}catch(o){return alert("自动播放音乐出现错误，请点击左上角进行播放！"),void this.changeMusic()}const r=()=>{setTimeout((()=>{t=e.currentTime/n,this.progressLength=(100*t).toFixed(2)+"%",this.percent=t,"icon-pause"==this.palyStatus&&r()}),50)};r()}else e.pause()},touch(t){const e=t.target.classList.value;this.qrccode="iconfont icon-wechat"==e?this.qrccode?"":"qrccode":"",["myself","logo-img"].includes(e)||this.played||"iconfont icon-play"==e||this.changeMusic()},onLike(){this.isLike?(clearTimeout(this.likeTime),this.likeHint=!0,this.likeTime=setTimeout((()=>this.likeHint=!1),2e3)):this.$axios.put(`article_like/${this.like}`).then((t=>{this.isLike=!0,this.$emit("liked",!0),localStorage.setItem(`like-${this.like}`,!0)}))},toPage(t){this.$router.push(t)}}},u=c,l=n(1001),f=(0,l.Z)(u,i,s,!1,null,"22af6b30",null),h=f.exports;n(9531),n(8693);var d={components:{Header:h},data(){return{commentTotal:0,contentHeight:0,clientHeight:0,header:!0,isLike:!1,likeHint:!1,likeTime:null,scroll_current:0,defaultDuration:300,scrollTop:0,showIcon:!1,options:[{type:"read",icon:"&#xe622;",num:318},{type:"comment",icon:"&#xe600;",num:28},{type:"like",icon:"&#xe69d;",num:200},{type:"skin",icon:"&#xe648;",activeIcon:"&#xe633;"},{type:"top",icon:"&#xe608;"}],time_icon:"&#xe633;",bg_color:"#000",text_color:"#fff"}},computed:{info(){return this.$store.state.data},postProgress(){if(this.contentHeight<this.clientHeight)return"100%";if(!this.scroll_current)return;const t=this.contentHeight-this.clientHeight+100,e=(this.scroll_current/t*100).toFixed(4);return e<100?e+"%":"100%"}},mounted(){setTimeout((()=>{this.clientHeight=document.documentElement.clientHeight,this.contentHeight=this.getHeight(),window.addEventListener("scroll",this.getScroll),window.addEventListener("scroll",this.showbtn)}))},methods:{operation(t){switch(t){case"top":this.goTop();break;case"skin":this.timeIcon();break;default:}},getScroll(){this.scroll_current=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop},goToAbout(){},getHeight(){const t=[".content",".stuff",".title"],e=t.reduce(((t,e)=>(t+=document.querySelector(e).offsetHeight,t)),0);return e},timeIcon(){"&#xe633;"==this.time_icon?(this.time_icon="&#xe648;",this.bg_color="#000",this.text_color="#fff",document.documentElement.style.setProperty("--theme_bg_color",this.bg_color),document.documentElement.style.setProperty("--theme_text_color",this.text_color)):(this.time_icon="&#xe633;",this.bg_color="#fff",this.text_color="#000",document.documentElement.style.setProperty("--theme_bg_color",this.bg_color),document.documentElement.style.setProperty("--theme_text_color",this.text_color))},showbtn(){this.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,this.scrollTop>this.defaultTop?this.showIcon=!0:this.showIcon=!1,this.scrollTop>document.documentElement.clientHeight?this.showBtn=!0:this.showBtn=!1},goTop(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var t=this.scrollTop/(this.defaultDuration/(1e3/60))>>0,e=this;function n(){e.scrollTop>=0?(e.scrollTop-=t,document.documentElement.scrollTop=document.body.scrollTop=e.scrollTop,n.rafTimer=requestAnimationFrame(n)):(document.body.scrollTop=0,cancelAnimationFrame(n.rafTimer))}n.rafTimer=requestAnimationFrame(n)}},async asyncData(t){const e=t.params.articleId,{data:n}=await t.$axios.get(`article/${e}`);if(1==n.status)return{data:n.body};t.error({statusCode:404,message:"页面未找到～"})},validate({params:t}){return/^\d+$/.test(t.articleId)}},g=d,p=(0,l.Z)(g,o,r,!1,null,"0d7541db",null),m=p.exports},8716:function(t,e,n){"use strict";n(7658);var o={single_source_shortest_paths:function(t,e,n){var r={},i={};i[e]=0;var s,a,c,u,l,f,h,d,g,p=o.PriorityQueue.make();p.push(e,0);while(!p.empty())for(c in s=p.pop(),a=s.value,u=s.cost,l=t[a]||{},l)l.hasOwnProperty(c)&&(f=l[c],h=u+f,d=i[c],g="undefined"===typeof i[c],(g||d>h)&&(i[c]=h,p.push(c,h),r[c]=a));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var m=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(m)}return r},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],o=e;while(o)n.push(o),t[o],o=t[o];return n.reverse(),n},find_path:function(t,e,n){var r=o.single_source_shortest_paths(t,e,n);return o.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(t){var e,n=o.PriorityQueue,r={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(r[e]=n[e]);return r.queue=[],r.sorter=t.sorter||n.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=o},4700:function(t,e,n){"use strict";n(7658),n(3767),n(8585),n(8696),t.exports=function(t){for(var e=[],n=t.length,o=0;o<n;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&n>o+1){var i=t.charCodeAt(o+1);i>=56320&&i<=57343&&(r=1024*(r-55296)+i-56320+65536,o+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},8693:function(t,e,n){var o=n(1068)("jsonp");t.exports=s;var r=0;function i(){}function s(t,e,n){"function"==typeof e&&(n=e,e={}),e||(e={});var s,a,c=e.prefix||"__jp",u=e.name||c+r++,l=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,h=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;function g(){s.parentNode&&s.parentNode.removeChild(s),window[u]=i,a&&clearTimeout(a)}function p(){window[u]&&g()}return f&&(a=setTimeout((function(){g(),n&&n(new Error("Timeout"))}),f)),window[u]=function(t){o("jsonp got",t),g(),n&&n(null,t)},t+=(~t.indexOf("?")?"&":"?")+l+"="+h(u),t=t.replace("?&","?"),o('jsonp req "%s"',t),s=document.createElement("script"),s.src=t,d.parentNode.insertBefore(s,d),p}},1068:function(t,e,n){function o(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function r(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var o="color: "+this.color;t.splice(1,0,o,"color: inherit");var r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(r++,"%c"===t&&(i=r))})),t.splice(i,0,o)}}function i(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function a(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!==typeof process&&"env"in process&&(t={NODE_ENV:"production",BASE_URL:"/"}.DEBUG),t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=n(3455),e.log=i,e.formatArgs=r,e.save=s,e.load=a,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(a())},3455:function(t,e,n){var o;function r(t){var n,o=0;for(n in t)o=(o<<5)-o+t.charCodeAt(n),o|=0;return e.colors[Math.abs(o)%e.colors.length]}function i(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,o){if("%%"===n)return n;c++;var r=e.formatters[o];if("function"===typeof r){var i=s[c];n=r.call(t,i),s.splice(c,1),c--}return n})),e.formatArgs.call(t,s);var u=n.log||e.log||console.log.bind(console);u.apply(t,s)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),"function"===typeof e.init&&e.init(n),n}function s(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"===typeof t?t:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&(t=n[r].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function a(){e.enable("")}function c(t){var n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}n(541),n(7658),e=t.exports=i.debug=i["default"]=i,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(3946),e.names=[],e.skips=[],e.formatters={}},3946:function(t){var e=1e3,n=60*e,o=60*n,r=24*o,i=365.25*r;function s(t){if(t=String(t),!(t.length>100)){var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(s){var a=parseFloat(s[1]),c=(s[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*r;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(t){return t>=r?Math.round(t/r)+"d":t>=o?Math.round(t/o)+"h":t>=n?Math.round(t/n)+"m":t>=e?Math.round(t/e)+"s":t+"ms"}function c(t){return u(t,r,"day")||u(t,o,"hour")||u(t,n,"minute")||u(t,e,"second")||t+" ms"}function u(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}t.exports=function(t,e){e=e||{};var n=typeof t;if("string"===n&&t.length>0)return s(t);if("number"===n&&!1===isNaN(t))return e.long?c(t):a(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},8385:function(t,e,n){const o=n(890),r=n(4553),i=n(8258),s=n(8593);function a(t,e,n,i,s){const a=[].slice.call(arguments,1),c=a.length,u="function"===typeof a[c-1];if(!u&&!o())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=i=void 0):2!==c||e.getContext||(i=n,n=e,e=void 0),new Promise((function(o,s){try{const s=r.create(n,i);o(t(s,e,i))}catch(a){s(a)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(s=n,n=e,e=i=void 0):3===c&&(e.getContext&&"undefined"===typeof s?(s=i,i=void 0):(s=i,i=n,n=e,e=void 0));try{const o=r.create(n,i);s(null,t(o,e,i))}catch(l){s(l)}}e.create=r.create,e.toCanvas=a.bind(null,i.render),e.toDataURL=a.bind(null,i.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return s.render(t,n)}))},890:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},1290:function(t,e,n){n(7658);const o=n(4288).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=o(t),r=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let o=1;o<e-1;o++)i[o]=i[o-1]-r;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],o=e.getRowColCoords(t),r=o.length;for(let e=0;e<r;e++)for(let t=0;t<r;t++)0===e&&0===t||0===e&&t===r-1||e===r-1&&0===t||n.push([o[e],o[t]]);return n}},6355:function(t,e,n){const o=n(5461),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=o.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*r.indexOf(this.data[e]);n+=r.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=i},495:function(t,e,n){function o(){this.buffer=[],this.length=0}n(7658),o.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=o},3880:function(t,e,n){function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n(3767),n(8585),n(8696),o.prototype.set=function(t,e,n,o){const r=t*this.size+e;this.data[r]=n,o&&(this.reservedBit[r]=!0)},o.prototype.get=function(t,e){return this.data[t*this.size+e]},o.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=o},7591:function(t,e,n){n(3767),n(8585),n(8696);const o=n(4700),r=n(5461);function i(t){this.mode=r.BYTE,"string"===typeof t&&(t=o(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},9757:function(t,e,n){const o=n(2839),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case o.L:return r[4*(t-1)+0];case o.M:return r[4*(t-1)+1];case o.Q:return r[4*(t-1)+2];case o.H:return r[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case o.L:return i[4*(t-1)+0];case o.M:return i[4*(t-1)+1];case o.Q:return i[4*(t-1)+2];case o.H:return i[4*(t-1)+3];default:return}}},2839:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,o){if(e.isValid(t))return t;try{return n(t)}catch(r){return o}}},3375:function(t,e,n){const o=n(4288).getSymbolSize,r=7;e.getPositions=function(t){const e=o(t);return[[0,0],[e-r,0],[0,e-r]]}},7874:function(t,e,n){const o=n(4288),r=1335,i=21522,s=o.getBCHDigit(r);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let a=n<<10;while(o.getBCHDigit(a)-s>=0)a^=r<<o.getBCHDigit(a)-s;return(n<<10|a)^i}},7512:function(t,e,n){n(3767),n(8585),n(8696);const o=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)o[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)o[e]=o[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[r[t]+r[e]]}},9176:function(t,e,n){const o=n(5461),r=n(4288);function i(t){this.mode=o.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=r.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},1840:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function o(t,n,o){switch(t){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let o=0,r=0,i=0,s=null,a=null;for(let c=0;c<e;c++){r=i=0,s=a=null;for(let u=0;u<e;u++){let e=t.get(c,u);e===s?r++:(r>=5&&(o+=n.N1+(r-5)),s=e,r=1),e=t.get(u,c),e===a?i++:(i>=5&&(o+=n.N1+(i-5)),a=e,i=1)}r>=5&&(o+=n.N1+(r-5)),i>=5&&(o+=n.N1+(i-5))}return o},e.getPenaltyN2=function(t){const e=t.size;let o=0;for(let n=0;n<e-1;n++)for(let r=0;r<e-1;r++){const e=t.get(n,r)+t.get(n,r+1)+t.get(n+1,r)+t.get(n+1,r+1);4!==e&&0!==e||o++}return o*n.N2},e.getPenaltyN3=function(t){const e=t.size;let o=0,r=0,i=0;for(let n=0;n<e;n++){r=i=0;for(let s=0;s<e;s++)r=r<<1&2047|t.get(n,s),s>=10&&(1488===r||93===r)&&o++,i=i<<1&2047|t.get(s,n),s>=10&&(1488===i||93===i)&&o++}return o*n.N3},e.getPenaltyN4=function(t){let e=0;const o=t.data.length;for(let n=0;n<o;n++)e+=t.data[n];const r=Math.abs(Math.ceil(100*e/o/5)-10);return r*n.N4},e.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let i=0;i<n;i++)e.isReserved(i,r)||e.xor(i,r,o(t,i,r))},e.getBestMask=function(t,n){const o=Object.keys(e.Patterns).length;let r=0,i=1/0;for(let s=0;s<o;s++){n(s),e.applyMask(s,t);const o=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),o<i&&(i=o,r=s)}return r}},5461:function(t,e,n){const o=n(5057),r=n(3555);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(o){return n}}},9186:function(t,e,n){const o=n(5461);function r(t){this.mode=o.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,n,o;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),o=parseInt(n,10),t.put(o,10);const r=this.data.length-e;r>0&&(n=this.data.substr(e),o=parseInt(n,10),t.put(o,3*r+1))},t.exports=r},823:function(t,e,n){n(3767),n(8585),n(8696);const o=n(7512);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let i=0;i<e.length;i++)n[r+i]^=o.mul(t[r],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=o.mul(e[i],t);let r=0;while(r<n.length&&0===n[r])r++;n=n.slice(r)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let r=0;r<t;r++)n=e.mul(n,new Uint8Array([1,o.exp(r)]));return n}},4553:function(t,e,n){n(3767),n(8585),n(8696);const o=n(4288),r=n(2839),i=n(495),s=n(3880),a=n(1290),c=n(3375),u=n(1840),l=n(9757),f=n(4365),h=n(9693),d=n(7874),g=n(5461),p=n(8439);function m(t,e){const n=t.size,o=c.getPositions(e);for(let r=0;r<o.length;r++){const e=o[r][0],i=o[r][1];for(let o=-1;o<=7;o++)if(!(e+o<=-1||n<=e+o))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(o>=0&&o<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===o||6===o)||o>=2&&o<=4&&r>=2&&r<=4?t.set(e+o,i+r,!0,!0):t.set(e+o,i+r,!1,!0))}}function w(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function y(t,e){const n=a.getPositions(e);for(let o=0;o<n.length;o++){const e=n[o][0],r=n[o][1];for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)-2===n||2===n||-2===o||2===o||0===n&&0===o?t.set(e+n,r+o,!0,!0):t.set(e+n,r+o,!1,!0)}}function v(t,e){const n=t.size,o=h.getEncodedBits(e);let r,i,s;for(let a=0;a<18;a++)r=Math.floor(a/3),i=a%3+n-8-3,s=1===(o>>a&1),t.set(r,i,s,!0),t.set(i,r,s,!0)}function E(t,e,n){const o=t.size,r=d.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1===(r>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(o-15+i,8,s,!0),i<8?t.set(8,o-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(o-8,8,1,!0)}function C(t,e){const n=t.size;let o=-1,r=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2){6===a&&a--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(r,a-n)){let o=!1;s<e.length&&(o=1===(e[s]>>>i&1)),t.set(r,a-n,o),i--,-1===i&&(s++,i=7)}if(r+=o,r<0||n<=r){r-=o,o=-o;break}}}}function b(t,e,n){const r=new i;n.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(r)}));const s=o.getSymbolTotalCodewords(t),a=l.getTotalCodewordsCount(t,e),c=8*(s-a);r.getLengthInBits()+4<=c&&r.put(0,4);while(r.getLengthInBits()%8!==0)r.putBit(0);const u=(c-r.getLengthInBits())/8;for(let o=0;o<u;o++)r.put(o%2?17:236,8);return A(r,t,e)}function A(t,e,n){const r=o.getSymbolTotalCodewords(e),i=l.getTotalCodewordsCount(e,n),s=r-i,a=l.getBlocksCount(e,n),c=r%a,u=a-c,h=Math.floor(r/a),d=Math.floor(s/a),g=d+1,p=h-d,m=new f(p);let w=0;const y=new Array(a),v=new Array(a);let E=0;const C=new Uint8Array(t.buffer);for(let o=0;o<a;o++){const t=o<u?d:g;y[o]=C.slice(w,w+t),v[o]=m.encode(y[o]),w+=t,E=Math.max(E,t)}const b=new Uint8Array(r);let A,T,k=0;for(A=0;A<E;A++)for(T=0;T<a;T++)A<y[T].length&&(b[k++]=y[T][A]);for(A=0;A<p;A++)for(T=0;T<a;T++)b[k++]=v[T][A];return b}function T(t,e,n,r){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let o=e;if(!o){const e=p.rawSplit(t);o=h.getBestVersionForData(e,n)}i=p.fromString(t,o||40)}}const a=h.getBestVersionForData(i,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;const c=b(e,n,i),l=o.getSymbolSize(e),f=new s(l);return m(f,e),w(f),y(f,e),E(f,n,0),e>=7&&v(f,e),C(f,c),isNaN(r)&&(r=u.getBestMask(f,E.bind(null,f,n))),u.applyMask(r,f),E(f,n,r),{modules:f,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,s=r.M;return"undefined"!==typeof e&&(s=r.from(e.errorCorrectionLevel,r.M),n=h.from(e.version),i=u.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),T(t,n,s,i)}},4365:function(t,e,n){n(3767),n(8585),n(8696);const o=n(823);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=o.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n},t.exports=r},3555:function(t,e){const n="[0-9]+",o="[A-Z $%*+\\-./:]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(o,"g");const s=new RegExp("^"+r+"$"),a=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return s.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return c.test(t)}},8439:function(t,e,n){n(7658);const o=n(5461),r=n(9186),i=n(6355),s=n(7591),a=n(9176),c=n(3555),u=n(4288),l=n(8716);function f(t){return unescape(encodeURIComponent(t)).length}function h(t,e,n){const o=[];let r;while(null!==(r=t.exec(n)))o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function d(t){const e=h(c.NUMERIC,o.NUMERIC,t),n=h(c.ALPHANUMERIC,o.ALPHANUMERIC,t);let r,i;u.isKanjiModeEnabled()?(r=h(c.BYTE,o.BYTE,t),i=h(c.KANJI,o.KANJI,t)):(r=h(c.BYTE_KANJI,o.BYTE,t),i=[]);const s=e.concat(n,r,i);return s.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case o.NUMERIC:return r.getBitsLength(t);case o.ALPHANUMERIC:return i.getBitsLength(t);case o.KANJI:return a.getBitsLength(t);case o.BYTE:return s.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];switch(r.mode){case o.NUMERIC:e.push([r,{data:r.data,mode:o.ALPHANUMERIC,length:r.length},{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.ALPHANUMERIC:e.push([r,{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.KANJI:e.push([r,{data:r.data,mode:o.BYTE,length:f(r.data)}]);break;case o.BYTE:e.push([{data:r.data,mode:o.BYTE,length:f(r.data)}])}}return e}function w(t,e){const n={},r={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+s+t;c.push(l),n[l]={node:u,lastCount:0},r[l]={};for(let t=0;t<i.length;t++){const s=i[t];n[s]&&n[s].node.mode===u.mode?(r[s][l]=g(n[s].lastCount+u.length,u.mode)-g(n[s].lastCount,u.mode),n[s].lastCount+=u.length):(n[s]&&(n[s].lastCount=u.length),r[s][l]=g(u.length,u.mode)+4+o.getCharCountIndicator(u.mode,e))}}i=c}for(let o=0;o<i.length;o++)r[i[o]].end=0;return{map:r,table:n}}function y(t,e){let n;const c=o.getBestModeForData(t);if(n=o.from(e,c),n!==o.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+o.toString(n)+".\n Suggested mode is: "+o.toString(c));switch(n!==o.KANJI||u.isKanjiModeEnabled()||(n=o.BYTE),n){case o.NUMERIC:return new r(t);case o.ALPHANUMERIC:return new i(t);case o.KANJI:return new a(t);case o.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(y(e,null)):e.data&&t.push(y(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const o=d(t,u.isKanjiModeEnabled()),r=m(o),i=w(r,n),s=l.find_path(i.map,"start","end"),a=[];for(let e=1;e<s.length-1;e++)a.push(i.table[s[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,u.isKanjiModeEnabled()))}},4288:function(t,e){let n;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return o[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},5057:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},9693:function(t,e,n){const o=n(4288),r=n(9757),i=n(2839),s=n(5461),a=n(5057),c=7973,u=o.getBCHDigit(c);function l(t,n,o){for(let r=1;r<=40;r++)if(n<=e.getCapacity(r,o,t))return r}function f(t,e){return s.getCharCountIndicator(t,e)+4}function h(t,e){let n=0;return t.forEach((function(t){const o=f(t.mode,e);n+=o+t.getBitsLength()})),n}function d(t,n){for(let o=1;o<=40;o++){const r=h(t,o);if(r<=e.getCapacity(o,n,s.MIXED))return o}}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=s.BYTE);const i=o.getSymbolTotalCodewords(t),c=r.getTotalCodewordsCount(t,e),u=8*(i-c);if(n===s.MIXED)return u;const l=u-f(n,t);switch(n){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const o=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return d(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(o.getBCHDigit(e)-u>=0)e^=c<<o.getBCHDigit(e)-u;return t<<12|e}},8258:function(t,e,n){const o=n(8920);function r(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let s=n,a=e;"undefined"!==typeof s||e&&e.getContext||(s=e,e=void 0),e||(a=i()),s=o.getOptions(s);const c=o.getImageWidth(t.modules.size,s),u=a.getContext("2d"),l=u.createImageData(c,c);return o.qrToImageData(l.data,t,s),r(u,a,c),u.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,o){let r=o;"undefined"!==typeof r||n&&n.getContext||(r=n,n=void 0),r||(r={});const i=e.render(t,n,r),s=r.type||"image/png",a=r.rendererOpts||{};return i.toDataURL(s,a.quality)}},8593:function(t,e,n){const o=n(8920);function r(t,e){const n=t.a/255,o=e+'="'+t.hex+'"';return n<1?o+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function i(t,e,n){let o=t+e;return"undefined"!==typeof n&&(o+=" "+n),o}function s(t,e,n){let o="",r=0,s=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||s||(s=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(o+=s?i("M",u+n,.5+l+n):i("m",r,0),r=0,s=!1),u+1<e&&t[c+1]||(o+=i("h",a),a=0)):r++}return o}e.render=function(t,e,n){const i=o.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*i.margin,l=i.color.light.a?"<path "+r(i.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+r(i.color.dark,"stroke")+' d="'+s(c,a,i.margin)+'"/>',h='viewBox="0 0 '+u+" "+u+'"',d=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+d+h+' shape-rendering="crispEdges">'+l+f+"</svg>\n";return"function"===typeof n&&n(null,g),g}},8920:function(t,e,n){function o(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}n(7658),e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:n,scale:n?4:r,margin:e,color:{dark:o(t.color.dark||"#000000ff"),light:o(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const o=e.getScale(t,n);return Math.floor((t+2*n.margin)*o)},e.qrToImageData=function(t,n,o){const r=n.modules.size,i=n.modules.data,s=e.getScale(r,o),a=Math.floor((r+2*o.margin)*s),c=o.margin*s,u=[o.color.light,o.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),f=o.color.light;if(e>=c&&n>=c&&e<a-c&&n<a-c){const t=Math.floor((e-c)/s),o=Math.floor((n-c)/s);f=u[i[t*r+o]?1:0]}t[l++]=f.r,t[l++]=f.g,t[l++]=f.b,t[l]=f.a}}},3756:function(t,e,n){"use strict";t.exports=n.p+"img/author.a7203e7b.jpg"}}]);
//# sourceMappingURL=298.7b89ea14.js.map