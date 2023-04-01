import originJSONP from 'jsonp'
//创建josnp函数
export function jsonp(url,data,options){
    url='https://api.btstu.cn/sjbz/api.php';
    return new Promise((resolve,reject)=>{
        originJSONP(url,options,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(data)
            }
        })
    })
}
//进行网址的拼接(encodeURIComponent()是将字符串转换成url地址)
export function param(data){
    let url=''
    for(var k in data){
        var vaule=data[k]?data[k]:''
        url+=`?${k}=${encodeURIComponent(value)}`
    }
    return url?url.substring(1):url
}