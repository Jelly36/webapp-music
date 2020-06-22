<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="banner.length" class="slider-wrapper">
        <slider>
          <div v-for="(item, index) in banner" :key="index">
            <a href>
              <img :src="item.pic" alt />
            </a>
          </div>
        </slider>
      </div>
      <div class="listBox">
        <div class="listItem">
          <div class="redBack">
            <i class="iconfont icon-tuijian01"></i>
          </div>
          <span>每日推荐</span>
        </div>
        <div class="listItem">
          <div class="redBack">
            <i class="iconfont icon-paihangbang"></i>
          </div>
          <span>排行榜</span>
        </div>
        <div class="listItem">
          <div class="redBack">
            <i class="iconfont icon-tuijian"></i>
          </div>
          <span>私人FM</span>
        </div>
        <div class="listItem">
          <div class="redBack">
            <i class="iconfont icon-gedan"></i>
          </div>
          <span>歌单</span>
        </div>
      </div>
      <div class="recommend_list" ref="recommend_list">
        <h1 class="title">推荐歌单</h1>
        <ul class="wrapItem">
          <li class="item" ref="item" v-for="item in songList" :key="item.id">
            <div class="icon">
              <div class="gradients"></div>
              <img :src="item.coverImgUrl" alt />
            </div>
            <p class="play-count">
              <i class="iconfont icon-bofangsanjiaoxing"></i>
              {{Math.floor(item.playCount / 10000)||(item.playCount.toFixed(2))}}万
            </p>
            <div class="text">
              <p class="name">{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "~common/less/variable.less";

.slider-wrapper {
  // position: relative;
  // top: 10px;
  border-radius: 15px;
}
.swiper-container {
  height: 230px;
}
.slider .slider-group .slider-item img {
  border-radius: 16px;
  margin: 0 auto;
}
.listBox {
  padding-top: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
}
.listItem {
  flex: 1;

  span {
    padding-top: 6px;
    display: block;
    text-align: center;
    font-size: @font-size-small-s;
    height: 20px;
    line-height: 20px;
  }
}
.redBack {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: @color-theme;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  i {
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 46px;
  }
}
.recommend_list {
  background-color: #fff;
  .title {
    height: 60px;
    line-height: 60px;
    font-size: @font-size-medium-x;
    color: @color-text;
    padding-left: 5%;
    font-weight: bold;
    margin: 0;
  }
}
.wrapItem {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 28%;
    margin-bottom: 10px;
    img{
      display:block;
      width:100%;
      height: 100%;
    }
  }
}
</style>
<script>
import { getBanner, recommendList } from "api/recommend";
import Slider from "base/slider/Slider";
import { ERR_OK } from "utils/config";
export default {
  name: "Recommend",
  data() {
    return {
      banner: [],
      songList: []
    };
  },
  computed: {},
  created() {
    this._getBanner();
    this._getSongMeun();
  },
  mounted() {
    this.$nextTick(() => {
      this.getHeight();
    });
  },
  components: {
    Slider
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        if (res.status === ERR_OK) {
          this.banner = res.data.banners.slice(3);
        }
      });
    },
    _getSongMeun() {
      let obj = {
        order: "hot",
        limit: "15",
        offset: "",
        cat: ""
      };
      recommendList(obj).then(res => {
        if (res.status === ERR_OK) {
          this.songList = res.data.playlists;
        }
      });
    },
    getHeight() {
      this.$refs.item.style.height = this.$refs.item.clientWidth + "px";
    }
  }
};
</script>
