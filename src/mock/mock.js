import Mock from 'mockjs'
// import data from './data.json'

// Mock.mock('https://www.baidu.com', {
//     data: data.list
// });
//
// Mock.mock('https://www.baidu.com',{
//     'name|2': 'jiang',
//     'age|18-35': 20// 随机数
// });
//
// Mock.mock('http://www.baidu.com/regexp', {
//     'regexp1': /[a-z][A-Z][0-9]/,
//     'regexp2': /\d{5,10}/
// });
//
// Mock.mock('http://www.baidu.com/list', {
//     'info|10-20': [
//         {
//             'index|+1': 1,
//             'name': '@first @last',
//             'id': '@integer(10000,99999)',
//             'date': '@datetime',
//             'img': '@image("200*200")',
//             'text': '@sentence(6, 22)'
//         }
//     ]
// });


let Random = Mock.Random;
let productData = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', '数码' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.jiang.com/getVarietyItem', productData);