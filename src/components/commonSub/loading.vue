<template>
    <div class="loading" v-if='isShow'>
      <div class="loading-mask"></div>
      <img class="loading-logo" src="../../assets/images/3.gif" alt="">
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      isShow: {
        default: true,
        type: Boolean
      }
    },
    created () {

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.loading
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  display flex
  align-items center
  justify-content center
  z-index 99999
  .loading-logo
    position absolute
    z-index 2

  .loading-mask
    width 100%
    height 100%
    position absolute
    top 0px
    left 0px
    right 0px
    bottom 0px
    background-color #000
    opacity 0.8
    z-index 1

</style>
