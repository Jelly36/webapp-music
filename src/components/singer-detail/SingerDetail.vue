<!-- 歌手详情页面 -->
<template>
  <transition name="slide-fade">
    <MusicList :songs="songs" :title="title" :bg-image="bgImage"></MusicList>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { createSong } from "utils/song";
import { ERR_OK } from "utils/config";
import MusicList from "components/music-list/Music-List";
export default {
  data() {
    return {
      val: "jdlgjdgj",
      songs: []
    };
  },

  components: {
    MusicList
  },

  computed: {
    ...mapGetters(["singer"]),
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    }
  },
  created() {
    this._getSingerDetail();
  },

  methods: {
    _getSingerDetail() {
      if (!this.singer.id) {
        this.$router.push("/Singer");
        return;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.status === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.hotSongs);
        }
        console.log(res);
      });
    },
    _normalizeSongs(list) {
      console.log(list);
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    }
  }
};
</script>
<style lang='less' scoped>
@import "~common/less/variable";
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  transform: translate3D(100%, 0, 0);
}
</style>
