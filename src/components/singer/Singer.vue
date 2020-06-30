<!--  -->
<template>
  <div class="singer">
    <Scroll ref="scroll">
      <div class="classify">
        <ul class="singer-classfiy1">
          <li class="active first">全部</li>
          <li>华语</li>
          <li>欧美</li>
          <li>日本</li>
          <li>韩国</li>
          <li>其他</li>
        </ul>
        <ul class="singer-classfiy2" v-show="showList">
          <li class="active first">全部</li>
          <li>男歌手</li>
          <li>女歌手</li>
          <li>乐队</li>
        </ul>
      </div>
      <div class="isShow">
        <i class="iconfont icon-xiala" @click="showList = true" v-show="!showList"></i>
        <i class="iconfont icon-shangla" @click="showList = !showList" v-show="showList"></i>
      </div>
    </Scroll>
  </div>
</template>

<style scoped lang="less">
@import "~common/less/variable.less";
ul {
  padding: 0;
}
.singer-classfiy1,
.singer-classfiy2 {
  display: block;
  height: 20px;
  li {
    float: left;
    margin-left: 20px;
  }
}
.isShow {
  text-align: center;
  i {
    font-size: @font-size-large-x;
  }
}
.first {
  margin-left: 0;
}
.classify {
  padding: 0 20px;
}
.active {
  color: @color-theme;
}
</style>
<script>
import Scroll from "base/scroll/Scroll";
import { getSingers } from "api/singer";
import { ERR_OK } from "utils/config";
import Singer from "utils/singer"

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
const pinyin = require('pinyin')
export default {
  name: "Recommend",
  data() {
    return {
      showList: false,
      singerType:"-1",
      area:"-1",
      rand:"",
      singer: []
    };
  },
  components: {
    Scroll
  },
  created() {
    this._getSingerList();
  },
  mounted() {
    console.log(pinyin("薛之谦", {
      style: pinyin.STYLE_FIRST_LETTER
    }))
  },
  methods: {
    _getSingerList() {
      let data = {
        type: this.singerType,
        area: this.area,
        initial: this.rand
      };
      getSingers( data ).then(res => {
        console.log(res);
        if(res.status === ERR_OK) {
          let singer = res.data.artists
          singer.map((item) => {
            let py = pinyin(item.name, {
              style: pinyin.STYLE_FIRST_LETTER
            })
            item.initial = py[0][0].toUpperCase()
          })
          this.singers = this._normalizeSingers(s)
          // this.singer = res.data.artists
        }
      });
    },
    _normalizeSingers(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          item: []
        }
      }
    //   list.forEach((item, index) => {
    //     if(index < HOT_SINGER_LEN) {
    //       map.hot.item.push(new Singer({
    //         id:item.
    //       }))
    //     }
    //   })
    }
  }
};
</script>
