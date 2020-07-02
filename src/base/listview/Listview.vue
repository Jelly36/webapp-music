<!--  -->
<template>
  <Scroll 
    class="listview"
    ref="scroll" 
    :data="data"
    :listenScroll="listenScroll"
    :probeType="probeType"
    @scroll="scroll"
  >
    <ul class="box">
      <li class="list-group" v-for="(group, index) in data" :key="index" ref="listGroup">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li class="list-group-item" v-for="(item, index) in group.items" :key="index">
              <img v-lazy="item.avatar" alt="" class="avatar" @load="imgLoadSuccess">
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutStart" @touchmove.stop.prevent="onShortcutMove">
      <ul>
        <li class="item" v-for="(item, index) in shortcutList" :key="index" :data-index="index" :class="{'current':index==currentIndex}">{{item}}</li>
      </ul>
    </div>
  </Scroll>
</template>

<style scoped lang="less">
@import '~common/less/variable.less';
.box{
  padding-bottom: 150px;
}
.listview{
  position: relative;
  overflow: hidden;
  left:0;
  width: 100%;
  background: @color-background;
  .list-group{
    .list-group-title {
      height: 20px;
      line-height: 20px;
      padding-left: 12px;
      margin-bottom: 10px;
      font-size: @font-size-small;
      color: #fff;
      background:rgba(0, 0, 0, 0.1);
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 5px 0;
      margin: 0 5px;
      border-bottom: 1px solid rgb(228, 228, 228);
      &:last-child {
        border: none;
        margin-bottom: 10px;
      }
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
      .name {
        margin-left: 20px;
        color: @color-text;
        font-size: @font-size-medium;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 3px;
    top: 40%;
    transform: translateY(-50%);
    width: 20px;
    border-radius: 3px;
    text-align: center;
    font-family:Helvetica;
    .item {
      padding: 5px 5px;
      line-height: 1;
      color: @color-text-g;
      font-size: @font-size-small;
      font-weight: bold;
      &.current {
        color: @color-theme;
      }
    }
  }
  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 20px;
      line-height: 20px;
      padding-left: 20px;
      font-size: @font-size-small;
      color: @color-text-l;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
<script>
import { getData } from "utils/dom"
import Scroll from "base/scroll/Scroll";
const ANCHOR_HEIGHT = 20

export default {
  data() {
    return {
      currentIndex: 0,
      scrollY: -1,
      listenHeight: "",
      probeType: 3
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  created() {
    this.touch = {}
    this.listenScroll = true
  },
  components: {
    Scroll
  },
  computed: { 
    shortcutList() {
      return this.data.map(item => {
        return item.title.substr(0,1)
      })
    }
  },
  mounted() {
  },
  methods: {
    imgLoadSuccess() {
      this.$refs.scroll.refresh()
    },
    scroll(position) {
      this.scrollY = position.y
    },
    onShortcutStart(e) {
      let anchorIndex = getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.currentIndex = anchorIndex
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortcutMove(e) {
      // 第一次触摸的位置
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 -  this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    _scrollTo(index) {
      this.$refs.scroll.scrollToElement(this.$refs.listGroup[index],0)
    },
    _calculateHeight() {
      console.log("计算完成")
      // 计算每个listgroup的高度
      this.listenHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listenHeight.push(height)
      for(let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listenHeight.push(height)
      }
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY(newY) {
      // 当scrollY被更新时
      let item = this.listenHeight
      console.log(item)
      for (let i = 0; i < item.length; i++) {
        let height1 = item[i]
        let height2 = item[i+1]
        if(!height2 || (-newY > height1 && -newY < height2)) {
          this.currentIndex = i
          console.log(this.currentIndex)
          return
        }
        this.currentIndex = 0
      }
    }
  }
};
</script>