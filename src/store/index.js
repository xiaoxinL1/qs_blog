import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		status: 'more',
		data:{}
	},
	getters: {},
	mutations: {
		loadMore(content,obj){
			content.status = obj;
			setTimeout(()=>{
				content.status = 'nomore';
				setTimeout(()=>{
					content.status = 'more';
				},1000);
			},1000);
		}
	},
	actions: {
		loadMore(content,params){
			content.commit('loadMore',params);
		}
	},
	modules: {}
})