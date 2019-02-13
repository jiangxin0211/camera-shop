<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="stylus">
.footer-bar
  display: flex
  position: fixed
  bottom: 0
  left: 0
  right: 0
  height: 1rem
  background: #eee
  line-height 1rem
  .footer-bar-item
    flex-grow: 1
    text-align: center
</style>
