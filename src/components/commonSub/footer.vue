<template>
    <div class="tab">
      <div class="tab-item" @click="HOME">
        <router-link :to="{path:'/home'}">
          <img :src="home" alt="" width="27" height="25">
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item" @click="HIS">
        <router-link :to="{path:'/history'}">
          <img :src="his" alt="" width="23" height="25">
          <p>记录</p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      "home": require("../../assets/images/tab_over_home@2x.png"),
      "his": require("../../assets/images/tab_his@2x.png")
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
      this.home = require("../../assets/images/tab_over_home@2x.png")
      this.his = require("../../assets/images/tab_his@2x.png")
    },
    HIS () {
      this.his = require("../../assets/images/tab_over_his@2x.png")
      this.home = require("../../assets/images/tab_home@2x.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    position absolute
    left 1px
    right 1px
    bottom 0px
    display flex
    justify-content space-around
    align-items center
    border-top 1px solid #eaeaea
    height 54px
    font-size 14px
    background-color #fff
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        line-height 16px
        &.router-link-active
          color #2CA2B4 !important
</style>
