<template>
	<div class="back-top show" v-show="showBtn" >
		<i class="iconfont time" @click="timeIcon" v-html="time_icon"></i>
		<span class="iconfont" @click="goTop">&#xe66f;</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showBtn: false,
				showIcon: false,
				scrollTop: 0,
				types: ['iconfont icon-v-totop-0','iconfont icon-v-totop-1','iconfont icon-v-totop-2','iconfont icon-v-totop-3','iconfont icon-v-totop-4','iconfont icon-v-totop-5','iconfont icon-v-totop-6','iconfont icon-v-totop-7','iconfont icon-v-totop-8','iconfont icon-v-totop-9','iconfont icon-v-totop-10','iconfont icon-v-totop-11','iconfont icon-v-totop-12','iconfont icon-v-totop-13','iconfont icon-v-totop-14','iconfont icon-v-totop-15'],
				defaultType: 0,
				defaultTop: 400,
				defaultRight: 30,
				defaultBottom: 30,
				defaultSize: 24,
				defaultColor: '#666',
				defaultDuration: 300,
				time_icon:'&#xe633;',
				bg_color:"#000",
				text_color:'#fff'
			}
		},
		mounted() {
			window.addEventListener("scroll", this.showbtn, true);
		},
		destroyed() {
			window.removeEventListener('scroll', this.showbtn);
		},
		methods: {
			timeIcon(){
				if(this.time_icon=='&#xe633;'){
					this.time_icon='&#xe648;';
					this.bg_color = "#000";
					this.text_color = "#fff";
					document.documentElement.style.setProperty("--theme_bg_color", this.bg_color);
					document.documentElement.style.setProperty("--theme_text_color", this.text_color);
				}else{
					this.time_icon='&#xe633;';
					this.bg_color = "#fff";
					this.text_color = "#000";
					document.documentElement.style.setProperty("--theme_bg_color", this.bg_color);
					document.documentElement.style.setProperty("--theme_text_color", this.text_color);
				}
			},
			showbtn() {
				this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				this.scrollTop > this.defaultTop ? this.showIcon = true : this.showIcon = false
				if (this.scrollTop > document.documentElement.clientHeight) {
					this.showBtn = true;
				} else {
					this.showBtn = false;
				}
			},
			goTop() {
				window.requestAnimationFrame = (function() {
					return window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						function(callback) {
							window.setTimeout(callback, 1000 / 60);
						};
				})();
				var step = this.scrollTop / (this.defaultDuration / (1000 / 60)) >> 0;
				var self = this

				function fn() {
					if (self.scrollTop >= 0) {
						self.scrollTop -= step;
						document.documentElement.scrollTop = document.body.scrollTop = self.scrollTop;
						fn.rafTimer = requestAnimationFrame(fn);
					} else {
						document.body.scrollTop = 0;
						cancelAnimationFrame(fn.rafTimer);
					}
				}
				fn.rafTimer = requestAnimationFrame(fn)
			}
		}
	}
</script>
<style lang="less" scoped>
	.time{
		font-size: 30px;
		color: #73aada;
	}
	.time:hover{
		color:var(--color-active);
	}
	.back-top {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 20px;
		right: 10px;
		cursor: pointer;
		opacity: 0;
		visibility: hidden;
		z-index: 100;

		&.show {
			opacity: 1;
			visibility: visible;
		}

		span {
			font-size: 40px;
			color: #73aada;

			&:hover {
				color: var(--color-active)
			}
		}
	}

	@media screen and (max-width: 600px) {
		.back-top {
			right: 20px;
			bottom: 10px;

			span {
				font-size: 30px;
			}
		}
	}
</style>