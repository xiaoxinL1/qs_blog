<template>
	<div id="app">
			<router-view />
	</div>
</template>
<script>
export default {
	methods: {
		_isMobile() {
			let flag = navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			);
			return flag;
		},
	},
	mounted() {
		// if (this._isMobile()) {
		// 	// alert("手机端");
		// 	this.$router.replace("/m.index");
		// } else {
		// 	// alert("pc端");
		// 	this.$router.replace("/index");
		// }
	},
};
</script>
<style lang="less">
html,
body {
	// height: 100%;
	// width: 100%;
	margin: 0;
	padding: 0;
}
*{
	transition: all .3s;
}
#app {
	height: 100%;
	width: 100%;
	background: #fff;
}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3968598 */
  src: url('//at.alicdn.com/t/c/font_3968598_ejihcvzua.woff2?t=1680054549733') format('woff2'),
       url('//at.alicdn.com/t/c/font_3968598_ejihcvzua.woff?t=1680054549733') format('woff'),
       url('//at.alicdn.com/t/c/font_3968598_ejihcvzua.ttf?t=1680054549733') format('truetype');
}
.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

:root {
  /* 背景色 */
  --theme_bg_color: #fff;
  /* 按钮颜色 */
  --theme_text_color:#000;
  --color-active:#0084ff;
  --color-bar:#50bcb6;
}
</style>
