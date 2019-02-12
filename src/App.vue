<template>
  <div id="app">
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/home">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
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
