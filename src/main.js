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
import animated from 'animate.css';
import 'wowjs/css/libs/animate.css';
// Vue.use(animated);
// 滚动Top
import vueToTop from 'vue-totop';
Vue.use(vueToTop)
// 移动端适配
import 'amfe-flexible'
import 'amfe-flexible/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';

import "@/mixin/scroll.js"


// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
Vue.directive('lazy', (el, binding) => {
  const backImg = document.createElement('img')
  if (el.getAttribute('lazy') === 'loaded') {
    return
  }
  el.setAttribute('lazy', 'loading')
  el.src = loading
  backImg.onload = () => {
    el.setAttribute('lazy', 'loaded')
    el.src = binding.value
  };
  backImg.src = binding.value
})
Vue.use(Vant);
Vue.use(MuseUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
