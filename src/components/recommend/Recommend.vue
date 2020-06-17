<!--  -->
<template>
  <div></div>
</template>

<style scoped>
</style>
<script>
import { getBanner } from "api/recommend";
export default {
  name: "Recommend",
  data() {
    return {};
  },
  created(){
      this._getBanner()
  },
  methods:{
      _getBanner(){
          getBanner().then(res=>{
              console.log(res)
          })
      }
  }
};
</script>