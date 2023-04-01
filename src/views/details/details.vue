<template>
	<div id="app">内容详情{{ getOne }}</div>
</template>
<script>
import { getApi, getByIdApi } from "@/api/api.js";

export default {
	data() {
		return {
			id: -1,
			getOne: {},
		};
	},
	methods: {
		async getData() {
			const { data: res } = await getByIdApi(this.id);
			// console.log(res);
			this.getOne = res.data;
		},
	},
	mounted() {
		this.id = this.$route.query.id;
		this.getData();
	},
};
</script>