<template>
  <div>
    <z-header></z-header>
    <session>
      <router-view></router-view>
    </session>
  </div>
</template>
<script>
import ZHeader from "./header"
export default {
  name: 'App',
  components:{
    ZHeader,
  },
  data(){
    return {
      activeIndex:null
    }
  },
  mounted(){
    this.activeIndex=this.$route.name
  },
  methods:{
    handleSelect(key) {
        this.$router.push({name:key});
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.auto{
    width: 1000px;
    margin:0 auto;
}
</style>
