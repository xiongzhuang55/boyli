<template>
    <div class="border-1px">
      <router-view/>
      <v-footer :footerRoute="footerRoute"></v-footer>
    </div>
</template>

<script>
import vfooter from "./commonSub/footer.vue"
  export default {
    name:'Home',
    data () {
      return {
        footerRoute: ''
      }
    },
    components: {
      'v-footer': vfooter
    },
    created () {
      this.footerRoute = this.$route.name
    },
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
