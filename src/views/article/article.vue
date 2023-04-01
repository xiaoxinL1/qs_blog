<template>
	<div class="articleld">

		<!-- Article Progress -->
		<div class="scrollbar" :style="{ width: postProgress }"></div>
		<header>
			<div class="header">
				<div class="left">
					<span>山</span>
					<i class="iconfont">&#xe601;</i>
				</div>
				<div class="title">
					<p>川西报团的开始、愿你自由一生</p>
				</div>
				<div class="right">
					<i class="iconfont">&#xe69d;</i>
					<img :src="require('@/static/article/author.jpg')" alt="作者简介" @click="goToAbout">
				</div>
			</div>
		</header>
		<div class="container">
			<div class="title">千山空间简介</div>
			<div class="timer stuff">
				<span>七月 29, 2022</span>
				<span>阅读 318</span>
				<span>字数 2412</span>
				<span>评论 22</span>
				<span>喜欢 100</span>
			</div>
			<div class="content">
				<div class="bolck" style="height: 1000px;">

				</div>
				01
				在康定住一周了，准备前往下一站，发现新都桥住宿不好且贵，附近的景点也比较难走，鱼子西没有小巴车到达！

				看到美团的两天一夜游，不贵，刚好体验一下报团的生活方式，应该会是一场收获不菲的体验。

				早上九点，下楼跟可爱的阿姨说放一下行李箱，我出去逛一圈，明天再回来，随后坐了出租车前往成名饭店。

				在成名饭店等旅游车时，被冻直哆嗦，没想到这么冷，出门时还不以为然，现在被冻得想回去拿个棉衣服，可惜时间来不及了。

				来了一辆又一辆的大巴旅游车，但不是来接我的。

				再过了十多分钟到了，导游跟我说：“先把行李放我位置，一起去吃饭，待会没位置的话，你坐我位置。”

				还是挺暖心的，走去吃饭路上跑出个哥们，让我坐他旁边，晚上一起拼房。

				我好奇，这哥们是看上我的装备了吧，哈哈哈哈！
			</div>
		</div>
		<footer :class="{show: scroll_current >= 100 }">
			<div class="foot-box">
				<h2>川西报团的开始、愿你自由一生</h2>
				<ul class="options">
					<li v-for="(item, index) in options" :key="index">
						<span class="iconfont" v-html="item.icon" @click="operation(item.type)"></span>
						<span :class="{skin:item.type=='skin'}">{{item.num}}</span>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import {
		ImageApi
	} from "@/api/api.js";
	import {
		jsonp
	} from "@/commit/jsonp.js"
	export default {
		components: {
			Header
		},
		data() {
			return {
				commentTotal: 0,
				contentHeight: 0,
				clientHeight: 0,
				header: true,
				isLike: false,
				likeHint: false,
				likeTime: null,
				scroll_current: 0,
				defaultDuration: 300,
				scrollTop: 0,
				showIcon: false,
				options: [{
					type: 'read',
					icon: '&#xe622;',
					num: 318
				}, {
					type: 'comment',
					icon: '&#xe600;',
					num: 28
				}, {
					type: 'like',
					icon: '&#xe69d;',
					num: 200
				}, {
					type: 'skin',
					icon: '&#xe648;',
					activeIcon: '&#xe633;'
				}, {
					type: 'top',
					icon: '&#xe608;',
				}],
				time_icon: '&#xe633;',
				bg_color: "#000",
				text_color: '#fff'
			}
		},
		computed: {
			info() {
				return this.$store.state.data
			},
			postProgress() {
				if (this.contentHeight < this.clientHeight) {
					return '100%';
				}
				if (!this.scroll_current) {
					return;
				}
				const h = this.contentHeight - this.clientHeight + 100
				const n = (100 * (this.scroll_current / h)).toFixed(4)
				return n < 100 ? n + '%' : '100%'
			}
		},
		mounted() {
			setTimeout(() => {
				this.clientHeight = document.documentElement.clientHeight;
				this.contentHeight = this.getHeight()
				window.addEventListener('scroll', this.getScroll);
				window.addEventListener('scroll', this.showbtn);
				// this.isLike = !!localStorage.getItem(`like-${this.data._id}`)
			})
		},
		methods: {
			operation(type) {
				switch (type) {
					case 'top':
						this.goTop();
						break;
					case 'skin':
						this.timeIcon();
						break;
					default:
				}
			},
			getScroll() {
				this.scroll_current = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			},
			goToAbout() {

			},
			getHeight() {
				const domList = ['.content', '.stuff', '.title']
				const height = domList.reduce((t, i) => {
					t += document.querySelector(i).offsetHeight
					return t
				}, 0)
				return height
			},
			timeIcon() {
				if (this.time_icon == '&#xe633;') {
					this.time_icon = '&#xe648;';
					this.bg_color = "#000";
					this.text_color = "#fff";
					document.documentElement.style.setProperty("--theme_bg_color", this.bg_color);
					document.documentElement.style.setProperty("--theme_text_color", this.text_color);
				} else {
					this.time_icon = '&#xe633;';
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
		},
		async asyncData(context) {
			const id = context.params.articleId
			const {
				data
			} = await context.$axios.get(`article/${id}`)
			if (data.status == 1) {
				return {
					data: data.body
				}
			} else {
				context.error({
					statusCode: 404,
					message: '页面未找到～'
				})
			}
		},
		// error page
		validate({
			params
		}) {
			return /^\d+$/.test(params.articleId)
		}
	}
</script>

<style lang="less" scoped>
	.articleld {
		position: absolute;
		width: 100%;

		header {
			margin: 10px 30px;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: cursive;

				.left {
					font-size: 30px;
					display: flex;
					align-items: center;

					span {
						margin-right: 10px;
					}
				}

				.iconfont {
					font-size: 22px;
				}

				.right {
					display: flex;
					align-items: center;

					img {
						border-radius: 50%;
						width: 30px;
						margin-left: 10px;
					}

					.iconfont {
						color: #ef6d57;
						cursor: pointer;
					}
				}
			}
		}

		.container {
			.title {
				font-size: 30px;
				font-weight: bold;
				letter-spacing: 5px;
			}

			.timer {
				margin: 20px 0;

				span {
					margin: 0 10px;
					font-size: 12px;
				}
			}

			.content {
				line-height: 40px;
			}
		}

		.scrollbar {
			position: fixed;
			top: 0;
			left: 0;
			width: 0;
			height: 2px;
			background: var(--color-bar);
			transition: width .5s ease;
			z-index: 999999;
		}

		.stuff {
			color: var(--color-text-2);
			position: relative;
			line-height: 22px;

			span {
				font-size: 13px;
				margin-right: 10px;
				display: inline-block;
			}

			&:after {
				content: '';
				width: 100px;
				position: absolute;
				bottom: -30px;
				left: 50%;
				transform: translateX(-50%);
				border-bottom: 1px solid var(--color-border-1);
			}
		}

		.content {
			padding: 100px 0;
			font-size: 14px;
			color: var(--color-text-1);

			::v-deep {
				p {
					line-height: 36px;
					margin: 0 0 22px;
					font-size: 16px;

					mark {
						padding: 4px 4px 0;
						line-height: 22px;
						display: inline-block;
						font-size: 16px;
					}

					strong {
						font-weight: bold;
						font-size: 16px;
					}

					ins {
						font-size: 16px;
					}
				}

				h1,
				h2,
				h3,
				h4,
				h5 {
					border: 0;
					padding: 0;
					margin: 0 0 22px;
					line-height: 28px;
					font-size: revert;
				}

				img {
					max-width: 100%;
					border-radius: 4px;

					&:hover {
						box-shadow: 0 0 10px #999;
					}
				}

				blockquote {
					border-radius: 10px;
					padding-left: 22px;
					margin-bottom: 20px;
					padding: 0 1em;
					color: var(--color-text-6);
					border-left: .25em solid #dfe2e5;
					overflow: hidden;

					p {
						margin: 10px 0;
					}
				}

				ul,
				ol {
					margin: 0 0 20px;

					li {
						margin: 10px 0;
						line-height: 28px;
					}
				}

				ul li {
					list-style: none;
					position: relative;

					&:after {
						content: '☼';
						font-size: 8px;
						position: absolute;
						top: 0px;
						left: -16px;
					}
				}

				iframe {
					width: 100%;
					height: 450px;
					margin-bottom: 20px;
				}
			}
		}



		footer {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background: var(--theme_bg_color);
			box-shadow: 0 -2px 12px var(--color-shadw-1);
			transition: all 0.6s;
			transform: translateY(100%);

			&.show {
				transform: translateY(0);
			}

			.foot-box {
				width: 800px;
				height: 70px;
				margin: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			h2 {
				font-size: 16px;
				color: var(--theme_text_color);
			}

			.options {
				display: flex;

				li {
					position: relative;
					list-style: none;
					margin-left: 6px;
					min-width: 32px;
					height: 30px;
					line-height: 30px;
					text-align: center;

					&:not(:first-child) {
						cursor: pointer;

						&:hover:not(:nth-child(3)) {
							span:first-child {
								font-weight: 600;
								color: #3ba0ff;
							}
						}
					}

					span:last-child {
						font-size: 12px;
						color: var(--color-text-1);
						transform: translate(-4px, -14px);
						display: inline-block;

						&.skin {
							display: none;
						}
					}

					.iconfont {
						color: var(--theme_text_color);
						2 font-size: 20px;
						margin: 4px;
					}


					& *,
					& *::before {
						transition: none;
					}

					.like-hint-box {
						position: absolute;
						top: 20px;
						right: 20px;
						transition: all .4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
						transform-origin: right bottom;
						transform: scale(0);
						opacity: 0;
						visibility: hidden;

						& * {
							transition: all .3s;
						}

						.like-hint {
							position: absolute;
							top: -180px;
							right: 54px;
							background: #ef6c57;
							color: #fff;
							font-size: 13px;
							width: 210px;
							height: 110px;
							line-height: 114px;
							text-align: center;
							border-radius: 220px / 120px;
						}

						span {
							position: absolute;
							top: -78px;
							right: 28px;
							height: 28px;
							width: 28px;
							border-radius: 50%;
							background: #ef6b57;

							&:last-child {
								width: 14px;
								height: 14px;
								right: 12px;
								top: -34px;
							}
						}

						&.likeHint {
							opacity: 1;
							visibility: visible;
							transform: scale(1);
						}
					}
				}

				li:nth-child(3) {
					span:first-child {
						color: #ef6d57;
					}
				}

				li:nth-child(4),
				li:nth-child(5) {
					color: #73aada;
				}
			}
		}
	}

	@media screen and (max-width: 820px) {
		.articleld {
			section {
				width: 86%;
			}

			h1.title {
				font-size: 20px;
				padding: 90px 0 15px;
			}

			.content {
				padding: 60px 0;

				::v-deep {
					p {
						line-height: 28px;
					}

					iframe {
						height: 390px;
					}
				}
			}

			footer {
				width: 86%;
				left: 7%;

				&.show {
					bottom: 20px;
				}

				.foot-box {
					width: 100%;
					padding: 0 60px 5px;

					h2 {
						display: none;
					}

					.options {
						width: 100%;
						justify-content: space-between;

						li {
							display: flex;
							flex-direction: column;
							line-height: normal;

							span:last-child {
								transform: none;
								margin-top: 2px;

								&.skin {
									display: block;
								}
							}

							.icon-top {
								margin-top: 4px;
							}

							.like-hint-box {
								top: 8px;
								right: 10px;
							}
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 600px) {
		.articleld {
			::v-deep header {

				.icon-like,
				.like {
					display: none !important;
				}
			}

			.content {
				::v-deep {
					iframe {
						height: 310px;
					}

					blockquote {
						padding-left: 16px;
					}

					p {
						font-size: 14px;

						strong,
						mark {
							font-size: 14px;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 500px) {
		.articleld {
			.content {
				::v-deep {
					iframe {
						height: 260px;
					}
				}
			}

			footer .foot-box {
				padding: 0 8% 5px;

				.options li .like-hint-box {
					right: 14px;
					transform-origin: center bottom;

					span,
					.like-hint {
						right: 50% !important;
						transform: translateX(50%) !important;
					}

					span:nth-of-type(1) {
						top: -65px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 414px) {
		.content {
			::v-deep {
				iframe {
					height: 220px;
				}
			}
		}
	}
</style>