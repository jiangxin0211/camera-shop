<template>
    <div class="ajax">
        <van-button type="primary" @click="getData">获取数据</van-button>
        <van-button type="danger" @click="clearData">清除数据</van-button>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{index+1}}: {{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {
          list: []
      }
    },
    methods: {
        clearData() {
            this.list = [];
        },
        ajax () {
          // Ajax原理
          let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250";//这个URL使用了服务器代理，所以没跨域
          let xmlHttp;
          if (window.XMLHttpRequest) {
             xmlHttp = new XMLHttpRequest();
          } else {
              xmlHttp = new ActiveXObject('Microsoft.XMLHttp')
          }
          // 发送请求
          xmlHttp.open('GET', movieUrl, true);
          xmlHttp.send();
          //服务器响应：监听事件
          xmlHttp.addEventListener('readystatechange', () => {
              if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                  let obj = JSON.parse(xmlHttp.responseText);//返回的是一个字符串，用这个转换成对象
                  console.log(obj)
                  this.list = obj.subjects;
              }
          })
        },
        getData () {
            this.ajax()
        }
    }
}
</script>

<style lang="stylus">

</style>