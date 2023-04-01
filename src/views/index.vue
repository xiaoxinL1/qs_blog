<template>
	<div id="app">
		<!-- 背景图片 -->
		<div class="bg"></div>
		<!-- 导航 -->
		<div class="nav_bar" :class="{ bgShow: setToWhere }">
			<div class="logo">
				<!-- <img
					src="@/assets/logo/top.jpg"
					alt=""
					style="width: 100px; height: 100px; border-radius: 50%"
				/> -->
				千山上岸空间
			</div>
			<div class="bar">
				<button>
					<a href="#n"
						>首页
						<span></span>
					</a>
				</button>
				<button>
					<a href="#n"
						>技术文章
						<span></span>
					</a>
				</button>
				<button>
					<a href="#n"
						>我的项目
						<span></span>
					</a>
				</button>
				<button>
					<a href="#n"
						>更新日志
						<span></span>
					</a>
				</button>
			</div>
		</div>
		<!-- 占位 -->
		<div class="occupy">
			<div class="text">
				<p>大家好，我是千山空间的作者。</p>
				<p>
					我是一名热爱前端技术的开发者，我的博客主要关注于初学者和入门级开发者，希望为他们提供易懂、实用的技术内容和经验分享。我会结合自己的学习和实践经验，向读者介绍一些基础概念和知识点，帮助他们建立起坚实的技术基础，并且分享一些解决问题的思路和方法。
				</p>
				<p>
					在博客中，我会涉及到一些编程语言、前端框架、开发工具等方面的知识。
				</p>
				<p>
					同时，我也会介绍一些最新的技术发展动态，帮助读者跟上技术的最新潮流。
				</p>
				<p>
					虽然我的技术水平不是很高级，但是我会不断学习和进步，希望我的博客也能够随着我的进步而不断提高。
				</p>
				<p>
					最后，非常感谢您关注我的博客，希望我的文章能够为您提供一些有用的帮助和启发。
				</p>
			</div>
			<i class="iconfont next" @click="scrollTo">&#xe63c;</i>
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
					@click="goTo(item.id)"
				>
					<div class="avatar">
						<img :src="item.pic" alt="" />
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
					</span>
					<span>
						<a
							href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=23010402000252"
							>黑公网安备 23010402000252号</a
						>
					</span>
				</div>
				<div class="thank">
					<span>2023 By qiSui </span>
				</div>
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
			size: 50,
			scrollPosition: 0,
			offsetTop: 0,
			isShowBgColor: false,
			stateData: [],
		};
	},
	methods: {
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
		async getData() {
			const { data: res } = await getApi();
			this.stateData = res.list;
		},
		goTo(id) {
			this.$router.push(`/details?id=${id}`);
		},
	},
	computed: {
		setToWhere() {
			if (this.scrollPosition + 30 >= this.offsetTop) {
				return true;
			} else {
				return false;
			}
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
* {
	text-decoration: none;
	list-style: none;
}
#app {
	height: 100%;
	width: 100%;
}
.bgShow {
	position: sticky;
	z-index: 2;
	top: 0;
	background: #fff;
}
.bg {
	z-index: -100;
	position: fixed;
	width: 100vw;
	height: 100vh;
	// background-image: url("@/assets/bg.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.nav_bar {
	// position: relative;
	// top: 0;
	padding: 16px 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: all 0.4s;
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bar {
		button {
			background-color: transparent;
			border: none;
			transition: 0.3s;
			border-radius: 10px;
			padding: 6px 20px 0px 20px;

			a {
				padding-bottom: 8px;
				display: block;
				position: relative;
				color: #78909c;
				span {
					position: absolute;
					bottom: 2px;
					left: 50%;
					right: 0;
					height: 2px;
					width: 100%;
					width: 0;
					background-color: #78909c;
					transition: 0.3s;
				}
			}
		}
		button:hover {
			background-color: #efefef;
			a {
				span {
					width: 100%;
					left: 0;
					bottom: 0;
				}
			}
		}
		button:active {
			background-color: #78909c;
		}
	}
}
// 占位
.occupy {
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	margin-top: 50px;
	.text {
		width: 60%;
		background: #000;
		opacity: 0.6;
		color: #fff;
		padding: 30px;
		box-sizing: border-box;
		border-radius: 10px;
		font-size: 16px;
		line-height: 2em;
	}
	i {
		font-size: 50px;
		color: #78909c;
		cursor: pointer;
		margin-top: 20px;
		transform: scale(1);
		transition: all 0.3s;
	}
	i:hover {
		color: #fff;
		transform: scale(1.4);
	}
}
// 内容
.container {
	background-color: #fff;
	// opacity: 0.6;
	border-radius: 10px;
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
				p {
					margin: 4px;
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
		.card:hover {
			box-shadow: #78909c 0px 0px 10px;
			transform: scale(1);
		}
	}
}

.container:hover {
	// opacity: 0.8;
}
// 底部
footer {
	height: 200px;
	margin-top: 40px;
	background: linear-gradient(200deg, #e3eeff, #f3e7e9);

	.footer {
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		div {
			margin: 10px 0;
		}
		.link {
			span {
				margin: 0 20px;
				cursor: pointer;
				padding: 0 0 4px 0;
				position: relative;
				a {
					color: #78909c;
				}
			}
			span::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 50%;
				height: 1px;
				width: 0;
				background: #78909c;
				transition: all 0.3s;
			}
			span:hover::after {
				width: 100%;
				left: 0;
			}
		}

		.prepare {
			display: flex;
			justify-content: center;
			span {
				cursor: pointer;
				padding: 0 0 2px 0;
				position: relative;
				a {
					color: #78909c;
				}
			}
			span::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 50%;
				height: 1px;
				width: 0;
				background: #78909c;
				transition: all 0.3s;
			}
			span:hover::after {
				width: 100%;
				left: 0;
			}
			span:nth-child(2) {
				margin-left: 20px;
			}
		}
		.thank {
			margin: 0;
			span {
				padding: 0 0 2px 0;
				position: relative;
				color: #78909c;
			}
		}
	}
}
</style>
