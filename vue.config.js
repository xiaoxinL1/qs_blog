const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('postcss-pxtorem')({
//             rootValue: 37.5,
//             propList: ['']
//           })
//         ]
//       }
//     }
//   }
// }
// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('postcss-pxtorem')({ // 把px单位换算成rem单位
//             rootValue: 37.5, // vant官方使用的是37.5
//             selectorBlackList: ['vant'], // 忽略转换正则匹配项
//             propList: ['*']
//           })
//         ]
//       }
//     }
//   }
// }