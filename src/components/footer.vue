<template>
    <div class="tab">
      <div class="tab-item" @click="HOME">
        <router-link :to="{path:'/home'}">
          <img :src="home" alt="">
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item" @click="HIS">
        <router-link :to="{path:'/history'}">
          <img :src="his" alt="">
          <p>记录</p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      "home": require("../assets/images/tab_over_home@2x.png"),
      "his": require("../assets/images/tab_his@2x.png")
    }
  },
  props: {
    footerRoute: {
      type: String
    }
  },
  mounted () {
    if (this.footerRoute == 'History') {
      this.HIS ()
    }else this.HOME ()
  },
  methods:{
    HOME () {
      //console.log(this.$store.state.author)
      this.home = require("../assets/images/tab_over_home@2x.png")
      this.his = require("../assets/images/tab_his@2x.png")
    },
    HIS () {
      this.his = require("../assets/images/tab_over_his@2x.png")
      this.home = require("../assets/images/tab_home@2x.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    position absolute
    left 0px
    right 0px
    bottom 0px
    display flex
    justify-content space-around
    align-items center
    border-top 1px solid #ccc
    height 54px
    font-size 14px
    .tab-item
      flex 1
      height 100%
      text-align center
      padding-top 5px
      img
        width 27px
        height 25px
      & > a
        display block
        &.router-link-active
          color #2CA2B4 !important
</style>
