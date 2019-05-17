<template>
  <div class="profile">
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" placeholder="请输入用户名" required clearable v-model="loginUsername"></van-field>
          <van-field label="密码" type="password" placeholder="请输入密码" required clearable v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" placeholder="请输入用户名" required clearable v-model="registUsername"></van-field>
          <van-field label="密码" type="password" placeholder="请输入密码" required clearable v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <ul class="order">
      <li @click="goError">个人中心</li>
      <li @click="goError">我的订单</li>
      <li @click="goError">会员权益</li>
      <li @click="goError">积分计算</li>
      <li @click="goError">每日福利</li>
      <li @click="goError">我的地址</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js';
import { mapActions } from "vuex";
export default{
  data () {
    return {
      loginUsername: '',
      loginPassword: '',
      registUsername:  '',
      registPassword: ''
    }
  },
  methods: {
    ...mapActions(["loginAction"]),
    goError(){
      this.$toast.fail("跳转失败");
    },
    // 注册
    registHandler () {
      axios({
        url: url.registUser,
        method: 'post',
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      }).then(res => {
          if (res.data.code == 200) {// 使用===会注册失败
              this.$toast.success('注册成功')
              this.registUsername = this.registPassword = '';
          } else {
              this.$toast.fail('注册失败')
          }
          console.log(res);
      }).catch(err => {
          console.log(err);
          this.$toast.fail('注册失败')
      })
    },
    // 登录
    loginHandler() {
      axios({
        url: url.loginUser,
        method: 'post',
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      }).then(res => {
        if (res.data.code == 200) {
          // 模拟
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }).then(() => {
              this.$toast.success("登录成功");
              // 保存登录状态
              this.loginAction(res.data.userInfo);
              this.$router.go(-1);
           }).catch(err => {
              this.$toast.fail("保存登录状态失败");
              console.log(err);
            });
        } else {
          this.$toast.fail('登录失败')
        }
        console.log(res);
      }).catch(err => {
        console.log(err);
        this.$toast.fail('登录失败')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .order
    padding: 20px;
    li
      position: relative;
      padding: 10px 0 10px;
      font-size: 18px;
      color: #323233;
      border-bottom: 1px solid #ccc;
</style>
