<!-- 歌手详情页面 -->
<template>
  <transition name="slide-fade">
    <div class="singer-detail">
      <h1>fjfgjdgj{{val}}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      val: "jdlgjdgj"
    };
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='less' scoped>
@import "~common/less/variable";
.singer-detail {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @color-background;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-leave-to{
  transform: translateX(100%);
}
</style>