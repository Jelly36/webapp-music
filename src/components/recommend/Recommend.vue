<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="banner.length" class="slider-wrapper">
        <slider>
          <div v-for="(item, index) in banner" :key="index">
            <a href="">
              <img :src="item.pic" alt />
            </a>
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-container {
  height: 230px;
}
</style>
<script>
import { getBanner } from 'api/recommend'
import Slider from 'base/slider/Slider'
import { ERR_OK } from 'utils/config'
export default {
  name: 'Recommend',
  data () {
    return {
      banner: []
    }
  },
  computed: {},
  created () {
    this._getBanner()
  },
  components: {
    Slider
  },
  methods: {
    _getBanner () {
      getBanner().then(res => {
        console.log(res,res.status,ERR_OK)
        if (res.status === ERR_OK) {
          this.banner=res.data.banners.slice(3)
          // this.banner = res.data.banners
          console.log(res)
        }
      })
    }
  }
}
</script>
