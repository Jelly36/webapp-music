<!--  -->
<template>
  <div class="music-list">
    <div class="header" ref="header">
      <div class="back">
        <i class="iconfont icon-fanhui"></i>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <div class="singerImg" :style="bgStyle">
      <h3>ldgj</h3>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
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
  components: {},

  computed: {
    bgStyle() {
      return `background:url(${this.bgImage}) no-repeat center top;background-size:cover`
    }
  },

  methods: {}
}

</script>
<style lang='less' scoped>
@import '~common/less/variable';

.music-list{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @color-background;
  .header{
    position: absolute;
    height: 44px;
    // background:chocolate;
    top:0;
    left:0;
    right:0;
    .back{
      position: absolute;
      top:0;
      left:3px;
      .iconfont{
        font-size:30px;
        color:#fff;
        line-height: 44px;
      }
      
    }
  }
  .singerImg{
    position: absolute;
    width:100%;
    height: 0;
    padding-top:75%;
    // background: url("http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg") no-repeat;
    background-position: center top;
    background-size: cover;
    z-index:-99
  }
}
.bg-image{
  height: 400px;
}
</style>