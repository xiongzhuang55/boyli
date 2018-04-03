<template>
    <div class="boyli-wrapper">
      <img class="boyli-bg" src="./../assets/images/enter.jpg">
      <router-link :to="{path:'/checkSex'}">
        <div class="boyli-enter">
          <img src="./../assets/images/enter_btn.png" alt="">
        </div>
      </router-link>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .boyli-wrapper
    position absolute
    top 0
    left 0px
    bottom 0px
    right 0px
    text-align center
    overflow hidden
    .boyli-bg
      height 100%
    .boyli-enter
      position absolute
      bottom 20px
      left 0px
      right 0px
      height 72px
      img
        width 140px
        height 79px
</style>
