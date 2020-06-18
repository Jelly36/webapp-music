<!--  -->
<template>
  <div class="mySwiper">
    <swiper ref="mySwiper" :options="swiperOptions" v-for="item in banner" :key="item.bannerId">
      <swiper-slide v-for="item in banner" :key="item.bannerId">
        <img :src="item.pic" alt="">
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-container{
  height: 230px;
}
</style>
<script>
import { getBanner } from 'api/recommend'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Recommend',
  data () {
    return {
      banner: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  created () {
    this._getBanner()
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  methods: {
    _getBanner () {
      getBanner().then(res => {
        this.banner = res.data.banners
        console.log(res)
      })
    }
  }
}
</script>
