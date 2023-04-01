<template>
	<div id="app">
		<!-- 首页 -->
		<div class="index">
			<div class="cover">
				<!-- 标题 -->
				<div class="header">
					<div class="logo">
						<span>千·山</span>
					</div>
					<div class="menu" @click="menu">
						<span class="iconfont">{{isNav?'&#xe661;':'&#xe621;'}}</span>
					</div>
				</div>
				<!-- 背景图 -->
				<div id="bgimg" :style="layerStyle">
					<!-- :style="imgStyle" :src="image"  -->
					<img id="image" width="1920" height="1080" :style="imgStyle" src="@/static/index/bg.jpg" />
				</div>
				<!-- 遮罩层 -->
				<div class="mask">
				</div>
				<!-- 内容简介 -->
				<div class="post">
					<div class="time">{{timeText}}</div>
					<div class="title">
						<router-link to="#n">将来的你，一定会感谢奋斗的自己</router-link>
					</div>
					<div class="describe">
						<span>
							愿所有的美好如约而至，愿所有的黑暗都能看到希望，我们都能微笑前行，人生没有完美，有些遗憾才美...
						</span>
					</div>
				</div>
				<Menu :isTop="isNav"></Menu>
			</div>

		</div>
		<!-- 内容 -->
		<div class="content">
			<div class="card" v-for="i in 10" :key="i" :class="i%2==0?'wow slideInRight':'wow slideInLeft'"
				data-wow-duration="1s">
				<div class="img-box" @click="">
					<img src="@/static/index/bg.jpg" />
				</div>
				<div class="info">
					<div class="time">七月 29, 2022</div>
					<div class="title">
						<a>川西报团的开始、愿你自由一生</a>
					</div>
					<div class="describe">望着窗外，想轻弹一首远方的旋律，心灵开拓了一片世界的美好，紧紧的将它搂在怀里，种植在脑海里。</div>
					<div class="stuff">
						<div v-for="(v, i) in infoIcon" :key="i">
							<i class="iconfont" v-html="v.icon"></i>
							<span>{{v.num}}</span>
							<span class="hint" :style="{ backgroundColor: v.color }">
								{{ v.text }}
								<i :style="{ borderTopColor: v.color }"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="more" @click="loadMoreData">
				<LoadMore />
			</div>
		</div>
		<!-- 底部 -->
		<div class="foot">
			<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">黑ICP备2023002760号-1</a>
			<a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=23010402000252" target="_blank">黑公网安备
				23010402000252号</a>
		</div>
		<BackTop />
	</div>
</template>

<script>
	import LoadMore from "@/components/LoadMore.vue";
	import BackTop from "@/components/BackTop.vue";
	import Menu from "@/components/Menu.vue";

	import {
		WOW
	} from 'wowjs';
	export default {
		components: {
			LoadMore,
			BackTop,
			Menu
		},
		data() {
			return {
				isNav: false,
				bg_color: '#fff',
				text_color: '#000',
				boxH: '100%', // bg尺寸
				boxW: '100%', // bg尺寸
				layerStyle: {},
				imgStyle: {},
				infoIcon: [{
						icon: '&#xe600',
						name: '评论',
						num: 243,
						text: '评论',
						color: '#EF6D57',
					},
					{
						icon: '&#xe622;',
						name: '浏览',
						num: 2004,
						text: '浏览',
						color: '#50bcb6',
					},
					{
						icon: '&#xe65c;',
						name: '点赞',
						num: 200,
						text: '点赞',
						color: '#ffa800',
					},
				],
			}
		},
		mounted() {
			new WOW().init();
			window.addEventListener('scroll', this.showNav, true);
			this.update();
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.showNav);
		},
		watch: {
			x(n, o) {
				this.imgStyle.left = n + this.imgStyle.left;
			}
		},
		computed: {
			timeText() {
				const text = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
				const date = new Date();
				const year = date.getFullYear();
				const monthN = date.getMonth();
				const monthT = text[monthN];
				const day = date.getDate();
				return `${monthT}月 ${day}， ${year}`;
			}
		},
		methods: {
			showNav(){
				this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if (this.scrollTop > document.documentElement.clientHeight/3) {
					this.isNav = false;
				} 
			},
			update() {
				this.boxH = document.documentElement.clientHeight + 'px';
				this.boxW = document.documentElement.clientWidth + 'px';
				// console.log(this.boxH);
				this.coverLayer();
			},
			coverLayer() {
				let _w = parseInt(this.boxW),
					_h = parseInt(this.boxH);

				const style = {
					height: _h + 20 + 'px',
				}
				this.layerStyle = Object.assign({}, this.layerStyle, style);
			},
			loadMoreData() {
				this.$store.dispatch('loadMore', 'loading');
			},
			changeTheme() {

			},
			menu() {
				this.isNav = !this.isNav;
				// document.body.style.overflowY = this.isNav ? "hidden" : "";
			},
		}
	}
