<!--  -->
<template>
  <div class="singer">
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
      <Listview :data='singers'></Listview>
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
  margin-bottom: 0px;
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
import Singer from "utils/singer";
import Listview from 'base/listview/Listview'

const HOT_NAME = "热门";
const HOT_SINGER_LEN = 10;
const pinyin = require("pinyin");
export default {
  name: "Recommend",
  data() {
    return {
      showList: false,
      singerType: "-1",
      area: "-1",
      rand: "",
      singers: []
    };
  },
  components: {
    Scroll,
    Listview
  },
  created() {
    this._getSingerList();
  },
  mounted() {

  },
  methods: {
    _getSingerList() {
      let data = {
        type: this.singerType,
        area: this.area,
        initial: this.rand
      };
      getSingers(data).then(res => {
        console.log(res);
        if (res.status === ERR_OK) {
          let singer = res.data.artists;
          singer.map(item => {
            let py = pinyin(item.name[0], {
              style: pinyin.STYLE_FIRST_LETTER
            });
            item.initial = py[0][0].toUpperCase();
          });
          this.singers = this._normalizeSingers(singer);
        }
      });
    },
    _normalizeSingers(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          // 往热门字段添加数据
          map.hot.items.push(
            new Singer({
              id: item.id,
              name: item.name,
              img1v1Url: item.img1v1Url
            })
          );
        }

        const key = item.initial;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        // 往字母数据添加数据
        map[key].items.push(new Singer({
          id: item.id,
          name: item.name,
          img1v1Url: item.img1v1Url
        }))
      });

      let hot = []
      let ret = []
      for(const key in map) {  //拿下标
        let val = map[key]
        if(val.title.match(/[A-Z]/)) {
          ret.push(val)
        } else if(val.title == HOT_NAME) {
          hot.push(val)
        }
      }

      ret.sort((a,b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  }
};
</script>
