
<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" class="item" :key="index">
        <div class="content">
          <div class="sort">
            <span class="order">
              {{index+1}}
            </span>
          </div>
          <div class="song-title">
            <h2 class="name">{{song.name}}</h2>
            <p class="desc">{{getDesc(song)}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  methods: {
    getDesc(song) {
      return `${song.singer} - ${song.album}`;
    }
  }
};
</script>
<style lang='less' scoped>
  .song-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
.name {
  font-size: 16px;
  white-space: nowrap;
  margin: 10px 0px;
}
.desc {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item {
  padding: 0 20px;
  margin-bottom: 16px;
}
.content{
  display:flex;
  flex-direction: row;
}
.item:first-child {
  // margin-top:20px;
}
.sort{
  width:30px;
  height: 100%;
  font-size:18px;
  line-height: 56px;
  .order{
    display: block;
    width:100%;
    height: 100%;
  }
}
</style>