</script>

<style lang="less" scoped>
	#app {
		background: var(--theme_bg_color);
		overflow-x: hidden;
	}

	.index {
		// position: absolute;
		width: 100%;
		height: 100%;
		min-height: 100vh;

		.cover {
			position: relative;
			overflow: hidden;
			z-index: 1;

			// 图片层
			#bgimg {
				height: 100%;
				height: 100%;
				position: relative;
				overflow: hidden;

				#image {
					position: absolute;
					// left: 10px;
					max-width: none;
					display: block;
				}
			}

			// 头部logo
			.header {
				position: absolute;
				top: 70px;
				width: 100%;
				color: #000;
				z-index: 99999;
				padding: 0 40px 0 40px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				overflow: hidden;

				.logo {
					font-size: 30px;
					letter-spacing: 10px;
					font-family: KaiTi;
				}

				.menu {
					.iconfont {
						font-size: 20px;
						cursor: pointer;
						background: #fff;
						color: #78909c;
						border-radius: 6px;
						padding:5px;
					}
				}
			}

			// 标题内容
			.post {
				position: absolute;
				top: 54%;
				left: 8%;
				color: #fff;
				width: 33%;
				transform: translateY(-50%);

				.time {
					font-size: 14px;
				}

				.title {
					margin: 15px 0 30px;

					a {
						font-size: 28px;
						color: #fff;
						text-decoration: none;
						cursor: pointer;

						&:hover {
							text-decoration: underline;
						}
					}
				}

				.describe {
					font-size: 14px;
					line-height: 22px;
					margin-top: 10px;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}

			// 遮罩层
			.mask {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-color: rgba(77, 84, 88, 0.7);
				clip-path: polygon(0 0, 25% 0, 60% 100%, 0% 100%);
			}
		}
	}

	.content {
		width: 1200px;
		margin: auto;
		position: relative;
		padding-bottom: 80px;
		text-align: center;
		background-color: var(--theme_bg_color);

		&::after {
			content: '';
			width: 1px;
			height: calc(100% + 100px);
			position: absolute;
			top: -100px;
			left: 50%;
			background: #30363d;
			z-index: 0;
		}

		.more {
			// margin-top: 90px;
			display: inline-block;
		}

		::v-deep .bottom-loading {
			position: relative;
			z-index: 999;

			.btn {
				border-radius: 0;
				display: inline-block;
				border: 1px solid var(--theme_text_color);
				border-radius: 4px;
			}
		}

		.card {
			margin-top: 80px;
			text-align: left;
			position: relative;

			.img-box {
				width: 680px;
				height: 440px;
				font-size: 0;
				display: inline-block;
				position: relative;
				cursor: pointer;
				z-index: 3;
				overflow: hidden;
				border-radius: 6px;

				img {
					width: 100%;
					height: 100%;
				}

				&:hover img {
					opacity: 0.95;
				}
			}

			.info {
				width: 500px;
				height: 400px;
				position: absolute;
				top: 20px;
				left: 660px;
				padding: 80px 100px 0 80px;
				border: 1px solid #ccc;
				border-radius: 6px;

				.time {
					color: #999;
					font-size: 12px;
				}

				.title {
					color: var(--theme_text_color);
					margin-top: 8px;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					transition: none;

					a {
						font-size: 24px;
						line-height: 30px;
						cursor: pointer;
						color: var(--theme_text_color);
						transition: backgroundPosition 0s, color 0.3s;

						&:hover {
							background: radial-gradient(circle at 10px -7px,
									transparent 8px,
									currentColor 8px,
									currentColor 9px,
									transparent 9px) repeat-x,
								radial-gradient(circle at 10px 27px,
									transparent 8px,
									currentColor 8px,
									currentColor 9px,
									transparent 9px) repeat-x;
							background-size: 20px 20px;
							background-position: -10px calc(100% + 16px),
								0 calc(100% - 4px);
							animation: waveFlow 1s infinite linear;
						}

						@keyframes waveFlow {
							from {
								background-position-x: -10px, 0;
							}

							to {
								background-position-x: -30px, -20px;
							}
						}
					}
				}

				.describe {
					color: #ccc;
					font-size: 14px;
					line-height: 22px;
					margin-top: 10px;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.stuff {
					font-size: 12px;
					color: #999;
					position: absolute;
					bottom: 80px;
					left: 80px;
					display: flex;

					div {
						padding: 6px;
						font-size: 12px;
						display: flex;
						align-items: center;
						position: relative;
						transition: none;

						&:nth-of-type(1):hover {
							color: #ef6d57;
						}

						&:nth-of-type(2):hover {
							color: #50bcb6;
						}

						&:nth-of-type(3):hover {
							color: #ffa800;
						}

						.iconfont {
							margin-right: 4px;
							display: inline-block;
							transition: none;

						}

						.hint {
							position: absolute;
							bottom: 100%;
							left: 50%;
							transform: translate(-50%, -5px);
							color: #fff;
							font-size: 12px;
							border-radius: 10px;
							padding: 5px 14px;
							white-space: nowrap;
							opacity: 0;
							visibility: hidden;

							i {
								border: 5px solid transparent;
								position: absolute;
								left: 50%;
								bottom: -10px;
								transform: translateX(-50%);
							}
						}

						&:hover .hint {
							opacity: 1;
							visibility: visible;
						}
					}
				}
			}

			&:nth-child(odd) {
				text-align: left;
				// left: -1000px;

				.info {
					left: 660px;
				}
			}

			&:nth-child(even) {
				text-align: right;
				// right: -1000px;

				.info {
					text-align: left;
					left: 45px;
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		.content {
			width: 900px;

			.card {
				.img-box {
					width: 480px;
					height: 310px;
				}

				.info {
					top: 10px;
					width: 420px;
					height: 290px;
					padding: 50px 60px 0 60px;

					.stuff {
						bottom: 50px;
						left: 60px;
					}

					.title {
						margin-top: 10px;
						line-height: 25px;
					}

					.describe {
						-webkit-line-clamp: 2;
					}
				}

				&:nth-child(odd) .info {
					left: 450px;
				}

				&:nth-child(even) .info {
					// right: 450px;
					left: 20px;
				}
			}
		}
	}

	@media screen and (max-width: 900px) {
		.cover {
			.misk {
				clip-path: polygon(0 0, 220px 0, 700px 100%, 0% 100%);
			}

			.post {
				width: 40%;

				.title a {
					font-size: 22px;
				}
			}
		}

		.content {
			width: 100%;

			.card {
				margin-top: 60px;
				border-bottom: 1px solid #ccc;
				z-index: 2;

				.img-box {
					width: 100%;
					height: auto;
					display: block;
					text-align: center;
					border: none;

					img {
						width: 680px;
						max-width: 100%;
					}
				}

				.info {
					position: static;
					width: 96%;
					padding: 40px 20px 40px;
					margin: auto;
					border: none;
					background: var(--theme_bg_color);
					height: auto;

					.stuff {
						position: static;
						margin: 20px 0 0 -6px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 780px) {
		.cover {

			.mask {
				clip-path: none !important;
			}

			.post {
				bottom: 8% !important;
				left: 5% !important;
				top: auto !important;
				width: 70% !important;
				transform: none !important;
			}

			.cover-bg {
				img {
					position: absolute;
					left: 50%;
					top: 0;
					height: 100%;
					width: auto;
					transform: translateX(-50%);
				}
			}
		}

		.content {
			width: 100%;

			.post {
				.img-box {
					width: 100%;
					height: auto;
					border-radius: 0;
				}
			}
		}
	}

	@media screen and (max-width: 480px) {
		.cover {
			.head {
				padding: 0 24px 0 20px;

				.logo-img {
					width: 80px;

					img {
						top: 6px;
					}
				}
			}

			.card {
				.time {
					display: none;
				}

				.title {
					margin-bottom: 10px;
				}

				.describe {
					font-size: 13px !important;
					line-height: 20px;
				}
			}
		}
	}

	.foot {
		text-align: center;
		display: flex;
		flex-flow: column;
		margin-top: 20px;
		background: var(--theme_bg_color);

		a {
			margin: 0 auto;
			font-size: 13px;
			color: var(--theme_text_color);
			text-decoration: none;
			display: inline-block;
			padding: 1px 0 2px;
		}
	}
</style>