<template>
    <div class="nav-header backgroundColor">
      <div class="nav-left">返回</div>
      <div class="title">主症-疾病</div>
      <div v-show="navShow" class="nav-right">继续</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      "navShow": false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.nav-header
  width 100%
  height 44px
  display flex
  align-items center
  text-align center
  .nav-left
    background:url('../assets/images/back_arrow@2x.png') no-repeat left
    background-size 10px 12px
    padding-left 12px
    margin-left 10px
    font-size 14px
    cursor pointer
  .title
    flex 1
    width 80%
  .nav-right
    background:url('../assets/images/next_arrow@2x.png') no-repeat right
    background-size 10px 12px
    padding-right 12px
    margin-right 10px
    font-size 14px
    cursor pointer
</style>
