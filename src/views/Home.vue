<template>
  <div class="home">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>

    <!--轮播图-->
    <div class="carousel">
      <van-swipe :autoplay="2000">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem"
                        :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!--热门商品-->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!--热门商品-->
    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" alt>
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
export default {
  name: 'home',
  data (){
    return {
      carouselItem: [
        {
          name: 'aa',
          imgSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg'
        },
        {
          name: 'bb',
          imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg'
        },
        {
          name: 'cc',
          imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1490457979,856070595&fm=200&gp=0.jpg'
        }
      ],
      hotProducts: [
        // 热门商品
        {
          name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
          img:
                  "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
                  "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
                  "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
                  "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
                  "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   厂家直销大型花生收获机 地下薯类挖收机",
          img:
                  "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   地瓜土豆杀秧机",
          img:
                  "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   地瓜杀秧机",
          img:
                  "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   自走式大型花生去秧机 花生除秧自动装袋机",
          img:
                  "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2582",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   高效省人工花生摘果机 全新多功能去秧机",
          img:
                  "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2581",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   河北邢台花生摘果机 自动装袋脱果机图片",
          img:
                  "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
          price: "2580",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   大型花生收获机规格 链条式方便花生挖果机",
          img:
                  "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
          price: "3260",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
                  "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   牵引式苞米杆打包机生产定制",
          img:
                  "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
          price: "面议",
          company: "  曲阜四达机械设备有限公",
          city: "济宁市"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      // 推荐商品
      varietyItem: [],
      // varietyItem: [
      //   {
      //     name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
      //     img:
      //       "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
      //     price: "3260",
      //     company: "  曲阜市润众机械制造有限",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
      //     img:
      //       "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
      //     price: "3260",
      //     company: "  曲阜市润众机械制造有限",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
      //     img:
      //       "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
      //     price: "2800",
      //     company: "  曲阜市润众机械制造有限",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   高港区手扶车带动土豆收获机收山芋机器",
      //     img:
      //       "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
      //     price: "1900",
      //     company: "  山东曲阜宏燊工贸有限公",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
      //     img:
      //       "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
      //     price: "3260",
      //     company: "  曲阜市润众机械制造有限",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   厂家直销大型花生收获机 地下薯类挖收机",
      //     img:
      //       "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
      //     price: "2800",
      //     company: "  曲阜市润众机械制造有限",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   地瓜土豆杀秧机",
      //     img:
      //       "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
      //     price: "2380",
      //     company: "  曲阜市汇林机械有限公司",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   地瓜杀秧机",
      //     img:
      //       "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
      //     price: "2380",
      //     company: "  曲阜市汇林机械有限公司",
      //     city: "曲阜市"
      //   },
      //   {
      //     name: "   自走式大型花生去秧机 花生除秧自动装袋机",
      //     img:
      //       "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
      //     price: "2582",
      //     company: "  曲阜金源机械设备有限公",
      //     city: "济宁市"
      //   },
      //   {
      //     name: "   高效省人工花生摘果机 全新多功能去秧机",
      //     img:
      //       "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
      //     price: "2581",
      //     company: "  曲阜金源机械设备有限公",
      //     city: "济宁市"
      //   },
      //   {
      //     name: "   河北邢台花生摘果机 自动装袋脱果机图片",
      //     img:
      //       "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
      //     price: "2580",
      //     company: "  曲阜金源机械设备有限公",
      //     city: "济宁市"
      //   },
      //   {
      //     name: "   大型花生收获机规格 链条式方便花生挖果机",
      //     img:
      //       "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
      //     price: "3260",
      //     company: "  曲阜浩发机械有限公司",
      //     city: "济宁市"
      //   },
      //   {
      //     name: "   家用节能花生摘果机 自动装袋花生分离机",
      //     img:
      //       "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
      //     price: "3460",
      //     company: "  曲阜浩发机械有限公司",
      //     city: "济宁市"
      //   },
      //   {
      //     name: "   牵引式苞米杆打包机生产定制",
      //     img:
      //       "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
      //     price: "面议",
      //     company: "  曲阜四达机械设备有限公",
      //     city: "济宁市"
      //   }
      // ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // let dataUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250"
      let dataUrl = url.getVarietyItem
      axios.get(dataUrl).then(res => {
        console.log(res)
        this.varietyItem = res.data
      });
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus">
.home
  background: #eeeeee
  .nav-title
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 9!important
  .carousel
    height: 3rem
    margin-top: 1rem
    .carousel-item
      img
        width: 100rem
        height: 3rem
  .hot
    margin-top: 0.2rem
    background: #ffffff
    .hot-title
      height: 0.8rem
      width: 100%
      padding-left: 0.2rem
      line-height: 0.8rem
      box-sizing: border-box //怪异盒模型
    .hot-swiper
      .hot-swiper-content
        width: 2rem
        text-align center
        img
          width: 2rem
          height: 2rem
  .variety
    margin-top: 0.2rem
    text-align: center
    background-color: #fff
    margin-bottom: 1rem
    .variety-title
      height: 0.8rem
      width: 100%
      padding-left: 0.2rem
      line-height: 0.8rem
      box-sizing: border-box //怪异盒模型
    ul
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      .variety-item
        flex-basis: 45%
      img
        width: 2rem
        height: 2rem
</style>