<template>
    <div class="nav-header backgroundColor">
      <div v-show="headerData.navLeftButton" class="nav-left" @click="headerData.navLeftButtonFn">返回</div>
      <div class="nav-title">{{headerData.navTitle}}</div>
      <div v-show="headerData.navRightButton" class="nav-right">继续</div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    "headerData": ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.nav-header
  width 100%
  height 60px
  background-color #2CA2B4
  .nav-left
    position absolute
    top 0px
    left 0
    width 20%
    height 60px
    background:url('../assets/images/back_arrow@2x.png') no-repeat left
    background-size 12px 14px
    padding-left 14px
    margin-left 10px
    font-size 20px
    line-height 60px
    cursor pointer
  .nav-title
    width 60%
    margin-left 20%
    line-height 60px
    font-size 20px
    text-align center
  .nav-right
    position absolute
    top 0px
    right 0
    width 20%
    height 60px
    text-align right
    line-height 60px
    background:url('../assets/images/next_arrow@2x.png') no-repeat right
    background-size 12px 14px
    padding-right 14px
    margin-right 10px
    font-size 20px
    cursor pointer
</style>
