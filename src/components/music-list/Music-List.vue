<!--  -->
<template>
  <div class="music-list">
    <div class="header" ref="header">
      <div class="back">
        <div class="left-act" @click="returnBack">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="right-act">
          <i class="iconfont icon-fenxiang"></i>
          <i class="iconfont icon-elipsis"></i>
        </div>
      </div>
    </div>
    <Scroll
      class="list"
      ref="list"
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      @scroll="scroll"
    >
      <div>
        <div class="singerImg" :style="bgStyle" ref="bgImage">
          <h3 class="singer-name">{{title}}</h3>
        </div>
        <div class="song-list-wrapper" ref="song_list">
          <song-list :songs="songs"></song-list>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "base/scroll/Scroll";
import SongList from "base/song-list/SongList";
export default {
  data() {
    return {
      scrollY: 0
    };
  },
  props: {
    bgImage: {
      type: String,
      default: ""
    },
    songs: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    Scroll,
    SongList
  },

  computed: {
    bgStyle() {
      return `background:url(${this.bgImage}) no-repeat center top;background-size:cover`;
    }
  },
  mounted() {
    let height = this.$refs.bgImage.clientHeight;

    let newHeight = this.$refs.list.$el.clientHeight - height;
    this.$refs.song_list.style.top = height + 'px';
    // this.$refs.song_list.style.height = this.$refs.song_list.$el.clientHeight + height +'px';
  },
  methods: {
    returnBack() {
      this.$router.go(-1);
    },
    scroll(position) {
      this.scrollY = position.y;
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  watch: {}
};
</script>
<style lang='less' scoped>
@import "~common/less/variable";

.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @color-background;
  .header {
    position: absolute;
    height: 44px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .back {
      position: absolute;
      top: 0;
      left: 3px;
      width: 100%;
      .iconfont {
        font-size: 30px;
        color: #fff;
        line-height: 44px;
      }
      .left-act {
        float: left;
      }
      .right-act {
        float: right;
        .iconfont {
          margin-right: 20px;
        }
      }
    }
  }
  .bg-layer {
    position: relative;
    height: 100%;
    background-color: @color-background;
  }
  .list {
    overflow: hidden;
  }
  .singerImg {
    position: absolute;
    width: 100%;
    height: 0;
    padding-top: 62%;
    background-position: center top;
    background-size: cover;
    z-index: -99;
  }
}
.singer-name {
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.bg-image {
  height: 400px;
}
.song-list-wrapper {
  position: relative;
  padding-bottom: 233px;
}
</style>