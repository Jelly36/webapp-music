<!-- 顶部导航 -->
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/Recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Singer">
      <span class="tab-link">歌手</span>
    </router-link>
  </div>
</template>

<style scoped lang="less">
@import "~common/less/variable.less";
.tab {
  display: flex;
  line-height: 44px;
  height: 44px;
  width: 100%;
  font-size: @font-size-medium;
  background: @color-theme;
  .tab-item {
    flex: 1;
    text-align: center;
    color: @color-text-lm;
    span {
      padding-bottom: 3px;
    }
    &.router-link-active {
      span {
        font-weight: bold;
        color: @color-text-l;
        border-bottom: 2px solid @color-text-l;
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {}
  }
}
</script>
