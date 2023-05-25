import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// 导入mock
// import "@/mock/mock.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入wow.js
import {WOW} from 'wowjs'

import   'animate.css'
Vue.prototype.$wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 150, // default
  mobile: true, // default
  live: false,
  // live为true时，控制台会提示：MutationObserver is not supported by your browser. & WOW.js cannot detect dom mutations, please call .sync() after loading new content.
  callback: function(box) {
	  // console.log(box)
    // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
})
// 滚动Top
import vueToTop from 'vue-totop';
Vue.use(vueToTop)
// 移动端适配
import 'amfe-flexible'
import 'amfe-flexible/index.js'
import "@/mixin/scroll.js"

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式

//创建v-highlight全局指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
// 引入插件
import VueLazyload from 'vue-lazyload'
const loading = require("@/static/index/default.jpg")
// 注册插件
Vue.use(VueLazyload,{
  loading:loading// 懒加载默认图片
})

// 定义懒加载图片或者文件等，自定义指令
// Vue.directive('lazy', (el, binding) => {
//   let oldSrc = el.src //保存旧的src，方便后期渲染时候赋值src真实路径
//   el.src = "" //将渲染的src赋为空，则不会渲染图片出来
//   let observer = new IntersectionObserver(([{ isIntersecting }]) => { // 调用方法得到该elDOM元素是否处于可视区域
//     if (isIntersecting) { //回调是否处于可视区域，true or false
//       el.src = oldSrc //如果处于可视区域额，将最开始保存的真实路径赋予DOM元素渲染
//       observer.unobserve(el) // 只需要监听一次即可，第二次滑动到可视区域时候不在监听
//     }
//   })
//   observer.observe(el) // 调用方法
// })
// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
// Vue.directive('lazy', (el, binding) => {
//   const backImg = document.createElement('img')
//   if (el.getAttribute('lazy') === 'loaded') {
//     return
//   }
//   el.setAttribute('lazy', 'loading')
//   el.src = loading
//   backImg.onload = () => {
//     el.setAttribute('lazy', 'loaded')
//     el.src = binding.value
//   };
//   backImg.src = binding.value
// })
Vue.filter('getTimer',(value)=>{
	if(!value) return ;
	const text = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
	const date = new Date(value);
	const year = date.getFullYear();
	const monthN = date.getMonth();
	const monthT = text[monthN];
	const day = date.getDate();
	return `${monthT}月 ${day}， ${year}`;
})

 // use

// Vue.use(animated)
Vue.use(MuseUI);
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
