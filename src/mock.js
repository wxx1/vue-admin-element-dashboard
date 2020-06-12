//使用mock模拟数据

import Mock from 'mockjs' //引入mockjs

const Random = Mock.Random //获取mock.Random对象

/**
 * 
 */
const userList = function(){
    let userList = []
    for(let i = 0; i < 10; i++){
        let userObject = {
            userid: i+1,
            name: Random.cname(),
            gender: Random.string('01',1,1),
            phone: Random.string('number',8,11),
            fullTime: Random.boolean(),
            birth: Random.date(),
            mail:Random.email()
        }
        newList.push(userObject);
    }
    return userList;
}

/**
 * 课程表模拟数据
 */
const timeTableEvents = function(){
    let events = [];
    for(let i = 0; i < 10; i++){
        let eventsObject = {
            title: Random.title(),
            date: Random.now(),
            start: Random.time(),
            end: Random.time()
        }
        events.push(eventsObject);
    }
    return events;
}

//请求url，就可以返回newsList
Mock.mock('/mock/userList', userList)
//请求课表url
Mock.mock('/mock/timeTable', timeTableEvents)