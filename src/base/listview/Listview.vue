<!--  -->
<template>
  <Scroll class="listview" ref="scroll" :data="data">
    <ul>
      <li class="list-group" v-for="(group, index) in data" :key="index">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li class="list-group-item" v-for="(item, index) in group.items" :key="index">
              <img :src="item.avatar" alt="" class="avatar" @load="imgLoadSuccess">
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li class="item"></li>
      </ul>
    </div>
  </Scroll>
</template>

<style scoped lang="less">
@import '~common/less/variable.less';
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
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 200px 0;
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
    return {};
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  mounted() {
    console.log(this.data)
  },
  methods: {
    imgLoadSuccess() {

      this.$refs.scroll.refresh()
    }
  }
};
</script>