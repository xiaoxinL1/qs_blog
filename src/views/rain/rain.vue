<template>
	<div class="rain">
		<div class="logo-img" @click="toIndex">
			<span class="logo-text">千 · 山</span>
		</div>
		<img class="rain-bg" :src="img" draggable="false" >

		<!-- <img class="words" src="@/static/rain/words.png" draggable="false"> -->
		<div class="words">
			<p>难熬的日子总会过去，不信你回头看看，你都已经在不知不觉中，熬过了很多苦难，很棒吧。</p>
			<p>你被黑暗敲打，恰恰说明你是光明本身。</p>
			<p>别气馁呀，你的好运正在披荆斩棘得向你跑过来哦。</p>
			<p>留着你心里的那道光吧，未来要有人靠它穿过黑暗呢。</p>
		</div>

		<ul class="option">
			<li v-for="(item, index) in rainIcon" :key="index">
				<span @click="music(index, item.active)">
					<img :src="item.on" draggable="false" v-if="item.active" />
					<img :src="item.off" draggable="false" v-else />
				</span>
				<!-- music -->
				<audio class="music" loop="loop" preload="auto">
					<source type="audio/mpeg" :src="item.music">
				</audio>
			</li>
		</ul>

		<!-- loading -->
		<div class="progress" :class="[loadingClass]">
			<div class="text" style="text-align: center;">
				<span style="width: 100%;">下雨天，换个心情</span>
			</div>
			<div class="bar">
				<span :style="`'width':${width*2}px;`"></span>
			</div>
			<div class="text">
				<span>Loading</span>
				<span>{{ parseInt(width) + '%' }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {ImageApi} from "@/api/api.js";
	import axios from "axios"
	export default {
		data() {
			return {
				rainIcon: [{
						on: require(`@/static/rain/rain_on.png`),
						off: require(`@/static/rain/rain_off.png`),
						music: require('@/static/rain/thunder.mp3'),
						active: false
					},
					{
						on: require('@/static/rain/rain2_on.png'),
						off: require('@/static/rain/rain2_off.png'),
						music: require('@/static/rain/loudThunder.mp3'),
						active: false
					},
					{
						on: require('@/static/rain/rain3_on.png'),
						off: require('@/static/rain/rain3_off.png'),
						music: require('@/static/rain/rain.mp3'),
						active: false
					}
				],
				img: null,
				width: 0,
				loadingClass: ''
			}
		},
		mounted() {
			// var timer = setInterval(() => {
			// 	this.width += 10;
			// 	if (this.width > 99) {
			// 		clearInterval(timer);
			// 		this.loadingClass = 'hide';
			// 		this.$nextTick(() => this.music(0, false))
			// 	}
			// }, 100)
			const xhr = new XMLHttpRequest()
			xhr.open('GET', '/img/rain-bg2.4b616143.gif')
			xhr.send()
			xhr.onprogress = (res) => {
				if (res.lengthComputable) {
					const result = res.loaded / res.total * 100
					this.width = result + '%'
				} else {
					this.width = '99%'
				}
			}
			
			xhr.onreadystatechange = (res) => {
				const target = res.currentTarget;
				if (target.status === 200 && target.readyState === 4) {
					setTimeout(() => {
						this.loadingClass = 'hide' 
						this.img = '/img/rain-bg2.4b616143.gif'
						this.$nextTick(() => this.music(0, false))
					}, 100)
				}
			}
		},
		methods:{
			music(type, active) {
				this.$set(this.rainIcon[type], 'active', !active)
				let music = document.getElementsByClassName("music");
				if (!active) {
					music[type].play()
				} else {
					music[type].pause()
				}
			},
			toIndex() {
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="less" scoped>
	.rain {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;

		.logo {
			color: var(--color-bg-primary);
			position: fixed;
			bottom: 20px;
			left: 30px;
			z-index: 9999;
			font-size: 30px;
			cursor: pointer;
		}

		.logo-img {
			color: var(--color-bg-primary);
			position: fixed;
			bottom: 20px;
			left: 30px;
			z-index: 9999;
			cursor: pointer;
			width: 80px;
			height: 34px;

			img {
				width: 100%;
			}
		}

		.logo-text {
			font-family: KaiTi;
			font-size: 20px;
		}

		.rain-bg {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		.words {
			position: fixed;
			top: 80px;
			right: 80px;
			width: 200px;
			color: #fff;

			p {
				font-size:15px;
				line-height: 30px;
				font-family: cursive;
				text-align: center;
			}
		}

		.option {
			width: 416px;
			height: 70px;
			position: fixed;
			bottom: 0;
			right: 0;
			text-align: center;

			li {
				display: inline-block;
				list-style-type: none;
				cursor: pointer;

				span {
					display: inline-block;
				}
			}
		}

		.progress {
			position: fixed;
			background: #fff;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);

			&.hide {
				opacity: 0;
				transform: scale(0);
				background: rgba(255, 255, 255, 0.2);
			}

			.bar {
				width: 200px;
				background: #dce4e8;
				height: 10px;
				overflow: hidden;

				span {
					background: var(--color-active);
					display: block;
					height: 100%;
					transition: all 0.06s;
				}
			}

			.text {
				display: flex;
				justify-content: space-between;
				width: 200px;
				margin-top: 8px;
				color: #66b2ff;
				text-transform: uppercase;

				span {
					font-size: 10px;
					font-weight: bold;
				}
			}
		}
	}

	@media screen and (max-width: 480px) {
		.rain {
			.rain-bg {
				position: absolute;
				left: 60%;
				top: 50%;
				transform: translate(-50%, -50%);
			}

			.words {
				top: 30%;
				left: 50%;
				right: auto;
				transform: translate(-50%, -50%);

				p {
					font-size: 14px;
				}
			}

			.option {
				width: auto;
				right: 20px;

				li {
					width: 60px;
					overflow: hidden;

					span {
						display: flex;
						justify-content: center;
					}
				}
			}

			.logo {
				left: 20px;
			}
		}
	}
</style>