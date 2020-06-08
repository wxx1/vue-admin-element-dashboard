//使用mock模拟数据

import Mock from 'mockjs' //引入mockjs

const Random = Mock.Random //获取mock.Random对象

const userList = function(){
    let newList = []
    for(let i = 0; i < 10; i++){
        let newNewsObject = {
            userid: i+1,
            name: Random.cname(),
            gender: Random.string('01',1,1),
            phone: Random.string('number',8,11),
            fullTime: Random.boolean(),
            birth: Random.date(),
            mail:Random.email()
        }
        newList.push(newNewsObject)
    }
    return newList
}

//请求url，就可以返回newsList
Mock.mock('/mock/userList', userList)