<template>
    <div class="mine">
        <van-nav-bar title="我的">
            <van-icon name="setting-o" slot="left"/>
            <van-icon name="chat-o" slot="right"/>
        </van-nav-bar>
        <div class="icon-pop"></div>
        <p class="login-name">jiangxin</p>
        <div class="order"></div>
    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style lang="stylus" scoped>
    .icon-pop
        width: 40px;
        height: 40px;
        background:url("../assets/aa.jpg") no-repeat;
        border-radius: 50%;
        margin:15px auto;
    .login-name
        font-size: 20px;
        color: #ccc;
        text-align: center;
    .order
        height: 460px;
        background: url("../assets/bb.png") no-repeat;
        margin-top: 5px;
</style>