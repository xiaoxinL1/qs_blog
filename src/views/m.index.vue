<template>
	<div id="app">
		<!-- 背景 -->
		<div class="mask"></div>
		<!-- 导航 -->
		<div class="nav">
			<van-nav-bar title="千山空间" right-text="按钮" @click-right="rightFn">
				<template #right>
					<div>
						<van-icon name="wap-nav" class="top-right" />
					</div> </template
			></van-nav-bar>
			<van-popup
				v-model="show"
				position="right"
				:style="{ height: '100%', width: '40%' }"
			>
				<div class="bar">
					<button>
						<a href="#n">首页 </a>
					</button>
					<button>
						<a href="#n">技术文章 </a>
					</button>
					<button>
						<a href="#n">我的项目 </a>
					</button>
					<button>
						<a href="#n">更新日志 </a>
					</button>
				</div>
				<div class="bot">
					<span>2023 By qiSui </span>
				</div>
			</van-popup>
		</div>
		<!-- 文章 -->
		<div class="occupy">
			<div class="text">
				<p>大家好，我是千山空间的作者。</p>
				<p>
					我的博客主要关注于初学者和入门级开发者，希望为他们提供易懂、实用的技术内容和经验分享
				</p>
				<p>
					虽然我的技术水平不是很高级，但是我会不断学习和进步，希望我的博客也能够随着我的进步而不断提高。
				</p>
				<p>
					最后，非常感谢您关注我的博客，希望我的文章能够为您提供一些有用的帮助和启发。
				</p>
				<i class="iconfont next" @click="scrollTo">&#xe63c;</i>
			</div>
		</div>
		<!-- 块 -->
		<div
			class="blc"
			style="height: 200px; width: 100%"
			ref="targetElement"
		></div>
		<!-- 内容 -->
		<div class="container">
			<div class="content">
				<div
					class="card"
					v-for="item in stateData"
					:key="item.id"
					@click="handleDown"
				>
					<div class="avatar">
						<img :src="item.pic" alt="" style="width: 4rem" />
					</div>
					<div class="title">
						<h4>{{ item.title }}</h4>
					</div>
					<div class="author">
						<span>{{ item.author }}</span>
						<span>{{ item.time }}</span>
					</div>
					<div class="introduce">
						<p>{{ item.content }}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<footer>
			<div class="footer">
				<div class="link">
					<span>
						<a href="https://weibo.com/u/5518754696">作者微博</a>
					</span>
					<span>
						<a href="mailto:mlluxiaoxin@163.com">作者邮箱</a>
					</span>
					<span>
						<a href="#n">赞赏作者</a>
					</span>
					<span>
						<a href="https://gitee.com/xioaxinL">gitee</a>
					</span>
				</div>
				<div class="prepare">
					<span>
						<a href="https://beian.miit.gov.cn/#/Integrated/index"
							>黑ICP备2023002760号-1</a
						>
					</span>
					<span>
						<img src="@/assets/keepOnRecord.png" alt="" />
						<a
							href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=23010402000252"
							>黑公网安备 23010402000252号</a
						>
					</span>
				</div>
				<span>2023 By qiSui</span>
			</div>
		</footer>
	</div>
</template>
<script>
import data from "@/commit/data.js";
import { getApi } from "@/api/api.js";

export default {
	data() {
		return {
			show: false,
			size: 50,
			scrollPosition: 0,
			offsetTop: 0,
			isShowBgColor: false,
			stateData: [],
		};
	},
	methods: {
		rightFn() {
			this.show = true;
		},
		scrollTo() {
			const targetElement = this.$refs.targetElement;
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		},
		updateScrollPosition() {
			this.scrollPosition =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;
		},
		handleDown() {},
		async getData() {
			const { data: res } = await getApi();
			this.stateData = res.data.list;
		},
	},
	mounted() {
		this.offsetTop = this.$refs.targetElement.offsetTop;

		window.addEventListener("scroll", this.updateScrollPosition);
		this.getData();
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.updateScrollPosition);
	},
};
</script>
<style lang="less" scoped>
html,
body {
	height: 100%;
}
.mask {
	z-index: -100;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-image: url("@/assets/B/bj3.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.top-right {
	font-size: 0.8rem;
	color: #78909c;
}
.nav {
	/deep/.van-nav-bar__title {
		color: #78909c;
	}
	.navTo {
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.bar {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		button {
			width: 70%;
			background-color: transparent;
			border: none;
			transition: 0.3s;
			border-radius: 10px;

			a {
				display: block;
				position: relative;
				color: #78909c;
				font-size: 0.4rem;
				padding: 0.4rem;
			}
		}
		button:active {
			background-color: #efefef;
		}
	}
}
/deep/ .van-popup {
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	.bot {
		text-align: center;
		span {
			padding: 0 0 2px 0;
			color: #78909c;
			font-size: 0.4rem;
		}
	}
}
.occupy {
	margin-top: 2rem;
	.text {
		width: 80%;
		margin: 0 auto;
		background: #000;
		color: #fff;
		opacity: 0.6;
		border-radius: 0.2rem;
		padding: 0.5rem;
		box-sizing: border-box;
		text-align: center;

		p {
			font-size: 0.4rem;
			margin: 0.2rem 0;
		}
		i {
			font-size: 0.7rem;
			color: #78909c;
			margin-top: 5px;
		}
	}
}
.container {
	background-color: #fff;
	border-radius: 10px;
	width: 80%;
	.content {
		display: flex;
		flex-flow: wrap;
		justify-content: space-around;
		align-items: center;
		.card {
			max-width: 500px;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			// border: 1px solid #78909c;
			border-radius: 10px;
			margin: 10px;
			padding: 10px;
			box-shadow: #78909c 0px 0px 0px;
			transition: all 0.5s;
			transform: scale(0.9);
			background: linear-gradient(200deg, #e3eeff, #f3e7e9);
			cursor: pointer;
			.avatar {
				width: 60%;
				img {
					width: 100%;
					height: 100%;
					border-radius: 20px;
				}
			}
			.title {
				h4 {
					margin: 4px;
					font-size: 16px;
				}
			}
			.introduce {
				width: 80%;
				text-align: center;
				p {
					margin: 4px;
					font-size: 0.3rem;
				}
			}
			.author {
				width: 80%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				span {
					font-size: 12px;
					color: #78909c;
				}
			}
		}
	}
}
// 底部
footer {
	height: 4rem;
	margin-top: 0.8rem;
	background: linear-gradient(200deg, #e3eeff, #f3e7e9);

	.footer {
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		.link {
			span {
				margin: 0 0.2rem;
				padding: 0 0 4px 0;
				a {
					color: #78909c;
					font-size: 0.4rem;
				}
			}
		}

		.prepare {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			span {
				padding: 0 0 2px 0;
				a {
					color: #78909c;
					font-size: 0.4rem;
				}
			}
			span:nth-child(2) {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		span {
			font-size: 0.3rem;
		}
	}
}
</style>