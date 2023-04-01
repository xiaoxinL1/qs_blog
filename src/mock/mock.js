import Mock from "mockjs";

/***
 * 接口拦截 并返回数据
 */

const list = Mock.mock({
    "list|10": [
        {
            "id|+1": 1,
            "author": '七岁',
            "title": () => { return Mock.Random.ctitle(12) },
            "pic": () => { return Mock.Random.image("200x100") },
            "content": () => { return Mock.Random.csentence(50) },
            "time": () => { return Mock.Random.time() }
        }
    ]
})
Mock.mock('api/getList', 'get', {
    code: 200,
    ...list,
    total: list.length
})
Mock.mock(/getById/, 'get', ({ url }) => {
    // 获取？后面的参数
    const query = url.split('?')[1]
    // console.log(query)
    // 解析参数
    const queryStr = new URLSearchParams(query)
    const id = queryStr.get('id')
    return {
        code: 0,
        data: list.list.find(item => item.id === Number(id))
    }
})