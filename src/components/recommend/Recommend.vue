<!--  -->
<template>
  <div class="recommend">
    <Scroll ref="scroll">
      <div class="recommend-content">
        <div v-if="banner.length" class="slider-wrapper">
          <slider>
            <div v-for="(item, index) in banner" :key="index">
              <a href>
                <img :src="item.pic" alt @load="imgLoadSuccess" />
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
                <img :src="item.picUrl" @load="imgLoad" />
              </div>
              <p class="play-count">
                <i class="iconfont icon-bofangsanjiaoxing"></i>
                {{Math.floor(item.playCount / 10000)}}万
              </p>
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="hot-song">
          <h1 class="title">推荐新音乐</h1>
          <div class="song-wrap">
            <ul class="list">
              <li class="song-item" v-for="(item, index) in newSong" :key="index">
                <div class="song-img">
                  <img :src="item.picUrl" alt="">
                </div>
                <div class="song-detail">
                  <div class="song-name">
                    <span>{{item.name}}</span>
                    <span class="singer" v-for="innerItem in item.song.artists" :key="innerItem.id">- {{innerItem.name}}</span>
                  </div>
                  <div class="song-produce">{{item.song.album.company}}</div>
                </div>
                <div class="play-icon">
                  <img src="~common/image/play.png" alt="" @load="songImgLoad">
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <div class="loading-container" v-show="(!songList.length) && (!newSong.length)">
        <Loading></Loading>
      </div>
    </Scroll>
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
    font-size: @font-size-small-x;
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
}
.title {
    height: 60px;
    line-height: 60px;
    font-size: @font-size-medium-x;
    color: @color-text;
    padding-left: 5%;
    font-weight: bold;
    margin: 0;
  }
.recommend-content{
  padding-bottom: 88px;
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
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .play-count {
      position: absolute;
      right: 4px;
      top: 2px;
      font-size: @font-size-small-x;
      color: #fff;
      margin: 0;
    }
  }
  .name {
    font-size: @font-size-medium;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.loading-container{
  position: absolute;
  width:100%;
  top:40%;
  transform: translateX(50%);
  margin-left: -12px;
}
.song-wrap{
  overflow: hidden;
}
ul{
  padding:0;
}

.song-item{
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
  .song-img{
    flex:1;
    height: 64px;
    width:64px;
    display:flex;
    align-items: center;
    justify-content: center;
    img{
      display:block;
      width:60px;
      height: 60px;
      border-radius: 4px;
    }
  }
  .song-item:last-child{
    margin-bottom: none;
  }
  .song-detail{
    flex:3;
    display:flex;
    flex-direction: column;
    .song-name{
      flex:1;
      line-height: 32px;
      overflow: hidden;
      .singer{
        color:@color-text-g;
        font-size:@font-size-medium
      }
    }
    .song-produce{
      flex:1;
      line-height:32px;
      color:@color-text-g;
      font-size:@font-size-medium;
      overflow: hidden;
    }
  }
  .play-icon{
    flex:1;
    display: flex;
    align-items: center;
    justify-content:center;
    img{
      display: block;
      height: 30px;
      width:30px;

    }
  }
}
</style>
<script>
import { getBanner, recommendList, recommendNewSong} from "api/recommend";
import Slider from "base/slider/Slider";
import Scroll from "base/scroll/Scroll";
import Loading from "base/loading/Loading"
import { ERR_OK } from "utils/config";

export default {
  name: "Recommend",
  data() {
    return {
      banner: [],
      songList: [],
      newSong: []
    };
  },
  computed: {},
  created() {
    this._getBanner();
    this._getSongMeun();
    this._getNewSong()
  },
  mounted() {
    this.$nextTick(() => {
      this.getHeight();
    });
  },
  components: {
    Slider,
    Scroll,
    Loading
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
      recommendList(9).then(res => {
                console.log(res)
        if (res.status === ERR_OK) {
          this.songList = res.data.result;
        }
      });
    },
    _getNewSong() {
      recommendNewSong().then(res => {
        if (res.data.code === ERR_OK) {
          this.newSong = res.data.result
        }
        console.log(res)
      })
    },
    getHeight() {
      this.$refs.item.style.height = this.$refs.item.clientWidth + "px";
    },
    imgLoad() {
      if (!this.checkLoad) {
        this.$refs.scroll.refresh();
        this.checkLoad = true;
      }
    },
    imgLoadSuccess() {
      if (!this.checkLoad2) {
        this.$refs.scroll.refresh();
        this.checkLoad2 = true;
      }
    },
    songImgLoad() {
      if (!this.checkLoad3) {
        this.$refs.scroll.refresh();
        this.checkLoad3 = true;
      }
    }
  }
};
</script>
