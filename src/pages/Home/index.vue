<template>
  <div>
    <!--  三级联动全局组件已经注册为全局组件，因此不需要引入-->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor,index) in floorList" :key="floor.key" :list="floor"/>
   
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    this.$store.dispatch("home/getFloorList");
    //获取用户信息
    this.$store.dispatch("user/getUserInfo")
  },
  computed: {
    ...mapState("home",["floorList"]),
  },
};
</script>

<style>
</style>