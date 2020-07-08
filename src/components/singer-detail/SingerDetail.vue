<!-- 歌手详情页面 -->
<template>
  <div  class="singer-detail">
    <h1>fjfgjdgj{{val}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: "jdlgjdgj"
    }
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style lang='less' scoped>
@import '~common/less/variable';
.singer-detail{
  position: fixed;
  z-index: 100;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:@color-background
}
</style>