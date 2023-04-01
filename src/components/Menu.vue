<template>
    <div class="nav" :style="`top:${isTop?'0':'-100%'};`">
        <ul class="nav-list">
            <template>
                <li  v-for="(item, index) in list" :key="index">
                    <a @click="toPage(item.url)">{{item.title}}</a>
                </li>
            </template>
        </ul>
        <div class="world">
            <span>世界各地都有不同的生活 不止是我们.</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Menu',
    props: {
        isTop:{
			type:Boolean,
			default:false
		}
    },
    data() {
        return {
            list: [
				{
					title: '首页',
					url: 'index',
				},
				{
					title: '网友文章',
					url: 'article',
				},
				{
					title: '评论故事',
					url: 'envelope',
				},
				{
					title: '听听故事',
                    url: 'subscribe',
				},
				{
					title: '看看风景',
                    url: 'message',
				},
				{
					title: "放松心情",
					url: 'rain'
				}
			],
        }
    },
    computed: {
        viewList() {
            return this.list.filter(item => {
                const type = item.url
                if (['subscribe', 'message'].includes(type)) {
                    // if (this.$store.state.data.administrator[type]) {
                    //     return item
                    // }
                } else {
                    return item
                }
            })
        }
    },
    methods: {
		toPage(url){
			// console.log();
			this.$parent.isNav = false;
			this.$router.push(`/${url}`);
		},
    }
}
</script>
<style lang="less" scoped>
.nav{
    position: fixed;
    left: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;	
    background: rgba(255, 255, 255, 0.96);
    transition: top 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    .world{
        width: 100%;
        position: absolute;
        bottom: 30px;
        display: block;
        text-align: center;
        color: #666;
        span{
            font-size: 16px;	
        }
    }
    .nav-list{
        width: 80%;
        display: block;
        text-align: center;
        margin-top: -120px;
        li{
            margin: 0 20px 20px;
            list-style: none;
            display: inline-block;
            a{
                font-size: 24px;
                cursor: pointer;
                color: #666;
                letter-spacing: 1px;
                &:hover{
                    color: #080808;
                }
            }
        }
    }
}
@media screen and (max-width: 780px){
    .nav .nav-list li a{
        font-size: 18px;
    }
}
@media screen and (max-width: 480px){
    .nav .world span{
        font-size: 14px;	
    }
}
</style>